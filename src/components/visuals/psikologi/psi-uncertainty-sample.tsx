"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { proportionMargin } from "./psych-math";

export default function PsiUncertaintySample() {
  const [proportion, setProportion] = useState(0.6);
  const [sampleSize, setSampleSize] = useState(50);
  const [falsifiable, setFalsifiable] = useState(false);
  const result = proportionMargin(proportion, sampleSize);
  const comparison50 = proportionMargin(0.6, 50);
  const comparison200 = proportionMargin(0.6, 200);
  const barScale = Math.max(0, Math.min(100, result.lower * 100));
  const estimateWidth = Math.max(0, Math.min(100 - barScale, (result.upper - result.lower) * 100));

  return (
    <VisualCard
      title="Ketidakpastian estimasi proporsi"
      caption="Visual dan interval adalah ilustrasi hipotetis dengan pendekatan normal sederhana; bukan data penelitian atau jaminan."
      howToRead="Ubah proporsi dan ukuran sampel. Rentang menampilkan estimasi ±1,96 galat baku; bandingkan pula margin untuk n=50 dan n=200."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Proporsi ilustratif: {proportion.toFixed(1)}
          <input aria-label="Proporsi ilustratif dari 0,1 sampai 0,9" type="range" min="0.1" max="0.9" step="0.1" value={proportion} onChange={(event) => setProportion(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Ukuran sampel: {sampleSize}
          <input aria-label="Ukuran sampel dari 10 sampai 1000" type="range" min="10" max="1000" step="10" value={sampleSize} onChange={(event) => setSampleSize(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3">
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">Galat baku: {result.standardError.toFixed(4)}</p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">Margin: ±{(result.margin * 100).toFixed(1)} poin</p>
        <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">Interval: {(result.lower * 100).toFixed(1)}%–{(result.upper * 100).toFixed(1)}%</p>
      </div>
      <div className="min-w-0 rounded-lg bg-zinc-950 p-3">
        <p className="text-sm text-zinc-300">Rentang estimasi pada skala 0–100%</p>
        <svg viewBox="0 0 100 18" role="img" aria-label={`Estimasi ${(proportion * 100).toFixed(1)} persen dengan interval ${(result.lower * 100).toFixed(1)} sampai ${(result.upper * 100).toFixed(1)} persen`} className="mt-2 h-10 w-full">
          <rect x="0" y="5" width="100" height="8" rx="4" fill="#3f3f46" />
          <rect x={barScale} y="5" width={estimateWidth} height="8" rx="4" fill="#38bdf8" />
          <circle cx={proportion * 100} cy="9" r="3" fill="#f0abfc" />
        </svg>
        <div className="flex justify-between text-xs text-zinc-400"><span>0%</span><span>100%</span></div>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        {[{ n: 50, value: comparison50 }, { n: 200, value: comparison200 }].map(({ n, value }) => (
          <p key={n} className={`min-w-0 break-words rounded-lg p-3 text-sm ${sampleSize === n ? "bg-sky-950 text-sky-200" : "bg-zinc-950 text-zinc-300"}`}>
            p=0,6 · n={n}: SE {value.standardError.toFixed(4)} · margin ±{(value.margin * 100).toFixed(1)} poin
          </p>
        ))}
      </div>
      <p className="text-sm text-emerald-200">Empat kali sampel (50→200) menghasilkan margin kira-kira separuh: 13,6 menjadi 6,8 poin.</p>
      <label className="flex min-w-0 items-start gap-2 rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">
        <input aria-label="Tampilkan contoh klaim yang dapat dibantah" type="checkbox" checked={falsifiable} onChange={(event) => setFalsifiable(event.target.checked)} className="mt-1 accent-amber-400" />
        <span className="break-words">Klaim yang bisa dibantah</span>
      </label>
      {falsifiable && <p className="min-w-0 break-words rounded-lg bg-amber-950/40 p-3 text-sm text-amber-100">Hipotesis latihan: proporsi hasil positif adalah 0,6. Hasil pengamatan yang jauh di luar rentang prediksi yang ditetapkan sebelumnya akan melemahkan hipotesis, tetapi keputusan perlu mempertimbangkan rancangan dan asumsi.</p>}
    </VisualCard>
  );
}
