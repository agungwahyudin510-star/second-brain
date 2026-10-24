"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Card, btnCls } from "@/components/ui";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { getBestAttempt, getChapterStatus, getLatestAttempt, hasPassedAttempt, PSYCHOLOGY_PROGRESS_KEY } from "@/lib/economics-progress";
import { cn } from "@/lib/utils";

export default function PsychologyProgressPage() {
  const modules = getModules("psikologi");
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress, storageError, resetProgress } = useCourseProgress(PSYCHOLOGY_PROGRESS_KEY, "Psikologi");
  const lessons = modules.flatMap((module) => module.lessons);
  const lessonDone = lessons.filter((lesson) => done.includes(lesson.id)).length;
  const passed = modules.filter((module) => hasPassedAttempt(progress.attempts, module.id)).length;
  const latestExam = progress.examAttempts.at(-1);

  function clearProgress() {
    if (window.confirm("Hapus riwayat evaluasi Psikologi dari browser ini? Tindakan ini tidak dapat dibatalkan.")) resetProgress();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-sm text-zinc-500">Penyimpanan lokal browser</p><h1 className="mt-1 text-2xl font-bold">Progres Psychology &amp; Behavioral Science</h1></div>
        <Link href="/pillar/psikologi/curriculum" className={btnCls("ghost")}>Kembali ke kurikulum</Link>
      </div>
      <Card className="grid gap-4 sm:grid-cols-3">
        <div><p className="text-sm text-zinc-500">Materi selesai</p><p className="mt-1 text-2xl font-semibold">{lessonDone}/{lessons.length}</p></div>
        <div><p className="text-sm text-zinc-500">Bab lulus</p><p className="mt-1 text-2xl font-semibold">{passed}/{modules.length}</p></div>
        <div><p className="text-sm text-zinc-500">Percobaan kuis</p><p className="mt-1 text-2xl font-semibold">{progress.attempts.length}</p></div>
      </Card>
      <Card>
        <h2 className="font-semibold">Skor terakhir, terbaik, dan remedial</h2>
        <div className="mt-4 space-y-4">
          {modules.map((chapter, index) => {
            const latest = getLatestAttempt(progress.attempts, chapter.id);
            const best = getBestAttempt(progress.attempts, chapter.id);
            const status = getChapterStatus(chapter, index, modules, progress.attempts, done);
            return (
              <div key={chapter.id}>
                <div className="mb-1 flex flex-wrap justify-between gap-2 text-sm"><span>{chapter.title}</span><span className="text-zinc-500">{status}{latest ? ` • terakhir ${latest.score}/100 • terbaik ${best?.score}/100` : ""}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-800" role="img" aria-label={`${chapter.title}: skor terakhir ${latest?.score ?? 0} dari 100`}>
                  {latest && <div className={cn("h-full rounded-full", latest.passed ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${latest.score}%` }} />}
                </div>
                {latest?.incorrectConcepts.length ? <p className="mt-1 text-xs text-zinc-500">Disarankan ditinjau: {Array.from(new Set(latest.incorrectConcepts)).join(", ")}</p> : null}
                {latest && !latest.passed && <Link href={`/pillar/psikologi/quiz/${chapter.id}`} className="mt-1 inline-flex items-center gap-1 text-xs text-sky-400">Remedial <ArrowRight className="h-3 w-3" /></Link>}
              </div>
            );
          })}
        </div>
      </Card>
      <Card><h2 className="font-semibold">Final exam</h2><p className="mt-1 text-sm text-zinc-400">{latestExam ? `Percobaan terakhir: ${latestExam.score}/100 • ${latestExam.passed ? "Lulus" : "Perlu remedial"}` : "Belum ada percobaan."}</p></Card>
      <Card className="space-y-2 text-sm text-zinc-500">
        {storageError ? <div className="flex gap-2 text-amber-200"><AlertTriangle className="h-4 w-4 shrink-0" />{storageError}</div> : <p>Progres disimpan di localStorage browser ini; tidak tersinkron antarperangkat dan dapat hilang jika data browser dihapus. Jawaban esai tidak disimpan.</p>}
        <button type="button" onClick={clearProgress} className="text-rose-300 underline underline-offset-2">Hapus riwayat evaluasi Psikologi</button>
      </Card>
    </div>
  );
}
