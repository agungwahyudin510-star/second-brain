"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import { makeVisual } from "./index";

export const EnglishA1Bab01Visuals = {
  "eng-a1-1-spelling": makeVisual(ListenChoose, {
    title: "Dengar dan pilih ejaan",
    caption: "Suara dibuat oleh perangkatmu; kualitas dan aksen bisa berbeda.",
    items: [
      {
        text: "Spell my name: R, I, N, A.",
        options: ["Rina", "Rena", "Ria", "Rani"],
        answer: 0,
        explanation: "Huruf yang dieja berurutan R-I-N-A membentuk Rina.",
      },
      {
        text: "B, O, O, K.",
        options: ["bok", "book", "boo", "buck"],
        answer: 1,
        explanation: "B-O-O-K dibaca sebagai kata book.",
      },
      {
        text: "N, A, M, E.",
        options: ["man", "mine", "name", "nine"],
        answer: 2,
        explanation: "N-A-M-E membentuk kata name.",
      },
    ],
  }),
  "eng-a1-1-minimal-pairs": makeVisual(ListenChoose, {
    title: "Dengar pasangan minimal",
    caption: "Pasangan minimal dibedakan satu bunyi. Aksen dan kualitas suara perangkat dapat memengaruhi.",
    items: [
      {
        text: "ship",
        options: ["ship", "sheep", "chip", "sip"],
        answer: 0,
        explanation: "Ship memiliki vokal pendek; sheep memiliki vokal lebih panjang.",
      },
      {
        text: "cap",
        options: ["cab", "cap", "cat", "can"],
        answer: 1,
        explanation: "Cap berakhir bunyi /p/; cab berakhir /b/.",
      },
      {
        text: "beat",
        options: ["bit", "beat", "bat", "bed"],
        answer: 1,
        explanation: "Beat memiliki vokal panjang, sedangkan bit pendek.",
      },
    ],
  }),
  "eng-a1-1-greetings-dialogue": makeVisual(DialogueChoice, {
    title: "Dialog perkenalan",
    caption: "Pilih respons yang wajar.",
    turns: [
      {
        speaker: "Ana",
        line: "Hello. I'm Ana. Nice to meet you.",
        options: ["Nice to meet you, too. I'm Budi.", "Good night, Ana.", "I'm fine, you?", "See you yesterday."],
        answer: 0,
        explanation: "Balas perkenalan dengan 'Nice to meet you, too' dan sebutkan namamu.",
      },
      {
        speaker: "Ana",
        line: "Where are you from?",
        options: ["I'm from Surabaya.", "It's seven o'clock.", "I'm a student from three.", "Thank you, goodbye."],
        answer: 0,
        explanation: "Pertanyaan asal dijawab dengan 'I'm from + tempat'.",
      },
      {
        speaker: "Ana",
        line: "Are you a student?",
        options: ["Yes, I am.", "Yes, it is.", "No, I are.", "Yes, he is."],
        answer: 0,
        explanation: "Pertanyaan 'Are you...?' dijawab dengan 'Yes, I am.'",
      },
    ],
  }),
  "eng-a1-1-pronouns": makeVisual(FillBlank, {
    title: "Pilih kata ganti",
    caption: "Subjek kalimat memakai subject pronoun.",
    items: [
      {
        sentence: "Maya and I are friends. ___ study together.",
        options: ["They", "We", "She", "It"],
        answer: 1,
        explanation: "Maya and I mencakup pembicara, jadi we.",
      },
      {
        sentence: "Budi is my brother. ___ is a student.",
        options: ["He", "She", "They", "We"],
        answer: 0,
        explanation: "Budi laki-laki tunggal, jadi he.",
      },
      {
        sentence: "Rina and Sari are teachers. ___ are in class.",
        options: ["We", "He", "They", "It"],
        answer: 2,
        explanation: "Dua orang lain, jadi they.",
      },
      {
        sentence: "The book is new. ___ is on the desk.",
        options: ["It", "They", "He", "We"],
        answer: 0,
        explanation: "Benda tunggal, jadi it.",
      },
      {
        sentence: "You and I are in class. ___ are classmates.",
        options: ["We", "You", "They", "I"],
        answer: 0,
        explanation: "You and I mencakup pembicara, jadi we.",
      },
    ],
  }),
  "eng-a1-1-syllables": makeVisual(MatchPairs, {
    title: "Cocokkan jumlah suku kata",
    caption: "Tepuk tangan setiap suku kata sambil mengucapkan kata.",
    pairs: [
      { left: "1 syllable", right: "book" },
      { left: "2 syllables", right: "teacher" },
      { left: "3 syllables", right: "banana" },
      { left: "4 syllables", right: "elevator" },
    ],
  }),
};
