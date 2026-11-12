"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA1Bab03Visuals = {
  "eng-a1-3-numbers": makeVisual(MatchPairs, {
    title: "Cocokkan angka dan kata",
    caption: "Perhatikan perbedaan -teen dan -ty.",
    pairs: [
      { left: "13", right: "thirteen" },
      { left: "15", right: "fifteen" },
      { left: "40", right: "forty" },
      { left: "90", right: "ninety" },
    ],
  }),
  "eng-a1-3-time": makeVisual(ListenChoose, {
    title: "Dengar dan pilih jam",
    caption: "Suara dibuat oleh perangkatmu; aksen bisa berbeda.",
    items: [
      {
        text: "It is half past three.",
        options: ["3:30", "3:15", "2:30", "3:45"],
        answer: 0,
        explanation: "Half past three berarti 3:30.",
      },
      {
        text: "It is a quarter to five.",
        options: ["4:45", "5:15", "5:45", "4:15"],
        answer: 0,
        explanation: "A quarter to five berarti seperempat jam sebelum pukul lima, yaitu 4:45.",
      },
      {
        text: "It is seven o'clock.",
        options: ["6:00", "7:00", "7:10", "8:00"],
        answer: 1,
        explanation: "O'clock berarti tepat pada jam penuh: 7:00.",
      },
    ],
  }),
  "eng-a1-3-plurals": makeVisual(FillBlank, {
    title: "Pilih bentuk jamak",
    caption: "Lihat akhiran dan bentuk tidak beraturan.",
    items: [
      {
        sentence: "One box, two ___.",
        options: ["boxs", "boxes", "boxies", "box"],
        answer: 1,
        explanation: "Kata berakhiran x memakai -es: boxes.",
      },
      {
        sentence: "One baby, two ___.",
        options: ["babys", "babies", "babyes", "baby"],
        answer: 1,
        explanation: "Konsonan + y berubah menjadi -ies: babies.",
      },
      {
        sentence: "One child, two ___.",
        options: ["childs", "childes", "children", "childrens"],
        answer: 2,
        explanation: "Child adalah jamak tidak beraturan: children.",
      },
      {
        sentence: "One book, three ___.",
        options: ["books", "bookes", "bookies", "book"],
        answer: 0,
        explanation: "Kata biasa menambah -s: books.",
      },
      {
        sentence: "One man, two ___.",
        options: ["mans", "men", "mens", "manes"],
        answer: 1,
        explanation: "Man adalah jamak tidak beraturan: men.",
      },
    ],
  }),
  "eng-a1-3-articles": makeVisual(SentenceBuilder, {
    title: "Susun kalimat: a, an, this, those",
    caption: "Ketuk kata sesuai urutan.",
    items: [
      {
        prompt: "Ini sebuah apel.",
        tiles: ["This", "is", "an", "apple."],
        answer: "This is an apple.",
        explanation: "Apple diawali bunyi vokal, jadi an.",
      },
      {
        prompt: "Itu buku-buku (jauh).",
        tiles: ["Those", "are", "books."],
        answer: "Those are books.",
        explanation: "Those untuk benda jamak yang jauh.",
      },
      {
        prompt: "Itu seorang guru.",
        tiles: ["That", "is", "a", "teacher."],
        answer: "That is a teacher.",
        explanation: "Teacher diawali bunyi konsonan, jadi a.",
      },
      {
        prompt: "Ini payung.",
        tiles: ["This", "is", "an", "umbrella."],
        answer: "This is an umbrella.",
        explanation: "Umbrella diawali bunyi vokal, jadi an.",
      },
    ],
  }),
  "eng-a1-3-describing": makeVisual(DialogueChoice, {
    title: "Dialog benda dan warna",
    caption: "Pilih respons yang tepat.",
    turns: [
      {
        speaker: "Ana",
        line: "What is this?",
        options: ["It is a bag.", "It is a Monday.", "They are bags.", "I am a bag."],
        answer: 0,
        explanation: "Pertanyaan benda tunggal dijawab dengan It is a + benda.",
      },
      {
        speaker: "Ana",
        line: "What color is it?",
        options: ["It is blue.", "It is two.", "It is quarter past.", "It is a blue."],
        answer: 0,
        explanation: "Pertanyaan warna dijawab dengan It is + warna.",
      },
      {
        speaker: "Ana",
        line: "Are these your keys?",
        options: ["Yes, they are.", "Yes, it is.", "Yes, these is.", "Yes, we are."],
        answer: 0,
        explanation: "Keys jamak, jadi they are.",
      },
    ],
  }),
};
