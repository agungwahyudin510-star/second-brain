"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { normalCdf } from "./psych-math";

function deterministicNormalSamples() {
  let seed = 431;
  const nextUniform = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: 100 }, () => {
    const u1 = Math.max(Number.EPSILON, nextUniform());
    const u2 = nextUniform();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  });
}

const samples = deterministicNormalSamples();

export default function PsiLabelFlip() {
  const [sd, setSd] = useState(10);
  const [sem, setSem] = useState(4.5);
  const [cutoffZ, setCutoffZ] = useState(0);
  const [binary, setBinary] = useState(true);
  const cutoff = cutoffZ * sd;
  const lower = cutoff - sem;
  const upper = cutoff + sem;
  const theoreticalShare = Math.max(0, Math.min(1, normalCdf((cutoff + sem) / sd) - normalCdf((cutoff - sem) / sd)));
  const bandZ = sem / sd;
  const samplesInBand = samples.filter((sample) => sample >= cutoffZ - bandZ && sample <= cutoffZ + bandZ).length;
  const x = (z: number) => 8 + ((z + 3) / 6) * 84;

  return (
    <VisualCard
      title="Pita ketidakpastian di sekitar batas"
      caption="Skor, SEM, dan sampel titik 100 orang bersifat hipotetis; proporsi normal dalam pita bukan angka untuk tes nyata."
      howToRead="Atur SD, SEM, dan posisi cutoff. Titik di pita menggambarkan kemungkinan variasi sekitar batas; proporsi teori dihitung dari distribusi normal."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">SD: {sd}
          <input aria-label="Simpangan baku distribusi dari lima sampai dua puluh" type="range" min="5" max="20" value={sd} onChange={(event) => setSd(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">SEM: {sem.toFixed(1)}
          <input aria-label="Kesalahan pengukuran standar dari satu sampai sepuluh" type="range" min="1" max="10" step="0.1" value={sem} onChange={(event) => setSem(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Posisi batas: {cutoffZ.toFixed(1)} SD dari rerata
          <input aria-label="Posisi batas klasifikasi dari minus dua sampai plus dua simpangan baku" type="range" min="-2" max="2" step="0.1" value={cutoffZ} onChange={(event) => setCutoffZ(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 100 32" role="img" aria-label={`Seratus titik hipotetis; ${samplesInBand} titik berada dalam pita sekitar batas`} className="h-24 w-full min-w-0 rounded-lg bg-zinc-950 p-2">
        <rect x={x(cutoffZ - bandZ)} y="2" width={Math.max(0, x(cutoffZ + bandZ) - x(cutoffZ - bandZ))} height="28" fill="#0c4a6e" opacity="0.7" />
        <line x1="8" y1="29" x2="92" y2="29" stroke="#71717a" />
        <line x1={x(cutoffZ)} y1="2" x2={x(cutoffZ)} y2="30" stroke="#fbbf24" strokeDasharray="1 1" />
        {samples.map((sample, index) => {
          const inBand = sample >= cutoffZ - bandZ && sample <= cutoffZ + bandZ;
          return <circle key={index} cx={x(Math.max(-3, Math.min(3, sample)))} cy={4 + (index % 8) * 3} r="0.8" fill={inBand ? "#f472b6" : "#a1a1aa"} />;
        })}
        <text x="8" y="31" fill="#a1a1aa" fontSize="3">−3 SD</text>
        <text x="82" y="31" fill="#a1a1aa" fontSize="3">+3 SD</text>
      </svg>
      <div className="grid min-w-0 grid-cols-2 gap-2">
        <button type="button" aria-pressed={binary} onClick={() => setBinary(true)} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Label biner</button>
        <button type="button" aria-pressed={!binary} onClick={() => setBinary(false)} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-xs text-zinc-200 aria-pressed:border-sky-400">Skor kontinu</button>
      </div>
      <p aria-live="polite" className="break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">
        Pita skor: {lower.toFixed(1)}–{upper.toFixed(1)}. Proporsi teori dalam pita: {(theoreticalShare * 100).toFixed(1)}%; titik hipotetis di pita: {samplesInBand}/100.
      </p>
      <p className="break-words text-sm text-zinc-300">{binary ? "Label biner dapat berubah bagi skor dekat cutoff saat ada kesalahan pengukuran; model memperkirakan proporsi pada kondisi ini, bukan untuk tes nyata." : "Skor kontinu mempertahankan informasi jarak dari cutoff dan ketidakpastian alih-alih membagi orang menjadi dua tipe."}</p>
    </VisualCard>
  );
}
