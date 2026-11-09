"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { echoShare } from "./psych-math";

export default function PsiEchoFeed() {
  const [rate, setRate] = useState(0.2);
  const [rounds, setRounds] = useState(4);
  const [initial, setInitial] = useState(50);
  const [differentSources, setDifferentSources] = useState(false);
  const effectiveRate = differentSources ? rate / 2 : rate;
  const shares = echoShare(initial / 100, effectiveRate, rounds);
  const current = shares[shares.length - 1];
  const points = shares.map((share, index) => `${12 + index * (76 / Math.max(1, rounds))},${84 - share * 65}`).join(" ");

  return (
    <VisualCard
      title="Personalisasi dan kesepakatan feed"
      caption="Rumus s(t+1)=s(t)+r(1−s(t)) adalah model feed ilustratif, bukan data platform atau hasil penelitian."
      howToRead="Atur laju, ronde, dan bagian awal yang sepakat. Opsi sumber berbeda mengurangi laju model untuk mengeksplorasi alternatif paparan."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">Laju personalisasi: {rate.toFixed(2)}
          <input aria-label="Laju personalisasi dari nol sampai 0,5" type="range" min="0" max="0.5" step="0.01" value={rate} onChange={(event) => setRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Ronde: {rounds}
          <input aria-label="Jumlah ronde feed dari nol sampai delapan" type="range" min="0" max="8" value={rounds} onChange={(event) => setRounds(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Bagian konten sepakat awal: {initial}%
          <input aria-label="Bagian konten sepakat awal dari nol sampai seratus persen" type="range" min="0" max="100" value={initial} onChange={(event) => setInitial(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <label className="flex min-w-0 items-center gap-2 text-sm text-zinc-300">
          <input aria-label="Tambahkan sumber informasi berbeda untuk menurunkan laju model" type="checkbox" checked={differentSources} onChange={(event) => setDifferentSources(event.target.checked)} className="min-h-5 min-w-5 accent-sky-400" />
          Tambah sumber berbeda (laju model turun
          {differentSources ? " aktif" : ""})
        </label>
      </div>
      <svg viewBox="0 0 100 100" role="img" aria-label={`Kurva bagian konten sepakat hingga ronde ${rounds}; nilai ${Math.round(current * 100)} persen`} className="h-40 w-full min-w-0 rounded-lg bg-zinc-950 p-2">
        <path d="M12 10V84H90" fill="none" stroke="#71717a" />
        <polyline points={points} fill="none" stroke="#38bdf8" strokeWidth="2" />
        {shares.map((share, index) => <circle key={index} cx={12 + index * (76 / Math.max(1, rounds))} cy={84 - share * 65} r="1.8" fill="#f472b6" />)}
        <text x="13" y="95" fill="#a1a1aa" fontSize="5">Ronde</text>
      </svg>
      <div className="min-w-0">
        <div role="img" aria-label={`Bagian sepakat ${Math.round(current * 100)} persen pada ronde ${rounds}`} className="h-5 w-full min-w-0 overflow-hidden rounded-full bg-zinc-700">
          <div className="h-full bg-sky-400" style={{ width: `${current * 100}%` }} />
        </div>
        <p aria-live="polite" className="mt-2 text-sm text-sky-200">Bagian sepakat pada ronde {rounds}: {(current * 100).toFixed(1)}% · laju efektif {effectiveRate.toFixed(2)}.</p>
      </div>
    </VisualCard>
  );
}
