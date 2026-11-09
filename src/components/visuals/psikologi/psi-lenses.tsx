"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";

const lenses = {
  Biologis: ["Kondisi fisik saat kritik diterima mungkin berkaitan dengan respons.", "Waktu, laporan kondisi sukarela, serta urutan peristiwa.", "Data tubuh tidak menjelaskan makna sosial atau interpretasi."],
  Kognitif: ["Siswa menafsirkan kritik dengan cara berbeda sehingga memilih respons berbeda.", "Penjelasan siswa tentang makna komentar dan langkah revisi.", "Laporan interpretasi dapat tidak lengkap atau berubah."],
  Perilaku: ["Konsekuensi setelah meminta bantuan dapat membentuk kebiasaan menunda atau merevisi.", "Waktu mulai revisi, bantuan yang diterima, dan respons yang menyusul.", "Pola perilaku tidak sendiri menjelaskan pengalaman mental."],
  Sosiokultural: ["Norma kelas atau relasi dengan pemberi kritik memengaruhi respons.", "Konteks pemberian kritik, relasi, dan aturan kelompok.", "Satu kelas tidak mewakili semua konteks budaya."],
} as const;

export default function PsiLenses() {
  const [lens, setLens] = useState<keyof typeof lenses>("Kognitif");
  const [checked, setChecked] = useState<string[]>([]);
  const [hypothesis, data, limit] = lenses[lens];
  return (
    <VisualCard title="Uji beberapa lensa" caption="Kasus ilustratif: siswa mendapat kritik lalu menunda belajar atau revisi." howToRead="Pilih lensa untuk membuat satu hipotesis, lalu centang alternatif yang juga layak diuji. Checklist mengingatkan agar tidak berhenti pada satu penjelasan.">
      <label className="block text-sm text-zinc-300">Lensa
        <select aria-label="Pilih lensa psikologi" value={lens} onChange={(event) => setLens(event.target.value as keyof typeof lenses)} className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {Object.keys(lenses).map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <div className="rounded-lg bg-zinc-950 p-3 text-sm"><p><strong className="text-sky-200">Hipotesis:</strong> {hypothesis}</p><p className="mt-2"><strong>Data:</strong> {data}</p><p className="mt-2 text-zinc-400"><strong>Batas:</strong> {limit}</p></div>
      <fieldset className="space-y-2 text-sm"><legend className="mb-2 font-medium">Hipotesis alternatif untuk kasus yang sama</legend>
        {Object.keys(lenses).filter((item) => item !== lens).map((item) => <label key={item} className="flex min-h-10 items-center gap-2 text-zinc-300"><input type="checkbox" aria-label={`Tambahkan lensa ${item} sebagai hipotesis kompetitif`} checked={checked.includes(item)} onChange={(event) => setChecked((current) => event.target.checked ? [...current, item] : current.filter((value) => value !== item))} className="h-4 w-4 accent-emerald-400" />Pertimbangkan lensa {item}</label>)}
      </fieldset>
      <p aria-live="polite" className={checked.length >= 1 ? "text-sm text-emerald-200" : "text-sm text-amber-200"}>Hipotesis kompetitif ≥2: {checked.length >= 1 ? "terpenuhi (pilihan utama + alternatif)" : "belum — tambahkan alternatif"}</p>
    </VisualCard>
  );
}
