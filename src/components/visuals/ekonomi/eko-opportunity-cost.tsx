"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

const choices = [
  { id: "study", name: "Belajar 2 jam", value: 8, color: "bg-sky-400" },
  { id: "work", name: "Kerja lepas 2 jam", value: 10, color: "bg-emerald-400" },
  { id: "rest", name: "Istirahat 2 jam", value: 7, color: "bg-amber-400" },
];

export default function EkoOpportunityCost() {
  const [selected, setSelected] = useState(choices[0].id);
  const selectedChoice = choices.find((choice) => choice.id === selected) ?? choices[0];
  const nextBest = choices.filter((choice) => choice.id !== selected).reduce((best, choice) => choice.value > best.value ? choice : best);

  return (
    <VisualCard
      title="Biaya peluang: nilai pilihan terbaik berikutnya"
      caption="Nilai pada batang adalah satuan manfaat hipotetis untuk membandingkan alternatif; bukan rupiah atau ukuran universal."
      howToRead="Pilih satu opsi sebagai keputusan yang diambil. Biaya peluangnya adalah nilai tertinggi di antara opsi yang tidak dipilih, bukan jumlah semua alternatif."
    >
      <div className="grid gap-2 sm:grid-cols-3">
        {choices.map((choice) => (
          <button key={choice.id} type="button" aria-pressed={selected === choice.id} onClick={() => setSelected(choice.id)} className={`min-h-11 rounded-lg border px-3 text-sm ${selected === choice.id ? "border-sky-400 bg-sky-500/10 text-white" : "border-zinc-700 text-zinc-300"}`}>
            Ambil: {choice.name}
          </button>
        ))}
      </div>
      <div className="space-y-3" role="img" aria-label={`Perbandingan manfaat ilustratif. Keputusan: ${selectedChoice.name}. Pilihan terbaik berikutnya: ${nextBest.name} dengan nilai ${nextBest.value}.`}>
        {choices.map((choice) => (
          <div key={choice.id}>
            <div className="mb-1 flex justify-between gap-2 text-xs text-zinc-300"><span>{choice.name}{choice.id === selected ? " • dipilih" : choice.id === nextBest.id ? " • biaya peluang" : ""}</span><span>{choice.value} unit</span></div>
            <div className="h-3 rounded-full bg-zinc-800"><div className={`h-3 rounded-full ${choice.color}`} style={{ width: `${choice.value * 9}%` }} /></div>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="text-sm text-emerald-200">Biaya peluang memilih “{selectedChoice.name}” adalah “{nextBest.name}” ({nextBest.value} unit manfaat ilustratif).</p>
    </VisualCard>
  );
}
