"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Card, btnCls } from "@/components/ui";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { getBestAttempt, getChapterStatus, getLatestAttempt, hasPassedAttempt, WEB3_PROGRESS_KEY } from "@/lib/economics-progress";
import { cn } from "@/lib/utils";
import { WEB3_PHASES } from "@/data/curriculum/web3/phases";

export default function Web3ProgressPage() {
  const chapters = getModules("web3").slice(0, 8);
  const lessons = chapters.flatMap((chapter) => chapter.lessons);
  const [done, , doneHydrated] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress, hydrated, storageError } = useCourseProgress(WEB3_PROGRESS_KEY, "Web3 & Technology");
  const completed = lessons.filter((lesson) => done.includes(lesson.id)).length;
  const passed = chapters.filter((chapter) => hasPassedAttempt(progress.attempts, chapter.id)).length;
  const nextChapter = chapters.find((chapter) => !hasPassedAttempt(progress.attempts, chapter.id));
  const nextLesson = nextChapter?.lessons.find((lesson) => !done.includes(lesson.id)) ?? nextChapter?.lessons[0];
  const latestExam = progress.examAttempts.at(-1);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-zinc-500">Penyimpanan localStorage • Fase 1 aktif</p>
          <h1 className="mt-1 text-2xl font-bold">Progres Web3 &amp; Technology</h1>
        </div>
        <Link href="/pillar/web3/curriculum" className={btnCls("ghost")}>Kembali ke kurikulum</Link>
      </div>

      <Card className="grid gap-4 sm:grid-cols-4">
        <div><p className="text-sm text-zinc-500">Materi Fase 1 selesai</p><p className="mt-1 text-2xl font-semibold">{doneHydrated ? completed : "—"}/{lessons.length}</p></div>
        <div><p className="text-sm text-zinc-500">Kuis bab lulus</p><p className="mt-1 text-2xl font-semibold">{hydrated ? passed : "—"}/8</p></div>
        <div><p className="text-sm text-zinc-500">Percobaan tersimpan</p><p className="mt-1 text-2xl font-semibold">{hydrated ? progress.attempts.length : "—"}</p></div>
        <div><p className="text-sm text-zinc-500">Final assessment Fase 1</p><p className="mt-1 text-lg font-semibold">{hydrated ? latestExam ? `${latestExam.score}/100` : "Belum dicoba" : "—"}</p></div>
      </Card>

      {storageError && <Card role="alert" className="border-amber-500/30 text-sm text-amber-200"><AlertTriangle className="mr-2 inline h-4 w-4" />{storageError} Data lama dipertahankan.</Card>}

      <Card>
        <h2 className="font-semibold">Fase 1 • hasil bab dan remedial</h2>
        <div className="mt-4 space-y-5">
          {chapters.map((chapter, index) => {
            const attempts = progress.attempts.filter((attempt) => attempt.moduleId === chapter.id);
            const latest = getLatestAttempt(progress.attempts, chapter.id);
            const best = getBestAttempt(progress.attempts, chapter.id);
            const status = getChapterStatus(chapter, index, chapters, progress.attempts, done);
            return (
              <div key={chapter.id}>
                <div className="mb-1 flex flex-wrap justify-between gap-2 text-sm">
                  <span>{chapter.title}</span>
                  <span className="text-zinc-500">{status}{latest ? ` • terakhir ${latest.score}/100 • terbaik ${best?.score}/100` : ""} • {attempts.length} percobaan</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-800" role="img" aria-label={`${chapter.title}: ${latest ? `skor terakhir ${latest.score} dari 100` : "belum ada skor"}`}>
                  {latest && <div className={cn("h-full", latest.passed ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${latest.score}%` }} />}
                </div>
                {latest?.incorrectConcepts.length ? <p className="mt-1 text-xs text-zinc-500">Perlu ditinjau: {Array.from(new Set(latest.incorrectConcepts)).join(", ")}</p> : null}
                {latest && !latest.passed && <Link href={`/pillar/web3/quiz/${chapter.id}`} className="mt-1 inline-flex items-center gap-1 text-xs text-sky-400">Remedial <ArrowRight className="h-3 w-3" /></Link>}
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">Rekomendasi sesi berikutnya</h2>
        <p className="mt-2 text-sm text-zinc-400">
          {nextChapter
            ? `Lanjutkan ${nextChapter.title}. Pelajari semua subbagian sebelum mengerjakan kuis.`
            : "Semua kuis Fase 1 lulus. Kerjakan final assessment atau ulang materi untuk memperkuat pemahaman."}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {nextLesson && <Link href={`/pillar/web3/learn/${nextLesson.id}`} className={btnCls("primary")}>Lanjut belajar</Link>}
          {passed === 8 && <Link href="/pillar/web3/exam" className={btnCls("ghost")}>Final assessment Fase 1</Link>}
        </div>
        {latestExam && <p className="mt-3 text-xs text-zinc-500">Final assessment terakhir: {latestExam.score}/100 • {latestExam.passed ? "mencapai ambang 70" : "belum mencapai ambang 70"}.</p>}
      </Card>

      <Card className="space-y-2 text-sm leading-relaxed text-zinc-500">
        <p>Hasil tersimpan di localStorage pada browser/perangkat ini dan dapat hilang jika data browser dihapus. Tidak ada sinkronisasi cloud.</p>
        <p>Kelulusan kuis teori bukan bukti bahwa proyek sudah dibangun atau diaudit. Code lab menampilkan contoh, expected output, dan checklist; kode tidak dijalankan pada platform.</p>
        <p>{WEB3_PHASES.slice(1).length} fase selanjutnya tersedia sebagai roadmap, belum sebagai materi atau asesmen lengkap. Gunakan akun simulasi/local chain/testnet untuk latihan Web3; jangan memasukkan private key atau seed phrase.</p>
      </Card>
    </div>
  );
}
