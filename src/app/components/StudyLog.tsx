"use client";
import { useState } from "react";
import { Clock, Trash2 } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PILLARS } from "@/lib/pillars";
import type { PillarSlug, StudyEntry } from "@/lib/types";
import { todayStr, uid } from "@/lib/utils";
import { Button, Card, inputCls } from "./ui";

export default function StudyLog() {
  const [entries, setEntries] = useLocalStorage<StudyEntry[]>("sb-study-log", []);
  const [minutes, setMinutes] = useState("");
  const [pillar, setPillar] = useState<PillarSlug>("ekonomi");
  const [note, setNote] = useState("");

  const today = todayStr();
  const todayEntries = entries.filter((e) => e.date === today);
  const todayTotal = todayEntries.reduce((s, e) => s + e.minutes, 0);

  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 6);
  const weekTotal = entries
    .filter((e) => new Date(e.date) >= new Date(weekStart.toLocaleDateString("en-CA")))
    .reduce((s, e) => s + e.minutes, 0);

  function add(e: React.FormEvent) {
    e.preventDefault();
    const m = parseInt(minutes, 10);
    if (!m || m <= 0) return;
    setEntries((p) => [{ id: uid(), date: today, minutes: m, pillar, note: note.trim() }, ...p]);
    setMinutes("");
    setNote("");
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold">
          <Clock className="h-4 w-4 text-zinc-400" /> Daily Study Log
        </h2>
        <div className="text-right text-xs text-zinc-500">
          Hari ini: <b className="text-zinc-200">{todayTotal} mnt</b> · 7 hari: <b className="text-zinc-200">{weekTotal} mnt</b>
        </div>
      </div>

      <form onSubmit={add} className="grid gap-2 sm:grid-cols-[100px_1fr_1fr_auto]">
        <input type="number" min={1} placeholder="Menit" value={minutes} onChange={(e) => setMinutes(e.target.value)} className={inputCls} />
        <select value={pillar} onChange={(e) => setPillar(e.target.value as PillarSlug)} className={inputCls}>
          {PILLARS.map((p) => (
            <option key={p.slug} value={p.slug}>{p.title}</option>
          ))}
        </select>
        <input placeholder="Belajar apa hari ini?" value={note} onChange={(e) => setNote(e.target.value)} className={inputCls} />
        <Button type="submit">Catat</Button>
      </form>

      {todayEntries.length > 0 && (
        <ul className="mt-4 space-y-2">
          {todayEntries.map((en) => (
            <li key={en.id} className="flex items-center justify-between rounded-lg bg-zinc-950 px-3 py-2 text-sm">
              <span>
                <b>{en.minutes} mnt</b> · {PILLARS.find((p) => p.slug === en.pillar)?.title}
                {en.note && <span className="text-zinc-500"> · {en.note}</span>}
              </span>
              <button onClick={() => setEntries((p) => p.filter((x) => x.id !== en.id))} aria-label="Hapus">
                <Trash2 className="h-4 w-4 text-zinc-600 hover:text-red-400" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}