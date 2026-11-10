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
import PsiEmotionComponents from "./psi-emotion-components";
import PsiAppraisalMap from "./psi-appraisal-map";
import PsiArousalDecay from "./psi-arousal-decay";
import PsiRegulationPaths from "./psi-regulation-paths";
import PsiCriticismCase from "./psi-criticism-case";
import PsiConditioning from "./psi-conditioning";
import PsiReinforcement from "./psi-reinforcement";
import PsiMotivationNeeds from "./psi-motivation-needs";
import PsiGoalPace from "./psi-goal-pace";
import PsiHabitFriction from "./psi-habit-friction";
import PsiBoundedSearch from "./psi-bounded-search";
import PsiAnchorFrame from "./psi-anchor-frame";
import PsiProspectGamble from "./psi-prospect-gamble";
import PsiPresentBias from "./psi-present-bias";
import PsiHerdCascade from "./psi-herd-cascade";
import PsiConformityModel from "./psi-conformity-model";
import PsiAuthorityGradient from "./psi-authority-gradient";
import PsiSocialProof from "./psi-social-proof";
import PsiAttributionEvidence from "./psi-attribution-evidence";
import PsiEchoFeed from "./psi-echo-feed";
import PsiTraitSituation from "./psi-trait-situation";
import PsiBigFiveProfile from "./psi-big-five-profile";
import PsiStabilityChange from "./psi-stability-change";
import PsiTestReliability from "./psi-test-reliability";
import PsiLabelFlip from "./psi-label-flip";
import PsiClaimCheck from "./psi-claim-check";
import PsiUncertaintySample from "./psi-uncertainty-sample";
import PsiSpuriousControl from "./psi-spurious-control";
import PsiDarkPatterns from "./psi-dark-patterns";
import PsiNOf1 from "./psi-n-of-1";

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
  "psi-emotion-components": PsiEmotionComponents,
  "psi-appraisal-map": PsiAppraisalMap,
  "psi-arousal-decay": PsiArousalDecay,
  "psi-regulation-paths": PsiRegulationPaths,
  "psi-criticism-case": PsiCriticismCase,
  "psi-conditioning": PsiConditioning,
  "psi-reinforcement": PsiReinforcement,
  "psi-motivation-needs": PsiMotivationNeeds,
  "psi-goal-pace": PsiGoalPace,
  "psi-habit-friction": PsiHabitFriction,
  "psi-bounded-search": PsiBoundedSearch,
  "psi-anchor-frame": PsiAnchorFrame,
  "psi-prospect-gamble": PsiProspectGamble,
  "psi-present-bias": PsiPresentBias,
  "psi-herd-cascade": PsiHerdCascade,
  "psi-conformity-model": PsiConformityModel,
  "psi-authority-gradient": PsiAuthorityGradient,
  "psi-social-proof": PsiSocialProof,
  "psi-attribution-evidence": PsiAttributionEvidence,
  "psi-echo-feed": PsiEchoFeed,
  "psi-trait-situation": PsiTraitSituation,
  "psi-big-five-profile": PsiBigFiveProfile,
  "psi-stability-change": PsiStabilityChange,
  "psi-test-reliability": PsiTestReliability,
  "psi-label-flip": PsiLabelFlip,
  "psi-claim-check": PsiClaimCheck,
  "psi-uncertainty-sample": PsiUncertaintySample,
  "psi-spurious-control": PsiSpuriousControl,
  "psi-dark-patterns": PsiDarkPatterns,
  "psi-n-of-1": PsiNOf1,
};
