"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { phillipsInflation } from "./econ-math";

const x = (unemployment: number) => 34 + (unemployment - 3) * 37;
const y = (inflation: number) => 112 - inflation * 12;

export default function EkoPhillips() {
  const [unemployment, setUnemployment] = useState(5);
  const [expectedInflation, setExpectedInflation] = useState(3);
  const [rounds, setRounds] = useState(0);
  const result = phillipsInflation(unemployment, expectedInflation, 5);
  const curvePoints = result.curve.map((point) => `${x(point.unemployment)},${y(point.inflation)}`).join(" ");

  function adjustExpectations() {
    if (rounds >= 6) return;
    setExpectedInflation(result.inflation);
    setRounds((current) => current + 1);
  }

  function reset() {
    setUnemployment(5);
    setExpectedInflation(3);
    setRounds(0);
  }

  return (
    <VisualCard
      title="Kurva Phillips dan penyesuaian ekspektasi"
      caption="Kurva jangka pendek memakai π=πe−0,5(u−5). Garis tegak jangka panjang menandai tingkat pengangguran alamiah u*=5%."
      howToRead="Titik menandai inflasi dan pengangguran saat ini. Garis ungu miring menunjukkan kurva jangka pendek untuk πe terpilih; kurva jangka panjang tegak pada u*. Tekan penyesuaian untuk menaikkan ekspektasi ke inflasi putaran sebelumnya."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Pengangguran u: {unemployment.toFixed(1)}%
          <input aria-label="Tingkat pengangguran pada kurva Phillips" type="range" min="3" max="8" step="0.5" value={unemployment} onChange={(event) => setUnemployment(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
        <label className="text-sm text-zinc-300">Ekspektasi inflasi πe: {expectedInflation.toFixed(1)}%
          <input aria-label="Ekspektasi inflasi pada kurva Phillips" type="range" min="2" max="6" step="0.5" value={expectedInflation} onChange={(event) => { setExpectedInflation(Number(event.target.value)); setRounds(0); }} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button type="button" onClick={adjustExpectations} disabled={rounds >= 6} className="min-h-10 rounded-lg border border-sky-500/40 px-3 text-sm text-sky-200 disabled:opacity-50">Putaran penyesuaian ekspektasi ({rounds}/6)</button>
        <button type="button" onClick={reset} className="min-h-10 rounded-lg border border-zinc-700 px-3 text-sm text-zinc-300">Reset</button>
      </div>
      <svg viewBox="0 0 250 145" role="img" aria-label={`Kurva Phillips jangka pendek dengan ekspektasi ${expectedInflation} persen; titik saat ini u=${unemployment} persen dan inflasi ${result.inflation.toFixed(2)} persen; pengangguran alamiah 5 persen.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V116H230" fill="none" stroke="#71717a" />
        <text x="2" y="16" fill="#a1a1aa" fontSize="8">Inflasi π</text>
        <text x="208" y="132" fill="#a1a1aa" fontSize="8">Pengangguran u</text>
        <polyline points={curvePoints} fill="none" stroke="#a78bfa" strokeWidth="2.5" />
        <line x1={x(5)} x2={x(5)} y1="13" y2="116" stroke="#34d399" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx={x(unemployment)} cy={y(result.inflation)} r="5" fill="#fbbf24" stroke="#fff" strokeWidth="1" />
        <text x={x(5) + 3} y="20" fill="#6ee7b7" fontSize="7">Jangka panjang u*=5</text>
        <text x="38" y="30" fill="#c4b5fd" fontSize="7">Jangka pendek πe={expectedInflation}%</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Inflasi π={expectedInflation}−0,5×({unemployment.toFixed(1)}−5)=<strong>{result.inflation.toFixed(2)}%</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Tingkat alamiah u*=5%; saat u=5, inflasi sama dengan ekspektasi.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Putaran {rounds}: πe={expectedInflation.toFixed(2)}%; inflasi saat ini={result.inflation.toFixed(2)}%.</p>
        <p className="rounded bg-zinc-950 p-3">Pada u di bawah u*, penyesuaian ekspektasi menaikkan inflasi pada putaran berikutnya.</p>
      </div>
    </VisualCard>
  );
}
