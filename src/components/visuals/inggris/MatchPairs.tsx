"use client";

import { useState } from "react";
import VisualCard from "@/components/visuals/VisualCard";

export interface MatchPair {
  left: string;
  right: string;
}

interface MatchPairsProps {
  title: string;
  caption: string;
  pairs: MatchPair[];
}

function stableOrder(pairs: MatchPair[]) {
  const hash = (value: string) => value.split("").reduce((total, char) => (total * 31 + char.charCodeAt(0)) >>> 0, 7);
  return pairs
    .map((pair, index) => ({ pair, index }))
    .sort((a, b) => hash(a.pair.right) - hash(b.pair.right) || a.index - b.index);
}

export default function MatchPairs({ title, caption, pairs }: MatchPairsProps) {
  const [leftChoice, setLeftChoice] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [message, setMessage] = useState("");
  const rightOptions = stableOrder(pairs);

  return (
    <VisualCard title={title} caption={caption} howToRead="Ketuk satu istilah di kiri, lalu pasangan artinya di kanan. Pasangan yang benar akan ditandai.">
      <div className="grid min-w-0 grid-cols-1 gap-3">
        <p className="text-sm text-zinc-400">Pasangan benar: {matched.length}/{pairs.length}</p>
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="grid min-w-0 grid-cols-1 gap-2" aria-label="Pilihan kiri">
            {rightOptions.map(({ pair, index }) => (
              <button key={`left-${index}`} type="button" aria-label={`Pilih ${pair.left}`} aria-pressed={leftChoice === index} disabled={matched.includes(index)} onClick={() => { setLeftChoice(index); setMessage(""); }} className={`min-w-0 break-words rounded-md border px-3 py-2 text-left text-sm ${leftChoice === index ? "border-sky-400 bg-sky-500/15" : "border-zinc-700"} disabled:border-emerald-500/50 disabled:text-emerald-300`}>
                {pair.left}
              </button>
            ))}
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-2" aria-label="Pilihan kanan">
            {pairs.map((pair, index) => (
              <button key={`right-${index}`} type="button" aria-label={`Cocokkan dengan ${pair.right}`} disabled={leftChoice === null || matched.includes(index)} onClick={() => {
                if (leftChoice === index) {
                  setMatched((current) => [...current, index]);
                  setMessage("Pasangan benar.");
                } else {
                  setMessage("Belum cocok. Coba lagi.");
                }
                setLeftChoice(null);
              }} className="min-w-0 break-words rounded-md border border-zinc-700 px-3 py-2 text-left text-sm disabled:opacity-50">
                {pair.right}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" aria-label="Ulangi mencocokkan pasangan" onClick={() => { setLeftChoice(null); setMatched([]); setMessage(""); }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm">Ulang</button>
          {message && <p role="status" className="text-sm text-zinc-300">{message}</p>}
        </div>
      </div>
    </VisualCard>
  );
}
