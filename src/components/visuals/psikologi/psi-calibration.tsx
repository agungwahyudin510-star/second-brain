"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { calibrationGap } from "./psych-math";

export default function PsiCalibration() {
  const [confidence, setConfidence] = useState(90);
  const [correct, setCorrect] = useState(6);
  const [context, setContext] = useState<"read" | "test">("read");
  const gap = calibrationGap(confidence, correct, 10);
  const interpretation = gap > 0 ? "Percaya diri lebih tinggi daripada akurasi pada contoh." : gap < 0 ? "Percaya diri lebih rendah daripada akurasi pada contoh." : "Keyakinan dan akurasi sama pada contoh.";

  return (
    <VisualCard
      title="Kalibrasi keyakinan dan hasil"
      caption="Simulasi penilaian diri. Konteks baca ulang/uji diri hanya label skenario dan tidak menyatakan efek penelitian."
      howToRead="Bandingkan keyakinan dengan jumlah benar dari sepuluh. Selisih ditampilkan sebagai keyakinan dikurangi akurasi dalam poin persentase."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Keyakinan: {confidence}%
          <input aria-label="Tingkat keyakinan dari nol sampai seratus persen" type="range" min="0" max="100" value={confidence} onChange={(event) => setConfidence(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Benar: {correct} dari 10
          <input aria-label="Jumlah jawaban benar dari nol sampai sepuluh" type="range" min="0" max="10" value={correct} onChange={(event) => setCorrect(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
      </div>
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm text-zinc-300">Konteks ilustratif</legend>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          <button type="button" aria-pressed={context === "read"} onClick={() => setContext("read")} className={`min-h-10 min-w-0 break-words rounded-lg border px-3 py-2 text-sm ${context === "read" ? "border-sky-400 bg-sky-500/15 text-sky-100" : "border-zinc-700 text-zinc-300"}`}>Setelah baca ulang</button>
          <button type="button" aria-pressed={context === "test"} onClick={() => setContext("test")} className={`min-h-10 min-w-0 break-words rounded-lg border px-3 py-2 text-sm ${context === "test" ? "border-sky-400 bg-sky-500/15 text-sky-100" : "border-zinc-700 text-zinc-300"}`}>Setelah uji diri</button>
        </div>
      </fieldset>
      <div className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">
        <p>Konteks pilihan: {context === "read" ? "setelah baca ulang" : "setelah uji diri"} (label simulasi)</p>
        <p aria-live="polite" className="mt-2 text-sky-200">Akurasi: {correct * 10}% · Miskalibrasi: {gap > 0 ? "+" : ""}{gap} poin persentase</p>
        <p className="mt-1 text-zinc-300">{interpretation}</p>
      </div>
    </VisualCard>
  );
}
