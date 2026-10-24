"use client";

import { useCourseProgress } from "@/hooks/useCourseProgress";
import { ECONOMICS_PROGRESS_KEY } from "@/lib/economics-progress";

export function useEconomicsProgress() {
  return useCourseProgress(ECONOMICS_PROGRESS_KEY, "Ekonomi");
}
