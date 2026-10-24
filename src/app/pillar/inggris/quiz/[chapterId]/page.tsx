"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import AssessmentRunner from "@/components/AssessmentRunner";
import { Card, btnCls } from "@/components/ui";
import { ENGLISH_A1_ESSAYS, ENGLISH_A1_QUIZZES } from "@/data/curriculum/english/assessments";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { ENGLISH_PROGRESS_KEY, isChapterUnlocked } from "@/lib/economics-progress";

const WRITING_RUBRIC = ["Grammar", "Vocabulary", "Task completion", "Clarity"];

export default function EnglishChapterQuizPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const modules = getModules("inggris");
  const chapterIndex = modules.findIndex((module) => module.id === chapterId);
  const chapter = modules[chapterIndex];
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress } = useCourseProgress(ENGLISH_PROGRESS_KEY, "Bahasa Inggris");
  const questions = ENGLISH_A1_QUIZZES[chapterId];
  const returnHref = "/pillar/inggris/curriculum";

  if (!chapter || !questions || !ENGLISH_A1_ESSAYS[chapterId]) return notFound();
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
        Kuis ini berisi 8 pilihan ganda dan 2 tugas menulis. Jawaban terbuka dinilai sendiri dengan rubrik khusus bahasa; tidak ada penilaian otomatis. Listening dan speaking tersedia sebagai latihan terpisah dan tidak masuk skor kuis.
      </Card>
      <AssessmentRunner
        moduleId={chapter.id}
        title={`${chapter.title} — Kuis A1`}
        questions={questions}
        essays={ENGLISH_A1_ESSAYS[chapterId]}
        returnHref={returnHref}
        progressStorageKey={ENGLISH_PROGRESS_KEY}
        rubricLabels={WRITING_RUBRIC}
      />
    </>
  );
}
