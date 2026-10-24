import type { ComponentType } from "react";
import EkoComparative from "./eko-comparative";
import EkoMarginal from "./eko-marginal";
import EkoOpportunityCost from "./eko-opportunity-cost";
import EkoPpf from "./eko-ppf";
import EkoMoveVsShift from "./eko-move-vs-shift";
import EkoScheduleToCurve from "./eko-schedule-to-curve";
import EkoShortageSurplus from "./eko-surplus-shortage";
import EkoSupplyDemand from "./eko-supply-demand";

export const ECONOMICS_VISUALS: Record<string, ComponentType | undefined> = {
  "eko-ppf": EkoPpf,
  "eko-opportunity-cost": EkoOpportunityCost,
  "eko-marginal": EkoMarginal,
  "eko-comparative": EkoComparative,
  "eko-supply-demand": EkoSupplyDemand,
  "eko-move-vs-shift": EkoMoveVsShift,
  "eko-surplus-shortage": EkoShortageSurplus,
  "eko-schedule-to-curve": EkoScheduleToCurve,
};
