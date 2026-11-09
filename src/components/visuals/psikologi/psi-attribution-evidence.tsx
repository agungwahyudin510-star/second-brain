"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { consensusPct } from "./psych-math";

export default function PsiAttributionEvidence() {
  const [same, setSame] = useState(8);
  const [consistencyHigh, setConsistencyHigh] = useState(true);
  const [distinctive, setDistinctive] = useState(true);
  const [checked, setChecked] = useState([false, false, false]);
  const consensus = consensusPct(same, 10);
  const explanation = !consistencyHigh
    ? "Campuran: konsistensi rendah membuat pola belum stabil."
    : consensus >= 60 && distinctive
      ? "Situasional lebih didukung untuk diperiksa: konsensus relatif tinggi dan perilaku khas pada situasi ini."
      : consensus < 60 && !distinctive
        ? "Disposisional lebih didukung untuk diperiksa: konsensus relatif rendah dan perilaku tidak khas satu situasi."
        : "Campuran: periksa dimensi lain dan bukti sebelum menyimpulkan.";
  const hypotheses = ["Perubahan situasi atau aturan", "Perbedaan sumber daya / akses", "Faktor pribadi dan variasi kebetulan"];

  return (
    <VisualCard
      title="Konsensus, konsistensi, dan keunikan"
      caption="Model kovariasi membantu mengorganisasi pertanyaan atribusi; hasilnya ilustratif dan tidak memastikan sebab."
      howToRead="Ubah konsensus dari 0–10, konsistensi individu, dan apakah perilaku khas pada situasi ini. Lihat hipotesis situasional atau disposisional yang patut diperiksa."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">Orang lain yang sama-sama terlambat: {same}/10 ({consensus.toFixed(0)}%)
          <input aria-label="Jumlah dari sepuluh orang lain yang juga terlambat" type="range" min="0" max="10" value={same} onChange={(event) => setSame(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="flex min-w-0 items-center gap-2 text-sm text-zinc-300">
          <input aria-label="Konsistensi perilaku individu tinggi" type="checkbox" checked={consistencyHigh} onChange={(event) => setConsistencyHigh(event.target.checked)} className="min-h-5 min-w-5 accent-sky-400" />
          Konsistensi tinggi dalam situasi serupa
        </label>
        <label className="flex min-w-0 items-center gap-2 text-sm text-zinc-300">
          <input aria-label="Perilaku khas pada situasi ini" type="checkbox" checked={distinctive} onChange={(event) => setDistinctive(event.target.checked)} className="min-h-5 min-w-5 accent-sky-400" />
          Perilaku khas pada situasi ini
        </label>
      </div>
      <p aria-live="polite" className="break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">{explanation}</p>
      <fieldset className="min-w-0 rounded-lg border border-zinc-700 p-3">
        <legend className="px-1 text-sm text-zinc-300">Periksa hipotesis kompetitif</legend>
        <div className="space-y-2">
          {hypotheses.map((hypothesis, index) => (
            <label key={hypothesis} className="flex min-w-0 items-start gap-2 text-sm text-zinc-300">
              <input aria-label={`Periksa hipotesis: ${hypothesis}`} type="checkbox" checked={checked[index]} onChange={(event) => setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? event.target.checked : value))} className="mt-0.5 min-h-5 min-w-5 accent-sky-400" />
              <span className="min-w-0 break-words">{hypothesis}</span>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-zinc-400">Hipotesis yang dipertimbangkan: {checked.filter(Boolean).length}/3</p>
      </fieldset>
    </VisualCard>
  );
}
