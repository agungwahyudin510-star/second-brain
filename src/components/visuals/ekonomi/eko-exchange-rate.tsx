"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { exchangeRateReal, uipExpected } from "./econ-math";

export default function EkoExchangeRate() {
  const [e, setE] = useState(10);
  const [p, setP] = useState(100);
  const [pStar, setPStar] = useState(12);
  const [i, setI] = useState(6);
  const [iStar, setIStar] = useState(2);
  const r = exchangeRateReal(e, p, pStar);
  const u = uipExpected(e, i, iStar);
  const max = Math.max(r.realRate, 1, 2);
  const h = (v: number) => (v / max) * 60;

  return (
    <VisualCard
      title="Kurs riil, PPP, dan paritas suku bunga"
      caption="Kurs dinyatakan sebagai mata uang domestik (MD) per satu mata uang asing (MA). Angka ilustratif."
      howToRead="Kurs riil e×P*/P di atas 1 berarti barang luar negeri relatif lebih mahal. Kurs PPP adalah P/P*. UIP memperkirakan e setahun lagi dari selisih bunga."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Kurs e (MD/MA)", e, setE, 6, 14, 0.5],
          ["Harga domestik P", p, setP, 80, 120, 5],
          ["Harga luar negeri P*", pStar, setPStar, 8, 16, 1],
          ["Bunga domestik i (%)", i, setI, 0, 10, 0.5],
          ["Bunga asing i* (%)", iStar, setIStar, 0, 10, 0.5],
        ].map(([label, value, set, min, max2, step]) => (
          <label key={label as string} className="text-sm text-zinc-300">
            {label as string}: {value as number}
            <input aria-label={label as string} type="range" min={min as number} max={max2 as number} step={step as number} value={value as number} onChange={(ev) => (set as (n: number) => void)(Number(ev.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
          </label>
        ))}
      </div>
      <button type="button" onClick={() => setE(12)} className="min-h-10 rounded-lg border border-sky-500/40 px-3 text-sm text-sky-200">Depresiasi MD ke e = 12</button>
      <svg viewBox="0 0 220 100" role="img" aria-label={`Kurs riil ${r.realRate.toFixed(2)}, kurs PPP ${r.pppLevel.toFixed(2)}, e diharapkan ${u.expected.toFixed(3)}.`} className="h-40 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="20" x2="200" y1="85" y2="85" stroke="#71717a" />
        <line x1={20} x2={200} y1={85 - h(1)} y2={85 - h(1)} stroke="#a1a1aa" strokeDasharray="3 3" />
        <text x="22" y={85 - h(1) - 3} fill="#a1a1aa" fontSize="7">1,0 = paritas</text>
        <rect x="60" y={85 - h(r.realRate)} width="60" height={h(r.realRate)} fill="#38bdf8" opacity="0.75" />
        <text x="66" y="96" fill="#d4d4d8" fontSize="8">Kurs riil {r.realRate.toFixed(2)}</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Kurs riil = {e}×{pStar}/{p} = <strong>{r.realRate.toFixed(2)}</strong>: barang luar negeri {r.realRate > 1 ? "relatif lebih mahal" : "relatif lebih murah"}.</p>
        <p className="rounded bg-zinc-950 p-3">Kurs PPP = {p}/{pStar} = <strong>{r.pppLevel.toFixed(2)}</strong>: e aktual {e > r.pppLevel ? "di atas PPP (MD bernilai rendah)" : e < r.pppLevel ? "di bawah PPP (MD bernilai tinggi)" : "sama dengan PPP"}.</p>
        <p className="rounded bg-zinc-950 p-3">UIP: e diharapkan = {e}×(1+{i / 100})/(1+{iStar / 100}) = <strong>{u.expected.toFixed(3)}</strong></p>
        <p className="rounded bg-zinc-950 p-3">Perubahan yang diharapkan: <strong>{u.changePercent.toFixed(2)}%</strong> ({u.changePercent > 0 ? "MD diperkirakan terdepresiasi" : u.changePercent < 0 ? "MD diperkirakan terapresiasi" : "tidak berubah"}).</p>
      </div>
    </VisualCard>
  );
}