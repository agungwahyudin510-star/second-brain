export type PillarSlug = "ekonomi" | "inggris" | "web3" | "psikologi";

export interface Note {
  id: string;
  pillar: PillarSlug;
  title: string;
  category: string;
  content: string; // markdown
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  example?: string;
}

export interface CardProgress {
  box: number; // 1-5 (Leitner)
  due: string; // YYYY-MM-DD
}

export interface AuditSet {
  id: string;
  pillar: PillarSlug;
  title: string;
  description: string;
  items: { id: string; text: string }[];
}

export interface StudyEntry {
  id: string;
  date: string;
  minutes: number;
  pillar: PillarSlug;
  note: string;
}

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  content: string; // markdown
}

export interface CurriculumModule {
  id: string;
  title: string;
  summary: string;
  lessons: Lesson[];
}