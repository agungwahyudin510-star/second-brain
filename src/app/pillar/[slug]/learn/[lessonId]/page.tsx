"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, NotebookPen } from "lucide-react";
import { getPillar } from "@/lib/pillars";
import { findLesson, getModules } from "@/lib/curriculum";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEconomicsProgress } from "@/hooks/useEconomicsProgress";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { isChapterUnlocked } from "@/lib/economics-progress";
import { ENGLISH_PROGRESS_KEY, PSYCHOLOGY_PROGRESS_KEY, WEB3_PROGRESS_KEY } from "@/lib/economics-progress";
import EconomicsContent from "@/components/visuals/ekonomi/EconomicsContent";
import EconomicsChapterResources from "@/components/visuals/ekonomi/EconomicsChapterResources";
import PsychologyVisual from "@/components/PsychologyVisual";
import EnglishSpeechPractice from "@/components/EnglishSpeechPractice";
import Web3LearningVisual from "@/components/Web3LearningVisual";
import MarkdownView from "@/components/MarkdownView";
import { Button, Card, btnCls } from "@/components/ui";

export default function LessonPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const pillar = getPillar(slug);
  const [done, setDone] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress } = useEconomicsProgress();
  const psychologyCourse = useCourseProgress(PSYCHOLOGY_PROGRESS_KEY, "Psikologi");
  const englishCourse = useCourseProgress(ENGLISH_PROGRESS_KEY, "Bahasa Inggris");
  const web3Course = useCourseProgress(WEB3_PROGRESS_KEY, "Web3 & Technology");

  const found = findLesson(slug, lessonId);
  if (!pillar || !found) return notFound();

  const { lesson, prev, next } = found;
  const modules = getModules(slug);
  const moduleIndex = modules.findIndex((module) => module.id === lesson.moduleId);
  const lessonModule = modules[moduleIndex];
  const courseAttempts = slug === "psikologi"
    ? psychologyCourse.progress.attempts
    : slug === "inggris"
      ? englishCourse.progress.attempts
      : slug === "web3"
        ? web3Course.progress.attempts
      : progress.attempts;
  const web3ChapterModules = slug === "web3" ? modules.slice(0, 8) : modules;
  const web3RoadmapOnly = slug === "web3" && (moduleIndex >= 8 || modules[moduleIndex].roadmapOnly);
  if (web3RoadmapOnly || (["ekonomi", "psikologi", "inggris", "web3"].includes(slug) && !isChapterUnlocked(web3ChapterModules, moduleIndex, courseAttempts))) {
    return (
      <Card className="space-y-4">
        <h1 className="text-xl font-semibold">Bab ini masih terkunci</h1>
        <p className="text-sm text-zinc-400">{web3RoadmapOnly ? "Bab roadmap ini belum memiliki materi lengkap. Fase aktif saat ini adalah fondasi pemrograman Fase 1." : "Selesaikan kuis bab sebelumnya dengan skor minimal 70 untuk membuka materi ini."}</p>
        <Link href={`/pillar/${slug}/curriculum`} className={btnCls("ghost")}>Kembali ke kurikulum</Link>
      </Card>
    );
  }
  const isDone = done.includes(lesson.id);
  const lessonContent = lesson.content.replace(/^# .+\r?\n/, "");

  const toggleDone = () =>
    setDone((p) => (p.includes(lesson.id) ? p.filter((x) => x !== lesson.id) : [...p, lesson.id]));

  return (
    <div className="space-y-6">
      <Link
        href={`/pillar/${slug}/curriculum`}
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200"
      >
        <ArrowLeft className="h-4 w-4" /> Kurikulum {pillar.title}
      </Link>

      <div className="flex items-center gap-3 text-xs text-zinc-500">
        <span>{lesson.moduleTitle}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> {lesson.minutes} menit
        </span>
      </div>

      <h1 className="text-2xl font-bold">{lesson.title}</h1>
      {slug === "ekonomi"
        ? <EconomicsContent content={lessonContent} />
        : <MarkdownView content={lessonContent} />}

      {slug === "psikologi" && <PsychologyVisual moduleId={lesson.moduleId} />}
      {slug === "inggris" && lesson.speechText && <EnglishSpeechPractice text={lesson.speechText} listening={lesson.listening} />}
      {slug === "web3" && <Web3LearningVisual lesson={lesson} />}
      {slug === "ekonomi" && lesson.id === lessonModule?.lessons.at(-1)?.id && (
        <EconomicsChapterResources module={lessonModule} />
      )}

      <div className="flex flex-wrap gap-2 border-t border-zinc-800 pt-5">
        <Button variant={isDone ? "ghost" : "primary"} onClick={toggleDone}>
          <CheckCircle2 className="h-4 w-4" /> {isDone ? "Selesai (batalkan)" : "Tandai selesai"}
        </Button>
        <Link href={`/pillar/${slug}/new`} className={btnCls("ghost")}>
          <NotebookPen className="h-4 w-4" /> Buat catatan
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link href={`/pillar/${slug}/learn/${prev.id}`} className={btnCls("ghost", "justify-start")}>
            <ArrowLeft className="h-4 w-4 shrink-0" /> <span className="truncate">{prev.title}</span>
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/pillar/${slug}/learn/${next.id}`} className={btnCls("ghost", "justify-end")}>
            <span className="truncate">{next.title}</span> <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}