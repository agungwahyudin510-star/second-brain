import type { CurriculumModule } from "@/lib/types";

const lessons = [
  { title: "", minutes: 0, content: "", audioText: "" },
  { title: "", minutes: 0, content: "", audioText: "" },
  { title: "", minutes: 0, content: "", audioText: "" },
  { title: "", minutes: 0, content: "", audioText: "" },
  { title: "", minutes: 0, content: "", audioText: "" },
].map((lesson, index) => ({
  id: `eng-a1-1-${index + 1}`,
  title: lesson.title,
  minutes: lesson.minutes,
  content: lesson.content,
  speechText: lesson.audioText,
}));

export const ENGLISH_A1_BAB_01_TEMPLATE: CurriculumModule = {
  id: "eng-a1-1",
  title: "",
  summary: "",
  lessons,
  chapterResources: {
    summary: [],
    glossary: [],
    exercises: [],
    furtherReading: [],
  },
};
