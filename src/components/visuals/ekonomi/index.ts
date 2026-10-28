import type { ComponentType } from "react";
import EkoComparative from "./eko-comparative";
import EkoIncentiveDiscount from "./eko-incentive-discount";
import EkoMarginal from "./eko-marginal";
import EkoOpportunityCost from "./eko-opportunity-cost";
import EkoPpf from "./eko-ppf";
import EkoMoveVsShift from "./eko-move-vs-shift";
import EkoScheduleToCurve from "./eko-schedule-to-curve";
import EkoShortageSurplus from "./eko-surplus-shortage";
import EkoSupplyDemand from "./eko-supply-demand";
import EkoElasticity from "./eko-elasticity";
import EkoElasticityTypes from "./eko-elasticity-types";
import EkoConsumerProducerSurplus from "./eko-consumer-producer-surplus";
import EkoPriceControls from "./eko-price-controls";
import EkoTaxIncidence from "./eko-tax-incidence";
import EkoCostCurves from "./eko-cost-curves";
import EkoPerfectCompetition from "./eko-perfect-competition";
import EkoMonopoly from "./eko-monopoly";
import EkoPrisonersDilemma from "./eko-prisoners-dilemma";
import EkoExternality from "./eko-externality";
import EkoMarketStructures from "./eko-market-structures";    

export const ECONOMICS_VISUALS: Record<string, ComponentType | undefined> = {
  "eko-ppf": EkoPpf,
  "eko-opportunity-cost": EkoOpportunityCost,
  "eko-marginal": EkoMarginal,
  "eko-comparative": EkoComparative,
  "eko-incentive-discount": EkoIncentiveDiscount,
  "eko-supply-demand": EkoSupplyDemand,
  "eko-move-vs-shift": EkoMoveVsShift,
  "eko-surplus-shortage": EkoShortageSurplus,
  "eko-schedule-to-curve": EkoScheduleToCurve,
  "eko-elasticity": EkoElasticity,
  "eko-elasticity-types": EkoElasticityTypes,
  "eko-consumer-producer-surplus": EkoConsumerProducerSurplus,
  "eko-price-controls": EkoPriceControls,
  "eko-tax-incidence": EkoTaxIncidence,
  "eko-cost-curves": EkoCostCurves,
    "eko-perfect-competition": EkoPerfectCompetition,
  "eko-monopoly": EkoMonopoly,
  "eko-prisoners-dilemma": EkoPrisonersDilemma,
  "eko-externality": EkoExternality,
};
