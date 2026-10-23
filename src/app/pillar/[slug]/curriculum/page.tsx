"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Circle, Clock } from "lucide-react";
import { getPillar } from "@/lib/pillars";
import { getLessons, getModules } from "@/lib/curriculum";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export default function CurriculumPage() {
  const { slug } = useParams<{ slug: string }>();
  const pillar = getPillar(slug);
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);

  if (!pillar) return notFound();

  const modules = getModules(slug);
  const total = getLessons(slug).length;
  const doneCount = getLessons(slug).filter((l) => done.includes(l.id)).length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;

  return (
    <div className="space-y-6">
      <Link href={`/pillar/${slug}`} className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200">
        <ArrowLeft className="h-4 w-4" /> {pillar.title}
      </Link>

      <div>
        <h1 className="text-2xl font-bold">Kurikulum {pillar.title}</h1>
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-xs text-zinc-500">
            <span>{doneCount} dari {total} pelajaran selesai</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className={cn("h-full rounded-full transition-all", pillar.accent.bar)} style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {modules.map((m) => {
        const modDone = m.lessons.filter((l) => done.includes(l.id)).length;
        return (
          <Card key={m.id} className="space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-semibold">{m.title}</h2>
                <span className="text-xs text-zinc-500">{modDone}/{m.lessons.length}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{m.summary}</p>
            </div>

            <ul className="space-y-2">
              {m.lessons.map((l, i) => {
                const isDone = done.includes(l.id);
                return (
                  <li key={l.id}>
                    <Link
                      href={`/pillar/${slug}/learn/${l.id}`}
                      className="flex items-center gap-3 rounded-lg bg-zinc-950 px-3 py-3 text-sm transition hover:bg-zinc-800/60"
                    >
                      {isDone ? (
                        <CheckCircle2 className={cn("h-5 w-5 shrink-0", pillar.accent.text)} />
                      ) : (
                        <Circle className="h-5 w-5 shrink-0 text-zinc-700" />
                      )}
                      <span className={cn("flex-1", isDone && "text-zinc-500")}>
                        {i + 1}. {l.title}
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-xs text-zinc-600">
                        <Clock className="h-3 w-3" /> {l.minutes} mnt
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}