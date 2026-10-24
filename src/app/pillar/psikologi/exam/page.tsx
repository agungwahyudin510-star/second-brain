"use client";

import Link from "next/link";
import { Card, btnCls } from "@/components/ui";
import AssessmentRunner from "@/components/AssessmentRunner";
import { PSYCHOLOGY_FINAL_ESSAYS, PSYCHOLOGY_FINAL_QUESTIONS } from "@/data/curriculum/psychology-assessments";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { getModules } from "@/lib/curriculum";
import { hasPassedAttempt, PSYCHOLOGY_PROGRESS_KEY } from "@/lib/economics-progress";

export default function PsychologyExamPage() {
  const modules = getModules("psikologi");
  const { progress } = useCourseProgress(PSYCHOLOGY_PROGRESS_KEY, "Psikologi");
  const ready = modules.every((module) => hasPassedAttempt(progress.attempts, module.id));

  if (!ready) {
    const passed = modules.filter((module) => hasPassedAttempt(progress.attempts, module.id)).length;
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Final exam masih terkunci</h1>
        <p className="text-sm text-zinc-400">Luluskan semua delapan kuis bab dengan skor minimal 70. Progres saat ini: {passed}/{modules.length} bab lulus.</p>
        <Link href="/pillar/psikologi/curriculum" className={btnCls("ghost")}>Lihat kurikulum</Link>
      </Card>
    );
  }

  const questions = PSYCHOLOGY_FINAL_QUESTIONS.map((question, index) => ({
    ...question,
    chapterId: modules[index].id,
    chapterTitle: modules[index].title,
  }));

  return (
    <AssessmentRunner
      moduleId="psikologi-final"
      title="Final Exam — Psychology & Behavioral Science"
      questions={questions}
      essays={PSYCHOLOGY_FINAL_ESSAYS}
      returnHref="/pillar/psikologi/progress"
      isExam
      progressStorageKey={PSYCHOLOGY_PROGRESS_KEY}
    />
  );
}
