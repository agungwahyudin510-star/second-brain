"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishB1Bab02Visuals = {
  "eng-b1-2-relative": makeVisual(FillBlank, {
    title: "Pilih relative word",
    caption: "Pilih kata yang menghubungkan noun dengan defining relative clause.",
    items: [
      { sentence: "The woman ___ works next door is a nurse.", options: ["which", "who", "where", "whose"], answer: 1, explanation: "Who menjadi subjek klausa yang menjelaskan orang." },
      { sentence: "This is the café ___ we first met.", options: ["who", "which", "whose", "where"], answer: 3, explanation: "Where memperkenalkan lokasi terjadinya pertemuan." },
      { sentence: "I met a writer ___ stories are popular.", options: ["whose", "who", "where", "which"], answer: 0, explanation: "Whose menunjukkan kepemilikan stories oleh writer." },
      { sentence: "The tool ___ I bought is easy to use.", options: ["where", "whose", "which", "who"], answer: 2, explanation: "Which merujuk pada benda sebagai objek dari bought." },
    ],
  }),
  "eng-b1-2-conditionals": makeVisual(FillBlank, {
    title: "Zero dan first conditional",
    caption: "Perhatikan apakah kalimat menyatakan fakta, kemungkinan, atau syarat.",
    items: [
      { sentence: "If you press this button, the screen ___.", options: ["turns on", "will turn on", "turned on", "turning on"], answer: 0, explanation: "Zero conditional memakai present simple untuk fungsi umum tombol." },
      { sentence: "If it ___ tomorrow, we'll cancel the picnic.", options: ["will rain", "rained", "rains", "raining"], answer: 2, explanation: "First conditional memakai present simple setelah if." },
      { sentence: "You can borrow my notes as long as you ___ them tomorrow.", options: ["return", "returns", "returned", "returning"], answer: 0, explanation: "Klausa syarat memakai present simple." },
      { sentence: "Unless we ___ now, we'll miss the train.", options: ["left", "leave", "will leave", "leaving"], answer: 1, explanation: "Unless berarti if not dan diikuti present simple untuk kondisi masa depan." },
    ],
  }),
  "eng-b1-2-second": makeVisual(SentenceBuilder, {
    title: "Susun second conditional",
    caption: "Susun klausa if hipotetis dan hasil dengan would.",
    items: [
      { prompt: "Jika saya punya lebih banyak waktu, saya akan belajar bahasa lain.", tiles: ["If", "I", "had", "more", "time,", "I", "would", "learn", "another", "language."], answer: "If I had more time, I would learn another language.", explanation: "If + past simple diikuti would + base verb." },
      { prompt: "Kalau saya jadi kamu, saya akan meminta bantuan.", tiles: ["If", "I", "were", "you,", "I", "would", "ask", "for", "help."], answer: "If I were you, I would ask for help.", explanation: "If I were you adalah pola umum untuk memberi saran." },
      { prompt: "Apa yang akan kamu lakukan jika kamu tinggal di dekat laut?", tiles: ["What", "would", "you", "do", "if", "you", "lived", "near", "the", "sea?"], answer: "What would you do if you lived near the sea?", explanation: "Pertanyaan memakai would di klausa utama dan past simple setelah if." },
      { prompt: "Dia tidak akan membeli mobil jika dia tidak membutuhkannya.", tiles: ["She", "wouldn't", "buy", "a", "car", "if", "she", "didn't", "need", "one."], answer: "She wouldn't buy a car if she didn't need one.", explanation: "Klausa hasil memakai wouldn't + base verb; if-clause memakai past simple." },
    ],
  }),
  "eng-b1-2-gerunds": makeVisual(FillBlank, {
    title: "Gerund atau infinitive?",
    caption: "Periksa kata kerja atau preposisi yang mendahului bagian kosong.",
    items: [
      { sentence: "I enjoy ___ before bed.", options: ["to read", "reading", "read", "reads"], answer: 1, explanation: "Enjoy diikuti gerund." },
      { sentence: "They decided ___ early.", options: ["leaving", "leave", "to leave", "left"], answer: 2, explanation: "Decide diikuti to-infinitive." },
      { sentence: "She is good at ___ difficult ideas.", options: ["explain", "explaining", "to explain", "explained"], answer: 1, explanation: "Preposisi at diikuti gerund." },
      { sentence: "We finished ___ the room.", options: ["clean", "to clean", "cleaned", "cleaning"], answer: 3, explanation: "Finish diikuti gerund." },
    ],
  }),
  "eng-b1-2-linking": makeVisual(DialogueChoice, {
    title: "Pilih linker yang sesuai",
    caption: "Pilih penghubung yang cocok dengan struktur dan hubungan makna.",
    turns: [
      {
        speaker: "Maya",
        line: "___ the weather was cold, we continued the walk.",
        options: ["Although", "Despite", "However"],
        answer: 0,
        explanation: "Although diikuti klausa lengkap dengan subjek dan kata kerja.",
      },
      {
        speaker: "Rafi",
        line: "We left early ___ we could catch the first bus.",
        options: ["so that", "despite", "whereas"],
        answer: 0,
        explanation: "So that + klausa menyatakan tujuan.",
      },
      {
        speaker: "Maya",
        line: "The road was closed. ___, we took another route.",
        options: ["Although", "Despite", "As a result"],
        answer: 2,
        explanation: "As a result memperkenalkan akibat dari penutupan jalan.",
      },
    ],
  }),
};
