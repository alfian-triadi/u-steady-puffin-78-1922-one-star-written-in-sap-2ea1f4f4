// One Star, Written in Sap — make.fun entry.
// Writes a single one-line 1-star review from a houseplant about its human
// owner (1–279 chars) to /output/entry.txt.
//
// Judge criteria (RULES.txt, most important first):
// 1. A one-line 1-star review by a houseplant about its human owner, with
//    the plant's own grievance at the centre.
// 2. Funnier: a real laugh through a surprising turn or a sharp plant's-eye
//    grievance, not a cute idea alone.
// 3. Sounds like a houseplant wrote it: water, light, soil, pots, repotting
//    or being moved — a plant's view, not a person in a costume.
// 4. Reads as a genuine one-star review, with a clear complaint and a reason
//    for the single star, in one line under 280 characters.
// 5. Fresh, specific detail and precise wording; no stock phrases about
//    drama queens, dramatic wilting or being ignored.
//
// The line: a plant reviews its owner like a neglected hotel guest — the
// "tough love" watering schedule, the "low-maintenance" label told to guests,
// and the punchline that it is not low-maintenance at all, just too polite
// to die in front of company. Specific, plant-eyed (water), and a genuine
// one-star complaint with its reason built in.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate from the competition kit (RULES.txt): entry.txt must be UTF-8 text
// of 1 to 279 characters, not only white space, a single line.
const MIN_ENTRY_CHARS = 1;
const MAX_ENTRY_CHARS = 279;

function validateEntry(entry: string): void {
  if (entry.length < MIN_ENTRY_CHARS || entry.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry is ${entry.length} chars, outside the ${MIN_ENTRY_CHARS}-${MAX_ENTRY_CHARS} char gate`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (/\s/.test(entry[0] ?? "") || /\s/.test(entry[entry.length - 1] ?? "")) {
    throw new Error("entry has leading or trailing whitespace");
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const LINE =
  "One star. He waters me once a month, calls it 'tough love,' and tells guests I'm low-maintenance — I'm not low-maintenance, I'm dehydrated and too polite to die in front of company.";

validateEntry(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
