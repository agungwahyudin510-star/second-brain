"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { debtPath } from "./econ-math";

const chartX = (year: number) => 34 + year / 20 * 190;

export default function EkoDebtDynamics() {
  const [initialDebt, setInitialDebt] = useState(60);
  const [interestRate, setInterestRate] = useState(5);
  const [growthRate, setGrowthRate] = useState(3);
  const [primaryBalance, setPrimaryBalance] = useState(0);
  const [years, setYears] = useState(1);
  const result = debtPath(initialDebt, interestRate, growthRate, primaryBalance, years);
  const fullPath = debtPath(initialDebt, interestRate, growthRate, primaryBalance, 20).path;
  const values = fullPath.map((point) => point.debtRatio);
  const minDebt = Math.min(0, ...values);
  const maxDebt = Math.max(...values);
  const chartY = (value: number) => 110 - (value - minDebt) / Math.max(1, maxDebt - minDebt) * 84;
  const line = fullPath.map((point) => `${chartX(point.year)},${chartY(point.debtRatio)}`).join(" ");
  const selected = result.path[result.path.length - 1];
  const tenYear = fullPath[10].debtRatio;

  return (
    <VisualCard
      title="Dinamika rasio utang terhadap PDB"
      caption="Persamaan d(t+1)=d(t)×(1+r)/(1+g)−pb; semua rasio dinyatakan dalam persen PDB, dengan surplus primer positif."
      howToRead="Garis menggambarkan rasio utang pada tiap tahun hingga tahun ke-20 berdasarkan slider. Titik terang menandai tahun terpilih; r dan g menentukan faktor pengali, sementara saldo primer mengurangi rasio."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Rasio utang awal d: {initialDebt}%
          <input aria-label="Rasio utang awal terhadap PDB" type="range" min="20" max="120" value={initialDebt} onChange={(event) => setInitialDebt(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Suku bunga r: {interestRate}%
          <input aria-label="Suku bunga utang pemerintah" type="range" min="0" max="10" value={interestRate} onChange={(event) => setInterestRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Pertumbuhan g: {growthRate}%
          <input aria-label="Pertumbuhan PDB nominal" type="range" min="0" max="8" value={growthRate} onChange={(event) => setGrowthRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Saldo primer: {primaryBalance > 0 ? "+" : ""}{primaryBalance}% PDB
          <input aria-label="Saldo primer pemerintah dalam persen PDB" type="range" min="-5" max="5" step="0.5" value={primaryBalance} onChange={(event) => setPrimaryBalance(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
        <label className="text-sm text-zinc-300 sm:col-span-2">Tahun terpilih: {years}
          <input aria-label="Tahun pada lintasan utang" type="range" min="1" max="20" value={years} onChange={(event) => setYears(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 132" role="img" aria-label={`Rasio utang awal ${initialDebt} persen. Tahun ${years}: ${selected.debtRatio.toFixed(2)} persen. Setelah 10 tahun pada parameter yang sama: ${tenYear.toFixed(2)} persen.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V112H238" fill="none" stroke="#71717a" />
        <text x="3" y="16" fill="#a1a1aa" fontSize="8">Utang/PDB</text><text x="218" y="128" fill="#a1a1aa" fontSize="8">Tahun</text>
        <polyline points={line} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <line x1={chartX(years)} x2={chartX(years)} y1="12" y2="112" stroke="#fbbf24" strokeDasharray="3 3" />
        <circle cx={chartX(years)} cy={chartY(selected.debtRatio)} r="4" fill="#fbbf24" />
        <text x={Math.min(190, chartX(years) + 3)} y={chartY(selected.debtRatio) - 5} fill="#fef3c7" fontSize="7">{selected.debtRatio.toFixed(1)}%</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Rasio pada tahun {years}: <strong>{selected.debtRatio.toFixed(2)}%</strong> PDB.</p>
        <p className="rounded bg-zinc-950 p-3">Rasio setelah 10 tahun pada parameter ini: {tenYear.toFixed(2)}% PDB.</p>
        <p className="rounded bg-zinc-950 p-3">Surplus primer penstabil awal=d(r−g)/(1+g)=<strong>{result.stabilizingPrimaryBalance.toFixed(2)}%</strong> PDB.</p>
        <p className={`rounded bg-zinc-950 p-3 ${interestRate > growthRate ? "text-amber-200" : "text-emerald-200"}`}>r−g={ (interestRate - growthRate).toFixed(1)} poin persentase sebelum memperhitungkan saldo primer.</p>
      </div>
    </VisualCard>
  );
}
