"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { laborStats } from "./econ-math";

export default function EkoUnemployment() {
  const [employed, setEmployed] = useState(120);
  const [unemployed, setUnemployed] = useState(10);
  const [notInLaborForce, setNotInLaborForce] = useState(70);
  const [discouraged, setDiscouraged] = useState(0);
  const result = laborStats(employed, unemployed, notInLaborForce, discouraged);
  const categories = [
    { label: "Bekerja", value: employed, color: "#34d399" },
    { label: "Menganggur", value: unemployed, color: "#f87171" },
    { label: "Bukan angkatan kerja", value: notInLaborForce, color: "#71717a" },
  ];
  const scale = 200 / Math.max(result.workingAgePopulation, 1);
  let offset = 0;

  return (
    <VisualCard
      title="Angkatan kerja, TPT, dan partisipasi"
      caption="Jumlah merupakan orang dalam populasi ilustratif. Penduduk usia kerja dihitung sebagai jumlah tiga kelompok awal."
      howToRead="Pita menunjukkan komposisi penduduk usia kerja. Pindahkan penganggur yang putus asa keluar dari angkatan kerja; lapangan kerja tetap, sedangkan TPT dan TPAK berubah."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">Bekerja: {employed}
          <input aria-label="Jumlah penduduk bekerja" type="range" min="80" max="150" value={employed} onChange={(event) => setEmployed(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Menganggur: {unemployed}
          <input aria-label="Jumlah penduduk menganggur" type="range" min="0" max="40" value={unemployed} onChange={(event) => { const next = Number(event.target.value); setUnemployed(next); setDiscouraged((current) => Math.min(current, next)); }} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
        <label className="text-sm text-zinc-300">Bukan angkatan kerja: {notInLaborForce}
          <input aria-label="Jumlah penduduk bukan angkatan kerja" type="range" min="0" max="100" value={notInLaborForce} onChange={(event) => setNotInLaborForce(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-zinc-400" />
        </label>
      </div>
      <label className="block text-sm text-zinc-300">
        Penganggur yang berhenti mencari: {discouraged}
        <input aria-label="Jumlah penganggur putus asa yang berhenti mencari kerja" type="range" min="0" max={unemployed} value={discouraged} onChange={(event) => setDiscouraged(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 240 86" role="img" aria-label={`Penduduk usia kerja ${result.workingAgePopulation}: bekerja ${employed}, menganggur ${unemployed}, bukan angkatan kerja ${notInLaborForce}.`} className="h-36 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="14" fill="#a1a1aa" fontSize="8">Penduduk usia kerja: {result.workingAgePopulation}</text>
        {categories.map((category) => {
          const width = category.value * scale;
          const currentOffset = offset;
          offset += width;
          return (
            <g key={category.label}>
              <rect x={20 + currentOffset} y="25" width={width} height="24" fill={category.color} />
              {width > 20 && <text x={20 + currentOffset + 3} y="41" fill="#09090b" fontSize="7">{category.label}</text>}
            </g>
          );
        })}
        <text x="20" y="67" fill="#a1a1aa" fontSize="8">0</text>
        <text x="204" y="67" fill="#a1a1aa" fontSize="8">{result.workingAgePopulation} orang</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Awal: angkatan kerja {result.laborForce}; TPT {result.unemploymentRate.toFixed(2)}%; TPAK {result.participationRate.toFixed(1)}%; rasio kerja-penduduk {result.employmentPopulationRatio.toFixed(1)}%.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Setelah {discouraged} berhenti mencari: angkatan kerja {result.adjustedLaborForce}; TPT {result.adjustedUnemploymentRate.toFixed(2)}%; TPAK {result.adjustedParticipationRate.toFixed(1)}%; rasio kerja-penduduk {result.adjustedEmploymentPopulationRatio.toFixed(1)}%.</p>
      </div>
    </VisualCard>
  );
}
