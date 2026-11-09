"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { colMeans, rowMeans } from "./psych-math";

const situations = ["Rapat", "Pesta", "Belajar sendiri"];

export default function PsiTraitSituation() {
  const [scores, setScores] = useState([[8, 9, 2], [5, 6, 1]]);
  const peopleMeans = rowMeans(scores);
  const situationMeans = colMeans(scores);
  const difference = peopleMeans[0] - peopleMeans[1];
  const situationRange = Math.max(...situationMeans) - Math.min(...situationMeans);
  const consistent = scores[0].every((score, index) => score > scores[1][index]);

  function updateScore(person: number, situation: number, score: number) {
    setScores((current) => current.map((row, rowIndex) => row.map((value, columnIndex) => (
      rowIndex === person && columnIndex === situation ? score : value
    ))));
  }

  return (
    <VisualCard
      title="Perbedaan orang dan situasi"
      caption="Skor 0–10 pada matriks ini hipotetis, bukan norma tes atau penilaian kepribadian."
      howToRead="Ubah skor tiap orang pada tiap situasi. Bandingkan rerata antarorang dengan rentang rerata antarsituasi."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3">
        {scores.map((row, person) => (
          <section key={person} className="min-w-0 space-y-3 rounded-lg bg-zinc-950 p-3">
            <h3 className="text-sm font-medium text-zinc-100">Orang {person === 0 ? "A" : "B"}</h3>
            {row.map((score, situation) => (
              <label key={situations[situation]} className="block min-w-0 text-xs text-zinc-300">
                {situations[situation]}: {score}
                <input aria-label={`Skor orang ${person === 0 ? "A" : "B"} pada situasi ${situations[situation]}, nol sampai sepuluh`} type="range" min="0" max="10" value={score} onChange={(event) => updateScore(person, situation, Number(event.target.value))} className="mt-1 block min-h-8 w-full min-w-0 accent-sky-400" />
              </label>
            ))}
            <p className="text-xs text-sky-200">Rerata orang {person === 0 ? "A" : "B"}: {peopleMeans[person].toFixed(2)}</p>
          </section>
        ))}
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">Selisih rerata orang A−B: {difference.toFixed(2)}</p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">Rentang rerata situasi: {situationRange.toFixed(2)}</p>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3">
        {situationMeans.map((mean, index) => <p key={situations[index]} className="min-w-0 break-words rounded bg-zinc-950 p-2 text-xs text-zinc-300">{situations[index]}: rerata {mean.toFixed(2)}</p>)}
      </div>
      <p aria-live="polite" className="text-sm text-sky-200">Urutan A &gt; B di semua situasi: {consistent ? "ya" : "tidak"}.</p>
    </VisualCard>
  );
}
