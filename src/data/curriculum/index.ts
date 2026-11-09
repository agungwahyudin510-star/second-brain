import type { CurriculumModule, PillarSlug } from "@/lib/types";
import { EKONOMI } from "./ekonomi";
import { INGGRIS } from "./inggris";
import { WEB3 } from "./web3";
import { PSIKOLOGI } from "./psikologi";
import { PSIKOLOGI_V2 } from "./psikologi/index";

export const CURRICULUM: Record<PillarSlug, CurriculumModule[]> = {
  ekonomi: EKONOMI,
  inggris: INGGRIS,
  web3: WEB3,
  psikologi: [...PSIKOLOGI_V2, ...PSIKOLOGI.slice(PSIKOLOGI_V2.length)],
};