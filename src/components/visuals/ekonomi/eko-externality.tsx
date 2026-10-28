"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { externalityOutcome } from "./econ-math";

const sx = (q: number) => 30 + (q / 100) * 160;
const sy = (p: number) => 125 - (p / 24) * 110;

export default function EkoExternality() {
  const [tax, setTax] = useState(0);
  const r = externalityOutcome(tax);
  const line = (f: (q: number) => number) => `${sx(0)},${sy(f(0))} ${sx(100)},${sy(f(100))}`;
  const note = tax === 4 ? "Pajak = eksternalitas (4): output sama dengan optimum sosial, DWL nol." : tax < 4 ? "Pajak terlalu rendah: masih terlalu banyak produksi." : "Pajak berlebih: produksi terlalu sedikit dan DWL muncul lagi.";

  return (
    <VisualCard
      title="Eksternalitas negatif dan pajak Pigouvian"
      caption="Permintaan P = 20 − Q/5, biaya marjinal privat P = 4 + Q/5, biaya eksternal tetap 4 per unit, jadi biaya marjinal sosial P = 8 + Q/5."
      howToRead="Tanpa pajak, pasar berhenti di Q = 40, padahal optimum sosial di Q = 30 (titik temu permintaan dan biaya sosial). Pajak per unit menggeser kurva biaya privat ke atas."
    >
      <label className="block text-sm text-zinc-300">
        Pajak per unit t: {tax}
        <input aria-label="Pajak per unit" type="range" min="0" max="8" step="1" value={tax} onChange={(e) => setTax(Number(e.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 210 145" role="img" aria-label={`Pajak ${tax}: Q ${r.q}, harga pembeli ${r.buyerPrice}, DWL ${r.deadweightLoss}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 10V125H195" fill="none" stroke="#71717a" />
        <text x="4" y="14" fill="#A1A1AA" fontSize="8">P</text>
        <text x="188" y="138" fill="#A1A1AA" fontSize="8">Q</text>
        <polyline points={line((q) => 20 - q / 5)} fill="none" stroke="#38BDF8" strokeWidth="2" />
        <polyline points={line((q) => 4 + q / 5)} fill="none" stroke="#FBBF24" strokeWidth="2" />
        <polyline points={line((q) => 8 + q / 5)} fill="none" stroke="#F87171" strokeWidth="2" />
        {tax > 0 && <polyline points={line((q) => 4 + tax + q / 5)} fill="none" stroke="#34D399" strokeWidth="1.5" strokeDasharray="4 3" />}
        <line x1={sx(30)} x2={sx(30)} y1={sy(14)} y2={sy(0)} stroke="#a1a1aa" strokeDasharray="2 3" />
        <circle cx={sx(30)} cy={sy(14)} r="3" fill="none" stroke="#F472B6" />
        <circle cx={sx(r.q)} cy={sy(r.buyerPrice)} r="3.5" fill="#F472B6" />
        <text x="150" y="22" fill="#38BDF8" fontSize="7">Permintaan</text>
        <text x="150" y="31" fill="#FBBF24" fontSize="7">MC privat</text>
        <text x="150" y="40" fill="#F87171" fontSize="7">MC sosial</text>
      </svg>
      <div className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Q = {r.q}; harga pembeli = {r.buyerPrice}; harga penjual = {r.sellerPrice}</p>
        <p className="rounded bg-zinc-950 p-3">Penerimaan pajak = {r.revenue}</p>
        <p className="rounded bg-zinc-950 p-3">DWL = {r.deadweightLoss}</p>
        <p className="rounded bg-zinc-950 p-3">Optimum sosial: Q = 30, P = 14. {note}</p>
      </div>
    </VisualCard>
  );
}