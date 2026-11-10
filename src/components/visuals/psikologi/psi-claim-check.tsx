"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { claimScore } from "./psych-math";

const claims = [
  {
    title: "Suplemen fokus",
    claim: "Membantu setiap orang fokus lebih lama.",
    source: "Satu penjual; sumber dapat ditelusuri",
    sample: "n=12, tanpa kelompok kontrol",
    criteria: [true, false, false, false, false],
  },
  {
    title: "Aplikasi investasi",
    claim: "Pengguna selalu memperoleh hasil lebih baik.",
    source: "Promosi aplikasi; tautan sumber terbatas",
    sample: "Jumlah dan pemilihan pengguna tidak dijelaskan",
    criteria: [false, false, false, false, false],
  },
  {
    title: "Metode belajar 10x",
    claim: "Metode ini membuat belajar sepuluh kali lebih efektif.",
    source: "Video testimoni tanpa laporan metode",
    sample: "Beberapa contoh terpilih; pembanding tidak ada",
    criteria: [true, false, false, false, false],
  },
];

const criteriaLabels = [
  "Sumber dapat ditelusuri",
  "Sampel memadai",
  "Ada pembanding",
  "Replikasi / pihak independen",
  "Tidak ada konflik kepentingan",
];

const statements = [
  "Log aplikasi mencatat 12 sesi belajar minggu ini.",
  "Dua belas sesi membuktikan metode aplikasi efektif.",
  "Semua sesi dicatat dengan aturan yang sama.",
  "Tampilan aplikasi ini nyaman digunakan.",
];
const categories = ["Fakta", "Interpretasi", "Asumsi", "Opini"];

export default function PsiClaimCheck() {
  const [selectedClaim, setSelectedClaim] = useState(0);
  const [selectedCriteria, setSelectedCriteria] = useState(claims[0].criteria);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null, null]);
  const score = claimScore(selectedCriteria);

  function chooseClaim(index: number) {
    setSelectedClaim(index);
    setSelectedCriteria(claims[index].criteria);
  }

  return (
    <VisualCard
      title="Pemeriksa klaim dan jenis pernyataan"
      caption="Semua klaim, sumber, dan sampel dalam latihan ini hipotetis. Skor adalah daftar periksa belajar, bukan probabilitas kebenaran."
      howToRead="Pilih klaim dan tandai kriteria yang didukung informasi yang tersedia. Lalu klasifikasikan setiap pernyataan; skor klasifikasi hanya menghitung jawaban yang cocok."
    >
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3">
        {claims.map((claim, index) => (
          <button
            key={claim.title}
            type="button"
            aria-pressed={selectedClaim === index}
            onClick={() => chooseClaim(index)}
            className={`min-h-11 min-w-0 break-words rounded-lg border px-3 py-2 text-left text-sm ${selectedClaim === index ? "border-sky-400 bg-sky-500/15 text-sky-100" : "border-zinc-700 text-zinc-300"}`}
          >
            {claim.title}
          </button>
        ))}
      </div>
      <div className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm">
        <p className="font-medium text-zinc-100">Klaim: {claims[selectedClaim].claim}</p>
        <p className="mt-1 text-zinc-300">Sumber: {claims[selectedClaim].source}</p>
        <p className="mt-1 text-zinc-300">Sampel / rancangan: {claims[selectedClaim].sample}</p>
      </div>
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm text-zinc-200">Bukti yang tersedia untuk klaim ini</legend>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {criteriaLabels.map((label, index) => (
            <label key={label} className="flex min-w-0 items-start gap-2 rounded-lg bg-zinc-950 p-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                aria-label={label}
                checked={selectedCriteria[index]}
                onChange={(event) => setSelectedCriteria((current) => current.map((value, i) => i === index ? event.target.checked : value))}
                className="mt-1 accent-sky-400"
              />
              <span className="break-words">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-amber-200">
        Skor latihan: {score}/5 — {score < 5 ? "perlu bukti tambahan" : "semua kriteria tampak terpenuhi; tetap periksa mutu bukti"}
      </p>
      <fieldset className="min-w-0 space-y-3">
        <legend className="mb-2 text-sm text-zinc-200">Klasifikasikan pernyataan</legend>
        {statements.map((statement, index) => (
          <div key={statement} className="min-w-0 rounded-lg bg-zinc-950 p-3">
            <p className="break-words text-sm text-zinc-300">{statement}</p>
            <label className="mt-2 block text-sm text-zinc-300">
              Kategori pernyataan {index + 1}
              <select
                aria-label={`Kategori pernyataan ${index + 1}`}
                value={answers[index] ?? ""}
                onChange={(event) => setAnswers((current) => current.map((value, i) => i === index ? (event.target.value === "" ? null : Number(event.target.value)) : value))}
                className="mt-1 block min-h-10 w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 px-2"
              >
                <option value="">Pilih kategori</option>
                {categories.map((category, categoryIndex) => <option key={category} value={categoryIndex}>{category}</option>)}
              </select>
            </label>
          </div>
        ))}
      </fieldset>
      <p aria-live="polite" className="text-sm text-sky-200">Skor klasifikasi: {answers.reduce<number>((total, answer, index) => total + (answer === index ? 1 : 0), 0)}/4</p>
    </VisualCard>
  );
}
