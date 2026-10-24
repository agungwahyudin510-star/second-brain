"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

const prices = [2, 4, 6, 8, 10];
const demand = [90, 80, 70, 60, 50];
const supply = [30, 40, 50, 60, 70];

export default function EkoScheduleToCurve() {
  const [active, setActive] = useState<{ kind: "permintaan" | "penawaran"; index: number } | null>(null);
  const x = (quantity: number) => 35 + quantity * 1.75;
  const y = (price: number) => 112 - price * 8;
  const line = (quantities: number[]) => quantities.map((quantity, index) => `${x(quantity)},${y(prices[index])}`).join(" ");
  const activeQuantity = active ? (active.kind === "permintaan" ? demand[active.index] : supply[active.index]) : null;
  const activePrice = active ? prices[active.index] : null;

  return (
    <VisualCard
      title="Dari jadwal ke kurva"
      caption="Jadwal menggambarkan jumlah hipotetis pada setiap harga; menghubungkan pasangan harga-kuantitas membantu memvisualkan hubungan."
      howToRead="Setiap baris adalah satu titik (Q, P). Fokuskan atau arahkan penunjuk ke jumlah di tabel untuk menyorot titik terkait; jadwal permintaan dan penawaran memakai sumbu yang sama."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[30rem] border-collapse text-center text-sm">
          <caption className="sr-only">Jadwal permintaan dan penawaran ilustratif. Gunakan tombol jumlah untuk menyorot titik pada grafik.</caption>
          <thead><tr className="border-b border-zinc-700 text-zinc-300"><th className="p-2">Harga</th><th className="p-2 text-sky-300">Jumlah diminta</th><th className="p-2 text-emerald-300">Jumlah ditawarkan</th></tr></thead>
          <tbody>{prices.map((price, index) => (
            <tr key={price} className="border-b border-zinc-800">
              <th className="p-2 font-medium">{price}</th>
              <td className="p-2"><button type="button" onMouseEnter={() => setActive({ kind: "permintaan", index })} onFocus={() => setActive({ kind: "permintaan", index })} onClick={() => setActive({ kind: "permintaan", index })} aria-label={`Harga ${price}, permintaan ${demand[index]} unit; sorot di grafik`} className="min-h-10 min-w-12 rounded px-2 text-sky-200 hover:bg-sky-500/10">{demand[index]}</button></td>
              <td className="p-2"><button type="button" onMouseEnter={() => setActive({ kind: "penawaran", index })} onFocus={() => setActive({ kind: "penawaran", index })} onClick={() => setActive({ kind: "penawaran", index })} aria-label={`Harga ${price}, penawaran ${supply[index]} unit; sorot di grafik`} className="min-h-10 min-w-12 rounded px-2 text-emerald-200 hover:bg-emerald-500/10">{supply[index]}</button></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <svg viewBox="0 0 230 135" role="img" aria-label={`Kurva jadwal permintaan dan penawaran. ${active ? `Sorotan ${active.kind} pada harga ${activePrice}, kuantitas ${activeQuantity}.` : "Pilih sebuah jumlah pada tabel untuk menyorot titik."}`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <path d="M28 10V112H218" fill="none" stroke="#71717a" />
        <text x="3" y="17" fill="#a1a1aa" fontSize="8">Harga</text><text x="179" y="130" fill="#a1a1aa" fontSize="8">Kuantitas</text>
        <polyline points={line(demand)} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <polyline points={line(supply)} fill="none" stroke="#34d399" strokeWidth="2.5" />
        {active && activeQuantity !== null && activePrice !== null && <circle cx={x(activeQuantity)} cy={y(activePrice)} r="5" fill="#fbbf24" stroke="#fff" strokeWidth="1" />}
        <text x="182" y="28" fill="#7dd3fc" fontSize="8">D</text><text x="182" y="105" fill="#6ee7b7" fontSize="8">S</text>
      </svg>
      <p aria-live="polite" className="text-sm text-amber-200">{active && activeQuantity !== null && activePrice !== null ? `Titik yang disorot: harga ${activePrice}, jumlah ${activeQuantity} unit (${active.kind}).` : "Pilih atau fokuskan satu angka jumlah pada jadwal untuk menyorot pasangan titik."}</p>
    </VisualCard>
  );
}
