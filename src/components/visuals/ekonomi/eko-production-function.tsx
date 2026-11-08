"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { productionFunction } from "./econ-math";

const x = (capital: number) => 35 + (capital - 50) / 150 * 185;
const y = (output: number, maxOutput: number) => 115 - output / maxOutput * 95;

export default function EkoProductionFunction() {
  const [capital, setCapital] = useState(100);
  const [labor, setLabor] = useState(100);
  const [productivity, setProductivity] = useState(1);
  const result = productionFunction(productivity, capital, labor);
  const maxOutput = Math.max(...result.curve.map((point) => point.output), result.output);
  const curve = result.curve.map((point) => `${x(point.capital)},${y(point.output, maxOutput)}`).join(" ");

  return (
    <VisualCard
      title="Fungsi produksi dan hasil modal menurun"
      caption="Fungsi ilustratif Y=A×√K×√L. Garis menggambarkan perubahan keluaran ketika modal berubah dengan L dan A pada nilai slider."
      howToRead="Kurva yang makin datar menunjukkan produk marjinal modal menurun. Titik menandai pilihan K; posisi vertikalnya adalah keluaran yang dihitung dari fungsi, bukan dipilih dari gambar."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">Modal K: {capital}
          <input aria-label="Jumlah modal fisik K" type="range" min="50" max="200" value={capital} onChange={(event) => setCapital(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Tenaga kerja L: {labor}
          <input aria-label="Jumlah tenaga kerja L" type="range" min="50" max="200" value={labor} onChange={(event) => setLabor(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Produktivitas A: {productivity.toFixed(1)}
          <input aria-label="Produktivitas atau teknologi A" type="range" min="0.8" max="1.5" step="0.1" value={productivity} onChange={(event) => setProductivity(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 140" role="img" aria-label={`Modal ${capital}, tenaga kerja ${labor}, produktivitas ${productivity.toFixed(1)}, keluaran ${result.output.toFixed(2)}; produk marjinal modal untuk tambahan satu unit K adalah ${result.marginalProductCapital.toFixed(3)}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V118H238" fill="none" stroke="#71717a" />
        <text x="3" y="16" fill="#a1a1aa" fontSize="8">Keluaran Y</text>
        <text x="219" y="134" fill="#a1a1aa" fontSize="8">Modal K</text>
        <polyline points={curve} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <line x1={x(capital)} x2={x(capital)} y1={y(result.output, maxOutput)} y2="118" stroke="#fbbf24" strokeDasharray="3 3" />
        <circle cx={x(capital)} cy={y(result.output, maxOutput)} r="4" fill="#fbbf24" />
        <text x={Math.min(190, x(capital) + 4)} y={y(result.output, maxOutput) - 5} fill="#fcd34d" fontSize="7">K={capital}</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Y={productivity.toFixed(1)}×√{capital}×√{labor}={result.output.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">Produk per pekerja Y/L={result.outputPerWorker.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Produk marjinal modal: Y(K+1)−Y(K)={result.marginalProductCapital.toFixed(3)}.</p>
        <p className="rounded bg-zinc-950 p-3">Jika K dan L sama-sama dua kali dengan A tetap, keluaran juga dua kali pada skala konstan.</p>
      </div>
    </VisualCard>
  );
}
