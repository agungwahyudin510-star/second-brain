"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { appraisalIntensity, suppressionOutcome } from "./psych-math";

const strategies = {
  reappraisal: ["Tinjau makna sambil tetap memeriksa fakta.", "Masalah tetap perlu diperiksa; interpretasi dapat berubah."],
  suppression: ["Tahan ekspresi sementara, misalnya untuk menunda balasan.", "Pengalaman dapat tetap ada meski ekspresi tidak tampak."],
  avoidance: ["Menjauh sementara dapat melindungi diri atau memberi ruang.", "Jika berulang, kebutuhan atau tugas dapat tetap belum tertangani."],
} as const;
const labels = { reappraisal: "Reappraisal", suppression: "Suppression", avoidance: "Avoidance" } as const;

export default function PsiRegulationPaths() {
  const [strategy, setStrategy] = useState<keyof typeof strategies>("reappraisal");
  const [importance, setImportance] = useState(8);
  const [threat, setThreat] = useState(5);
  const [suppress, setSuppress] = useState(70);
  const felt = appraisalIntensity(importance, threat);
  const suppression = suppressionOutcome(felt, suppress);
  const [when, remains] = strategies[strategy];
  return (
    <VisualCard title="Membandingkan jalur regulasi" caption="Skor appraisal dan suppression adalah model ilustratif, bukan pengukuran emosi nyata." howToRead="Pilih strategi dan atur nilai model. Perhatikan perbedaan pengalaman, ekspresi, dan apakah situasi pemicu masih perlu ditangani.">
      <label className="block min-w-0 text-sm text-zinc-300">Strategi
        <select aria-label="Pilih strategi regulasi emosi" value={strategy} onChange={(event) => setStrategy(event.target.value as keyof typeof strategies)} className="mt-2 block min-h-10 w-full min-w-0 max-w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {Object.entries(labels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
        </select>
      </label>
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 break-words text-sm text-zinc-300">Pentingnya tujuan: {importance}/10
          <input aria-label="Pentingnya tujuan model dari nol sampai sepuluh" type="range" min="0" max="10" value={importance} onChange={(event) => setImportance(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 break-words text-sm text-zinc-300">Ancaman dinilai: {threat}/10
          <input aria-label="Ancaman model dari nol sampai sepuluh" type="range" min="0" max="10" value={threat} onChange={(event) => setThreat(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      {strategy === "suppression" && <label className="block min-w-0 break-words text-sm text-zinc-300">Ekspresi ditekan: {suppress}%
        <input aria-label="Persentase ekspresi yang ditekan dari nol sampai seratus" type="range" min="0" max="100" value={suppress} onChange={(event) => setSuppress(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
      </label>}
      <div className="grid min-w-0 grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3">Yang dirasakan (model): {strategy === "suppression" ? suppression.felt.toFixed(1) : felt.toFixed(1)}</p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3">Yang tampak (model): {strategy === "suppression" ? suppression.visible.toFixed(1) : felt.toFixed(1)}</p>
      </div>
      <div className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">
        <p><strong>Kapan masuk akal:</strong> {when}</p>
        <p className="mt-2"><strong>Masalah masih ada?</strong> {remains}</p>
      </div>
    </VisualCard>
  );
}
