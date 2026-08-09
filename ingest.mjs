#!/usr/bin/env node
/**
 * ingest.mjs — rebuild the Critters Quest knowledge base from the live docs.
 *
 *   node ingest.mjs              # writes docs.json + corpus.js + CHANGES.md
 *   node ingest.mjs --check      # exit 1 if the docs changed, write nothing
 *
 * GitBook publishes an llms.txt index and serves every page as raw markdown
 * (append .md to any page URL), so this is a plain fetch loop — no HTML
 * scraping, no parser to maintain when they restyle the site.
 *
 * Designed to run unattended on a cron. It:
 *   - auto-derives search tags so retrieval stays good without hand-tuning
 *   - merges tags-overlay.json if present, so your curated tags survive
 *   - writes CHANGES.md listing exactly which pages changed since last run
 *   - exits 0 with no writes when nothing changed, so CI doesn't churn commits
 */

import { writeFile, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const INDEX = "https://critters-quest-1.gitbook.io/critters-quest-docs/llms.txt";
const POLITE_DELAY_MS = 250;
const MAX_CHUNK_CHARS = 4000;
const CHECK_ONLY = process.argv.includes("--check");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const sha = (s) => createHash("sha256").update(s).digest("hex").slice(0, 12);

/* ------------------------------------------------------------------ *
 * 1. index
 * ------------------------------------------------------------------ */

async function getPageList() {
  const res = await fetch(INDEX);
  if (!res.ok) throw new Error(`llms.txt returned ${res.status}`);
  const text = await res.text();

  const rx = /^-\s*\[([^\]]+)\]\((https?:\/\/[^)]+\.md)\)(?::\s*(.*))?$/gm;
  const pages = [];
  let m;
  while ((m = rx.exec(text)) !== null) {
    pages.push({ title: m[1].trim(), url: m[2].trim(), blurb: (m[3] || "").trim() });
  }
  if (!pages.length) throw new Error("index parsed to zero pages — format changed?");
  return pages;
}

/* ------------------------------------------------------------------ *
 * 2. clean + chunk
 * ------------------------------------------------------------------ */

function htmlTableToMarkdown(html) {
  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((tr) =>
      [...tr[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((cell) =>
        cell[1]
          .replace(/<[^>]+>/g, " ")
          .replace(/&#x20;/gi, " ")
          .replace(/&nbsp;/gi, " ")
          .replace(/\|/g, "\\|")
          .replace(/\s+/g, " ")
          .trim()
      )
    )
    .filter((r) => r.length);

  if (!rows.length) return "";

  const width = Math.max(...rows.map((r) => r.length));
  const pad = (r) => { const c = [...r]; while (c.length < width) c.push(""); return c; };

  let head = pad(rows[0]);
  if (head.every((c) => !c)) head = head.map((_, i) => "Column " + (i + 1));

  return [
    "| " + head.join(" | ") + " |",
    "| " + head.map(() => "---").join(" | ") + " |",
    ...rows.slice(1).map((r) => "| " + pad(r).join(" | ") + " |"),
  ].join("\n");
}

function clean(md) {
  return md
    .replace(/^>\s*For the complete documentation index[\s\S]*?\n\n/, "")
    .replace(
      /<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi,
      (_, s, b) => "\n### " + s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() + "\n" + b.trim() + "\n"
    )
    .replace(/<table[\s\S]*?<\/table>/gi, (m) => "\n" + htmlTableToMarkdown(m) + "\n")
    .replace(/<figure>[\s\S]*?<\/figure>/gi, "")
    .replace(/\{%[\s\S]*?%\}/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\(\/files\/[^)]*\)/g, "$1")
    .replace(/<\/?br\s*\/?>/gi, "\n")
    .replace(/&#x20;/gi, " ")
    .replace(/&#xNAN;/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function chunk(page, md) {
  const body = clean(md);
  if (body.length <= MAX_CHUNK_CHARS) return [{ ...page, heading: null, body }];

  const parts = body.split(/\n(?=#{2,3}\s)/);
  const out = [];
  let buf = "";
  let heading = null;

  const flush = () => { if (buf.trim()) out.push({ ...page, heading, body: buf.trim() }); buf = ""; };

  for (const part of parts) {
    if (buf.length + part.length > MAX_CHUNK_CHARS && buf) flush();
    if (!buf) heading = (part.match(/^#{2,3}\s+(.+)$/m) || [])[1] || null;
    buf += (buf ? "\n" : "") + part;
  }
  flush();
  return out;
}

/* ------------------------------------------------------------------ *
 * 3. auto-tagging
 *
 * Keyword retrieval lives or dies on tags. Rather than hand-write them
 * forever, pull the terms that actually distinguish a passage: its heading,
 * every bolded phrase (the docs bold exactly the facts people search for),
 * table column headers, and any figure with a unit attached.
 * ------------------------------------------------------------------ */

const TAG_STOP = new Set(("the a an and or of to in for on at by is are was were be been with from "
  + "this that these those it its as if then than so you your my our their there here what which "
  + "when where who why how all any each every some no not can could will would should may might "
  + "must do does did done get got has have had per each level levels value values detail details "
  + "item items name names cost costs time times type types total").split(" "));

function phrases(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9%$'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function autoTags(page, heading, body) {
  const tags = new Set();

  const add = (raw) => {
    const p = phrases(raw);
    if (!p || p.length < 2 || p.length > 40) return;
    if (TAG_STOP.has(p)) return;
    tags.add(p);
  };

  // page + heading, whole and word-by-word
  add(page);
  if (heading) add(heading);
  [page, heading || ""].forEach((s) =>
    phrases(s).split(" ").forEach((w) => { if (w.length > 2 && !TAG_STOP.has(w)) tags.add(w); })
  );

  // bolded phrases — the docs bold the answerable facts
  for (const m of body.matchAll(/\*\*([^*\n]{2,40})\*\*/g)) add(m[1]);

  // table column headers
  for (const line of body.split("\n")) {
    if (!/^\s*\|/.test(line)) continue;
    if (/^\s*\|[\s:|-]+\|\s*$/.test(line)) continue;
    line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|")
      .forEach((c) => { const t = c.trim(); if (t && t.length < 24 && /[a-z]/i.test(t)) add(t); });
  }

  // figures with units — "250 $QUEST", "72 hours", "30%"
  for (const m of body.matchAll(/\b([\d,.]+\s*(?:%|\$quest|quest|hours?|hrs?|days?|minutes?|mins?|sol))\b/gi)) {
    add(m[1]);
  }

  return [...tags].slice(0, 30);
}

/* ------------------------------------------------------------------ *
 * 4. run
 * ------------------------------------------------------------------ */

const pages = await getPageList();
console.error(`index lists ${pages.length} pages`);

const docs = [];
let ok = 0;
const failures = [];

for (const page of pages) {
  try {
    const res = await fetch(page.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();
    const htmlUrl = page.url.replace(/\.md$/, "");

    for (const c of chunk({ ...page, url: htmlUrl }, md)) {
      docs.push({
        page: c.title,
        title: c.heading || c.title,
        heading: c.heading,
        url: c.url,
        blurb: c.blurb,
        tags: autoTags(c.title, c.heading, c.body),
        body: c.body,
        hash: sha(c.body),
      });
    }
    ok++;
    process.stderr.write(".");
  } catch (err) {
    failures.push(`${page.url} — ${err.message}`);
    console.error(`\n  ! ${page.url} — ${err.message}`);
  }
  await sleep(POLITE_DELAY_MS);
}

// Refuse to publish a gutted corpus if the site was half-down.
if (ok < pages.length * 0.8) {
  console.error(`\nABORT: only ${ok}/${pages.length} pages fetched. Not overwriting a good corpus with a broken one.`);
  process.exit(2);
}

/* merge curated tags, if you keep any */
try {
  const overlay = JSON.parse(await readFile("tags-overlay.json", "utf8"));
  let merged = 0;
  for (const d of docs) {
    const extra = overlay[d.url] || overlay[d.page];
    if (extra) { d.tags = [...new Set([...d.tags, ...extra])]; merged++; }
  }
  if (merged) console.error(`\nmerged curated tags into ${merged} chunks`);
} catch { /* no overlay, fine */ }

/* ------------------------------------------------------------------ *
 * 5. diff against last run
 * ------------------------------------------------------------------ */

let previous = null;
try { previous = JSON.parse(await readFile("docs.json", "utf8")); } catch { /* first run */ }

const prevByKey = new Map((previous?.docs ?? []).map((d) => [d.url + "#" + (d.heading ?? ""), d]));
const nowByKey  = new Map(docs.map((d) => [d.url + "#" + (d.heading ?? ""), d]));

const added   = [...nowByKey.keys()].filter((k) => !prevByKey.has(k));
const removed = [...prevByKey.keys()].filter((k) => !nowByKey.has(k));
const changed = [...nowByKey.entries()]
  .filter(([k, d]) => prevByKey.has(k) && prevByKey.get(k).hash !== d.hash)
  .map(([k]) => k);

const dirty = added.length || removed.length || changed.length;

if (!dirty && previous) {
  console.error("\n\nno changes since last run — nothing written");
  process.exit(0);
}
if (CHECK_ONLY) {
  console.error(`\n\nchanges detected: +${added.length} ~${changed.length} -${removed.length}`);
  process.exit(1);
}

/* ------------------------------------------------------------------ *
 * 6. write
 * ------------------------------------------------------------------ */

const stamp = new Date().toISOString();

await writeFile("docs.json", JSON.stringify({
  source: "https://critters-quest-1.gitbook.io/critters-quest-docs/",
  fetchedAt: stamp,
  pageCount: ok,
  chunkCount: docs.length,
  docs,
}, null, 2));

const corpus =
  `/* Generated by ingest.mjs on ${stamp}. Do not edit by hand — regenerate instead. */\n` +
  `const DOCS = ${JSON.stringify(
    docs.map((d) => ({ page: d.page, url: d.url, title: d.title, tags: d.tags, body: d.body })),
    null, 1
  )};\n`;
await writeFile("corpus.js", corpus);

const label = (k) => k.replace(/^https?:\/\/[^/]+\/critters-quest-docs\//, "").replace(/#$/, "");
await writeFile("CHANGES.md",
  `# Docs changed — ${stamp.slice(0, 10)}\n\n` +
  (added.length   ? `## New (${added.length})\n`      + added.map((k)   => `- ${label(k)}`).join("\n") + "\n\n" : "") +
  (changed.length ? `## Updated (${changed.length})\n` + changed.map((k) => `- ${label(k)}`).join("\n") + "\n\n" : "") +
  (removed.length ? `## Removed (${removed.length})\n` + removed.map((k) => `- ${label(k)}`).join("\n") + "\n\n" : "") +
  (failures.length ? `## Fetch failures (${failures.length})\n` + failures.map((f) => `- ${f}`).join("\n") + "\n" : "")
);

const chars = docs.reduce((n, d) => n + d.body.length, 0);
console.error(
  `\n\n${ok}/${pages.length} pages, ${docs.length} chunks, ~${Math.round(chars / 4 / 1000)}k tokens\n` +
  `changes: +${added.length} new, ~${changed.length} updated, -${removed.length} removed\n` +
  `wrote docs.json, corpus.js, CHANGES.md\n`
);
