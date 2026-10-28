"use client";

import VisualCard from "./VisualCard";
import { marketConcentration, monopolyOutcomes, prisonersDilemmaPayoffs } from "./econ-math";

const shares = [40, 30, 20, 10];

export default function EkoMarketStructures() {
  const structure = marketConcentration(shares);
  const monopoly = monopolyOutcomes();
  const dilemma = prisonersDilemmaPayoffs();

  return (
    <VisualCard
      title="Struktur pasar dan hasil kesejahteraan"
      caption="Ilustrasi menggunakan data hipotetis untuk pasar dengan empat pemain dominan, monopoli linear, dan dilema tahanan."
      howToRead="HHI dan CR2 menjelaskan konsentrasi; MR = MC memberi output monopoli; ekuilibrium Nash dapat berbeda dari hasil kolusif bersama."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg bg-zinc-950 p-3">
          <p className="text-sm font-medium text-sky-200">Konsentrasi pasar</p>
          <div className="mt-3 space-y-2">
            {shares.map((share, index) => (
              <div key={`share-${index}`}>
                <div className="mb-1 flex justify-between text-xs text-zinc-400">
                  <span>Pihak {index + 1}</span>
                  <span>{share}%</span>
                </div>
                <div className="h-2 rounded bg-zinc-800">
                  <div className="h-2 rounded bg-sky-400" style={{ width: `${share}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-zinc-300">HHI = {structure.hhi}; CR2 = {structure.cr2}.</p>
        </div>

        <div className="rounded-lg bg-zinc-950 p-3">
          <p className="text-sm font-medium text-emerald-200">Monopoli dasar</p>
          <p className="mt-2 text-sm text-zinc-300">P = 50 − Q; MR = 50 − 2Q; MC = 10.</p>
          <p className="mt-2 text-sm text-zinc-300">Q* = {monopoly.quantity}; P* = {monopoly.price}; laba = {monopoly.profit}; DWL = {monopoly.deadweightLoss}.</p>
          <p className="mt-2 text-sm text-zinc-300">Persaingan sempurna: Q = 40, P = 10; total surplus = 800.</p>
        </div>
      </div>

      <div className="rounded-lg bg-zinc-950 p-3 text-sm">
        <p className="font-medium text-amber-200">Dilema tahanan</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {dilemma.payoffs.map((cell) => (
            <div key={cell.label} className="rounded border border-zinc-700 p-2">
              <p className="text-xs uppercase tracking-wide text-zinc-400">{cell.label}</p>
              <p className="mt-1 text-zinc-200">({cell.values[0]}, {cell.values[1]})</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-zinc-300">Ekuilibrium Nash = ({dilemma.nash[0]}, {dilemma.nash[1]}) meskipun kerja sama memberi ({dilemma.cooperation[0]}, {dilemma.cooperation[1]}).</p>
      </div>
    </VisualCard>
  );
}
