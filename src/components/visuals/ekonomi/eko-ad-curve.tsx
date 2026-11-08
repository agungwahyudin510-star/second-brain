"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { aggregateDemand } from "./econ-math";

const x = (output: number) => 34 + (output - 700) / 600 * 190;
const y = (price: number) => 112 - (price - 1) / 2 * 90;

export default function EkoAdCurve() {
  const [shift, setShift] = useState(0);
  const [price, setPrice] = useState(2);
  const result = aggregateDemand(shift, price);
  const curve = Array.from({ length: 11 }, (_, index) => {
    const p = 1 + index * 0.2;
    return `${x(aggregateDemand(shift, p).output)},${y(p)}`;
  }).join(" ");
  const pointX = x(result.output);
  const pointY = y(price);

  return (
    <VisualCard
      title="Kurva permintaan agregat"
      caption="AD hipotetis: Y=1.400+a−200P. Slider tingkat harga mengubah titik pada kurva; slider a menggeser seluruh kurva."
      howToRead="Sumbu mendatar menunjukkan keluaran Y dan sumbu tegak tingkat harga P. Titik kuning dihitung dari persamaan AD pada nilai slider saat ini."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Pergeseran permintaan a: {shift > 0 ? "+" : ""}{shift}
          <input aria-label="Pergeseran kurva permintaan agregat" type="range" min="-100" max="100" step="20" value={shift} onChange={(event) => setShift(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Tingkat harga P: {price.toFixed(1)}
          <input aria-label="Tingkat harga pada kurva AD" type="range" min="1" max="3" step="0.1" value={price} onChange={(event) => setPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 132" role="img" aria-label={`Pada kurva AD dengan pergeseran ${shift}, tingkat harga ${price.toFixed(1)} menghasilkan keluaran yang diminta ${result.output}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V114H238" fill="none" stroke="#71717a" />
        <text x="3" y="16" fill="#a1a1aa" fontSize="8">P</text><text x="222" y="128" fill="#a1a1aa" fontSize="8">Y</text>
        <text x="25" y="126" fill="#71717a" fontSize="6">700</text><text x="205" y="126" fill="#71717a" fontSize="6">1.300</text>
        <polyline points={curve} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <line x1={pointX} x2={pointX} y1={pointY} y2="114" stroke="#fbbf24" strokeDasharray="3 3" />
        <line x1="30" x2={pointX} y1={pointY} y2={pointY} stroke="#fbbf24" strokeDasharray="3 3" />
        <circle cx={pointX} cy={pointY} r="4" fill="#fbbf24" />
        <text x={Math.min(190, pointX + 4)} y={pointY - 5} fill="#fef3c7" fontSize="7">({result.output}, {price.toFixed(1)})</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Y=1.400{shift < 0 ? `−${Math.abs(shift)}` : shift > 0 ? `+${shift}` : ""}−200×{price.toFixed(1)}=<strong>{result.output.toFixed(1)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Perubahan P mengubah Y pada kurva yang sama: ini gerak sepanjang AD.</p>
        <p className="rounded bg-zinc-950 p-3 sm:col-span-2">Perubahan a menggeser kurva AD pada setiap P; saat ini a={shift > 0 ? "+" : ""}{shift}.</p>
      </div>
    </VisualCard>
  );
}
