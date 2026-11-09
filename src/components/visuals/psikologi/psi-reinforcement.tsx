"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { ratioReinforcements } from "./psych-math";

const consequences = {
  addPleasant: ["Penguatan positif", "Tambahkan umpan balik atau pujian spesifik setelah perilaku yang ingin ditingkatkan."],
  removeUnpleasant: ["Penguatan negatif", "Hentikan pengingat setelah langkah yang diharapkan dilakukan."],
  addUnpleasant: ["Hukuman positif", "Tambahkan konsekuensi tidak menyenangkan; pertimbangkan efek samping dan ajarkan alternatif."],
  removePleasant: ["Hukuman negatif", "Hilangkan akses yang disepakati setelah perilaku; pastikan aturan jelas dan proporsional."],
} as const;

export default function PsiReinforcement() {
  const [consequence, setConsequence] = useState<keyof typeof consequences>("addPleasant");
  const [responses, setResponses] = useState(100);
  const [ratio, setRatio] = useState(5);
  const [variable, setVariable] = useState(false);
  const [name, example] = consequences[consequence];
  return (
    <VisualCard title="Konsekuensi dan jadwal rasio" caption="Klasifikasi bergantung pada perubahan perilaku; contoh dan hitungan jadwal adalah ilustrasi." howToRead="Pilih apakah sesuatu ditambahkan atau dihilangkan serta dampak konsekuensinya. Ubah respons dan rasio untuk menghitung penguatan rata-rata.">
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm text-zinc-300">Konsekuensi dan perubahan perilaku</legend>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {Object.entries(consequences).map(([key, [title]]) => <label key={key} className="flex min-h-10 min-w-0 items-center gap-2 break-words rounded bg-zinc-950 p-2 text-sm text-zinc-300"><input type="radio" name="consequence-type" aria-label={`Pilih ${title}`} checked={consequence === key} onChange={() => setConsequence(key as keyof typeof consequences)} className="h-4 w-4 shrink-0 accent-sky-400" />{key.startsWith("add") ? "Tambah" : "Hapus"} · {key.endsWith("Pleasant") ? "menyenangkan" : "tidak menyenangkan"}</label>)}
        </div>
      </fieldset>
      <div className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm"><p className="font-medium text-sky-200">{name}</p><p className="mt-1">{example}</p></div>
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Respons: {responses}
          <input aria-label="Jumlah respons dari sepuluh sampai dua ratus" type="range" min="10" max="200" step="10" value={responses} onChange={(event) => setResponses(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Rasio: {ratio}
          <input aria-label="Rasio respons per penguatan dari dua sampai dua puluh" type="range" min="2" max="20" value={ratio} onChange={(event) => setRatio(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
      </div>
      <label className="flex min-h-10 min-w-0 items-center gap-2 text-sm text-zinc-300"><input type="checkbox" aria-label="Aktifkan jadwal rasio variabel" checked={variable} onChange={(event) => setVariable(event.target.checked)} className="h-4 w-4 accent-sky-400" />Rasio variabel (rata-rata)</label>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-emerald-200">Perkiraan penguatan: {ratioReinforcements(responses, ratio).toFixed(0)} dari {responses} respons{variable ? `; waktu tidak dapat diprediksi, rata-rata rasio ${ratio}` : `; rasio tetap ${ratio}`}</p>
    </VisualCard>
  );
}
