"use client";

import { useEffect, useState } from "react";
import VisualCard from "@/components/visuals/VisualCard";

export interface ListenChooseItem {
  text: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface ListenChooseProps {
  title: string;
  caption: string;
  items: ListenChooseItem[];
}

export default function ListenChoose({ title, caption, items }: ListenChooseProps) {
  const [itemIndex, setItemIndex] = useState(0);
  const [rate, setRate] = useState(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [audioUnavailable, setAudioUnavailable] = useState(false);
  const item = items[itemIndex];
  useEffect(() => () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);
  if (!item) return null;

  const play = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      setAudioUnavailable(true);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    utterance.onerror = () => setAudioUnavailable(true);
    window.speechSynthesis.speak(utterance);
    setAudioUnavailable(false);
  };

  return (
    <VisualCard title={title} caption={caption} howToRead="Putar audio, pilih jawaban yang sesuai, lalu periksa alasan jawaban.">
      <div className="grid min-w-0 grid-cols-1 gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" aria-label="Putar kalimat bahasa Inggris" onClick={play} className="rounded-md bg-sky-600 px-3 py-2 text-sm">Putar</button>
          <label className="flex items-center gap-2 text-sm">
            Kecepatan
            <select aria-label="Kecepatan pemutaran audio" value={rate} onChange={(event) => setRate(Number(event.target.value))} className="min-h-10 rounded-md border border-zinc-700 bg-zinc-950 px-2">
              <option value={0.8}>0,8</option>
              <option value={1}>1,0</option>
            </select>
          </label>
        </div>
        {audioUnavailable && <p role="status" className="text-sm text-amber-300">audio tidak tersedia di perangkat ini. Teks: “{item.text}”</p>}
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {item.options.map((option, index) => (
            <button key={`${option}:${index}`} type="button" aria-label={`Pilih jawaban ${option}`} aria-pressed={selected === index} disabled={checked !== null} onClick={() => setSelected(index)} className={`min-w-0 break-words rounded-md border px-3 py-2 text-left text-sm ${selected === index ? "border-sky-400 bg-sky-500/15" : "border-zinc-700"} disabled:opacity-70`}>
              {option}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" aria-label="Periksa jawaban audio" disabled={selected === null || checked !== null} onClick={() => setChecked(selected === item.answer)} className="rounded-md bg-sky-600 px-3 py-2 text-sm disabled:opacity-50">Periksa</button>
          <button type="button" aria-label="Berikutnya" disabled={itemIndex >= items.length - 1} onClick={() => { setItemIndex((current) => current + 1); setSelected(null); setChecked(null); setAudioUnavailable(false); }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm disabled:opacity-50">Berikutnya</button>
        </div>
        {checked !== null && <p role="status" className={`text-sm ${checked ? "text-emerald-300" : "text-amber-300"}`}>{checked ? "Benar." : "Belum tepat."} {item.explanation}</p>}
      </div>
    </VisualCard>
  );
}
