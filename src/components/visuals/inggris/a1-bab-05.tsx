"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA1Bab05Visuals = {
  "eng-a1-5-places": makeVisual(MatchPairs, {
    title: "Cocokkan tempat di kota",
    caption: "Pasangkan nama tempat dengan artinya.",
    pairs: [
      { left: "bank", right: "bank" },
      { left: "hospital", right: "rumah sakit" },
      { left: "market", right: "pasar" },
      { left: "post office", right: "kantor pos" },
    ],
  }),
  "eng-a1-5-thereis": makeVisual(FillBlank, {
    title: "Pilih there is atau there are",
    caption: "Periksa jumlah benda dan bentuk kalimatnya.",
    items: [
      {
        sentence: "There ___ a park.",
        options: ["are", "is", "aren't", "isn't"],
        answer: 1,
        explanation: "Park tunggal, jadi gunakan there is.",
      },
      {
        sentence: "There ___ two banks.",
        options: ["is", "isn't", "are", "aren't"],
        answer: 2,
        explanation: "Two banks jamak, jadi gunakan there are.",
      },
      {
        sentence: "___ there a school?",
        options: ["Are", "Is", "Do", "Does"],
        answer: 1,
        explanation: "Pertanyaan tentang satu school dimulai dengan Is there.",
      },
      {
        sentence: "There ___ any milk.",
        options: ["aren't", "are", "is", "isn't"],
        answer: 3,
        explanation: "Milk tidak dihitung satu per satu; bentuk negatifnya there isn't any milk.",
      },
    ],
  }),
  "eng-a1-5-prepositions": makeVisual(SentenceBuilder, {
    title: "Susun kalimat posisi benda",
    caption: "Pilih ubin untuk membentuk kalimat dengan preposisi tempat.",
    items: [
      {
        prompt: "Buku berada di atas meja.",
        tiles: ["The", "book", "is", "on", "the", "table."],
        answer: "The book is on the table.",
        explanation: "On menunjukkan posisi di atas permukaan meja.",
      },
      {
        prompt: "Kucing berada di bawah kursi.",
        tiles: ["The", "cat", "is", "under", "the", "chair."],
        answer: "The cat is under the chair.",
        explanation: "Under berarti di bawah.",
      },
      {
        prompt: "Bank berada di sebelah sekolah.",
        tiles: ["The", "bank", "is", "next", "to", "the", "school."],
        answer: "The bank is next to the school.",
        explanation: "Next to berarti di sebelah.",
      },
      {
        prompt: "Taman berada di antara bank dan pasar.",
        tiles: ["The", "park", "is", "between", "the", "bank", "and", "the", "market."],
        answer: "The park is between the bank and the market.",
        explanation: "Between digunakan untuk posisi di antara dua tempat.",
      },
    ],
  }),
  "eng-a1-5-directions": makeVisual(DialogueChoice, {
    title: "Dialog mencari stasiun",
    caption: "Pilih petunjuk arah yang melanjutkan dialog.",
    turns: [
      {
        speaker: "Ana",
        line: "Excuse me, how do I get to the station?",
        options: ["Turn left at the corner.", "It is a book.", "I have breakfast."],
        answer: 0,
        explanation: "Jawaban memberi petunjuk arah menuju stasiun.",
      },
      {
        speaker: "Ana",
        line: "What do I do after the corner?",
        options: ["Go straight.", "Have some milk.", "Go to bed."],
        answer: 0,
        explanation: "Go straight memberikan langkah berikutnya dalam petunjuk arah.",
      },
      {
        speaker: "Ana",
        line: "Where is the station?",
        options: ["It is on your left.", "It is in your bag.", "It is under the chair."],
        answer: 0,
        explanation: "On your left menjelaskan lokasi stasiun terhadap orang yang berjalan.",
      },
    ],
  }),
  "eng-a1-5-help": makeVisual(ListenChoose, {
    title: "Dengar dan pahami petunjuk",
    caption: "Putar petunjuk pendek dan pilih artinya.",
    items: [
      {
        text: "Turn left at the bank.",
        options: ["Belok kiri di bank", "Belok kanan di bank", "Jalan lurus dari bank"],
        answer: 0,
        explanation: "Turn left berarti belok kiri.",
      },
      {
        text: "Go straight to the park.",
        options: ["Belok kiri menuju taman", "Jalan lurus menuju taman", "Menyeberang setelah taman"],
        answer: 1,
        explanation: "Go straight berarti jalan terus lurus.",
      },
      {
        text: "The post office is on your right.",
        options: ["Kantor pos di sebelah kirimu", "Kantor pos di belakangmu", "Kantor pos di sebelah kananmu"],
        answer: 2,
        explanation: "On your right berarti di sebelah kananmu.",
      },
    ],
  }),
};
