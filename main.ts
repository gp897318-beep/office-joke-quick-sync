// office-joke-a: writes one single-line office joke to /output/entry.txt.
// Chosen from 8 distinct candidates (see comparison.md): the "quick sync"
// trap — accepting a meeting title as if it were harmless, and leaving with
// a project, a deadline, and a mild sense of betrayal.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I accepted a meeting titled 'quick sync' and now I own a project, a deadline, and a mild sense of betrayal.";

// The gate needs exactly one line of UTF-8 text, 1 to 200 characters, not
// only white space — no trailing newline, so the file is the joke alone.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry must be one line of 1-200 characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
