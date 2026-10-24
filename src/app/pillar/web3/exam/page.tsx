"use client";

import Link from "next/link";
import { Card, btnCls } from "@/components/ui";
import AssessmentRunner from "@/components/AssessmentRunner";
import { WEB3_ESSAYS, WEB3_QUIZZES } from "@/data/curriculum/web3/assessments";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { getModules } from "@/lib/curriculum";
import { hasPassedAttempt, WEB3_PROGRESS_KEY } from "@/lib/economics-progress";

export default function Web3FoundationsExamPage() {
  const chapters = getModules("web3").slice(0, 8);
  const { progress } = useCourseProgress(WEB3_PROGRESS_KEY, "Web3 & Technology");
  const ready = chapters.every((chapter) => hasPassedAttempt(progress.attempts, chapter.id));

  if (!ready) {
    const passed = chapters.filter((chapter) => hasPassedAttempt(progress.attempts, chapter.id)).length;
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Final assessment Fase 1 masih terkunci</h1>
        <p className="text-sm text-zinc-400">Luluskan 8 kuis bab Fase 1 dengan skor minimal 70. Progres saat ini: {passed}/8.</p>
        <Link href="/pillar/web3/curriculum" className={btnCls("ghost")}>Lihat kurikulum</Link>
      </Card>
    );
  }

  const questions = chapters.map((chapter, index) => ({
    ...WEB3_QUIZZES[chapter.id][index],
    id: `web3-f1-final-${index + 1}`,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
  }));
  const essays = [
    { ...WEB3_ESSAYS["web-f1-b8"][0], id: "web3-f1-final-concept" },
    { ...WEB3_ESSAYS["web-f1-b8"][1], id: "web3-f1-final-project" },
  ];

  return (
    <>
      <Card className="mb-5 border-sky-500/20 text-sm leading-relaxed text-zinc-300">
        Assessment ini mengukur konsep melalui pertanyaan pilihan ganda dan refleksi proyek melalui rubrik mandiri. Lulus kuis tidak membuktikan kemampuan membangun aplikasi; proyek tetap perlu dijalankan dan diverifikasi lokal. Skor tidak mencakup penilaian kode otomatis.
      </Card>
      <AssessmentRunner
        moduleId="web3-f1-final"
        title="Web3 & Technology — Final assessment Fase 1"
        questions={questions}
        essays={essays}
        returnHref="/pillar/web3/progress"
        isExam
        progressStorageKey={WEB3_PROGRESS_KEY}
      />
    </>
  );
}
