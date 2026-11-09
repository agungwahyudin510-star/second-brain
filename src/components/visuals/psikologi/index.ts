import type { ComponentType } from "react";
import PsiLevels from "./psi-levels";
import PsiOperational from "./psi-operational";
import PsiNatureNurture from "./psi-nature-nurture";
import PsiCausality from "./psi-causality";
import PsiLenses from "./psi-lenses";
import PsiAttentionCost from "./psi-attention-cost";
import PsiChunking from "./psi-chunking";
import PsiForgetting from "./psi-forgetting";
import PsiCalibration from "./psi-calibration";
import PsiBaseRate from "./psi-base-rate";

export const PSYCHOLOGY_VISUALS: Record<string, ComponentType> = {
  "psi-levels": PsiLevels,
  "psi-operational": PsiOperational,
  "psi-nature-nurture": PsiNatureNurture,
  "psi-causality": PsiCausality,
  "psi-lenses": PsiLenses,
  "psi-attention-cost": PsiAttentionCost,
  "psi-chunking": PsiChunking,
  "psi-forgetting": PsiForgetting,
  "psi-calibration": PsiCalibration,
  "psi-base-rate": PsiBaseRate,
};
