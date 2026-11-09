"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { acquisition, extinction } from "./psych-math";

const scenarios = [
  { text: "Bunyi tertentu berulang bersama kabar penting, lalu bunyi memicu antisipasi.", answer: "Klasik" },
  { text: "Siswa menyelesaikan latihan dan menerima umpan balik yang membuatnya lebih rutin.", answer: "Operan" },
  { text: "Nada aplikasi muncul bersama pesan dari teman hingga diasosiasikan dengan pesan.", answer: "Klasik" },
  { text: "Pengguna memeriksa aplikasi dan sesekali menemukan kabar menarik setelahnya.", answer: "Operan" },
];

export default function PsiConditioning() {
  const [trials, setTrials] = useState(3);
  const [extinctionTrials, setExtinctionTrials] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null, null]);
  const acquired = acquisition(trials, 0.2, 1, 0);
  const currentV = acquired[acquired.length - 1];
  const extinguishedV = extinction(currentV, extinctionTrials, 0.2);
  const points = acquisition(15, 0.2, 1, 0);
  const x = (index: number) => 20 + index * 10;
  const y = (value: number) => 86 - value * 70;
  const correct = answers.filter((answer, index) => answer === scenarios[index].answer).length;
  return (
    <VisualCard title="Asosiasi dan konsekuensi" caption="Akuisisi ΔV=0,2(1−V) dan ekstingsi adalah model ilustratif, bukan estimasi penelitian." howToRead="Atur percobaan akuisisi, jalankan ekstingsi tanpa penguat, lalu klasifikasikan empat skenario sebagai asosiasi stimulus atau konsekuensi tindakan.">
      <label className="block min-w-0 break-words text-sm text-zinc-300">Percobaan akuisisi: {trials}
        <input aria-label="Jumlah percobaan akuisisi dari nol sampai lima belas" type="range" min="0" max="15" value={trials} onChange={(event) => { setTrials(Number(event.target.value)); setExtinctionTrials(0); }} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
      </label>
      <svg viewBox="0 0 180 100" role="img" aria-label={`Kurva akuisisi ilustratif hingga percobaan ${trials}; nilai V saat ini ${currentV.toFixed(3)}`} className="h-36 w-full min-w-0 rounded-lg bg-zinc-950 p-2">
        <path d="M20 10V86H170" fill="none" stroke="#71717a" />
        <polyline points={points.map((value, index) => `${x(index)},${y(value)}`).join(" ")} fill="none" stroke="#38bdf8" strokeWidth="2" />
        <line x1={x(trials)} y1="10" x2={x(trials)} y2="86" stroke="#f472b6" strokeDasharray="2 2" />
        <circle cx={x(trials)} cy={y(currentV)} r="3" fill="#f472b6" />
        <text x="25" y="96" fill="#a1a1aa" fontSize="7">Percobaan</text>
      </svg>
      <p aria-live="polite" className="text-sm text-sky-200">Nilai V: {currentV.toFixed(3)} · setelah ekstingsi: {extinguishedV.toFixed(3)}</p>
      <button type="button" onClick={() => setExtinctionTrials((value) => Math.min(15, value + 1))} className="min-h-10 rounded-lg border border-amber-500/40 px-3 py-2 text-sm text-amber-200">Ekstingsi tanpa penguat ({extinctionTrials})</button>
      <div className="min-w-0 space-y-2">
        {scenarios.map((scenario, index) => <div key={scenario.text} className="grid min-w-0 grid-cols-1 gap-2 rounded-lg bg-zinc-950 p-3 sm:grid-cols-[1fr_auto] sm:items-center"><p className="min-w-0 break-words text-sm">{index + 1}. {scenario.text}</p><select aria-label={`Klasifikasikan skenario ${index + 1}`} value={answers[index] ?? ""} onChange={(event) => setAnswers((current) => current.map((item, itemIndex) => itemIndex === index ? event.target.value || null : item))} className="min-h-10 min-w-0 max-w-full rounded border border-zinc-700 bg-zinc-900 px-2 text-sm"><option value="">Pilih</option><option value="Klasik">Klasik</option><option value="Operan">Operan</option></select></div>)}
      </div>
      <p aria-live="polite" className="text-sm text-emerald-200">Skor klasifikasi: {correct}/4</p>
    </VisualCard>
  );
}
