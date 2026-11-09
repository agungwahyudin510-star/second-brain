import type { ComponentType } from "react";
import PsiLevels from "./psi-levels";
import PsiOperational from "./psi-operational";
import PsiNatureNurture from "./psi-nature-nurture";
import PsiCausality from "./psi-causality";
import PsiLenses from "./psi-lenses";

export const PSYCHOLOGY_VISUALS: Record<string, ComponentType> = {
  "psi-levels": PsiLevels,
  "psi-operational": PsiOperational,
  "psi-nature-nurture": PsiNatureNurture,
  "psi-causality": PsiCausality,
  "psi-lenses": PsiLenses,
};
