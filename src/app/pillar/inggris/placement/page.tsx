"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, Button, btnCls } from "@/components/ui";

const QUESTIONS = [
  { skill: "Grammar", level: "A1", prompt: "My sister ___ a nurse.", options: ["am", "is", "are", "be"], answer: 1, explanation: "Gunakan “is” untuk subjek orang ketiga tunggal." },
  { skill: "Grammar", level: "A1", prompt: "How ___ apples do you want?", options: ["much", "more", "any", "many"], answer: 3, explanation: "“Apples” adalah kata benda yang dapat dihitung." },
  { skill: "Vocabulary", level: "A1", prompt: "What is the opposite of “big”?", options: ["small", "long", "wide", "tall"], answer: 0, explanation: "“Small” adalah lawan kata “big”." },
  { skill: "Reading", level: "A1", text: "Tom gets up at six. He has breakfast at seven. He goes to school at eight.", prompt: "When does Tom have breakfast?", options: ["At six", "At eight", "At seven", "At nine"], answer: 2, explanation: "Teks menyebutkan bahwa Tom sarapan pukul tujuh." },
  { skill: "Grammar", level: "A1", prompt: "Look! The baby ___.", options: ["sleep", "is sleeping", "sleeps", "slept"], answer: 1, explanation: "Present continuous digunakan untuk kegiatan yang sedang terjadi." },
  { skill: "Grammar", level: "A2", prompt: "Yesterday I ___ to the market.", options: ["go", "gone", "going", "went"], answer: 3, explanation: "“Yesterday” menandakan waktu lampau; bentuk lampau “go” adalah “went”." },
  { skill: "Grammar", level: "A2", prompt: "This bag is ___ than that one.", options: ["cheaper", "cheap", "cheapest", "more cheap"], answer: 0, explanation: "Gunakan bentuk perbandingan “cheaper” untuk membandingkan dua benda." },
  { skill: "Grammar", level: "A2", prompt: "You ___ see a doctor. You look ill.", options: ["could", "would", "should", "might"], answer: 2, explanation: "“Should” digunakan untuk memberi saran." },
  { skill: "Reading", level: "A2", text: "Dewi has never traveled by plane. She is going to fly to Bali next month and feels excited but a little nervous.", prompt: "How does Dewi feel about her trip?", options: ["Tired and bored", "Excited and a little nervous", "Angry and worried", "Calm and sleepy"], answer: 1, explanation: "Teks menyebutkan bahwa Dewi merasa bersemangat tetapi sedikit gugup." },
  { skill: "Vocabulary", level: "A2", prompt: "A ___ is a person who cooks in a restaurant.", options: ["waiter", "pilot", "farmer", "chef"], answer: 3, explanation: "A chef cooks food in a restaurant." },
  { skill: "Grammar", level: "B1", prompt: "I ___ here since 2020.", options: ["have lived", "live", "am living", "lived"], answer: 0, explanation: "Present perfect digunakan dengan “since” untuk keadaan yang berlanjut hingga sekarang." },
  { skill: "Grammar", level: "B1", prompt: "If it rains tomorrow, we ___ at home.", options: ["stayed", "would stays", "will stay", "staying"], answer: 2, explanation: "First conditional memakai present simple pada klausa if dan “will” pada hasilnya." },
  { skill: "Vocabulary", level: "B1", prompt: "The meeting was ___ until next week.", options: ["taken off", "put off", "made up", "turned on"], answer: 1, explanation: "“Put off” berarti menunda." },
  { skill: "Reading", level: "B1", text: "The library will close at 5 p.m. on Fridays from next month. Staff say fewer people visit in the evening, but students have asked the council to reconsider.", prompt: "What have the students done?", options: ["They have closed the library early.", "They have asked staff to visit in the evening.", "They have changed the library hours.", "They have asked the council to reconsider."], answer: 3, explanation: "Teks menyebutkan bahwa siswa meminta dewan untuk mempertimbangkan kembali." },
  { skill: "Grammar", level: "B1", prompt: "The man ___ lives next door is a doctor.", options: ["whose", "which", "who", "what"], answer: 2, explanation: "“Who” digunakan untuk merujuk pada orang dalam relative clause." },
  { skill: "Grammar", level: "B2", prompt: "If I ___ earlier, I would have caught the train.", options: ["left", "had left", "would leave", "have left"], answer: 1, explanation: "Third conditional memakai past perfect pada klausa if." },
  { skill: "Grammar", level: "B2", prompt: "He insisted ___ paying for dinner.", options: ["in", "at", "for", "on"], answer: 3, explanation: "Kata kerja “insist” diikuti preposisi “on”." },
  { skill: "Grammar", level: "B2", prompt: "By the time we arrived, the film ___.", options: ["had started", "starts", "has started", "was starting"], answer: 0, explanation: "Past perfect menunjukkan film mulai sebelum kami tiba." },
  { skill: "Reading", level: "B2", text: "Although the new app saves time for most users, older users report that it is confusing. The developers say they will test simpler designs before the next update.", prompt: "What will the developers do?", options: ["Remove the app before the update.", "Ask older users to save time.", "Test simpler designs.", "Keep the current design unchanged."], answer: 2, explanation: "Pengembang mengatakan akan menguji desain yang lebih sederhana." },
  { skill: "Vocabulary", level: "B2", prompt: "His argument was not ___; it contained several logical gaps.", options: ["ordinary", "convincing", "available", "patient"], answer: 1, explanation: "“Convincing” berarti meyakinkan, sesuai konteks argumen." },
];

export default function EnglishPlacementPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = QUESTIONS.filter((question, index) => answers[index] === question.answer).length;
  const levelScores = ["A1", "A2", "B1", "B2"].map((level) => ({
    level,
    score: QUESTIONS.reduce((total, question, index) => total + (question.level === level && answers[index] === question.answer ? 1 : 0), 0),
  }));
  const firstLevelScore = levelScores[0].score;
  const estimatedLevel = (() => {
    if (firstLevelScore < 3) return "Pra-A1";
    let currentLevel = "A1";
    for (const result of levelScores.slice(1)) {
      if (result.score < 3) break;
      currentLevel = result.level;
    }
    return currentLevel;
  })();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-zinc-500">20 soal • grammar, vocabulary, reading</p>
        <h1 className="mt-1 text-2xl font-bold">Perkiraan level awal</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">Tes singkat ini memberi sinyal awal, bukan penempatan adaptif atau sertifikasi CEFR. Dengarkan, menulis, dan berbicara tidak diuji di sini. Kamu tetap boleh mulai dari A1 kapan pun dan materi dasar tidak dikunci permanen.</p>
      </div>

      {QUESTIONS.map((question, index) => (
        <Card key={question.prompt} className="space-y-3">
          <div className="flex flex-wrap gap-2 text-xs text-zinc-500"><span>{question.skill}</span><span>•</span><span>Target {question.level}</span></div>
          {question.text && <p className="rounded-lg bg-zinc-950 p-3 text-sm leading-relaxed text-zinc-300">{question.text}</p>}
          <h2 className="font-medium">{index + 1}. {question.prompt}</h2>
          <div className="space-y-2">
            {question.options.map((option, optionIndex) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 rounded-lg border border-zinc-800 p-3 text-sm text-zinc-300">
                <input type="radio" name={`placement-${index}`} checked={answers[index] === optionIndex} onChange={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))} disabled={submitted} className="accent-sky-400" />
                {option}
              </label>
            ))}
          </div>
          {submitted && <p className={`text-sm ${answers[index] === question.answer ? "text-emerald-300" : "text-amber-300"}`}>{answers[index] === question.answer ? "Benar." : `Jawaban: ${question.options[question.answer]}.`} {question.explanation}</p>}
        </Card>
      ))}

      {!submitted ? (
        <Button type="button" disabled={Object.keys(answers).length !== QUESTIONS.length} onClick={() => setSubmitted(true)}>Lihat estimasi</Button>
      ) : (
        <Card className="border-sky-500/20">
          <p className="text-sm text-zinc-500">Hasil estimasi awal</p>
          <h2 className="mt-1 text-2xl font-bold">{estimatedLevel} • {score}/{QUESTIONS.length}</h2>
          <p className="mt-2 text-sm text-zinc-300">{levelScores.map(({ level, score: levelScore }) => `${level} ${levelScore}/5`).join(" • ")}</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">Estimasi ini berasal dari sampel kecil dan tidak mengukur semua keterampilan. Jika terasa terlalu sulit, mulai A1. Hasil tidak membatasi akses materi.</p>
          {estimatedLevel !== "Pra-A1" && estimatedLevel !== "A1" && <p className="mt-2 text-sm text-amber-300">A2-B2 sedang disiapkan.</p>}
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/pillar/inggris/curriculum" className={btnCls("primary")}>Buka kurikulum</Link>
            <Link href="/pillar/inggris/progress" className={btnCls("ghost")}>Lihat progres</Link>
          </div>
        </Card>
      )}
    </div>
  );
}
