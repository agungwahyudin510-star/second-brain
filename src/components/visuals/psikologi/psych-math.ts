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

export function satisficeOutcome(values: number[], threshold: number, costPer: number) {
  const foundIndex = values.findIndex((value) => value >= threshold);
  const checked = foundIndex === -1 ? values.length : foundIndex + 1;
  const selectedIndex = foundIndex;
  const selectedValue = foundIndex === -1 ? null : values[selectedIndex];
  const cost = checked * costPer;
  return {
    selectedIndex: values.length === 0 ? -1 : selectedIndex,
    selectedValue,
    checked,
    cost,
    net: selectedValue === null ? null : selectedValue - cost,
  };
}

export function maximizeOutcome(values: number[], costPer: number) {
  const selectedIndex = values.reduce((bestIndex, value, index) => value > values[bestIndex] ? index : bestIndex, 0);
  const selectedValue = values.length === 0 ? null : values[selectedIndex];
  const checked = values.length;
  const cost = checked * costPer;
  return {
    selectedIndex: values.length === 0 ? -1 : selectedIndex,
    selectedValue,
    checked,
    cost,
    net: selectedValue === null ? null : selectedValue - cost,
  };
}

export function anchoredEstimate(own: number, anchor: number, weight: number) {
  return own + weight * (anchor - own);
}

export function gambleValue(win: number, loss: number, pWin: number, lambda: number) {
  return pWin * win - (1 - pWin) * lambda * loss;
}

export function breakEvenGain(loss: number, lambda: number, pWin: number) {
  return pWin <= 0 ? Number.POSITIVE_INFINITY : (1 - pWin) * lambda * loss / pWin;
}

export function presentValueBetaDelta(amount: number, delayMonths: number, beta: number, delta: number) {
  return amount * (delayMonths <= 0 ? 1 : beta * delta ** delayMonths);
}

export function cascade(signals: ("A" | "B")[]) {
  const decisions: ("A" | "B")[] = [];
  const ignored: boolean[] = [];
  let ignoredSignals = 0;

  signals.forEach((signal) => {
    const countA = decisions.filter((decision) => decision === "A").length;
    const countB = decisions.length - countA;
    if (countA >= 2 && countA > countB) {
      decisions.push("A");
      ignored.push(true);
      ignoredSignals += 1;
    } else if (countB >= 2 && countB > countA) {
      decisions.push("B");
      ignored.push(true);
      ignoredSignals += 1;
    } else {
      decisions.push(signal);
      ignored.push(false);
    }
  });

  return { decisions, ignored, ignoredSignals };
}

export function conformityProbability(n: number, hasAlly: boolean) {
  const baseline = Math.max(0, Math.min(60, 10 + 12 * n));
  return Math.max(0, baseline - (hasAlly ? 25 : 0));
}

export function shrunkRating(n: number, mean: number, m: number, prior: number) {
  const denominator = n + m;
  return denominator <= 0 ? prior : (n * mean + m * prior) / denominator;
}

export function consensusPct(same: number, total: number) {
  return total <= 0 ? 0 : (same / total) * 100;
}

export function echoShare(initial: number, rate: number, rounds: number) {
  const shares = [initial];
  let share = initial;
  for (let round = 0; round < rounds; round += 1) {
    share += rate * (1 - share);
    shares.push(share);
  }
  return shares;
}

export function obedienceIndex(legitimacy: number, distance: number, dissenters: number) {
  return Math.max(0, Math.min(100, 30 + 8 * legitimacy + 4 * distance - 10 * dissenters));
}
