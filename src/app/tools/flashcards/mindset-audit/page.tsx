"use client";
import { useState } from "react";
import { RotateCcw, Trash2 } from "lucide-react";
import { AUDITS } from "@/data/audits";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Button, Card, inputCls } from "@/components/ui";
import { cn, todayStr, uid } from "@/lib/utils";

interface Journal { id: string; date: string; score: number; note: string }

const label = (s: number) =>
  s < 25 ? "Extreme Fear" : s < 45 ? "Fear" : s < 55 ? "Neutral" : s < 75 ? "Greed" : "Extreme Greed";

const color = (s: number) =>
  s < 25 ? "text-red-400" : s < 45 ? "text-orange-400" : s < 55 ? "text-zinc-300" : s < 75 ? "text-lime-400" : "text-emerald-400";

export default function MindsetAuditPage() {
  const [checks, setChecks] = useLocalStorage<Record<string, string[]>>("sb-audit-checks", {});
  const [journal, setJournal] = useLocalStorage<Journal[]>("sb-fg-journal", []);
  const [activeId, setActiveId] = useState(AUDITS[0].id);
  const [score, setScore] = useState(50);
  const [note, setNote] = useState("");

  const audit = AUDITS.find((a) => a.id === activeId)!;
  const done = checks[audit.id] ?? [];
  const pct = Math.round((done.length / audit.items.length) * 100);

  const toggle = (itemId: string) =>
    setChecks((p) => {
      const cur = p[audit.id] ?? [];
      return { ...p, [audit.id]: cur.includes(itemId) ? cur.filter((x) => x !== itemId) : [...cur, itemId] };
    });

  const verdict =
    pct === 100 ? "Siap. Keputusanmu sudah melewati semua pengecekan." :
    pct >= 60 ? "Hampir. Selesaikan sisanya sebelum bertindak." :
    "Tahan dulu. Masih banyak bias yang belum dicek.";

  function saveJournal(e: React.FormEvent) {
    e.preventDefault();
    setJournal((p) => [{ id: uid(), date: todayStr(), score, note: note.trim() }, ...p].slice(0, 30));
    setNote("");
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Mindset Audit</h1>
        <p className="text-sm text-zinc-500">Checklist evaluasi bias dan kondisi emosi sebelum mengambil keputusan.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {AUDITS.map((a) => (
          <button
            key={a.id}
            onClick={() => setActiveId(a.id)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition",
              a.id === activeId ? "border-zinc-100 bg-zinc-100 text-zinc-900" : "border-zinc-800 text-zinc-400 hover:bg-zinc-900"
            )}
          >
            {a.title}
          </button>
        ))}
      </div>

      <Card>
        <p className="mb-4 text-sm text-zinc-500">{audit.description}</p>
        <ul className="space-y-2">
          {audit.items.map((it) => (
            <li key={it.id}>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-zinc-950 px-3 py-2.5 text-sm hover:bg-zinc-900">
                <input type="checkbox" checked={done.includes(it.id)} onChange={() => toggle(it.id)} className="mt-0.5 h-4 w-4 accent-emerald-500" />
                <span className={done.includes(it.id) ? "text-zinc-500 line-through" : ""}>{it.text}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <div className="mb-1 flex justify-between text-xs text-zinc-500">
            <span>Skor disiplin</span><span>{pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-sm">{verdict}</p>
        </div>

        <Button variant="ghost" className="mt-4" onClick={() => setChecks((p) => ({ ...p, [audit.id]: [] }))}>
          <RotateCcw className="h-4 w-4" /> Reset checklist
        </Button>
      </Card>

      <Card>
        <h2 className="mb-1 font-semibold">Fear &amp; Greed Index Note (Pribadi)</h2>
        <p className="mb-4 text-sm text-zinc-500">Seberapa serakah atau takut kamu hari ini? 0 = takut ekstrem, 100 = serakah ekstrem.</p>
        <form onSubmit={saveJournal} className="space-y-3">
          <div className="flex items-center gap-4">
            <input type="range" min={0} max={100} value={score} onChange={(e) => setScore(+e.target.value)} className="w-full accent-amber-500" />
            <div className="w-28 text-right">
              <p className={cn("text-2xl font-bold", color(score))}>{score}</p>
              <p className={cn("text-xs", color(score))}>{label(score)}</p>
            </div>
          </div>
          <textarea
            rows={3}
            placeholder="Apa pemicunya? Apa yang kamu lakukan atau ingin lakukan?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={inputCls}
          />
          <Button type="submit">Simpan Catatan Emosi</Button>
        </form>

        {journal.length > 0 && (
          <ul className="mt-5 space-y-2">
            {journal.slice(0, 7).map((j) => (
              <li key={j.id} className="flex items-start justify-between gap-3 rounded-lg bg-zinc-950 px-3 py-2 text-sm">
                <div>
                  <span className={cn("font-semibold", color(j.score))}>{j.score} · {label(j.score)}</span>
                  <span className="ml-2 text-xs text-zinc-600">{j.date}</span>
                  {j.note && <p className="mt-1 text-zinc-400">{j.note}</p>}
                </div>
                <button onClick={() => setJournal((p) => p.filter((x) => x.id !== j.id))} aria-label="Hapus">
                  <Trash2 className="h-4 w-4 text-zinc-600 hover:text-red-400" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}