"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { monopolyAt, type MonopolyMode } from "./econ-math";

const MODES: { id: MonopolyMode; label: string }[] = [
  { id: "monopoli", label: "Monopoli" },
  { id: "persaingan", label: "Persaingan sempurna" },
  { id: "diskriminasi", label: "Diskriminasi sempurna" },
];
const sx = (q: number) => 30 + (q / 50) * 160;
const sy = (p: number) => 125 - (p / 50) * 110;

export default function EkoMonopoly() {
  const [mc, setMc] = useState(10);
  const [mode, setMode] = useState<MonopolyMode>("monopoli");
  const r = monopolyAt(mc, mode);
  const effQ = r.efficientQ;
  const dwlPoints = mode === "monopoli" ? `${sx(r.q)},${sy(r.price)} ${sx(effQ)},${sy(mc)} ${sx(r.q)},${sy(mc)}` : "";

  return (
    <VisualCard
      title="Monopoli vs persaingan sempurna"
      caption="Permintaan P = 50 − Q, MR = 50 − 2Q, biaya marjinal konstan. Pada MC = 10 angkanya sama dengan tabel di teks."
      howToRead="Monopoli berproduksi di MR = MC lalu mengambil harga dari kurva permintaan. Segitiga merah adalah deadweight loss: transaksi yang menguntungkan tetapi tidak terjadi."
    >
      <div className="flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button key={m.id} type="button" onClick={() => setMode(m.id)} aria-pressed={mode === m.id} className={`min-h-10 rounded-lg border px-3 text-sm ${mode === m.id ? "border-sky-400 bg-sky-500/20 text-sky-100" : "border-zinc-700 text-zinc-300"}`}>{m.label}</button>
        ))}
      </div>
      <label className="block text-sm text-zinc-300">
        Biaya marjinal MC: {mc}
        <input aria-label="Biaya marjinal" type="range" min="0" max="40" step="2" value={mc} onChange={(e) => setMc(Number(e.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 210 145" role="img" aria-label={`Mode ${mode}: Q ${r.q}, harga ${r.price}, laba ${r.profit}, DWL ${r.deadweightLoss}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M30 10V125H195" fill="none" stroke="#71717a" />
        <text x="4" y="14" fill="#A1A1AA" fontSize="8">P</text>
        <text x="188" y="138" fill="#A1A1AA" fontSize="8">Q</text>
        {mode !== "diskriminasi" && <polygon points={`${sx(0)},${sy(50)} ${sx(r.q)},${sy(r.price)} ${sx(0)},${sy(r.price)}`} fill="#38BDF8" opacity="0.3" />}
        {mode === "monopoli" && <rect x={sx(0)} y={sy(r.price)} width={sx(r.q) - sx(0)} height={Math.max(sy(mc) - sy(r.price), 0)} fill="#34D399" opacity="0.3" />}
        {mode === "diskriminasi" && <polygon points={`${sx(0)},${sy(50)} ${sx(effQ)},${sy(mc)} ${sx(0)},${sy(mc)}`} fill="#34D399" opacity="0.3" />}
        {dwlPoints && <polygon points={dwlPoints} fill="#F87171" opacity="0.5" />}
        <line x1={sx(0)} y1={sy(50)} x2={sx(50)} y2={sy(0)} stroke="#38BDF8" strokeWidth="2" />
        <line x1={sx(0)} y1={sy(50)} x2={sx(25)} y2={sy(0)} stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1={sx(0)} y1={sy(mc)} x2={sx(50)} y2={sy(mc)} stroke="#FBBF24" strokeWidth="2" />
        <circle cx={sx(r.q)} cy={sy(r.price)} r="3.5" fill="#F472B6" />
        <text x="140" y="22" fill="#38BDF8" fontSize="7">Permintaan</text>
        <text x="140" y="31" fill="#A78BFA" fontSize="7">MR</text>
        <text x="140" y="40" fill="#FBBF24" fontSize="7">MC</text>
      </svg>
      <div className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Q = {r.q}; P = {r.price}</p>
        <p className="rounded bg-zinc-950 p-3">Surplus konsumen = {r.consumerSurplus}</p>
        <p className="rounded bg-zinc-950 p-3">Laba (surplus produsen) = {r.profit}</p>
        <p className="rounded bg-zinc-950 p-3">Total surplus = {r.total}; DWL = {r.deadweightLoss}</p>
      </div>
    </VisualCard>
  );
}