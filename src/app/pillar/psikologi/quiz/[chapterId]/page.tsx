"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import AssessmentRunner from "@/components/AssessmentRunner";
import { Card, btnCls } from "@/components/ui";
import {
  PSYCHOLOGY_ESSAYS,
  PSYCHOLOGY_QUIZZES,
  PSYCHOLOGY_V2_ESSAYS,
  PSYCHOLOGY_V2_QUIZZES,
} from "@/data/curriculum/psychology-assessments";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { isChapterUnlocked, PSYCHOLOGY_PROGRESS_KEY } from "@/lib/economics-progress";

const quizzes = { ...PSYCHOLOGY_QUIZZES, ...PSYCHOLOGY_V2_QUIZZES };
const essays = { ...PSYCHOLOGY_ESSAYS, ...PSYCHOLOGY_V2_ESSAYS };

export default function PsychologyQuizPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const modules = getModules("psikologi");
  const chapterIndex = modules.findIndex((item) => item.id === chapterId);
  const chapter = modules[chapterIndex];
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress } = useCourseProgress(PSYCHOLOGY_PROGRESS_KEY, "Psikologi");

  if (!chapter || !quizzes[chapterId]) return notFound();
  const unlocked = isChapterUnlocked(modules, chapterIndex, progress.attempts);
  const completedLessons = chapter.lessons.every((lesson) => done.includes(lesson.id));
  if (!unlocked || !completedLessons) {
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Kuis belum terbuka</h1>
        <p className="text-sm text-zinc-400">{!unlocked ? "Lulus kuis bab sebelumnya dengan skor minimal 70 terlebih dahulu." : "Tandai semua materi bab ini selesai sebelum mengikuti kuis."}</p>
        <Link href="/pillar/psikologi/curriculum" className={btnCls("ghost")}>Kembali ke kurikulum</Link>
      </Card>
    );
  }

  return (
    <AssessmentRunner
      moduleId={chapter.id}
      title={`${chapter.title} — Kuis`}
      questions={quizzes[chapter.id]}
      essays={essays[chapter.id]}
      returnHref="/pillar/psikologi/curriculum"
      progressStorageKey={PSYCHOLOGY_PROGRESS_KEY}
    />
  );
}
