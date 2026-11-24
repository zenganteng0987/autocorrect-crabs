import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Good morning Mr. Smith, my daughter is sick and won't be in school today. She has a bad case of the crabs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // best-effort: /output may already exist
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
