"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA2Bab02Visuals = {
  "eng-a2-2-goingto": makeVisual(FillBlank, {
    title: "Rencana dengan going to",
    caption: "Pilih bentuk be going to yang sesuai konteks.",
    items: [
      { sentence: "Look at the clouds! It ___ rain.", options: ["are going to", "is going to", "am going to", "will going to"], answer: 1, explanation: "It menggunakan is; awan memberi bukti untuk prediksi." },
      { sentence: "I ___ visit my aunt next week.", options: ["am going to", "is going to", "are going to", "going to"], answer: 0, explanation: "I berpasangan dengan am." },
      { sentence: "They ___ play tennis this weekend.", options: ["is going to", "am going to", "are going to", "going"], answer: 2, explanation: "They berpasangan dengan are." },
      { sentence: "She ___ cook tonight; she has no plan to cook.", options: ["isn't going to", "aren't going to", "am not going to", "don't going to"], answer: 0, explanation: "She menggunakan isn't untuk bentuk negatif." },
    ],
  }),
  "eng-a2-2-will": makeVisual(FillBlank, {
    title: "Will atau going to?",
    caption: "Pilih bentuk yang cocok dengan keputusan, janji, atau bukti pada konteks.",
    items: [
      { sentence: "The phone is ringing. I ___ answer it.", options: ["am going to", "will", "are going to", "going to"], answer: 1, explanation: "Keputusan dibuat saat mendengar telepon berdering, jadi will sesuai." },
      { sentence: "Look at those dark clouds! It ___ rain.", options: ["will", "are going to", "is going to", "am going to"], answer: 2, explanation: "Bukti yang terlihat mendukung prediksi dengan is going to." },
      { sentence: "I promise I ___ help you tomorrow.", options: ["am going to", "is going to", "are going to", "will"], answer: 3, explanation: "Will lazim dipakai untuk menyampaikan janji." },
      { sentence: "We planned this yesterday. We ___ visit the museum.", options: ["are going to", "will", "is going to", "am going to"], answer: 0, explanation: "Rencana yang sudah dipikirkan dinyatakan dengan are going to." },
    ],
  }),
  "eng-a2-2-arrangements": makeVisual(MatchPairs, {
    title: "Cocokkan ungkapan waktu",
    caption: "Pasangkan ungkapan bahasa Inggris dengan artinya.",
    pairs: [
      { left: "tomorrow", right: "besok" },
      { left: "tonight", right: "malam ini" },
      { left: "next week", right: "minggu depan" },
      { left: "this weekend", right: "akhir pekan ini" },
    ],
  }),
  "eng-a2-2-invitations": makeVisual(DialogueChoice, {
    title: "Ajakan dan respons",
    caption: "Pilih respons yang sesuai di setiap giliran percakapan.",
    turns: [
      {
        speaker: "Maya",
        line: "Would you like to come to the cinema on Saturday?",
        options: ["Yes, I'd love to. What time?", "I went there yesterday.", "I am a student."],
        answer: 0,
        explanation: "I'd love to menerima ajakan dengan sopan dan pertanyaan waktu melanjutkan rencana.",
      },
      {
        speaker: "Maya",
        line: "Let's meet at six outside the cinema.",
        options: ["I don't like your name.", "That sounds great. See you there.", "Where did you go last year?"],
        answer: 1,
        explanation: "Respons ini menyetujui usulan waktu dan tempat.",
      },
      {
        speaker: "Maya",
        line: "Would you like to have dinner after the film?",
        options: ["Let's dinner yesterday.", "I am going to the cinema.", "Sorry, I'm busy, but thank you.", "It is six o'clock."],
        answer: 2,
        explanation: "Ungkapan ini menolak dengan sopan dan mengucapkan terima kasih.",
      },
    ],
  }),
  "eng-a2-2-plan": makeVisual(SentenceBuilder, {
    title: "Susun rencana akhir pekan",
    caption: "Susun ubin menjadi kalimat rencana yang lengkap.",
    items: [
      { prompt: "Nyatakan rencana mengunjungi museum.", tiles: ["We", "are", "going", "to", "visit", "the", "museum", "on", "Saturday."], answer: "We are going to visit the museum on Saturday.", explanation: "Pola rencana: subjek + be going to + kata kerja dasar." },
      { prompt: "Sampaikan janji menelepon besok.", tiles: ["I", "will", "call", "you", "tomorrow."], answer: "I will call you tomorrow.", explanation: "Will diikuti bentuk dasar call." },
      { prompt: "Nyatakan janji temu pukul enam.", tiles: ["I'm", "meeting", "Rina", "at", "six."], answer: "I'm meeting Rina at six.", explanation: "Present continuous dapat menyatakan pengaturan yang telah disepakati." },
      { prompt: "Nyatakan bahwa kemungkinan kalian naik bus.", tiles: ["We'll", "probably", "take", "a", "bus."], answer: "We'll probably take a bus.", explanation: "Probably menyatakan kemungkinan; setelah will gunakan kata kerja dasar." },
    ],
  }),
};
