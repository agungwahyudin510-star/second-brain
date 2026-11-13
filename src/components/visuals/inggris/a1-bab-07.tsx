"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA1Bab07Visuals = {
  "eng-a1-7-form": makeVisual(FillBlank, {
    title: "Lengkapi present continuous",
    caption: "Pilih bentuk be dan kata kerja berakhiran -ing.",
    items: [
      {
        sentence: "She ___ a book.",
        options: ["are reading", "is reading", "am reading", "reading"],
        answer: 1,
        explanation: "She memakai is, lalu kata kerja reading.",
      },
      {
        sentence: "They ___ football.",
        options: ["is playing", "are playing", "am playing", "play"],
        answer: 1,
        explanation: "They memakai are, lalu kata kerja playing.",
      },
      {
        sentence: "I ___ tea.",
        options: ["am drinking", "is drinking", "are drinking", "drink"],
        answer: 0,
        explanation: "I memakai am, lalu kata kerja drinking.",
      },
      {
        sentence: "He ___.",
        options: ["is running", "are running", "am running", "running"],
        answer: 0,
        explanation: "He memakai is, lalu bentuk -ing running.",
      },
    ],
  }),
  "eng-a1-7-questions": makeVisual(SentenceBuilder, {
    title: "Susun pertanyaan dan kalimat",
    caption: "Ketuk ubin dalam urutan yang tepat.",
    items: [
      {
        prompt: "Apa yang sedang kamu lakukan?",
        tiles: ["What", "are", "you", "doing?"],
        answer: "What are you doing?",
        explanation: "Are diletakkan sebelum subjek you dalam pertanyaan.",
      },
      {
        prompt: "Apakah dia sedang memasak sekarang?",
        tiles: ["Is", "she", "cooking", "now?"],
        answer: "Is she cooking now?",
        explanation: "Pertanyaan yes/no dimulai dengan is.",
      },
      {
        prompt: "Dia tidak sedang tidur.",
        tiles: ["He", "isn't", "sleeping."],
        answer: "He isn't sleeping.",
        explanation: "Not mengikuti is dalam bentuk negatif.",
      },
      {
        prompt: "Saya tidak sedang bekerja.",
        tiles: ["I'm", "not", "working."],
        answer: "I'm not working.",
        explanation: "Bentuk singkat I am not adalah I'm not.",
      },
    ],
  }),
  "eng-a1-7-contrast": makeVisual(FillBlank, {
    title: "Kebiasaan atau kegiatan sekarang?",
    caption: "Perhatikan kata penanda waktu untuk memilih tense.",
    items: [
      {
        sentence: "I ___ tea every morning.",
        options: ["am drinking", "drinks", "drink", "drinking"],
        answer: 2,
        explanation: "Every morning menunjukkan kebiasaan, jadi gunakan simple present drink.",
      },
      {
        sentence: "Look! It ___.",
        options: ["rains", "is raining", "rain", "are raining"],
        answer: 1,
        explanation: "Look! menandai kegiatan yang sedang terlihat: is raining.",
      },
      {
        sentence: "She usually ___ early.",
        options: ["is getting up", "get up", "gets up", "getting up"],
        answer: 2,
        explanation: "Usually menunjukkan kebiasaan; she memakai gets up.",
      },
      {
        sentence: "They ___ TV now.",
        options: ["watch", "watches", "watching", "are watching"],
        answer: 3,
        explanation: "Now menunjukkan kegiatan saat ini, jadi gunakan are watching.",
      },
    ],
  }),
  "eng-a1-7-clothes": makeVisual(MatchPairs, {
    title: "Cocokkan kosakata pakaian",
    caption: "Pasangkan nama pakaian dengan artinya.",
    pairs: [
      { left: "shirt", right: "kemeja" },
      { left: "jacket", right: "jaket" },
      { left: "shoes", right: "sepatu" },
      { left: "hat", right: "topi" },
    ],
  }),
  "eng-a1-7-scene": makeVisual(DialogueChoice, {
    title: "Apa yang sedang mereka lakukan?",
    caption: "Pilih jawaban present continuous yang sesuai.",
    turns: [
      {
        speaker: "Ana",
        line: "What is he doing?",
        options: ["He is reading a book.", "He reads every day.", "He read yesterday."],
        answer: 0,
        explanation: "Present continuous menjelaskan kegiatan yang sedang dilakukan sekarang.",
      },
      {
        speaker: "Ana",
        line: "What is the girl doing?",
        options: ["She is drawing.", "She draws every day.", "She is draw."],
        answer: 0,
        explanation: "She is drawing memakai is + kata kerja-ing.",
      },
      {
        speaker: "Ana",
        line: "What are the children doing?",
        options: ["They are playing in the park.", "They is playing in the park.", "They playing in the park."],
        answer: 0,
        explanation: "They memakai are, lalu kata kerja playing.",
      },
    ],
  }),
};
