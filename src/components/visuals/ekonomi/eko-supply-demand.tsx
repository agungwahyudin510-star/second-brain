"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

export default function EkoSupplyDemand() {
  const [demandShift, setDemandShift] = useState(0);
  const [supplyShift, setSupplyShift] = useState(0);
  const price = (80 + demandShift - supplyShift) / 10;
  const quantity = 60 + (demandShift + supplyShift) / 2;
  const demandIntercept = 100 + demandShift;
  const demandPoints = Array.from({ length: 9 }, (_, index) => {
    const q = demandIntercept * index / 8;
    const p = (demandIntercept - q) / 5;
    return `${35 + q * 1.15},${130 - p * 4.8}`;
  }).join(" ");
  const supplyPoints = Array.from({ length: 9 }, (_, index) => {
    const p = index * 2.5;
    const q = 20 + supplyShift + 5 * p;
    return `${35 + q * 1.15},${130 - p * 4.8}`;
  }).join(" ");

  return (
    <VisualCard
      title="Permintaan, penawaran, dan ekuilibrium"
      caption="Persamaan linear dan pergeseran di sini sepenuhnya ilustratif: Qd = 100 + D − 5P; Qs = 20 + S + 5P."
      howToRead="Titik potong kurva permintaan (menurun) dan penawaran (menaik) menentukan P* dan Q* dalam model. Geser D atau S untuk mengubah intersep kurva dan amati ekuilibrium baru."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Pergeseran permintaan D: {demandShift}
          <input aria-label="Pergeseran permintaan" type="range" min="-20" max="20" step="2" value={demandShift} onChange={(event) => setDemandShift(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Pergeseran penawaran S: {supplyShift}
          <input aria-label="Pergeseran penawaran" type="range" min="-20" max="20" step="2" value={supplyShift} onChange={(event) => setSupplyShift(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
      </div>
      <svg viewBox="0 0 230 145" role="img" aria-label={`Kurva ilustratif hanya pada harga nonnegatif. Permintaan berakhir pada P=0, Q=${demandIntercept}; penawaran dimulai pada P=0, Q=${20 + supplyShift}. Ekuilibrium P=${price.toFixed(1)}, Q=${quantity.toFixed(0)} unit.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 12V130H218" fill="none" stroke="#71717a" />
        <text x="3" y="18" fill="#a1a1aa" fontSize="8">Harga P</text><text x="180" y="142" fill="#a1a1aa" fontSize="8">Kuantitas Q</text>
        <polyline points={demandPoints} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={supplyPoints} fill="none" stroke="#34d399" strokeWidth="2.5" />
        <circle cx={35 + quantity * 1.15} cy={130 - price * 4.8} r="4" fill="#fbbf24" />
        <text x="184" y="30" fill="#7dd3fc" fontSize="8">D</text><text x="184" y="104" fill="#6ee7b7" fontSize="8">S</text>
      </svg>
      <p aria-live="polite" className="rounded-lg bg-zinc-950 p-3 text-sm text-amber-200">P* = {price.toFixed(1)} satuan harga; Q* = {quantity.toFixed(0)} unit. P* dihitung dari Qd = Qs, bukan ditaksir dari grafik.</p>
    </VisualCard>
  );
}
