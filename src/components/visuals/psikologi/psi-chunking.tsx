"use client";

import { useState } from "react";
import VisualCard from "../VisualCard";
import { chunkCount } from "./psych-math";

const digits = "314159265358";
const sizes = [1, 2, 3, 4, 6, 12];

export default function PsiChunking() {
  const [size, setSize] = useState(3);
  const groups = Array.from({ length: chunkCount(digits.length, size) }, (_, index) => digits.slice(index * size, (index + 1) * size));
  const withinIllustrativeCapacity = groups.length <= 4;
  return (
    <VisualCard
      title="Mengelompokkan 12 digit"
      caption="Digit dan kapasitas empat bagian adalah simulasi ilustratif, bukan ukuran kapasitas memori manusia."
      howToRead="Pilih ukuran chunk. Jumlah kelompok mengikuti ceil(12/ukuran); pengelompokan tidak otomatis membuat digit dipahami atau diingat."
    >
      <label className="block min-w-0 text-sm text-zinc-300">Ukuran chunk
        <select aria-label="Pilih ukuran chunk untuk mengelompokkan dua belas digit" value={size} onChange={(event) => setSize(Number(event.target.value))} className="mt-2 block min-h-10 w-full min-w-0 max-w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
          {sizes.map((option) => <option key={option} value={option}>{option} digit per bagian</option>)}
        </select>
      </label>
      <div className="flex min-w-0 flex-wrap gap-2 rounded-lg bg-zinc-950 p-3" aria-label={`Dua belas digit dalam ${groups.length} kelompok`}>
        {groups.map((group, index) => <span key={`${index}-${group}`} className="min-w-0 break-all rounded border border-sky-500/30 bg-sky-500/10 px-2 py-2 font-mono text-lg tracking-wide text-sky-100">{group}</span>)}
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        <p aria-live="polite" className="min-w-0 break-words rounded-lg bg-zinc-950 p-3">Jumlah bagian: {groups.length}</p>
        <p className={`min-w-0 break-words rounded-lg bg-zinc-950 p-3 ${withinIllustrativeCapacity ? "text-emerald-200" : "text-amber-200"}`}>{withinIllustrativeCapacity ? "≤ 4 bagian ilustratif" : "> 4 bagian ilustratif"}</p>
      </div>
    </VisualCard>
  );
}
