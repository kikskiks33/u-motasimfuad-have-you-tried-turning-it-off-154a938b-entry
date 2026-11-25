// Have You Tried Turning It Off? — my make.fun entry.
//
// The joke, in one breath: the support agent "escalates" your ticket to
// the senior technician, who is just him again in a different headset.
// And of course you have to start from the beginning. That's the whole
// job, really — one man, two headsets, zero answers.
//
// The program itself is deliberately boring: it just writes the line to
// /output/entry.txt. The joke does the work, not the code.

import { mkdirSync, writeFileSync } from "node:fs";

// The line. 143 characters — comfortably inside the 1-199 gate, and
// short enough that the judge reads it in one go. I tried a few
// versions (the "turn it off and on again" riffs, a hold-music one)
// and this escalation gag was the funniest of the bunch: the twist
// lands late, the agent is the butt of it, and every caller alive
// knows the dread of hearing "start from the beginning".
const punchline =
  "I've escalated your ticket to our senior technician \u2014 that's me again, but I've put on a different headset, so please start from the beginning.";

// No trailing newline on purpose: the gate counts every character in
// the file, so what lands in entry.txt is exactly the line above,
// nothing extra for the scorer to trip over.
function deliver(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

deliver(punchline);
