"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { bankBalance } from "./econ-math";

export default function EkoBankBalance() {
  const [creditLoss, setCreditLoss] = useState(0);
  const [withdrawal, setWithdrawal] = useState(10);
  const result = bankBalance(creditLoss, withdrawal);
  const capitalWidth = Math.max(0, Math.min(140, result.capital / 100 * 140));
  const withdrawalWidth = Math.min(180, result.withdrawal / 300 * 180);

  const liquidityText = result.liquidityStatus === "covered-by-reserves"
    ? "Penarikan tertutup cadangan"
    : result.liquidityStatus === "sell-securities"
      ? "Perlu menjual surat berharga"
      : "Tidak likuid: aset likuid kurang";

  return (
    <VisualCard
      title="Neraca bank: modal dan likuiditas"
      caption="Neraca hipotetis: cadangan 100, kredit 800, surat berharga 100, simpanan 900, dan modal awal 100."
      howToRead="Batang modal menunjukkan bantalan setelah kerugian kredit. Batang penarikan dibandingkan dengan cadangan 100 dan gabungan cadangan serta surat berharga 200; penjualan kredit terpaksa dapat menambah kerugian."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">Rugi kredit: {creditLoss}% dari 800
          <input aria-label="Persentase kerugian kredit bank" type="range" min="0" max="20" step="0.5" value={creditLoss} onChange={(event) => setCreditLoss(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-rose-400" />
        </label>
        <label className="text-sm text-zinc-300">Penarikan simpanan: {withdrawal}%
          <input aria-label="Persentase simpanan yang ditarik" type="range" min="0" max="40" step="1" value={withdrawal} onChange={(event) => setWithdrawal(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 142" role="img" aria-label={`Kerugian kredit ${result.creditLoss.toFixed(1)}; modal tersisa ${result.capital.toFixed(1)} dan bank ${result.solvent ? "solven" : "tak solven"}. Penarikan ${result.withdrawal.toFixed(1)}; ${liquidityText.toLowerCase()}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="14" fill="#a1a1aa" fontSize="8">Modal tersisa (awal 100)</text>
        <rect x="4" y="23" width="140" height="18" rx="3" fill="#27272a" />
        <rect x="4" y="23" width={capitalWidth} height="18" rx="3" fill={result.solvent ? "#34d399" : "#f87171"} />
        <text x="151" y="36" fill="#e4e4e7" fontSize="8">{result.capital.toFixed(1)}</text>
        <text x="4" y="62" fill="#a1a1aa" fontSize="8">Penarikan simpanan dan aset likuid</text>
        <rect x="4" y="71" width="180" height="16" rx="3" fill="#27272a" />
        <rect x="4" y="71" width={withdrawalWidth} height="16" rx="3" fill="#fbbf24" />
        <line x1={4 + 100 / 300 * 180} x2={4 + 100 / 300 * 180} y1="66" y2="93" stroke="#38bdf8" strokeDasharray="2 2" />
        <line x1={4 + 200 / 300 * 180} x2={4 + 200 / 300 * 180} y1="66" y2="93" stroke="#f87171" strokeDasharray="2 2" />
        <text x="4" y="105" fill="#7dd3fc" fontSize="7">Cadangan 100</text>
        <text x="80" y="105" fill="#fca5a5" fontSize="7">Cadangan + surat berharga 200</text>
        <text x="4" y="130" fill="#a1a1aa" fontSize="8">{liquidityText}</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Kerugian={creditLoss}%×800={result.creditLoss.toFixed(1)}; modal=100−{result.creditLoss.toFixed(1)}=<strong>{result.capital.toFixed(1)}</strong>.</p>
        <p className={`rounded bg-zinc-950 p-3 ${result.solvent ? "text-emerald-200" : "text-rose-200"}`}>Solvabilitas: {result.solvent ? "solven" : "tak solven"}; rasio modal terhadap aset {result.capitalRatio.toFixed(2)}%.</p>
        <p className="rounded bg-zinc-950 p-3">Penarikan={withdrawal}%×900={result.withdrawal.toFixed(1)}; aset likuid tersedia maksimum 200.</p>
        <p className={`rounded bg-zinc-950 p-3 ${result.liquidityStatus === "illiquid" ? "text-rose-200" : "text-sky-200"}`}>Likuiditas: {liquidityText}.</p>
      </div>
    </VisualCard>
  );
}
