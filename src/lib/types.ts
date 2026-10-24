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
  codeLab?: {
    language: string;
    code: string;
    expectedOutput: string;
    runCommand: string;
    testCases: string[];
    hint: string;
  };
  visual?: "program-flow" | "data-structures" | "scope" | "event-loop" | "http-flow" | "git-branches";
  speechText?: string;
  listening?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
}

export interface CurriculumModule {
  id: string;
  title: string;
  summary: string;
  lessons: Lesson[];
  chapterResources?: {
    summary: string[];
    glossary: { term: string; english: string; definition: string }[];
    exercises: { prompt: string; solution: string }[];
    furtherReading: { title: string; authors: string }[];
  };
  phaseNumber?: number;
  phaseTitle?: string;
  roadmapOnly?: boolean;
}

export interface AssessmentQuestion {
  id: string;
  concept: string;
  skill?: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  chapterId?: string;
  chapterTitle?: string;
}

export interface EssayPrompt {
  id: string;
  prompt: string;
  rubric: string;
  reviewPoints?: string[];
}