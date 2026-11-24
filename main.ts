import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "The ultrasound showed two heartbeats, and the doctor kept asking me, very quietly, which one was mine.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
