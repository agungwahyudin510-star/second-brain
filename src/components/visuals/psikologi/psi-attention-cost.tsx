"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { effectiveFocus } from "./psych-math";

export default function PsiAttentionCost() {
  const [interruptions, setInterruptions] = useState(5);
  const [recovery, setRecovery] = useState(3);
  const modeledFocus = effectiveFocus(interruptions, recovery);
  const focus = Math.max(0, Math.min(60, modeledFocus));
  const lost = 60 - focus;
  const percentage = (focus / 60) * 100;

  return (
    <VisualCard
      title="Biaya pemulihan fokus"
      caption="Model ilustratif untuk blok 60 menit: fokus efektif = 60 − gangguan per jam × menit pemulihan. Bukan estimasi penelitian."
      howToRead="Atur jumlah gangguan dan pemulihan. Model membatasi fokus yang ditampilkan antara 0 dan 60 menit; gangguan nyata tidak selalu berdurasi sama."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Gangguan per jam: {interruptions}
          <input aria-label="Jumlah gangguan per jam dari nol sampai sepuluh" type="range" min="0" max="10" value={interruptions} onChange={(event) => setInterruptions(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Biaya pemulihan: {recovery} menit
          <input aria-label="Biaya pemulihan fokus per gangguan dari nol sampai sepuluh menit" type="range" min="0" max="10" value={recovery} onChange={(event) => setRecovery(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      <div className="min-w-0 rounded-lg bg-zinc-950 p-3">
        <div className="flex h-8 w-full overflow-hidden rounded" role="img" aria-label={`${focus} menit fokus efektif dan ${lost} menit hilang dalam model dari blok 60 menit`}>
          <div className="h-full bg-emerald-500" style={{ width: `${percentage}%` }} />
          <div className="h-full flex-1 bg-rose-500/70" />
        </div>
        <div className="mt-2 grid min-w-0 grid-cols-1 gap-1 break-words text-sm sm:grid-cols-2">
          <p className="text-emerald-200">Fokus efektif: {focus} menit ({percentage.toFixed(0)}%)</p>
          <p className="text-rose-200">Waktu pemulihan model: {lost} menit</p>
        </div>
        {modeledFocus < 0 && <p className="mt-2 break-words text-xs text-amber-200">Hasil rumus di bawah nol; tampilan dibatasi ke 0 menit karena durasi fokus tidak dapat negatif.</p>}
      </div>
    </VisualCard>
  );
}
