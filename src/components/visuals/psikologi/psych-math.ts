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

export function effectiveFocus(interruptionsPerHour: number, recoveryMinutes: number) {
  return 60 - interruptionsPerHour * recoveryMinutes;
}

export function chunkCount(total: number, size: number) {
  return size <= 0 ? 0 : Math.ceil(total / size);
}

export function retention(initialS: number, multiplier: number, reviews: number, days: number) {
  const s = initialS * multiplier ** reviews;
  return Math.exp(-days / s) * 100;
}

export function calibrationGap(confidencePct: number, correct: number, total: number) {
  const accuracyPct = total === 0 ? 0 : (correct / total) * 100;
  return confidencePct - accuracyPct;
}

export function baseRate(
  prevalencePct: number,
  sensitivityPct: number,
  falsePositivePct: number,
  population: number
) {
  const positiveCases = population * prevalencePct / 100;
  const negativeCases = population - positiveCases;
  const truePositives = positiveCases * sensitivityPct / 100;
  const falsePositives = negativeCases * falsePositivePct / 100;
  const alerts = truePositives + falsePositives;
  return {
    positiveCases,
    negativeCases,
    truePositives,
    falsePositives,
    alerts,
    trueAlertPct: alerts === 0 ? 0 : (truePositives / alerts) * 100,
  };
}

export function appraisalIntensity(importance: number, threat: number) {
  return importance * threat / 10;
}

export function arousalAfter(initial: number, decayPct: number, hours: number) {
  return initial * (1 - decayPct / 100) ** hours;
}

export function hoursToThreshold(initial: number, decayPct: number, threshold: number) {
  if (initial <= threshold) return 0;
  if (decayPct <= 0) return Number.POSITIVE_INFINITY;
  return Math.ceil(Math.log(threshold / initial) / Math.log(1 - decayPct / 100));
}

export function suppressionOutcome(felt: number, suppressPct: number) {
  return {
    felt,
    visible: felt * (1 - suppressPct / 100),
    suppressed: felt * suppressPct / 100,
  };
}

export function criticismIntensity(importance: number, threat: number) {
  return appraisalIntensity(importance, threat);
}

export function acquisition(trials: number, alpha: number, lambda: number, v0: number) {
  let value = v0;
  const values = [value];
  for (let trial = 0; trial < trials; trial += 1) {
    value += alpha * (lambda - value);
    values.push(value);
  }
  return values;
}

export function extinction(v0: number, trials: number, alpha: number) {
  return v0 * (1 - alpha) ** trials;
}

export function ratioReinforcements(responses: number, ratio: number) {
  return ratio <= 0 ? 0 : responses / ratio;
}

export function requiredPace(target: number, done: number, daysLeft: number) {
  return daysLeft <= 0 ? 0 : Math.max(0, target - done) / daysLeft;
}

export function frictionCompletion(fGoal: number, fTemptation: number) {
  return Math.max(0, Math.min(100, 60 + 5 * (fTemptation - fGoal)));
}

export function motivationProfile(autonomy: number, competence: number, relatedness: number) {
  const needs = [
    { name: "Otonomi", score: autonomy },
    { name: "Kompetensi", score: competence },
    { name: "Keterkaitan", score: relatedness },
  ];
  return {
    average: needs.reduce((sum, need) => sum + need.score, 0) / needs.length,
    lowest: needs.reduce((lowest, need) => need.score < lowest.score ? need : lowest, needs[0]),
  };
}
