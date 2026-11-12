"use client";

import { useState } from "react";
import VisualCard from "@/components/visuals/VisualCard";

export interface SentenceBuilderItem {
  prompt: string;
  tiles: string[];
  answer: string;
  explanation: string;
}

interface SentenceBuilderProps {
  title: string;
  caption: string;
  items: SentenceBuilderItem[];
}

function stableShuffle(tiles: string[], seed: string) {
  const hash = (value: string) => value.split("").reduce((total, char) => (total * 31 + char.charCodeAt(0)) >>> 0, 7);
  return tiles
    .map((tile, index) => ({ tile, index, key: `${seed}:${tile}:${index}` }))
    .sort((a, b) => {
      return hash(a.key) - hash(b.key) || a.index - b.index;
    })
    .map(({ tile }) => tile);
}

export default function SentenceBuilder({ title, caption, items }: SentenceBuilderProps) {
  const [itemIndex, setItemIndex] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const item = items[itemIndex];
  if (!item) return null;

  const shuffled = stableShuffle(item.tiles, item.prompt);
  const sentence = selected.map((index) => shuffled[index]).join(" ");
  const checkAnswer = () => {
    setChecked(sentence.trim().replace(/\s+/g, " ").toLowerCase() === item.answer.trim().replace(/\s+/g, " ").toLowerCase());
  };

  return (
    <VisualCard title={title} caption={caption} howToRead="Pilih ubin dalam urutan yang membentuk kalimat. Ubin yang sudah dipilih dapat diketuk lagi untuk menghapusnya.">
      <div className="grid min-w-0 grid-cols-1 gap-3">
        <p className="text-sm text-zinc-300">Kalimatkan: {item.prompt}</p>
        <div className="flex min-h-12 min-w-0 flex-wrap gap-2 rounded-lg bg-zinc-950 p-3" aria-label="Susunan kalimat">
          {selected.map((tileIndex) => (
            <button key={tileIndex} type="button" aria-label={`Hapus ubin ${shuffled[tileIndex]}`} onClick={() => {
              if (checked === null) setSelected((current) => current.filter((value) => value !== tileIndex));
            }} className="max-w-full break-words rounded-md bg-sky-500/20 px-3 py-2 text-left text-sm text-sky-100">
              {shuffled[tileIndex]}
            </button>
          ))}
        </div>
        <div className="flex min-w-0 flex-wrap gap-2">
          {shuffled.map((tile, tileIndex) => (
            <button key={`${tile}:${tileIndex}`} type="button" aria-label={`Pilih ubin ${tile}`} disabled={selected.includes(tileIndex) || checked !== null} onClick={() => setSelected((current) => [...current, tileIndex])} className="max-w-full break-words rounded-md border border-zinc-700 px-3 py-2 text-left text-sm disabled:opacity-40">
              {tile}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" aria-label="Periksa kalimat" onClick={checkAnswer} disabled={checked !== null || selected.length === 0} className="rounded-md bg-sky-600 px-3 py-2 text-sm disabled:opacity-50">Periksa</button>
          <button type="button" aria-label="Ulangi kalimat" onClick={() => { setSelected([]); setChecked(null); }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm">Ulang</button>
          <button type="button" aria-label="Berikutnya" disabled={itemIndex >= items.length - 1} onClick={() => { setItemIndex((current) => current + 1); setSelected([]); setChecked(null); }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm disabled:opacity-50">Berikutnya</button>
        </div>
        {checked !== null && <p role="status" className={`text-sm ${checked ? "text-emerald-300" : "text-amber-300"}`}>{checked ? "Benar." : "Belum tepat."} {item.explanation}</p>}
      </div>
    </VisualCard>
  );
}
