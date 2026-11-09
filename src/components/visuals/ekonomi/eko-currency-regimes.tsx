"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { currencyRegime } from "./econ-math";

export default function EkoCurrencyRegimes() {
  const [regime, setRegime] = useState<"floating" | "fixed" | "managed">("managed");
  const [reserves, setReserves] = useState(60);
  const [capitalFlow, setCapitalFlow] = useState(20);
  const [pressure, setPressure] = useState(30);
  const result = currencyRegime(regime, reserves, capitalFlow, pressure);

  return (
    <VisualCard
      title="Rezim kurs dan intervensi"
      caption="Dalam rezim mengambang, pasar valuta menyerap tekanan; dalam kurs tetap, bank sentral bisa melakukan intervensi ketika modal bergerak ekstrem."
      howToRead="Pilih rezim dan geser tekanan arus modal serta cadangan. Intervensi dan perubahan kurs menggambarkan kompromi trilema kebijakan."
    >
      <div className="grid gap-2 sm:grid-cols-3">
        <button type="button" onClick={() => setRegime("floating")} className={`min-h-10 rounded-lg border px-2 text-sm ${regime === "floating" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Mengambang</button>
        <button type="button" onClick={() => setRegime("fixed")} className={`min-h-10 rounded-lg border px-2 text-sm ${regime === "fixed" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Tetap</button>
        <button type="button" onClick={() => setRegime("managed")} className={`min-h-10 rounded-lg border px-2 text-sm ${regime === "managed" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Terkendali</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">Cadangan: {reserves}
          <input type="range" min="20" max="100" step="10" value={reserves} onChange={(event) => setReserves(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Arus modal: {capitalFlow}
          <input type="range" min="-30" max="60" step="10" value={capitalFlow} onChange={(event) => setCapitalFlow(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Tekanan: {pressure}
          <input type="range" min="0" max="60" step="10" value={pressure} onChange={(event) => setPressure(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 240 120" role="img" aria-label={`Rezim ${regime}, intervensi ${result.intervention.toFixed(1)}, perubahan kurs ${result.exchangeRateChange.toFixed(1)}.`} className="h-44 w-full rounded-lg bg-zinc-950 p-2">
        <rect x="30" y="40" width="60" height="40" fill="#38bdf8" opacity="0.7" />
        <rect x="110" y="55" width="60" height="25" fill="#34d399" opacity="0.7" />
        <rect x="190" y="30" width="20" height="55" fill="#fbbf24" opacity="0.7" />
        <text x="42" y="33" fill="#d4d4d8" fontSize="8">Cadangan</text>
        <text x="116" y="48" fill="#d4d4d8" fontSize="8">Arus</text>
        <text x="188" y="23" fill="#d4d4d8" fontSize="8">Kurs</text>
      </svg>
      <div className="grid gap-2 text-sm md:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Intervensi: <strong>{result.intervention.toFixed(1)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Perubahan kurs: <strong>{result.exchangeRateChange.toFixed(1)}</strong>.</p>
      </div>
    </VisualCard>
  );
}
