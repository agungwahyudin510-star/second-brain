"use client";

import Link from "next/link";
import { Card, btnCls } from "@/components/ui";
import AssessmentRunner from "@/components/AssessmentRunner";
import { FINAL_EXAM_ESSAYS, FINAL_EXAM_QUESTIONS } from "@/data/curriculum/economics-assessments";
import { useEconomicsProgress } from "@/hooks/useEconomicsProgress";
import { getModules } from "@/lib/curriculum";
import { hasPassedAttempt } from "@/lib/economics-progress";

export default function EconomicsExamPage() {
  const modules = getModules("ekonomi");
  const { progress } = useEconomicsProgress();
  const ready = modules.every((module) => hasPassedAttempt(progress.attempts, module.id));
  const examQuestions = FINAL_EXAM_QUESTIONS.map((question, index) => ({
    ...question,
    chapterId: modules[index].id,
    chapterTitle: modules[index].title,
  }));

  if (!ready) {
    const passed = modules.filter((module) => hasPassedAttempt(progress.attempts, module.id)).length;
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Ujian akhir masih terkunci</h1>
        <p className="text-sm text-zinc-400">Luluskan semua delapan kuis bab dengan skor minimal 70. Progres saat ini: {passed}/{modules.length} bab lulus.</p>
        <Link href="/pillar/ekonomi/curriculum" className={btnCls("ghost")}>Lihat kurikulum</Link>
      </Card>
    );
  }

  return (
    <AssessmentRunner
      moduleId="ekonomi-final"
      title="Ujian Akhir Ekonomi & Literasi Keuangan"
      questions={examQuestions}
      essays={FINAL_EXAM_ESSAYS}
      returnHref="/pillar/ekonomi/progress"
      isExam
    />
  );
}
