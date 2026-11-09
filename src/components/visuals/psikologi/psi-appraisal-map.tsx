"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { appraisalIntensity } from "./psych-math";

export default function PsiAppraisalMap() {
  const [importance, setImportance] = useState(8);
  const [threat, setThreat] = useState(5);
  const [reappraisedThreat, setReappraisedThreat] = useState(3);
  const [applied, setApplied] = useState(false);
  const activeThreat = applied ? reappraisedThreat : threat;
  return (
    <VisualCard title="Peta appraisal dan respons" caption="Intensitas = pentingnya tujuan × ancaman yang dinilai ÷ 10. Rumus ini ilustratif, bukan skala emosi." howToRead="Atur kepentingan dan ancaman. Reappraisal menerapkan nilai ancaman pilihanmu untuk menunjukkan bagaimana keluaran model berubah.">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Pentingnya tujuan: {importance}/10
          <input aria-label="Pentingnya tujuan dari nol sampai sepuluh" type="range" min="0" max="10" value={importance} onChange={(event) => { setImportance(Number(event.target.value)); setApplied(false); }} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Ancaman dinilai: {threat}/10
          <input aria-label="Ancaman yang dinilai dari nol sampai sepuluh" type="range" min="0" max="10" value={threat} onChange={(event) => { setThreat(Number(event.target.value)); setApplied(false); }} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 text-center text-sm sm:grid-cols-4">
        {["Pemicu", "Interpretasi", "Tubuh", "Tindakan"].map((item, index) => <div key={item} className="flex min-w-0 items-center gap-2"><p className="min-w-0 flex-1 break-words rounded-lg bg-zinc-950 p-3">{item}</p>{index < 3 && <span className="text-sky-300 sm:hidden" aria-hidden="true">↓</span>}{index < 3 && <span className="hidden text-sky-300 sm:block" aria-hidden="true">→</span>}</div>)}
      </div>
      <div className="min-w-0 space-y-3 rounded-lg bg-zinc-950 p-3">
        <p aria-live="polite" className="text-sm text-sky-200">Intensitas model: {appraisalIntensity(importance, activeThreat).toFixed(1)} (ancaman {activeThreat})</p>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Ancaman setelah meninjau makna: {reappraisedThreat}/10
          <input aria-label="Nilai ancaman pilihan setelah reappraisal dari nol sampai sepuluh" type="range" min="0" max="10" value={reappraisedThreat} onChange={(event) => setReappraisedThreat(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <button type="button" onClick={() => setApplied(true)} className="min-h-10 max-w-full rounded-lg border border-emerald-500/50 px-3 py-2 text-sm text-emerald-200">Terapkan reappraisal</button>
        {applied && <p role="status" className="break-words text-xs text-zinc-400">Model memakai penilaian ancaman yang dipilih; ini tidak menyangkal fakta atau menjamin perubahan perasaan.</p>}
      </div>
    </VisualCard>
  );
}
