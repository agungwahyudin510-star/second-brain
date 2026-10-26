"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { controlledPrice } from "./econ-math";

const x = (quantity: number) => 32 + quantity * 1.7;
const y = (price: number) => 125 - price * 5;
const demandPrice = (quantity: number) => (100 - quantity) / 5;
const supplyPrice = (quantity: number) => (quantity + 20) / 5;

export default function EkoPriceControls() {
  const [kind, setKind] = useState<"ceiling" | "floor">("ceiling");
  const [level, setLevel] = useState(8);
  const outcome = controlledPrice(kind, level);
  const demandPoints = Array.from({ length: 11 }, (_, index) => {
    const p = index * 2;
    return `${x(100 - 5 * p)},${y(p)}`;
  }).join(" ");
  const supplyPoints = Array.from({ length: 9 }, (_, index) => {
    const p = 4 + index * 2;
    return `${x(-20 + 5 * p)},${y(p)}`;
  }).join(" ");
  const consumerEndPrice = demandPrice(outcome.quantity);
  const producerEndPrice = supplyPrice(outcome.quantity);

  return (
    <VisualCard
      title="Batas harga dan surplus"
      caption="Ilustrasi memakai Qd=100−5P dan Qs=−20+5P, dengan P*=12 dan Q*=40."
      howToRead="Pilih ceiling atau floor. Batas mengikat hanya di bawah P* untuk ceiling atau di atas P* untuk floor. Area merah menunjukkan transaksi yang hilang."
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Pilih jenis batas harga">
        <button type="button" aria-pressed={kind === "ceiling"} onClick={() => { setKind("ceiling"); setLevel(8); }} className={`min-h-10 rounded-lg border px-3 text-sm ${kind === "ceiling" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Price ceiling</button>
        <button type="button" aria-pressed={kind === "floor"} onClick={() => { setKind("floor"); setLevel(16); }} className={`min-h-10 rounded-lg border px-3 text-sm ${kind === "floor" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Price floor</button>
      </div>
      <label className="block text-sm text-zinc-300">
        {kind === "ceiling" ? "Harga maksimum" : "Harga minimum"} P: {level}
        <input aria-label={`Tingkat harga untuk ${kind === "ceiling" ? "price ceiling" : "price floor"}`} type="range" min="4" max="20" value={level} onChange={(event) => setLevel(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 230 145" role="img" aria-label={`${kind === "ceiling" ? "Ceiling" : "Floor"} pada harga ${level}${outcome.binding ? " mengikat" : " tidak mengikat"}, transaksi ${outcome.quantity} unit, surplus konsumen ${outcome.consumer}, surplus produsen ${outcome.producer}, DWL ${outcome.deadweightLoss}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 10V125H218" fill="none" stroke="#71717a" />
        <text x="2" y="15" fill="#a1a1aa" fontSize="8">Harga P</text><text x="190" y="140" fill="#a1a1aa" fontSize="8">Q</text>
        <polygon points={`${x(0)},${y(20)} ${x(outcome.quantity)},${y(consumerEndPrice)} ${x(outcome.quantity)},${y(outcome.transactionPrice)} ${x(0)},${y(outcome.transactionPrice)}`} fill="#38bdf833" />
        <polygon points={`${x(0)},${y(4)} ${x(outcome.quantity)},${y(producerEndPrice)} ${x(outcome.quantity)},${y(outcome.transactionPrice)} ${x(0)},${y(outcome.transactionPrice)}`} fill="#34d39933" />
        {outcome.binding && outcome.quantity < 40 && <polygon points={`${x(outcome.quantity)},${y(demandPrice(outcome.quantity))} ${x(outcome.quantity)},${y(supplyPrice(outcome.quantity))} ${x(40)},${y(12)}`} fill="#f8717144" />}
        <polyline points={demandPoints} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={supplyPoints} fill="none" stroke="#34d399" strokeWidth="2.5" />
        <line x1="32" x2="205" y1={y(level)} y2={y(level)} stroke="#fbbf24" strokeDasharray="3 3" />
        <circle cx={x(outcome.quantity)} cy={y(outcome.transactionPrice)} r="3.5" fill="#fbbf24" />
        <text x="190" y="31" fill="#7dd3fc" fontSize="8">D</text><text x="190" y="105" fill="#6ee7b7" fontSize="8">S</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Status: <strong>{outcome.binding ? "mengikat" : "tidak mengikat"}</strong>; harga transaksi {outcome.transactionPrice}.</p>
        <p className="rounded bg-zinc-950 p-3">Qd={outcome.quantityDemanded}; Qs={outcome.quantitySupplied}; transaksi={outcome.quantity} unit.</p>
        <p className="rounded bg-zinc-950 p-3">{kind === "ceiling" ? `Kekurangan=${outcome.shortage}` : `Surplus penawaran=${outcome.excessSupply}`} unit.</p>
        <p className="rounded bg-zinc-950 p-3 text-sky-200">SK={outcome.consumer}; SP={outcome.producer}; total={outcome.total}.</p>
        <p className="rounded bg-zinc-950 p-3 text-rose-200">DWL={outcome.deadweightLoss}.</p>
      </div>
      {kind === "ceiling" && outcome.binding && <p className="rounded-lg border border-amber-500/30 p-3 text-sm text-amber-100">Asumsi alokasi: unit yang tersedia jatuh kepada pembeli dengan willingness to pay tertinggi. Alokasi acak membuat SK lebih rendah.</p>}
    </VisualCard>
  );
}
