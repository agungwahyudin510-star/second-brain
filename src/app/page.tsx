"use client";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getLessons } from "@/lib/curriculum";
import { useEconomicsProgress } from "@/hooks/useEconomicsProgress";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { ENGLISH_PROGRESS_KEY, getChapterStatus, hasPassedAttempt, isChapterUnlocked, PSYCHOLOGY_PROGRESS_KEY, WEB3_PROGRESS_KEY } from "@/lib/economics-progress";
import { PILLARS } from "@/lib/pillars";
import { QUOTES } from "@/data/quotes";
import { useNotes } from "@/context/NotesProvider";
import PillarCard from "@/components/PillarCard";
import StudyLog from "@/components/StudyLog";
import { Card } from "@/components/ui";
import Link from "next/link";
import { getModules } from "@/lib/curriculum";

const USER_NAME = "Learner"; // ganti dengan namamu

export default function Dashboard() {
  const { notes } = useNotes();
  const [doneLessons] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress: economicsProgress } = useEconomicsProgress();
  const { progress: psychologyProgress } = useCourseProgress(PSYCHOLOGY_PROGRESS_KEY, "Psikologi");
  const { progress: englishProgress } = useCourseProgress(ENGLISH_PROGRESS_KEY, "Bahasa Inggris");
  const { progress: web3Progress } = useCourseProgress(WEB3_PROGRESS_KEY, "Web3 & Technology");
  const [greeting, setGreeting] = useState("Halo");
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 11 ? "Selamat pagi" : h < 15 ? "Selamat siang" : h < 18 ? "Selamat sore" : "Selamat malam");
    setQuote(QUOTES[new Date().getDate() % QUOTES.length]);
  }, []);

  const economicsModules = getModules("ekonomi");
  const economicsLessons = getLessons("ekonomi");
  const completedEconomicsLessons = economicsLessons.filter((lesson) => doneLessons.includes(lesson.id)).length;
  const economicsPct = Math.round((completedEconomicsLessons / economicsLessons.length) * 100);
  const activeModuleIndex = economicsModules.findIndex((module, index) =>
    isChapterUnlocked(economicsModules, index, economicsProgress.attempts) &&
    getChapterStatus(module, index, economicsModules, economicsProgress.attempts, doneLessons) !== "Lulus"
  );
  const activeModule = economicsModules[activeModuleIndex];
  const nextLesson = activeModule?.lessons.find((lesson) => !doneLessons.includes(lesson.id));
  const nextHref = nextLesson
    ? `/pillar/ekonomi/learn/${nextLesson.id}`
    : activeModule
      ? `/pillar/ekonomi/quiz/${activeModule.id}`
      : "/pillar/ekonomi/exam";
  const latestAttempt = [...economicsProgress.attempts].sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))[0];
  const psychologyModules = getModules("psikologi");
  const psychologyLessons = getLessons("psikologi");
  const psychologyCompleted = psychologyLessons.filter((lesson) => doneLessons.includes(lesson.id)).length;
  const psychologyPct = Math.round((psychologyCompleted / psychologyLessons.length) * 100);
  const psychologyActiveIndex = psychologyModules.findIndex((module, index) =>
    isChapterUnlocked(psychologyModules, index, psychologyProgress.attempts) &&
    !hasPassedAttempt(psychologyProgress.attempts, module.id)
  );
  const psychologyActiveModule = psychologyModules[psychologyActiveIndex];
  const psychologyNextLesson = psychologyActiveModule?.lessons.find((lesson) => !doneLessons.includes(lesson.id));
  const psychologyNextHref = psychologyNextLesson
    ? `/pillar/psikologi/learn/${psychologyNextLesson.id}`
    : psychologyActiveModule
      ? `/pillar/psikologi/quiz/${psychologyActiveModule.id}`
      : "/pillar/psikologi/exam";
  const latestPsychologyAttempt = [...psychologyProgress.attempts].sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))[0];
  const englishModules = getModules("inggris").slice(0, 8);
  const englishLessons = englishModules.flatMap((module) => module.lessons);
  const englishCompleted = englishLessons.filter((lesson) => doneLessons.includes(lesson.id)).length;
  const englishPct = englishLessons.length ? Math.round((englishCompleted / englishLessons.length) * 100) : 0;
  const englishActiveIndex = englishModules.findIndex((module, index) =>
    isChapterUnlocked(englishModules, index, englishProgress.attempts) &&
    !hasPassedAttempt(englishProgress.attempts, module.id)
  );
  const englishActiveModule = englishModules[englishActiveIndex];
  const englishNextLesson = englishActiveModule?.lessons.find((lesson) => !doneLessons.includes(lesson.id));
  const englishNextHref = englishNextLesson
    ? `/pillar/inggris/learn/${englishNextLesson.id}`
    : englishActiveModule
      ? `/pillar/inggris/quiz/${englishActiveModule.id}`
      : "/pillar/inggris/exam";
  const latestEnglishAttempt = [...englishProgress.attempts].sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))[0];
  const web3Modules = getModules("web3").slice(0, 8);
  const web3Lessons = web3Modules.flatMap((module) => module.lessons);
  const web3Completed = web3Lessons.filter((lesson) => doneLessons.includes(lesson.id)).length;
  const web3Pct = web3Lessons.length ? Math.round((web3Completed / web3Lessons.length) * 100) : 0;
  const web3ActiveIndex = web3Modules.findIndex((module, index) =>
    isChapterUnlocked(web3Modules, index, web3Progress.attempts) &&
    !hasPassedAttempt(web3Progress.attempts, module.id)
  );
  const web3ActiveModule = web3Modules[web3ActiveIndex];
  const web3NextLesson = web3ActiveModule?.lessons.find((lesson) => !doneLessons.includes(lesson.id));
  const web3NextHref = web3NextLesson
    ? `/pillar/web3/learn/${web3NextLesson.id}`
    : web3ActiveModule
      ? `/pillar/web3/quiz/${web3ActiveModule.id}`
      : "/pillar/web3/exam";
  const latestWeb3Attempt = [...web3Progress.attempts].sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))[0];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{greeting}, {USER_NAME} 👋</h1>
        <p className="mt-1 text-zinc-500">Investasi terbaik adalah investasi pada otakmu sendiri.</p>
      </div>

      <Card className="flex gap-3 border-amber-500/20 bg-amber-500/5">
        <Quote className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
        <div>
          <p className="italic">“{quote.text}”</p>
          <p className="mt-1 text-sm text-zinc-500">- {quote.author}</p>
        </div>
      </Card>

      <Card className="border-sky-500/20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-sky-300">Fokus belajar • Ekonomi &amp; Literasi Keuangan</p>
            <h2 className="mt-1 text-lg font-semibold">{activeModule?.title ?? "Semua bab selesai"}</h2>
            <p className="mt-1 text-sm text-zinc-500">{completedEconomicsLessons}/{economicsLessons.length} sub-bagian selesai • {economicsPct}% kurikulum</p>
            {latestAttempt && <p className="mt-1 text-xs text-zinc-500">Skor kuis terakhir: {latestAttempt.score}/100</p>}
          </div>
          <Link href={nextHref} className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white">
            {activeModule ? (nextLesson ? "Lanjutkan belajar" : "Mulai kuis") : "Buka ujian akhir"}
          </Link>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800" role="progressbar" aria-label="Progres kurikulum ekonomi" aria-valuenow={economicsPct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-sky-500" style={{ width: `${economicsPct}%` }} />
        </div>
      </Card>

      <Card className="border-violet-500/20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-violet-300">Bidang belajar • Psychology &amp; Behavioral Science</p>
            <h2 className="mt-1 text-lg font-semibold">{psychologyActiveModule?.title ?? "Semua bab lulus"}</h2>
            <p className="mt-1 text-sm text-zinc-500">{psychologyCompleted}/{psychologyLessons.length} sub-bagian selesai • {psychologyPct}% kurikulum</p>
            {latestPsychologyAttempt && <p className="mt-1 text-xs text-zinc-500">Skor kuis psikologi terakhir: {latestPsychologyAttempt.score}/100</p>}
          </div>
          <Link href={psychologyNextHref} className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800">
            {psychologyActiveModule ? (psychologyNextLesson ? "Lanjutkan belajar" : "Mulai kuis") : "Buka final exam"}
          </Link>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800" role="progressbar" aria-label="Progres kurikulum psikologi" aria-valuenow={psychologyPct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-violet-500" style={{ width: `${psychologyPct}%` }} />
        </div>
      </Card>

      <Card className="border-sky-500/20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-sky-300">Bidang belajar • English Language Learning (A1)</p>
            <h2 className="mt-1 text-lg font-semibold">{englishActiveModule?.title ?? "Semua kuis A1 lulus"}</h2>
            <p className="mt-1 text-sm text-zinc-500">{englishCompleted}/{englishLessons.length} sub-bagian A1 selesai • {englishPct}% materi A1</p>
            {latestEnglishAttempt && <p className="mt-1 text-xs text-zinc-500">Skor kuis English terakhir: {latestEnglishAttempt.score}/100</p>}
          </div>
          <Link href={englishNextHref} className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800">
            {englishActiveModule ? (englishNextLesson ? "Lanjutkan belajar" : "Mulai kuis") : "Final assessment A1"}
          </Link>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800" role="progressbar" aria-label="Progres materi A1 English" aria-valuenow={englishPct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-sky-500" style={{ width: `${englishPct}%` }} />
        </div>
        <p className="mt-2 text-xs text-zinc-500">A2–B2 tersedia sebagai peta belajar dan belum dihitung dalam progres aktif.</p>
      </Card>

      <Card className="border-violet-500/20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-violet-300">Bidang belajar • Web3 &amp; Technology (Fase 1)</p>
            <h2 className="mt-1 text-lg font-semibold">{web3ActiveModule?.title ?? "Semua kuis Fase 1 lulus"}</h2>
            <p className="mt-1 text-sm text-zinc-500">{web3Completed}/{web3Lessons.length} subbagian Fase 1 selesai • {web3Pct}% materi aktif</p>
            {latestWeb3Attempt && <p className="mt-1 text-xs text-zinc-500">Skor kuis Web3 terakhir: {latestWeb3Attempt.score}/100</p>}
          </div>
          <Link href={web3NextHref} className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800">
            {web3ActiveModule ? (web3NextLesson ? "Lanjutkan belajar" : "Mulai kuis") : "Final assessment Fase 1"}
          </Link>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800" role="progressbar" aria-label="Progres materi Fase 1 Web3" aria-valuenow={web3Pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-violet-500" style={{ width: `${web3Pct}%` }} />
        </div>
        <p className="mt-2 text-xs text-zinc-500">Fase 2–8 tercantum sebagai roadmap dan belum dihitung sebagai materi selesai.</p>
      </Card>

      <section className="grid gap-4 sm:grid-cols-2">
        {PILLARS.map((p) => {
          const lessons = p.slug === "ekonomi" ? economicsLessons : p.slug === "psikologi" ? psychologyLessons : p.slug === "inggris" ? englishLessons : p.slug === "web3" ? web3Lessons : [];
          return (
            <PillarCard
              key={p.slug}
              pillar={p}
              count={notes.filter((n) => n.pillar === p.slug).length}
              lessonTotal={lessons.length}
              lessonDone={lessons.filter((l) => doneLessons.includes(l.id)).length}
            />
          );
        })}
      </section>

      <StudyLog />
    </div>
  );
}