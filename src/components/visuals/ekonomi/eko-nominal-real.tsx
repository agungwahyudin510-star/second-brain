"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { nominalReal } from "./econ-math";

export default function EkoNominalReal() {
  const [priceA, setPriceA] = useState(11);
  const [priceB, setPriceB] = useState(21);
  const [quantityA, setQuantityA] = useState(52);
  const [quantityB, setQuantityB] = useState(26);
  const result = nominalReal(priceA, priceB, quantityA, quantityB);
  const max = Math.max(result.nominal, result.real, result.nominalBase);
  const bars = [
    { label: "Nominal 2024", value: result.nominalBase, color: "#a1a1aa" },
    { label: "Nominal 2025", value: result.nominal, color: "#fbbf24" },
    { label: "Riil 2025", value: result.real, color: "#38bdf8" },
  ];

  return (
    <VisualCard
      title="PDB nominal dan riil"
      caption="Tahun dasar 2024: harga A=10 dan B=20; jumlah dasar A=50 dan B=25. Slider mengubah harga dan jumlah tahun berikutnya."
      howToRead="PDB nominal memakai harga 2025, sedangkan PDB riil memakai harga tetap 2024. Selisih pertumbuhan nominal dan riil mencerminkan perubahan harga dalam ukuran ilustratif."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Harga A 2025: {priceA}
          <input aria-label="Harga barang A tahun 2025" type="range" min="10" max="14" value={priceA} onChange={(event) => setPriceA(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Harga B 2025: {priceB}
          <input aria-label="Harga barang B tahun 2025" type="range" min="20" max="24" value={priceB} onChange={(event) => setPriceB(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Jumlah A 2025: {quantityA}
          <input aria-label="Jumlah barang A tahun 2025" type="range" min="50" max="56" value={quantityA} onChange={(event) => setQuantityA(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Jumlah B 2025: {quantityB}
          <input aria-label="Jumlah barang B tahun 2025" type="range" min="25" max="28" value={quantityB} onChange={(event) => setQuantityB(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 130" role="img" aria-label={`PDB nominal dasar ${result.nominalBase}; PDB nominal berjalan ${result.nominal}; PDB riil ${result.real}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="48" x2="238" y1="111" y2="111" stroke="#71717a" />
        {bars.map((bar, index) => {
          const height = bar.value / max * 82;
          const x = 68 + index * 58;
          return (
            <g key={bar.label}>
              <rect x={x} y={108 - height} width="36" height={height} rx="3" fill={bar.color} />
              <text x={x - 11} y="121" fill="#a1a1aa" fontSize="7">{bar.label}</text>
              <text x={x - 5} y={103 - height} fill="#e4e4e7" fontSize="7">{bar.value}</text>
            </g>
          );
        })}
        <text x="4" y="14" fill="#a1a1aa" fontSize="8">Nilai PDB</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">PDB nominal = {priceA}×{quantityA}+{priceB}×{quantityB} = <strong>{result.nominal}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">PDB riil (harga 2024) = 10×{quantityA}+20×{quantityB} = <strong>{result.real}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Deflator = {result.nominal}/{result.real}×100 = {result.deflator.toFixed(1)}.</p>
        <p className="rounded bg-zinc-950 p-3">Pertumbuhan nominal {result.nominalGrowth.toFixed(1)}%; riil {result.realGrowth.toFixed(1)}%; perubahan deflator {result.priceGrowth.toFixed(1)}%.</p>
      </div>
    </VisualCard>
  );
}
