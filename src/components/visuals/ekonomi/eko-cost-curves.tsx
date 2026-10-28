"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { costSchedule } from "./econ-math";

const X0 = 30;
const X1 = 190;
const Y0 = 130;
const maxQ = 6;
const maxV = 32;
const x = (q: number) => X0 + (q / maxQ) * (X1 - X0 - 10);
const y = (v: number) => Y0 - (v / maxV) * (Y0 - 15);

export default function EkoCostCurves() {
  const [q, setQ] = useState(4);
  const rows = costSchedule();
  const sel = rows.find((r) => r.q === q) ?? rows[4];
  const curve = (key: "mc" | "avc" | "atc") => rows.slice(1).map((r) => `${x(r.q)},${y(r[key])}`).join(" ");
  const atcDirection = sel.mc < sel.atc ? "ATC sedang turun (MC < ATC)" : "ATC sedang naik (MC > ATC)";
  const minAvc = rows.slice(1).reduce((b, r) => (r.avc < b.avc ? r : b));
  const minAtc = rows.slice(1).reduce((b, r) => (r.atc < b.atc ? r : b));

  return (
    <VisualCard
      title="Kurva biaya: MC, AVC, dan ATC"
      caption="Perusahaan fiktif dengan biaya tetap 20. Geser Q untuk membaca biaya pada tiap tingkat output."
      howToRead="MC turun lalu naik. Selama MC berada di bawah rata-rata, rata-rata turun; begitu MC naik melewati rata-rata, rata-rata ikut naik. Karena itu MC memotong AVC dan ATC tepat di titik terendah keduanya."
    >
      <label className="block text-sm text-zinc-300">
        Output Q: {q}
        <input aria-label="Output Q untuk membaca biaya" type="range" min="1" max="6" step="1" value={q} onChange={(e) => setQ(Number(e.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 210 150" role="img" aria-label={`Kurva MC, AVC, ATC. Pada Q=${sel.q}: MC ${sel.mc}, AVC ${sel.avc}, ATC ${sel.atc}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <path d={`M${X0} 10V${Y0}H${X1}`} fill="none" stroke="#71717a" />
        <text x="4" y="14" fill="#A1A1AA" fontSize="8">Biaya</text>
        <text x={X1 - 10} y="144" fill="#A1A1AA" fontSize="8">Q</text>
        {rows.slice(1).map((r) => (
          <text key={r.q} x={x(r.q) - 2} y="141" fill="#71717a" fontSize="7">{r.q}</text>
        ))}
        <polyline points={curve("avc")} fill="none" stroke="#38BDF8" strokeWidth="2" />
        <polyline points={curve("atc")} fill="none" stroke="#34D399" strokeWidth="2" />
        <polyline points={curve("mc")} fill="none" stroke="#FBBF24" strokeWidth="2" />
        <circle cx={x(minAvc.q)} cy={y(minAvc.avc)} r="3.5" fill="none" stroke="#38BDF8" />
        <circle cx={x(minAtc.q)} cy={y(minAtc.atc)} r="3.5" fill="none" stroke="#34D399" />
        <line x1={x(sel.q)} x2={x(sel.q)} y1="15" y2={Y0} stroke="#F472B6" strokeDasharray="3 3" />
        <circle cx={x(sel.q)} cy={y(sel.mc)} r="3" fill="#FBBF24" />
        <circle cx={x(sel.q)} cy={y(sel.avc)} r="3" fill="#38BDF8" />
        <circle cx={x(sel.q)} cy={y(sel.atc)} r="3" fill="#34D399" />
        <text x="36" y="24" fill="#38BDF8" fontSize="7">AVC</text>
        <text x="56" y="24" fill="#34D399" fontSize="7">ATC</text>
        <text x="76" y="24" fill="#FBBF24" fontSize="7">MC</text>
      </svg>
      <div className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">TC = {sel.tc}; AFC = {sel.afc}; AVC = {sel.avc}; ATC = {sel.atc}; MC = {sel.mc}</p>
        <p className="rounded bg-zinc-950 p-3">{atcDirection}.</p>
        <p className="rounded bg-zinc-950 p-3">AVC minimum = {minAvc.avc} pada Q = {minAvc.q}.</p>
        <p className="rounded bg-zinc-950 p-3">ATC minimum = {minAtc.atc} pada Q = {minAtc.q}.</p>
      </div>
    </VisualCard>
  );
}