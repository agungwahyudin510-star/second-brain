"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { valueAdded } from "./econ-math";

export default function EkoValueAdded() {
  const [breadPrice, setBreadPrice] = useState(100);
  const [mode, setMode] = useState<"sales" | "valueAdded">("valueAdded");
  const result = valueAdded(30, 50, breadPrice);
  const largest = Math.max(result.totalSales, result.totalValueAdded);
  const barWidth = (amount: number) => 150 * amount / largest;

  return (
    <VisualCard
      title="Nilai tambah mencegah hitung ganda"
      caption="Ilustrasi rantai gandum–tepung–roti. Harga tahap awal mengikuti tabel contoh; slider mengubah harga jual roti dan nilai tambah tukang roti."
      howToRead="Batang pada mode penjualan memisahkan biaya bahan antara dari nilai tambah di setiap tahap. Jumlah nilai tambah sama dengan nilai barang akhir, sementara penjumlahan penjualan menghitung input berulang."
    >
      <label className="block text-sm text-zinc-300">
        Harga jual roti akhir: {breadPrice}
        <input aria-label="Harga jual roti pada tahap akhir" type="range" min="60" max="140" step="5" value={breadPrice} onChange={(event) => setBreadPrice(Number(event.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-emerald-400" />
      </label>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Pilih ukuran batang nilai tambah">
        <button type="button" aria-pressed={mode === "sales"} onClick={() => setMode("sales")} className={`min-h-10 rounded-lg border px-3 text-sm ${mode === "sales" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Jumlah penjualan (salah)</button>
        <button type="button" aria-pressed={mode === "valueAdded"} onClick={() => setMode("valueAdded")} className={`min-h-10 rounded-lg border px-3 text-sm ${mode === "valueAdded" ? "border-sky-400 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>Jumlah nilai tambah (benar)</button>
      </div>
      <svg viewBox="0 0 250 140" role="img" aria-label={`${mode === "sales" ? "Jumlah penjualan" : "Jumlah nilai tambah"} per tahap. Jumlah penjualan ${result.totalSales}, jumlah nilai tambah ${result.totalValueAdded}, nilai barang akhir ${result.finalGood}.`} className="h-56 w-full rounded-lg bg-zinc-950 p-2">
        <text x="4" y="13" fill="#a1a1aa" fontSize="8">{mode === "sales" ? "Penjualan bruto" : "Nilai tambah"}</text>
        {result.stages.map((stage, index) => {
          const y = 31 + index * 34;
          if (mode === "sales") {
            return (
              <g key={stage.producer}>
                <text x="4" y={y + 9} fill="#d4d4d8" fontSize="8">{stage.producer}</text>
                <rect x="74" y={y} width={barWidth(stage.intermediateCost)} height="13" fill="#38bdf8" />
                <rect x={74 + barWidth(stage.intermediateCost)} y={y} width={barWidth(stage.valueAdded)} height="13" fill="#34d399" />
                <text x={Math.min(226, 77 + barWidth(stage.sales))} y={y + 10} fill="#e4e4e7" fontSize="8">{stage.sales}</text>
              </g>
            );
          }
          return (
            <g key={stage.producer}>
              <text x="4" y={y + 9} fill="#d4d4d8" fontSize="8">{stage.producer}</text>
              <rect x="74" y={y} width={barWidth(stage.valueAdded)} height="13" fill="#34d399" />
              <text x={Math.min(226, 77 + barWidth(stage.valueAdded))} y={y + 10} fill="#e4e4e7" fontSize="8">{stage.valueAdded}</text>
            </g>
          );
        })}
        <rect x="75" y="133" width="8" height="6" fill="#38bdf8" /><text x="86" y="139" fill="#a1a1aa" fontSize="7">bahan antara</text>
        <rect x="148" y="133" width="8" height="6" fill="#34d399" /><text x="159" y="139" fill="#a1a1aa" fontSize="7">nilai tambah</text>
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm sm:grid-cols-3">
        <p className="rounded bg-zinc-950 p-3">Penjualan tahap: {result.stages.map((stage) => stage.sales).join(" + ")} = <strong>{result.totalSales}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3 text-emerald-200">Nilai tambah: {result.stages.map((stage) => stage.valueAdded).join(" + ")} = <strong>{result.totalValueAdded}</strong>.</p>
        <p className="rounded bg-zinc-950 p-3">Barang akhir roti = {result.finalGood}. Penjualan bruto menghitung gandum dan tepung berulang.</p>
      </div>
    </VisualCard>
  );
}
