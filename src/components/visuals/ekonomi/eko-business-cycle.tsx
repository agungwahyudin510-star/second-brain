"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { cycleStats } from "./econ-math";

const QUARTERS = [100, 102, 103, 101, 99, 98, 100, 103];
const x = (index: number) => 36 + index * 25;
const y = (value: number) => 110 - (value - 95) * 8;

export default function EkoBusinessCycle() {
  const [quarter, setQuarter] = useState(3);
  const [actual, setActual] = useState(950);
  const stats = cycleStats(QUARTERS, actual, 1000);
  const selectedIndex = quarter - 1;
  const line = QUARTERS.map((value, index) => `${x(index)},${y(value)}`).join(" ");

  return (
    <VisualCard
      title="Siklus bisnis, titik balik, dan kesenjangan output"
      caption="Indeks PDB riil delapan kuartal bersifat ilustratif. Puncak dan lembah ditentukan relatif pada seri yang ditampilkan."
      howToRead="Garis menunjukkan PDB riil per kuartal; titik ungu adalah puncak, merah lembah, dan titik turun ditandai merah. Geser kuartal terpilih dan PDB aktual untuk melihat perubahan serta kesenjangan dari potensi."
    >
      <label className="block text-sm text-zinc-300">
        Kuartal terpilih: K{quarter}
        <input aria-label="Kuartal yang dipilih pada siklus bisnis" type="range" min="1" max="8" value={quarter} onChange={(event) => setQuarter(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
      </label>
      <label className="block text-sm text-zinc-300">
        PDB aktual Y: {actual}; PDB potensial Y*: 1.000
        <input aria-label="PDB aktual untuk menghitung kesenjangan output" type="range" min="900" max="1100" step="10" value={actual} onChange={(event) => setActual(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
      </label>
      <svg viewBox="0 0 250 145" role="img" aria-label={`PDB riil K${quarter}=${QUARTERS[selectedIndex]}. Puncak K${stats.peakIndex + 1}; lembah K${stats.troughIndex + 1}. ${stats.technicalRecession ? "Seri memenuhi kaidah resesi teknis." : "Seri tidak memenuhi kaidah resesi teknis."}`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 10V115H238" fill="none" stroke="#71717a" />
        <text x="3" y="15" fill="#a1a1aa" fontSize="8">Indeks</text>
        <text x="220" y="130" fill="#a1a1aa" fontSize="8">Kuartal</text>
        {stats.decliningIndices.map((index) => (
          <line key={`decline-${index}`} x1={x(index - 1)} y1={y(QUARTERS[index - 1])} x2={x(index)} y2={y(QUARTERS[index])} stroke="#f87171" strokeWidth="3" />
        ))}
        <polyline points={line} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        {QUARTERS.map((value, index) => (
          <g key={`point-${index}`}>
            <circle cx={x(index)} cy={y(value)} r={index === selectedIndex ? 5 : 3.5} fill={index === stats.peakIndex ? "#c084fc" : index === stats.troughIndex || stats.decliningIndices.includes(index) ? "#f87171" : "#38bdf8"} />
            <text x={x(index) - 6} y="127" fill="#a1a1aa" fontSize="7">K{index + 1}</text>
          </g>
        ))}
        <text x={x(stats.peakIndex) - 8} y={y(QUARTERS[stats.peakIndex]) - 7} fill="#d8b4fe" fontSize="7">Puncak</text>
        <text x={x(stats.troughIndex) - 8} y={y(QUARTERS[stats.troughIndex]) + 13} fill="#fca5a5" fontSize="7">Lembah</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Perubahan K{quarter}: {stats.changes[selectedIndex] === null ? "—" : `${stats.changes[selectedIndex]!.toFixed(2)}%`} dari kuartal sebelumnya.</p>
        <p className="rounded bg-zinc-950 p-3">Kuartal turun berturut-turut: {stats.longestDecline}; {stats.technicalRecession ? "memenuhi" : "tidak memenuhi"} kaidah resesi teknis.</p>
        <p className="rounded bg-zinc-950 p-3">Puncak K{stats.peakIndex + 1}; lembah K{stats.troughIndex + 1}.</p>
        <p className={`rounded bg-zinc-950 p-3 ${stats.outputGap < 0 ? "text-rose-200" : "text-emerald-200"}`}>Kesenjangan output = ({actual}−1.000)/1.000 = {stats.outputGap.toFixed(1)}%.</p>
      </div>
    </VisualCard>
  );
}
