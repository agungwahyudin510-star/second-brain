"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { ECONOMICS_PROGRESS_KEY } from "@/lib/economics-progress";
import { Button, Card, inputCls } from "@/components/ui";
import type { QuizAttempt } from "@/lib/economics-progress";

const DEFAULT_RUBRIC_LABELS = ["Ketepatan konsep", "Kualitas alasan", "Penerapan konsep", "Kejelasan jawaban"];

export default function AssessmentRunner({
  moduleId,
  title,
  questions,
  essays,
  returnHref,
  isExam = false,
  progressStorageKey = ECONOMICS_PROGRESS_KEY,
  rubricLabels = DEFAULT_RUBRIC_LABELS,
}: {
  moduleId: string;
  title: string;
  questions: AssessmentQuestion[];
  essays: EssayPrompt[];
  returnHref: string;
  isExam?: boolean;
  progressStorageKey?: string;
  rubricLabels?: string[];
}) {
  const { saveAttempt, storageError, hydrated } = useCourseProgress(progressStorageKey, title);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [essayScores, setEssayScores] = useState<Record<string, number[]>>({});
  const [result, setResult] = useState<QuizAttempt | null>(null);
  const [startedAt] = useState(() => Date.now());

  const allAnswered = questions.every((question) => answers[question.id] !== undefined) &&
    essays.every((essay) =>
      Boolean(responses[essay.id]?.trim()) &&
      essayScores[essay.id]?.length === rubricLabels.length &&
      rubricLabels.every((_, index) => essayScores[essay.id][index] !== undefined)
    );

  const scoreParts = useMemo(() => {
    const correct = questions.filter((question) => answers[question.id] === question.answer).length;
    const multipleChoice = correct * (60 / questions.length);
    const essaysTotal = Object.values(essayScores).reduce(
      (sum, scores) => sum + scores.reduce((essaySum, score) => essaySum + score, 0),
      0
    );
    return { correct, multipleChoice, essaysTotal };
  }, [answers, essayScores, questions]);

  function submitAssessment() {
    if (!allAnswered || result || !hydrated) return;
    const score = Math.round(scoreParts.multipleChoice + scoreParts.essaysTotal);
    const attempt: QuizAttempt = {
      id: `${moduleId}-${Date.now()}`,
      moduleId,
      score,
      passed: score >= 70,
      submittedAt: new Date().toISOString(),
      durationSeconds: Math.max(0, Math.round((Date.now() - startedAt) / 1000)),
      answers,
      essayScores,
      incorrectConcepts: questions
        .filter((question) => answers[question.id] !== question.answer)
        .map((question) => question.concept),
    };
    saveAttempt(attempt, isExam);
    setResult(attempt);
  }

  return (
    <div className="space-y-6">
      <Link href={returnHref} className="text-sm text-zinc-400 hover:text-white">← Kembali ke kurikulum</Link>
      <div>
        <p className="text-sm text-zinc-500">{isExam ? "Ujian akhir • penilaian pembelajaran" : "Kuis bab • 8 pilihan ganda + 2 uraian"}</p>
        <h1 className="mt-1 text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Pilihan ganda bernilai total 60 poin. Nilai uraian adalah penilaian mandiri dengan rubrik (total 40 poin); tidak ada penilaian AI.
          Jawaban uraian tidak disimpan di browser.
        </p>
      </div>

      {storageError && (
        <Card className="border-amber-500/30 text-sm text-amber-200">
          <div className="flex items-start gap-2"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /><p>{storageError} Hasil sesi tetap terlihat, tetapi progres tidak dapat diperbarui sampai masalah penyimpanan ditangani.</p></div>
        </Card>
      )}

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Pilihan ganda <span className="text-sm font-normal text-zinc-500">({questions.length} soal)</span></h2>
        {questions.map((question, index) => (
          <Card key={question.id} className="space-y-3">
            <h3 className="font-medium">{index + 1}. {question.prompt}</h3>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <label key={option} className="flex cursor-pointer items-start gap-3 rounded-lg border border-zinc-800 p-3 text-sm hover:bg-zinc-800/50">
                  <input
                    type="radio"
                    name={question.id}
                    value={optionIndex}
                    checked={answers[question.id] === optionIndex}
                    onChange={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                    disabled={Boolean(result)}
                    className="mt-0.5 accent-zinc-100"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {result && (
              <div className="border-t border-zinc-800 pt-3 text-sm">
                <p className={answers[question.id] === question.answer ? "text-emerald-300" : "text-rose-300"}>
                  {answers[question.id] === question.answer ? "Benar" : "Belum tepat"} — jawaban: {question.options[question.answer]}
                </p>
                <p className="mt-1 text-zinc-400">{question.explanation}</p>
              </div>
            )}
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Uraian dan penilaian mandiri <span className="text-sm font-normal text-zinc-500">(20 poin per soal)</span></h2>
        {essays.map((essay, essayIndex) => (
          <Card key={essay.id} className="space-y-4">
            <div>
              <h3 className="font-medium">{essayIndex + 1}. {essay.prompt}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">{essay.rubric}</p>
              {result && essay.reviewPoints && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-sky-200">
                  {essay.reviewPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
            </div>
            <textarea
              value={responses[essay.id] ?? ""}
              onChange={(event) => setResponses((current) => ({ ...current, [essay.id]: event.target.value }))}
              disabled={Boolean(result)}
              placeholder="Tulis jawabanmu. Jawaban ini hanya digunakan selama sesi ini dan tidak disimpan."
              className={`${inputCls} min-h-32 resize-y`}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {rubricLabels.map((label, criterionIndex) => (
                <label key={label} className="text-sm text-zinc-400">
                  {label}
                  <select
                    value={essayScores[essay.id]?.[criterionIndex] ?? ""}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setEssayScores((current) => {
                        const scores = [...(current[essay.id] ?? [undefined, undefined, undefined, undefined])];
                        scores[criterionIndex] = value;
                        return { ...current, [essay.id]: scores as number[] };
                      });
                    }}
                    disabled={Boolean(result)}
                    className={`${inputCls} mt-1`}
                  >
                    <option value="" disabled>Pilih skor</option>
                    {[0, 1, 2, 3, 4, 5].map((score) => <option key={score} value={score}>{score} / 5</option>)}
                  </select>
                </label>
              ))}
            </div>
          </Card>
        ))}
      </section>

      {!result ? (
        <Button onClick={submitAssessment} disabled={!allAnswered || !hydrated} className="w-full sm:w-auto">
          Kirim jawaban dan hitung skor
        </Button>
      ) : (
        <Card className={result.passed ? "border-emerald-500/30" : "border-amber-500/30"}>
          <div className="flex items-center gap-3">
            {result.passed ? <CheckCircle2 className="h-6 w-6 text-emerald-400" /> : <XCircle className="h-6 w-6 text-amber-400" />}
            <div>
              <h2 className="text-xl font-bold">{result.score}/100 — {result.passed ? "Lulus" : "Perlu remedial"}</h2>
              <p className="text-sm text-zinc-400">Pilihan ganda: {scoreParts.correct}/{questions.length} benar ({Math.round(scoreParts.multipleChoice)}/60). Uraian berdasarkan rubrik mandiri: {scoreParts.essaysTotal}/40.</p>
            </div>
          </div>
          {result.incorrectConcepts.length > 0 && (
            <p className="mt-3 text-sm text-zinc-400">Konsep yang disarankan untuk diulang: {Array.from(new Set(result.incorrectConcepts)).join(", ")}.</p>
          )}
          {isExam && (
            <div className="mt-4 border-t border-zinc-800 pt-3">
              <h3 className="text-sm font-medium">Ringkasan per keterampilan yang diuji</h3>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {["Grammar", "Vocabulary", "Reading"].map((skill) => {
                  const skillQuestions = questions.filter((question) => question.skill === skill);
                  if (!skillQuestions.length) return null;
                  const skillCorrect = skillQuestions.filter((question) => answers[question.id] === question.answer).length;
                  return (
                    <li key={skill} className="flex justify-between gap-2 text-sm">
                      <span>{skill}</span><span>{skillCorrect}/{skillQuestions.length} benar ({Math.round((skillCorrect / skillQuestions.length) * 100)}%)</span>
                    </li>
                  );
                })}
                <li className="flex justify-between gap-2 text-sm">
                  <span>Writing (penilaian mandiri)</span>
                  <span>{scoreParts.essaysTotal}/{essays.length * rubricLabels.length * 5} poin</span>
                </li>
              </ul>
              <h3 className="text-sm font-medium">Distribusi hasil per bab</h3>
              <p className="mt-1 text-xs text-zinc-500">Satu soal sampel per bab; hasil ini adalah sinyal tinjauan, bukan ukuran penguasaan menyeluruh.</p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {questions.map((question) => {
                  const correct = answers[question.id] === question.answer;
                  return <li key={question.id} className="flex justify-between gap-2 text-sm"><span>{question.chapterTitle ?? question.concept}</span><span className={correct ? "text-emerald-300" : "text-amber-300"}>{correct ? "Benar" : "Perlu ditinjau"}</span></li>;
                })}
              </ul>
            </div>
          )}
          {storageError ? (
            <p className="mt-3 text-sm text-amber-200">Skor ini hanya tersedia selama sesi karena penyimpanan lokal mengalami kendala.</p>
          ) : (
            <p className="mt-3 text-sm text-zinc-500">Hasil tersimpan di localStorage pada browser ini. Data tidak tersinkron antarperangkat.</p>
          )}
          <Link href={returnHref} className="mt-4 inline-flex rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800">
            {result.passed ? "Lanjut ke kurikulum" : "Belajar ulang"}
          </Link>
        </Card>
      )}
    </div>
  );
}
