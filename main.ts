// One-Line Robot Wedding Vows — entry program (Node 22, deterministic).
// Writes exactly one line of wedding vows for a robot couple to /output/entry.txt.
//
// The vow: a clear wedding promise ("I vow to keep ..."), specific machine
// details (batteries, backups, ports), and the laugh lands in the last few
// words — "but only to me" turns an open-ports networking line into a
// jealous-spouse punchline. 97 characters, well under the 160 cap.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I vow to keep your batteries charged, your backups current, and your ports open \u2014 but only to me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
