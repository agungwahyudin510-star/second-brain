"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

type Mode = "price" | "factor";

export default function EkoMoveVsShift() {
  const [mode, setMode] = useState<Mode>("price");
  const [price, setPrice] = useState(6);
  const [factor, setFactor] = useState(0);
  const qd = 100 + factor - 5 * price;
  const x = (q: number) => 28 + q * 1.4;
  const y = (p: number) => 120 - p * 7;
  const demandLine = (shift: number) => {
    const intercept = Math.max(0, 100 + shift);
    return `M ${x(0)} ${y(intercept / 5)} L ${x(intercept)} ${y(0)}`;
  };

  return (
    <VisualCard
      title="Pergerakan sepanjang kurva atau pergeseran kurva?"
      caption="Permintaan linear hipotetis: Qd = 100 + F − 5P. Faktor F dapat mewakili perubahan pendapatan untuk barang normal, preferensi, atau jumlah pembeli."
      howToRead="Pada mode harga, satu kurva tetap dan titik bergerak di atasnya. Pada mode faktor, dua kurva dibandingkan: faktor nonharga menggeser kurva, sehingga titik kuantitas-harga baru tidak berada pada kurva semula."
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <button type="button" aria-pressed={mode === "price"} onClick={() => setMode("price")} className={`min-h-11 rounded-lg border px-3 text-sm ${mode === "price" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-400"}`}>Harga berubah</button>
        <button type="button" aria-pressed={mode === "factor"} onClick={() => setMode("factor")} className={`min-h-11 rounded-lg border px-3 text-sm ${mode === "factor" ? "border-emerald-400 text-emerald-200" : "border-zinc-700 text-zinc-400"}`}>Faktor lain berubah</button>
      </div>
      {mode === "price"
        ? <label className="block text-sm text-zinc-300">Harga P: {price}
            <input aria-label="Harga barang pada kurva permintaan" type="range" min="2" max="14" value={price} onChange={(event) => setPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
          </label>
        : <label className="block text-sm text-zinc-300">Perubahan faktor F: {factor}
            <input aria-label="Faktor nonharga yang menggeser permintaan" type="range" min="-30" max="30" step="5" value={factor} onChange={(event) => setFactor(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
          </label>}
      <svg viewBox="0 0 230 145" role="img" aria-label={mode === "price" ? `Titik bergerak sepanjang kurva permintaan tetap ke kuantitas ${qd} pada harga ${price}.` : `Permintaan bergeser ${factor >= 0 ? "ke kanan" : "ke kiri"} sebesar ${Math.abs(factor)} unit kuantitas.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 12V120H218" fill="none" stroke="#71717a" />
        <text x="3" y="18" fill="#a1a1aa" fontSize="8">Harga P</text><text x="180" y="138" fill="#a1a1aa" fontSize="8">Kuantitas Q</text>
        {mode === "price" ? <>
          <path d={demandLine(0)} fill="none" stroke="#38bdf8" strokeWidth="3" />
          <circle cx={x(Math.max(0, qd))} cy={y(price)} r="4" fill="#fbbf24" />
          <text x="188" y="28" fill="#7dd3fc" fontSize="8">D tetap</text>
        </> : <>
          <path d={demandLine(0)} fill="none" stroke="#71717a" strokeDasharray="4 3" strokeWidth="2" />
          <path d={demandLine(factor)} fill="none" stroke="#34d399" strokeWidth="3" />
          <text x="182" y="28" fill="#a1a1aa" fontSize="8">D lama</text>
          <text x="182" y="42" fill="#6ee7b7" fontSize="8">D baru</text>
        </>}
      </svg>
      <p aria-live="polite" className="text-sm text-sky-200">{mode === "price" ? `Harga barang berubah: jumlah diminta menjadi ${qd} unit; kurvanya tidak bergeser.` : `Faktor nonharga menggeser permintaan ${factor >= 0 ? "ke kanan" : "ke kiri"}; pada harga yang sama, jumlah diminta berubah ${factor} unit.`}</p>
    </VisualCard>
  );
}
