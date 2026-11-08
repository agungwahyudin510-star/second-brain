"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { compoundGrowth } from "./econ-math";

const x = (year: number, maxYear: number) => 34 + year / maxYear * 198;
const y = (value: number, maxValue: number) => 116 - value / maxValue * 94;

export default function EkoCompoundGrowth() {
  const [firstRate, setFirstRate] = useState(2);
  const [secondRate, setSecondRate] = useState(4);
  const [years, setYears] = useState(30);
  const result = compoundGrowth(1000, firstRate, secondRate, years);
  const maxValue = Math.max(result.firstValue, result.secondValue, 1000);
  const firstLine = result.path.map((point) => `${x(point.year, years)},${y(point.firstValue, maxValue)}`).join(" ");
  const secondLine = result.path.map((point) => `${x(point.year, years)},${y(point.secondValue, maxValue)}`).join(" ");

  return (
    <VisualCard
      title="Pertumbuhan majemuk dalam jangka panjang"
      caption="Nilai awal PDB riil per kapita adalah 1.000; kedua laju tahunan tetap untuk ilustrasi."
      howToRead="Sumbu mendatar menunjukkan tahun dan sumbu tegak nilai per kapita. Garis naik melengkung karena setiap tahun pertumbuhan diterapkan pada nilai yang telah bertambah."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">Laju pertama: {firstRate}%
          <input aria-label="Laju pertumbuhan pertama" type="range" min="0" max="8" step="0.5" value={firstRate} onChange={(event) => setFirstRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Laju kedua: {secondRate}%
          <input aria-label="Laju pertumbuhan kedua" type="range" min="0" max="8" step="0.5" value={secondRate} onChange={(event) => setSecondRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Lama pertumbuhan: {years} tahun
          <input aria-label="Jumlah tahun pertumbuhan majemuk" type="range" min="1" max="60" value={years} onChange={(event) => setYears(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 140" role="img" aria-label={`Setelah ${years} tahun, nilai awal 1.000 menjadi ${result.firstValue.toFixed(2)} pada laju ${firstRate} persen dan ${result.secondValue.toFixed(2)} pada laju ${secondRate} persen.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V118H238" fill="none" stroke="#71717a" />
        <text x="3" y="16" fill="#a1a1aa" fontSize="8">Nilai riil</text>
        <text x="218" y="134" fill="#a1a1aa" fontSize="8">Tahun</text>
        <polyline points={firstLine} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={secondLine} fill="none" stroke="#fbbf24" strokeWidth="2.5" />
        <circle cx={x(years, years)} cy={y(result.firstValue, maxValue)} r="3" fill="#38bdf8" />
        <circle cx={x(years, years)} cy={y(result.secondValue, maxValue)} r="3" fill="#fbbf24" />
        <text x="38" y="26" fill="#7dd3fc" fontSize="7">{firstRate}%</text>
        <text x="58" y="26" fill="#fcd34d" fontSize="7">{secondRate}%</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3 text-sky-200">1.000×(1+{(firstRate / 100).toFixed(3)})^{years} = {result.firstValue.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">1.000×(1+{(secondRate / 100).toFixed(3)})^{years} = {result.secondValue.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">Rasio nilai kedua/pertama: {result.ratio === null ? "tidak terdefinisi" : `${result.ratio.toFixed(2)} kali`}.</p>
        <p className="rounded bg-zinc-950 p-3">Aturan 70: {result.firstDoublingApprox === null ? "laju pertama nol" : `${result.firstDoublingApprox.toFixed(1)} tahun`} dan {result.secondDoublingApprox === null ? "laju kedua nol" : `${result.secondDoublingApprox.toFixed(1)} tahun`}.</p>
        <p className="rounded bg-zinc-950 p-3 sm:col-span-2">Waktu eksak berlipat dua: {result.firstDoublingExact === null ? "tidak terdefinisi untuk laju pertama nol" : `${result.firstDoublingExact.toFixed(2)} tahun`} dan {result.secondDoublingExact === null ? "tidak terdefinisi untuk laju kedua nol" : `${result.secondDoublingExact.toFixed(2)} tahun`}.</p>
      </div>
    </VisualCard>
  );
}
