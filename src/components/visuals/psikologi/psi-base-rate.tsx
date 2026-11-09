"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { baseRate } from "./psych-math";

export default function PsiBaseRate() {
  const [prevalence, setPrevalence] = useState(1);
  const [sensitivity, setSensitivity] = useState(90);
  const [falsePositiveRate, setFalsePositiveRate] = useState(10);
  const result = baseRate(prevalence, sensitivity, falsePositiveRate, 1000);
  const maxCount = 300;
  const trueWidth = Math.min(100, result.truePositives / maxCount * 100);
  const falseWidth = Math.min(100, result.falsePositives / maxCount * 100);

  return (
    <VisualCard
      title="Base rate dan peringatan deteksi"
      caption="Simulasi hipotetis berisi 1.000 transaksi. Sensitivitas dan salah-tandai adalah input contoh, bukan metrik alat nyata."
      howToRead="Bandingkan true positive dengan false positive. Peluang peringatan benar memakai semua peringatan sebagai penyebut, bukan semua kasus penipuan."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Prevalensi: {prevalence.toFixed(1)}%
          <input aria-label="Prevalensi penipuan dari nol koma lima sampai sepuluh persen" type="range" min="0.5" max="10" step="0.5" value={prevalence} onChange={(event) => setPrevalence(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Sensitivitas: {sensitivity}%
          <input aria-label="Sensitivitas dari lima puluh sampai seratus persen" type="range" min="50" max="100" value={sensitivity} onChange={(event) => setSensitivity(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Salah-tandai: {falsePositiveRate}%
          <input aria-label="Tingkat salah-tandai dari satu sampai tiga puluh persen" type="range" min="1" max="30" value={falsePositiveRate} onChange={(event) => setFalsePositiveRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-rose-400" />
        </label>
      </div>
      <div className="min-w-0 space-y-3 rounded-lg bg-zinc-950 p-3 text-sm">
        <p>Populasi tetap: 1.000 transaksi · kasus dasar: {result.positiveCases.toFixed(1)} penipuan dan {result.negativeCases.toFixed(1)} lainnya</p>
        <div className="min-w-0 space-y-2" role="img" aria-label={`${result.truePositives.toFixed(1)} peringatan benar dan ${result.falsePositives.toFixed(1)} peringatan palsu`}>
          <div className="min-w-0">
            <p className="break-words text-emerald-200">Peringatan benar (TP): {result.truePositives.toFixed(1)}</p>
            <div className="h-4 w-full overflow-hidden rounded bg-zinc-800"><div className="h-full bg-emerald-500" style={{ width: `${trueWidth}%` }} /></div>
          </div>
          <div className="min-w-0">
            <p className="break-words text-rose-200">Peringatan palsu (FP): {result.falsePositives.toFixed(1)}</p>
            <div className="h-4 w-full overflow-hidden rounded bg-zinc-800"><div className="h-full bg-rose-500" style={{ width: `${falseWidth}%` }} /></div>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          <p className="min-w-0 break-words rounded bg-zinc-900 p-3">Total peringatan: {result.alerts.toFixed(1)}</p>
          <p aria-live="polite" className="min-w-0 break-words rounded bg-zinc-900 p-3 text-sky-200">Peluang peringatan benar: {result.trueAlertPct.toFixed(2)}%</p>
        </div>
      </div>
    </VisualCard>
  );
}
