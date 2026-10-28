import type { CurriculumModule } from "@/lib/types";

export interface QuizAttempt {
  id: string;
  moduleId: string;
  score: number;
  passed: boolean;
  submittedAt: string;
  durationSeconds: number;
  answers: Record<string, number>;
  essayScores: Record<string, number[]>;
  incorrectConcepts: string[];
}

export interface CourseProgress {
  version: 1;
  attempts: QuizAttempt[];
  examAttempts: QuizAttempt[];
}

export type EconomicsProgress = CourseProgress;
export type ChapterStatus = "Terkunci" | "Belum dimulai" | "Sedang dipelajari" | "Menunggu kuis" | "Lulus" | "Perlu remedial";

export const ECONOMICS_PROGRESS_KEY = "sb-economics-progress-v2";
export const PSYCHOLOGY_PROGRESS_KEY = "sb-psychology-progress-v1";
export const ENGLISH_PROGRESS_KEY = "sb-english-progress-v1";
export const WEB3_PROGRESS_KEY = "sb-web3-progress-v1";

const UNLOCK_ALL_CHAPTERS_FOR_DEVELOPMENT = true;

export const EMPTY_COURSE_PROGRESS: CourseProgress = {
  version: 1,
  attempts: [],
  examAttempts: [],
};
export const EMPTY_ECONOMICS_PROGRESS = EMPTY_COURSE_PROGRESS;

function isStringRecord(value: unknown): value is Record<string, number> {
  return typeof value === "object" && value !== null &&
    Object.values(value).every((entry) => typeof entry === "number" && Number.isInteger(entry));
}

function isEssayScoreRecord(value: unknown): value is Record<string, number[]> {
  return typeof value === "object" && value !== null &&
    Object.values(value).every((entry) => Array.isArray(entry) &&
      entry.every((score) => typeof score === "number" && Number.isInteger(score) && score >= 0 && score <= 5));
}

function isAttempt(value: unknown): value is QuizAttempt {
  if (typeof value !== "object" || value === null) return false;
  const attempt = value as Record<string, unknown>;
  return typeof attempt.id === "string" &&
    typeof attempt.moduleId === "string" &&
    typeof attempt.score === "number" && attempt.score >= 0 && attempt.score <= 100 &&
    typeof attempt.passed === "boolean" &&
    typeof attempt.submittedAt === "string" &&
    typeof attempt.durationSeconds === "number" && attempt.durationSeconds >= 0 &&
    isStringRecord(attempt.answers) &&
    isEssayScoreRecord(attempt.essayScores) &&
    Array.isArray(attempt.incorrectConcepts) && attempt.incorrectConcepts.every((item) => typeof item === "string");
}

export function parseCourseProgress(value: unknown): CourseProgress {
  if (typeof value !== "object" || value === null) {
    throw new Error("Format progres tidak valid.");
  }
  const record = value as Record<string, unknown>;
  if (record.version !== 1 || !Array.isArray(record.attempts) || !Array.isArray(record.examAttempts)) {
    throw new Error("Versi data progres tidak didukung. Data lama dipertahankan dan belum ditimpa.");
  }
  if (!record.attempts.every(isAttempt) || !record.examAttempts.every(isAttempt)) {
    throw new Error("Sebagian data progres rusak. Data dipertahankan dan tidak akan ditimpa.");
  }
  return {
    version: 1,
    attempts: record.attempts,
    examAttempts: record.examAttempts,
  };
}

export const parseEconomicsProgress = parseCourseProgress;

export function getLatestAttempt(attempts: QuizAttempt[], moduleId: string) {
  return attempts
    .filter((attempt) => attempt.moduleId === moduleId)
    .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))[0] ?? null;
}

export function getBestAttempt(attempts: QuizAttempt[], moduleId: string) {
  return attempts
    .filter((attempt) => attempt.moduleId === moduleId)
    .reduce<QuizAttempt | null>((best, attempt) => !best || attempt.score > best.score ? attempt : best, null);
}

export function hasPassedAttempt(attempts: QuizAttempt[], moduleId: string) {
  return attempts.some((attempt) => attempt.moduleId === moduleId && attempt.passed);
}

export function isChapterUnlocked(modules: CurriculumModule[], index: number, attempts: QuizAttempt[]) {
  if (UNLOCK_ALL_CHAPTERS_FOR_DEVELOPMENT) return true;
  if (index <= 0) return true;
  return hasPassedAttempt(attempts, modules[index - 1].id);
}

export function getChapterStatus(
  module: CurriculumModule,
  index: number,
  modules: CurriculumModule[],
  attempts: QuizAttempt[],
  completedLessons: string[]
): ChapterStatus {
  if (!isChapterUnlocked(modules, index, attempts)) return "Terkunci";
  const chapterAttempts = attempts.filter((attempt) => attempt.moduleId === module.id);
  if (chapterAttempts.some((attempt) => attempt.passed)) return "Lulus";
  if (chapterAttempts.length) return "Perlu remedial";
  const completed = module.lessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
  if (completed === module.lessons.length) return "Menunggu kuis";
  return completed > 0 ? "Sedang dipelajari" : "Belum dimulai";
}
