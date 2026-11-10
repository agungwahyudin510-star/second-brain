"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { partialCorrelation } from "./psych-math";

export default function PsiSpuriousControl() {
  const [rxyInput, setRxyInput] = useState(0.8);
  const [rxz, setRxz] = useState(0.9);
  const [ryz, setRyz] = useState(0.9);
  const [controlled, setControlled] = useState(false);
  const rxyMin = Math.max(-0.9, rxz * ryz - Math.sqrt((1 - rxz ** 2) * (1 - ryz ** 2)));
  const rxyMax = Math.min(0.9, rxz * ryz + Math.sqrt((1 - rxz ** 2) * (1 - ryz ** 2)));
  const rxy = Math.max(rxyMin, Math.min(rxyMax, rxyInput));
  const controlledValue = partialCorrelation(rxy, rxz, ryz);

  return (
    <VisualCard
      title="Korelasi sederhana dan variabel ketiga"
      caption="Koefisien, diagram, dan contoh es krim–tenggelam–musim adalah ilustrasi hipotetis, bukan data nyata."
      howToRead="Atur korelasi pasangan. Tombol kontrol membandingkan r_xy sederhana dengan korelasi parsial setelah z; asosiasi yang berubah bukan bukti sebab-akibat."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3">
        <label className="block min-w-0 text-sm text-zinc-300">r_xy: {rxy.toFixed(2)}
          <input aria-label="Korelasi antara x dan y" type="range" min={rxyMin} max={rxyMax} step="0.01" value={rxy} onChange={(event) => setRxyInput(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">r_xz: {rxz.toFixed(2)}
          <input aria-label="Korelasi antara x dan z" type="range" min="-0.9" max="0.9" step="0.01" value={rxz} onChange={(event) => setRxz(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">r_yz: {ryz.toFixed(2)}
          <input aria-label="Korelasi antara y dan z" type="range" min="-0.9" max="0.9" step="0.01" value={ryz} onChange={(event) => setRyz(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
      </div>
      <p className="text-xs text-zinc-400">Rentang r_xy menyesuaikan agar matriks korelasi tetap mungkin.</p>
      <div className="min-w-0 rounded-lg bg-zinc-950 p-3">
        <svg viewBox="0 0 240 145" role="img" aria-label="Diagram segitiga hubungan x, y, dan z sebagai variabel ketiga" className="h-40 w-full">
          <line x1="65" y1="35" x2="175" y2="35" stroke="#38bdf8" strokeWidth="2" />
          <line x1="65" y1="35" x2="120" y2="115" stroke="#a78bfa" strokeWidth="2" />
          <line x1="175" y1="35" x2="120" y2="115" stroke="#34d399" strokeWidth="2" />
          <circle cx="65" cy="35" r="18" fill="#075985" /><circle cx="175" cy="35" r="18" fill="#075985" /><circle cx="120" cy="115" r="18" fill="#5b21b6" />
          <text x="60" y="40" fill="white" fontSize="14">x</text><text x="170" y="40" fill="white" fontSize="14">y</text><text x="115" y="120" fill="white" fontSize="14">z</text>
          <text x="103" y="28" fill="#bae6fd" fontSize="10">r_xy</text>
          <text x="76" y="83" fill="#ddd6fe" fontSize="10">r_xz</text>
          <text x="151" y="83" fill="#bbf7d0" fontSize="10">r_yz</text>
        </svg>
      </div>
      <button type="button" aria-pressed={controlled} onClick={() => setControlled((current) => !current)} className="min-h-11 min-w-0 break-words rounded-lg border border-sky-500/40 px-3 py-2 text-sm text-sky-200">
        {controlled ? "Tampilkan sebelum kontrol" : "Kontrol variabel ketiga"}
      </button>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">
        {controlled ? `r_xy setelah mengontrol z: ${controlledValue.toFixed(2)}` : `Korelasi sederhana r_xy: ${rxy.toFixed(2)}`}
      </p>
      <p className="min-w-0 break-words text-sm text-zinc-300">Contoh: es krim (x) dan kejadian tenggelam (y) dapat sama-sama meningkat saat musim panas (z). Musim adalah penjelasan alternatif yang perlu diperiksa.</p>
    </VisualCard>
  );
}
