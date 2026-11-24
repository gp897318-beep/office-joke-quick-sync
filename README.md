# Office Joke — Quick Sync

Entry for make.fun competition
`u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232`
(Make the AI Judge Laugh: the Office Joke Open, $2 winner-take-all).

## The joke

> I accepted a meeting titled 'quick sync' and now I own a project, a deadline, and a mild sense of betrayal.

One line, 107 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: a specific office detail
("quick sync"), a payoff that lands in the last few words, a fresh twist on a
familiar setup, and no word that could be cut without loss.

## How it works

`main.ts` (Node 22, standard library only) writes the joke to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
107-character line the gate checks (1–200 characters, single line).

Run it:

```sh
node main.ts
```

It writes to `/output/entry.txt` by default, or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.
