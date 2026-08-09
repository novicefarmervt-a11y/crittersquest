# Valdara Answers — Critters Quest doc search

A question-answering page built on the Critters Quest documentation.

## The files

| File | What it is |
|---|---|
| `valdara-answers.html` | The page. Drop-in, no build step, no dependencies. |
| `corpus.js` | The knowledge base — 88 passages from the docs. **Must sit in the same folder as the HTML.** |
| `ingest.mjs` | Rebuilds the corpus from the live docs. `node ingest.mjs --js` |
| `api-route.ts` | The LLM-backed version, for when you outgrow keyword search. |

## Deploying it

Copy `valdara-answers.html` and `corpus.js` into the same directory on your
server and hit the HTML file. That's the whole deployment. It's a static page —
no server runtime, no API key, no database, nothing to leak. Rename the HTML to
whatever slug you want.

If your host serves from a CDN, remember to bust the cache on `corpus.js` after
you regenerate it.

## How it works today

Everything runs in the browser. The corpus is indexed on page load, and queries
are scored with a BM25-flavoured ranking across title, tags, page name and body,
with a synonym table and light stemming on top. The top five passages render as
cards, each linking back to the GitBook page it came from.

It never generates prose. It retrieves and displays what the docs actually say.
That's a deliberate constraint: this is a crypto game, and a confidently wrong
number about staking or upgrade costs is worse than no answer. If nothing scores
above threshold, the page says so rather than guessing.

## Keeping it current

```bash
node ingest.mjs --js
```

GitBook publishes an `llms.txt` index and serves every page as raw markdown
(append `.md` to any page URL), so ingestion is a plain fetch loop — no HTML
scraping, no parser to maintain. Re-run it after any patch and the site is
current again.

Note: `ingest.mjs` produces one chunk per doc page with empty `tags`. The
hand-tuned `corpus.js` shipped here has curated titles and tag lists, which
noticeably improves keyword retrieval. If you regenerate, either re-add tags or
move to the LLM version below, which doesn't need them.

## The upgrade path

`api-route.ts` is the real version: a Next.js route that puts the entire corpus
in the system prompt and lets Claude answer from it.

The full docs are roughly 60–100k tokens — small enough to fit in a single
prompt, which means **no vector database**. With prompt caching you pay for the
corpus once per five-minute window and 10% of that on every other request. A
busy page costs less than running a vector store. Revisit only if the corpus
grows past a few hundred thousand tokens.

The route ships with the parts that actually matter in production:

- **Grounding rules** — answer only from the docs, say "the docs don't cover
  that" otherwise, quote numbers exactly, never extrapolate.
- **Mandatory citations** on every answer.
- **Rate limiting**, 20 questions per IP per hour. An open chat box wired to
  your API key is otherwise someone else's free LLM. Swap the in-memory Map for
  Redis if you run more than one instance.
- **Streaming**, so answers appear as they're written.

Set `ANTHROPIC_API_KEY` server-side only. Never `NEXT_PUBLIC_`.

## Things worth knowing before this goes public

- **It's unofficial.** The disclaimer banner in the HTML says so and links to
  the real docs. Leave it in unless Critters Quest blesses the project.
- **Docs go stale.** The page shows its snapshot date. Keep that honest.
- **The demo corpus is a subset** — 88 passages covering the high-traffic
  pages (economy, PvP, buildings, gear, gacha). Run `ingest.mjs` for full
  coverage.
