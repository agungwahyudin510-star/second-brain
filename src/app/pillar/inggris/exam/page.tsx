"use client";

import Link from "next/link";
import { Card, btnCls } from "@/components/ui";
import AssessmentRunner from "@/components/AssessmentRunner";
import { ENGLISH_A1_ESSAYS, ENGLISH_A1_QUIZZES } from "@/data/curriculum/english/assessments";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { getModules } from "@/lib/curriculum";
import { ENGLISH_PROGRESS_KEY, hasPassedAttempt } from "@/lib/economics-progress";

const WRITING_RUBRIC = ["Grammar", "Vocabulary", "Task completion", "Clarity"];

export default function EnglishA1ExamPage() {
  const modules = getModules("inggris").slice(0, 8);
  const { progress } = useCourseProgress(ENGLISH_PROGRESS_KEY, "Bahasa Inggris");
  const ready = modules.every((module) => hasPassedAttempt(progress.attempts, module.id));

  if (!ready) {
    const passed = modules.filter((module) => hasPassedAttempt(progress.attempts, module.id)).length;
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Final assessment A1 masih terkunci</h1>
        <p className="text-sm text-zinc-400">Luluskan 8 kuis bab A1 dengan skor minimal 70. Progres saat ini: {passed}/8.</p>
        <Link href="/pillar/inggris/curriculum" className={btnCls("ghost")}>Lihat kurikulum</Link>
      </Card>
    );
  }

  const questionIndexes = [1, 0, 0, 3, 6, 0, 0, 2];
  const skills = ["Vocabulary", "Grammar", "Grammar", "Grammar", "Vocabulary", "Vocabulary", "Grammar", "Reading"];
  const questions = modules.map((module, index) => {
    const chapterQuestions = ENGLISH_A1_QUIZZES[module.id];
    const question = chapterQuestions[questionIndexes[index]];
    return { ...question, id: `english-a1-final-${index + 1}`, skill: skills[index], chapterId: module.id, chapterTitle: module.title };
  });
  const essays = [
    { ...ENGLISH_A1_ESSAYS["eng-a1-8"][0], id: "english-a1-final-writing-profile" },
    { ...ENGLISH_A1_ESSAYS["eng-a1-5"][0], id: "english-a1-final-writing-directions" },
  ];

  return (
    <>
      <Card className="mb-5 border-sky-500/20 text-sm leading-relaxed text-zinc-300">
        Final assessment A1 ini merupakan estimasi belajar, bukan sertifikasi CEFR. Skor mencakup pilihan ganda (grammar, vocabulary, dan pemahaman bacaan) serta dua tugas menulis yang dinilai mandiri. Listening dan speaking dipraktikkan di materi, tetapi belum dinilai dalam skor akhir.
      </Card>
      <AssessmentRunner
        moduleId="english-a1-final"
        title="English A1 — Final assessment"
        questions={questions}
        essays={essays}
        returnHref="/pillar/inggris/progress"
        isExam
        progressStorageKey={ENGLISH_PROGRESS_KEY}
        rubricLabels={WRITING_RUBRIC}
      />
    </>
  );
}
