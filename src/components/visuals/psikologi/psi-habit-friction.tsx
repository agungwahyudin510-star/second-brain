"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { frictionCompletion } from "./psych-math";

const cues = {
  "Duduk di meja": ["Buka bahan yang sudah disiapkan", "Selesaikan satu soal", "Tandai kemajuan atau ambil jeda terencana"],
  "Notifikasi muncul": ["Periksa apakah pesan perlu ditangani sekarang", "Jika tidak mendesak, kembali ke satu langkah belajar", "Catat sesi selesai dan tinjau gangguan"],
  "Selesai sarapan": ["Letakkan ponsel jauh dari meja bila memungkinkan", "Baca satu bagian pendek", "Beri diri jeda setelah target kecil"],
} as const;

export default function PsiHabitFriction() {
  const [goalFriction, setGoalFriction] = useState(2);
  const [temptationFriction, setTemptationFriction] = useState(6);
  const [cue, setCue] = useState<keyof typeof cues>("Duduk di meja");
  const possibility = frictionCompletion(goalFriction, temptationFriction);
  return (
    <VisualCard title="Gesekan dan siklus kebiasaan" caption="Kemungkinan selesai dihitung dengan rumus friction ilustratif; bukan probabilitas terukur atau ramalan." howToRead="Atur gesekan tindakan tujuan dan godaan. Ubah pemicu untuk melihat langkah kecil dalam siklus pemicu–tindakan–konsekuensi.">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Friction tujuan: {goalFriction}
          <input aria-label="Friction tindakan tujuan dari satu sampai delapan" type="range" min="1" max="8" value={goalFriction} onChange={(event) => setGoalFriction(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Friction godaan: {temptationFriction}
          <input aria-label="Friction tindakan godaan dari satu sampai delapan" type="range" min="1" max="8" value={temptationFriction} onChange={(event) => setTemptationFriction(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">Kemungkinan selesai (model): {possibility}%</p>
      <label className="block min-w-0 text-sm text-zinc-300">Pilih pemicu
        <select aria-label="Pilih pemicu untuk siklus kebiasaan" value={cue} onChange={(event) => setCue(event.target.value as keyof typeof cues)} className="mt-2 block min-h-10 w-full min-w-0 max-w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {Object.keys(cues).map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <div className="grid min-w-0 grid-cols-1 gap-2 text-sm sm:grid-cols-3">
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3"><strong>Pemicu</strong><br />{cue}</p>
        {cues[cue].map((step, index) => <p key={step} className="min-w-0 break-words rounded-lg bg-zinc-950 p-3"><strong>{index === 0 ? "Tindakan" : index === 1 ? "Langkah kecil" : "Konsekuensi"}</strong><br />{step}</p>)}
      </div>
      <p className="min-w-0 break-words text-xs text-zinc-400">Contoh kebiasaan terlaksana 14 dari 20 sesi = 70%; catatan sesi bukan jaminan hasil berikutnya.</p>
    </VisualCard>
  );
}
