"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

const frontier = (x: number, growth: number) => Math.sqrt(Math.max(0, 1 - (x / 100) ** 2)) * 100 * growth;
const point = (x: number, y: number) => ({
  x: 25 + x * 1.85,
  y: 120 - y * 0.85,
});

export default function EkoPpf() {
  const [allocation, setAllocation] = useState(35);
  const [growth, setGrowth] = useState(false);
  const scale = growth ? 1.2 : 1;
  const nextAllocation = Math.min(95, allocation + 10);
  const currentB = frontier(allocation, scale);
  const nextB = frontier(nextAllocation, scale);
  const opportunityCost = Math.round(currentB - nextB);
  const efficientPoint = point(allocation, currentB);
  const inefficientPoint = point(allocation, currentB * 0.6);
  const formerlyUnreachablePoint = point(60, 85);
  const reachableAfterGrowth = growth && 85 <= frontier(60, scale);
  const curve = Array.from({ length: 21 }, (_, index) => {
    const x = index * 5;
    return `${index ? "L" : "M"} ${25 + x * 1.85} ${120 - frontier(x, scale) * 0.85}`;
  }).join(" ");

  return (
    <VisualCard
      title="Batas kemungkinan produksi (PPF)"
      caption="Titik pada kurva menunjukkan penggunaan sumber daya yang efisien; titik di dalamnya belum memakai kapasitas sepenuhnya; titik di luar belum dapat dicapai dengan sumber daya dan teknologi saat ini."
      howToRead="Sumbu mendatar menunjukkan unit barang A dan sumbu tegak unit barang B. Bergerak ke kanan menaikkan produksi A tetapi mengurangi B; tombol pertumbuhan menggambarkan kapasitas yang bertambah."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">
          Alokasi produksi A: {allocation} unit
          <input aria-label="Alokasi sumber daya untuk produksi barang A" type="range" min="5" max="85" step="5" value={allocation} onChange={(event) => setAllocation(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <button type="button" aria-pressed={growth} onClick={() => setGrowth((value) => !value)} className="min-h-11 rounded-lg border border-emerald-500/30 px-3 text-sm text-emerald-200 hover:bg-emerald-500/10">
          {growth ? "Pertumbuhan aktif — kurva diperluas" : "Tampilkan pertumbuhan"}
        </button>
      </div>
      <svg viewBox="0 0 230 140" role="img" aria-label={`PPF ilustratif. Titik efisien berada pada kurva di A=${allocation}, B=${Math.round(currentB)}. Titik tidak efisien berada di dalam kurva. Titik A=60, B=85 ${reachableAfterGrowth ? "kini terjangkau setelah pertumbuhan" : "belum terjangkau"}. Opportunity cost sekitar ${opportunityCost} unit B untuk tambahan 10 unit A.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M25 15V120H215" fill="none" stroke="#71717a" />
        <text x="6" y="18" fill="#a1a1aa" fontSize="8">Barang B</text>
        <text x="175" y="136" fill="#a1a1aa" fontSize="8">Barang A</text>
        <path d={curve} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <line x1={efficientPoint.x} y1={efficientPoint.y} x2={point(nextAllocation, nextB).x} y2={point(nextAllocation, nextB).y} stroke="#fbbf24" strokeDasharray="2 2" />
        <circle cx={efficientPoint.x} cy={efficientPoint.y} r="4" fill="#38bdf8" />
        <text x={efficientPoint.x + 4} y={efficientPoint.y - 4} fill="#7dd3fc" fontSize="6">Efisien (di kurva)</text>
        <circle cx={inefficientPoint.x} cy={inefficientPoint.y} r="3.5" fill="#fbbf24" />
        <text x={inefficientPoint.x + 4} y={inefficientPoint.y + 3} fill="#fde68a" fontSize="6">Tidak efisien</text>
        <circle cx={formerlyUnreachablePoint.x} cy={formerlyUnreachablePoint.y} r="3.5" fill={reachableAfterGrowth ? "#34d399" : "#fb7185"} />
        <text x={formerlyUnreachablePoint.x + 4} y={formerlyUnreachablePoint.y - 4} fill={reachableAfterGrowth ? "#6ee7b7" : "#fda4af"} fontSize="6">
          {reachableAfterGrowth ? "Kini terjangkau (setelah pertumbuhan)" : "Tak terjangkau"}
        </text>
      </svg>
      <ul className="grid gap-1 text-xs text-zinc-400 sm:grid-cols-3" aria-label="Legenda titik PPF">
        <li><span className="text-sky-300">●</span> Efisien — di kurva</li>
        <li><span className="text-amber-300">●</span> Tidak efisien — di dalam</li>
        <li><span className={reachableAfterGrowth ? "text-emerald-300" : "text-rose-300"}>●</span> {reachableAfterGrowth ? "Kini terjangkau setelah pertumbuhan" : "Tak terjangkau dengan kapasitas awal"}</li>
      </ul>
      <p aria-live="polite" className="text-sm text-amber-200">Mengalihkan sumber daya untuk menghasilkan 10 unit A tambahan mengorbankan sekitar {opportunityCost} unit B pada ilustrasi ini.</p>
    </VisualCard>
  );
}
