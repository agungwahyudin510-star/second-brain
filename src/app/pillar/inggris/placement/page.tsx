"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, Button, btnCls } from "@/components/ui";

const QUESTIONS = [
  { skill: "Grammar", level: "A1", prompt: "My brother ___ from Jakarta.", options: ["am", "is", "are", "be"], answer: 1, explanation: "Gunakan “is” dengan subjek orang ketiga tunggal." },
  { skill: "Vocabulary", level: "A1", prompt: "A place where you can borrow books is a ___.", options: ["library", "pharmacy", "station", "market"], answer: 0, explanation: "A library is a place where people can read or borrow books." },
  { skill: "Reading", level: "A1", text: "Rina works at a cafe. She starts at eight in the morning and takes the bus.", prompt: "How does Rina travel to work?", options: ["By bus", "By train", "On foot", "By car"], answer: 0, explanation: "The text says that she takes the bus." },
  { skill: "Grammar", level: "A2", prompt: "We ___ the museum last Saturday.", options: ["visit", "visited", "have visit", "are visiting"], answer: 1, explanation: "“Last Saturday” is a finished past time, so simple past fits." },
  { skill: "Vocabulary", level: "A2", prompt: "If a hotel room costs less than another, it is ___ than the other room.", options: ["cheap", "cheaper", "cheapest", "more cheap"], answer: 1, explanation: "Use a comparative adjective (“cheaper”) to compare two things." },
  { skill: "Reading", level: "A2", text: "Mira planned to walk to work, but heavy rain started. She took a taxi because she did not want to arrive late.", prompt: "Why did Mira take a taxi?", options: ["Her office was closed.", "She wanted to avoid being late.", "She forgot her shoes.", "The bus was free."], answer: 1, explanation: "She took a taxi because she did not want to arrive late." },
  { skill: "Grammar", level: "B1", prompt: "I ___ this book twice, so I know how it ends.", options: ["read", "have read", "am reading", "was read"], answer: 1, explanation: "Present perfect connects a past experience to the present; no finished past time is stated." },
  { skill: "Vocabulary", level: "B1", prompt: "The meeting was ___ until Friday because two people were ill.", options: ["put off", "put on", "put up", "put in"], answer: 0, explanation: "“Put off” means postpone." },
  { skill: "Reading", level: "B1", text: "The town opened a cycle lane last year. More people now cycle to work, although traffic data has not yet shown whether this reduced car use.", prompt: "What does the text say about the effect on car use?", options: ["It definitely fell.", "It definitely increased.", "The effect is not yet clear from the data.", "The cycle lane was closed."], answer: 2, explanation: "The text explicitly says the data has not shown whether car use fell." },
  { skill: "Grammar", level: "B2", prompt: "If the team ___ the warning earlier, it might have avoided the delay.", options: ["noticed", "had noticed", "would notice", "has noticed"], answer: 1, explanation: "This is a past unreal condition; the if-clause uses past perfect." },
  { skill: "Vocabulary", level: "B2", prompt: "Choose the most natural collocation: The report ___ serious concerns about safety.", options: ["raised", "lifted", "grew", "stood"], answer: 0, explanation: "“Raise concerns” is the natural collocation in this context." },
  { skill: "Reading", level: "B2", text: "Although the pilot programme improved attendance, the evaluation relied on one school and a short observation period. The authors therefore recommend a wider trial before drawing firm conclusions.", prompt: "What is the authors' main qualification?", options: ["Attendance declined everywhere.", "The evidence is promising but limited.", "The programme should end immediately.", "The school refused to participate."], answer: 1, explanation: "The authors note limits in sample and duration, and recommend wider evaluation." },
];

export default function EnglishPlacementPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = QUESTIONS.filter((question, index) => answers[index] === question.answer).length;
  const estimatedLevel = score >= 10 ? "B2" : score >= 7 ? "B1" : score >= 4 ? "A2" : "A1";

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-zinc-500">12 soal • grammar, vocabulary, reading</p>
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
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">Estimasi ini berasal dari sampel kecil dan tidak mengukur semua keterampilan. Jika terasa terlalu sulit, mulai A1. Hasil tidak membatasi akses materi.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/pillar/inggris/curriculum" className={btnCls("primary")}>Mulai kurikulum A1</Link>
            <Link href="/pillar/inggris/progress" className={btnCls("ghost")}>Lihat progres</Link>
          </div>
        </Card>
      )}
    </div>
  );
}
