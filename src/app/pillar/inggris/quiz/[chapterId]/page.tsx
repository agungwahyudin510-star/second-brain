"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import AssessmentRunner from "@/components/AssessmentRunner";
import { Card, btnCls } from "@/components/ui";
import { ENGLISH_ESSAYS, ENGLISH_QUIZZES } from "@/data/curriculum/english/assessments";
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
  const questions = ENGLISH_QUIZZES[chapterId];
  const essays = ENGLISH_ESSAYS[chapterId];
  const returnHref = "/pillar/inggris/curriculum";
  const level = chapterId.startsWith("eng-a2-") ? "A2" : "A1";

  if (!chapter || !questions || !essays) return notFound();
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
        Kuis ini berisi {questions.length} pilihan ganda dan {essays.length} tugas menulis. Jawaban terbuka dinilai sendiri dengan rubrik khusus bahasa; tidak ada penilaian otomatis. Listening dan speaking tersedia sebagai latihan terpisah dan tidak masuk skor kuis.
      </Card>
      <AssessmentRunner
        moduleId={chapter.id}
        title={`${chapter.title} — Kuis ${level}`}
        questions={questions}
        essays={essays}
        returnHref={returnHref}
        progressStorageKey={ENGLISH_PROGRESS_KEY}
        rubricLabels={WRITING_RUBRIC}
      />
    </>
  );
}
