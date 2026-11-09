"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { requiredPace } from "./psych-math";

export default function PsiGoalPace() {
  const [target, setTarget] = useState(300);
  const [done, setDone] = useState(96);
  const [daysElapsed, setDaysElapsed] = useState(12);
  const [totalDays, setTotalDays] = useState(30);
  const [specific, setSpecific] = useState(true);
  const daysLeft = Math.max(0, totalDays - daysElapsed);
  const planPace = totalDays > 0 ? target / totalDays : 0;
  const actualPace = daysElapsed > 0 ? done / daysElapsed : 0;
  const needed = requiredPace(target, done, daysLeft);
  const max = Math.max(target, done, 1);
  const progressY = 90 - Math.min(80, done / max * 80);
  const projectedY = 90 - Math.min(80, (actualPace * totalDays) / max * 80);
  const [example, setExample] = useState("Jika selesai makan malam, saya membaca 10 halaman di meja.");
  return (
    <VisualCard title="Tujuan, kemajuan, dan laju" caption="Grafik membandingkan target, kemajuan, dan proyeksi linear ilustratif; hasil nyata dapat berubah." howToRead="Atur target, jumlah selesai, dan hari. Laju yang dibutuhkan hanya membagi sisa target dengan hari tersisa dan bukan kewajiban yang harus dipaksakan.">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 text-sm text-zinc-300">Target halaman
          <input aria-label="Target jumlah halaman" type="number" min="0" value={target} onChange={(event) => setTarget(Math.max(0, Number(event.target.value)))} className="mt-1 block min-h-10 w-full min-w-0 rounded-lg border border-zinc-700 bg-zinc-950 px-3" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Halaman selesai
          <input aria-label="Jumlah halaman yang selesai" type="number" min="0" value={done} onChange={(event) => setDone(Math.max(0, Number(event.target.value)))} className="mt-1 block min-h-10 w-full min-w-0 rounded-lg border border-zinc-700 bg-zinc-950 px-3" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Hari berlalu
          <input aria-label="Jumlah hari yang sudah berlalu" type="number" min="0" value={daysElapsed} onChange={(event) => setDaysElapsed(Math.max(0, Number(event.target.value)))} className="mt-1 block min-h-10 w-full min-w-0 rounded-lg border border-zinc-700 bg-zinc-950 px-3" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Total hari
          <input aria-label="Jumlah total hari untuk tujuan" type="number" min="1" value={totalDays} onChange={(event) => setTotalDays(Math.max(1, Number(event.target.value)))} className="mt-1 block min-h-10 w-full min-w-0 rounded-lg border border-zinc-700 bg-zinc-950 px-3" />
        </label>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 text-sm sm:grid-cols-3">
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3">Rencana: {planPace.toFixed(2)} halaman/hari</p>
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3">Aktual: {actualPace.toFixed(2)} halaman/hari</p>
        <p className="min-w-0 break-words rounded bg-zinc-950 p-3">Dibutuhkan: {needed.toFixed(2)} halaman/hari</p>
      </div>
      <svg viewBox="0 0 200 104" role="img" aria-label={`Grafik target ${target} halaman, selesai ${done}, proyeksi laju aktual ${Math.round(actualPace * totalDays)} halaman`} className="h-36 w-full min-w-0 rounded-lg bg-zinc-950 p-2">
        <path d="M20 8V90H188" fill="none" stroke="#71717a" />
        <line x1="20" y1="10" x2="188" y2="10" stroke="#34d399" strokeDasharray="3 2" />
        <circle cx={20 + (daysElapsed / Math.max(totalDays, 1)) * 160} cy={progressY} r="4" fill="#38bdf8" />
        <line x1="20" y1="90" x2="180" y2={projectedY} stroke="#fbbf24" strokeWidth="2" />
        <text x="24" y="18" fill="#6ee7b7" fontSize="7">Target</text><text x="24" y="102" fill="#a1a1aa" fontSize="7">Waktu</text>
      </svg>
      <label className="flex min-h-10 min-w-0 items-center gap-2 text-sm text-zinc-300"><input type="checkbox" aria-label="Gunakan tujuan spesifik" checked={specific} onChange={(event) => setSpecific(event.target.checked)} className="h-4 w-4 accent-sky-400" />Tujuan spesifik (matikan untuk contoh tujuan kabur)</label>
      <div className="min-w-0 space-y-2 rounded-lg bg-zinc-950 p-3">
        <p className="break-words text-sm">{specific ? "Contoh spesifik: “Baca 10 halaman setelah makan malam di meja.”" : "Contoh kabur: “Saya akan lebih rajin membaca.”"}</p>
        <input aria-label="Contoh niat implementasi jika-maka" value={example} onChange={(event) => setExample(event.target.value)} className="min-h-10 w-full min-w-0 max-w-full rounded border border-zinc-700 bg-zinc-900 px-2 text-sm" />
      </div>
    </VisualCard>
  );
}
