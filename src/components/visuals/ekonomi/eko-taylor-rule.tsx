"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { taylorRate } from "./econ-math";

export default function EkoTaylorRule() {
  const [inflation, setInflation] = useState(4);
  const [outputGap, setOutputGap] = useState(-2);
  const result = taylorRate(inflation, outputGap, 2, 2);
  const parts = [
    { name: "π + r*", value: result.baseline, color: "#38bdf8" },
    { name: "Respons inflasi", value: result.inflationResponse, color: "#fbbf24" },
    { name: "Respons output", value: result.outputResponse, color: "#a78bfa" },
  ];
  const maxMagnitude = Math.max(...parts.map((part) => Math.abs(part.value)), 1);
  const scale = 80 / maxMagnitude;

  return (
    <VisualCard
      title="Aturan Taylor: respons terhadap inflasi dan output"
      caption="Pedoman ilustratif: i=π+r*+0,5(π−π*)+0,5x, dengan π*=2% dan r*=2%. Batas bawah nominal ditetapkan pada 0%."
      howToRead="Garis tegak di tengah adalah nol. Batang ke kanan memberi kontribusi positif, ke kiri kontribusi negatif. Suku bunga riil sederhana adalah rekomendasi nominal setelah dikurangi inflasi."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Inflasi π: {inflation.toFixed(1)}%
          <input aria-label="Tingkat inflasi pi" type="range" min="0" max="10" step="0.5" value={inflation} onChange={(event) => setInflation(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Kesenjangan output x: {outputGap.toFixed(1)}%
          <input aria-label="Kesenjangan output x" type="range" min="-6" max="6" step="0.5" value={outputGap} onChange={(event) => setOutputGap(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 136" role="img" aria-label={`Kontribusi dasar ${result.baseline.toFixed(1)}, respons inflasi ${result.inflationResponse.toFixed(1)}, respons output ${result.outputResponse.toFixed(1)} poin persentase; suku bunga yang direkomendasikan ${result.rate.toFixed(1)} persen.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="13" fill="#a1a1aa" fontSize="8">Kontribusi aturan Taylor (poin persentase)</text>
        <line x1="128" x2="128" y1="20" y2="118" stroke="#71717a" />
        {parts.map((part, index) => {
          const rowY = 32 + index * 29;
          const width = Math.abs(part.value) * scale;
          const barX = part.value >= 0 ? 128 : 128 - width;
          return (
            <g key={part.name}>
              <text x="4" y={rowY + 8} fill="#d4d4d8" fontSize="7">{part.name}: {part.value.toFixed(1)}</text>
              <rect x={barX} y={rowY} width={width} height="12" rx="2" fill={part.color} />
            </g>
          );
        })}
        <text x="116" y="129" fill="#71717a" fontSize="7">−</text>
        <text x="136" y="129" fill="#71717a" fontSize="7">+</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">i={inflation}+2+0,5({inflation}−2)+0,5({outputGap})={result.unconstrainedRate.toFixed(1)}% sebelum batas.</p>
        <p className="rounded bg-zinc-950 p-3 text-sky-200">Suku bunga disarankan = max(0, i) = <strong>{result.rate.toFixed(1)}%</strong>{result.lowerBoundApplied ? " (batas bawah berlaku)" : ""}.</p>
        <p className="rounded bg-zinc-950 p-3">Suku bunga riil sederhana i−π={result.rate.toFixed(1)}−{inflation.toFixed(1)}=<strong>{result.realRate.toFixed(1)}%</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Kontribusi: π+r*={result.baseline.toFixed(1)}; inflasi={result.inflationResponse.toFixed(1)}; output={result.outputResponse.toFixed(1)}.</p>
      </div>
    </VisualCard>
  );
}
