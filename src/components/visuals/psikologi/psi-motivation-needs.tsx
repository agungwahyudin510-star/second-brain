"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { motivationProfile } from "./psych-math";

export default function PsiMotivationNeeds() {
  const [autonomy, setAutonomy] = useState(6);
  const [competence, setCompetence] = useState(8);
  const [relatedness, setRelatedness] = useState(4);
  const [externalReward, setExternalReward] = useState(false);
  const profile = motivationProfile(autonomy, competence, relatedness);
  const suggestions: Record<string, string> = {
    Otonomi: "Pertimbangkan pilihan yang bermakna atau alasan tujuan yang lebih jelas.",
    Kompetensi: "Pertimbangkan langkah bertahap dan umpan balik yang dapat ditindaklanjuti.",
    Keterkaitan: "Pertimbangkan dukungan atau kesempatan belajar bersama yang aman.",
  };
  return (
    <VisualCard title="Kebutuhan dan dukungan motivasi" caption="Rata-rata tiga skala 0–10 adalah model ilustratif, bukan tes motivasi." howToRead="Atur otonomi, kompetensi, dan keterkaitan. Skor terendah memberi satu pertanyaan awal, bukan penjelasan tunggal atas motivasi.">
      <div className="grid min-w-0 grid-cols-1 gap-3">
        {[["Otonomi", autonomy, setAutonomy], ["Kompetensi", competence, setCompetence], ["Keterkaitan", relatedness, setRelatedness]].map(([label, value, setter]) => (
          <label key={String(label)} className="block min-w-0 break-words text-sm text-zinc-300">{String(label)}: {Number(value)}/10
            <input aria-label={`${String(label)} dari nol sampai sepuluh`} type="range" min="0" max="10" value={Number(value)} onChange={(event) => (setter as (value: number) => void)(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
          </label>
        ))}
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3">Rata-rata ilustratif: {profile.average.toFixed(1)}</p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3">Nilai terendah: {profile.lowest.name} ({profile.lowest.score})</p>
      </div>
      <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-300">{suggestions[profile.lowest.name]} Tanyakan apakah saran ini sesuai konteks, bukan menganggap skor sebagai diagnosis.</p>
      <label className="flex min-h-10 min-w-0 items-center gap-2 break-words text-sm text-zinc-300"><input type="checkbox" aria-label="Tampilkan catatan tentang hadiah eksternal besar" checked={externalReward} onChange={(event) => setExternalReward(event.target.checked)} className="h-4 w-4 shrink-0 accent-amber-400" />Hadiah eksternal besar</label>
      {externalReward && <p role="status" className="min-w-0 break-words rounded-lg border border-amber-500/30 bg-zinc-950 p-3 text-sm text-amber-100">Hadiah besar mungkin mengubah cara kegiatan yang awalnya menarik dimaknai; risiko overjustification bergantung konteks, cara pemberian, dan jenis tugas.</p>}
    </VisualCard>
  );
}
