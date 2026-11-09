"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";
import { balanceOfPaymentsFull } from "./econ-math";

type Field = { key: string; label: string; min: number; max: number; step: number };

const FIELDS: Field[] = [
  { key: "x", label: "Ekspor X", min: 60, max: 140, step: 5 },
  { key: "m", label: "Impor M", min: 60, max: 140, step: 5 },
  { key: "ir", label: "Pendapatan primer diterima", min: 0, max: 60, step: 5 },
  { key: "ip", label: "Pendapatan primer dibayarkan", min: 0, max: 60, step: 5 },
  { key: "tr", label: "Transfer neto", min: -20, max: 30, step: 5 },
  { key: "k", label: "Arus modal masuk neto", min: -50, max: 60, step: 5 },
];

export default function EkoBopIdentity() {
  const [values, setValues] = useState<Record<string, number>>({ x: 100, m: 120, ir: 30, ip: 50, tr: 10, k: 30 });
  const r = balanceOfPaymentsFull(values.x, values.m, values.ir, values.ip, values.tr, values.k);
  const bar = (value: number) => Math.min(Math.abs(value), 80) * 1.2;

  return (
    <VisualCard
      title="Neraca pembayaran dan identitas S − I = NX"
      caption="Angka ilustratif. Transaksi finansial ditulis sebagai arus modal masuk neto, sehingga transaksi berjalan + transaksi finansial + selisih = 0."
      howToRead="Geser komponen transaksi berjalan dan arus modal. Defisit transaksi berjalan (batang merah) harus dibiayai arus modal masuk; selisih menunjukkan bagian yang belum terjelaskan."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <label key={f.key} className="text-sm text-zinc-300">
            {f.label}: {values[f.key]}
            <input aria-label={f.label} type="range" min={f.min} max={f.max} step={f.step} value={values[f.key]} onChange={(e) => setValues((v) => ({ ...v, [f.key]: Number(e.target.value) }))} className="mt-2 block min-h-8 w-full touch-pan-x accent-sky-400" />
          </label>
        ))}
      </div>
      <svg viewBox="0 0 240 90" role="img" aria-label={`Transaksi berjalan ${r.currentAccount}, transaksi finansial ${r.financialAccount}, selisih ${r.discrepancy}.`} className="h-36 w-full rounded-lg bg-zinc-950 p-2">
        <line x1="120" x2="120" y1="6" y2="84" stroke="#71717a" />
        {[["Transaksi berjalan", r.currentAccount], ["Transaksi finansial", r.financialAccount], ["Selisih", r.discrepancy]].map(([label, value], i) => {
          const v = value as number;
          return (
            <g key={label as string}>
              <rect x={v >= 0 ? 120 : 120 - bar(v)} y={10 + i * 26} width={Math.max(bar(v), 1)} height="16" fill={v >= 0 ? "#34d399" : "#f87171"} />
              <text x="4" y={22 + i * 26} fill="#d4d4d8" fontSize="7">{label as string}</text>
              <text x="200" y={22 + i * 26} fill="#e4e4e7" fontSize="8">{v}</text>
            </g>
          );
        })}
      </svg>
      <div aria-live="polite" className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
        <p className="rounded bg-zinc-950 p-3">Ekspor neto = {r.netExports}; pendapatan primer neto = {r.netPrimaryIncome}</p>
        <p className="rounded bg-zinc-950 p-3">Transaksi berjalan = {r.netExports} + ({r.netPrimaryIncome}) + {values.tr} = <strong>{r.currentAccount}</strong></p>
        <p className="rounded bg-zinc-950 p-3">Transaksi finansial (modal masuk) = <strong>{r.financialAccount}</strong>; selisih = <strong>{r.discrepancy}</strong></p>
        <p className="rounded bg-zinc-950 p-3">PDB = {r.gdp}; tabungan nasional = {r.nationalSaving}; investasi = {r.investment}; S − I = <strong>{r.savingMinusInvestment}</strong> = NX</p>
      </div>
    </VisualCard>
  );
}