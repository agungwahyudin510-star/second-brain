"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { zToPercentile } from "./psych-math";

const dimensions = [
  { name: "Keterbukaan", behavior: "mencoba pendekatan baru" },
  { name: "Kehati-hatian", behavior: "merencanakan langkah dan menindaklanjuti" },
  { name: "Ekstraversi", behavior: "mencari interaksi sosial" },
  { name: "Keramahan", behavior: "mempertimbangkan kebutuhan orang lain" },
  { name: "Neurotisisme", behavior: "lebih peka terhadap emosi negatif" },
];

export default function PsiBigFiveProfile() {
  const [scores, setScores] = useState([0, 1, -1, 0.5, -0.5]);
  const [workContext, setWorkContext] = useState(true);

  return (
    <VisualCard
      title="Big Five sebagai spektrum"
      caption="Skor-z dan persentil berikut hipotetis untuk ilustrasi distribusi normal; bukan norma tes atau ukuran individu nyata."
      howToRead="Atur tiap skor-z dan lihat persentil model. Konteks hanya mengubah contoh perilaku, bukan nilai skor."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3">
        {dimensions.map((dimension, index) => {
          const percentile = zToPercentile(scores[index]);
          const barWidth = Math.max(0, Math.min(100, percentile));
          return (
            <label key={dimension.name} className="block min-w-0 rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">
              <span className="block break-words">{dimension.name}: z={scores[index].toFixed(1)} · persentil {percentile.toFixed(1)}</span>
              <input aria-label={`Skor-z dimensi ${dimension.name}, minus tiga sampai plus tiga`} type="range" min="-3" max="3" step="0.1" value={scores[index]} onChange={(event) => setScores((current) => current.map((score, scoreIndex) => scoreIndex === index ? Number(event.target.value) : score))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
              <span role="img" aria-label={`${dimension.name}, persentil ${percentile.toFixed(1)}`} className="mt-1 block h-2 w-full min-w-0 overflow-hidden rounded bg-zinc-700">
                <span className="block h-full bg-sky-400" style={{ width: `${barWidth}%` }} />
              </span>
            </label>
          );
        })}
      </div>
      <div className="grid min-w-0 grid-cols-2 gap-2">
        <button type="button" aria-pressed={workContext} onClick={() => setWorkContext(true)} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Konteks kerja</button>
        <button type="button" aria-pressed={!workContext} onClick={() => setWorkContext(false)} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Konteks santai</button>
      </div>
      <p className="break-words text-sm text-zinc-300">
        Contoh hipotesis: skor yang lebih tinggi pada {dimensions[scores.indexOf(Math.max(...scores))].name.toLowerCase()} mungkin berkaitan dengan {workContext ? "mencoba metode baru pada proyek kerja" : "mencoba aktivitas baru saat waktu luang"}. Perilaku aktual dipengaruhi situasi.
      </p>
      <p className="text-sm font-medium text-emerald-200">Lima spektrum, bukan tipe kepribadian tetap.</p>
    </VisualCard>
  );
}
