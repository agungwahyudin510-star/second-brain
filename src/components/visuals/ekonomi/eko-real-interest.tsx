"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { realInterest } from "./econ-math";

export default function EkoRealInterest() {
  const [nominalRate, setNominalRate] = useState(8);
  const [inflation, setInflation] = useState(5);
  const [years, setYears] = useState(10);
  const result = realInterest(nominalRate, inflation, years);
  const power = (1 + inflation / 100) ** years;
  const barWidth = Math.min(170, 170 * result.purchasingPower / 100);

  return (
    <VisualCard
      title="Bunga riil dan erosi daya beli"
      caption="Simulasi memakai laju bunga dan inflasi tahunan tetap. Nilai awal daya beli uang adalah 100."
      howToRead="Bandingkan pendekatan bunga nominal dikurangi inflasi dengan rumus eksak Fisher. Batang memperlihatkan berapa daya beli 100 yang tersisa setelah inflasi majemuk."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Bunga nominal i: {nominalRate}%
          <input aria-label="Suku bunga nominal tahunan" type="range" min="0" max="15" value={nominalRate} onChange={(event) => setNominalRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Inflasi π: {inflation}%
          <input aria-label="Inflasi tahunan" type="range" min="0" max="12" value={inflation} onChange={(event) => setInflation(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300 sm:col-span-2">Jangka waktu n: {years} tahun
          <input aria-label="Jangka waktu untuk menghitung daya beli" type="range" min="1" max="20" value={years} onChange={(event) => setYears(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 85" role="img" aria-label={`Nilai daya beli 100 setelah ${years} tahun inflasi ${inflation} persen adalah ${result.purchasingPower.toFixed(2)}.`} className="h-36 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="18" fill="#a1a1aa" fontSize="8">Daya beli awal 100</text>
        <rect x="4" y="25" width="190" height="14" rx="3" fill="#3f3f46" />
        <rect x="4" y="25" width={barWidth} height="14" rx="3" fill={inflation > 0 ? "#fbbf24" : "#34d399"} />
        <text x="4" y="59" fill="#d4d4d8" fontSize="9">Faktor harga (1+π)^n = {power.toFixed(4)}</text>
        <text x="4" y="74" fill="#a1a1aa" fontSize="8">Nilai riil akhir: {result.purchasingPower.toFixed(2)}</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className={`rounded bg-zinc-950 p-3 ${result.approximateRate < 0 ? "text-rose-300" : "text-sky-200"}`}>Bunga riil pendekatan = {nominalRate}−{inflation} = {result.approximateRate.toFixed(2)}%.</p>
        <p className={`rounded bg-zinc-950 p-3 ${result.exactRate < 0 ? "text-rose-300" : "text-emerald-200"}`}>Bunga riil eksak = (1+{(nominalRate / 100).toFixed(2)})/(1+{(inflation / 100).toFixed(2)})−1 = {result.exactRate.toFixed(2)}%.</p>
        <p className="rounded bg-zinc-950 p-3">Daya beli = 100/(1+{(inflation / 100).toFixed(2)})^{years} = {result.purchasingPower.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">{result.doublingYears === null ? "Aturan 70 tidak berlaku saat inflasi nol." : `Aturan 70: harga berlipat dua kira-kira ${result.doublingYears.toFixed(1)} tahun.`}</p>
      </div>
    </VisualCard>
  );
}
