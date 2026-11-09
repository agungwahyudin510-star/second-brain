"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { presentValueBetaDelta } from "./psych-math";

export default function PsiPresentBias() {
  const [beta, setBeta] = useState(0.7);
  const [small, setSmall] = useState(100);
  const [large, setLarge] = useState(120);
  const [delay, setDelay] = useState(1);
  const nowValue = presentValueBetaDelta(small, 0, beta, 1);
  const delayedValue = presentValueBetaDelta(large, delay, beta, 1);
  const monthSixValue = presentValueBetaDelta(small, 6, beta, 1);
  const monthSevenValue = presentValueBetaDelta(large, 7, beta, 1);
  const nowChoice = nowValue >= delayedValue ? "jumlah kecil sekarang" : `jumlah besar setelah ${delay} bulan`;
  const laterChoice = monthSixValue >= monthSevenValue ? "jumlah kecil pada bulan 6" : "jumlah besar pada bulan 7";
  const preferenceReversal = nowValue >= delayedValue && monthSevenValue > monthSixValue;

  return (
    <VisualCard
      title="Nilai pilihan menurut waktu"
      caption="Model β-δ dengan δ=1 adalah ilustrasi diskonto, bukan prediksi tetap tentang pilihan individu."
      howToRead="Atur β, jumlah kecil/besar, dan jeda. Bandingkan pilihan sekarang dengan tertunda serta pilihan bulan 6 dan 7."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">β: {beta.toFixed(2)}
          <input aria-label="Beta present bias dari 0,5 sampai satu" type="range" min="0.5" max="1" step="0.01" value={beta} onChange={(event) => setBeta(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Jumlah kecil: {small}
          <input aria-label="Jumlah imbalan kecil" type="range" min="50" max="150" step="10" value={small} onChange={(event) => setSmall(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Jumlah besar: {large}
          <input aria-label="Jumlah imbalan besar" type="range" min="60" max="240" step="10" value={large} onChange={(event) => setLarge(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Jeda untuk opsi tertunda: {delay} bulan
          <input aria-label="Jeda opsi tertunda dari satu sampai dua belas bulan" type="range" min="1" max="12" value={delay} onChange={(event) => setDelay(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">Sekarang: {small} → {nowValue.toFixed(1)}; +{delay} bulan: {large} → {delayedValue.toFixed(1)}. Pilihan model: {nowChoice}.</p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">Bulan 6: {small} → {monthSixValue.toFixed(1)}; bulan 7: {large} → {monthSevenValue.toFixed(1)}. Pilihan model: {laterChoice}.</p>
      </div>
      <p aria-live="polite" className="break-words text-sm text-sky-200">
        {preferenceReversal ? "Pola pembalikan preferensi muncul: pilihan sekarang dan pilihan saat kedua hasil tertunda berbeda." : "Pada nilai ini, pola pembalikan preferensi yang ditentukan model tidak muncul."}
      </p>
    </VisualCard>
  );
}
