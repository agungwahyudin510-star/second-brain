"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { anchoredEstimate } from "./psych-math";

export default function PsiAnchorFrame() {
  const [tab, setTab] = useState<"anchor" | "frame">("anchor");
  const [anchor, setAnchor] = useState(100);
  const [savedFrame, setSavedFrame] = useState(true);
  const estimate = anchoredEstimate(50, anchor, 0.3);
  const highlightedPct = savedFrame ? 200 / 600 * 100 : 400 / 600 * 100;
  const highlightedLabel = savedFrame ? "200 diselamatkan" : "400 meninggal";

  return (
    <VisualCard
      title="Jangkar dan bingkai"
      caption="Tarikan jangkar dan contoh bingkai 600 orang adalah ilustrasi; keduanya tidak mengukur besaran efek universal."
      howToRead="Pindah tab. Pada jangkar, ubah angka awal; pada bingkai, ubah deskripsi dan amati bagian yang ditonjolkan dari 600 orang yang sama."
    >
      <div className="grid min-w-0 grid-cols-2 gap-2">
        <button type="button" aria-pressed={tab === "anchor"} onClick={() => setTab("anchor")} className="min-h-10 min-w-0 rounded-lg border border-zinc-700 px-2 text-sm text-zinc-200 aria-pressed:border-sky-400 aria-pressed:text-sky-200">Jangkar</button>
        <button type="button" aria-pressed={tab === "frame"} onClick={() => setTab("frame")} className="min-h-10 min-w-0 rounded-lg border border-zinc-700 px-2 text-sm text-zinc-200 aria-pressed:border-sky-400 aria-pressed:text-sky-200">Bingkai</button>
      </div>
      {tab === "anchor" ? (
        <div className="min-w-0 space-y-3">
          <label className="block min-w-0 text-sm text-zinc-300">
            Jangkar: {anchor}
            <input aria-label="Nilai jangkar dari nol sampai seratus" type="range" min="0" max="100" value={anchor} onChange={(event) => setAnchor(Number(event.target.value))} className="mt-2 block min-h-8 w-full min-w-0 accent-sky-400" />
          </label>
          <p aria-live="polite" className="rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">Estimasi = 50 + 0,3×({anchor}−50) = {estimate.toFixed(1)}.</p>
        </div>
      ) : (
        <div className="min-w-0 space-y-3">
          <label className="flex min-w-0 items-center gap-2 text-sm text-zinc-300">
            <input aria-label="Tampilkan bingkai diselamatkan atau meninggal" type="checkbox" checked={savedFrame} onChange={(event) => setSavedFrame(event.target.checked)} className="min-h-5 min-w-5 accent-sky-400" />
            {savedFrame ? "Bingkai: diselamatkan" : "Bingkai: meninggal"}
          </label>
          <p className="break-words rounded-lg bg-zinc-950 p-3 text-sm text-zinc-200">
            {savedFrame ? "Program A: 200 dari 600 orang diselamatkan." : "Program A: 400 dari 600 orang meninggal."}
          </p>
          <div role="img" aria-label={`${highlightedLabel}, ${highlightedPct.toFixed(1)} persen dari 600 orang`} className="min-w-0">
            <div className="flex h-8 w-full min-w-0 overflow-hidden rounded-lg bg-zinc-700">
              <div className="h-full bg-sky-400" style={{ width: `${highlightedPct}%` }} />
              <div className="h-full flex-1 bg-rose-500" />
            </div>
            <p className="mt-2 break-words text-xs text-zinc-300">{highlightedLabel}: {highlightedPct.toFixed(1)}% ({savedFrame ? "200/600" : "400/600"}). Ekuivalen: 200 diselamatkan = 400 meninggal dari kelompok yang sama.</p>
          </div>
        </div>
      )}
    </VisualCard>
  );
}
