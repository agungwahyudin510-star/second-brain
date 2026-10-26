"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { taxOutcome } from "./econ-math";

const demandSlopes = { "lebih elastis": 8, "sama": 5, "kurang elastis": 2 } as const;
type DemandMode = keyof typeof demandSlopes;
const x = (quantity: number) => 32 + quantity * 1.7;
const y = (price: number) => 140 - price * 4;

export default function EkoTaxIncidence() {
  const [tax, setTax] = useState(4);
  const [mode, setMode] = useState<DemandMode>("sama");
  const slope = demandSlopes[mode];
  const intercept = 40 + 12 * slope;
  const outcome = taxOutcome(tax, slope);
  const demandInterceptPrice = intercept / slope;
  const demandPoints = Array.from({ length: 11 }, (_, index) => {
    const p = demandInterceptPrice * index / 10;
    return `${x(intercept - slope * p)},${y(p)}`;
  }).join(" ");
  const supplyPoints = Array.from({ length: 11 }, (_, index) => {
    const p = 4 + index * 2;
    return `${x(-20 + 5 * p)},${y(p)}`;
  }).join(" ");
  const demandPriceAtTrade = (intercept - outcome.quantity) / slope;
  const supplyPriceAtTrade = (outcome.quantity + 20) / 5;

  return (
    <VisualCard
      title="Pajak per unit: insiden dan DWL"
      caption="Penawaran Qs=−20+5P_s. Mode permintaan mengubah kemiringan Qd saja dan menjaga ekuilibrium tanpa pajak pada P=12, Q=40."
      howToRead="Garis harga atas adalah yang dibayar pembeli; garis bawah adalah yang diterima penjual. Persegi jingga adalah penerimaan pajak, segitiga merah DWL, dan area biru/hijau surplus."
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label="Pilih elastisitas relatif permintaan">
        {(Object.keys(demandSlopes) as DemandMode[]).map((item) => (
          <button key={item} type="button" aria-pressed={mode === item} onClick={() => setMode(item)} className={`min-h-10 rounded-lg border px-2 text-sm capitalize ${mode === item ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>
            Permintaan {item}
          </button>
        ))}
      </div>
      <label className="block text-sm text-zinc-300">
        Pajak per unit t: {tax}
        <input aria-label="Besar pajak per unit" type="range" min="0" max="8" value={tax} onChange={(event) => setTax(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 230 160" role="img" aria-label={`Pajak ${tax}; harga pembeli ${outcome.buyerPrice.toFixed(2)}, harga penjual ${outcome.sellerPrice.toFixed(2)}, kuantitas ${outcome.quantity.toFixed(2)}, beban pembeli ${outcome.buyerBurden.toFixed(2)}, beban penjual ${outcome.sellerBurden.toFixed(2)}, penerimaan ${outcome.revenue.toFixed(2)}, DWL ${outcome.deadweightLoss.toFixed(2)}.`} className="h-60 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 10V140H218" fill="none" stroke="#71717a" />
        <text x="2" y="15" fill="#a1a1aa" fontSize="8">Harga P</text><text x="190" y="155" fill="#a1a1aa" fontSize="8">Q</text>
        <polygon points={`${x(0)},${y(demandInterceptPrice)} ${x(outcome.quantity)},${y(demandPriceAtTrade)} ${x(outcome.quantity)},${y(outcome.buyerPrice)} ${x(0)},${y(outcome.buyerPrice)}`} fill="#38bdf833" />
        <polygon points={`${x(0)},${y(4)} ${x(outcome.quantity)},${y(supplyPriceAtTrade)} ${x(outcome.quantity)},${y(outcome.sellerPrice)} ${x(0)},${y(outcome.sellerPrice)}`} fill="#34d39933" />
        <rect x={x(0)} y={y(outcome.buyerPrice)} width={x(outcome.quantity) - x(0)} height={y(outcome.sellerPrice) - y(outcome.buyerPrice)} fill="#fbbf2433" />
        {tax > 0 && outcome.quantity < 40 && <polygon points={`${x(outcome.quantity)},${y(demandPriceAtTrade)} ${x(outcome.quantity)},${y(supplyPriceAtTrade)} ${x(40)},${y(12)}`} fill="#f8717144" />}
        <polyline points={demandPoints} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={supplyPoints} fill="none" stroke="#34d399" strokeWidth="2.5" />
        <line x1={x(0)} x2={x(outcome.quantity)} y1={y(outcome.buyerPrice)} y2={y(outcome.buyerPrice)} stroke="#fbbf24" strokeDasharray="3 3" />
        <line x1={x(0)} x2={x(outcome.quantity)} y1={y(outcome.sellerPrice)} y2={y(outcome.sellerPrice)} stroke="#fbbf24" strokeDasharray="3 3" />
        <circle cx={x(outcome.quantity)} cy={y(outcome.buyerPrice)} r="3" fill="#fbbf24" />
        <text x="187" y="31" fill="#7dd3fc" fontSize="8">D</text><text x="187" y="111" fill="#6ee7b7" fontSize="8">S</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">P pembeli={outcome.buyerPrice.toFixed(2)}; P penjual={outcome.sellerPrice.toFixed(2)}; Q={outcome.quantity.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3">Beban pembeli={outcome.buyerBurden.toFixed(2)}; beban penjual={outcome.sellerBurden.toFixed(2)} per unit.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Penerimaan pajak = {tax}×{outcome.quantity.toFixed(2)} = {outcome.revenue.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3 text-rose-200">DWL = {outcome.deadweightLoss.toFixed(2)}.</p>
        <p className="rounded bg-zinc-950 p-3 text-sky-200">SK={outcome.consumer.toFixed(2)}; SP={outcome.producer.toFixed(2)}.</p>
      </div>
    </VisualCard>
  );
}
