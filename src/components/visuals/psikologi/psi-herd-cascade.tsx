"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { cascade } from "./psych-math";

const initialSignals: ("A" | "B")[] = ["A", "A", "B", "B", "B"];

export default function PsiHerdCascade() {
  const [signals, setSignals] = useState(initialSignals);
  const result = cascade(signals);

  return (
    <VisualCard
      title="Sinyal privat dan kaskade"
      caption="Kaskade lima orang adalah model ilustratif dengan asumsi keputusan sebelumnya terlihat, tetapi sinyal privat tidak."
      howToRead="Atur sinyal A/B tiap orang. Orang memakai sinyal sendiri saat suara keputusan sebelumnya seri; jika sudah ada mayoritas, model mengikuti mayoritas."
    >
      <ol className="grid min-w-0 grid-cols-1 gap-2">
        {signals.map((signal, index) => {
          const ignored = result.ignored[index];
          return (
            <li key={index} className="grid min-w-0 grid-cols-1 items-center gap-2 rounded-lg bg-zinc-950 p-3 sm:grid-cols-[1fr_auto]">
              <div className="min-w-0 break-words text-sm text-zinc-200">
                Orang {index + 1}: sinyal privat {signal}; keputusan {result.decisions[index]}.
                {ignored ? <span className="ml-1 text-amber-200">Kaskade: sinyal privat tak diikuti</span> : <span className="ml-1 text-emerald-200">Sinyal privat searah keputusan</span>}
              </div>
              <select aria-label={`Sinyal privat orang ${index + 1}`} value={signal} onChange={(event) => setSignals((current) => current.map((value, itemIndex) => itemIndex === index ? (event.target.value === "A" ? "A" : "B") : value))} className="min-h-10 min-w-0 rounded border border-zinc-700 bg-zinc-900 px-2 text-sm text-zinc-100">
                <option value="A">Sinyal A</option>
                <option value="B">Sinyal B</option>
              </select>
            </li>
          );
        })}
      </ol>
      <div aria-live="polite" className="break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">
        Keputusan: {result.decisions.join(", ")} · Sinyal privat yang tak berpengaruh: {result.ignoredSignals}/5.
      </div>
    </VisualCard>
  );
}
