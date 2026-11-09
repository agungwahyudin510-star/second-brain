"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { agreementPercent } from "./psych-math";

const measures = {
  "Fokus belajar": [
    ["Ketepatan 10 soal", "Performa pada soal yang ditentukan.", "Kondisi fokus lain dan pengetahuan sebelumnya."],
    ["Menit tanpa membuka ponsel", "Perilaku membuka ponsel selama sesi.", "Lamunan atau distraksi non-ponsel."],
    ["Laporan diri 1–10", "Pengalaman fokus menurut peserta.", "Ingatan dan tafsir skala tiap orang."],
  ],
  Stres: [
    ["Laporan diri 1–10", "Pengalaman yang dilaporkan saat itu.", "Perbedaan pemaknaan angka dan kemauan melapor."],
    ["Jumlah jeda dalam tugas", "Pola jeda pada kegiatan tertentu.", "Alasan jeda dan konteks tugas."],
    ["Catatan situasi", "Kondisi yang dianggap menekan.", "Tidak langsung mengukur intensitas pengalaman."],
  ],
  "Kebiasaan belajar": [
    ["Jumlah sesi dimulai", "Frekuensi memulai sesi dalam periode.", "Durasi dan kualitas sesi."],
    ["Menit mengerjakan tugas", "Waktu yang dicatat untuk tugas.", "Ketepatan pencatatan dan jeda."],
    ["Laporan rutin 1–10", "Penilaian diri atas konsistensi.", "Standar konsistensi dapat berbeda."],
  ],
} as const;

export default function PsiOperational() {
  const [construct, setConstruct] = useState<keyof typeof measures>("Fokus belajar");
  const [measureIndex, setMeasureIndex] = useState(0);
  const [agreements, setAgreements] = useState(45);
  const options = measures[construct];
  const [captured, missed,] = options[measureIndex];

  return (
    <VisualCard title="Dari konstruk ke ukuran" caption="Ukuran adalah pilihan operasional, bukan definisi lengkap dari konstruk psikologis." howToRead="Ubah konstruk atau ukuran untuk melihat aspek yang ditangkap dan yang mungkin terlewat. Slider kesepakatan memakai 50 pengamatan hipotetis." >
      <label className="block text-sm text-zinc-300">Konstruk
        <select aria-label="Pilih konstruk psikologi" value={construct} onChange={(event) => { setConstruct(event.target.value as keyof typeof measures); setMeasureIndex(0); }} className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {Object.keys(measures).map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label className="block text-sm text-zinc-300">Ukuran operasional
        <select aria-label="Pilih ukuran operasional" value={measureIndex} onChange={(event) => setMeasureIndex(Number(event.target.value))} className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {options.map(([name], index) => <option key={name} value={index}>{name}</option>)}
        </select>
      </label>
      <div className="grid gap-2 sm:grid-cols-2">
        <p className="rounded-lg bg-zinc-950 p-3 text-sm"><strong className="text-emerald-200">Ditangkap:</strong> {captured}</p>
        <p className="rounded-lg bg-zinc-950 p-3 text-sm"><strong className="text-amber-200">Terlewat:</strong> {missed}</p>
      </div>
      <div className="rounded-lg border border-zinc-800 p-3">
        <label className="block text-sm text-zinc-300">Kesepakatan dua pengamat: {agreements}/50
          <input aria-label="Jumlah kesepakatan dua pengamat dari 50 pengamatan" type="range" min="0" max="50" value={agreements} onChange={(event) => setAgreements(Number(event.target.value))} className="mt-2 block min-h-8 w-full accent-emerald-400" />
        </label>
        <p aria-live="polite" className="mt-2 text-sm text-sky-200">Kesepakatan: {agreementPercent(agreements).toFixed(0)}% ({agreements} dari 50)</p>
      </div>
    </VisualCard>
  );
}
