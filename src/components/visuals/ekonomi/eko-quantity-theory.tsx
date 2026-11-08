"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { quantityTheory } from "./econ-math";

export default function EkoQuantityTheory() {
  const [money, setMoney] = useState(400);
  const [velocity, setVelocity] = useState(5);
  const [output, setOutput] = useState(1000);
  const result = quantityTheory(money, velocity, output);
  const price = result.price ?? 0;
  const maximum = Math.max(price, result.baselinePrice, 0.1);
  const currentHeight = price / maximum * 78;
  const baseHeight = result.baselinePrice / maximum * 78;

  return (
    <VisualCard
      title="Persamaan kuantitas uang MV=PY"
      caption="Tingkat harga dihitung sebagai P=MV/Y. Kondisi dasar untuk perbandingan adalah M=400, V=5, Y=1.000, sehingga P=2,0."
      howToRead="Dua batang membandingkan tingkat harga skenario dengan kondisi dasar. Perubahan persentase dihitung terhadap harga dasar; mengubah kecepatan atau keluaran mengubah hasil, bukan hanya jumlah uang."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">Uang M: {money}
          <input aria-label="Jumlah uang M" type="range" min="300" max="600" step="20" value={money} onChange={(event) => setMoney(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">Kecepatan V: {velocity.toFixed(1)}
          <input aria-label="Kecepatan peredaran uang V" type="range" min="3" max="8" step="0.5" value={velocity} onChange={(event) => setVelocity(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Keluaran riil Y: {output.toLocaleString("id-ID")}
          <input aria-label="Keluaran riil Y" type="range" min="800" max="1200" step="20" value={output} onChange={(event) => setOutput(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
      </div>
      <svg viewBox="0 0 250 120" role="img" aria-label={`Tingkat harga dasar ${result.baselinePrice.toFixed(2)}; tingkat harga saat ini ${result.price?.toFixed(3) ?? "tidak terdefinisi"}; perubahan ${result.changePercent?.toFixed(2) ?? "tidak terdefinisi"} persen.`} className="h-48 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M24 8V96H236" fill="none" stroke="#71717a" />
        <rect x="65" y={96 - baseHeight} width="42" height={baseHeight} rx="3" fill="#71717a" />
        <rect x="143" y={96 - currentHeight} width="42" height={currentHeight} rx="3" fill="#38bdf8" />
        <text x="61" y="109" fill="#a1a1aa" fontSize="7">Dasar</text>
        <text x="142" y="109" fill="#a1a1aa" fontSize="7">Skenario</text>
        <text x="67" y={Math.max(14, 91 - baseHeight)} fill="#e4e4e7" fontSize="7">{result.baselinePrice.toFixed(1)}</text>
        <text x="145" y={Math.max(14, 91 - currentHeight)} fill="#bae6fd" fontSize="7">{price.toFixed(3)}</text>
        <text x="4" y="14" fill="#a1a1aa" fontSize="8">P=MV/Y</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">P=MV/Y={money}×{velocity.toFixed(1)}/{output} = <strong>{price.toFixed(3)}</strong>.</p>
        <p className={`rounded bg-zinc-950 p-3 ${result.changePercent !== null && result.changePercent >= 0 ? "text-amber-200" : "text-emerald-200"}`}>Perubahan terhadap dasar P=2,0: {result.changePercent?.toFixed(2) ?? "tidak terdefinisi"}%.</p>
      </div>
    </VisualCard>
  );
}
