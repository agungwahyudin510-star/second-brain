"use client";

import Link from "next/link";
import { Card, btnCls } from "@/components/ui";
import AssessmentRunner from "@/components/AssessmentRunner";
import { ENGLISH_A2_FINAL_ESSAYS, ENGLISH_A2_FINAL_QUESTIONS } from "@/data/curriculum/english/a2/final-exam";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { getModules } from "@/lib/curriculum";
import { ENGLISH_PROGRESS_KEY, hasPassedAttempt } from "@/lib/economics-progress";

const WRITING_RUBRIC = ["Grammar", "Vocabulary", "Task completion", "Clarity"];

export default function EnglishA2ExamPage() {
  const modules = getModules("inggris").slice(8, 16);
  const { progress } = useCourseProgress(ENGLISH_PROGRESS_KEY, "Bahasa Inggris");
  const ready = modules.length === 8 && modules.every((module) => hasPassedAttempt(progress.attempts, module.id));

  if (!ready) {
    const passed = modules.filter((module) => hasPassedAttempt(progress.attempts, module.id)).length;
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Final assessment A2 masih terkunci</h1>
        <p className="text-sm text-zinc-400">Luluskan 8 kuis bab A2 dengan skor minimal 70. Progres saat ini: {passed}/8.</p>
        <Link href="/pillar/inggris/curriculum" className={btnCls("ghost")}>Lihat kurikulum</Link>
      </Card>
    );
  }

  const total = ENGLISH_A2_FINAL_QUESTIONS.length;
  const questions = ENGLISH_A2_FINAL_QUESTIONS.map((question, index) => {
    const chapterModule = modules[Math.floor(index * modules.length / total)];
    return { ...question, chapterId: chapterModule.id, chapterTitle: chapterModule.title };
  });

  return (
    <>
      <Card className="mb-5 border-sky-500/20 text-sm leading-relaxed text-zinc-300">
        Ujian terdiri dari 30 soal pilihan ganda + 2 tugas menulis dinilai mandiri; bukan sertifikasi CEFR.
      </Card>
      <AssessmentRunner
        moduleId="english-a2-final"
        title="English A2 — Final assessment"
        questions={questions}
        essays={ENGLISH_A2_FINAL_ESSAYS}
        returnHref="/pillar/inggris/progress"
        isExam
        progressStorageKey={ENGLISH_PROGRESS_KEY}
        rubricLabels={WRITING_RUBRIC}
      />
    </>
  );
}
