"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA1Bab04Visuals = {
  "eng-a1-4-verbs": makeVisual(MatchPairs, {
    title: "Cocokkan kata kerja rutinitas",
    caption: "Pasangkan ungkapan bahasa Inggris dengan artinya.",
    pairs: [
      { left: "wake up", right: "bangun" },
      { left: "have breakfast", right: "sarapan" },
      { left: "go to work", right: "pergi kerja" },
      { left: "go to bed", right: "pergi tidur" },
    ],
  }),
  "eng-a1-4-present": makeVisual(FillBlank, {
    title: "Pilih bentuk simple present",
    caption: "Perhatikan subjek dan akhiran kata kerja.",
    items: [
      {
        sentence: "She ___ to school.",
        options: ["go", "going", "goes", "gos"],
        answer: 2,
        explanation: "She memakai bentuk orang ketiga tunggal: go menjadi goes.",
      },
      {
        sentence: "He ___ English.",
        options: ["study", "studies", "studys", "studying"],
        answer: 1,
        explanation: "Study berakhir konsonan + y, sehingga menjadi studies.",
      },
      {
        sentence: "They ___ football.",
        options: ["plays", "playing", "play", "plaies"],
        answer: 2,
        explanation: "They memakai kata kerja dasar play tanpa akhiran -s.",
      },
      {
        sentence: "My mother ___ TV.",
        options: ["watch", "watching", "watchs", "watches"],
        answer: 3,
        explanation: "Watch berakhiran ch, sehingga bentuknya watches.",
      },
    ],
  }),
  "eng-a1-4-questions": makeVisual(SentenceBuilder, {
    title: "Susun kalimat do dan does",
    caption: "Ketuk ubin dalam urutan yang membentuk kalimat.",
    items: [
      {
        prompt: "Apakah kamu bangun pagi?",
        tiles: ["Do", "you", "get", "up", "early?"],
        answer: "Do you get up early?",
        explanation: "Do diletakkan sebelum subjek you dalam pertanyaan.",
      },
      {
        prompt: "Apakah dia bekerja pada hari Minggu?",
        tiles: ["Does", "she", "work", "on", "Sunday?"],
        answer: "Does she work on Sunday?",
        explanation: "Setelah does, gunakan kata kerja dasar work.",
      },
      {
        prompt: "Saya tidak makan daging.",
        tiles: ["I", "don't", "eat", "meat."],
        answer: "I don't eat meat.",
        explanation: "Don't diikuti kata kerja dasar eat.",
      },
      {
        prompt: "Dia tidak bermain permainan.",
        tiles: ["He", "doesn't", "play", "games."],
        answer: "He doesn't play games.",
        explanation: "Doesn't diikuti kata kerja dasar play.",
      },
    ],
  }),
  "eng-a1-4-frequency": makeVisual(DialogueChoice, {
    title: "Dialog kebiasaan dan frekuensi",
    caption: "Pilih adverb yang melengkapi kebiasaan dalam dialog.",
    turns: [
      {
        speaker: "Ana",
        line: "How often do you have breakfast at home?",
        options: ["I usually have breakfast at home.", "I am breakfast at home.", "I does have breakfast at home."],
        answer: 0,
        explanation: "Usually menjelaskan frekuensi dan diletakkan sebelum kata kerja utama have.",
      },
      {
        speaker: "Budi",
        line: "Do you walk to school every day?",
        options: ["I sometimes walk to school.", "I is walk to school.", "I never am walk to school."],
        answer: 0,
        explanation: "Sometimes sesuai untuk menyatakan kegiatan yang dilakukan kadang-kadang.",
      },
      {
        speaker: "Ana",
        line: "Are you late for class?",
        options: ["I am always on time.", "I always am on time.", "I do always on time."],
        answer: 0,
        explanation: "Adverb frekuensi diletakkan sesudah be: I am always on time.",
      },
    ],
  }),
  "eng-a1-4-routine": makeVisual(ListenChoose, {
    title: "Dengar dan pilih rutinitas",
    caption: "Putar kalimat, lalu pilih waktu yang kamu dengar.",
    items: [
      {
        text: "I wake up at six thirty.",
        options: ["6:30", "7:30", "6:00"],
        answer: 0,
        explanation: "Six thirty berarti pukul 6:30.",
      },
      {
        text: "She has breakfast at seven fifteen.",
        options: ["7:50", "7:15", "6:15"],
        answer: 1,
        explanation: "Seven fifteen berarti pukul 7:15.",
      },
      {
        text: "They go to bed at ten o'clock.",
        options: ["9:00", "10:30", "10:00"],
        answer: 2,
        explanation: "Ten o'clock berarti pukul 10:00.",
      },
    ],
  }),
};
