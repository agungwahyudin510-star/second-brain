"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { criticismIntensity } from "./psych-math";

const interpretations = {
  attack: ["Serangan pribadi", 9],
  task: ["Masukan tugas", 4],
  unclear: ["Belum jelas", 6],
} as const;
const responses = {
  reply: ["Membalas langsung", "Dapat mengklarifikasi cepat, tetapi balasan saat tegang dapat memperbesar konflik."],
  pause: ["Jeda lalu klarifikasi", "Memberi waktu memeriksa fakta dan meminta contoh; tidak menjamin kesepakatan."],
  avoid: ["Menghindar", "Jeda dapat melindungi diri bila tidak aman, tetapi menghindar terus dapat menunda perbaikan."],
} as const;
const hypotheses = ["Makna kritik berbeda", "Instruksi revisi kurang jelas", "Konteks publik memengaruhi respons"];

export default function PsiCriticismCase() {
  const [interpretation, setInterpretation] = useState<keyof typeof interpretations>("attack");
  const [response, setResponse] = useState<keyof typeof responses>("pause");
  const [selected, setSelected] = useState<string[]>([]);
  const [label, threat] = interpretations[interpretation];
  const [, consequence] = responses[response];
  const toggle = (item: string) => setSelected((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
  return (
    <VisualCard title="Studi kasus: menerima kritik" caption="Model ilustratif memakai pentingnya tujuan 8 dan ancaman menurut interpretasi; skor bukan ukuran emosi siswa." howToRead="Pilih interpretasi dan respons, lalu pertimbangkan hipotesis alternatif. Tafsir adalah dugaan untuk diperiksa, bukan fakta tentang maksud pemberi kritik.">
      <label className="block min-w-0 text-sm text-zinc-300">Tafsir kritik
        <select aria-label="Pilih interpretasi terhadap kritik" value={interpretation} onChange={(event) => setInterpretation(event.target.value as keyof typeof interpretations)} className="mt-2 block min-h-10 w-full min-w-0 max-w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          <option value="attack">Serangan pribadi</option><option value="task">Masukan tugas</option><option value="unclear">Belum jelas</option>
        </select>
      </label>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">Interpretasi: {label} · ancaman {threat}/10 · intensitas model: {criticismIntensity(8, threat).toFixed(1)}</p>
      <label className="block min-w-0 text-sm text-zinc-300">Respons yang dipilih
        <select aria-label="Pilih respons terhadap kritik" value={response} onChange={(event) => setResponse(event.target.value as keyof typeof responses)} className="mt-2 block min-h-10 w-full min-w-0 max-w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {Object.entries(responses).map(([key, [title]]) => <option key={key} value={key}>{title}</option>)}
        </select>
      </label>
      <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm"><strong>Konsekuensi kualitatif:</strong> {consequence}</p>
      <fieldset className="min-w-0 space-y-2">
        <legend className="mb-2 text-sm text-zinc-300">Hipotesis kompetitif untuk diperiksa</legend>
        {hypotheses.map((item) => <label key={item} className="flex min-h-10 min-w-0 items-center gap-2 break-words text-sm text-zinc-300"><input type="checkbox" aria-label={`Pilih hipotesis: ${item}`} checked={selected.includes(item)} onChange={() => toggle(item)} className="h-4 w-4 shrink-0 accent-sky-400" />{item}</label>)}
      </fieldset>
      <p aria-live="polite" className={`text-sm ${selected.length >= 2 ? "text-emerald-200" : "text-amber-200"}`}>Hipotesis kompetitif ≥ 2: {selected.length >= 2 ? "terpenuhi" : `belum (${selected.length}/2)`}</p>
    </VisualCard>
  );
}
