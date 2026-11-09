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
import EkoValueAdded from "./eko-value-added";
import EkoGdpExpenditure from "./eko-gdp-expenditure";
import EkoNominalReal from "./eko-nominal-real";
import EkoGdpPerCapita from "./eko-gdp-per-capita";
import EkoBusinessCycle from "./eko-business-cycle";
import EkoCpiBasket from "./eko-cpi-basket";
import EkoRealInterest from "./eko-real-interest";
import EkoUnemployment from "./eko-unemployment";
import EkoOkun from "./eko-okun";
import EkoPhillips from "./eko-phillips";
import EkoCompoundGrowth from "./eko-compound-growth";
import EkoProductionFunction from "./eko-production-function";
import EkoSolow from "./eko-solow";
import EkoGrowthAccounting from "./eko-growth-accounting";
import EkoConvergence from "./eko-convergence";
import EkoBarterMoney from "./eko-barter-money";
import EkoBankBalance from "./eko-bank-balance";
import EkoMoneyMultiplier from "./eko-money-multiplier";
import EkoQuantityTheory from "./eko-quantity-theory";
import EkoTaylorRule from "./eko-taylor-rule";
import EkoAdCurve from "./eko-ad-curve";
import EkoAdasEquilibrium from "./eko-adas-equilibrium";
import EkoKeynesianMultiplier from "./eko-keynesian-multiplier";
import EkoDebtDynamics from "./eko-debt-dynamics";
import EkoStabilizationMix from "./eko-stabilization-mix";
import EkoTradeGains from "./eko-trade-gains";
import EkoTariffEffects from "./eko-tariff-effects";
import EkoBopIdentity from "./eko-bop-identity";
import EkoExchangeRate from "./eko-exchange-rate";
import EkoCurrencyRegimes from "./eko-currency-regimes";

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
  "eko-value-added": EkoValueAdded,
  "eko-gdp-expenditure": EkoGdpExpenditure,
  "eko-nominal-real": EkoNominalReal,
  "eko-gdp-per-capita": EkoGdpPerCapita,
  "eko-business-cycle": EkoBusinessCycle,
  "eko-cpi-basket": EkoCpiBasket,
  "eko-real-interest": EkoRealInterest,
  "eko-unemployment": EkoUnemployment,
  "eko-okun": EkoOkun,
  "eko-phillips": EkoPhillips,
  "eko-compound-growth": EkoCompoundGrowth,
  "eko-production-function": EkoProductionFunction,
  "eko-solow": EkoSolow,
  "eko-growth-accounting": EkoGrowthAccounting,
  "eko-convergence": EkoConvergence,
  "eko-barter-money": EkoBarterMoney,
  "eko-bank-balance": EkoBankBalance,
  "eko-money-multiplier": EkoMoneyMultiplier,
  "eko-quantity-theory": EkoQuantityTheory,
  "eko-taylor-rule": EkoTaylorRule,
  "eko-ad-curve": EkoAdCurve,
  "eko-adas-equilibrium": EkoAdasEquilibrium,
  "eko-keynesian-multiplier": EkoKeynesianMultiplier,
  "eko-debt-dynamics": EkoDebtDynamics,
  "eko-stabilization-mix": EkoStabilizationMix,
  "eko-trade-gains": EkoTradeGains,
  "eko-tariff-effects": EkoTariffEffects,
  "eko-bop-identity": EkoBopIdentity,
  "eko-exchange-rate": EkoExchangeRate,
  "eko-currency-regimes": EkoCurrencyRegimes,
};
