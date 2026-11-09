"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { retention } from "./psych-math";

export default function PsiForgetting() {
  const [initialS, setInitialS] = useState(2);
  const [multiplier, setMultiplier] = useState(2);
  const [reviews, setReviews] = useState(2);
  const [days, setDays] = useState(7);
  const currentS = initialS * multiplier ** reviews;
  const currentRetention = retention(initialS, multiplier, reviews, days);
  const noReviewRetention = retention(initialS, multiplier, 0, days);
  const points = Array.from({ length: 14 }, (_, index) => {
    const day = index + 1;
    return { day, value: retention(initialS, multiplier, reviews, day), baseline: retention(initialS, multiplier, 0, day) };
  });
  const y = (value: number) => 92 - value * 0.75;
  const x = (day: number) => 24 + (day - 1) * 12;

  return (
    <VisualCard
      title="Kurva lupa: model retensi"
      caption="R = exp(−Δ/S); S awal, pengali tinjauan, dan retensi adalah parameter ilustratif, BUKAN estimasi penelitian atau prediksi ingatan."
      howToRead="Kurva membandingkan model tanpa tinjauan dengan jumlah tinjauan pilihan. Penanda menunjukkan jarak uji; perubahan parameter hanya mengikuti rumus."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">S awal: {initialS} hari
          <input aria-label="S awal model retensi dari satu sampai lima hari" type="range" min="1" max="5" value={initialS} onChange={(event) => setInitialS(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Pengali tiap tinjauan: ×{multiplier}
          <input aria-label="Pengali parameter S tiap tinjauan dari satu sampai tiga" type="range" min="1" max="3" step="0.1" value={multiplier} onChange={(event) => setMultiplier(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Jumlah tinjauan: {reviews}
          <input aria-label="Jumlah tinjauan dari nol sampai empat" type="range" min="0" max="4" value={reviews} onChange={(event) => setReviews(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Jarak uji: {days} hari
          <input aria-label="Jarak uji dari satu sampai empat belas hari" type="range" min="1" max="14" value={days} onChange={(event) => setDays(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 210 112" role="img" aria-label={`Kurva retensi model ilustratif. Pada hari ${days}, retensi model dengan tinjauan ${currentRetention.toFixed(1)} persen dan tanpa tinjauan ${noReviewRetention.toFixed(1)} persen.`} className="h-40 w-full min-w-0 rounded-lg bg-zinc-950 p-2">
        <path d="M24 8V94H200" fill="none" stroke="#71717a" />
        <text x="2" y="12" fill="#a1a1aa" fontSize="7">R (%)</text>
        <text x="172" y="106" fill="#a1a1aa" fontSize="7">Hari (Δ)</text>
        <polyline points={points.map((point) => `${x(point.day)},${y(point.value)}`).join(" ")} fill="none" stroke="#38bdf8" strokeWidth="2" />
        <polyline points={points.map((point) => `${x(point.day)},${y(point.baseline)}`).join(" ")} fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2" />
        <line x1={x(days)} y1="8" x2={x(days)} y2="94" stroke="#f472b6" strokeDasharray="2 2" />
        <circle cx={x(days)} cy={y(currentRetention)} r="3" fill="#38bdf8" />
        <text x="32" y="16" fill="#7dd3fc" fontSize="7">Tinjauan dipilih</text>
        <text x="115" y="16" fill="#fcd34d" fontSize="7">Tanpa tinjauan</text>
      </svg>
      <div className="grid min-w-0 grid-cols-1 gap-2 text-sm sm:grid-cols-3">
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3">S model: {currentS.toFixed(1)} hari</p>
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3">Dengan tinjauan: {currentRetention.toFixed(1)}%</p>
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3">Tanpa tinjauan: {noReviewRetention.toFixed(1)}%</p>
      </div>
    </VisualCard>
  );
}
