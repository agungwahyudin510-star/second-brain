"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { adasEquilibrium } from "./econ-math";

const x = (output: number) => 34 + (output - 700) / 600 * 190;
const y = (price: number) => 112 - (price - 1) / 2 * 90;

export default function EkoAdasEquilibrium() {
  const [demandShift, setDemandShift] = useState(0);
  const [supplyShift, setSupplyShift] = useState(0);
  const [longRun, setLongRun] = useState(false);
  const result = adasEquilibrium(demandShift, supplyShift);
  const shownPrice = longRun ? result.longRunPrice : result.price;
  const shownOutput = longRun ? result.longRunOutput : result.output;
  const ad = Array.from({ length: 11 }, (_, index) => {
    const price = 1 + index * 0.2;
    return `${x(1400 + demandShift - 200 * price)},${y(price)}`;
  }).join(" ");
  const sras = Array.from({ length: 11 }, (_, index) => {
    const price = 1 + index * 0.2;
    return `${x(800 + supplyShift + 100 * price)},${y(price)}`;
  }).join(" ");
  const markerX = x(shownOutput);
  const markerY = y(shownPrice);
  const label = longRun ? "Kembali ke potensi setelah penyesuaian" : result.label;

  return (
    <VisualCard
      title="Keseimbangan AD-AS dan guncangan"
      caption="AD: Y=1.400+a−200P; SRAS: Y=800+s+100P; LRAS tegak pada Y=1.000."
      howToRead="Kurva AD menurun, SRAS menaik, dan garis tegak menandai potensi. Titik keseimbangan dihitung dari perpotongan AD-SRAS. Tombol penyesuaian menunjukkan hasil jangka panjang setelah guncangan AD."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Pergeseran AD a: {demandShift > 0 ? "+" : ""}{demandShift}
          <input aria-label="Pergeseran permintaan agregat a" type="range" min="-100" max="100" step="20" value={demandShift} onChange={(event) => { setDemandShift(Number(event.target.value)); setLongRun(false); }} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Pergeseran SRAS s: {supplyShift > 0 ? "+" : ""}{supplyShift}
          <input aria-label="Pergeseran penawaran agregat s" type="range" min="-100" max="100" step="20" value={supplyShift} onChange={(event) => { setSupplyShift(Number(event.target.value)); setLongRun(false); }} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button type="button" aria-pressed={longRun} onClick={() => setLongRun((value) => !value)} className={`min-h-10 rounded-lg border px-3 text-sm ${longRun ? "border-amber-400 text-amber-200" : "border-zinc-700 text-zinc-300"}`}>Penyesuaian jangka panjang</button>
        <p className="flex items-center rounded bg-zinc-950 px-3 text-sm text-zinc-200" aria-live="polite">{label}</p>
      </div>
      <svg viewBox="0 0 250 132" role="img" aria-label={`AD bergeser ${demandShift}, SRAS bergeser ${supplyShift}. Keseimbangan yang ditampilkan P ${shownPrice.toFixed(3)}, Y ${shownOutput.toFixed(1)}; potensial 1.000.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 12V114H238" fill="none" stroke="#71717a" />
        <text x="3" y="16" fill="#a1a1aa" fontSize="8">P</text><text x="222" y="128" fill="#a1a1aa" fontSize="8">Y</text>
        <polyline points={ad} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={sras} fill="none" stroke="#34d399" strokeWidth="2.5" />
        <line x1={x(1000)} x2={x(1000)} y1="12" y2="114" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x={x(1000) + 2} y="20" fill="#c4b5fd" fontSize="7">LRAS</text>
        <line x1={markerX} x2={markerX} y1={markerY} y2="114" stroke="#fbbf24" strokeDasharray="2 2" />
        <circle cx={markerX} cy={markerY} r="4" fill="#fbbf24" />
        <text x="190" y="27" fill="#7dd3fc" fontSize="7">AD</text><text x="190" y="43" fill="#6ee7b7" fontSize="7">SRAS</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Keseimbangan {longRun ? "jangka panjang" : "jangka pendek"}: P={shownPrice.toFixed(3)}, Y={shownOutput.toFixed(1)}.</p>
        <p className="rounded bg-zinc-950 p-3">Kesenjangan keluaran Y−Y*={ (shownOutput - 1000).toFixed(1)}; Y*=1.000.</p>
        {longRun && <p className="rounded bg-zinc-950 p-3 text-amber-200 sm:col-span-2">Setelah guncangan AD, SRAS menyesuaikan; Y kembali ke 1.000 dan P menjadi {result.longRunPrice.toFixed(3)}.</p>}
      </div>
    </VisualCard>
  );
}
