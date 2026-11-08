"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { depositChain, moneyMultiplier } from "./econ-math";

export default function EkoMoneyMultiplier() {
  const [initialDeposit, setInitialDeposit] = useState(1000);
  const [reservePercent, setReservePercent] = useState(10);
  const [cashRatio, setCashRatio] = useState(0);
  const [rounds, setRounds] = useState(5);
  const reserveRatio = reservePercent / 100;
  const chain = depositChain(initialDeposit, reserveRatio, rounds);
  const leaked = moneyMultiplier(reserveRatio, cashRatio);
  const maxDeposit = Math.max(...chain.deposits, 1);
  const barHeight = (deposit: number) => deposit / maxDeposit * 54;

  return (
    <VisualCard
      title="Rantai simpanan dan pengganda uang"
      caption="Model cadangan sebagian menganggap setiap kredit dibelanjakan dan kembali menjadi simpanan di bank berikutnya."
      howToRead="Setiap batang menunjukkan simpanan satu putaran, bukan saldo satu rekening. Jumlah hingga putaran terpilih lebih kecil dari jumlah tak hingga; rasio uang tunai mengurangi pengganda teoretis."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Simpanan awal: {initialDeposit.toLocaleString("id-ID")}
          <input aria-label="Nilai simpanan awal" type="range" min="500" max="2000" step="100" value={initialDeposit} onChange={(event) => setInitialDeposit(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Cadangan wajib r: {reservePercent}%
          <input aria-label="Rasio cadangan wajib" type="range" min="5" max="30" step="1" value={reservePercent} onChange={(event) => setReservePercent(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Rasio uang tunai c: {cashRatio.toFixed(2)}
          <input aria-label="Rasio uang tunai terhadap simpanan" type="range" min="0" max="0.4" step="0.05" value={cashRatio} onChange={(event) => setCashRatio(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Jumlah putaran: {rounds}
          <input aria-label="Jumlah putaran simpanan" type="range" min="1" max="10" value={rounds} onChange={(event) => setRounds(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-violet-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 112" role="img" aria-label={`Simpanan kumulatif ${chain.cumulative.toFixed(1)} setelah ${rounds} putaran. Pengganda sederhana ${chain.simpleMultiplier?.toFixed(2) ?? "tidak terdefinisi"}; dengan kebocoran ${leaked.multiplier?.toFixed(2) ?? "tidak terdefinisi"}.`} className="h-48 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M24 8V88H242" fill="none" stroke="#71717a" />
        {chain.deposits.map((deposit, index) => {
          const barWidth = 196 / rounds;
          const height = barHeight(deposit);
          const x = 28 + index * barWidth;
          return (
            <g key={`round-${index + 1}`}>
              <rect x={x + 1} y={87 - height} width={Math.max(3, barWidth - 3)} height={height} rx="2" fill="#38bdf8" />
              <text x={x + 2} y="100" fill="#a1a1aa" fontSize="6">{index + 1}</text>
              <text x={x + 1} y={Math.max(14, 83 - height)} fill="#d4d4d8" fontSize="6">{deposit.toFixed(0)}</text>
            </g>
          );
        })}
        <text x="4" y="10" fill="#a1a1aa" fontSize="7">Simpanan per putaran</text>
        <text x="185" y="109" fill="#a1a1aa" fontSize="7">Putaran</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Jumlah {rounds} putaran = {chain.deposits.map((deposit) => deposit.toFixed(1)).join(" + ")} = <strong>{chain.cumulative.toFixed(1)}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Pengganda sederhana 1/r={chain.simpleMultiplier?.toFixed(2) ?? "tidak terdefinisi"}; total akhir model={chain.simpleTotal?.toLocaleString("id-ID") ?? "tidak terdefinisi"}.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Dengan kebocoran (1+c)/(c+r)={leaked.multiplier?.toFixed(2) ?? "tidak terdefinisi"}.</p>
        <p className="rounded bg-zinc-950 p-3">Jika uang primer 1.000, M={leaked.multiplier === null ? "tidak terdefinisi" : (leaked.multiplier * 1000).toLocaleString("id-ID")} pada model kebocoran ini.</p>
      </div>
    </VisualCard>
  );
}
