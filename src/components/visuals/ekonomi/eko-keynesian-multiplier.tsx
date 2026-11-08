"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { fiscalMultipliers } from "./econ-math";

export default function EkoKeynesianMultiplier() {
  const [mpc, setMpc] = useState(0.8);
  const [changeGovernment, setChangeGovernment] = useState(20);
  const [changeTax, setChangeTax] = useState(0);
  const result = fiscalMultipliers(mpc, changeGovernment, changeTax);
  const gEffect = result.governmentMultiplier * changeGovernment;
  const tEffect = result.taxMultiplier * changeTax;
  const maxMagnitude = Math.max(Math.abs(gEffect), Math.abs(tEffect), Math.abs(result.outputChange), 20);
  const scale = 180 / maxMagnitude;

  return (
    <VisualCard
      title="Pengganda belanja dan pajak"
      caption="Model Keynesian sederhana: tidak memasukkan impor, pajak proporsional, perubahan harga, atau efek suku bunga."
      howToRead="Garis tegak menandai nol perubahan keluaran. Batang belanja dan pajak menunjukkan kontribusi masing-masing; ΔY adalah jumlah kontribusi tersebut."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">MPC: {mpc.toFixed(2)}
          <input aria-label="Kecenderungan konsumsi marjinal" type="range" min="0.5" max="0.9" step="0.05" value={mpc} onChange={(event) => setMpc(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Perubahan G: {changeGovernment > 0 ? "+" : ""}{changeGovernment}
          <input aria-label="Perubahan belanja pemerintah" type="range" min="-40" max="40" step="5" value={changeGovernment} onChange={(event) => setChangeGovernment(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Perubahan T: {changeTax > 0 ? "+" : ""}{changeTax}
          <input aria-label="Perubahan pajak neto" type="range" min="-40" max="40" step="5" value={changeTax} onChange={(event) => setChangeTax(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 125" role="img" aria-label={`Pengaruh belanja ${gEffect.toFixed(1)}, pengaruh pajak ${tEffect.toFixed(1)}, perubahan keluaran total ${result.outputChange.toFixed(1)}.`} className="h-48 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="13" fill="#a1a1aa" fontSize="8">Kontribusi pada perubahan Y</text>
        <line x1="125" x2="125" y1="20" y2="111" stroke="#71717a" />
        {[{ label: "Belanja", value: gEffect, color: "#34d399" }, { label: "Pajak", value: tEffect, color: "#fbbf24" }, { label: "Total ΔY", value: result.outputChange, color: "#38bdf8" }].map((item, index) => {
          const rowY = 28 + index * 28;
          const width = Math.abs(item.value) * scale;
          return (
            <g key={item.label}>
              <text x="4" y={rowY + 9} fill="#d4d4d8" fontSize="8">{item.label}: {item.value.toFixed(1)}</text>
              <rect x={item.value >= 0 ? 125 : 125 - width} y={rowY} width={width} height="13" rx="2" fill={item.color} />
            </g>
          );
        })}
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Pengganda G=1/(1−{mpc.toFixed(2)})=<strong>{result.governmentMultiplier.toFixed(2)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Pengganda T=−{mpc.toFixed(2)}/(1−{mpc.toFixed(2)})=<strong>{result.taxMultiplier.toFixed(2)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">ΔY={result.governmentMultiplier.toFixed(2)}×({changeGovernment})−{mpc.toFixed(2)}/(1−{mpc.toFixed(2)})×({changeTax})=<strong>{result.outputChange.toFixed(2)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3 text-sky-200">Pengganda anggaran berimbang = {result.balancedBudgetMultiplier.toFixed(2)}.</p>
      </div>
    </VisualCard>
  );
}
