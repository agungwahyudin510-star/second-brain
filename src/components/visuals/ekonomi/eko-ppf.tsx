"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

const frontier = (x: number, growth: number) => Math.sqrt(Math.max(0, 1 - (x / 100) ** 2)) * 100 * growth;

export default function EkoPpf() {
  const [allocation, setAllocation] = useState(35);
  const [growth, setGrowth] = useState(false);
  const scale = growth ? 1.2 : 1;
  const nextAllocation = Math.min(95, allocation + 10);
  const currentB = frontier(allocation, scale);
  const nextB = frontier(nextAllocation, scale);
  const opportunityCost = Math.round(currentB - nextB);
  const curve = Array.from({ length: 21 }, (_, index) => {
    const x = index * 5;
    return `${index ? "L" : "M"} ${25 + x * 1.85} ${120 - frontier(x, scale) * 0.85}`;
  }).join(" ");
  const point = (x: number, y: number) => `${25 + x * 1.85},${120 - y * 0.85}`;

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
      <svg viewBox="0 0 230 140" role="img" aria-label={`PPF ilustratif; alokasi efisien ${allocation} unit barang A dan ${Math.round(currentB)} unit barang B; opportunity cost sekitar ${opportunityCost} unit barang B untuk tambahan 10 unit A.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M25 15V120H215" fill="none" stroke="#71717a" />
        <text x="6" y="18" fill="#a1a1aa" fontSize="8">Barang B</text>
        <text x="175" y="136" fill="#a1a1aa" fontSize="8">Barang A</text>
        <path d={curve} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <circle cx="62" cy="90" r="3.5" fill="#34d399" />
        <text x="66" y="91" fill="#a7f3d0" fontSize="7">Efisien</text>
        <circle cx="80" cy="104" r="3.5" fill="#fbbf24" />
        <text x="84" y="108" fill="#fde68a" fontSize="7">Tidak efisien</text>
        <path d="M176 24l7 7m0-7l-7 7" stroke="#fb7185" strokeWidth="2" />
        <text x="145" y="20" fill="#fda4af" fontSize="7">Tak terjangkau</text>
        <line x1={point(allocation, currentB).split(",")[0]} y1={point(allocation, currentB).split(",")[1]} x2={point(nextAllocation, nextB).split(",")[0]} y2={point(nextAllocation, nextB).split(",")[1]} stroke="#fbbf24" strokeDasharray="2 2" />
        <circle cx={point(allocation, currentB).split(",")[0]} cy={point(allocation, currentB).split(",")[1]} r="4" fill="#38bdf8" />
      </svg>
      <p aria-live="polite" className="text-sm text-amber-200">Mengalihkan sumber daya untuk menghasilkan 10 unit A tambahan mengorbankan sekitar {opportunityCost} unit B pada ilustrasi ini.</p>
    </VisualCard>
  );
}
