"use client";

import { useCallback, useEffect, useState } from "react";
import {
  EMPTY_COURSE_PROGRESS,
  parseCourseProgress,
  type CourseProgress,
  type QuizAttempt,
} from "@/lib/economics-progress";

export function useCourseProgress(storageKey: string, courseLabel: string) {
  const [progress, setProgress] = useState<CourseProgress>(EMPTY_COURSE_PROGRESS);
  const [hydrated, setHydrated] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);

  useEffect(() => {
    setProgress(EMPTY_COURSE_PROGRESS);
    setStorageError(null);
    setHydrated(false);
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) setProgress(parseCourseProgress(JSON.parse(raw)));
    } catch (error) {
      setStorageError(error instanceof Error ? error.message : `Progres ${courseLabel} tidak dapat dibaca.`);
    } finally {
      setHydrated(true);
    }
  }, [courseLabel, storageKey]);

  const persist = useCallback((next: CourseProgress) => {
    if (storageError) return false;
    setProgress(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      return true;
    } catch (error) {
      setStorageError(error instanceof Error
        ? `Progres hanya tersimpan sementara di memori: ${error.message}`
        : `Progres ${courseLabel} tidak dapat disimpan ke browser.`);
      return false;
    }
  }, [courseLabel, storageError, storageKey]);

  const saveAttempt = useCallback((attempt: QuizAttempt, isExam = false) => {
    const collection = isExam ? progress.examAttempts : progress.attempts;
    return persist({
      ...progress,
      [isExam ? "examAttempts" : "attempts"]: [...collection, attempt],
    });
  }, [persist, progress]);

  const resetProgress = useCallback(() => {
    try {
      window.localStorage.removeItem(storageKey);
      setProgress(EMPTY_COURSE_PROGRESS);
      setStorageError(null);
      return true;
    } catch (error) {
      setStorageError(error instanceof Error ? error.message : `Progres ${courseLabel} tidak dapat dihapus.`);
      return false;
    }
  }, [courseLabel, storageKey]);

  return { progress, hydrated, storageError, saveAttempt, resetProgress };
}
