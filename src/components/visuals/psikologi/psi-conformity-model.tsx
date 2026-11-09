"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { conformityProbability } from "./psych-math";

export default function PsiConformityModel() {
  const [members, setMembers] = useState(4);
  const [hasAlly, setHasAlly] = useState(false);
  const [influence, setInfluence] = useState<"normative" | "informational">("normative");
  const probability = conformityProbability(members, hasAlly);
  const points = Array.from({ length: 9 }, (_, count) => conformityProbability(count, hasAlly));
  const polyline = points.map((value, index) => `${15 + index * 10},${85 - value * 0.7}`).join(" ");

  return (
    <VisualCard
      title="Kelompok, sekutu, dan konformitas"
      caption="Kurva P(ikut)=min(60,10+12n), dengan pengurangan 25 poin untuk sekutu, adalah alat berpikir ilustratif dan bukan hasil penelitian."
      howToRead="Ubah jumlah anggota yang sepakat dan keberadaan sekutu. Pilih apakah fokusnya tekanan untuk diterima atau kelompok sebagai sumber informasi."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">
          Anggota yang sepakat: {members}
          <input aria-label="Jumlah anggota kelompok yang sepakat, dari nol sampai delapan" type="range" min="0" max="8" value={members} onChange={(event) => setMembers(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="flex min-w-0 items-center gap-2 text-sm text-zinc-300">
          <input aria-label="Ada satu sekutu yang berbeda pendapat" type="checkbox" checked={hasAlly} onChange={(event) => setHasAlly(event.target.checked)} className="min-h-5 min-w-5 accent-sky-400" />
          Ada satu sekutu yang berbeda
        </label>
      </div>
      <svg viewBox="0 0 100 100" role="img" aria-label="Kurva ilustratif probabilitas konformitas dengan plafon 60 persen" className="h-40 w-full min-w-0 rounded-lg bg-zinc-950 p-2">
        <path d="M15 10V85H95" fill="none" stroke="#71717a" />
        <polyline points={polyline} fill="none" stroke="#38bdf8" strokeWidth="2" />
        <circle cx={15 + members * 10} cy={85 - probability * 0.7} r="3" fill="#f472b6" />
        <text x="16" y="96" fill="#a1a1aa" fontSize="5">Anggota sepakat</text>
        <text x="1" y="12" fill="#a1a1aa" fontSize="4">60%</text>
      </svg>
      <p aria-live="polite" className="text-sm text-sky-200">Nilai model pada n={members}: {probability}%.</p>
      <div className="grid min-w-0 grid-cols-2 gap-2">
        <button type="button" aria-pressed={influence === "normative"} onClick={() => setInfluence("normative")} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Normatif</button>
        <button type="button" aria-pressed={influence === "informational"} onClick={() => setInfluence("informational")} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Informasional</button>
      </div>
      <p className="break-words text-sm text-zinc-300">{influence === "normative" ? "Pengaruh normatif: mengikuti kelompok dapat terasa membantu penerimaan atau menghindari penolakan." : "Pengaruh informasional: kelompok dapat dipandang sebagai petunjuk ketika situasi tidak pasti."}</p>
    </VisualCard>
  );
}
