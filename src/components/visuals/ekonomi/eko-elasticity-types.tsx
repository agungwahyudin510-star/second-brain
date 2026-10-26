"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

type Mode = "pendapatan" | "silang" | "penawaran";

const modes: { id: Mode; label: string; first: string; second: string }[] = [
  { id: "pendapatan", label: "Pendapatan", first: "Perubahan pendapatan (%)", second: "Perubahan jumlah (%)" },
  { id: "silang", label: "Silang", first: "Perubahan harga barang Y (%)", second: "Perubahan jumlah barang X (%)" },
  { id: "penawaran", label: "Penawaran", first: "Perubahan harga (%)", second: "Perubahan jumlah ditawarkan (%)" },
];

export default function EkoElasticityTypes() {
  const [mode, setMode] = useState<Mode>("pendapatan");
  const [baseChange, setBaseChange] = useState(10);
  const [quantityChange, setQuantityChange] = useState(15);
  const selected = modes.find((item) => item.id === mode) ?? modes[0];
  const elasticity = baseChange === 0 ? 0 : quantityChange / baseChange;
  const magnitude = Math.abs(elasticity);
  let classification: string;
  if (baseChange === 0) {
    classification = "tidak terdefinisi karena perubahan dasar 0%";
  } else if (mode === "pendapatan") {
    classification = elasticity < 0 ? "inferior" : elasticity > 1 ? "normal · barang mewah" : "normal · kebutuhan/normal";
  } else if (mode === "silang") {
    classification = elasticity > 0 ? "substitusi" : elasticity < 0 ? "komplementer" : "independen dalam ilustrasi";
  } else {
    classification = magnitude > 1 ? "elastis" : magnitude < 1 ? "inelastis" : "unitari";
  }

  return (
    <VisualCard
      title="Tiga jenis elastisitas"
      caption="Input persentase bersifat ilustratif. Tanda menunjukkan arah respons; besar nilai mengukur kekuatannya."
      howToRead="Pilih jenis elastisitas, lalu ubah persentase variabel penyebab dan jumlah. Klasifikasi pendapatan dan silang memakai tanda; klasifikasi penawaran memakai besar absolut."
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label="Pilih jenis elastisitas">
        {modes.map((item) => (
          <button key={item.id} type="button" aria-pressed={mode === item.id} onClick={() => setMode(item.id)} className={`min-h-10 rounded-lg border px-3 text-sm ${mode === item.id ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">{selected.first}: {baseChange}%
          <input aria-label={selected.first} type="range" min="-30" max="30" value={baseChange} onChange={(event) => setBaseChange(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">{selected.second}: {quantityChange}%
          <input aria-label={selected.second} type="range" min="-30" max="30" value={quantityChange} onChange={(event) => setQuantityChange(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
      </div>
      <div aria-live="polite" className="rounded-lg bg-zinc-950 p-4 text-sm">
        <p>{mode === "pendapatan" ? "Eᵧ" : mode === "silang" ? "Eₓᵧ" : "Eₛ"} = {baseChange === 0 ? "tidak terdefinisi saat perubahan dasar 0%" : `${quantityChange}% ÷ ${baseChange}% = ${elasticity.toFixed(2)}`}</p>
        <p className="mt-1 font-semibold text-amber-200">Klasifikasi: {classification}{mode === "penawaran" ? ` (|E|=${magnitude.toFixed(2)})` : ""}</p>
      </div>
      <svg viewBox="0 0 240 88" role="img" aria-label={`${selected.first} ${baseChange} persen dan ${selected.second} ${quantityChange} persen.`} className="h-32 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="120" x2="120" y1="12" y2="76" stroke="#71717a" strokeDasharray="3 3" />
        <text x="4" y="29" fill="#a1a1aa" fontSize="8">Perubahan dasar</text>
        <rect x={baseChange < 0 ? 120 + baseChange * 2 : 120} y="20" width={Math.abs(baseChange) * 2} height="12" rx="3" fill="#38bdf8" />
        <text x="4" y="61" fill="#a1a1aa" fontSize="8">Perubahan Q</text>
        <rect x={quantityChange < 0 ? 120 + quantityChange * 2 : 120} y="52" width={Math.abs(quantityChange) * 2} height="12" rx="3" fill="#34d399" />
        <text x="108" y="84" fill="#a1a1aa" fontSize="7">0%</text>
      </svg>
    </VisualCard>
  );
}
