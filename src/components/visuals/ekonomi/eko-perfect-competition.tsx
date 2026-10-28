"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { competitiveDecision, type FirmStatus } from "./econ-math";

const STATUS: Record<FirmStatus, { label: string; note: string }> = {
  laba: { label: "Laba ekonomi positif", note: "Pemain baru tertarik masuk, penawaran pasar naik, harga cenderung turun." },
  "rugi-operasi": { label: "Rugi, tetapi tetap beroperasi", note: "Penerimaan menutup biaya variabel dan sebagian biaya tetap. Jika bertahan lama, sebagian pemain keluar dan harga cenderung naik." },
  "impas-tutup": { label: "Impas antara tutup dan produksi", note: "Rugi sama dengan biaya tetap (20) baik tutup maupun produksi." },
  tutup: { label: "Tutup (P di bawah AVC minimum)", note: "Produksi menambah kerugian di atas biaya tetap, jadi output terbaik adalah nol." },
};

export default function EkoPerfectCompetition() {
  const [price, setPrice] = useState(15);
  const { rows, best, status } = competitiveDecision(price);
  const min = Math.min(...rows.map((r) => r.profit), 0);
  const max = Math.max(...rows.map((r) => r.profit), 0);
  const span = max - min || 1;
  const yZero = 10 + (max / span) * 100;
  const yOf = (v: number) => 10 + ((max - v) / span) * 100;
  const tied = rows.filter((r) => r.profit === best.profit).length > 1;

  return (
    <VisualCard
      title="Laba, rugi, dan keputusan tutup"
      caption="Perusahaan yang sama seperti sub-bab 1 (FC=20). Geser harga pasar dan lihat laba pada tiap Q."
      howToRead="Batang adalah laba = P×Q − TC. Batang kuning adalah Q dengan laba tertinggi. Jika laba terbaik pada Q > 0 lebih buruk dari −20 (biaya tetap), tutup lebih baik."
    >
      <label className="block text-sm text-zinc-300">
        Harga pasar P: {price}
        <input aria-label="Harga pasar untuk simulasi laba" type="range" min="4" max="20" step="1" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-2 block min-h-8 w-full touch-pan-x accent-amber-400" />
      </label>
      <svg viewBox="0 0 210 135" role="img" aria-label={`Laba per Q pada harga ${price}. Q terbaik ${best.q} dengan laba ${best.profit}.`} className="h-52 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="20" x2="200" y1={yZero} y2={yZero} stroke="#71717a" />
        {rows.map((r, i) => {
          const bx = 28 + i * 25;
          const top = Math.min(yOf(r.profit), yZero);
          const h = Math.max(Math.abs(yOf(r.profit) - yZero), 1);
          const isBest = r.q === best.q;
          return (
            <g key={r.q}>
              <rect x={bx} y={top} width="16" height={h} fill={isBest ? "#FBBF24" : r.profit >= 0 ? "#34D399" : "#F87171"} />
              <text x={bx + 8} y="128" textAnchor="middle" fill="#A1A1AA" fontSize="8">{r.q}</text>
              <text x={bx + 8} y={r.profit >= 0 ? top - 2 : top + h + 8} textAnchor="middle" fill="#E4E4E7" fontSize="7">{r.profit}</text>
            </g>
          );
        })}
      </svg>
      <div className="space-y-2 text-sm text-zinc-200">
        <p className="rounded bg-zinc-950 p-3">Q terbaik = <strong>{best.q}</strong>; laba = <strong>{best.profit}</strong>{tied ? " (seri; ditampilkan Q terkecil)" : ""}.</p>
        <p className="rounded bg-zinc-950 p-3"><strong>{STATUS[status].label}.</strong> {STATUS[status].note}</p>
      </div>
    </VisualCard>
  );
}