"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { prisonersPayoff } from "./econ-math";

type Move = "Tinggi" | "Rendah";
const MOVES: Move[] = ["Tinggi", "Rendah"];

export default function EkoPrisonersDilemma() {
  const [a, setA] = useState<Move>("Tinggi");
  const [b, setB] = useState<Move>("Tinggi");
  const [pa, pb] = prisonersPayoff(a, b);
  const bestA: Move = prisonersPayoff("Rendah", b)[0] > prisonersPayoff("Tinggi", b)[0] ? "Rendah" : "Tinggi";
  const bestB: Move = prisonersPayoff(a, "Rendah")[1] > prisonersPayoff(a, "Tinggi")[1] ? "Rendah" : "Tinggi";
  const isNash = a === bestA && b === bestB;

  return (
    <VisualCard
      title="Dilema tahanan: dua perusahaan memilih harga"
      caption="Pembayaran (A, B) dalam laba. Pilih strategi masing-masing dan lihat apakah ada yang ingin berpindah."
      howToRead="Sel bertanda Nash adalah titik di mana tidak ada pihak yang untung bila berpindah sendirian. Perhatikan bahwa hasil (Tinggi, Tinggi) lebih baik bagi keduanya, tetapi tidak stabil."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {([["A", a, setA], ["B", b, setB]] as const).map(([name, value, set]) => (
          <div key={name}>
            <p className="mb-1 text-sm text-zinc-300">Strategi {name}</p>
            <div className="flex gap-2">
              {MOVES.map((m) => (
                <button key={m} type="button" aria-pressed={value === m} onClick={() => set(m)} className={`min-h-10 flex-1 rounded-lg border px-3 text-sm ${value === m ? "border-sky-400 bg-sky-500/20 text-sky-100" : "border-zinc-700 text-zinc-300"}`}>{m}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1 text-center text-sm" role="table" aria-label="Matriks pembayaran">
        <div />
        <div className="text-zinc-400">B Tinggi</div>
        <div className="text-zinc-400">B Rendah</div>
        {MOVES.map((ra) => (
          <div key={ra} className="contents">
            <div className="flex items-center justify-center text-zinc-400">A {ra}</div>
            {MOVES.map((rb) => {
              const [x, z] = prisonersPayoff(ra, rb);
              const selected = ra === a && rb === b;
              const nash = ra === "Rendah" && rb === "Rendah";
              return (
                <div key={rb} className={`rounded-lg border p-2 ${selected ? "border-amber-400 bg-amber-500/10" : "border-zinc-700 bg-zinc-950"}`}>
                  ({x}, {z}){nash && <span className="block text-xs text-emerald-300">Nash</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="space-y-2 text-sm text-zinc-200">
        <p className="rounded bg-zinc-950 p-3">Pembayaran terpilih: A = <strong>{pa}</strong>, B = <strong>{pb}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Respons terbaik A terhadap pilihan B: <strong>{bestA}</strong>. Respons terbaik B terhadap pilihan A: <strong>{bestB}</strong>. {isNash ? "Tidak ada yang mau berpindah: ini ekuilibrium Nash." : "Ada pihak yang untung bila berpindah."}</p>
        {a === "Tinggi" && b === "Tinggi" && <p className="rounded bg-zinc-950 p-3">Godaan curang: jika B tetap Tinggi, A naik dari 50 ke 70 (+20) dengan memotong harga.</p>}
      </div>
    </VisualCard>
  );
}