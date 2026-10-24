"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

export default function EkoShortageSurplus() {
  const [price, setPrice] = useState(8);
  const quantityDemanded = 100 - 5 * price;
  const quantitySupplied = 20 + 5 * price;
  const difference = quantityDemanded - quantitySupplied;
  const demandPoints = Array.from({ length: 7 }, (_, index) => {
    const p = 2 + index * 2;
    return `${30 + (100 - 5 * p) * 1.6},${112 - p * 6}`;
  }).join(" ");
  const supplyPoints = Array.from({ length: 7 }, (_, index) => {
    const p = 2 + index * 2;
    return `${30 + (20 + 5 * p) * 1.6},${112 - p * 6}`;
  }).join(" ");
  const lowerQuantity = Math.min(quantityDemanded, quantitySupplied);
  const upperQuantity = Math.max(quantityDemanded, quantitySupplied);
  const priceY = 112 - price * 6;

  return (
    <VisualCard
      title="Surplus atau kekurangan pada harga tertentu"
      caption="Kurva dan harga adalah model ilustratif. Qd = 100 − 5P dan Qs = 20 + 5P; harga keseimbangan model adalah 8."
      howToRead="Bandingkan kuantitas yang diminta dengan yang ditawarkan pada garis harga yang dipilih. Jika Qs lebih besar, selisihnya surplus; jika Qd lebih besar, selisihnya kekurangan."
    >
      <label className="block text-sm text-zinc-300">Harga pasar P: {price}
        <input aria-label="Harga untuk menghitung surplus atau kekurangan" type="range" min="2" max="14" value={price} onChange={(event) => setPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 230 135" role="img" aria-label={`Pada harga ${price}, jumlah diminta ${quantityDemanded}, jumlah ditawarkan ${quantitySupplied}; ${difference > 0 ? `kekurangan ${difference} unit` : difference < 0 ? `surplus ${Math.abs(difference)} unit` : "pasar bersih"}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 10V112H218" fill="none" stroke="#71717a" />
        <text x="3" y="17" fill="#a1a1aa" fontSize="8">Harga</text><text x="179" y="130" fill="#a1a1aa" fontSize="8">Kuantitas</text>
        {difference !== 0 && <rect x={30 + lowerQuantity * 1.6} y={priceY - 5} width={(upperQuantity - lowerQuantity) * 1.6} height="10" fill={difference > 0 ? "#f59e0b66" : "#38bdf866"} />}
        <polyline points={demandPoints} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={supplyPoints} fill="none" stroke="#34d399" strokeWidth="2.5" />
        <line x1="30" x2="210" y1={priceY} y2={priceY} stroke="#fbbf24" strokeDasharray="3 3" />
        <text x="180" y="30" fill="#7dd3fc" fontSize="8">D</text><text x="180" y="105" fill="#6ee7b7" fontSize="8">S</text>
      </svg>
      <div aria-live="polite" className="rounded-lg bg-zinc-950 p-3 text-sm">
        <p>Qd = 100 − 5({price}) = <strong>{quantityDemanded}</strong> unit; Qs = 20 + 5({price}) = <strong>{quantitySupplied}</strong> unit.</p>
        <p className="mt-1 text-amber-200">{difference > 0 ? `Kekurangan: Qd − Qs = ${difference} unit.` : difference < 0 ? `Surplus: Qs − Qd = ${Math.abs(difference)} unit.` : "Tidak ada surplus/kekurangan bersih pada harga ekuilibrium."}</p>
      </div>
    </VisualCard>
  );
}
