import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(repoDir, "POSTS.json");
const dest = join(outDir, "POSTS.json");
copyFileSync(src, dest);
console.log(`copied POSTS.json (${statSync(dest).size} bytes) to ${dest}`);
