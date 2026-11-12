"use client";

import { useState } from "react";
import VisualCard from "@/components/visuals/VisualCard";

export interface DialogueTurn {
  speaker: string;
  line: string;
  options?: string[];
  answer?: number;
  explanation?: string;
}

interface DialogueChoiceProps {
  title: string;
  caption: string;
  turns: DialogueTurn[];
}

export default function DialogueChoice({ title, caption, turns }: DialogueChoiceProps) {
  const [turnIndex, setTurnIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<boolean | null>(null);
  const turn = turns[turnIndex];
  if (!turn) return null;
  const isChoice = Boolean(turn.options?.length);

  return (
    <VisualCard title={title} caption={caption} howToRead="Ikuti percakapan satu giliran demi satu giliran. Pada giliran pilihan, pilih respons yang paling wajar.">
      <div className="grid min-w-0 grid-cols-1 gap-3">
        <p className="text-sm text-zinc-400">Giliran {turnIndex + 1} dari {turns.length}</p>
        <div className="min-w-0 rounded-lg bg-zinc-950 p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-sky-300">{turn.speaker}</p>
          <p className="mt-1 break-words text-zinc-100">{turn.line}</p>
        </div>
        {checked !== null && selected !== null && turn.options?.[selected] && (
          <div className="min-w-0 rounded-lg border border-zinc-800 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-300">You</p>
            <p className="mt-1 break-words text-sm text-zinc-200">{turn.options[selected]}</p>
          </div>
        )}
        {isChoice && (
          <div className="grid min-w-0 grid-cols-1 gap-2">
            {turn.options?.map((option, index) => (
              <button key={`${option}:${index}`} type="button" aria-label={`Pilih respons ${option}`} aria-pressed={selected === index} disabled={checked !== null} onClick={() => setSelected(index)} className={`min-w-0 break-words rounded-md border px-3 py-2 text-left text-sm ${selected === index ? "border-sky-400 bg-sky-500/15" : "border-zinc-700"} disabled:opacity-70`}>
                {option}
              </button>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {isChoice && <button type="button" aria-label="Periksa respons" disabled={selected === null || checked !== null} onClick={() => setChecked(selected === turn.answer)} className="rounded-md bg-sky-600 px-3 py-2 text-sm disabled:opacity-50">Periksa</button>}
          <button type="button" aria-label="Lanjutkan percakapan" disabled={turnIndex >= turns.length - 1 || (isChoice && checked === null)} onClick={() => { setTurnIndex((current) => current + 1); setSelected(null); setChecked(null); }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm disabled:opacity-50">Berikutnya</button>
          <button type="button" aria-label="Ulangi percakapan" onClick={() => { setTurnIndex(0); setSelected(null); setChecked(null); }} className="rounded-md border border-zinc-700 px-3 py-2 text-sm">Ulang</button>
        </div>
        {checked !== null && <p role="status" className={`text-sm ${checked ? "text-emerald-300" : "text-amber-300"}`}>{checked ? "Respons wajar." : "Respons kurang wajar."} {turn.explanation}</p>}
      </div>
    </VisualCard>
  );
}
