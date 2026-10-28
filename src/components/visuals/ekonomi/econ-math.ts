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
