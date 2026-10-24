"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import AssessmentRunner from "@/components/AssessmentRunner";
import { Card, btnCls } from "@/components/ui";
import { WEB3_ESSAYS, WEB3_QUIZZES } from "@/data/curriculum/web3/assessments";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { isChapterUnlocked, WEB3_PROGRESS_KEY } from "@/lib/economics-progress";

export default function Web3ChapterQuizPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const modules = getModules("web3").slice(0, 8);
  const chapterIndex = modules.findIndex((module) => module.id === chapterId);
  const chapter = modules[chapterIndex];
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress } = useCourseProgress(WEB3_PROGRESS_KEY, "Web3 & Technology");
  const questions = WEB3_QUIZZES[chapterId];
  const returnHref = "/pillar/web3/curriculum";

  if (!chapter || !questions || !WEB3_ESSAYS[chapterId]) return notFound();
  const unlocked = isChapterUnlocked(modules, chapterIndex, progress.attempts);
  const allLessonsDone = chapter.lessons.every((lesson) => done.includes(lesson.id));

  if (!unlocked || !allLessonsDone) {
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Kuis belum terbuka</h1>
        <p className="text-sm text-zinc-400">
          {!unlocked ? "Lulus kuis bab sebelumnya dengan skor minimal 70 terlebih dahulu." : "Tandai semua materi bab ini selesai sebelum memulai kuis."}
        </p>
        <Link href={returnHref} className={btnCls("ghost")}>Kembali ke kurikulum</Link>
      </Card>
    );
  }

  return (
    <>
      <Card className="mb-5 border-sky-500/20 text-sm leading-relaxed text-zinc-300">
        Kuis menguji pemahaman konsep Fase 1. Dua jawaban terbuka dinilai mandiri dengan rubrik penalaran dan penerapan; tidak ada AI grading atau penilaian kode otomatis. Untuk code lab, gunakan snippet, expected behavior, dan test checklist pada materi lalu jalankan hanya secara lokal.
      </Card>
      <AssessmentRunner
        moduleId={chapter.id}
        title={`${chapter.title} — Kuis`}
        questions={questions}
        essays={WEB3_ESSAYS[chapterId]}
        returnHref={returnHref}
        progressStorageKey={WEB3_PROGRESS_KEY}
      />
    </>
  );
}
