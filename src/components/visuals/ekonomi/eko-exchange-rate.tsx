"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { exchangeRateReal } from "./econ-math";

export default function EkoExchangeRate() {
  const [nominalRate, setNominalRate] = useState(10);
  const [domesticPrice, setDomesticPrice] = useState(100);
  const [foreignPrice, setForeignPrice] = useState(12);
  const result = exchangeRateReal(nominalRate, domesticPrice, foreignPrice);

  return (
    <VisualCard
      title="Kurs nominal dan kurs riil"
      caption="Kurs riil membandingkan tingkat harga domestik dan luar negeri serta menilai perubahan daya saing relatif."
      howToRead="Ubah e, P, dan P*. Bila kurs riil melebihi satu, barang luar negeri secara relatif lebih mahal; bila di bawah satu, barang domestik lebih mahal dalam satuan yang sama."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">e: {nominalRate}
          <input type="range" min="5" max="20" step="1" value={nominalRate} onChange={(event) => setNominalRate(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">P: {domesticPrice}
          <input type="range" min="50" max="200" step="10" value={domesticPrice} onChange={(event) => setDomesticPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">P*: {foreignPrice}
          <input type="range" min="8" max="20" step="1" value={foreignPrice} onChange={(event) => setForeignPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 220 120" role="img" aria-label={`Kurs nominal ${nominalRate}, kurs riil ${result.realRate.toFixed(2)}, PPP ${result.pppLevel.toFixed(2)}.`} className="h-40 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="20" x2="200" y1="90" y2="90" stroke="#71717a" />
        <line x1="20" x2="20" y1="20" y2="90" stroke="#71717a" />
        <rect x="40" y={90 - result.realRate * 20} width="55" height={result.realRate * 20} fill="#38bdf8" opacity="0.7" />
        <rect x="125" y={90 - result.pppLevel * 20} width="55" height={result.pppLevel * 20} fill="#34d399" opacity="0.7" />
        <text x="48" y="105" fill="#d4d4d8" fontSize="8">Kurs riil</text>
        <text x="130" y="105" fill="#d4d4d8" fontSize="8">PPP</text>
      </svg>
      <div className="grid gap-2 text-sm md:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Kurs riil: <strong>{result.realRate.toFixed(2)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">PPP: <strong>{result.pppLevel.toFixed(2)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Interpretasi: {result.realRate > 1 ? "barang luar negeri relatif lebih mahal" : "barang domestik relatif lebih mahal"}.</p>
        <p className="rounded bg-zinc-950 p-3">Status: {result.undervalued ? "mata uang domestik undervalued" : result.overvalued ? "mata uang domestik overvalued" : "PPP umum terpenuhi"}.</p>
      </div>
    </VisualCard>
  );
}
