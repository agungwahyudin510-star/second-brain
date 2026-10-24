"use client";

import { useState } from "react";
import VisualCard from "./VisualCard";

type CaseName = "mutual" | "absolute";

const cases = {
  mutual: {
    title: "Kasus 1 (saling unggul)",
    note: "A unggul absolut dalam beras, B unggul absolut dalam kopi.",
    rows: [
      { name: "A", rice: 12, coffee: 6, cost: "1 beras = 0,5 kopi; 1 kopi = 2 beras", advantage: "Beras" },
      { name: "B", rice: 8, coffee: 8, cost: "1 beras = 1 kopi; 1 kopi = 1 beras", advantage: "Kopi" },
    ],
    before: { rice: 10, coffee: 7 },
    after: { rice: 12, coffee: 8 },
    calculation: "Sebelum: A memakai setengah jam untuk tiap barang (6 beras + 3 kopi), B juga setengah jam (4 beras + 4 kopi), total 10 beras + 7 kopi. Sesudah: A fokus beras dan B fokus kopi, total 12 beras + 8 kopi.",
    explanation: "A memiliki biaya peluang beras lebih rendah (0,5 < 1), sedangkan B memiliki biaya peluang kopi lebih rendah (1 < 2).",
  },
  absolute: {
    title: "Kasus 2 (satu pihak unggul di semua)",
    note: "Citra menghasilkan lebih banyak daripada Dedi pada kedua barang, tetapi biaya peluang relatif mereka berbeda.",
    rows: [
      { name: "Citra", rice: 20, coffee: 10, cost: "1 beras = 0,5 kopi; 1 kopi = 2 beras", advantage: "Beras" },
      { name: "Dedi", rice: 6, coffee: 6, cost: "1 beras = 1 kopi; 1 kopi = 1 beras", advantage: "Kopi" },
    ],
    before: { rice: 13, coffee: 8 },
    after: { rice: 16, coffee: 8 },
    calculation: "Sebelum: Citra membagi jam menjadi 0,5 + 0,5 (10 beras + 5 kopi); Dedi juga membagi jam (3 beras + 3 kopi); total 13 beras + 8 kopi. Sesudah: Citra memakai 0,8 jam untuk beras (16) dan 0,2 jam untuk kopi (2); Dedi memakai satu jam penuh untuk kopi (6); total 16 beras + 8 kopi.",
    explanation: "Citra memiliki keunggulan absolut pada keduanya, tetapi comparative advantage Citra tetap pada beras (0,5 < 1), sedangkan Dedi pada kopi (1 < 2). Citra tidak perlu berspesialisasi penuh karena ia juga paling efisien membuat kopi; 0,2 jam kopi Citra menjaga total kopi tetap 8, sementara pergeseran sisa waktunya ke beras menambah tiga beras.",
  },
} satisfies Record<CaseName, {
  title: string;
  note: string;
  rows: { name: string; rice: number; coffee: number; cost: string; advantage: string }[];
  before: { rice: number; coffee: number };
  after: { rice: number; coffee: number };
  calculation: string;
  explanation: string;
}>;

export default function EkoComparative() {
  const [caseName, setCaseName] = useState<CaseName>("mutual");
  const current = cases[caseName];
  const maxOutput = Math.max(current.before.rice, current.before.coffee, current.after.rice, current.after.coffee);

  return (
    <VisualCard
      title="Keunggulan komparatif dan spesialisasi"
      caption="Kapasitas per jam dan total output pada dua kasus ini adalah ilustrasi hipotetis, bukan data produktivitas riil."
      howToRead="Biaya peluang menunjukkan keluaran yang dikorbankan untuk menghasilkan barang lain. Bandingkan biaya relatif, lalu gunakan tombol kasus untuk membandingkan total sebelum dan sesudah spesialisasi."
    >
      <div className="grid gap-2 sm:grid-cols-2">
        {(["mutual", "absolute"] as const).map((name) => (
          <button key={name} type="button" aria-pressed={caseName === name} onClick={() => setCaseName(name)} className={`min-h-11 rounded-lg border px-3 text-sm ${caseName === name ? "border-sky-400 bg-sky-500/10 text-white" : "border-zinc-700 text-zinc-300"}`}>
            {cases[name].title}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="text-sm text-zinc-300">{current.note}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
          <caption className="sr-only">Perbandingan kapasitas produksi dan biaya peluang per jam</caption>
          <thead><tr className="border-b border-zinc-700 text-zinc-400">
            <th className="p-2">Produsen</th><th className="p-2">Beras/jam</th><th className="p-2">Kopi/jam</th><th className="p-2">Biaya peluang</th><th className="p-2">Keunggulan komparatif</th>
          </tr></thead>
          <tbody>{current.rows.map((row) => (
            <tr key={row.name} className="border-b border-zinc-800">
              <th className="p-2 font-medium">{row.name}</th><td className="p-2">{row.rice}</td><td className="p-2">{row.coffee}</td><td className="p-2">{row.cost}</td><td className="p-2 text-emerald-300">{row.advantage}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="space-y-3" role="img" aria-label={`${current.title}. Total sebelum spesialisasi: ${current.before.rice} beras dan ${current.before.coffee} kopi. Sesudah: ${current.after.rice} beras dan ${current.after.coffee} kopi.`}>
        {[
          { label: "Beras", before: current.before.rice, after: current.after.rice, color: "#34d399" },
          { label: "Kopi", before: current.before.coffee, after: current.after.coffee, color: "#38bdf8" },
        ].map((item) => (
          <div key={item.label}>
            <p className="mb-1 text-xs text-zinc-300">{item.label}: sebelum {item.before}, sesudah {item.after} unit</p>
            <div className="grid grid-cols-2 gap-2">
              {[["Sebelum", item.before], ["Sesudah", item.after]].map(([label, value]) => (
                <div key={String(label)} className="h-6 rounded bg-zinc-800" aria-label={`${String(label)} ${item.label}: ${value} unit`}>
                  <div className="h-full rounded" style={{ width: `${(Number(value) / maxOutput) * 100}%`, backgroundColor: item.color }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-zinc-300">{current.calculation}</p>
      <p className="text-sm leading-relaxed text-emerald-200">{current.explanation}</p>
    </VisualCard>
  );
}
