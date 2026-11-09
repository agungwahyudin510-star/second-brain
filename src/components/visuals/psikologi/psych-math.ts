export function interactionScore(g: number, e: number) {
  return 20 + 2 * g + 2 * e + 0.4 * g * e;
}

export function agreementPercent(agreements: number, observations = 50) {
  return observations === 0 ? 0 : (agreements / observations) * 100;
}

export function selectionComparison(effect: number, selectionBias: number) {
  return {
    selfSelected: effect + selectionBias,
    randomized: effect,
  };
}

export function meanDifference(treatment: number, control: number) {
  return treatment - control;
}

export function improvementRates(improved: number, total: number, comparisonImproved: number, comparisonTotal: number) {
  const rate = total === 0 ? 0 : (improved / total) * 100;
  const comparisonRate = comparisonTotal === 0 ? 0 : (comparisonImproved / comparisonTotal) * 100;
  return {
    rate,
    comparisonRate,
    percentagePointDifference: rate - comparisonRate,
    relativeIncrease: comparisonRate === 0 ? 0 : ((rate - comparisonRate) / comparisonRate) * 100,
  };
}
