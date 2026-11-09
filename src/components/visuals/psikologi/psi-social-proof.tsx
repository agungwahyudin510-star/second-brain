"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { shrunkRating } from "./psych-math";

export default function PsiSocialProof() {
  const [countA, setCountA] = useState(5);
  const [meanA, setMeanA] = useState(4.8);
  const [countB, setCountB] = useState(200);
  const [meanB, setMeanB] = useState(4.5);
  const [priorStrength, setPriorStrength] = useState(20);
  const [prior, setPrior] = useState(3.5);
  const scoreA = shrunkRating(countA, meanA, priorStrength, prior);
  const scoreB = shrunkRating(countB, meanB, priorStrength, prior);
  const moreCredible = scoreA === scoreB ? "Skor sama" : scoreA > scoreB ? "Item A" : "Item B";

  return (
    <VisualCard
      title="Jumlah rating dan skor penyusutan"
      caption="Model skor=(n×rerata+m×prior)/(n+m) memakai prior dan parameter ilustratif; skor bukan jaminan mutu produk."
      howToRead="Ubah jumlah dan rerata rating kedua item, kekuatan prior, dan nilai prior. Bandingkan rerata mentah dengan skor model."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <section className="min-w-0 space-y-3 rounded-lg bg-zinc-950 p-3">
          <h3 className="text-sm font-medium text-zinc-100">Item A</h3>
          <label className="block min-w-0 text-xs text-zinc-300">Jumlah rating: {countA}
            <input aria-label="Jumlah rating Item A" type="range" min="1" max="300" value={countA} onChange={(event) => setCountA(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
          </label>
          <label className="block min-w-0 text-xs text-zinc-300">Rerata: {meanA.toFixed(1)}
            <input aria-label="Rerata rating Item A dari satu sampai lima" type="range" min="1" max="5" step="0.1" value={meanA} onChange={(event) => setMeanA(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
          </label>
        </section>
        <section className="min-w-0 space-y-3 rounded-lg bg-zinc-950 p-3">
          <h3 className="text-sm font-medium text-zinc-100">Item B</h3>
          <label className="block min-w-0 text-xs text-zinc-300">Jumlah rating: {countB}
            <input aria-label="Jumlah rating Item B" type="range" min="1" max="300" value={countB} onChange={(event) => setCountB(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
          </label>
          <label className="block min-w-0 text-xs text-zinc-300">Rerata: {meanB.toFixed(1)}
            <input aria-label="Rerata rating Item B dari satu sampai lima" type="range" min="1" max="5" step="0.1" value={meanB} onChange={(event) => setMeanB(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-violet-400" />
          </label>
        </section>
        <label className="block min-w-0 text-sm text-zinc-300">Kekuatan prior m: {priorStrength}
          <input aria-label="Kekuatan prior dari nol sampai lima puluh" type="range" min="0" max="50" value={priorStrength} onChange={(event) => setPriorStrength(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Prior: {prior.toFixed(1)}
          <input aria-label="Nilai prior dari satu sampai lima" type="range" min="1" max="5" step="0.1" value={prior} onChange={(event) => setPrior(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        <p className={`min-w-0 break-words rounded-lg p-3 text-sm ${countA < countB ? "bg-amber-950/50 text-amber-100" : "bg-zinc-950 text-zinc-200"}`}>A · mentah {meanA.toFixed(2)} · terkoreksi {scoreA.toFixed(2)}{countA < countB ? " · sampel lebih kecil" : ""}</p>
        <p className={`min-w-0 break-words rounded-lg p-3 text-sm ${countB < countA ? "bg-amber-950/50 text-amber-100" : "bg-zinc-950 text-zinc-200"}`}>B · mentah {meanB.toFixed(2)} · terkoreksi {scoreB.toFixed(2)}{countB < countA ? " · sampel lebih kecil" : ""}</p>
      </div>
      <p aria-live="polite" className="text-sm text-sky-200">Skor model lebih tinggi: {moreCredible}. Ini bukan bukti item lebih baik.</p>
    </VisualCard>
  );
}
