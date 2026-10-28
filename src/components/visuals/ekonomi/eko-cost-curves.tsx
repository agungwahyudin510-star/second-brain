"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { costSchedule } from "./econ-math";

const x = (quantity: number) => 30 + quantity * 22;
const y = (value: number) => 140 - value * 5;

export default function EkoCostCurves() {
  const [price, setPrice] = useState(10);
  const rows = costSchedule();
  const bestOutcome = rows.reduce((best, row) => {
    const profit = price * row.q - row.tc;
    return profit > best.profit ? { q: row.q, profit, price, totalCost: row.tc } : best;
  }, { q: 0, profit: -20, price, totalCost: 20 });

  const avcPoints = rows
    .slice(1)
    .map((row) => `${x(row.q)},${y(row.avc)}`)
    .join(" ");
  const atcPoints = rows
    .slice(1)
    .map((row) => `${x(row.q)},${y(row.atc)}`)
    .join(" ");
  const mcPoints = rows
    .slice(1)
    .map((row) => `${x(row.q)},${y(row.mc)}`)
    .join(" ");

  let decision = "Netral";
  if (price < 8) {
    decision = "Shutdown";
  } else if (price >= 8) {
    decision = "Beroperasi";
  }

  return (
    <VisualCard
      title="Biaya tetap, rata-rata, dan marjinal"
      caption="Contoh biaya fiktif dengan FC=20, VC=0, 10, 18, 24, 33, 47, 65. Harga pasar berubah pada slider untuk melihat keputusan produksi dan shutdown."
      howToRead="MC memotong AVC dan ATC di titik minimum. Ketika P < AVC, keputusan terbaik jangka pendek adalah tutup; ketika P >= AVC, perusahaan tetap beroperasi sampai P = MC."
    >
      <label className="block text-sm text-zinc-300">
        Harga output: {price}
        <input aria-label="Harga output untuk simulasi biaya" type="range" min="4" max="20" value={price} onChange={(event) => setPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 210 160" role="img" aria-label={`Biaya produksi pada harga ${price}. Titik optimal Q=${bestOutcome.q} dengan laba ${bestOutcome.profit}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M20 10V130H190" fill="none" stroke="#71717a" />
        <path d="M20 130H190" fill="none" stroke="#71717a" />
        <text x="8" y="16" fill="#A1A1AA" fontSize="8">Biaya</text>
        <text x="160" y="150" fill="#A1A1AA" fontSize="8">Q</text>
        <polyline points={avcPoints} fill="none" stroke="#38BDF8" strokeWidth="2" />
        <polyline points={atcPoints} fill="none" stroke="#34D399" strokeWidth="2" />
        <polyline points={mcPoints} fill="none" stroke="#FBBF24" strokeWidth="2" />
        <line x1="20" x2="190" y1={y(price)} y2={y(price)} stroke="#F472B6" strokeDasharray="4 4" />
        <circle cx={x(bestOutcome.q)} cy={y(price)} r="4" fill="#F472B6" />
        <text x="26" y="30" fill="#38BDF8" fontSize="8">AVC</text>
        <text x="26" y="42" fill="#34D399" fontSize="8">ATC</text>
        <text x="26" y="54" fill="#FBBF24" fontSize="8">MC</text>
      </svg>
      <div className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Q optimal: <strong>{bestOutcome.q}</strong>; laba = <strong>{bestOutcome.profit}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Keputusan: {decision}.</p>
        <p className="rounded bg-zinc-950 p-3">Minimum AVC = 8 pada Q=3.</p>
        <p className="rounded bg-zinc-950 p-3">Minimum ATC = 13,25 pada Q=4.</p>
      </div>
    </VisualCard>
  );
}
