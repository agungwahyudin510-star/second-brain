"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishB1Bab06Visuals = {
  "eng-b1-6-paragraph": makeVisual(SentenceBuilder, {
    title: "Susun topic sentence",
    caption: "Pilih susunan yang memperkenalkan satu gagasan utama.",
    items: [
      { prompt: "Nyatakan manfaat membaca secara teratur.", tiles: ["Reading", "regularly", "can", "help", "people", "learn", "new", "ideas."], answer: "Reading regularly can help people learn new ideas.", explanation: "Kalimat ini menyatakan satu gagasan utama yang dapat didukung." },
      { prompt: "Perkenalkan topik taman bersama.", tiles: ["A", "shared", "garden", "can", "bring", "neighbors", "together."], answer: "A shared garden can bring neighbors together.", explanation: "Topic sentence memperkenalkan topik dan sudut pandang utama." },
      { prompt: "Nyatakan gagasan utama tentang perjalanan bus.", tiles: ["Taking", "the", "bus", "can", "make", "a", "daily", "journey", "easier."], answer: "Taking the bus can make a daily journey easier.", explanation: "Kalimat utama memberi fokus untuk rincian pendukung berikutnya." },
      { prompt: "Perkenalkan manfaat belajar kelompok.", tiles: ["Group", "study", "can", "help", "learners", "share", "useful", "ideas."], answer: "Group study can help learners share useful ideas.", explanation: "Kalimat memperkenalkan satu gagasan yang dapat dijelaskan dengan alasan dan contoh." },
    ],
  }),
  "eng-b1-6-narrative": makeVisual(FillBlank, {
    title: "Tense dan urutan narasi",
    caption: "Pilih tense atau linker yang cocok dengan fungsi kalimat.",
    items: [
      { sentence: "I ___ home when it began to rain.", options: ["was walking", "walk", "have walked", "will walk"], answer: 0, explanation: "Past continuous memberi latar yang sedang berlangsung saat kejadian terjadi." },
      { sentence: "The bus ___, so we got on.", options: ["was arriving", "arrived", "arrives", "has arrived"], answer: 1, explanation: "Simple past menyatakan kejadian selesai dalam urutan narasi." },
      { sentence: "___, we checked the map and chose a path.", options: ["Because", "However", "After that", "Although"], answer: 2, explanation: "After that memperjelas langkah berikutnya dalam urutan cerita." },
      { sentence: "While I ___, my friend took a photo.", options: ["looked", "am looking", "have looked", "was looking"], answer: 3, explanation: "Past continuous menggambarkan kegiatan sebagai latar saat teman mengambil foto." },
    ],
  }),
  "eng-b1-6-email": makeVisual(DialogueChoice, {
    title: "Register email",
    caption: "Pilih sapaan atau ungkapan yang sesuai untuk penerima email.",
    turns: [
      {
        speaker: "Writer",
        line: "You are writing to a course coordinator you have not met. Choose an opening.",
        options: ["Dear Ms. Lee,", "Hey, what's up?", "Yo, send the schedule!"],
        answer: 0,
        explanation: "Dear Ms. Lee sesuai untuk email formal kepada penerima tertentu.",
      },
      {
        speaker: "Writer",
        line: "Choose a polite formal request for course details.",
        options: ["Give me the details now.", "I would be grateful if you could send me the details.", "You should send everything quickly."],
        answer: 1,
        explanation: "Ungkapan ini menyampaikan permintaan dengan sopan dan formal.",
      },
      {
        speaker: "Writer",
        line: "Choose a suitable closing for this email.",
        options: ["Later, dude!", "Bye!!!", "Best regards,"],
        answer: 2,
        explanation: "Best regards adalah penutup yang sesuai untuk email formal atau netral." },
    ],
  }),
  "eng-b1-6-cohesion": makeVisual(FillBlank, {
    title: "Pronoun, linker, dan tanda baca",
    caption: "Pilih bentuk yang membuat hubungan kalimat jelas dan benar.",
    items: [
      { sentence: "I bought a new phone. ___ is very light.", options: ["They", "He", "It", "Those"], answer: 2, explanation: "It merujuk pada benda tunggal, yaitu phone." },
      { sentence: "The road was closed, ___ we took another route.", options: ["because", "so", "although", "despite"], answer: 1, explanation: "So menghubungkan sebab dengan akibat pada kalimat ini." },
      { sentence: "The device lost ___ signal.", options: ["it's", "its", "its'", "it"], answer: 1, explanation: "Its menunjukkan kepemilikan; it's berarti it is atau it has." },
      { sentence: "I was tired, ___ I went home early.", options: ["so", "although", "because", "despite"], answer: 0, explanation: "So memperkenalkan akibat dari rasa lelah." },
    ],
  }),
  "eng-b1-6-proofread": makeVisual(MatchPairs, {
    title: "Temukan dan perbaiki kesalahan",
    caption: "Pasangkan masalah penulisan dengan perbaikan yang sesuai.",
    pairs: [
      { left: "Because it was raining.", right: "Add a main clause" },
      { left: "I was tired, I went home.", right: "Add so or use a full stop" },
      { left: "The cat licked it's paw.", right: "Use its for possession" },
      { left: "She go to class every day.", right: "Change go to goes" },
    ],
  }),
};
