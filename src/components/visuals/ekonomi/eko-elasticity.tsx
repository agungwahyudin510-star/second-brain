"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { midpointElasticity } from "./econ-math";

const products = [
  { name: "Produk A", elasticity: 0.5, quantity: 100 },
  { name: "Produk B", elasticity: 1, quantity: 100 },
  { name: "Produk C", elasticity: 1.6, quantity: 100 },
];

export default function EkoElasticity() {
  const [priceIncrease, setPriceIncrease] = useState(10);
  const priceBefore = 10;
  const priceAfter = priceBefore + priceIncrease / 10;
  const results = products.map((product) => {
    const d = (priceAfter - priceBefore) / priceBefore;
    const qDrop = 2 * product.elasticity * d / (2 + d + product.elasticity * d);
    const quantityAfter = product.quantity * (1 - qDrop);
    const midpoint = midpointElasticity(priceBefore, priceAfter, product.quantity, quantityAfter);
    const revenueBefore = priceBefore * product.quantity;
    const revenueAfter = priceAfter * quantityAfter;
    const classification = midpoint.elasticity > 1.01
      ? "elastis"
      : midpoint.elasticity < 0.99 ? "inelastis" : "unitari";
    return { ...product, quantityAfter, midpoint, revenueBefore, revenueAfter, classification };
  });
  const maxRevenue = Math.max(...results.flatMap((result) => [result.revenueBefore, result.revenueAfter]));

  return (
    <VisualCard
      title="Elastisitas midpoint dan total penerimaan"
      caption="Tiga respons produk sepenuhnya fiktif. Harga awal 10; skala slider mengatur kenaikan harga dalam satuan yang sama."
      howToRead="Bandingkan perubahan persentase Q dengan P untuk memperoleh elastisitas midpoint. Pada batang, panjang merepresentasikan TR sebelum dan sesudah harga naik."
    >
      <label className="block text-sm text-zinc-300">
        Kenaikan harga: {priceIncrease}% dari harga awal
        <input aria-label="Persentase kenaikan harga untuk simulasi elastisitas" type="range" min="0" max="30" value={priceIncrease} onChange={(event) => setPriceIncrease(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
      </label>
      <div className="grid gap-3">
        {results.map((result) => (
          <div key={result.name} className="rounded-lg bg-zinc-950 p-3 text-sm">
            <p className="font-medium text-zinc-100">{result.name}: {result.classification} · E={result.midpoint.elasticity.toFixed(2)}</p>
            <p className="mt-1 text-zinc-400">%ΔQ {result.midpoint.quantityPercent.toFixed(2)}%; %ΔP {result.midpoint.pricePercent.toFixed(2)}%.</p>
            <svg viewBox="0 0 230 40" role="img" aria-label={`${result.name}: total penerimaan sebelum ${result.revenueBefore.toFixed(0)} dan sesudah ${result.revenueAfter.toFixed(0)}.`} className="mt-2 h-12 w-full">
              <text x="0" y="15" fill="#a1a1aa" fontSize="8">TR awal</text>
              <rect x="46" y="7" width={150 * result.revenueBefore / maxRevenue} height="10" rx="3" fill="#38bdf8" />
              <text x="0" y="33" fill="#a1a1aa" fontSize="8">TR akhir</text>
              <rect x="46" y="25" width={150 * result.revenueAfter / maxRevenue} height="10" rx="3" fill="#34d399" />
            </svg>
            <p aria-live="polite" className="text-amber-200">TR {result.revenueBefore.toFixed(1)} → {result.revenueAfter.toFixed(1)}.</p>
          </div>
        ))}
      </div>
    </VisualCard>
  );
}
