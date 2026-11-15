"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishB1Bab03Visuals = {
  "eng-b1-3-opinions": makeVisual(DialogueChoice, {
    title: "Menyampaikan opini",
    caption: "Pilih ungkapan yang sesuai untuk menyatakan pandangan dalam percakapan.",
    turns: [
      {
        speaker: "Maya",
        line: "How do you feel about the new reading room?",
        options: ["In my opinion, it is useful.", "The room has two doors.", "Does the room open today?"],
        answer: 0,
        explanation: "In my opinion secara langsung memperkenalkan pandangan.",
      },
      {
        speaker: "Rafi",
        line: "Which opening is more personal?",
        options: ["The notice says it opens at nine.", "Personally, I prefer the morning.", "The room is next to the hall."],
        answer: 1,
        explanation: "Personally menandai pilihan atau pandangan pembicara.",
      },
      {
        speaker: "Maya",
        line: "Give a gentle recommendation about the two plans.",
        options: ["I'd say the first plan is easier.", "The first plan starts at noon.", "Which plan did you choose?"],
        answer: 0,
        explanation: "I'd say memperkenalkan penilaian atau rekomendasi dengan nada ringan.",
      },
    ],
  }),
  "eng-b1-3-agree": makeVisual(SentenceBuilder, {
    title: "Susun tanggapan yang sopan",
    caption: "Susun ubin untuk menyetujui atau berbeda pendapat dengan santun.",
    items: [
      { prompt: "Setujui pendapat seseorang.", tiles: ["I", "agree", "with", "your", "point."], answer: "I agree with your point.", explanation: "Gunakan agree with untuk menyatakan setuju terhadap orang atau gagasan." },
      { prompt: "Akui pandangan lalu nyatakan perbedaan.", tiles: ["I", "see", "your", "point,", "but", "I", "prefer", "the", "earlier", "time."], answer: "I see your point, but I prefer the earlier time.", explanation: "Ungkapan ini mengakui poin sebelum menyampaikan pandangan berbeda." },
      { prompt: "Nyatakan ketidaksetujuan dengan nada lunak.", tiles: ["I'm", "afraid", "I", "don't", "agree", "with", "that", "idea."], answer: "I'm afraid I don't agree with that idea.", explanation: "I'm afraid I don't agree menyatakan perbedaan secara sopan." },
      { prompt: "Tunjukkan persetujuan sebagian.", tiles: ["I", "partly", "agree,", "although", "I", "have", "one", "concern."], answer: "I partly agree, although I have one concern.", explanation: "Partly agree menyampaikan persetujuan yang tidak sepenuhnya." },
    ],
  }),
  "eng-b1-3-reasons": makeVisual(FillBlank, {
    title: "Alasan dan contoh",
    caption: "Pilih linker berdasarkan hubungan makna dan bentuk yang mengikutinya.",
    items: [
      { sentence: "I chose the library ___ it is quiet.", options: ["because", "for example", "such as", "so"], answer: 0, explanation: "Because memperkenalkan klausa alasan." },
      { sentence: "___, students can read quietly in the small room.", options: ["Because", "For example", "Such as", "So"], answer: 1, explanation: "For example dapat membuka klausa yang memberi satu contoh." },
      { sentence: "She enjoys outdoor activities ___ hiking and cycling.", options: ["because", "for example", "such as", "so"], answer: 2, explanation: "Such as memperkenalkan daftar contoh berupa noun atau gerund." },
      { sentence: "The bus was delayed, ___ we arrived late.", options: ["because", "for example", "such as", "so"], answer: 3, explanation: "So memperkenalkan akibat dari keterlambatan bus." },
    ],
  }),
  "eng-b1-3-hedging": makeVisual(ListenChoose, {
    title: "Dengarkan kalimat yang lebih berhati-hati",
    caption: "Putar tiap pasangan dan pilih pernyataan yang klaimnya dilunakkan.",
    items: [
      { text: "Everyone finds the new timetable difficult. Some students may find the new timetable difficult.", options: ["Everyone finds the new timetable difficult.", "Some students may find the new timetable difficult."], answer: 1, explanation: "May dan some membatasi tingkat kepastian serta cakupan klaim." },
      { text: "This approach always works. This approach tends to work for short tasks.", options: ["This approach always works.", "This approach tends to work for short tasks."], answer: 1, explanation: "Tends to dan batas for short tasks menghindari klaim mutlak." },
      { text: "The room is perfect. The room seems a bit more comfortable.", options: ["The room is perfect.", "The room seems a bit more comfortable."], answer: 1, explanation: "Seems dan a bit melunakkan penilaian." },
    ],
  }),
  "eng-b1-3-balanced": makeVisual(SentenceBuilder, {
    title: "Susun paragraf opini seimbang",
    caption: "Susun linker untuk memperkenalkan sisi, kontras, dan kesimpulan.",
    items: [
      { prompt: "Perkenalkan sisi pertama.", tiles: ["On", "the", "one", "hand,", "online", "classes", "save", "travel", "time."], answer: "On the one hand, online classes save travel time.", explanation: "On the one hand memperkenalkan satu sisi pertimbangan." },
      { prompt: "Perkenalkan sisi yang berlawanan.", tiles: ["On", "the", "other", "hand,", "some", "learners", "miss", "class", "discussion."], answer: "On the other hand, some learners miss class discussion.", explanation: "On the other hand memperkenalkan sisi berbeda." },
      { prompt: "Tunjukkan kontras dalam kalimat baru.", tiles: ["The", "course", "is", "flexible.", "However,", "students", "need", "a", "quiet", "place."], answer: "The course is flexible. However, students need a quiet place.", explanation: "However menghubungkan kalimat kontras dengan tanda baca yang sesuai." },
      { prompt: "Simpulkan penilaian setelah menimbang kedua sisi.", tiles: ["Overall,", "I", "think", "a", "mixed", "schedule", "is", "useful."], answer: "Overall, I think a mixed schedule is useful.", explanation: "Overall memperkenalkan penilaian menyeluruh di bagian kesimpulan." },
    ],
  }),
};
