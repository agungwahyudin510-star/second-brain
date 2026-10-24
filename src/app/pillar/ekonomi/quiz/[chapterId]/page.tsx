"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Card, btnCls } from "@/components/ui";
import AssessmentRunner from "@/components/AssessmentRunner";
import { ECONOMICS_ESSAYS, ECONOMICS_QUIZZES } from "@/data/curriculum/economics-assessments";
import { useEconomicsProgress } from "@/hooks/useEconomicsProgress";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getModules } from "@/lib/curriculum";
import { isChapterUnlocked } from "@/lib/economics-progress";

export default function ChapterQuizPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const modules = getModules("ekonomi");
  const moduleIndex = modules.findIndex((item) => item.id === chapterId);
  const chapter = modules[moduleIndex];
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress } = useEconomicsProgress();

  if (!chapter || !ECONOMICS_QUIZZES[chapterId]) return notFound();
  const unlocked = isChapterUnlocked(modules, moduleIndex, progress.attempts);
  const hasCompletedLessons = chapter.lessons.every((lesson) => done.includes(lesson.id));

  if (!unlocked || !hasCompletedLessons) {
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Kuis belum terbuka</h1>
        <p className="text-sm text-zinc-400">
          {!unlocked ? "Lulus kuis bab sebelumnya dengan skor minimal 70 terlebih dahulu." : "Tandai semua materi pada bab ini selesai sebelum memulai kuis."}
        </p>
        <Link href="/pillar/ekonomi/curriculum" className={btnCls("ghost")}>Kembali ke kurikulum</Link>
      </Card>
    );
  }

  return (
    <AssessmentRunner
      moduleId={chapter.id}
      title={`${chapter.title} — Kuis`}
      questions={ECONOMICS_QUIZZES[chapter.id]}
      essays={ECONOMICS_ESSAYS[chapter.id]}
      returnHref="/pillar/ekonomi/curriculum"
    />
  );
}
