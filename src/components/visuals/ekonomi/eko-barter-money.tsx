"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { relativePrices } from "./econ-math";

export default function EkoBarterMoney() {
  const [goods, setGoods] = useState(10);
  const result = relativePrices(goods);
  const barterWidth = 176 * Math.log10(result.barterPrices + 1) / Math.log10(4951);
  const moneyWidth = 176 * Math.log10(result.moneyPrices + 1) / Math.log10(4951);

  return (
    <VisualCard
      title="Satuan uang mengurangi harga yang perlu dibandingkan"
      caption="Batang memakai skala logaritmik agar jumlah harga untuk 100 barang tetap terbaca bersama jumlah yang lebih kecil."
      howToRead="Panjang batang mengikuti logaritma jumlah harga; angka di ujungnya adalah jumlah sebenarnya. Barter memerlukan harga untuk setiap pasangan, sedangkan satuan uang memerlukan satu harga untuk setiap barang selain unit pembanding."
    >
      <label className="block text-sm text-zinc-300">Jumlah jenis barang: {goods}
        <input aria-label="Jumlah jenis barang dalam pasar" type="range" min="2" max="100" value={goods} onChange={(event) => setGoods(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
      </label>
      <svg viewBox="0 0 250 104" role="img" aria-label={`${goods} barang memerlukan ${result.barterPrices.toLocaleString("id-ID")} harga relatif dalam barter dan ${result.moneyPrices.toLocaleString("id-ID")} harga dengan uang.`} className="h-44 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="13" fill="#a1a1aa" fontSize="8">Jumlah harga relatif (skala logaritmik)</text>
        <text x="4" y="39" fill="#d4d4d8" fontSize="8">Barter</text>
        <rect x="55" y="27" width={barterWidth} height="18" rx="3" fill="#fbbf24" />
        <text x={Math.min(238, 59 + barterWidth)} y="39" fill="#fef3c7" fontSize="8">{result.barterPrices.toLocaleString("id-ID")}</text>
        <text x="4" y="73" fill="#d4d4d8" fontSize="8">Dengan uang</text>
        <rect x="55" y="61" width={moneyWidth} height="18" rx="3" fill="#38bdf8" />
        <text x={Math.min(238, 59 + moneyWidth)} y="73" fill="#e0f2fe" fontSize="8">{result.moneyPrices.toLocaleString("id-ID")}</text>
        <text x="55" y="96" fill="#71717a" fontSize="7">Skala panjang batang: log₁₀(jumlah + 1)</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Barter: {goods}×({goods}−1)/2 = <strong>{result.barterPrices.toLocaleString("id-ID")}</strong> harga pasangan.</p>
        <p className="rounded bg-zinc-950 p-3 text-sky-200">Dengan uang: {goods}−1 = <strong>{result.moneyPrices.toLocaleString("id-ID")}</strong> harga.</p>
        <p className="rounded bg-zinc-950 p-3 sm:col-span-2">Kebetulan keinginan ganda tidak lagi diperlukan untuk setiap transaksi.</p>
      </div>
    </VisualCard>
  );
}
