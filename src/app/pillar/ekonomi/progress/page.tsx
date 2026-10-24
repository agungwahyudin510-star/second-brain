"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Card, btnCls } from "@/components/ui";
import { useEconomicsProgress } from "@/hooks/useEconomicsProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { getChapterStatus, getLatestAttempt } from "@/lib/economics-progress";
import { cn } from "@/lib/utils";

export default function EconomicsProgressPage() {
  const modules = getModules("ekonomi");
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress, storageError, resetProgress } = useEconomicsProgress();
  const completedLessons = modules.flatMap((module) => module.lessons).filter((lesson) => done.includes(lesson.id)).length;
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const passed = modules.filter((module) => getLatestAttempt(progress.attempts, module.id)?.passed).length;
  const latestExam = progress.examAttempts.at(-1);

  function clearProgress() {
    if (window.confirm("Hapus seluruh riwayat kuis dan progres evaluasi Ekonomi dari browser ini? Tindakan ini tidak dapat dibatalkan.")) {
      resetProgress();
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-sm text-zinc-500">Penyimpanan lokal browser</p><h1 className="mt-1 text-2xl font-bold">Progres Ekonomi</h1></div>
        <Link href="/pillar/ekonomi/curriculum" className={btnCls("ghost")}>Kembali ke kurikulum</Link>
      </div>
      <Card className="grid gap-4 sm:grid-cols-3">
        <div><p className="text-sm text-zinc-500">Materi ditandai selesai</p><p className="mt-1 text-2xl font-semibold">{completedLessons}/{totalLessons}</p></div>
        <div><p className="text-sm text-zinc-500">Bab lulus</p><p className="mt-1 text-2xl font-semibold">{passed}/{modules.length}</p></div>
        <div><p className="text-sm text-zinc-500">Percobaan kuis tersimpan</p><p className="mt-1 text-2xl font-semibold">{progress.attempts.length}</p></div>
      </Card>

      <Card className="border-sky-500/20">
        <h2 className="font-semibold">Riwayat nilai per bab</h2>
        <div className="mt-4 space-y-4">
          {modules.map((module) => {
            const attempts = progress.attempts.filter((attempt) => attempt.moduleId === module.id);
            const latest = getLatestAttempt(progress.attempts, module.id);
            const status = getChapterStatus(module, modules.indexOf(module), modules, progress.attempts, done);
            return (
              <div key={module.id}>
                <div className="mb-1 flex flex-wrap justify-between gap-2 text-sm"><span>{module.title}</span><span className="text-zinc-500">{status}{latest ? ` • ${latest.score}/100` : ""} • {attempts.length} percobaan</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-800" role="img" aria-label={`${module.title}: skor terakhir ${latest?.score ?? 0} dari 100`}>
                  {latest && <div className={cn("h-full rounded-full", latest.passed ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${latest.score}%` }} />}
                </div>
                {latest?.incorrectConcepts.length ? <p className="mt-1 text-xs text-zinc-600">Ulangi: {Array.from(new Set(latest.incorrectConcepts)).join(", ")}</p> : null}
                {latest && !latest.passed && <Link href={`/pillar/ekonomi/quiz/${module.id}`} className="mt-1 inline-flex items-center gap-1 text-xs text-sky-400">Remedial <ArrowRight className="h-3 w-3" /></Link>}
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">Ujian akhir</h2>
        <p className="mt-1 text-sm text-zinc-400">{latestExam ? `Percobaan terakhir: ${latestExam.score}/100 • ${latestExam.passed ? "Lulus" : "Belum lulus"}` : "Belum ada percobaan."}</p>
      </Card>

      {storageError ? (
        <Card className="border-amber-500/30 text-sm text-amber-200">
          <div className="flex gap-2"><AlertTriangle className="h-4 w-4 shrink-0" />{storageError}</div>
          <button type="button" onClick={clearProgress} className="mt-3 underline underline-offset-2">Hapus data progres evaluasi yang rusak</button>
        </Card>
      ) : (
        <Card className="space-y-2 text-sm text-zinc-500">
          <p>Progres disimpan di localStorage pada browser/perangkat ini. Data tidak tersinkron antarperangkat dan dapat hilang jika data browser dihapus. Jawaban uraian tidak disimpan.</p>
          <button type="button" onClick={clearProgress} className="text-rose-300 underline underline-offset-2">Hapus riwayat evaluasi lokal</button>
        </Card>
      )}
    </div>
  );
}
