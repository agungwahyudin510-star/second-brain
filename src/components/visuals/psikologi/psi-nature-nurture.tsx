"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { interactionScore } from "./psych-math";

export default function PsiNatureNurture() {
  const [g, setG] = useState(5);
  const [e, setE] = useState(5);
  const score = interactionScore(g, e);
  const comparisons = [[0, 0], [10, 0], [0, 10], [10, 10]];
  return (
    <VisualCard title="Interaksi dalam model hipotetis" caption="Model hipotetis, bukan data penelitian. Skor dihitung sebagai 20 + 2g + 2e + 0,4·g·e." howToRead="Atur g dan e. Komponen perkalian membuat perubahan skor terkait g bergantung pada nilai e; ini hanya demonstrasi matematika.">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-zinc-300">Predisposisi ilustratif (g): {g}/10
          <input aria-label="Nilai predisposisi ilustratif g, dari nol sampai sepuluh" type="range" min="0" max="10" value={g} onChange={(event) => setG(Number(event.target.value))} className="mt-2 block min-h-8 w-full accent-violet-400" />
        </label>
        <label className="block text-sm text-zinc-300">Dukungan lingkungan ilustratif (e): {e}/10
          <input aria-label="Nilai dukungan lingkungan ilustratif e, dari nol sampai sepuluh" type="range" min="0" max="10" value={e} onChange={(event) => setE(Number(event.target.value))} className="mt-2 block min-h-8 w-full accent-emerald-400" />
        </label>
      </div>
      <div className="rounded-lg bg-zinc-950 p-3"><p aria-live="polite" className="text-sm text-sky-200">Skor model pada g={g}, e={e}: {score.toFixed(1)}</p>
        <svg viewBox="0 0 220 100" role="img" aria-label={`Batang skor model hipotetis bernilai ${score.toFixed(1)} dari maksimum 100`} className="mt-2 h-28 w-full">
          <rect x="10" y="28" width="200" height="32" rx="6" fill="#27272a" />
          <rect x="10" y="28" width={Math.max(0, score * 2)} height="32" rx="6" fill="#38bdf8" />
          <text x="12" y="80" fill="#d4d4d8" fontSize="10">Skor hipotetis: {score.toFixed(1)} / 100</text>
        </svg>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-0 table-fixed text-left text-xs sm:text-sm"><caption className="mb-2 text-left text-sm text-zinc-300">Perbandingan g/e rendah–tinggi</caption>
          <thead><tr className="border-b border-zinc-700"><th className="p-2">g</th><th className="p-2">e</th><th className="p-2">Skor model</th></tr></thead>
          <tbody>{comparisons.map(([gValue, eValue]) => <tr key={`${gValue}-${eValue}`} className="border-b border-zinc-800"><td className="p-2">{gValue === 0 ? "Rendah (0)" : "Tinggi (10)"}</td><td className="p-2">{eValue === 0 ? "Rendah (0)" : "Tinggi (10)"}</td><td className="p-2">{interactionScore(gValue, eValue).toFixed(0)}</td></tr>)}</tbody>
        </table>
      </div>
    </VisualCard>
  );
}
