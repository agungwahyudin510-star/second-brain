"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { selectionComparison } from "./psych-math";

export default function PsiCausality() {
  const [effect, setEffect] = useState(5);
  const [bias, setBias] = useState(3);
  const [controlled, setControlled] = useState(false);
  const comparison = selectionComparison(effect, bias);
  return (
    <VisualCard title="Efek dan bias seleksi" caption="Contoh hipotetis: selisih teramati = efek + bias; kondisi acak menampilkan efek saja dalam model sederhana." howToRead="Atur angka untuk membandingkan pilihan sendiri dengan kondisi acak. Toggle confounder menunjukkan faktor alternatif yang perlu diperiksa, bukan penghapusan otomatis.">
      <label className="block text-sm text-zinc-300">Efek sebenarnya dalam model: {effect}
        <input aria-label="Efek sebenarnya hipotetis dari nol sampai sepuluh" type="range" min="0" max="10" value={effect} onChange={(event) => setEffect(Number(event.target.value))} className="mt-2 block min-h-8 w-full accent-sky-400" />
      </label>
      <label className="block text-sm text-zinc-300">Bias seleksi dalam model: {bias}
        <input aria-label="Bias seleksi hipotetis dari nol sampai sepuluh" type="range" min="0" max="10" value={bias} onChange={(event) => setBias(Number(event.target.value))} className="mt-2 block min-h-8 w-full accent-amber-400" />
      </label>
      <div className="grid gap-2 sm:grid-cols-2">
        <p className="rounded-lg bg-zinc-950 p-3 text-sm">Pilih sendiri: efek + bias = <strong aria-live="polite">{comparison.selfSelected}</strong></p>
        <p className="rounded-lg bg-zinc-950 p-3 text-sm">Acak dalam model: efek = <strong aria-live="polite">{comparison.randomized}</strong></p>
      </div>
      <label className="flex min-h-10 items-center gap-3 text-sm text-zinc-300"><input aria-label="Tandai apakah confounder telah diperiksa" type="checkbox" checked={controlled} onChange={(event) => setControlled(event.target.checked)} className="h-4 w-4 accent-sky-400" />Ada kontrol confounder</label>
      <p role="status" className="text-sm text-zinc-300">{controlled ? "Catatan: memeriksa confounder membantu, tetapi tidak membuktikan semua faktor alternatif telah diatasi." : "Periksa faktor yang mungkin memengaruhi pilihan ikut serta dan hasil."}</p>
    </VisualCard>
  );
}
