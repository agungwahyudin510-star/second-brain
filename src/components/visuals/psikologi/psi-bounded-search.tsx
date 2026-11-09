"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { maximizeOutcome, satisficeOutcome } from "./psych-math";

const values = [60, 72, 65, 80, 70, 85, 68, 78];

export default function PsiBoundedSearch() {
  const [threshold, setThreshold] = useState(75);
  const [costPer, setCostPer] = useState(2);
  const satisficer = satisficeOutcome(values, threshold, costPer);
  const maximizer = maximizeOutcome(values, costPer);
  const winner = satisficer.net === null || maximizer.net === null
    ? "Belum ada opsi"
    : satisficer.net === maximizer.net
      ? "Nilai bersih sama"
      : satisficer.net > maximizer.net ? "Satisficer" : "Maximizer";

  return (
    <VisualCard
      title="Pencarian satisficing dan maximizing"
      caption="Nilai opsi, ambang, dan biaya pemeriksaan adalah model ilustratif, bukan ukuran keputusan nyata."
      howToRead="Satisficer berhenti pada nilai pertama yang mencapai ambang; maximizer memeriksa semua opsi. Bandingkan nilai bersih setelah biaya."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">
          Ambang puas: {threshold}
          <input aria-label="Ambang puas dari 60 sampai 90" type="range" min="60" max="90" value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">
          Biaya per opsi: {costPer}
          <input aria-label="Biaya untuk memeriksa setiap opsi dari 0 sampai 5" type="range" min="0" max="5" value={costPer} onChange={(event) => setCostPer(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
      </div>
      <ol className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        {values.map((value, index) => {
          const checkedBySatisficer = index < satisficer.checked;
          const checkedByMaximizer = index < maximizer.checked;
          return (
            <li key={`${index}-${value}`} className="min-w-0 rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">
              <span className="font-medium">Opsi {index + 1}: {value}</span>
              <span className="mt-1 block break-words text-xs text-zinc-400">
                Satisficer: {checkedBySatisficer ? (satisficer.selectedIndex === index ? "dipilih, berhenti" : "diperiksa") : "belum diperiksa"} · Maximizer: {checkedByMaximizer ? (maximizer.selectedIndex === index ? "dipilih" : "diperiksa") : "belum diperiksa"}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">
          Satisficer: diperiksa {satisficer.checked}/8; nilai {satisficer.selectedValue ?? "tak ada yang memenuhi ambang"}; bersih {satisficer.net ?? "—"}.
        </p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">
          Maximizer: diperiksa {maximizer.checked}/8; nilai {maximizer.selectedValue ?? "—"}; bersih {maximizer.net ?? "—"}.
        </p>
      </div>
      <p aria-live="polite" className="text-sm text-sky-200">Lebih tinggi pada biaya ini: {winner}.</p>
    </VisualCard>
  );
}
