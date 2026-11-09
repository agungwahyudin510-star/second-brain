"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { obedienceIndex } from "./psych-math";

export default function PsiAuthorityGradient() {
  const [legitimacy, setLegitimacy] = useState(4);
  const [distance, setDistance] = useState(3);
  const [dissenters, setDissenters] = useState(1);
  const index = obedienceIndex(legitimacy, distance, dissenters);

  return (
    <VisualCard
      title="Otoritas dan tanggung jawab"
      caption="Indeks 30+8L+4D−10P yang dibatasi 0–100 adalah alat berpikir hipotetis, bukan hasil penelitian atau prediksi kepatuhan."
      howToRead="Ubah persepsi legitimasi, jarak dari dampak, dan jumlah pembangkang. Skor hanya menunjukkan bagaimana asumsi model mengubah indeks."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">Legitimasi yang dirasakan: {legitimacy}/5
          <input aria-label="Legitimasi otoritas yang dirasakan dari nol sampai lima" type="range" min="0" max="5" value={legitimacy} onChange={(event) => setLegitimacy(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Jarak dari dampak: {distance}/5
          <input aria-label="Jarak dari dampak tindakan dari nol sampai lima" type="range" min="0" max="5" value={distance} onChange={(event) => setDistance(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Jumlah pembangkang: {dissenters}/3
          <input aria-label="Jumlah pembangkang dari nol sampai tiga" type="range" min="0" max="3" value={dissenters} onChange={(event) => setDissenters(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
      </div>
      <div className="min-w-0 rounded-lg bg-zinc-950 p-3">
        <div role="img" aria-label={`Indeks alat berpikir ${index} dari 100`} className="h-4 w-full min-w-0 overflow-hidden rounded-full bg-zinc-700">
          <div className="h-full bg-sky-400" style={{ width: `${index}%` }} />
        </div>
        <p aria-live="polite" className="mt-2 break-words text-sm text-sky-200">Indeks model: {index}/100. Ini bukan kemungkinan seseorang akan patuh.</p>
      </div>
      <div className="min-w-0 space-y-2 rounded-lg border border-amber-500/30 p-3">
        <h3 className="text-sm font-medium text-amber-200">Jika perintah terasa bermasalah</h3>
        <ol className="list-inside list-decimal space-y-1 break-words text-sm text-zinc-300">
          <li>Tanyakan dasar, tujuan, dan batas kewenangannya.</li>
          <li>Minta instruksi tertulis atau rujukan kebijakan.</li>
          <li>Cari dukungan dari rekan atau pihak tepercaya.</li>
          <li>Gunakan saluran pelaporan; prioritaskan keselamatan bila ada bahaya langsung.</li>
        </ol>
      </div>
    </VisualCard>
  );
}
