"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { phaseMeans } from "./psych-math";

const initialPhases = [
  [30, 25, 35, 28, 32, 27, 33],
  [45, 40, 50, 38, 47, 42, 44],
  [32, 29, 31, 30, 28, 33, 29],
];
const phaseNames = ["A1 · Baseline", "B · Intervensi", "A2 · Kembali"];
const threats = ["Tren / musim ujian", "Kebetulan", "Ekspektasi", "Perubahan lain"];

export default function PsiNOf1() {
  const [phases, setPhases] = useState(initialPhases);
  const [checkedThreats, setCheckedThreats] = useState<boolean[]>([false, false, false, false]);
  const means = phaseMeans(phases);
  const difference = means[1] - means[0];
  const allValues = phases.flat();
  const maxValue = Math.max(60, ...allValues);
  const points = allValues.map((value, index) => `${10 + index * 9},${105 - (value / maxValue) * 90}`).join(" ");

  function updateValue(phaseIndex: number, valueIndex: number, value: number) {
    setPhases((current) => current.map((phase, index) =>
      index === phaseIndex ? phase.map((item, itemIndex) => itemIndex === valueIndex ? value : item) : phase
    ));
  }

  return (
    <VisualCard
      title="Eksperimen perilaku N-of-1"
      caption="Fase dan nilai menit fokus per hari adalah data hipotetis. Ubah nilai untuk mengeksplorasi rerata; latihan ini bukan bukti kausal atau saran profesional."
      howToRead="Bandingkan rerata fase A1, B, dan A2 serta pola hariannya. Kembalinya A2 mendekati A1 dapat memperkuat dugaan, tetapi tidak menyingkirkan ancaman validitas."
    >
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3">
        {phases.map((phase, phaseIndex) => (
          <fieldset key={phaseNames[phaseIndex]} className="min-w-0 rounded-lg bg-zinc-950 p-3">
            <legend className="px-1 text-sm font-medium text-sky-200">{phaseNames[phaseIndex]}</legend>
            <div className="grid min-w-0 grid-cols-2 gap-2">
              {phase.map((value, valueIndex) => (
                <label key={`${phaseIndex}-${valueIndex}`} className="min-w-0 text-xs text-zinc-400">Hari {valueIndex + 1}
                  <input
                    aria-label={`${phaseNames[phaseIndex]}, menit fokus hari ${valueIndex + 1}`}
                    type="number"
                    min="0"
                    max="600"
                    value={value}
                    onChange={(event) => updateValue(phaseIndex, valueIndex, Number(event.target.value))}
                    className="mt-1 block min-h-9 w-full min-w-0 rounded-md border border-zinc-700 bg-zinc-900 px-2 text-sm text-zinc-100"
                  />
                </label>
              ))}
            </div>
            <p aria-live="polite" className="mt-2 text-sm text-zinc-200">Rerata: {means[phaseIndex].toFixed(1)} menit</p>
          </fieldset>
        ))}
      </div>
      <div className="min-w-0 rounded-lg bg-zinc-950 p-3">
        <p className="text-sm text-zinc-300">Menit fokus per hari · tiga fase berurutan</p>
        <svg viewBox="0 0 200 115" role="img" aria-label="Grafik garis hipotetis menit fokus per hari pada fase A1, B, dan A2" className="mt-2 h-40 w-full">
          <line x1="10" y1="105" x2="190" y2="105" stroke="#52525b" />
          <line x1="73" y1="10" x2="73" y2="105" stroke="#52525b" strokeDasharray="3 3" />
          <line x1="136" y1="10" x2="136" y2="105" stroke="#52525b" strokeDasharray="3 3" />
          <polyline points={points} fill="none" stroke="#38bdf8" strokeWidth="2" />
          {allValues.map((value, index) => <circle key={index} cx={10 + index * 9} cy={105 - (value / maxValue) * 90} r="2" fill={index < 7 ? "#a78bfa" : index < 14 ? "#34d399" : "#fbbf24"} />)}
          <text x="24" y="114" fill="#d4d4d8" fontSize="8">A1</text><text x="87" y="114" fill="#d4d4d8" fontSize="8">B</text><text x="149" y="114" fill="#d4d4d8" fontSize="8">A2</text>
        </svg>
      </div>
      <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3 text-sm text-sky-200">
        Selisih B−A1: {difference >= 0 ? "+" : ""}{difference.toFixed(1)} menit · A2 {Math.abs(means[2] - means[0]) <= 3 ? "mendekati" : "berbeda dari"} A1
      </p>
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm text-zinc-200">Ancaman validitas yang perlu diperiksa</legend>
        <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {threats.map((threat, index) => (
            <label key={threat} className="flex min-w-0 items-start gap-2 rounded-lg bg-zinc-950 p-2 text-sm text-zinc-300">
              <input aria-label={threat} type="checkbox" checked={checkedThreats[index]} onChange={(event) => setCheckedThreats((current) => current.map((value, i) => i === index ? event.target.checked : value))} className="mt-1 accent-amber-400" />
              <span className="break-words">{threat}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className="min-w-0 break-words rounded-lg bg-amber-950/40 p-3 text-sm text-amber-100">
        Belum bukti kausal. {checkedThreats.filter(Boolean).length} ancaman ditandai; tren, kebetulan, ekspektasi, dan perubahan lain tetap dapat menjelaskan pola.
      </p>
    </VisualCard>
  );
}
