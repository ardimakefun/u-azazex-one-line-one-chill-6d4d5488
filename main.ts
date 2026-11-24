import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "The ultrasound showed two heartbeats, and the doctor kept asking me, very quietly, which one was mine.";
const LIMIT = 200;
const len = [...LINE].length;
if (len < 1 || len > LIMIT) {
  console.error(`entry length ${len} code points outside 1..${LIMIT}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
