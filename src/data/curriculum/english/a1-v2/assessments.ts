import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";

export const qe = (
  id: string,
  concept: string,
  prompt: string,
  options: string[],
  answerIndex: number,
  correctReason: string,
  distractorReasons: string[],
): AssessmentQuestion => {
  let distractorIndex = 0;
  const distractors = options
    .map((_, index) => index === answerIndex
      ? null
      : `${String.fromCharCode(65 + index)}. ${distractorReasons[distractorIndex++]}`)
    .filter(Boolean)
    .join(" ");

  return {
    id,
    concept,
    prompt,
    options,
    answer: answerIndex,
    explanation: `Jawaban benar: ${options[answerIndex]}. ${correctReason} Pengecoh: ${distractors}`,
  };
};

export const ENGLISH_A1_V2_QUIZZES: Record<string, AssessmentQuestion[]> = {};
export const ENGLISH_A1_V2_ESSAYS: Record<string, EssayPrompt[]> = {};
