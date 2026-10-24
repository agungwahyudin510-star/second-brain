"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

const marginalBenefit = (unit: number) => 110 - 10 * unit;
const marginalCost = (unit: number) => 10 + 10 * unit;

export default function EkoMarginal() {
  const [quantity, setQuantity] = useState(5);
  const units = Array.from({ length: 10 }, (_, index) => index + 1);
  const totalNet = units.slice(0, quantity).reduce((sum, unit) => sum + marginalBenefit(unit) - marginalCost(unit), 0);
  const optimal = units.filter((unit) => marginalBenefit(unit) >= marginalCost(unit)).length;
  const y = (value: number) => 112 - value * 0.8;

  return (
    <VisualCard
      title="Berpikir marginal: manfaat dan biaya tambahan"
      caption="Manfaat marginal (MB) turun dan biaya marginal (MC) naik dalam contoh hipotetis. Model mengasumsikan unit yang sebanding dan kurva yang diketahui."
      howToRead="Kurva MB menurun dan MC menaik; secara sederhana, tambah unit selama MB setidaknya sebesar MC. Di sekitar perpotongan, manfaat bersih tambahan mendekati nol."
    >
      <label className="block text-sm text-zinc-300">
        Jumlah unit yang dipilih: {quantity}
        <input aria-label="Jumlah unit untuk analisis marginal" type="range" min="1" max="10" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
      </label>
      <svg viewBox="0 0 230 130" role="img" aria-label={`Grafik manfaat dan biaya marginal; jumlah pilihan ${quantity}; titik optimum ilustratif ${optimal} unit.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 12V108H218" fill="none" stroke="#71717a" />
        <text x="4" y="16" fill="#a1a1aa" fontSize="8">Nilai marginal</text>
        <text x="185" y="124" fill="#a1a1aa" fontSize="8">Unit</text>
        <polyline points={units.map((unit) => `${28 + unit * 18},${y(marginalBenefit(unit))}`).join(" ")} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={units.map((unit) => `${28 + unit * 18},${y(marginalCost(unit))}`).join(" ")} fill="none" stroke="#fbbf24" strokeWidth="2.5" />
        <line x1={28 + optimal * 18} y1="15" x2={28 + optimal * 18} y2="108" stroke="#34d399" strokeDasharray="3 3" />
        <text x="35" y="20" fill="#7dd3fc" fontSize="8">MB</text>
        <text x="51" y="20" fill="#fcd34d" fontSize="8">MC</text>
        <text x={30 + optimal * 18} y="103" fill="#6ee7b7" fontSize="7">optimum</text>
        <circle cx={28 + quantity * 18} cy="109" r="3.5" fill="#f472b6" />
      </svg>
      <div className="grid gap-2 text-sm sm:grid-cols-3">
        <p className="rounded bg-zinc-950 p-3">MB unit {quantity}: {marginalBenefit(quantity)} unit nilai</p>
        <p className="rounded bg-zinc-950 p-3">MC unit {quantity}: {marginalCost(quantity)} unit biaya</p>
        <p aria-live="polite" className="rounded bg-zinc-950 p-3 text-emerald-200">Manfaat bersih total: {totalNet}; jumlah optimum: {optimal} unit</p>
      </div>
    </VisualCard>
  );
}
