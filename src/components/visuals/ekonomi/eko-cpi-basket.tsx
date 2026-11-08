"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { cpiBasket } from "./econ-math";

export default function EkoCpiBasket() {
  const [ricePrice, setRicePrice] = useState(10.5);
  const [eggPrice, setEggPrice] = useState(16);
  const [transportPrice, setTransportPrice] = useState(21);
  const [basket, setBasket] = useState<"fixed" | "substitution">("fixed");
  const result = cpiBasket(ricePrice, eggPrice, transportPrice);
  const selectedCost = basket === "fixed" ? result.fixedCurrentCost : result.substitutionCurrentCost;
  const selectedBaseCost = basket === "fixed" ? result.fixedBaseCost : result.substitutionBaseCost;
  const selectedIndex = basket === "fixed" ? result.fixedIndex : result.substitutionIndex;
  const contributions = result.fixedBasket.map((item, index) => ({
    ...item,
    substitutionCost: result.substitutionBasket[index].currentCost,
  }));
  const maxContribution = Math.max(...contributions.map((item) => item.currentCost - item.baseCost), 1);

  return (
    <VisualCard
      title="IHK dengan keranjang tetap dan substitusi"
      caption="Keranjang dan harga tahun dasar 2024 tetap. Slider hanya mengubah harga 2025; keranjang substitusi memakai jumlah 45 beras, 15 telur, dan 10 transportasi."
      howToRead="Batang menunjukkan kontribusi kenaikan biaya tiap barang pada masing-masing keranjang. IHK membagi total biaya berjalan dengan biaya tahun dasar; selisih kecil mencerminkan efek perubahan jumlah keranjang."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm text-zinc-300">Harga beras: {ricePrice.toFixed(1)}
          <input aria-label="Harga beras tahun 2025" type="range" min="10" max="12" step="0.5" value={ricePrice} onChange={(event) => setRicePrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Harga telur: {eggPrice}
          <input aria-label="Harga telur tahun 2025" type="range" min="15" max="18" step="1" value={eggPrice} onChange={(event) => setEggPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
        <label className="text-sm text-zinc-300">Harga transportasi: {transportPrice}
          <input aria-label="Harga transportasi tahun 2025" type="range" min="20" max="23" step="1" value={transportPrice} onChange={(event) => setTransportPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Pilih keranjang perhitungan">
        <button type="button" aria-pressed={basket === "fixed"} onClick={() => setBasket("fixed")} className={`min-h-10 rounded-lg border px-3 text-sm ${basket === "fixed" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Keranjang tetap</button>
        <button type="button" aria-pressed={basket === "substitution"} onClick={() => setBasket("substitution")} className={`min-h-10 rounded-lg border px-3 text-sm ${basket === "substitution" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Keranjang substitusi (45/15/10)</button>
      </div>
      <svg viewBox="0 0 250 140" role="img" aria-label={`Kontribusi kenaikan biaya keranjang: beras ${contributions[0].currentCost - contributions[0].baseCost}, telur ${contributions[1].currentCost - contributions[1].baseCost}, transportasi ${contributions[2].currentCost - contributions[2].baseCost}. IHK tetap ${result.fixedIndex.toFixed(2)}, IHK substitusi ${result.substitutionIndex.toFixed(2)}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="13" fill="#a1a1aa" fontSize="8">Kenaikan biaya per barang</text>
        {contributions.map((item, index) => {
          const fixedDelta = item.currentCost - item.baseCost;
          const substituteDelta = item.substitutionCost - result.substitutionBasket[index].baseCost;
          const y = 28 + index * 36;
          return (
            <g key={item.name}>
              <text x="4" y={y + 8} fill="#d4d4d8" fontSize="8">{item.name}</text>
              <rect x="76" y={y} width={110 * fixedDelta / maxContribution} height="10" rx="2" fill="#38bdf8" />
              <rect x="76" y={y + 13} width={110 * substituteDelta / maxContribution} height="10" rx="2" fill="#34d399" />
              <text x="192" y={y + 8} fill="#a1a1aa" fontSize="7">T {fixedDelta.toFixed(1)}</text>
              <text x="192" y={y + 21} fill="#a1a1aa" fontSize="7">S {substituteDelta.toFixed(1)}</text>
            </g>
          );
        })}
        <rect x="78" y="135" width="8" height="5" fill="#38bdf8" /><text x="89" y="140" fill="#a1a1aa" fontSize="7">tetap</text>
        <rect x="128" y="135" width="8" height="5" fill="#34d399" /><text x="139" y="140" fill="#a1a1aa" fontSize="7">substitusi</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">{basket === "fixed" ? "Keranjang tetap" : "Keranjang substitusi"}: biaya tahun dasar {selectedBaseCost}; biaya kini {selectedCost}; IHK={selectedIndex.toFixed(2)}; inflasi={selectedIndex === result.fixedIndex ? result.inflation.toFixed(2) : result.substitutionInflation.toFixed(2)}%.</p>
        <p className="rounded bg-zinc-950 p-3 text-amber-200">Kedua ukuran: IHK tetap {result.fixedIndex.toFixed(2)}; IHK substitusi {result.substitutionIndex.toFixed(2)}; selisih {result.indexDifference.toFixed(2)} poin.</p>
      </div>
    </VisualCard>
  );
}
