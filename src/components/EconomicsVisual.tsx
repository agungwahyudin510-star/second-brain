"use client";

import { useState } from "react";
import { Card, inputCls } from "@/components/ui";

const rupiah = (amount: number) => new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
}).format(amount);

function NumberControl({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  suffix?: string;
}) {
  return (
    <label className="block text-sm text-zinc-400">
      {label} <span className="text-zinc-600">({value}{suffix})</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 block w-full accent-sky-400"
      />
    </label>
  );
}

export default function EconomicsVisual({ moduleId }: { moduleId: string }) {
  const [demandShift, setDemandShift] = useState(0);
  const [supplyShift, setSupplyShift] = useState(0);
  const [income, setIncome] = useState(6_000_000);
  const [expenses, setExpenses] = useState(4_500_000);
  const [principal, setPrincipal] = useState(50_000_000);
  const [annualRate, setAnnualRate] = useState(12);
  const [loanYears, setLoanYears] = useState(5);
  const [monthlySaving, setMonthlySaving] = useState(500_000);
  const [annualReturn, setAnnualReturn] = useState(5);
  const [years, setYears] = useState(10);
  const [inflation, setInflation] = useState(4);

  if (moduleId === "eko-bab-1") {
    return (
      <Card className="border-sky-500/20">
        <h2 className="font-semibold">Peta konsep: keputusan ekonomi</h2>
        <p className="mt-1 text-xs text-zinc-500">Diagram konseptual • urutan hubungan dasar</p>
        <div className="mt-4 grid gap-2 text-center text-sm sm:grid-cols-5 sm:items-center">
          {["Sumber daya terbatas", "Pilihan", "Trade-off", "Biaya peluang", "Keputusan + tinjauan"].map((step, index) => (
            <div key={step} className="contents">
              <div className="rounded-lg border border-zinc-700 bg-zinc-950 p-3">{step}</div>
              {index < 4 && <span aria-hidden="true" className="text-sky-400 sm:hidden">↓</span>}
              {index < 4 && <span aria-hidden="true" className="hidden text-sky-400 sm:block">→</span>}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">Setiap pilihan menggunakan sumber daya dan melepas alternatif. Evaluasi kembali saat informasi baru mengubah manfaat atau risiko ke depan.</p>
      </Card>
    );
  }

  if (moduleId === "eko-bab-2") {
    const demandStart = 15 + demandShift;
    const supplyStart = 15 + supplyShift;
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div>
          <h2 className="font-semibold">Simulasi kurva pasar</h2>
          <p className="text-xs text-zinc-500">Model konseptual, bukan data harga aktual. Geser kurva untuk melihat perubahan.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberControl label="Pergeseran permintaan" value={demandShift} min={-20} max={20} onChange={setDemandShift} suffix=" unit" />
          <NumberControl label="Pergeseran penawaran" value={supplyShift} min={-20} max={20} onChange={setSupplyShift} suffix=" unit" />
        </div>
        <svg viewBox="0 0 240 150" role="img" aria-label={`Grafik konsep: kurva permintaan bergeser ${demandShift} dan penawaran ${supplyShift} unit. Perpotongan kurva menunjukkan keseimbangan konseptual.`} className="h-48 w-full rounded-lg bg-zinc-950 p-2">
          <path d="M30 12V125H225" fill="none" stroke="#71717a" strokeWidth="1" />
          <text x="8" y="18" fill="#a1a1aa" fontSize="9">Harga</text>
          <text x="188" y="143" fill="#a1a1aa" fontSize="9">Kuantitas</text>
          <path d={`M${demandStart} 22L${Math.min(200, demandStart + 85)} 112`} fill="none" stroke="#38bdf8" strokeWidth="3" />
          <path d={`M${supplyStart} 112L${Math.min(200, supplyStart + 85)} 22`} fill="none" stroke="#34d399" strokeWidth="3" />
          <text x="178" y="35" fill="#38bdf8" fontSize="10">Permintaan</text>
          <text x="178" y="54" fill="#34d399" fontSize="10">Penawaran</text>
        </svg>
        <p className="text-xs text-zinc-500">Sumbu harga vertikal dan kuantitas horizontal. Titik keseimbangan berada di perpotongan; perubahan faktor lain menggeser kurva.</p>
      </Card>
    );
  }

  if (moduleId === "eko-bab-3") {
    const remainder = income - expenses;
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Simulasi arus kas bulanan</h2><p className="text-xs text-zinc-500">Angka sepenuhnya hipotetis.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberControl label="Pendapatan bersih" value={income / 100_000} min={10} max={200} step={5} onChange={(v) => setIncome(v * 100_000)} suffix=" × Rp100 ribu" />
          <NumberControl label="Pengeluaran" value={expenses / 100_000} min={10} max={200} step={5} onChange={(v) => setExpenses(v * 100_000)} suffix=" × Rp100 ribu" />
        </div>
        <div className="space-y-3" aria-label="Visualisasi perbandingan arus kas">
          {[["Pendapatan", income, "bg-sky-400"], ["Pengeluaran", expenses, "bg-amber-400"]].map(([label, value, color]) => (
            <div key={String(label)}>
              <div className="mb-1 flex justify-between text-xs text-zinc-400"><span>{label}</span><span>{rupiah(Number(value))}</span></div>
              <div className="h-3 rounded-full bg-zinc-800"><div className={`h-3 rounded-full ${color}`} style={{ width: `${Math.min(100, (Number(value) / Math.max(income, expenses, 1)) * 100)}%` }} /></div>
            </div>
          ))}
        </div>
        <p className={remainder >= 0 ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>{remainder >= 0 ? "Surplus" : "Defisit"}: {rupiah(Math.abs(remainder))} per bulan.</p>
      </Card>
    );
  }

  if (moduleId === "eko-bab-4") {
    const months = loanYears * 12;
    const monthlyRate = annualRate / 100 / 12;
    const payment = monthlyRate === 0
      ? principal / months
      : principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Kalkulator cicilan ilustratif</h2><p className="text-xs text-zinc-500">Simulasi anuitas sederhana; belum memasukkan biaya, pajak, asuransi, atau perubahan suku bunga.</p></div>
        <label className="block text-sm text-zinc-400">Pokok pinjaman <span className="text-zinc-600">{rupiah(principal)}</span><input className={`${inputCls} mt-1`} type="number" min={1_000_000} max={500_000_000} step={1_000_000} value={principal} onChange={(e) => setPrincipal(Math.max(1_000_000, Math.min(500_000_000, Number(e.target.value) || 1_000_000)))} /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberControl label="Bunga tahunan" value={annualRate} min={0} max={36} onChange={setAnnualRate} suffix="%" />
          <NumberControl label="Tenor" value={loanYears} min={1} max={30} onChange={setLoanYears} suffix=" tahun" />
        </div>
        <div className="rounded-lg bg-zinc-950 p-4 text-sm"><p>Estimasi cicilan: <strong>{rupiah(payment)}</strong> / bulan</p><p className="mt-1 text-zinc-400">Total anuitas: {rupiah(payment * months)} ({months} bulan), sebelum biaya lainnya.</p></div>
      </Card>
    );
  }

  if (moduleId === "eko-bab-5") {
    const futureCost = 1_000_000 * Math.pow(1 + inflation / 100, years);
    const realValue = 1_000_000 / Math.pow(1 + inflation / 100, years);
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Simulasi daya beli</h2><p className="text-xs text-zinc-500">Asumsi inflasi tetap; contoh hipotetis, bukan ramalan.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberControl label="Inflasi rata-rata" value={inflation} min={0} max={20} onChange={setInflation} suffix="%" />
          <NumberControl label="Horizon" value={years} min={1} max={40} onChange={setYears} suffix=" tahun" />
        </div>
        <div className="rounded-lg bg-zinc-950 p-4 text-sm"><p>Barang seharga Rp1.000.000 kini akan berharga sekitar <strong>{rupiah(futureCost)}</strong> pada asumsi tersebut.</p><p className="mt-1 text-zinc-400">Rp1.000.000 di masa depan setara daya beli sekitar {rupiah(realValue)} hari ini.</p></div>
      </Card>
    );
  }

  if (moduleId === "eko-bab-7") {
    const months = years * 12;
    const monthlyRate = annualReturn / 100 / 12;
    const initial = 1_000_000;
    const futureInitial = initial * Math.pow(1 + monthlyRate, months);
    const futureContributions = monthlyRate === 0
      ? monthlySaving * months
      : monthlySaving * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    const totalContribution = initial + monthlySaving * months;
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Simulasi pertumbuhan majemuk</h2><p className="text-xs text-zinc-500">Asumsi return bulanan tetap; tidak mencerminkan volatilitas, pajak, atau biaya. Bukan janji hasil.</p></div>
        <div className="grid gap-4 sm:grid-cols-3">
          <NumberControl label="Setoran bulanan" value={monthlySaving / 100_000} min={0} max={100} step={1} onChange={(v) => setMonthlySaving(v * 100_000)} suffix=" × Rp100 ribu" />
          <NumberControl label="Asumsi return" value={annualReturn} min={0} max={20} onChange={setAnnualReturn} suffix="%/tahun" />
          <NumberControl label="Horizon" value={years} min={1} max={40} onChange={setYears} suffix=" tahun" />
        </div>
        <div className="rounded-lg bg-zinc-950 p-4 text-sm"><p>Total setoran: {rupiah(totalContribution)}</p><p className="mt-1">Nilai model: <strong>{rupiah(futureInitial + futureContributions)}</strong></p></div>
      </Card>
    );
  }

  return null;
}
