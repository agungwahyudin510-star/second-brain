"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { arousalAfter, hoursToThreshold } from "./psych-math";

export default function PsiArousalDecay() {
  const [initial, setInitial] = useState(8);
  const [decay, setDecay] = useState(25);
  const [threshold, setThreshold] = useState(4);
  const crossingHour = hoursToThreshold(initial, decay, threshold);
  const markerHour = Number.isFinite(crossingHour) ? crossingHour : null;
  const points = Array.from({ length: 13 }, (_, hour) => ({ hour, value: arousalAfter(initial, decay, hour) }));
  const y = (value: number) => 92 - value * 8;
  const x = (hour: number) => 25 + hour * 13;
  return (
    <VisualCard title="Arousal dan aturan jeda" caption="Model ilustratif A(t)=A₀×(1−peluruhan)^t; bukan jadwal biologis atau estimasi penelitian." howToRead="Atur arousal awal, peluruhan per jam, dan ambang. Penanda menunjukkan jam bilangan bulat pertama saat model mencapai atau melewati ambang.">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Arousal awal: {initial}
          <input aria-label="Arousal awal dari satu sampai sepuluh" type="range" min="1" max="10" value={initial} onChange={(event) => setInitial(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-rose-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Peluruhan per jam: {decay}%
          <input aria-label="Persentase peluruhan arousal tiap jam dari lima sampai lima puluh" type="range" min="5" max="50" value={decay} onChange={(event) => setDecay(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Ambang: {threshold}
          <input aria-label="Ambang arousal dari satu sampai delapan" type="range" min="1" max="8" value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
      </div>
      <svg viewBox="0 0 205 112" role="img" aria-label={`Kurva arousal ilustratif, ambang ${threshold}; jam pertama model mencapai ambang adalah ${markerHour ?? "tidak tercapai"}`} className="h-40 w-full min-w-0 rounded-lg bg-zinc-950 p-2">
        <path d="M25 10V94H190" fill="none" stroke="#71717a" />
        <text x="2" y="12" fill="#a1a1aa" fontSize="7">A(t)</text><text x="168" y="106" fill="#a1a1aa" fontSize="7">Jam</text>
        <line x1="25" y1={y(threshold)} x2="190" y2={y(threshold)} stroke="#fbbf24" strokeDasharray="3 2" />
        <polyline points={points.map((point) => `${x(point.hour)},${y(point.value)}`).join(" ")} fill="none" stroke="#fb7185" strokeWidth="2" />
        {markerHour !== null && markerHour <= 12 && <><line x1={x(markerHour)} y1="10" x2={x(markerHour)} y2="94" stroke="#38bdf8" strokeDasharray="2 2" /><circle cx={x(markerHour)} cy={y(arousalAfter(initial, decay, markerHour))} r="3" fill="#38bdf8" /></>}
        <text x="30" y="18" fill="#fda4af" fontSize="7">Arousal</text><text x="118" y="18" fill="#fcd34d" fontSize="7">Ambang</text>
      </svg>
      <div className="grid min-w-0 grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        <p aria-live="polite" className="min-w-0 break-words rounded bg-zinc-950 p-3">Jam pertama ≤ ambang: {markerHour === null ? "tidak tercapai" : markerHour}</p>
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3">Nilai pada jam pertama: {markerHour === null ? "—" : arousalAfter(initial, decay, markerHour).toFixed(2)}</p>
      </div>
    </VisualCard>
  );
}
