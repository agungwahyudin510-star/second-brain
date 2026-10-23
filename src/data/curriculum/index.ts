import type { CurriculumModule, PillarSlug } from "@/lib/types";
import { EKONOMI } from "./ekonomi";
import { INGGRIS } from "./inggris";
import { WEB3 } from "./web3";
import { PSIKOLOGI } from "./psikologi";

export const CURRICULUM: Record<PillarSlug, CurriculumModule[]> = {
  ekonomi: EKONOMI,
  inggris: INGGRIS,
  web3: WEB3,
  psikologi: PSIKOLOGI,
};