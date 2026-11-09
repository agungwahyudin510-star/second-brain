"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { standardErrorOfMeasurement } from "./psych-math";

export default function PsiTestReliability() {
  const [sd, setSd] = useState(15);
  const [reliability, setReliability] = useState(0.91);
  const [score, setScore] = useState(100);
  const [interpretation, setInterpretation] = useState<"reliable" | "both">("reliable");
  const sem = standardErrorOfMeasurement(sd, reliability);
  const margin = 1.96 * sem;
  const lower = score - margin;
  const upper = score + margin;
  const scaleMin = Math.min(0, lower - 5);
  const scaleMax = Math.max(150, upper + 5);
  const position = (value: number) => ((value - scaleMin) / (scaleMax - scaleMin)) * 100;

  return (
    <VisualCard
      title="Reliabilitas, SEM, dan validitas"
      caption="Skala SD=15 dan reliabilitas 0,91 bersifat hipotetis; interval sekitar ±1,96 SEM adalah ilustrasi pengukuran."
      howToRead="Ubah SD, reliabilitas, dan skor. SEM menunjukkan ketidakpastian pengukuran pada model; reliabilitas tidak dengan sendirinya menjamin validitas."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">SD: {sd}
          <input aria-label="Simpangan baku dari lima sampai dua puluh" type="range" min="5" max="20" value={sd} onChange={(event) => setSd(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Reliabilitas: {reliability.toFixed(2)}
          <input aria-label="Reliabilitas dari 0,50 sampai 0,99" type="range" min="0.5" max="0.99" step="0.01" value={reliability} onChange={(event) => setReliability(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Skor teramati: {score}
          <input aria-label="Skor teramati dari lima puluh sampai seratus lima puluh" type="range" min="50" max="150" value={score} onChange={(event) => setScore(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
      </div>
      <p aria-live="polite" className="break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">SEM={sem.toFixed(2)} · interval ilustratif {lower.toFixed(2)}–{upper.toFixed(2)} (±{margin.toFixed(2)}).</p>
      <svg viewBox="0 0 100 24" role="img" aria-label={`Rentang skor ilustratif dari ${lower.toFixed(1)} sampai ${upper.toFixed(1)}`} className="h-12 w-full min-w-0 rounded bg-zinc-950 p-2">
        <line x1="5" y1="12" x2="95" y2="12" stroke="#52525b" strokeWidth="2" />
        <line x1={Math.max(5, Math.min(95, position(lower)))} y1="12" x2={Math.max(5, Math.min(95, position(upper)))} y2="12" stroke="#38bdf8" strokeWidth="4" />
        <circle cx={Math.max(5, Math.min(95, position(score)))} cy="12" r="3" fill="#f472b6" />
      </svg>
      <div className="grid min-w-0 grid-cols-2 gap-2">
        <button type="button" aria-pressed={interpretation === "reliable"} onClick={() => setInterpretation("reliable")} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Reliabel, belum tentu valid</button>
        <button type="button" aria-pressed={interpretation === "both"} onClick={() => setInterpretation("both")} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Reliabel dan valid</button>
      </div>
      <p className="break-words text-sm text-zinc-300">
        {interpretation === "reliable" ? "Pengukuran bisa konsisten tetapi mengukur hal yang berbeda dari tujuan. Reliabilitas saja tidak cukup untuk menyatakan validitas." : "Contoh ini mengandaikan konsistensi dan bukti validitas yang sesuai tujuan; kedua kualitas tetap perlu didukung bukti."}
      </p>
    </VisualCard>
  );
}
