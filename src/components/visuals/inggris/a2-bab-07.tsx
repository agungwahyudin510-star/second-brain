"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA2Bab07Visuals = {
  "eng-a2-7-jobs": makeVisual(MatchPairs, {
    title: "Cocokkan pekerjaan",
    caption: "Pasangkan profesi dengan artinya dalam bahasa Indonesia.",
    pairs: [
      { left: "mechanic", right: "montir" },
      { left: "nurse", right: "perawat" },
      { left: "driver", right: "sopir" },
      { left: "engineer", right: "insinyur" },
    ],
  }),
  "eng-a2-7-responsibility": makeVisual(FillBlank, {
    title: "Prepositions at work",
    caption: "Pilih preposisi yang sesuai dengan tempat atau tanggung jawab.",
    items: [
      { sentence: "I work ___ a hospital.", options: ["in", "at", "for", "to"], answer: 1, explanation: "At dapat menyebut lokasi tempat kerja tertentu." },
      { sentence: "She works ___ a factory.", options: ["on", "for", "in", "to"], answer: 2, explanation: "In digunakan untuk lingkungan atau tempat kerja seperti factory." },
      { sentence: "I'm responsible ___ checking the schedule.", options: ["to", "at", "in", "for"], answer: 3, explanation: "Frasa yang benar adalah responsible for." },
      { sentence: "He works ___ a design company.", options: ["for", "at", "on", "in"], answer: 0, explanation: "Work for menyebut organisasi pemberi kerja." },
    ],
  }),
  "eng-a2-7-instructions": makeVisual(SentenceBuilder, {
    title: "Susun instruksi",
    caption: "Susun ubin untuk memberi langkah yang jelas dan berurutan.",
    items: [
      { prompt: "Berikan langkah pertama membuka dokumen.", tiles: ["First,", "open", "the", "document."], answer: "First, open the document.", explanation: "Imperative dimulai dengan kata kerja dasar." },
      { prompt: "Minta seseorang mengeklik tombol.", tiles: ["Then,", "click", "the", "blue", "button."], answer: "Then, click the blue button.", explanation: "Then menandai langkah berikutnya; click adalah bentuk dasar." },
      { prompt: "Minta dengan sopan agar seseorang memeriksa halaman.", tiles: ["Please", "check", "the", "last", "page."], answer: "Please check the last page.", explanation: "Please membuat instruksi terdengar lebih ramah." },
      { prompt: "Akhiri dengan menyimpan berkas.", tiles: ["Finally,", "save", "your", "work."], answer: "Finally, save your work.", explanation: "Finally menandai langkah terakhir." },
    ],
  }),
  "eng-a2-7-email": makeVisual(DialogueChoice, {
    title: "Memilih ungkapan email",
    caption: "Pilih pembuka, permintaan, dan penutup yang sesuai dengan penerima.",
    turns: [
      {
        speaker: "Teacher",
        line: "You are writing a formal email to Mr. Adams. Which greeting is suitable?",
        options: ["Dear Mr. Adams,", "Hiya, Adams!", "See you yesterday,"],
        answer: 0,
        explanation: "Dear Mr. Adams adalah pembuka yang sesuai untuk email formal.",
      },
      {
        speaker: "Teacher",
        line: "You need to ask politely for the class schedule.",
        options: ["Send the schedule now.", "Could you send me the schedule, please?", "I schedule you please."],
        answer: 1,
        explanation: "Could you…please? adalah permintaan sopan dan jelas.",
      },
      {
        speaker: "Teacher",
        line: "Choose a suitable neutral closing for your formal email.",
        options: ["Later!", "Good night yesterday,", "Best regards,"],
        answer: 2,
        explanation: "Best regards adalah penutup email netral/formal.",
      },
    ],
  }),
  "eng-a2-7-study": makeVisual(FillBlank, {
    title: "For or since?",
    caption: "Pilih penanda durasi atau titik awal.",
    items: [
      { sentence: "I have studied English ___ three years.", options: ["since", "for"], answer: 1, explanation: "For diikuti durasi: three years." },
      { sentence: "She has worked here ___ 2020.", options: ["for", "since"], answer: 1, explanation: "Since diikuti titik awal: 2020." },
      { sentence: "We have had this class ___ Monday.", options: ["since", "for"], answer: 0, explanation: "Monday adalah titik awal, jadi gunakan since." },
      { sentence: "He has taken the course ___ two months.", options: ["since", "for"], answer: 1, explanation: "Two months adalah durasi, jadi gunakan for." },
    ],
  }),
};
