import VisualCard from "./VisualCard";

const totals = [
  { good: "Beras", before: 10, after: 12, color: "#34d399" },
  { good: "Kopi", before: 7, after: 8, color: "#38bdf8" },
];

export default function EkoComparative() {
  return (
    <VisualCard
      title="Keunggulan komparatif dan spesialisasi"
      caption="Dua produsen dan dua barang ini fiktif. Angka menunjukkan kapasitas satu jam, tanpa klaim produktivitas riil."
      howToRead="A menghasilkan beras dengan biaya peluang kopi lebih rendah; B memiliki biaya peluang beras lebih rendah. Batang membandingkan total contoh saat keduanya membagi waktu dengan hasil saat berspesialisasi."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <caption className="sr-only">Output hipotetis per jam untuk dua produsen</caption>
          <thead><tr className="border-b border-zinc-700 text-zinc-400"><th className="p-2">Produsen fiktif</th><th className="p-2">Beras/jam</th><th className="p-2">Kopi/jam</th><th className="p-2">Keunggulan komparatif</th></tr></thead>
          <tbody>
            <tr className="border-b border-zinc-800"><th className="p-2 font-medium">A</th><td className="p-2">12</td><td className="p-2">6</td><td className="p-2 text-emerald-300">Beras</td></tr>
            <tr><th className="p-2 font-medium">B</th><td className="p-2">8</td><td className="p-2">8</td><td className="p-2 text-sky-300">Kopi</td></tr>
          </tbody>
        </table>
      </div>
      <div className="space-y-3" role="img" aria-label="Perbandingan output total: sebelum spesialisasi 10 beras dan 7 kopi; sesudah spesialisasi 12 beras dan 8 kopi.">
        {totals.map((item) => (
          <div key={item.good}>
            <p className="mb-1 text-xs text-zinc-300">{item.good} • sebelum {item.before}, sesudah {item.after} unit</p>
            <div className="grid grid-cols-2 gap-2">
              {[["Sebelum", item.before], ["Sesudah", item.after]].map(([label, value]) => (
                <div key={String(label)} className="h-6 rounded bg-zinc-800"><div className="flex h-full items-center rounded px-2 text-xs" style={{ width: `${Number(value) * 7}%`, backgroundColor: item.color }}>{label}: {value}</div></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-zinc-300">Sebelum: A menghasilkan 6 beras + 3 kopi, B 4 beras + 4 kopi. Setelah spesialisasi penuh: A 12 beras dan B 8 kopi. Perdagangan dengan rasio yang disepakati dapat memberi keduanya kombinasi konsumsi lebih baik; distribusi manfaatnya bergantung syarat pertukaran.</p>
    </VisualCard>
  );
}
