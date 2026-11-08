"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { gdpExpenditure } from "./econ-math";

export default function EkoGdpExpenditure() {
  const [consumption, setConsumption] = useState(600);
  const [investment, setInvestment] = useState(150);
  const [government, setGovernment] = useState(200);
  const [exports, setExports] = useState(100);
  const [imports, setImports] = useState(120);
  const [mode, setMode] = useState<"expenditure" | "income">("expenditure");
  const result = gdpExpenditure(consumption, investment, government, exports, imports, mode);
  const parts = [
    { label: "C", value: consumption, color: "#38bdf8" },
    { label: "I", value: investment, color: "#a78bfa" },
    { label: "G", value: government, color: "#34d399" },
    { label: "X−M", value: result.netExports, color: "#fbbf24" },
  ];
  const maxPart = Math.max(...parts.map((part) => Math.abs(part.value)), 1);
  const total = mode === "income" ? result.incomeTotal : result.expenditureTotal;

  return (
    <VisualCard
      title="PDB dari pengeluaran dan pendapatan"
      caption="Nilai komponen adalah satuan ilustratif yang sama. Mode pendapatan memakai rincian contoh tetap untuk membandingkan dua pendekatan."
      howToRead="Batang komponen pengeluaran dibandingkan dengan PDB terpilih. Ekspor neto negatif ditampilkan ke kiri garis nol. Ganti mode untuk memeriksa pendekatan pendapatan."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Konsumsi C: {consumption}
          <input aria-label="Pengeluaran konsumsi C" type="range" min="300" max="900" step="10" value={consumption} onChange={(event) => setConsumption(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Investasi I: {investment}
          <input aria-label="Investasi produktif I" type="range" min="50" max="300" step="10" value={investment} onChange={(event) => setInvestment(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
        <label className="text-sm text-zinc-300">Pengeluaran pemerintah G: {government}
          <input aria-label="Pengeluaran pemerintah G" type="range" min="50" max="400" step="10" value={government} onChange={(event) => setGovernment(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Ekspor X: {exports}
          <input aria-label="Nilai ekspor X" type="range" min="0" max="300" step="10" value={exports} onChange={(event) => setExports(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300 sm:col-span-2">Impor M: {imports}
          <input aria-label="Nilai impor M" type="range" min="0" max="300" step="10" value={imports} onChange={(event) => setImports(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Pilih pendekatan PDB">
        <button type="button" aria-pressed={mode === "expenditure"} onClick={() => setMode("expenditure")} className={`min-h-10 rounded-lg border px-3 text-sm ${mode === "expenditure" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Pendekatan pengeluaran</button>
        <button type="button" aria-pressed={mode === "income"} onClick={() => setMode("income")} className={`min-h-10 rounded-lg border px-3 text-sm ${mode === "income" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Pendekatan pendapatan</button>
      </div>
      <svg viewBox="0 0 250 130" role="img" aria-label={`PDB ${mode === "expenditure" ? "pengeluaran" : "pendapatan"} ${total}. Ekspor neto ${result.netExports}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="126" x2="126" y1="8" y2="119" stroke="#71717a" strokeDasharray="3 3" />
        <text x="111" y="126" fill="#a1a1aa" fontSize="8">0</text>
        {parts.map((part, index) => {
          const width = Math.abs(part.value) / maxPart * 75;
          const y = 18 + index * 27;
          return (
            <g key={part.label}>
              <text x="4" y={y + 9} fill="#d4d4d8" fontSize="8">{part.label} {part.value}</text>
              <rect x={part.value < 0 ? 126 - width : 126} y={y} width={width} height="13" fill={part.color} />
            </g>
          );
        })}
        <text x="4" y="125" fill="#a1a1aa" fontSize="7">Pangsa terhadap PDB dihitung pada panel hasil.</text>
      </svg>
      <div aria-live="polite" className="space-y-2 rounded-lg bg-zinc-950 p-3 text-sm">
        <p className="font-semibold text-amber-200">PDB {mode === "expenditure" ? "pengeluaran" : "pendapatan"} = {total}.</p>
        <p>Ekspor neto = {exports}−{imports} = {result.netExports}; pangsa terhadap PDB: {(result.netExports / total * 100).toFixed(1)}%.</p>
        {mode === "expenditure" ? (
          <p>Pangsa komponen: {parts.map((part) => `${part.label} ${(part.value / total * 100).toFixed(1)}%`).join("; ")}.</p>
        ) : (
          <p>Upah 520 + sewa 50 + bunga 40 + laba 140 + pajak tak langsung neto 80 + penyusutan 100 = {result.incomeTotal}; pengeluaran pada slider = {result.expenditureTotal}.</p>
        )}
      </div>
    </VisualCard>
  );
}
