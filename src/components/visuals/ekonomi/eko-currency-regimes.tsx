"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { reserveRunway, trilemmaOutcome, type TrilemmaGoal } from "./econ-math";

const GOALS: { id: TrilemmaGoal; label: string }[] = [
  { id: "fixed", label: "Kurs tetap" },
  { id: "capital", label: "Modal bebas" },
  { id: "monetary", label: "Moneter mandiri" },
];

export default function EkoCurrencyRegimes() {
  const [active, setActive] = useState<TrilemmaGoal[]>(["fixed", "capital"]);
  const [reserves, setReserves] = useState(60);
  const [outflow, setOutflow] = useState(10);
  const result = trilemmaOutcome(active);
  const months = reserveRunway(reserves, outflow);

  function toggle(goal: TrilemmaGoal) {
    setActive((current) => {
      if (current.includes(goal)) return current.filter((g) => g !== goal);
      const next = [...current, goal];
      return next.length > 2 ? next.slice(1) : next;
    });
  }

  return (
    <VisualCard
      title="Trilema kebijakan dan umur cadangan"
      caption="Pilih dua dari tiga tujuan; yang ketiga otomatis tidak dapat dipenuhi. Angka cadangan ilustratif."
      howToRead="Tombol yang menyala adalah tujuan yang dipilih (maksimum dua). Slider di bawah menghitung berapa bulan cadangan bertahan bila bank sentral menjual devisa tiap bulan untuk menahan kurs tetap."
    >
      <div className="grid gap-2 sm:grid-cols-3" role="group" aria-label="Pilih dua tujuan kebijakan">
        {GOALS.map((g) => (
          <button key={g.id} type="button" aria-pressed={active.includes(g.id)} onClick={() => toggle(g.id)} className={`min-h-10 rounded-lg border px-3 text-sm ${active.includes(g.id) ? "border-emerald-400 bg-emerald-500/15 text-emerald-100" : "border-zinc-700 text-zinc-300"}`}>{g.label}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 110" role="img" aria-label={`Trilema: tujuan yang tidak terpenuhi ${result.lost ?? "tidak ada"}.`} className="h-40 w-full rounded-lg bg-zinc-950 p-2">
        <polygon points="110,12 30,98 190,98" fill="none" stroke="#71717a" />
        {GOALS.map((g, idx) => {
          const pos = [[110, 12], [30, 98], [190, 98]][idx];
          const on = active.includes(g.id);
          return (
            <g key={g.id}>
              <circle cx={pos[0]} cy={pos[1]} r="7" fill={on ? "#34d399" : "#f87171"} />
              <text x={pos[0] - 26} y={pos[1] + (idx === 0 ? -10 : 18)} fill="#d4d4d8" fontSize="8">{g.label}</text>
            </g>
          );
        })}
      </svg>
      <p aria-live="polite" className="rounded bg-zinc-950 p-3 text-sm text-zinc-200">{result.text}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Cadangan devisa: {reserves}
          <input aria-label="Cadangan devisa" type="range" min="20" max="120" step="10" value={reserves} onChange={(e) => setReserves(Number(e.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Intervensi per bulan: {outflow}
          <input aria-label="Intervensi per bulan" type="range" min="5" max="30" step="5" value={outflow} onChange={(e) => setOutflow(Number(e.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <p aria-live="polite" className="rounded bg-zinc-950 p-3 text-sm text-zinc-200">Cadangan bertahan: {reserves}/{outflow} = <strong>{months === null ? "—" : months.toFixed(1)} bulan</strong> bila tekanan terus berlangsung.</p>
    </VisualCard>
  );
}