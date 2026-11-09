"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { bopIdentity } from "./econ-math";

export default function EkoBopIdentity() {
  const [currentAccount, setCurrentAccount] = useState(-30);
  const [financialAccount, setFinancialAccount] = useState(30);
  const [statistical, setStatistical] = useState(0);
  const result = bopIdentity(currentAccount, financialAccount, statistical);

  return (
    <VisualCard
      title="Identitas neraca pembayaran"
      caption="Transaksi berjalan, transaksi finansial, dan selisih statistik harus menyeimbangkan. Defisit transaksi berjalan umumnya dibayar oleh masuknya modal neto."
      howToRead="Ubah komponen arus. Angka bersifat ilustratif: bila saldo total tidak nol, ada ketidakseimbangan yang perlu dicatat sebagai error and omissions."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">Transaksi berjalan: {currentAccount}
          <input type="range" min="-60" max="60" step="10" value={currentAccount} onChange={(event) => setCurrentAccount(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Transaksi finansial: {financialAccount}
          <input type="range" min="-60" max="60" step="10" value={financialAccount} onChange={(event) => setFinancialAccount(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
        <label className="text-sm text-zinc-300">Selisih: {statistical}
          <input type="range" min="-20" max="20" step="5" value={statistical} onChange={(event) => setStatistical(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 100" role="img" aria-label={`Neraca pembayaran: current account ${currentAccount}, financial account ${financialAccount}, statistical discrepancy ${statistical}, saldo ${result.balance}.`} className="h-36 w-full rounded-lg bg-zinc-950 p-2">
        <rect x="20" y="30" width="60" height="35" fill="#38bdf8" opacity="0.7" />
        <rect x="95" y="30" width="60" height="35" fill="#34d399" opacity="0.7" />
        <rect x="170" y="30" width="60" height="35" fill="#fbbf24" opacity="0.7" />
        <text x="28" y="24" fill="#d4d4d8" fontSize="8">CA</text>
        <text x="109" y="24" fill="#d4d4d8" fontSize="8">FA</text>
        <text x="179" y="24" fill="#d4d4d8" fontSize="8">Stat</text>
        <text x="120" y="92" fill="#d4d4d8" fontSize="8">Total {result.balance}</text>
      </svg>
      <div className="grid gap-2 text-sm md:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Saldo total: <strong>{result.balance}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Residual: <strong>{result.residual}</strong>.</p>
      </div>
    </VisualCard>
  );
}
