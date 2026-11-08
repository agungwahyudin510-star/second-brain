"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { growthAccounting } from "./econ-math";

export default function EkoGrowthAccounting() {
  const [capitalShare, setCapitalShare] = useState(0.4);
  const [capitalGrowth, setCapitalGrowth] = useState(5);
  const [laborGrowth, setLaborGrowth] = useState(1);
  const [technologyGrowth, setTechnologyGrowth] = useState(1);
  const result = growthAccounting(capitalShare, capitalGrowth, laborGrowth, technologyGrowth);
  const components = [
    { label: "Modal", value: result.capitalContribution, color: "#38bdf8" },
    { label: "Tenaga kerja", value: result.laborContribution, color: "#34d399" },
    { label: "Teknologi", value: result.technologyContribution, color: "#a78bfa" },
  ];
  const maxContribution = Math.max(...components.map((item) => item.value), 1);

  return (
    <VisualCard
      title="Dari faktor produksi ke pertumbuhan keluaran"
      caption="Akuntansi pertumbuhan adalah penguraian perkiraan, bukan identitas sebab-akibat untuk setiap perusahaan."
      howToRead="Panjang batang menunjukkan poin persentase kontribusi tiap sumber. Jumlahnya adalah pertumbuhan keluaran; kurangi pertumbuhan tenaga kerja untuk memperoleh pertumbuhan per pekerja."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Pangsa modal α: {capitalShare.toFixed(1)}
          <input aria-label="Pangsa modal alpha" type="range" min="0.2" max="0.6" step="0.1" value={capitalShare} onChange={(event) => setCapitalShare(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Pertumbuhan modal gK: {capitalGrowth}%
          <input aria-label="Pertumbuhan modal gK" type="range" min="0" max="10" value={capitalGrowth} onChange={(event) => setCapitalGrowth(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Pertumbuhan tenaga kerja gL: {laborGrowth}%
          <input aria-label="Pertumbuhan tenaga kerja gL" type="range" min="0" max="4" value={laborGrowth} onChange={(event) => setLaborGrowth(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Pertumbuhan produktivitas gA: {technologyGrowth}%
          <input aria-label="Pertumbuhan teknologi atau produktivitas gA" type="range" min="0" max="4" value={technologyGrowth} onChange={(event) => setTechnologyGrowth(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 130" role="img" aria-label={`Kontribusi modal ${result.capitalContribution.toFixed(1)} poin, tenaga kerja ${result.laborContribution.toFixed(1)} poin, produktivitas ${result.technologyContribution.toFixed(1)} poin.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="14" fill="#a1a1aa" fontSize="8">Kontribusi terhadap pertumbuhan</text>
        {components.map((component, index) => {
          const y = 27 + index * 30;
          const width = 145 * component.value / maxContribution;
          return (
            <g key={component.label}>
              <text x="4" y={y + 9} fill="#d4d4d8" fontSize="8">{component.label} {component.value.toFixed(1)}</text>
              <rect x="95" y={y} width={width} height="13" rx="3" fill={component.color} />
            </g>
          );
        })}
        <text x="4" y="119" fill="#a1a1aa" fontSize="7">Satuan batang: poin persentase</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">gY=gA+αgK+(1−α)gL = {technologyGrowth}+{capitalShare.toFixed(1)}×{capitalGrowth}+(1−{capitalShare.toFixed(1)})×{laborGrowth} = <strong>{result.outputGrowth.toFixed(1)}%</strong>.</p>
        <p className="rounded bg-zinc-950 p-3 text-emerald-200">Pertumbuhan per pekerja = gY−gL = {result.outputPerWorkerGrowth.toFixed(1)}%.</p>
        <p className="rounded bg-zinc-950 p-3">Residu Solow pada data ini = {result.solowResidual.toFixed(1)}%; residu dapat memuat galat pengukuran.</p>
      </div>
    </VisualCard>
  );
}
