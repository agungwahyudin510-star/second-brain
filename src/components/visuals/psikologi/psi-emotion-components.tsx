"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";

const situations = {
  Presentasi: ["Gugup atau bersemangat", "Jantung terasa cepat", "Menilai hasil presentasi penting", "Suara berubah atau tangan bergerak", "Berlatih atau menghindar"],
  "Notifikasi harga turun": ["Takut atau khawatir", "Tegang saat melihat layar", "Menilai kerugian mungkin terjadi", "Mengecek grafik berulang", "Menjual atau mencari informasi"],
  "Pesan kritik": ["Kesal, malu, atau ingin tahu", "Wajah terasa hangat", "Menilai komentar sebagai arahan atau ancaman", "Nada suara berubah", "Membalas atau meminta klarifikasi"],
} as const;

const components = ["Pengalaman", "Respons tubuh", "Penilaian", "Ekspresi", "Kecenderungan bertindak"];

export default function PsiEmotionComponents() {
  const [situation, setSituation] = useState<keyof typeof situations>("Presentasi");
  const [selected, setSelected] = useState<number[]>([0, 1, 2]);
  const [duration, setDuration] = useState<"pemicu" | "menyebar">("pemicu");
  const examples = situations[situation];
  const toggle = (index: number) => setSelected((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  return (
    <VisualCard title="Komponen pengalaman emosi" caption="Contoh pilihan bersifat ilustratif; emosi tidak dapat disimpulkan hanya dari satu tanda." howToRead="Pilih situasi dan komponen untuk melihat contoh pertanyaan. Toggle durasi/pemicu membandingkan pola emosi dan suasana hati secara pengantar.">
      <label className="block min-w-0 text-sm text-zinc-300">Situasi
        <select aria-label="Pilih situasi untuk mengamati komponen emosi" value={situation} onChange={(event) => setSituation(event.target.value as keyof typeof situations)} className="mt-2 block min-h-10 w-full min-w-0 max-w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {Object.keys(situations).map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm text-zinc-300">Pilih komponen yang ingin diamati</legend>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {components.map((item, index) => <label key={item} className="flex min-h-10 min-w-0 items-center gap-2 break-words rounded-lg bg-zinc-950 p-2 text-sm text-zinc-300"><input type="checkbox" aria-label={`Pilih komponen ${item}`} checked={selected.includes(index)} onChange={() => toggle(index)} className="h-4 w-4 shrink-0 accent-sky-400" />{item}</label>)}
        </div>
      </fieldset>
      <p aria-live="polite" className="text-sm text-sky-200">Komponen dikenali {selected.length}/5</p>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        {selected.map((index) => <p key={index} className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm"><strong>{components[index]}:</strong> {examples[index]}</p>)}
      </div>
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm text-zinc-300">Pola waktu dan pemicu</legend>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" aria-pressed={duration === "pemicu"} onClick={() => setDuration("pemicu")} className={`min-h-10 min-w-0 break-words rounded-lg border px-2 text-sm ${duration === "pemicu" ? "border-sky-400 text-sky-100" : "border-zinc-700 text-zinc-300"}`}>Pemicu tertentu</button>
          <button type="button" aria-pressed={duration === "menyebar"} onClick={() => setDuration("menyebar")} className={`min-h-10 min-w-0 break-words rounded-lg border px-2 text-sm ${duration === "menyebar" ? "border-sky-400 text-sky-100" : "border-zinc-700 text-zinc-300"}`}>Lebih menyebar</button>
        </div>
      </fieldset>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">{duration === "pemicu" ? "Emosi dapat terkait dengan pemicu tertentu; suasana hati juga dapat berlangsung tanpa satu pemicu yang jelas." : "Suasana hati cenderung lebih menyebar; emosi dan suasana hati dapat bercampur dan batas istilah tidak selalu tegas."} Emosi ≠ suasana hati.</p>
    </VisualCard>
  );
}
