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
