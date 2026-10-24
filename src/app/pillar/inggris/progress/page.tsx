"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Card, btnCls } from "@/components/ui";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { getBestAttempt, getChapterStatus, getLatestAttempt, ENGLISH_PROGRESS_KEY } from "@/lib/economics-progress";
import { cn } from "@/lib/utils";

export default function EnglishProgressPage() {
  const modules = getModules("inggris").slice(0, 8);
  const [done, , doneHydrated] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress, hydrated, storageError } = useCourseProgress(ENGLISH_PROGRESS_KEY, "Bahasa Inggris");
  const lessonList = useMemo(() => modules.flatMap((module) => module.lessons), [modules]);
  const completedLessons = lessonList.filter((lesson) => done.includes(lesson.id)).length;
  const passed = modules.filter((module) => getLatestAttempt(progress.attempts, module.id)?.passed).length;
  const nextModule = modules.find((module) => !getLatestAttempt(progress.attempts, module.id)?.passed);
  const latestExam = progress.examAttempts.at(-1);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-sm text-zinc-500">Penyimpanan lokal browser • A1 aktif</p><h1 className="mt-1 text-2xl font-bold">English learning progress</h1></div>
        <div className="flex gap-2">
          <Link href="/pillar/inggris/vocabulary" className={btnCls("ghost")}>Vocabulary review</Link>
          <Link href="/pillar/inggris/curriculum" className={btnCls("ghost")}>Kurikulum</Link>
        </div>
      </div>

      <Card className="grid gap-4 sm:grid-cols-4">
        <div><p className="text-sm text-zinc-500">Materi A1 selesai</p><p className="mt-1 text-2xl font-semibold">{doneHydrated ? completedLessons : "—"}/{lessonList.length}</p></div>
        <div><p className="text-sm text-zinc-500">Bab A1 lulus</p><p className="mt-1 text-2xl font-semibold">{hydrated ? passed : "—"}/8</p></div>
        <div><p className="text-sm text-zinc-500">Percobaan kuis</p><p className="mt-1 text-2xl font-semibold">{hydrated ? progress.attempts.length : "—"}</p></div>
        <div><p className="text-sm text-zinc-500">Final assessment</p><p className="mt-1 text-lg font-semibold">{hydrated ? latestExam ? `${latestExam.score}/100` : "Belum dicoba" : "—"}</p></div>
      </Card>

      {storageError && <Card role="alert" className="border-amber-500/30 text-sm text-amber-200"><AlertTriangle className="mr-2 inline h-4 w-4" />{storageError} Data lama tidak ditimpa.</Card>}

      <Card>
        <h2 className="font-semibold">Riwayat dan remedial per bab</h2>
        <div className="mt-4 space-y-5">
          {modules.map((module, index) => {
            const attempts = progress.attempts.filter((attempt) => attempt.moduleId === module.id);
            const latest = getLatestAttempt(progress.attempts, module.id);
            const best = getBestAttempt(progress.attempts, module.id);
            const status = getChapterStatus(module, index, modules, progress.attempts, done);
            return (
              <div key={module.id}>
                <div className="mb-1 flex flex-wrap justify-between gap-2 text-sm">
                  <span>{module.title}</span>
                  <span className="text-zinc-500">{status}{latest ? ` • terakhir ${latest.score}/100 • terbaik ${best?.score}/100` : ""} • {attempts.length} percobaan</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-800" role="img" aria-label={`${module.title}: ${latest ? `skor terakhir ${latest.score} dari 100` : "belum ada skor"}`}>
                  {latest && <div className={cn("h-full", latest.passed ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${latest.score}%` }} />}
                </div>
                {latest?.incorrectConcepts.length ? <p className="mt-1 text-xs text-zinc-500">Perlu ditinjau: {Array.from(new Set(latest.incorrectConcepts)).join(", ")}</p> : null}
                {latest && !latest.passed && <Link href={`/pillar/inggris/quiz/${module.id}`} className="mt-1 inline-flex items-center gap-1 text-xs text-sky-400">Remedial <ArrowRight className="h-3 w-3" /></Link>}
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">Sesi belajar berikutnya</h2>
        <p className="mt-2 text-sm text-zinc-400">
          {nextModule
            ? `Lanjutkan ${nextModule.title}. Baca materi, tandai selesai, lalu coba kuis bab setelah semua submateri dipelajari.`
            : "Semua kuis A1 telah lulus. Coba final assessment A1 atau ulang materi yang ingin diperkuat."}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {nextModule && <Link href={`/pillar/inggris/learn/${nextModule.lessons[0].id}`} className={btnCls("primary")}>Lanjut belajar</Link>}
          {modules.every((module) => progress.attempts.some((attempt) => attempt.moduleId === module.id && attempt.passed)) &&
            <Link href="/pillar/inggris/exam" className={btnCls("ghost")}>Final assessment A1</Link>}
          <Link href="/pillar/inggris/vocabulary" className={btnCls("ghost")}>Review vocabulary</Link>
        </div>
        {latestExam && <p className="mt-3 text-xs text-zinc-500">Percobaan final terakhir: {latestExam.score}/100 • {latestExam.passed ? "mencapai ambang 70" : "belum mencapai ambang 70"}.</p>}
      </Card>

      <Card className="text-sm leading-relaxed text-zinc-500">
        Progres dan nilai tersimpan di localStorage browser/perangkat ini, bukan sinkronisasi cloud. Waktu belajar, streak, dan skor listening/speaking tidak ditampilkan karena belum dicatat atau dinilai. A2–B2 tersedia sebagai peta kurikulum, belum sebagai materi/asesmen lengkap.
      </Card>
    </div>
  );
}
