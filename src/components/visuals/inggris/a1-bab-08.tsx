"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA1Bab08Visuals = {
  "eng-a1-8-intro": makeVisual(SentenceBuilder, {
    title: "Susun perkenalan singkat",
    caption: "Pilih ubin dalam urutan yang membentuk kalimat.",
    items: [
      {
        prompt: "Senang bertemu denganmu.",
        tiles: ["Nice", "to", "meet", "you."],
        answer: "Nice to meet you.",
        explanation: "Nice to meet you adalah ungkapan saat berkenalan.",
      },
      {
        prompt: "Ini teman saya, Rina.",
        tiles: ["This", "is", "my", "friend,", "Rina."],
        answer: "This is my friend, Rina.",
        explanation: "This is my friend digunakan untuk memperkenalkan teman.",
      },
      {
        prompt: "Saya berasal dari Bandung.",
        tiles: ["I'm", "from", "Bandung."],
        answer: "I'm from Bandung.",
        explanation: "Gunakan I'm from untuk menyebut asal.",
      },
      {
        prompt: "Saya bekerja di sebuah toko.",
        tiles: ["I", "work", "in", "a", "shop."],
        answer: "I work in a shop.",
        explanation: "Work in a shop menyebut tempat bekerja.",
      },
    ],
  }),
  "eng-a1-8-help": makeVisual(DialogueChoice, {
    title: "Dialog meminta klarifikasi",
    caption: "Pilih respons yang membantu percakapan.",
    turns: [
      {
        speaker: "Partner",
        line: "I don't understand the last sentence.",
        options: ["Could you repeat that, please?", "See you at five.", "How much is this?"],
        answer: 0,
        explanation: "Could you repeat that, please? meminta pengulangan dengan sopan.",
      },
      {
        speaker: "Learner",
        line: "What does “borrow” mean?",
        options: ["It means to use something and return it later.", "It means to say hello.", "It means to walk straight."],
        answer: 0,
        explanation: "Borrow berarti meminjam sesuatu untuk digunakan dan dikembalikan.",
      },
      {
        speaker: "Learner",
        line: "How do you say “pasar” in English?",
        options: ["Market.", "Thank you very much.", "At the corner."],
        answer: 0,
        explanation: "Pasar dalam bahasa Inggris adalah market.",
      },
    ],
  }),
  "eng-a1-8-messages": makeVisual(FillBlank, {
    title: "Lengkapi pesan singkat",
    caption: "Pilih kata yang melengkapi ajakan dan balasannya.",
    items: [
      {
        sentence: "Are you ___ on Saturday?",
        options: ["free", "late", "from", "there"],
        answer: 0,
        explanation: "Are you free menanyakan apakah seseorang luang.",
      },
      {
        sentence: "Sorry, I ___ come.",
        options: ["am", "isn't", "can't", "don't"],
        answer: 2,
        explanation: "I can't come berarti saya tidak bisa datang.",
      },
      {
        sentence: "See you ___ five!",
        options: ["in", "on", "by", "at"],
        answer: 3,
        explanation: "Gunakan at sebelum jam tertentu: at five.",
      },
      {
        sentence: "Thanks for the ___!",
        options: ["Saturday", "invitation", "five", "free"],
        answer: 1,
        explanation: "Thanks for the invitation berarti terima kasih atas ajakannya.",
      },
    ],
  }),
  "eng-a1-8-situations": makeVisual(ListenChoose, {
    title: "Dengar mini-dialog sehari-hari",
    caption: "Putar ungkapan lalu pilih makna atau situasinya.",
    items: [
      {
        text: "How much is this?",
        options: ["Menanyakan harga barang ini", "Menanyakan arah ke stasiun", "Memperkenalkan seorang teman"],
        answer: 0,
        explanation: "How much is this? menanyakan harga satu barang.",
      },
      {
        text: "Go straight and turn left.",
        options: ["Memesan minuman di kafe", "Memberi petunjuk arah", "Menanyakan arti sebuah kata"],
        answer: 1,
        explanation: "Go straight dan turn left adalah instruksi arah.",
      },
      {
        text: "Can I have a cup of tea, please?",
        options: ["Meminta orang berbicara lebih pelan", "Menanyakan asal seseorang", "Memesan secangkir teh dengan sopan"],
        answer: 2,
        explanation: "Can I have...?, ditambah please, merupakan permintaan sopan untuk memesan.",
      },
    ],
  }),
  "eng-a1-8-profile": makeVisual(MatchPairs, {
    title: "Cocokkan informasi profil",
    caption: "Pasangkan kata bahasa Inggris dengan artinya.",
    pairs: [
      { left: "name", right: "nama" },
      { left: "age", right: "umur" },
      { left: "hobby", right: "hobi" },
      { left: "job", right: "pekerjaan" },
    ],
  }),
};
