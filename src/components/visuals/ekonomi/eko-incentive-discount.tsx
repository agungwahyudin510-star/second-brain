"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

const formatRupiah = (amount: number) => `Rp${new Intl.NumberFormat("id-ID").format(amount)}`;

export default function EkoIncentiveDiscount() {
  const [extraPrice, setExtraPrice] = useState(25_000);
  const [extraBenefit, setExtraBenefit] = useState(8_000);
  const basketBeforeDiscount = 190_000 + extraPrice;
  const discountApplies = basketBeforeDiscount > 200_000;
  const totalPayable = basketBeforeDiscount - (discountApplies ? 20_000 : 0);
  const paymentChange = totalPayable - 190_000;
  const netBenefit = extraBenefit - paymentChange;
  const maxBar = Math.max(230_000, totalPayable, 190_000);

  return (
    <VisualCard
      title="Insentif diskon dan keputusan membeli tambahan"
      caption="Ilustrasi satu keranjang dengan nilai awal Rp190.000. Diskon Rp20.000 berlaku hanya jika total sebelum diskon lebih dari Rp200.000 (bukan sama dengan)."
      howToRead="Bandingkan tinggi batang total bayar dengan keranjang awal. Manfaat bersih mengurangkan perubahan pembayaran dari nilai barang tambahan menurut pembeli; slider memperbarui kedua hasil."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-zinc-300">
          Harga barang tambahan: {formatRupiah(extraPrice)}
          <input aria-label="Harga barang tambahan" type="range" min="0" max="40000" step="1000" value={extraPrice} onChange={(event) => setExtraPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
        </label>
        <label className="text-sm text-zinc-300">
          Nilai manfaat barang tambahan: {formatRupiah(extraBenefit)}
          <input aria-label="Nilai manfaat barang tambahan" type="range" min="0" max="40000" step="1000" value={extraBenefit} onChange={(event) => setExtraBenefit(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
        </label>
      </div>
      <div className="space-y-3" role="img" aria-label={`Perbandingan total bayar. Keranjang awal ${formatRupiah(190000)}; total bayar setelah tambahan ${formatRupiah(totalPayable)}.`}>
        {[
          { label: "Keranjang awal", value: 190_000, color: "bg-zinc-500" },
          { label: "Total bayar", value: totalPayable, color: "bg-sky-400" },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex justify-between gap-2 text-xs text-zinc-300"><span>{item.label}</span><span>{formatRupiah(item.value)}</span></div>
            <div className="h-4 rounded bg-zinc-800"><div className={`h-4 rounded ${item.color}`} style={{ width: `${(item.value / maxBar) * 100}%` }} /></div>
          </div>
        ))}
      </div>
      <dl aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-2">
        <div className="rounded-lg bg-zinc-950 p-3"><dt className="text-zinc-400">Total sebelum diskon</dt><dd className="font-semibold">{formatRupiah(basketBeforeDiscount)}</dd></div>
        <div className="rounded-lg bg-zinc-950 p-3"><dt className="text-zinc-400">Diskon berlaku?</dt><dd className={discountApplies ? "font-semibold text-emerald-300" : "font-semibold text-amber-300"}>{discountApplies ? "Ya — total sebelum diskon > Rp200.000" : "Tidak — syarat harus lebih dari Rp200.000"}</dd></div>
        <div className="rounded-lg bg-zinc-950 p-3"><dt className="text-zinc-400">Total bayar</dt><dd className="font-semibold">{formatRupiah(totalPayable)}</dd></div>
        <div className="rounded-lg bg-zinc-950 p-3"><dt className="text-zinc-400">Perubahan pembayaran vs keranjang awal</dt><dd className="font-semibold">{paymentChange >= 0 ? "+" : "−"}{formatRupiah(Math.abs(paymentChange))}</dd></div>
        <div className="rounded-lg bg-zinc-950 p-3 sm:col-span-2"><dt className="text-zinc-400">Manfaat bersih = nilai manfaat − perubahan pembayaran</dt><dd className={`font-semibold ${netBenefit < 0 ? "text-rose-300" : "text-emerald-300"}`}>{formatRupiah(extraBenefit)} − ({paymentChange >= 0 ? "" : "−"}{formatRupiah(Math.abs(paymentChange))}) = {formatRupiah(netBenefit)}</dd></div>
      </dl>
      {(!discountApplies || netBenefit < 0) && (
        <p role="alert" className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-sm text-amber-200">
          {!discountApplies && "Diskon tidak berlaku karena total sebelum diskon belum melebihi Rp200.000. "}
          {netBenefit < 0 && "Manfaat bersih negatif: menurut nilai yang kamu masukkan, barang tambahan tidak sepadan dengan perubahan pembayaran."}
        </p>
      )}
    </VisualCard>
  );
}
