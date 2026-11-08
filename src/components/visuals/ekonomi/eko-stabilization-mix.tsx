"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { stabilizationNeeds } from "./econ-math";

export default function EkoStabilizationMix() {
  const [actualOutput, setActualOutput] = useState(960);
  const [mpc, setMpc] = useState(0.8);
  const [effectiveness, setEffectiveness] = useState(100);
  const result = stabilizationNeeds(actualOutput, 1000, mpc, effectiveness);
  const maximum = Math.max(Math.abs(result.spendingChange), Math.abs(result.taxChange), 1);
  const scale = 180 / maximum;

  return (
    <VisualCard
      title="Memilih bauran stabilisasi fiskal"
      caption="Keluaran potensial 1.000. Efektivitas mengalikan dampak penuh pengganda; angka kebutuhan kebijakan adalah ilustrasi, bukan rekomendasi anggaran."
      howToRead="Garis tegak menunjukkan perubahan nol. Kebutuhan belanja dan perubahan pajak bertanda positif atau negatif; pajak negatif berarti pemotongan, sedangkan nilai positif berarti pengetatan."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">PDB aktual Y: {actualOutput}
          <input aria-label="PDB aktual" type="range" min="900" max="1100" step="10" value={actualOutput} onChange={(event) => setActualOutput(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">MPC: {mpc.toFixed(2)}
          <input aria-label="MPC untuk stimulus fiskal" type="range" min="0.5" max="0.9" step="0.05" value={mpc} onChange={(event) => setMpc(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Efektivitas: {effectiveness}%
          <input aria-label="Efektivitas stimulus kebijakan" type="range" min="40" max="100" step="10" value={effectiveness} onChange={(event) => setEffectiveness(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 106" role="img" aria-label={`Kebutuhan perubahan belanja pemerintah ${result.spendingChange.toFixed(2)} dan perubahan pajak ${result.taxChange.toFixed(2)} untuk mengurangi kesenjangan ${result.gap.toFixed(1)}.`} className="h-44 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="13" fill="#a1a1aa" fontSize="8">Besaran penyesuaian (skala dinamis)</text>
        <line x1="125" x2="125" y1="20" y2="92" stroke="#71717a" />
        {[{ name: "Perubahan G", value: result.spendingChange, color: "#34d399" }, { name: "Perubahan T", value: result.taxChange, color: "#fbbf24" }].map((item, index) => {
          const y = 31 + index * 30;
          const width = Math.abs(item.value) * scale;
          return (
            <g key={item.name}>
              <text x="4" y={y + 8} fill="#d4d4d8" fontSize="8">{item.name}: {item.value.toFixed(2)}</text>
              <rect x={item.value >= 0 ? 125 : 125 - width} y={y} width={width} height="13" rx="2" fill={item.color} />
            </g>
          );
        })}
        <text x="110" y="102" fill="#71717a" fontSize="7">pengetatan ← 0 → stimulus</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className={`rounded bg-zinc-950 p-3 ${result.gap >= 0 ? "text-sky-200" : "text-amber-200"}`}>Kesenjangan Y*−Y={result.gap.toFixed(1)}. {result.gap >= 0 ? "Keluaran di bawah potensi." : "Keluaran di atas potensi; diperlukan pengetatan dalam model."}</p>
        <p className="rounded bg-zinc-950 p-3">Pengganda G={result.governmentMultiplier.toFixed(2)}; besar pengganda pajak={Math.abs(result.taxMultiplier).toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">ΔG=(Y*−Y)/(pengganda×efektivitas)=<strong>{result.spendingChange.toFixed(2)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">ΔT bertanda=(Y*−Y)/(pengganda pajak×efektivitas)=<strong>{result.taxChange.toFixed(2)}</strong>{result.taxCut > 0 ? ` (pemotongan ${result.taxCut.toFixed(2)})` : ""}.</p>
      </div>
      {actualOutput > 1000 && <p className="rounded-lg bg-amber-950 p-3 text-sm text-amber-200">Y berada di atas potensi: hitungan menunjukkan pengetatan, bukan tambahan stimulus.</p>}
    </VisualCard>
  );
}
