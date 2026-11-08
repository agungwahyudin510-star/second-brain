"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { solowPath, solowSteadyState } from "./econ-math";

const x = (capital: number, maxCapital: number) => 34 + capital / maxCapital * 194;
const y = (investment: number, maxInvestment: number) => 112 - investment / maxInvestment * 92;

export default function EkoSolow() {
  const [savingRate, setSavingRate] = useState(0.2);
  const [depreciationRate, setDepreciationRate] = useState(0.1);
  const steady = solowSteadyState(savingRate, depreciationRate);
  const maxCapital = Math.max(steady.goldenCapital * 1.5, steady.capital * 1.5, 10);
  const points = Array.from({ length: 41 }, (_, index) => {
    const capital = maxCapital * index / 40;
    return {
      capital,
      investment: savingRate * Math.sqrt(capital),
      depreciation: depreciationRate * capital,
    };
  });
  const maxInvestment = Math.max(...points.map((point) => Math.max(point.investment, point.depreciation)), 1);
  const investmentLine = points.map((point) => `${x(point.capital, maxCapital)},${y(point.investment, maxInvestment)}`).join(" ");
  const depreciationLine = points.map((point) => `${x(point.capital, maxCapital)},${y(point.depreciation, maxInvestment)}`).join(" ");
  const path = solowPath(1, savingRate, depreciationRate, 40);

  return (
    <VisualCard
      title="Investasi, penyusutan, dan keadaan mapan"
      caption="Model y=√k; garis s√k menunjukkan investasi per pekerja dan δk menunjukkan penyusutan."
      howToRead="Perpotongan investasi dan penyusutan menentukan k*. Garis putus-putus menandai keadaan mapan dan kaidah emas; ubah s atau δ untuk membandingkan stok modal serta konsumsi."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Tabungan s: {savingRate.toFixed(2)}
          <input aria-label="Tingkat tabungan model Solow" type="range" min="0.1" max="0.8" step="0.05" value={savingRate} onChange={(event) => setSavingRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Penyusutan δ: {depreciationRate.toFixed(2)}
          <input aria-label="Tingkat penyusutan modal" type="range" min="0.05" max="0.15" step="0.01" value={depreciationRate} onChange={(event) => setDepreciationRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 140" role="img" aria-label={`Investasi bertemu penyusutan pada modal mapan k ${steady.capital.toFixed(2)}; kaidah emas k ${steady.goldenCapital.toFixed(2)}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V118H238" fill="none" stroke="#71717a" />
        <text x="3" y="16" fill="#a1a1aa" fontSize="8">Arus modal</text>
        <text x="220" y="134" fill="#a1a1aa" fontSize="8">k</text>
        <polyline points={investmentLine} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={depreciationLine} fill="none" stroke="#f87171" strokeWidth="2.5" />
        <line x1={x(steady.capital, maxCapital)} x2={x(steady.capital, maxCapital)} y1="14" y2="118" stroke="#fbbf24" strokeDasharray="3 3" />
        <line x1={x(steady.goldenCapital, maxCapital)} x2={x(steady.goldenCapital, maxCapital)} y1="14" y2="118" stroke="#34d399" strokeDasharray="2 3" />
        <circle cx={x(steady.capital, maxCapital)} cy={y(depreciationRate * steady.capital, maxInvestment)} r="4" fill="#fbbf24" />
        <text x={Math.min(190, x(steady.capital, maxCapital) + 3)} y="24" fill="#fcd34d" fontSize="7">k*</text>
        <text x={Math.min(190, x(steady.goldenCapital, maxCapital) + 3)} y="34" fill="#6ee7b7" fontSize="7">kaidah emas</text>
        <text x="170" y="44" fill="#7dd3fc" fontSize="7">s√k</text>
        <text x="185" y="55" fill="#fca5a5" fontSize="7">δk</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Lintasan dari k₀=1: k₁={path[1].capital.toFixed(3)}, k₅={path[5].capital.toFixed(3)}, k₄₀={path[40].capital.toFixed(3)}.</p>
        <p className="rounded bg-zinc-950 p-3">Keadaan mapan: k*={steady.capital.toFixed(2)}; y*={steady.output.toFixed(2)}; c*={steady.consumption.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">Kaidah emas: k={steady.goldenCapital.toFixed(2)}; s emas=50%.</p>
        {steady.aboveGoldenSaving && <p className="rounded bg-amber-950 p-3 text-amber-200 sm:col-span-2">Tabungan s berada di atas kaidah emas; modal mapan lebih tinggi, tetapi konsumsi mapan lebih rendah daripada pada tingkat emas.</p>}
      </div>
    </VisualCard>
  );
}
