"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { pearson, rowMeans } from "./psych-math";

const initialT1 = [60, 55, 40, 70, 50];
const initialT2 = [62, 50, 45, 66, 53];

function order(values: number[]) {
  return values.map((value, index) => index)
    .sort((left, right) => values[right] - values[left]);
}

export default function PsiStabilityChange() {
  const [t1, setT1] = useState(initialT1);
  const [t2, setT2] = useState(initialT2);
  const [noiseStep, setNoiseStep] = useState(0);
  const meanT1 = rowMeans([t1])[0];
  const meanT2 = rowMeans([t2])[0];
  const correlation = pearson(t1, t2);
  const rank1 = order(t1);
  const rank2 = order(t2);
  const ranksChanged = rank1.some((person, rank) => rank2[rank] !== person);

  function update(values: number[], setValues: (next: number[]) => void, index: number, score: number) {
    setValues(values.map((value, person) => person === index ? score : value));
  }

  function addNoise() {
    const pattern = [2, -2, 3, -3, 1];
    const nextStep = noiseStep + 1;
    setNoiseStep(nextStep);
    setT2((current) => current.map((value, index) => Math.max(0, Math.min(100, value + pattern[(index + nextStep - 1) % pattern.length]))));
  }

  return (
    <VisualCard
      title="Stabilitas peringkat dan perubahan skor"
      caption="Skor waktu 1 dan waktu 2 hipotetis; korelasi tinggi tidak berarti skor setiap orang tidak berubah."
      howToRead="Edit skor tiap orang pada dua waktu. Bandingkan rerata, perubahan individu, korelasi, dan urutan peringkat."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3">
        {[0, 1, 2, 3, 4].map((person) => (
          <section key={person} className="grid min-w-0 grid-cols-1 gap-3 rounded-lg bg-zinc-950 p-3 sm:grid-cols-2">
            <label className="block min-w-0 text-xs text-zinc-300">Orang {person + 1} · T1: {t1[person]}
              <input aria-label={`Skor orang ${person + 1} pada waktu pertama`} type="range" min="0" max="100" value={t1[person]} onChange={(event) => update(t1, setT1, person, Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
            </label>
            <label className="block min-w-0 text-xs text-zinc-300">T2: {t2[person]}
              <input aria-label={`Skor orang ${person + 1} pada waktu kedua`} type="range" min="0" max="100" value={t2[person]} onChange={(event) => update(t2, setT2, person, Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
            </label>
          </section>
        ))}
      </div>
      <button type="button" onClick={addNoise} className="min-h-10 rounded-lg border border-amber-500/40 px-3 py-2 text-sm text-amber-200">Tambah derau deterministik</button>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3 text-sm text-zinc-200">Rerata T1 {meanT1.toFixed(1)} · T2 {meanT2.toFixed(1)}</p>
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3 text-sm text-zinc-200">Korelasi Pearson r={correlation.toFixed(2)}</p>
      </div>
      <ul className="grid min-w-0 grid-cols-1 gap-1 sm:grid-cols-2">
        {t1.map((score, index) => <li key={index} className="min-w-0 break-words text-xs text-zinc-300">Orang {index + 1}: perubahan {t2[index] - score >= 0 ? "+" : ""}{t2[index] - score}</li>)}
      </ul>
      <p aria-live="polite" className="text-sm text-sky-200">Urutan peringkat berubah: {ranksChanged ? "ya" : "tidak"}.</p>
    </VisualCard>
  );
}
