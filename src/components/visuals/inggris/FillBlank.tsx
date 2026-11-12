"use client";

import { useState } from "react";
import VisualCard from "@/components/visuals/VisualCard";

export interface FillBlankItem {
  sentence: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface FillBlankProps {
  title: string;
  caption: string;
  items: FillBlankItem[];
}

export default function FillBlank({ title, caption, items }: FillBlankProps) {
  const [itemIndex, setItemIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [results, setResults] = useState<(boolean | null)[]>(items.map(() => null));
  const item = items[itemIndex];
  if (!item) return null;
  const score = results.filter(Boolean).length;

  return (
    <VisualCard title={title} caption={caption} howToRead="Pilih kata yang melengkapi kalimat, periksa jawaban, lalu lanjutkan ke soal berikutnya.">
      <div className="grid min-w-0 grid-cols-1 gap-3">
        <p className="text-sm text-zinc-400">Soal {itemIndex + 1} dari {items.length} · Skor {score}/{items.length}</p>
        <p className="break-words text-zinc-100">{selected === null ? item.sentence : item.sentence.replace("___", item.options[selected])}</p>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {item.options.map((option, index) => (
            <button key={`${option}:${index}`} type="button" aria-label={`Pilih jawaban ${option}`} aria-pressed={selected === index} disabled={checked !== null} onClick={() => setSelected(index)} className={`min-w-0 break-words rounded-md border px-3 py-2 text-left text-sm ${selected === index ? "border-sky-400 bg-sky-500/15" : "border-zinc-700"} disabled:opacity-70`}>
              {option}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" aria-label="Periksa jawaban" disabled={selected === null || checked !== null} onClick={() => {
            const correct = selected === item.answer;
            setChecked(correct);
            setResults((current) => current.map((result, index) => index === itemIndex ? correct : result));
          }} className="rounded-md bg-sky-600 px-3 py-2 text-sm disabled:opacity-50">Periksa</button>
          <button type="button" aria-label="Ulangi soal" onClick={() => {
            setSelected(null);
            setChecked(null);
            setResults((current) => current.map((result, index) => index === itemIndex ? null : result));
          }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm">Ulang</button>
          <button type="button" aria-label="Berikutnya" disabled={itemIndex >= items.length - 1} onClick={() => { setItemIndex((current) => current + 1); setSelected(null); setChecked(null); }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm disabled:opacity-50">Berikutnya</button>
        </div>
        {checked !== null && <p role="status" className={`text-sm ${checked ? "text-emerald-300" : "text-amber-300"}`}>{checked ? "Benar." : "Belum tepat."} {item.explanation}</p>}
      </div>
    </VisualCard>
  );
}
