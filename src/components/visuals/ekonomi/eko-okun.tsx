"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { okunGap } from "./econ-math";

export default function EkoOkun() {
  const [unemployment, setUnemployment] = useState(7);
  const [naturalRate, setNaturalRate] = useState(5);
  const result = okunGap(unemployment, naturalRate, 1000);
  const barScale = 15;
  const naturalWidth = naturalRate * barScale;
  const cyclicalWidth = Math.max(result.cyclicalUnemployment, 0) * barScale;

  return (
    <VisualCard
      title="Pengangguran siklis dan kesenjangan output"
      caption="Hukum Okun memakai koefisien ilustratif −2. Komponen friksional dan struktural diringkas bersama pada tingkat alamiah."
      howToRead="Bagian biru menunjukkan tingkat alamiah u*, bagian merah pengangguran siklis positif. Kesenjangan output memakai selisih u−u* dan mengubah PDB potensial menjadi aktual."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Pengangguran aktual u: {unemployment.toFixed(1)}%
          <input aria-label="Tingkat pengangguran aktual" type="range" min="3" max="10" step="0.5" value={unemployment} onChange={(event) => setUnemployment(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
        <label className="text-sm text-zinc-300">Tingkat alamiah u*: {naturalRate.toFixed(1)}%
          <input aria-label="Tingkat pengangguran alamiah" type="range" min="4" max="6" step="0.5" value={naturalRate} onChange={(event) => setNaturalRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 100" role="img" aria-label={`Tingkat alamiah ${naturalRate} persen, pengangguran siklis ${result.cyclicalUnemployment.toFixed(1)} poin, kesenjangan output ${result.outputGapPercent.toFixed(1)} persen.`} className="h-40 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="15" fill="#a1a1aa" fontSize="8">Tingkat pengangguran</text>
        <rect x="4" y="26" width={naturalWidth} height="20" rx="3" fill="#38bdf8" />
        {cyclicalWidth > 0 && <rect x={4 + naturalWidth} y="26" width={cyclicalWidth} height="20" rx="3" fill="#f87171" />}
        <text x="4" y="61" fill="#7dd3fc" fontSize="8">Friksional + struktural = u* ({naturalRate.toFixed(1)}%)</text>
        <text x="4" y="76" fill="#fca5a5" fontSize="8">Siklis = max(u−u*, 0) ({cyclicalWidth ? result.cyclicalUnemployment.toFixed(1) : "0.0"}%)</text>
        {result.cyclicalUnemployment < 0 && <text x="4" y="91" fill="#d4d4d8" fontSize="7">u di bawah u*: kesenjangan output positif meski batang siklis bernilai nol.</text>}
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Pengangguran siklis = {unemployment.toFixed(1)}−{naturalRate.toFixed(1)} = {result.cyclicalUnemployment.toFixed(1)} poin.</p>
        <p className={`rounded bg-zinc-950 p-3 ${result.outputGapPercent < 0 ? "text-rose-200" : "text-emerald-200"}`}>Kesenjangan output ≈ −2×({unemployment.toFixed(1)}−{naturalRate.toFixed(1)}) = {result.outputGapPercent.toFixed(1)}%.</p>
        <p className="rounded bg-zinc-950 p-3">PDB potensial={result.potentialOutput}; PDB aktual={result.actualOutput.toFixed(0)}.</p>
        <p className="rounded bg-zinc-950 p-3">Selisih dari potensi={result.outputDifference.toFixed(0)}.</p>
      </div>
    </VisualCard>
  );
}
