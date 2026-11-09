"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { tradeGains } from "./econ-math";

export default function EkoTradeGains() {
  const [worldPrice, setWorldPrice] = useState(8);
  const outcome = tradeGains(worldPrice);
  const importOrExport = outcome.importVolume > 0 ? "impor" : outcome.exportVolume > 0 ? "ekspor" : "autarki";

  return (
    <VisualCard
      title="Keunggulan komparatif dan perdagangan"
      caption="Model negara kecil: di bawah P* negara menjadi importir, di atas P* negara menjadi eksportir. Nilai menunjukkan perubahan surplus total dibanding autarki."
      howToRead="Geser harga dunia. Garis horizontal menandai harga dunia; area biru menunjukkan surplus konsumen, hijau menunjukkan surplus produsen, dan selisih bila ada menunjukkan net gain dari perdagangan."
    >
      <label className="block text-sm text-zinc-300">
        Harga dunia Pw: {worldPrice}
        <input aria-label="Harga dunia" type="range" min="4" max="16" step="1" value={worldPrice} onChange={(event) => setWorldPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
      </label>
      <svg viewBox="0 0 260 120" role="img" aria-label={`Grafik perdagangan dengan harga dunia ${worldPrice}, keseimbangan ${importOrExport}, surplus total ${outcome.totalSurplus.toFixed(1)}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="20" x2="240" y1="94" y2="94" stroke="#71717a" />
        <line x1="20" x2="20" y1="20" y2="94" stroke="#71717a" />
        <path d="M20 80 Q100 35 240 70" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <path d="M20 34 Q110 70 240 44" fill="none" stroke="#34d399" strokeWidth="2" />
        <line x1="20" x2="240" y1={94 - (worldPrice - 4) * 4} y2={94 - (worldPrice - 4) * 4} stroke="#fbbf24" strokeDasharray="4 3" />
        <circle cx="120" cy={94 - (worldPrice - 4) * 4} r="3" fill="#fbbf24" />
        <text x="125" y={94 - (worldPrice - 4) * 4 - 6} fill="#fbbf24" fontSize="8">Pw</text>
        <text x="8" y="18" fill="#a1a1aa" fontSize="8">P</text>
        <text x="220" y="110" fill="#a1a1aa" fontSize="8">Q</text>
      </svg>
      <div className="grid gap-2 text-sm md:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Status: <strong>{importOrExport}</strong> sebanyak {outcome.importVolume || outcome.exportVolume || 0} unit.</p>
        <p className="rounded bg-zinc-950 p-3">Net gain: <strong>{outcome.netGain.toFixed(1)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3 text-sky-200">SK={outcome.consumerSurplus.toFixed(1)}</p>
        <p className="rounded bg-zinc-950 p-3 text-emerald-200">SP={outcome.producerSurplus.toFixed(1)}</p>
      </div>
    </VisualCard>
  );
}
