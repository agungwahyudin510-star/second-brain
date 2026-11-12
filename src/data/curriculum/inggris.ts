import { ENGLISH_A1 } from "./english/a1";
import { ENGLISH_A2, ENGLISH_B1, ENGLISH_B2 } from "./english/roadmaps";
import { ENGLISH_A1_V2 } from "./english/a1-v2";

export const INGGRIS = [
  ...ENGLISH_A1.map((module) => ENGLISH_A1_V2[module.id] ?? module),
  ...ENGLISH_A2,
  ...ENGLISH_B1,
  ...ENGLISH_B2,
];
