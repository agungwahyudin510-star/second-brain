"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { perCapitaGrowth } from "./econ-math";

export default function EkoGdpPerCapita() {
  const [realGrowth, setRealGrowth] = useState(4);
  const [populationGrowth, setPopulationGrowth] = useState(1);
  const [received, setReceived] = useState(30);
  const [paid, setPaid] = useState(50);
  const [measure, setMeasure] = useState<"PDB" | "GNI">("PDB");
  const result = perCapitaGrowth(realGrowth, populationGrowth, 930, received, paid, measure);
  const maxOutput = Math.max(930, result.gni, 1);
  const pdbWidth = 160 * 930 / maxOutput;
  const gniWidth = 160 * result.gni / maxOutput;

  return (
    <VisualCard
      title="PDB per kapita dan pendapatan nasional"
      caption="Pertumbuhan riil dan penduduk adalah persentase ilustratif. PDB 930, pendapatan faktor diterima dari luar 30 dan dibayar ke luar 50."
      howToRead="Rasio pertumbuhan riil terhadap pertumbuhan penduduk memberi perubahan rata-rata per kapita. Toggle PDB/GNI memperlihatkan penyesuaian pendapatan faktor neto lintas batas."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Pertumbuhan PDB riil: {realGrowth}%
          <input aria-label="Pertumbuhan PDB riil" type="range" min="0" max="8" step="0.5" value={realGrowth} onChange={(event) => setRealGrowth(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Pertumbuhan penduduk: {populationGrowth}%
          <input aria-label="Pertumbuhan penduduk" type="range" min="0" max="4" step="0.5" value={populationGrowth} onChange={(event) => setPopulationGrowth(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Pendapatan faktor diterima dari luar: {received}
          <input aria-label="Pendapatan faktor yang diterima dari luar negeri" type="range" min="0" max="100" step="5" value={received} onChange={(event) => setReceived(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
        <label className="text-sm text-zinc-300">Pendapatan faktor dibayar ke luar: {paid}
          <input aria-label="Pendapatan faktor yang dibayarkan ke luar negeri" type="range" min="0" max="100" step="5" value={paid} onChange={(event) => setPaid(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Pilih ukuran produksi atau pendapatan">
        {(["PDB", "GNI"] as const).map((item) => (
          <button key={item} type="button" aria-pressed={measure === item} onClick={() => setMeasure(item)} className={`min-h-10 rounded-lg border px-3 text-sm ${measure === item ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>{item === "GNI" ? "PNB/GNI" : item}</button>
        ))}
      </div>
      <svg viewBox="0 0 250 86" role="img" aria-label={`PDB ${930}; GNI ${result.gni}; ukuran terpilih ${measure} bernilai ${result.output}.`} className="h-36 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="25" fill="#a1a1aa" fontSize="8">PDB</text>
        <rect x="45" y="14" width={pdbWidth} height="14" rx="3" fill="#38bdf8" />
        <text x={Math.min(222, 49 + pdbWidth)} y="25" fill="#e4e4e7" fontSize="8">930</text>
        <text x="4" y="57" fill="#a1a1aa" fontSize="8">GNI</text>
        <rect x="45" y="46" width={gniWidth} height="14" rx="3" fill="#34d399" />
        <text x={Math.min(222, 49 + gniWidth)} y="57" fill="#e4e4e7" fontSize="8">{result.gni}</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">GNI = PDB + diterima − dibayar = 930+{received}−{paid} = {result.gni}.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Ukuran {measure} terpilih = {result.output}.</p>
        <p className="rounded bg-zinc-950 p-3">Pertumbuhan per kapita = (1+{(realGrowth / 100).toFixed(2)})/(1+{(populationGrowth / 100).toFixed(2)})−1.</p>
        <p className="rounded bg-zinc-950 p-3 text-emerald-200">Perubahan riil per kapita = {result.perCapitaGrowth.toFixed(2)}%.</p>
      </div>
    </VisualCard>
  );
}
