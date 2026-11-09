export function midpointElasticity(
  priceBefore: number,
  priceAfter: number,
  quantityBefore: number,
  quantityAfter: number
) {
  const priceChange = (priceAfter - priceBefore) / ((priceBefore + priceAfter) / 2);
  const quantityChange = (quantityAfter - quantityBefore) / ((quantityBefore + quantityAfter) / 2);
  return {
    pricePercent: priceChange * 100,
    quantityPercent: quantityChange * 100,
    elasticity: priceChange === 0 ? 0 : Math.abs(quantityChange / priceChange),
  };
}

export function demandAtPrice(price: number, intercept = 100, slope = 5) {
  return intercept - slope * price;
}

export function supplyAtPrice(price: number, intercept = -20, slope = 5) {
  return intercept + slope * price;
}

export function surplusAtQuantity(quantity: number, price: number) {
  const consumer = 20 * quantity - quantity ** 2 / 10 - price * quantity;
  const producer = price * quantity - 4 * quantity - quantity ** 2 / 10;
  return { consumer, producer, total: consumer + producer };
}

export function equilibriumSurplus() {
  return surplusAtQuantity(40, 12);
}

export function controlledPrice(kind: "ceiling" | "floor", level: number) {
  const quantityDemanded = demandAtPrice(level);
  const quantitySupplied = supplyAtPrice(level);
  const binding = kind === "ceiling" ? level < 12 : level > 12;
  const quantity = binding
    ? Math.max(0, Math.min(quantityDemanded, quantitySupplied))
    : 40;
  const transactionPrice = binding ? level : 12;
  const surplus = surplusAtQuantity(quantity, transactionPrice);
  return {
    quantityDemanded,
    quantitySupplied,
    quantity,
    transactionPrice,
    shortage: kind === "ceiling" && binding ? Math.max(0, quantityDemanded - quantitySupplied) : 0,
    excessSupply: kind === "floor" && binding ? Math.max(0, quantitySupplied - quantityDemanded) : 0,
    ...surplus,
    deadweightLoss: 320 - surplus.total,
    binding,
  };
}

export function taxOutcome(tax: number, demandSlope = 5) {
  const demandIntercept = 40 + 12 * demandSlope;
  const buyerPrice = (demandIntercept + 20 + 5 * tax) / (demandSlope + 5);
  const quantity = demandIntercept - demandSlope * buyerPrice;
  const sellerPrice = buyerPrice - tax;
  const consumer = (demandIntercept * quantity - quantity ** 2 / 2) / demandSlope
    - buyerPrice * quantity;
  const producer = sellerPrice * quantity - (quantity ** 2 / 2 + 20 * quantity) / 5;
  const revenue = tax * quantity;
  const noTaxSurplus = 800 / demandSlope + 160;
  return {
    buyerPrice,
    sellerPrice,
    quantity,
    buyerBurden: buyerPrice - 12,
    sellerBurden: 12 - sellerPrice,
    consumer,
    producer,
    revenue,
    deadweightLoss: noTaxSurplus - consumer - producer - revenue,
  };
}

export function costSchedule() {
  return [
    { q: 0, vc: 0, tc: 20, mc: 0, avc: 0, atc: 20, afc: 0 },
    { q: 1, vc: 10, tc: 30, mc: 10, avc: 10, atc: 30, afc: 20 },
    { q: 2, vc: 18, tc: 38, mc: 8, avc: 9, atc: 19, afc: 10 },
    { q: 3, vc: 24, tc: 44, mc: 6, avc: 8, atc: 14.67, afc: 6.67 },
    { q: 4, vc: 33, tc: 53, mc: 9, avc: 8.25, atc: 13.25, afc: 5 },
    { q: 5, vc: 47, tc: 67, mc: 14, avc: 9.4, atc: 13.4, afc: 4 },
    { q: 6, vc: 65, tc: 85, mc: 18, avc: 10.83, atc: 14.17, afc: 3.33 },
  ];
}

export function profitAtPrice(price: number, quantity: number) {
  const row = costSchedule().find((entry) => entry.q === quantity);
  if (!row) {
    return { quantity, profit: -20, totalCost: 20 };
  }
  return { quantity, profit: price * quantity - row.tc, totalCost: row.tc };
}

export function monopolyOutcomes() {
  const demand = (quantity: number) => 50 - quantity;
  const marginalRevenue = (quantity: number) => 50 - 2 * quantity;
  const marginalCost = 10;
  const quantity = 20;
  const price = demand(quantity);
  const consumerSurplus = 0.5 * quantity * (50 - price);
  const profit = (price - marginalCost) * quantity;
  const deadweightLoss = 0.5 * (40 - quantity) * (price - marginalCost);
  return {
    demand,
    marginalRevenue,
    marginalCost,
    quantity,
    price,
    consumerSurplus,
    profit,
    deadweightLoss,
  };
}

export function marketConcentration(shares: number[]) {
  const hhi = shares.reduce((sum, share) => sum + share * share, 0);
  const cr2 = shares.slice().sort((a, b) => b - a).slice(0, 2).reduce((sum, share) => sum + share, 0);
  return { hhi, cr2 };
}

export function prisonersDilemmaPayoffs() {
  return {
    payoffs: [
      { label: "A Tinggi / B Tinggi", values: [50, 50] },
      { label: "A Tinggi / B Rendah", values: [20, 70] },
      { label: "A Rendah / B Tinggi", values: [70, 20] },
      { label: "A Rendah / B Rendah", values: [30, 30] },
    ],
    dominantStrategy: "Rendah",
    nash: [30, 30],
    cooperation: [50, 50],
  };
}

export type FirmStatus = "laba" | "rugi-operasi" | "impas-tutup" | "tutup";

export function competitiveDecision(price: number) {
  const rows = costSchedule().map((row) => ({ q: row.q, profit: price * row.q - row.tc }));
  const best = rows.reduce((b, r) => (r.profit > b.profit ? r : b), rows[0]);
  const bestPositive = rows.slice(1).reduce((b, r) => (r.profit > b.profit ? r : b), rows[1]);
  let status: FirmStatus;
  if (best.profit > 0) status = "laba";
  else if (bestPositive.profit > -20) status = "rugi-operasi";
  else if (bestPositive.profit === -20) status = "impas-tutup";
  else status = "tutup";
  return { rows, best, status };
}

export type MonopolyMode = "monopoli" | "persaingan" | "diskriminasi";

export function monopolyAt(mc: number, mode: MonopolyMode) {
  const choke = 50;
  let q: number;
  if (mode === "monopoli") q = Math.max(0, (choke - mc) / 2);
  else q = Math.max(0, choke - mc);
  const p = mode === "diskriminasi" ? mc : choke - q;
  const full = Math.max(0, choke - mc);
  const price = mode === "diskriminasi" ? mc : p;
  const consumerSurplus = mode === "diskriminasi" ? 0 : 0.5 * q * (choke - p);
  const profit = mode === "persaingan" ? 0 : mode === "diskriminasi" ? 0.5 * q * (choke - mc) : (p - mc) * q;
  const total = consumerSurplus + profit;
  const efficientTotal = 0.5 * full * (choke - mc);
  return { q, price, consumerSurplus, profit, total, deadweightLoss: efficientTotal - total, efficientQ: full };
}

export function externalityOutcome(tax: number) {
  const q = 40 - 2.5 * tax;
  const buyerPrice = 20 - q / 5;
  const sellerPrice = buyerPrice - tax;
  return { q, buyerPrice, sellerPrice, revenue: tax * q, deadweightLoss: (q - 30) ** 2 / 5 };
}

export function prisonersPayoff(a: "Tinggi" | "Rendah", b: "Tinggi" | "Rendah"): [number, number] {
  if (a === "Tinggi" && b === "Tinggi") return [50, 50];
  if (a === "Tinggi" && b === "Rendah") return [20, 70];
  if (a === "Rendah" && b === "Tinggi") return [70, 20];
  return [30, 30];
}

export function valueAdded(wheatPrice = 30, flourPrice = 50, breadPrice = 100) {
  const stages = [
    { producer: "Petani", sales: wheatPrice, intermediateCost: 0 },
    { producer: "Penggiling", sales: flourPrice, intermediateCost: wheatPrice },
    { producer: "Tukang roti", sales: breadPrice, intermediateCost: flourPrice },
  ].map((stage) => ({ ...stage, valueAdded: stage.sales - stage.intermediateCost }));
  return {
    stages,
    totalSales: stages.reduce((sum, stage) => sum + stage.sales, 0),
    totalValueAdded: stages.reduce((sum, stage) => sum + stage.valueAdded, 0),
    finalGood: breadPrice,
  };
}

export function gdpExpenditure(
  consumption: number,
  investment: number,
  government: number,
  exports: number,
  imports: number,
  mode: "expenditure" | "income" = "expenditure"
) {
  const netExports = exports - imports;
  const expenditureTotal = consumption + investment + government + netExports;
  const incomeComponents = [
    { label: "Upah", value: 520 },
    { label: "Sewa", value: 50 },
    { label: "Bunga", value: 40 },
    { label: "Laba", value: 140 },
    { label: "Pajak tak langsung neto", value: 80 },
    { label: "Penyusutan", value: 100 },
  ];
  const incomeTotal = incomeComponents.reduce((sum, item) => sum + item.value, 0);
  return {
    consumption,
    investment,
    government,
    exports,
    imports,
    netExports,
    expenditureTotal,
    incomeComponents,
    incomeTotal,
    selectedTotal: mode === "income" ? incomeTotal : expenditureTotal,
  };
}

export function nominalReal(
  priceA: number,
  priceB: number,
  quantityA: number,
  quantityB: number
) {
  const nominalBase = 10 * 50 + 20 * 25;
  const nominal = priceA * quantityA + priceB * quantityB;
  const real = 10 * quantityA + 20 * quantityB;
  const deflator = nominal / real * 100;
  return {
    nominalBase,
    nominal,
    real,
    deflator,
    nominalGrowth: (nominal / nominalBase - 1) * 100,
    realGrowth: (real / nominalBase - 1) * 100,
    priceGrowth: deflator - 100,
  };
}

export function perCapitaGrowth(
  realGrowthPercent: number,
  populationGrowthPercent: number,
  gdp = 930,
  receivedFromAbroad = 30,
  paidAbroad = 50,
  measure: "PDB" | "GNI" = "PDB"
) {
  const gni = gdp + receivedFromAbroad - paidAbroad;
  const output = measure === "GNI" ? gni : gdp;
  return {
    gni,
    output,
    realGrowthPercent,
    populationGrowthPercent,
    perCapitaGrowth: ((1 + realGrowthPercent / 100) / (1 + populationGrowthPercent / 100) - 1) * 100,
  };
}

export function cycleStats(
  quarterlyGdp: number[],
  actualOutput = 950,
  potentialOutput = 1000
) {
  const changes = quarterlyGdp.map((value, index) => index === 0
    ? null
    : (value / quarterlyGdp[index - 1] - 1) * 100);
  const peakIndex = quarterlyGdp.indexOf(Math.max(...quarterlyGdp));
  const troughIndex = quarterlyGdp.indexOf(Math.min(...quarterlyGdp));
  const decliningIndices = changes
    .map((change, index) => change !== null && change < 0 ? index : -1)
    .filter((index) => index >= 0);
  let longestDecline = 0;
  let currentDecline = 0;
  for (const change of changes) {
    currentDecline = change !== null && change < 0 ? currentDecline + 1 : 0;
    longestDecline = Math.max(longestDecline, currentDecline);
  }
  return {
    changes,
    peakIndex,
    troughIndex,
    decliningIndices,
    longestDecline,
    technicalRecession: longestDecline >= 2,
    actualOutput,
    potentialOutput,
    outputGap: (actualOutput - potentialOutput) / potentialOutput * 100,
  };
}

export function cpiBasket(ricePrice = 10.5, eggPrice = 16, transportPrice = 21) {
  const fixedBasket = [
    { name: "Beras", quantity: 40, basePrice: 10, currentPrice: ricePrice },
    { name: "Telur", quantity: 20, basePrice: 15, currentPrice: eggPrice },
    { name: "Transportasi", quantity: 10, basePrice: 20, currentPrice: transportPrice },
  ].map((item) => ({
    ...item,
    baseCost: item.quantity * item.basePrice,
    currentCost: item.quantity * item.currentPrice,
  }));
  const substitutionBasket = [
    { name: "Beras", quantity: 45, basePrice: 10, currentPrice: ricePrice },
    { name: "Telur", quantity: 15, basePrice: 15, currentPrice: eggPrice },
    { name: "Transportasi", quantity: 10, basePrice: 20, currentPrice: transportPrice },
  ].map((item) => ({
    ...item,
    baseCost: item.quantity * item.basePrice,
    currentCost: item.quantity * item.currentPrice,
  }));
  const fixedBaseCost = fixedBasket.reduce((sum, item) => sum + item.baseCost, 0);
  const fixedCurrentCost = fixedBasket.reduce((sum, item) => sum + item.currentCost, 0);
  const substitutionBaseCost = substitutionBasket.reduce((sum, item) => sum + item.baseCost, 0);
  const substitutionCurrentCost = substitutionBasket.reduce((sum, item) => sum + item.currentCost, 0);
  const fixedIndex = fixedCurrentCost / fixedBaseCost * 100;
  const substitutionIndex = substitutionCurrentCost / substitutionBaseCost * 100;
  return {
    fixedBasket,
    substitutionBasket,
    fixedBaseCost,
    fixedCurrentCost,
    substitutionBaseCost,
    substitutionCurrentCost,
    fixedIndex,
    substitutionIndex,
    inflation: fixedIndex - 100,
    substitutionInflation: substitutionIndex - 100,
    indexDifference: fixedIndex - substitutionIndex,
  };
}

export function realInterest(nominalRatePercent: number, inflationPercent: number, years: number) {
  const nominalRate = nominalRatePercent / 100;
  const inflation = inflationPercent / 100;
  return {
    approximateRate: nominalRatePercent - inflationPercent,
    exactRate: ((1 + nominalRate) / (1 + inflation) - 1) * 100,
    purchasingPower: 100 / (1 + inflation) ** years,
    doublingYears: inflationPercent > 0 ? 70 / inflationPercent : null,
  };
}

export function laborStats(
  employed: number,
  unemployed: number,
  notInLaborForce: number,
  discouraged = 0
) {
  const workingAgePopulation = employed + unemployed + notInLaborForce;
  const laborForce = employed + unemployed;
  const adjustedUnemployed = Math.max(0, unemployed - discouraged);
  const adjustedLaborForce = employed + adjustedUnemployed;
  const adjustedNotInLaborForce = notInLaborForce + discouraged;
  return {
    workingAgePopulation,
    laborForce,
    employed,
    unemployed,
    notInLaborForce,
    unemploymentRate: laborForce ? unemployed / laborForce * 100 : 0,
    participationRate: workingAgePopulation ? laborForce / workingAgePopulation * 100 : 0,
    employmentPopulationRatio: workingAgePopulation ? employed / workingAgePopulation * 100 : 0,
    discouraged,
    adjustedUnemployed,
    adjustedLaborForce,
    adjustedNotInLaborForce,
    adjustedUnemploymentRate: adjustedLaborForce ? adjustedUnemployed / adjustedLaborForce * 100 : 0,
    adjustedParticipationRate: workingAgePopulation
      ? adjustedLaborForce / workingAgePopulation * 100
      : 0,
    adjustedEmploymentPopulationRatio: workingAgePopulation
      ? employed / workingAgePopulation * 100
      : 0,
  };
}

export function okunGap(unemploymentRate: number, naturalRate: number, potentialOutput = 1000) {
  const cyclicalUnemployment = unemploymentRate - naturalRate;
  const outputGapPercent = -2 * cyclicalUnemployment;
  const actualOutput = potentialOutput * (1 + outputGapPercent / 100);
  return {
    unemploymentRate,
    naturalRate,
    cyclicalUnemployment,
    outputGapPercent,
    potentialOutput,
    actualOutput,
    outputDifference: actualOutput - potentialOutput,
  };
}

export function phillipsInflation(unemploymentRate: number, expectedInflation: number, naturalRate = 5) {
  const inflation = expectedInflation - 0.5 * (unemploymentRate - naturalRate);
  const curve = Array.from({ length: 11 }, (_, index) => {
    const unemployment = 3 + index * 0.5;
    return {
      unemployment,
      inflation: expectedInflation - 0.5 * (unemployment - naturalRate),
    };
  });
  return {
    unemploymentRate,
    expectedInflation,
    naturalRate,
    inflation,
    curve,
  };
}

export function compoundGrowth(
  initialValue: number,
  firstRatePercent: number,
  secondRatePercent: number,
  years: number
) {
  const firstRate = firstRatePercent / 100;
  const secondRate = secondRatePercent / 100;
  const firstValue = initialValue * (1 + firstRate) ** years;
  const secondValue = initialValue * (1 + secondRate) ** years;
  return {
    firstValue,
    secondValue,
    ratio: firstValue === 0 ? null : secondValue / firstValue,
    firstDoublingApprox: firstRatePercent > 0 ? 70 / firstRatePercent : null,
    secondDoublingApprox: secondRatePercent > 0 ? 70 / secondRatePercent : null,
    firstDoublingExact: firstRate > 0 ? Math.log(2) / Math.log(1 + firstRate) : null,
    secondDoublingExact: secondRate > 0 ? Math.log(2) / Math.log(1 + secondRate) : null,
    path: Array.from({ length: years + 1 }, (_, year) => ({
      year,
      firstValue: initialValue * (1 + firstRate) ** year,
      secondValue: initialValue * (1 + secondRate) ** year,
    })),
  };
}

export function productionFunction(productivity: number, capital: number, labor: number) {
  const output = productivity * Math.sqrt(capital) * Math.sqrt(labor);
  const nextCapitalOutput = productivity * Math.sqrt(capital + 1) * Math.sqrt(labor);
  const curve = Array.from({ length: 16 }, (_, index) => {
    const quantity = 50 + index * 10;
    return {
      capital: quantity,
      output: productivity * Math.sqrt(quantity) * Math.sqrt(labor),
    };
  });
  return {
    productivity,
    capital,
    labor,
    output,
    outputPerWorker: output / labor,
    marginalProductCapital: nextCapitalOutput - output,
    nextCapitalOutput,
    curve,
  };
}

export function solowSteadyState(savingRate: number, depreciationRate: number) {
  const capital = (savingRate / depreciationRate) ** 2;
  const output = Math.sqrt(capital);
  const goldenCapital = (1 / (2 * depreciationRate)) ** 2;
  const goldenSavingRate = 0.5;
  return {
    savingRate,
    depreciationRate,
    capital,
    output,
    consumption: (1 - savingRate) * output,
    goldenCapital,
    goldenSavingRate,
    aboveGoldenSaving: savingRate > goldenSavingRate,
  };
}

export function solowPath(initialCapital: number, savingRate: number, depreciationRate: number, periods: number) {
  const path = [{ period: 0, capital: initialCapital, output: Math.sqrt(initialCapital) }];
  for (let period = 1; period <= periods; period += 1) {
    const previousCapital = path[period - 1].capital;
    const capital = previousCapital + savingRate * Math.sqrt(previousCapital)
      - depreciationRate * previousCapital;
    path.push({ period, capital, output: Math.sqrt(capital) });
  }
  return path;
}

export function growthAccounting(
  capitalShare: number,
  capitalGrowth: number,
  laborGrowth: number,
  technologyGrowth: number
) {
  const capitalContribution = capitalShare * capitalGrowth;
  const laborContribution = (1 - capitalShare) * laborGrowth;
  const outputGrowth = technologyGrowth + capitalContribution + laborContribution;
  return {
    capitalShare,
    capitalGrowth,
    laborGrowth,
    technologyGrowth,
    capitalContribution,
    laborContribution,
    technologyContribution: technologyGrowth,
    outputGrowth,
    outputPerWorkerGrowth: outputGrowth - laborGrowth,
    solowResidual: outputGrowth - capitalContribution - laborContribution,
  };
}

export function relativePrices(goods: number) {
  const count = Math.max(2, Math.floor(goods));
  return {
    goods: count,
    barterPrices: count * (count - 1) / 2,
    moneyPrices: count - 1,
  };
}

export function bankBalance(creditLossPercent: number, withdrawalPercent: number) {
  const reserves = 100;
  const loans = 800;
  const securities = 100;
  const deposits = 900;
  const initialCapital = 100;
  const creditLoss = loans * creditLossPercent / 100;
  const capital = initialCapital - creditLoss;
  const withdrawal = deposits * withdrawalPercent / 100;
  const liquidAssets = reserves + securities;
  const liquidityStatus = withdrawal <= reserves
    ? "covered-by-reserves"
    : withdrawal <= liquidAssets
      ? "sell-securities"
      : "illiquid";
  return {
    reserves,
    loans,
    securities,
    deposits,
    initialCapital,
    creditLossPercent,
    creditLoss,
    capital,
    assetsAfterLoss: reserves + loans - creditLoss + securities,
    capitalRatio: (reserves + loans - creditLoss + securities) > 0
      ? capital / (reserves + loans - creditLoss + securities) * 100
      : 0,
    leverage: capital > 0 ? (reserves + loans - creditLoss + securities) / capital : null,
    solvent: capital > 0,
    withdrawalPercent,
    withdrawal,
    liquidAssets,
    liquidityStatus,
  };
}

export function depositChain(initialDeposit: number, reserveRatio: number, rounds: number) {
  const reserveRate = Math.min(1, Math.max(0, reserveRatio));
  const count = Math.max(1, Math.floor(rounds));
  const deposits = [initialDeposit];
  for (let round = 1; round < count; round += 1) {
    deposits.push(deposits[round - 1] * (1 - reserveRate));
  }
  return {
    initialDeposit,
    reserveRatio: reserveRate,
    rounds: count,
    deposits,
    cumulative: deposits.reduce((sum, deposit) => sum + deposit, 0),
    simpleMultiplier: reserveRate > 0 ? 1 / reserveRate : null,
    simpleTotal: reserveRate > 0 ? initialDeposit / reserveRate : null,
  };
}

export function moneyMultiplier(reserveRatio: number, cashRatio: number) {
  const reserveRate = Math.max(0, reserveRatio);
  const cashRate = Math.max(0, cashRatio);
  const denominator = cashRate + reserveRate;
  return {
    reserveRatio: reserveRate,
    cashRatio: cashRate,
    multiplier: denominator > 0 ? (1 + cashRate) / denominator : null,
  };
}

export function quantityTheory(money: number, velocity: number, output: number) {
  const price = output > 0 ? money * velocity / output : null;
  const baselinePrice = 400 * 5 / 1000;
  return {
    money,
    velocity,
    output,
    price,
    baselinePrice,
    changePercent: price === null ? null : (price / baselinePrice - 1) * 100,
  };
}

export function taylorRate(
  inflation: number,
  outputGap: number,
  inflationTarget = 2,
  neutralRealRate = 2
) {
  const baseline = inflation + neutralRealRate;
  const inflationResponse = 0.5 * (inflation - inflationTarget);
  const outputResponse = 0.5 * outputGap;
  const unconstrainedRate = baseline + inflationResponse + outputResponse;
  return {
    inflation,
    outputGap,
    inflationTarget,
    neutralRealRate,
    baseline,
    inflationResponse,
    outputResponse,
    unconstrainedRate,
    rate: Math.max(0, unconstrainedRate),
    lowerBoundApplied: unconstrainedRate < 0,
    realRate: Math.max(0, unconstrainedRate) - inflation,
  };
}

export function aggregateDemand(shift: number, price: number) {
  return {
    shift,
    price,
    output: 1400 + shift - 200 * price,
    baseOutput: 1400 - 200 * price,
  };
}

export function adasEquilibrium(demandShift: number, supplyShift: number) {
  const price = (600 + demandShift - supplyShift) / 300;
  const output = 800 + supplyShift + 100 * price;
  const outputGap = output - 1000;
  const basePrice = 2;
  const label = outputGap > 0 && price > basePrice
    ? "Kesenjangan inflasi"
    : outputGap < 0 && price > basePrice
      ? "Stagflasi"
      : outputGap < 0
        ? "Kesenjangan resesi"
        : outputGap > 0 && price < basePrice
          ? "Pemulihan penawaran"
          : "Pada potensi";
  const longRunPrice = (1400 + demandShift - 1000) / 200;
  return {
    demandShift,
    supplyShift,
    price,
    output,
    potentialOutput: 1000,
    outputGap,
    label,
    longRunPrice,
    longRunOutput: 1000,
  };
}

export function fiscalMultipliers(mpc: number, changeGovernment = 0, changeTax = 0) {
  const propensity = Math.min(0.99, Math.max(0, mpc));
  const governmentMultiplier = 1 / (1 - propensity);
  const taxMultiplier = -propensity / (1 - propensity);
  const balancedBudgetMultiplier = governmentMultiplier + taxMultiplier;
  return {
    mpc: propensity,
    changeGovernment,
    changeTax,
    governmentMultiplier,
    taxMultiplier,
    balancedBudgetMultiplier,
    outputChange: governmentMultiplier * changeGovernment + taxMultiplier * changeTax,
  };
}

export function debtPath(
  initialDebtRatio: number,
  interestRatePercent: number,
  growthRatePercent: number,
  primaryBalancePercent: number,
  years: number
) {
  const interestRate = interestRatePercent / 100;
  const growthRate = growthRatePercent / 100;
  const path = [{ year: 0, debtRatio: initialDebtRatio }];
  for (let year = 1; year <= years; year += 1) {
    const previous = path[year - 1].debtRatio;
    const debtRatio = previous * (1 + interestRate) / (1 + growthRate) - primaryBalancePercent;
    path.push({ year, debtRatio });
  }
  const stabilizingPrimaryBalance = initialDebtRatio
    * (interestRate - growthRate) / (1 + growthRate);
  return {
    initialDebtRatio,
    interestRatePercent,
    growthRatePercent,
    primaryBalancePercent,
    years,
    path,
    finalDebtRatio: path[path.length - 1].debtRatio,
    stabilizingPrimaryBalance,
  };
}

export function stabilizationNeeds(
  actualOutput: number,
  potentialOutput = 1000,
  mpc = 0.8,
  effectivenessPercent = 100
) {
  const fiscal = fiscalMultipliers(mpc);
  const gap = potentialOutput - actualOutput;
  const effectiveness = Math.max(0.01, effectivenessPercent / 100);
  const spendingChange = gap / (fiscal.governmentMultiplier * effectiveness);
  const taxChange = gap / (fiscal.taxMultiplier * effectiveness);
  return {
    actualOutput,
    potentialOutput,
    gap,
    mpc: fiscal.mpc,
    effectivenessPercent,
    governmentMultiplier: fiscal.governmentMultiplier,
    taxMultiplier: fiscal.taxMultiplier,
    spendingChange,
    taxChange,
    taxCut: Math.max(0, -taxChange),
    tighteningRequired: gap < 0,
  };
}

export function tradeGains(worldPrice: number, demandIntercept = 100, supplyIntercept = -20, demandSlope = 5, supplySlope = 5) {
  const qd = demandIntercept - demandSlope * worldPrice;
  const qs = supplyIntercept + supplySlope * worldPrice;
  const importVolume = Math.max(0, qd - qs);
  const exportVolume = Math.max(0, qs - qd);
  const autarkyPrice = 12;
  const autarkyQuantity = 40;
  const consumerSurplus = 0.5 * qd * (demandIntercept / demandSlope - worldPrice);
  const producerSurplus = 0.5 * qs * (worldPrice - (supplyIntercept * -1 / supplySlope));
  const autarkyConsumer = 0.5 * autarkyQuantity * (demandIntercept / demandSlope - autarkyPrice);
  const autarkyProducer = 0.5 * autarkyQuantity * (autarkyPrice - 4);
  const totalSurplus = consumerSurplus + producerSurplus;
  const netGain = totalSurplus - (autarkyConsumer + autarkyProducer);
  return {
    qd,
    qs,
    importVolume,
    exportVolume,
    consumerSurplus,
    producerSurplus,
    totalSurplus,
    autarkyConsumer,
    autarkyProducer,
    autarkyTotal: autarkyConsumer + autarkyProducer,
    netGain,
  };
}

export function tariffOutcome(worldPrice: number, tariff: number) {
  const domesticPrice = worldPrice + tariff;
  const qd = 100 - 5 * domesticPrice;
  const qs = -20 + 5 * domesticPrice;
  const importVolume = Math.max(0, qd - qs);
  const revenue = tariff * importVolume;
  const consumerSurplus = 0.5 * qd * (20 - domesticPrice);
  const producerSurplus = 0.5 * qs * (domesticPrice - 4);
  const autarkyTotal = 320;
  const total = consumerSurplus + producerSurplus + revenue;
  const deadweightLoss = autarkyTotal - total;
  return {
    domesticPrice,
    qd,
    qs,
    importVolume,
    revenue,
    consumerSurplus,
    producerSurplus,
    total,
    deadweightLoss,
  };
}

export function bopIdentity(currentAccount: number, financialAccount: number, statisticalDiscrepancy = 0) {
  const balance = currentAccount + financialAccount + statisticalDiscrepancy;
  return {
    currentAccount,
    financialAccount,
    statisticalDiscrepancy,
    balance,
    residual: -balance,
  };
}

export function exchangeRateReal(nominalRate: number, domesticPrice: number, foreignPrice: number) {
  const realRate = (nominalRate * foreignPrice) / domesticPrice;
  const pppLevel = domesticPrice / foreignPrice;
  return {
    nominalRate,
    domesticPrice,
    foreignPrice,
    realRate,
    pppLevel,
    undervalued: nominalRate < pppLevel,
    overvalued: nominalRate > pppLevel,
  };
}

export function currencyRegime(regime: "floating" | "fixed" | "managed", reserves: number, capitalFlow: number, pressure: number) {
  const intervention = pressure * (regime === "fixed" ? 1 : regime === "managed" ? 0.5 : 0);
  const exchangeRateChange = pressure + capitalFlow * (regime === "floating" ? 0.9 : regime === "managed" ? 0.5 : 0.1) - reserves * 0.01;
  return {
    regime,
    reserves,
    capitalFlow,
    pressure,
    intervention,
    exchangeRateChange,
    reserveCoverage: reserves / Math.max(1, Math.abs(capitalFlow) + 1),
  };
}

export function balanceOfPaymentsFull(
  exports: number,
  imports: number,
  incomeReceived: number,
  incomePaid: number,
  transfers: number,
  capitalInflow: number
) {
  const netExports = exports - imports;
  const netPrimaryIncome = incomeReceived - incomePaid;
  const currentAccount = netExports + netPrimaryIncome + transfers;
  const discrepancy = -(currentAccount + capitalInflow);
  const consumption = 600;
  const investment = 150;
  const government = 200;
  const gdp = consumption + investment + government + netExports;
  const nationalSaving = gdp - consumption - government;
  return {
    netExports,
    netPrimaryIncome,
    currentAccount,
    financialAccount: capitalInflow,
    discrepancy,
    gdp,
    nationalSaving,
    investment,
    savingMinusInvestment: nationalSaving - investment,
  };
}

export function uipExpected(rate: number, domesticRatePercent: number, foreignRatePercent: number) {
  const expected = (rate * (1 + domesticRatePercent / 100)) / (1 + foreignRatePercent / 100);
  return { expected, changePercent: (expected / rate - 1) * 100 };
}

export function reserveRunway(reserves: number, outflowPerMonth: number) {
  return outflowPerMonth > 0 ? reserves / outflowPerMonth : null;
}

export type TrilemmaGoal = "fixed" | "capital" | "monetary";

export function trilemmaOutcome(active: TrilemmaGoal[]) {
  const all: TrilemmaGoal[] = ["fixed", "capital", "monetary"];
  const lost = all.find((goal) => !active.includes(goal));
  const text: Record<TrilemmaGoal, string> = {
    monetary: "Kurs tetap dan modal bebas berjalan, tetapi kebijakan moneter mandiri hilang: suku bunga domestik harus mengikuti suku bunga luar negeri.",
    capital: "Kurs tetap dan moneter mandiri berjalan, tetapi arus modal harus dikendalikan agar tekanan kurs tidak menguras cadangan.",
    fixed: "Moneter mandiri dan modal bebas berjalan, tetapi kurs harus mengambang dan bergerak mengikuti pasar.",
  };
  return { lost: lost ?? null, text: lost ? text[lost] : "Ketiganya tidak dapat berjalan bersamaan." };
}