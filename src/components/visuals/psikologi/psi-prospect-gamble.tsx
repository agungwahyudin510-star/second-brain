"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { breakEvenGain, gambleValue } from "./psych-math";

export default function PsiProspectGamble() {
  const [win, setWin] = useState(120);
  const [loss, setLoss] = useState(100);
  const [pWin, setPWin] = useState(50);
  const [lambda, setLambda] = useState(2);
  const [reference, setReference] = useState<"loss" | "gain">("loss");
  const probability = pWin / 100;
  const expectedValue = probability * win - (1 - probability) * loss;
  const subjective = gambleValue(win, loss, probability, lambda);
  const breakEven = breakEvenGain(loss, lambda, probability);

  return (
    <VisualCard
      title="Nilai harapan dan nilai subjektif"
      caption="λ dan perhitungan taruhan adalah model ilustratif, bukan konstanta aversi kerugian atau saran keputusan finansial."
      howToRead="Ubah hasil dan peluang. Bandingkan nilai harapan aritmetis dengan nilai subjektif model serta gain impas."
    >
      <div className="grid min-w-0 grid-cols-1 gap-4">
        <label className="block min-w-0 text-sm text-zinc-300">Kemenangan: {win}
          <input aria-label="Jumlah kemenangan hipotetis" type="range" min="20" max="240" step="10" value={win} onChange={(event) => setWin(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-emerald-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Kerugian: {loss}
          <input aria-label="Jumlah kerugian hipotetis" type="range" min="20" max="200" step="10" value={loss} onChange={(event) => setLoss(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-rose-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">Peluang menang: {pWin}%
          <input aria-label="Peluang menang dari nol sampai seratus persen" type="range" min="10" max="90" step="5" value={pWin} onChange={(event) => setPWin(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
        </label>
        <label className="block min-w-0 text-sm text-zinc-300">λ ilustratif: {lambda.toFixed(1)}
          <input aria-label="Parameter lambda dari satu sampai tiga" type="range" min="1" max="3" step="0.1" value={lambda} onChange={(event) => setLambda(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-amber-400" />
        </label>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">Nilai harapan: {expectedValue >= 0 ? "+" : ""}{expectedValue.toFixed(1)}</p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">Nilai subjektif: {subjective >= 0 ? "+" : ""}{subjective.toFixed(1)} · model {subjective >= 0 ? "menerima" : "menolak"}</p>
        <p className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">Gain impas: {Number.isFinite(breakEven) ? breakEven.toFixed(1) : "tidak terbatas pada peluang menang 0%"}</p>
      </div>
      <fieldset className="min-w-0 rounded-lg border border-zinc-700 p-3">
        <legend className="px-1 text-sm text-zinc-300">Titik acuan ilustratif</legend>
        <div className="grid min-w-0 grid-cols-2 gap-2">
          <button type="button" aria-pressed={reference === "gain"} onClick={() => setReference("gain")} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-sm text-zinc-200 aria-pressed:border-sky-400">Keuntungan</button>
          <button type="button" aria-pressed={reference === "loss"} onClick={() => setReference("loss")} className="min-h-10 min-w-0 rounded border border-zinc-700 px-2 text-sm text-zinc-200 aria-pressed:border-sky-400">Kerugian</button>
        </div>
        <p className="mt-2 break-words text-xs text-zinc-400">{reference === "gain" ? "Hasil dibandingkan dengan acuan sehingga kemenangan dipandang sebagai perubahan positif." : "Hasil dibandingkan dengan acuan sehingga kerugian dipandang sebagai perubahan negatif."} Acuan dan respons nyata dapat berbeda.</p>
      </fieldset>
    </VisualCard>
  );
}
