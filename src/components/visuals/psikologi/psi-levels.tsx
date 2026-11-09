"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";

const situations = {
  "Menunda belajar": {
    behavior: "Menunda belajar",
    biological: ["Apakah lelah atau waktu tidur berkaitan dengan waktu mulai?", "Catatan waktu dan laporan kondisi sukarela.", "Kondisi tubuh yang sama dapat memengaruhi orang berbeda."],
    psychological: ["Bagaimana siswa menilai kesulitan dan langkah pertama?", "Laporan interpretasi, tujuan, dan urutan tindakan.", "Laporan diri dapat tidak lengkap."],
    sociocultural: ["Apakah ruang, jadwal, atau tuntutan keluarga memengaruhi sesi?", "Jadwal, gangguan, sumber daya, dan konteks belajar.", "Konteks yang tercatat belum mencakup semua norma."],
  },
  "Marah saat dikritik": {
    behavior: "Marah saat dikritik",
    biological: ["Apakah kondisi fisik saat itu berkaitan dengan respons?", "Waktu, situasi, dan laporan kondisi yang relevan.", "Tidak menjelaskan makna kritik bagi orang tersebut."],
    psychological: ["Bagaimana kritik ditafsirkan dan emosi dikenali?", "Kata-kata kritik, interpretasi, dan respons berikutnya.", "Interpretasi yang diingat dapat berubah."],
    sociocultural: ["Bagaimana hubungan dan norma kelompok membentuk situasi?", "Siapa yang memberi kritik, tempat, dan aturan interaksi.", "Satu kejadian tidak mewakili budaya."],
  },
  "Panik jual aset": {
    behavior: "Panik jual aset",
    biological: ["Apakah kelelahan atau tekanan waktu hadir saat keputusan?", "Konteks waktu dan laporan kondisi secara sukarela.", "Tidak bisa menyimpulkan keadaan dari transaksi saja."],
    psychological: ["Risiko dan perubahan harga apa yang diperhatikan?", "Catatan keputusan, tujuan, dan informasi yang dilihat.", "Ingatan setelah kejadian bisa bias."],
    sociocultural: ["Apakah obrolan komunitas atau aturan platform memengaruhi pilihan?", "Paparan informasi, konteks komunitas, dan kendala transaksi.", "Korelasi paparan komunitas bukan bukti sebab."],
  },
} as const;

const levels = ["biological", "psychological", "sociocultural"] as const;
const labels = { biological: "Biologis", psychological: "Psikologis", sociocultural: "Sosial-budaya" } as const;

export default function PsiLevels() {
  const [behavior, setBehavior] = useState<keyof typeof situations>("Menunda belajar");
  const [selected, setSelected] = useState<string[]>(["biological"]);
  const data = situations[behavior];
  const toggle = (level: string) => setSelected((current) => current.includes(level) ? current.filter((item) => item !== level) : [...current, level]);

  return (
    <VisualCard title="Tiga tingkat penjelasan" caption="Skenario dan pertanyaan berikut adalah contoh edukatif untuk mengarahkan pengamatan." howToRead="Pilih satu perilaku, lalu aktifkan beberapa tingkat. Banyak tingkat yang dipertimbangkan bukan bukti bahwa penjelasan tertentu benar.">
      <label className="block text-sm text-zinc-300">Perilaku
        <select aria-label="Pilih perilaku untuk dianalisis" value={behavior} onChange={(event) => setBehavior(event.target.value as keyof typeof situations)} className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {Object.keys(situations).map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <div className="flex flex-wrap gap-2">
        {levels.map((level) => <button type="button" key={level} aria-pressed={selected.includes(level)} onClick={() => toggle(level)} className={`min-h-10 rounded-lg border px-3 py-2 text-sm ${selected.includes(level) ? "border-sky-400 bg-sky-500/15 text-sky-200" : "border-zinc-700 text-zinc-300"}`}>{labels[level]}</button>)}
      </div>
      <p aria-live="polite" className={`text-sm ${selected.length === 1 ? "text-amber-200" : "text-zinc-300"}`}>Tingkat dipertimbangkan: {selected.length}/3{selected.length === 1 ? " — periksa apakah tingkat lain juga relevan." : ""}</p>
      {levels.filter((level) => selected.includes(level)).map((level) => {
        const [question, evidence, limit] = data[level];
        return <section key={level} className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-sm"><h3 className="font-medium text-sky-200">{labels[level]}</h3><p className="mt-2"><strong>Pertanyaan:</strong> {question}</p><p className="mt-1"><strong>Data:</strong> {evidence}</p><p className="mt-1 text-zinc-400"><strong>Batas:</strong> {limit}</p></section>;
      })}
    </VisualCard>
  );
}
