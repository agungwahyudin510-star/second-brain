"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { surplusAtQuantity } from "./econ-math";

const x = (quantity: number) => 32 + quantity * 1.7;
const y = (price: number) => 125 - price * 5;
const demandPrice = (quantity: number) => (100 - quantity) / 5;
const supplyPrice = (quantity: number) => (quantity + 20) / 5;

export default function EkoConsumerProducerSurplus() {
  const [quantity, setQuantity] = useState(40);
  const marginalDemand = demandPrice(quantity);
  const marginalSupply = supplyPrice(quantity);
  const transactionPrice = (marginalDemand + marginalSupply) / 2;
  const surplus = surplusAtQuantity(quantity, transactionPrice);
  const deadweightLoss = 320 - surplus.total;
  const demandPoints = Array.from({ length: 11 }, (_, index) => {
    const p = index * 2;
    return `${x(100 - 5 * p)},${y(p)}`;
  }).join(" ");
  const supplyPoints = Array.from({ length: 9 }, (_, index) => {
    const p = 4 + index * 2;
    return `${x(-20 + 5 * p)},${y(p)}`;
  }).join(" ");

  return (
    <VisualCard
      title="Surplus konsumen dan produsen"
      caption="Kurva Qd=100−5P dan Qs=−20+5P. Harga ilustratif pada jumlah pilihan adalah titik tengah willingness to pay dan biaya marginal unit terakhir."
      howToRead="Area biru menunjukkan surplus konsumen di bawah permintaan dan di atas harga transaksi; hijau menunjukkan surplus produsen di atas penawaran. Kurangi dari total 320 untuk melihat DWL."
    >
      <label className="block text-sm text-zinc-300">
        Jumlah transaksi Q: {quantity} unit
        <input aria-label="Jumlah transaksi untuk menghitung surplus konsumen dan produsen" type="range" min="0" max="60" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 230 145" role="img" aria-label={`Jumlah transaksi ${quantity}. Surplus konsumen ${surplus.consumer.toFixed(1)}, surplus produsen ${surplus.producer.toFixed(1)}, total ${surplus.total.toFixed(1)}, deadweight loss ${deadweightLoss.toFixed(1)}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 10V125H218" fill="none" stroke="#71717a" />
        <text x="2" y="15" fill="#a1a1aa" fontSize="8">Harga P</text><text x="190" y="140" fill="#a1a1aa" fontSize="8">Q</text>
        <polygon points={`${x(0)},${y(demandPrice(0))} ${x(quantity)},${y(marginalDemand)} ${x(quantity)},${y(transactionPrice)} ${x(0)},${y(transactionPrice)}`} fill="#38bdf833" />
        <polygon points={`${x(0)},${y(supplyPrice(0))} ${x(quantity)},${y(marginalSupply)} ${x(quantity)},${y(transactionPrice)} ${x(0)},${y(transactionPrice)}`} fill="#34d39933" />
        {quantity < 40 && <polygon points={`${x(quantity)},${y(marginalDemand)} ${x(quantity)},${y(marginalSupply)} ${x(40)},${y(12)}`} fill="#f8717133" />}
        {quantity > 40 && <polygon points={`${x(40)},${y(12)} ${x(quantity)},${y(marginalDemand)} ${x(quantity)},${y(marginalSupply)}`} fill="#f8717133" />}
        <polyline points={demandPoints} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={supplyPoints} fill="none" stroke="#34d399" strokeWidth="2.5" />
        <line x1={x(0)} x2={x(quantity)} y1={y(transactionPrice)} y2={y(transactionPrice)} stroke="#fbbf24" strokeDasharray="3 3" />
        <circle cx={x(quantity)} cy={y(transactionPrice)} r="3.5" fill="#fbbf24" />
        <text x="190" y="31" fill="#7dd3fc" fontSize="8">D</text><text x="190" y="105" fill="#6ee7b7" fontSize="8">S</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3 text-sky-200">SK = {surplus.consumer.toFixed(1)}</p>
        <p className="rounded bg-zinc-950 p-3 text-emerald-200">SP = {surplus.producer.toFixed(1)}</p>
        <p className="rounded bg-zinc-950 p-3">Total surplus = {surplus.total.toFixed(1)}</p>
        <p className="rounded bg-zinc-950 p-3 text-rose-200">DWL = {deadweightLoss.toFixed(1)}{quantity < 40 ? " karena transaksi di bawah Q*=40" : quantity > 40 ? " karena transaksi melewati Q*=40" : " pada Q*=40"}</p>
      </div>
    </VisualCard>
  );
}
