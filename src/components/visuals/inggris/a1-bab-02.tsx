"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA1Bab02Visuals = {
  "eng-a1-2-be-affirmative": makeVisual(SentenceBuilder, {
    title: "Susun kalimat dengan be",
    caption: "Ketuk kata sesuai urutan.",
    items: [
      {
        prompt: "Saya seorang pelajar.",
        tiles: ["I", "am", "a", "student."],
        answer: "I am a student.",
        explanation: "Pakai am setelah I.",
      },
      {
        prompt: "Dia (perempuan) berasal dari Bali.",
        tiles: ["She", "is", "from", "Bali."],
        answer: "She is from Bali.",
        explanation: "She pakai is.",
      },
      {
        prompt: "Kami adalah teman.",
        tiles: ["We", "are", "friends."],
        answer: "We are friends.",
        explanation: "We pakai are.",
      },
      {
        prompt: "Mereka ada di kelas.",
        tiles: ["They", "are", "in", "class."],
        answer: "They are in class.",
        explanation: "They pakai are.",
      },
    ],
  }),
  "eng-a1-2-be-negative": makeVisual(FillBlank, {
    title: "Pilih bentuk negatif",
    caption: "Be + not.",
    items: [
      {
        sentence: "She ___ a teacher.",
        options: ["isn't", "aren't", "am not", "don't"],
        answer: 0,
        explanation: "She memakai is, bentuk negatifnya isn't.",
      },
      {
        sentence: "They ___ at home.",
        options: ["isn't", "aren't", "am not", "doesn't"],
        answer: 1,
        explanation: "They memakai are, negatifnya aren't.",
      },
      {
        sentence: "I ___ late.",
        options: ["isn't", "aren't", "am not", "amn't"],
        answer: 2,
        explanation: "I memakai am; bentuk negatifnya I am not atau I'm not (tidak ada amn't).",
      },
      {
        sentence: "It ___ expensive.",
        options: ["aren't", "isn't", "am not", "don't"],
        answer: 1,
        explanation: "It memakai is, negatifnya isn't.",
      },
      {
        sentence: "We ___ students.",
        options: ["isn't", "am not", "aren't", "doesn't"],
        answer: 2,
        explanation: "We memakai are, negatifnya aren't.",
      },
    ],
  }),
  "eng-a1-2-be-questions": makeVisual(DialogueChoice, {
    title: "Pertanyaan dan jawaban singkat",
    caption: "Pilih jawaban singkat yang tepat.",
    turns: [
      {
        speaker: "Ana",
        line: "Are you a student?",
        options: ["Yes, I am.", "Yes, I'm.", "Yes, you are.", "Yes, I do."],
        answer: 0,
        explanation: "Jawaban singkat untuk Are you...? dari sisimu adalah Yes, I am.",
      },
      {
        speaker: "Ana",
        line: "Is Budi your brother?",
        options: ["Yes, he is.", "Yes, he's.", "Yes, he does.", "Yes, is he."],
        answer: 0,
        explanation: "Jawaban singkat memakai he is, bukan bentuk singkat he's pada akhir kalimat.",
      },
      {
        speaker: "Ana",
        line: "Are Rina and Sari teachers?",
        options: ["No, they aren't.", "No, they don't.", "No, she isn't.", "No, we aren't."],
        answer: 0,
        explanation: "Dua orang lain: they; negatifnya aren't.",
      },
    ],
  }),
  "eng-a1-2-personal-info": makeVisual(MatchPairs, {
    title: "Cocokkan pertanyaan dan jawaban",
    caption: "Kata tanya menentukan jenis jawaban.",
    pairs: [
      { left: "What is your name?", right: "My name is Dewi." },
      { left: "How old are you?", right: "I am twenty." },
      { left: "Where are you from?", right: "I am from Medan." },
      { left: "What is your job?", right: "I am a nurse." },
    ],
  }),
  "eng-a1-2-possessives": makeVisual(FillBlank, {
    title: "Pilih possessive adjective",
    caption: "my, your, his, her, its, our, their.",
    items: [
      {
        sentence: "Rina is my friend. ___ brother is a teacher.",
        options: ["Her", "She", "Hers", "Their"],
        answer: 0,
        explanation: "Brother dimiliki Rina (perempuan), pakai her sebelum kata benda.",
      },
      {
        sentence: "This is my friend. ___ name is Budi.",
        options: ["Her", "Their", "His", "Our"],
        answer: 2,
        explanation: "Budi laki-laki, jadi his.",
      },
      {
        sentence: "We are students. ___ teacher is kind.",
        options: ["Our", "We", "Us", "Your"],
        answer: 0,
        explanation: "Guru milik kami: our.",
      },
      {
        sentence: "Dina and Sari live here. ___ house is big.",
        options: ["Her", "Their", "Our", "His"],
        answer: 1,
        explanation: "Milik dua orang lain: their.",
      },
      {
        sentence: "I have a cat. ___ name is Momo.",
        options: ["Its", "His", "Her", "Our"],
        answer: 0,
        explanation: "Kucing = benda/hewan, pakai its.",
      },
    ],
  }),
};
