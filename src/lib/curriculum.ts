import type { PillarSlug } from "./types";
import { CURRICULUM } from "@/data/curriculum";

export const getModules = (slug: string) => CURRICULUM[slug as PillarSlug] ?? [];

export const getLessons = (slug: string) =>
  getModules(slug).flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title }))
  );

export function findLesson(slug: string, lessonId: string) {
  const all = getLessons(slug);
  const i = all.findIndex((l) => l.id === lessonId);
  if (i < 0) return null;
  return { lesson: all[i], prev: all[i - 1] ?? null, next: all[i + 1] ?? null };
}