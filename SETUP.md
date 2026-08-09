# Setup — get it live, then make it maintain itself

Two stages. Stage 1 takes about five minutes and gets a working page up.
Stage 2 makes it update itself forever.

---

## Stage 1 — get it live

1. Create a new GitHub repo. Public or private, doesn't matter.

2. Add these files at the repo root:

   ```
   valdara-answers.html
   corpus.js
   ingest.mjs
   .github/workflows/refresh-docs.yml     ← rename refresh-docs.yml into this path
   ```

   The `.github/workflows/` folders won't exist yet. Create them. The workflow
   file **must** live at exactly that path or GitHub ignores it.

3. Connect the repo to your host:

   - **Netlify / Vercel / Cloudflare Pages** — "Import from Git", pick the repo,
     no build command, publish directory `.`. Done.
   - **cPanel / FTP** — skip this step; see the optional block at the bottom of
     the workflow file.
   - **WordPress** — different path. Upload the two files to
     `wp-content/uploads/valdara/` via the Media or File Manager, then link to
     the HTML directly. WordPress pages won't run the script tag reliably from
     inside a post editor.

4. Open the page. If you see cards with game data, you're live. If you see the
   header and nothing else, `corpus.js` isn't sitting next to the HTML — that's
   the one failure mode.

---

## Stage 2 — make it self-updating

1. In your repo: **Settings → Actions → General → Workflow permissions →
   "Read and write permissions" → Save.**

   Without this the bot can't push its own commits, and the job fails at the
   last step every single day. It's the step people miss.

2. **Actions** tab → "Refresh Critters Quest docs" → **Run workflow**. Don't
   wait for the cron; prove it works now.

3. Watch the run. Three possible outcomes, all of them fine:

   | Result | Meaning |
   |---|---|
   | "No changes. Nothing to commit." | Docs match your corpus. Working correctly. |
   | A new commit + a summary of what changed | The game got patched, your page just caught up. |
   | Exit code 2 | The docs site was down or half-broken. It refused to overwrite good data with bad. Ignore it; tomorrow's run will fix it. |

4. That's it. It runs at 11:00 UTC daily. Change the `cron:` line to whatever
   you want — it's UTC, not your local time.

---

## What the automation actually does

`ingest.mjs` reads GitBook's `llms.txt` index, fetches every page as raw
markdown, cleans out the GitBook-specific syntax, splits long pages on heading
boundaries, and derives search tags automatically.

The auto-tagging is the part that makes this work unattended. It pulls the
heading, every **bolded phrase** (the docs bold precisely the facts people search
for), table column headers, and any figure with a unit attached — `250 $QUEST`,
`72 hours`, `30%`. That gets you most of the retrieval quality of hand-written
tags with none of the maintenance.

If you ever want to hand-tune a specific page, drop a `tags-overlay.json` at the
repo root:

```json
{
  "https://critters-quest-1.gitbook.io/critters-quest-docs/how-to-play/raiding-and-pvp": [
    "how much can i steal", "griefing", "revenge raid"
  ]
}
```

Those get merged on top of the auto-tags and survive every future regeneration.

Three safeguards worth knowing about:

- **It won't churn.** No changes, no commit. Your history stays readable.
- **It won't self-destruct.** If fewer than 80% of pages fetch, it aborts rather
  than publishing a gutted corpus.
- **It tells you what changed.** `CHANGES.md` and the Actions run summary list
  exactly which pages moved. That doubles as a patch-notes tracker for the game.

---

## If you outgrow keyword search

`api-route.ts` is the LLM version — the full corpus in the system prompt, Claude
answering with citations. It needs a server runtime (Vercel/Netlify functions,
not a static host), `ANTHROPIC_API_KEY` set server-side, and the rate limiting
that's already in the file.

Same automation drives it: `docs.json` is what the route imports, and the cron
keeps that fresh too. Nothing about Stage 2 changes.
