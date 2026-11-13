"use client";

import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA2Bab01Visuals = {
  "eng-a2-1-was": makeVisual(FillBlank, {
    title: "Was or were?",
    caption: "Pilih bentuk be lampau yang sesuai dengan subjek dan makna.",
    items: [
      { sentence: "I ___ at home yesterday.", options: ["was", "were", "wasn't", "weren't"], answer: 0, explanation: "I dipasangkan dengan was." },
      { sentence: "My friends ___ at the library.", options: ["was", "were", "wasn't", "weren't"], answer: 1, explanation: "Friends adalah subjek jamak, jadi gunakan were." },
      { sentence: "She ___ busy; she had free time.", options: ["was", "were", "wasn't", "weren't"], answer: 2, explanation: "Pernyataan kedua menunjukkan bahwa she tidak sibuk: wasn't." },
      { sentence: "You ___ late for class yesterday.", options: ["was", "were", "wasn't", "weren't"], answer: 1, explanation: "You menggunakan were dalam bentuk lampau." },
    ],
  }),
  "eng-a2-1-regular": makeVisual(FillBlank, {
    title: "Regular past spelling",
    caption: "Pilih bentuk simple past yang ejaannya tepat.",
    items: [
      { sentence: "Last night, I ___ English.", options: ["studied", "studyed", "studid", "study"], answer: 0, explanation: "Konsonan + y berubah menjadi -ied: study → studied." },
      { sentence: "The bus ___ at the station.", options: ["stoped", "stopped", "stopt", "stopping"], answer: 1, explanation: "Pada contoh ini, konsonan akhir digandakan: stop → stopped." },
      { sentence: "We ___ football after school.", options: ["playd", "plaied", "played", "playing"], answer: 2, explanation: "Play mempertahankan y dan menambahkan -ed: played." },
      { sentence: "She ___ her aunt last week.", options: ["visit", "visitted", "visiting", "visited"], answer: 3, explanation: "Visited adalah bentuk lampau beraturan dari visit." },
    ],
  }),
  "eng-a2-1-irregular": makeVisual(MatchPairs, {
    title: "Cocokkan kata kerja lampau",
    caption: "Pasangkan kata dasar dengan bentuk simple past-nya.",
    pairs: [
      { left: "go", right: "went" },
      { left: "buy", right: "bought" },
      { left: "see", right: "saw" },
      { left: "eat", right: "ate" },
    ],
  }),
  "eng-a2-1-questions": makeVisual(SentenceBuilder, {
    title: "Susun pertanyaan dan negatif",
    caption: "Susun ubin menjadi kalimat simple past yang benar.",
    items: [
      { prompt: "Tanyakan apakah teman pergi ke sekolah kemarin.", tiles: ["Did", "you", "go", "to", "school", "yesterday?"], answer: "Did you go to school yesterday?", explanation: "Pertanyaan simple past memakai Did + subjek + kata kerja dasar." },
      { prompt: "Katakan bahwa kamu tidak melihatnya.", tiles: ["I", "didn't", "see", "him."], answer: "I didn't see him.", explanation: "Setelah didn't gunakan kata kerja dasar see." },
      { prompt: "Tanyakan kegiatan semalam.", tiles: ["What", "did", "you", "do", "last", "night?"], answer: "What did you do last night?", explanation: "Pola pertanyaan informasinya adalah What + did + subjek + base verb." },
      { prompt: "Tanyakan ke mana dia pergi.", tiles: ["Where", "did", "she", "go?"], answer: "Where did she go?", explanation: "Setelah did gunakan go, bukan went." },
    ],
  }),
  "eng-a2-1-story": makeVisual(ListenChoose, {
    title: "Dengarkan cerita pendek",
    caption: "Dengarkan cerita, lalu pilih makna yang sesuai.",
    items: [
      { text: "Last Saturday, I visited my aunt. We had lunch at her home.", options: ["The speaker visited an aunt and had lunch there.", "The speaker went to school and ate breakfast.", "The speaker met a teacher at a shop."], answer: 0, explanation: "Cerita menyebut kunjungan kepada bibi dan makan siang di rumahnya." },
      { text: "First, we took a bus. Then, we walked to the park.", options: ["They walked first and took a bus later.", "They took a bus and then walked to the park.", "They stayed at home all day."], answer: 1, explanation: "First dan then menunjukkan urutan: naik bus, kemudian berjalan." },
      { text: "I didn't buy a book yesterday. I bought a notebook.", options: ["The speaker bought a book and a notebook.", "The speaker did not buy anything.", "The speaker bought a notebook, not a book."], answer: 2, explanation: "Kalimat pertama menyangkal pembelian buku; kalimat kedua menyebut notebook." },
    ],
  }),
};
