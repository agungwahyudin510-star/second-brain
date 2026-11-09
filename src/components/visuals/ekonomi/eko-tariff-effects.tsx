"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { tariffOutcome } from "./econ-math";

export default function EkoTariffEffects() {
  const [tariff, setTariff] = useState(2);
  const result = tariffOutcome(8, tariff);

  return (
    <VisualCard
      title="Dampak tarif pada pasar terbuka"
      caption="Tarif menaikkan harga domestik dan mengurangi impor. Penerimaan pemerintah berasal dari tarif per unit, tetapi kerugian alokasi dan konsumsi tetap muncul."
      howToRead="Geser tarif. Penerimaan pemerintah naik pada awalnya, tetapi ketika tarif semakin tinggi, pengurangan impor dan deadweight loss meluas."
    >
      <label className="block text-sm text-zinc-300">
        Tarif t: {tariff}
        <input aria-label="Tarif per unit" type="range" min="0" max="4" step="1" value={tariff} onChange={(event) => setTariff(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 260 120" role="img" aria-label={`Tarif ${tariff} membuat harga domestik ${result.domesticPrice.toFixed(1)}, impor ${result.importVolume.toFixed(1)}, penerimaan ${result.revenue.toFixed(1)}, dan deadweight loss ${result.deadweightLoss.toFixed(1)}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <rect x="20" y="20" width="50" height="68" fill="#38bdf8" opacity="0.75" />
        <rect x="90" y="36" width="50" height="52" fill="#fbbf24" opacity="0.8" />
        <rect x="160" y="52" width="50" height="36" fill="#34d399" opacity="0.8" />
        <text x="42" y="98" fill="#d4d4d8" fontSize="8">Konsumsi</text>
        <text x="95" y="98" fill="#d4d4d8" fontSize="8">Tarif</text>
        <text x="170" y="98" fill="#d4d4d8" fontSize="8">DWL</text>
        <text x="25" y="14" fill="#d4d4d8" fontSize="8">Qd</text>
        <text x="95" y="14" fill="#d4d4d8" fontSize="8">Penerimaan</text>
        <text x="168" y="14" fill="#d4d4d8" fontSize="8">Timbang</text>
      </svg>
      <div className="grid gap-2 text-sm md:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Harga domestik: <strong>{result.domesticPrice.toFixed(1)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Impor: <strong>{result.importVolume.toFixed(1)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Penerimaan tarif: {result.revenue.toFixed(1)}.</p>
        <p className="rounded bg-zinc-950 p-3 text-rose-200">DWL: {result.deadweightLoss.toFixed(1)}.</p>
      </div>
    </VisualCard>
  );
}
