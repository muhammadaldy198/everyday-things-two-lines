// Line 1 is the analogy (K2/K3: one vivid sentence, one metaphor); line 2 is the honest accounting (K4: what it maps, what it leaves out — the drum drops clothes clean, the spin only wrings them dry).
// Everyday Things, Two Lines, Longer Run — entry program.
// Writes the two-line explanation to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE_1 = "A washing machine is a whirlpool in a metal drum that spins your clothes round and round until the dirt lets go.";
const LINE_2 = "It maps spinning water pulling dirt off cloth, but it leaves out the real trick — the drum mostly lifts your clothes up and drops them through soapy water, and the spin at the end only wrings them dry.";

const TEXT = LINE_1 + "\n" + LINE_2;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
chmodSync(outPath, 0o644);
