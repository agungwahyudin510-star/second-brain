"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { realDiscount } from "./psych-math";

const patterns = [
  { label: "Timer palsu / tidak jelas", message: "Tawaran berakhir dalam 02:00:00", key: "timer" },
  { label: "Klaim stok “sisa 2”", message: "Stok tersisa hanya 2", key: "stock" },
  { label: "Confirmshaming", message: "Tidak, saya tidak ingin membuat pilihan cerdas", key: "shame" },
  { label: "Opt-in sudah dipilih", message: "☑ Kirim promosi dan penawaran mitra", key: "optIn" },
  { label: "Biaya tersembunyi", message: "Biaya layanan baru ditampilkan di tahap akhir", key: "hiddenCost" },
] as const;
type PatternKey = typeof patterns[number]["key"];

export default function PsiDarkPatterns() {
  const [active, setActive] = useState<Record<PatternKey, boolean>>({
    timer: false, stock: false, shame: false, optIn: false, hiddenCost: false,
  });
  const [refPrice, setRefPrice] = useState(350);
  const [salePrice, setSalePrice] = useState(300);
  const count = Object.values(active).filter(Boolean).length;
  const risk = count === 0 ? "Tidak ada pola yang ditandai" : count < 3 ? "Perlu ditinjau" : "Banyak tekanan terdeteksi";
  const discount = realDiscount(refPrice, salePrice);

  function togglePattern(key: PatternKey, checked: boolean) {
    setActive((current) => ({ ...current, [key]: checked }));
  }

  return (
    <VisualCard
      title="Audit antarmuka dan hitung diskon"
      caption="Mockup, pola, dan angka adalah latihan hipotetis. Indikator risiko hanya penanda belajar, bukan penilaian keamanan atau niat."
      howToRead="Aktifkan pola yang ditemukan pada mockup untuk melihat hitungan indikator. Hitung diskon dari harga pembanding yang wajar, bukan sekadar angka jangkar."
    >
      <div className="min-w-0 rounded-xl border border-zinc-700 bg-white p-3 text-zinc-900">
        <p className="break-words text-sm font-bold">Paket Fokus Plus</p>
        {patterns.map((pattern) => active[pattern.key] && (
          <p key={pattern.key} className="mt-2 min-w-0 break-words rounded bg-amber-100 p-2 text-sm">{pattern.message}</p>
        ))}
        {!active.timer && <p className="mt-2 break-words text-sm text-zinc-600">Pilih pola di bawah untuk menampilkan elemen pada mockup.</p>}
        <div className="mt-3 flex min-w-0 flex-wrap gap-2">
          <button type="button" className="min-h-10 min-w-0 break-words rounded bg-blue-700 px-3 py-2 text-sm text-white">Lanjutkan</button>
          <button type="button" className="min-h-10 min-w-0 break-words rounded border border-zinc-400 px-3 py-2 text-sm">Tinjau pilihan</button>
        </div>
      </div>
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm text-zinc-200">Tampilkan pola pada mockup</legend>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {patterns.map((pattern) => (
            <label key={pattern.key} className="flex min-w-0 items-start gap-2 rounded-lg bg-zinc-950 p-2 text-sm text-zinc-300">
              <input aria-label={pattern.label} type="checkbox" checked={active[pattern.key]} onChange={(event) => togglePattern(pattern.key, event.target.checked)} className="mt-1 accent-amber-400" />
              <span className="break-words">{pattern.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">
        <p className="text-amber-200">Pola ditemukan: {count}/5 · indikator latihan: {risk}</p>
        <p className="mt-1 text-zinc-300">Respons: ambil jeda, bandingkan harga, dan abaikan urgensi yang tidak dapat diverifikasi.</p>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0 text-sm text-zinc-300">Harga pembanding
          <input aria-label="Harga pembanding atau harga coret" type="number" min="0" value={refPrice} onChange={(event) => setRefPrice(Number(event.target.value))} className="mt-1 block min-h-10 w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 px-2" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Harga jual
          <input aria-label="Harga jual" type="number" min="0" value={salePrice} onChange={(event) => setSalePrice(Number(event.target.value))} className="mt-1 block min-h-10 w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 px-2" />
        </label>
      </div>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">
        Diskon terhadap harga pembanding: {discount.toFixed(1)}% ({refPrice} → {salePrice})
      </p>
    </VisualCard>
  );
}
