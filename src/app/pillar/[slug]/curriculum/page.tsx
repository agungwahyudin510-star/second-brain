"use client";

import { Fragment } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Circle, Clock, LockKeyhole } from "lucide-react";
import { getPillar } from "@/lib/pillars";
import { getLessons, getModules } from "@/lib/curriculum";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEconomicsProgress } from "@/hooks/useEconomicsProgress";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { ENGLISH_PROGRESS_KEY, getChapterStatus, getLatestAttempt, hasPassedAttempt, isChapterUnlocked, PSYCHOLOGY_PROGRESS_KEY, WEB3_PROGRESS_KEY } from "@/lib/economics-progress";
import { Badge, Card, btnCls } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ENGLISH_A1_QUIZZES } from "@/data/curriculum/english/assessments";
import { WEB3_QUIZZES } from "@/data/curriculum/web3/assessments";
import { WEB3_PHASES } from "@/data/curriculum/web3/phases";
import { FINAL_EXAM_QUESTIONS } from "@/data/curriculum/economics-assessments";

export default function CurriculumPage() {
  const { slug } = useParams<{ slug: string }>();
  const pillar = getPillar(slug);
  const [done] = useLocalStorage<string[]>("sb-lesson-done", []);
  const { progress, storageError } = useEconomicsProgress();
  const psychologyCourse = useCourseProgress(PSYCHOLOGY_PROGRESS_KEY, "Psikologi");
  const englishCourse = useCourseProgress(ENGLISH_PROGRESS_KEY, "Bahasa Inggris");
  const web3Course = useCourseProgress(WEB3_PROGRESS_KEY, "Web3 & Technology");

  if (!pillar) return notFound();
  if (slug !== "ekonomi" && slug !== "psikologi" && slug !== "inggris" && slug !== "web3") {
    return (
      <div className="space-y-6">
        <Link href={`/pillar/${slug}`} className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200">
          <ArrowLeft className="h-4 w-4" /> {pillar.title}
        </Link>
        <Card className="border-amber-500/20">
          <Badge className="border-amber-500/30 text-amber-300">Sedang dikembangkan</Badge>
          <h1 className="mt-3 text-2xl font-bold">Kurikulum {pillar.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Bidang ini tersedia di navigasi, tetapi materi terstruktur dan evaluasinya belum selesai. Konten ringkas yang ada belum diklaim sebagai kurikulum lengkap.
          </p>
          <p className="mt-2 text-xs text-zinc-500">Fokus implementasi saat ini: Ekonomi &amp; Literasi Keuangan.</p>
        </Card>
      </div>
    );
  }

  const modules = getModules(slug);
  const isPsychology = slug === "psikologi";
  const isEnglish = slug === "inggris";
  const isWeb3 = slug === "web3";
  const courseProgress = isPsychology ? psychologyCourse.progress : isEnglish ? englishCourse.progress : isWeb3 ? web3Course.progress : progress;
  const courseError = isPsychology ? psychologyCourse.storageError : isEnglish ? englishCourse.storageError : isWeb3 ? web3Course.storageError : storageError;
  const courseName = isPsychology ? "Psychology & Behavioral Science" : isEnglish ? "English Language Learning" : isWeb3 ? "Web3 & Technology" : "Ekonomi & Literasi Keuangan";
  const courseBase = `/pillar/${slug}`;
  const attempts = courseProgress.attempts;
  const lessons = getLessons(slug);
  const activeLessons = isEnglish || isWeb3 ? modules.slice(0, 8).flatMap((module) => module.lessons) : lessons;
  const trackedLessons = activeLessons;
  const doneCount = trackedLessons.filter((lesson) => done.includes(lesson.id)).length;
  const percentage = trackedLessons.length ? Math.round((doneCount / trackedLessons.length) * 100) : 0;
  const assessedModules = isEnglish || isWeb3 ? modules.slice(0, 8) : modules;
  const allChaptersPassed = assessedModules.every((module) => hasPassedAttempt(attempts, module.id));

  return (
    <div className="space-y-6">
      <Link href={`/pillar/${slug}`} className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200">
        <ArrowLeft className="h-4 w-4" /> {pillar.title}
      </Link>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">{isEnglish ? "4 level • 32 bab terpetakan • A1 aktif dengan 8 kuis" : isWeb3 ? "8 fase • 64 bab terpetakan • Fase 1 aktif dengan 8 kuis" : `${modules.length} bab • ${lessons.length} sub-bagian • kuis + remedial`}</p>
          <h1 className="mt-1 text-2xl font-bold">Kurikulum {courseName}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href={`${courseBase}/progress`} className={btnCls("ghost")}>Progres</Link>
          {isEnglish
            ? <>
                <Link href={`${courseBase}/placement`} className={btnCls("ghost")}>Tes penempatan</Link>
                <Link href={`${courseBase}/vocabulary`} className={btnCls("ghost")}>Vocabulary review</Link>
              </>
            : isWeb3
              ? <Link href={`${courseBase}/progress`} className={btnCls("ghost")}>Progres Web3</Link>
            : <Link href={`${courseBase}/glossary`} className={btnCls("ghost")}>Glosarium</Link>}
          {allChaptersPassed && (slug !== "ekonomi" || FINAL_EXAM_QUESTIONS.length > 0)
            ? <Link href={`${courseBase}/exam`} className={btnCls("primary")}>{isEnglish ? "Final assessment A1" : "Ujian akhir"}</Link>
            : <span aria-disabled="true" className={cn(btnCls("ghost"), "cursor-not-allowed opacity-50")}>{isEnglish ? "Final assessment A1 (terkunci)" : isWeb3 ? "Final assessment Fase 1 (terkunci)" : "Ujian akhir (terkunci)"}</span>}
        </div>
      </div>
      <Card>
        <div className="mb-2 flex justify-between text-sm">
          <span>{doneCount} dari {trackedLessons.length} materi{isEnglish ? " A1" : isWeb3 ? " Fase 1" : ""} ditandai selesai</span><span>{percentage}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-zinc-800" role="progressbar" aria-label="Progres pelajaran" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-sky-500 transition-all" style={{ width: `${percentage}%` }} />
        </div>
        <p className="mt-2 text-xs text-zinc-500">{isEnglish ? "Bab A1 berikutnya terbuka setelah nilai kuis sebelumnya minimal 70%. A2–B2 saat ini adalah peta belajar, bukan materi lengkap. Hasil belajar merupakan estimasi, bukan sertifikasi CEFR." : isWeb3 ? "Bab Fase 1 berikutnya terbuka setelah kuis sebelumnya lulus dengan minimal 70%. Fase 2–8 saat ini berupa roadmap dan belum memiliki materi/kuis lengkap. Gunakan local chain/testnet; jangan gunakan private key atau dana sungguhan." : slug === "ekonomi" && FINAL_EXAM_QUESTIONS.length === 0 ? "Bab berikutnya terbuka setelah nilai kuis bab sebelumnya minimal 70%. Ujian akhir 30 soal lintas bab disiapkan pada tahap akhir kurikulum." : "Bab berikutnya terbuka setelah nilai kuis bab sebelumnya minimal 70%. Ujian akhir terbuka setelah semua bab lulus."} Durasi merupakan perkiraan.</p>
      </Card>

      {courseError && <Card className="border-amber-500/30 text-sm text-amber-200">{courseError} Data lama tidak ditimpa.</Card>}

      {modules.map((module, index) => {
        const phaseStart = isWeb3 && (index === 0 || modules[index - 1].phaseNumber !== module.phaseNumber);
        const phase = isWeb3 ? WEB3_PHASES[(module.phaseNumber ?? 1) - 1] : undefined;
        const roadmapOnly = Boolean(isWeb3 && module.roadmapOnly);
        const phaseModules = isWeb3 ? modules.slice(0, 8) : modules;
        const status = roadmapOnly
          ? "Terkunci"
          : getChapterStatus(module, index, phaseModules, attempts, done);
        const unlocked = isWeb3
          ? !roadmapOnly && isChapterUnlocked(phaseModules, index, attempts)
          : isChapterUnlocked(modules, index, attempts);
        const latest = getLatestAttempt(attempts, module.id);
        const completed = module.lessons.filter((lesson) => done.includes(lesson.id)).length;
        const quizAvailable = isEnglish
          ? Boolean(ENGLISH_A1_QUIZZES[module.id])
          : isWeb3
            ? Boolean(WEB3_QUIZZES[module.id])
            : true;
        const canTakeQuiz = unlocked && completed === module.lessons.length && quizAvailable;
        return (
          <Fragment key={module.id}>
          {phaseStart && phase && (
            <Card className="border-sky-500/20">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-sky-300">Fase {phase.number} dari 8</p>
                  <h2 className="mt-1 text-lg font-semibold">{phase.title}</h2>
                  <p className="mt-2 text-sm text-zinc-400">{phase.goal}</p>
                  <p className="mt-2 text-xs text-zinc-500"><strong>Proyek:</strong> {phase.project}</p>
                </div>
                <Badge className={phase.number === 1 ? "border-emerald-500/30 text-emerald-300" : "border-amber-500/30 text-amber-300"}>
                  {phase.number === 1 ? `${modules.slice(0, 8).filter((item) => hasPassedAttempt(attempts, item.id)).length}/8 kuis lulus` : "Roadmap • konten bertahap"}
                </Badge>
              </div>
            </Card>
          )}
          <Card key={module.id} className={cn(!unlocked && "opacity-75")}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold">{module.title}</h2>
                  <Badge>{status}</Badge>
                  {isEnglish && index >= 8 && <Badge className="border-amber-500/30 text-amber-300">Peta belajar • materi dikembangkan bertahap</Badge>}
                  {roadmapOnly && <Badge className="border-amber-500/30 text-amber-300">Roadmap • belum berupa materi lengkap</Badge>}
                </div>
                <p className="mt-1 text-sm text-zinc-500">{module.summary}</p>
              </div>
              <div className="text-right text-xs text-zinc-500">
                <div>{completed}/{module.lessons.length} materi</div>
                {latest && <div className={latest.passed ? "text-emerald-400" : "text-amber-400"}>Kuis terakhir: {latest.score}/100</div>}
              </div>
            </div>

            {roadmapOnly ? (
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-zinc-950 p-3 text-sm text-zinc-500">
                <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{module.summary} Materi, praktik, dan asesmen bab ini belum tersedia. Akses fase lanjutan dibuka setelah prasyarat dan konten tahap sebelumnya siap.</span>
              </div>
            ) : unlocked ? (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {module.lessons.map((lesson, lessonIndex) => {
                  const isDone = done.includes(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link href={`/pillar/${slug}/learn/${lesson.id}`} className="flex h-full items-center gap-3 rounded-lg bg-zinc-950 px-3 py-3 text-sm transition hover:bg-zinc-800/60">
                        {isDone ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" /> : <Circle className="h-5 w-5 shrink-0 text-zinc-700" />}
                        <span className={cn("flex-1", isDone && "text-zinc-500")}>{lessonIndex + 1}. {lesson.title}</span>
                        <span className="flex shrink-0 items-center gap-1 text-xs text-zinc-600"><Clock className="h-3 w-3" />{lesson.minutes} mnt</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-zinc-950 p-3 text-sm text-zinc-500">
                <LockKeyhole className="h-4 w-4" /> Lulus kuis bab sebelumnya dengan skor minimal 70 untuk membuka materi.
              </div>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {canTakeQuiz
                ? <Link href={`${courseBase}/quiz/${module.id}`} className={btnCls("primary")}>{latest && !latest.passed ? "Ulangi kuis remedial" : "Mulai kuis bab"}</Link>
                : <span aria-disabled="true" className={cn(btnCls("ghost"), "cursor-not-allowed opacity-50")}>
                    {!quizAvailable ? "Kuis belum tersedia" : !unlocked ? "Kuis terkunci" : "Selesaikan materi dahulu"}
                  </span>}
              {!canTakeQuiz && unlocked && quizAvailable && <span className="text-xs text-zinc-600">Selesaikan semua materi untuk membuka kuis.</span>}
              {!quizAvailable && <span className="text-xs text-zinc-600">{roadmapOnly ? "Roadmap ini belum memiliki kuis." : "Materi lengkap dan asesmen level ini dikembangkan bertahap."}</span>}
            </div>
          </Card>
          </Fragment>
        );
      })}
    </div>
  );
}
