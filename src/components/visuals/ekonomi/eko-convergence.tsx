"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { solowPath, solowSteadyState } from "./econ-math";

const x = (period: number) => 34 + period / 40 * 194;
const y = (output: number, maximum: number) => 112 - output / maximum * 92;

export default function EkoConvergence() {
  const [richSaving, setRichSaving] = useState(0.2);
  const [sameSaving, setSameSaving] = useState(true);
  const [period, setPeriod] = useState(20);
  const poorSaving = sameSaving ? richSaving : richSaving / 2;
  const richSteady = solowSteadyState(richSaving, 0.1);
  const poorSteady = solowSteadyState(poorSaving, 0.1);
  const richPath = solowPath(richSteady.capital, richSaving, 0.1, 40);
  const poorPath = solowPath(1, poorSaving, 0.1, 40);
  const maximum = Math.max(richSteady.output, ...poorPath.map((point) => point.output), 1);
  const richLine = richPath.map((point) => `${x(point.period)},${y(point.output, maximum)}`).join(" ");
  const poorLine = poorPath.map((point) => `${x(point.period)},${y(point.output, maximum)}`).join(" ");
  const richNow = richPath[period].output;
  const poorNow = poorPath[period].output;
  const gap = richNow - poorNow;
  const catchesUp = sameSaving && Math.abs(gap) < 0.01;

  return (
    <VisualCard
      title="Konvergensi bersyarat dalam model Solow"
      caption="Keluaran per pekerja y=√k; penyusutan δ=0,1. Negara kaya mulai pada keadaan mapannya, negara miskin mulai dari k=1."
      howToRead="Garis menunjukkan lintasan keluaran per pekerja untuk negara miskin dan kaya. Tabungan sama memberi keadaan mapan yang sama; tabungan separuh mengubah keadaan mapan sehingga jarak tidak hilang."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Tabungan negara kaya: {richSaving.toFixed(2)}
          <input aria-label="Tingkat tabungan negara kaya" type="range" min="0.1" max="0.4" step="0.05" value={richSaving} onChange={(event) => setRichSaving(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Periode: {period}
          <input aria-label="Periode pada lintasan konvergensi" type="range" min="0" max="40" value={period} onChange={(event) => setPeriod(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Pilih tingkat tabungan negara miskin">
        <button type="button" aria-pressed={sameSaving} onClick={() => setSameSaving(true)} className={`min-h-10 rounded-lg border px-3 text-sm ${sameSaving ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Tabungan sama</button>
        <button type="button" aria-pressed={!sameSaving} onClick={() => setSameSaving(false)} className={`min-h-10 rounded-lg border px-3 text-sm ${!sameSaving ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Tabungan lebih rendah (separuh)</button>
      </div>
      <svg viewBox="0 0 250 140" role="img" aria-label={`Pada periode ${period}, keluaran per pekerja negara miskin ${poorNow.toFixed(2)} dan negara kaya ${richNow.toFixed(2)}. Tabungan miskin ${poorSaving.toFixed(2)} dan kaya ${richSaving.toFixed(2)}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V118H238" fill="none" stroke="#71717a" />
        <text x="3" y="16" fill="#a1a1aa" fontSize="8">Keluaran/pekerja</text>
        <text x="220" y="134" fill="#a1a1aa" fontSize="8">Periode</text>
        <polyline points={richLine} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={poorLine} fill="none" stroke="#fbbf24" strokeWidth="2.5" />
        <line x1={x(period)} x2={x(period)} y1="14" y2="118" stroke="#a1a1aa" strokeDasharray="2 3" />
        <circle cx={x(period)} cy={y(richNow, maximum)} r="3.5" fill="#38bdf8" />
        <circle cx={x(period)} cy={y(poorNow, maximum)} r="3.5" fill="#fbbf24" />
        <text x="170" y="23" fill="#7dd3fc" fontSize="7">Kaya</text>
        <text x="192" y="23" fill="#fcd34d" fontSize="7">Miskin</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Negara kaya: s={richSaving.toFixed(2)}, k*={richSteady.capital.toFixed(2)}, y*={richSteady.output.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">Negara miskin: s={poorSaving.toFixed(2)}, k*={poorSteady.capital.toFixed(2)}, y*={poorSteady.output.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">Pada periode {period}, y miskin={poorNow.toFixed(2)}; y kaya={richNow.toFixed(2)}; jarak={gap.toFixed(2)}.</p>
        <p className={`rounded bg-zinc-950 p-3 ${sameSaving ? "text-emerald-200" : "text-amber-200"}`}>{sameSaving ? catchesUp ? "Keluaran pada periode ini hampir sama; kedua negara menuju tingkat mapan yang sama." : "Negara miskin tumbuh menuju tingkat mapan yang sama; pada periode hingga 40 ia belum harus menyamai negara kaya." : "Tabungan lebih rendah memberi tingkat mapan lebih rendah; negara miskin tidak menyusul dalam model ini."}</p>
      </div>
    </VisualCard>
  );
}
