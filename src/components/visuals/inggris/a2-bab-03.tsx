"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA2Bab03Visuals = {
  "eng-a2-3-comparatives": makeVisual(FillBlank, {
    title: "Pilih bentuk comparative",
    caption: "Lengkapi perbandingan dua benda atau tempat.",
    items: [
      { sentence: "My house is ___ than your house.", options: ["big", "biggest", "more big", "bigger"], answer: 3, explanation: "Big menggandakan konsonan akhir sebelum -er: bigger." },
      { sentence: "This road is ___ than the old road.", options: ["narrow", "narrower", "narrowest", "the narrower"], answer: 1, explanation: "Gunakan narrower untuk membandingkan dua jalan." },
      { sentence: "The blue bag is ___ than the red bag.", options: ["more expensive", "expensiver", "most expensive", "the expensive"], answer: 0, explanation: "Adjective panjang memakai more: more expensive." },
      { sentence: "This book is ___ than that one.", options: ["good", "best", "better", "more better"], answer: 2, explanation: "Comparative tidak beraturan dari good adalah better." },
    ],
  }),
  "eng-a2-3-superlatives": makeVisual(FillBlank, {
    title: "Pilih bentuk superlative",
    caption: "Tentukan bentuk yang menyatakan tingkat tertinggi dalam kelompok.",
    items: [
      { sentence: "Lina is ___ student in the class.", options: ["taller", "the tallest", "most tall", "the taller"], answer: 1, explanation: "Superlative tall memakai the tallest." },
      { sentence: "That was ___ film in the festival.", options: ["interestingest", "the most interesting", "more interesting", "the interesting"], answer: 1, explanation: "Adjective panjang memakai the most." },
      { sentence: "This is ___ day of my holiday.", options: ["the happiest", "happier", "the happy", "more happy"], answer: 0, explanation: "Happy berubah menjadi happiest pada superlative." },
      { sentence: "It was ___ meal of the trip.", options: ["better", "goodest", "the good", "the best"], answer: 3, explanation: "Superlative tidak beraturan dari good adalah the best." },
    ],
  }),
  "eng-a2-3-asas": makeVisual(SentenceBuilder, {
    title: "Susun perbandingan setara",
    caption: "Susun ubin untuk membuat kalimat as…as atau not as…as.",
    items: [
      { prompt: "Nyatakan bahwa kedua tas sama berat.", tiles: ["This", "bag", "is", "as", "heavy", "as", "that", "one."], answer: "This bag is as heavy as that one.", explanation: "Pola kesetaraan adalah as + adjective + as." },
      { prompt: "Nyatakan teh tidak sekuat kopi.", tiles: ["Tea", "is", "not", "as", "strong", "as", "coffee."], answer: "Tea is not as strong as coffee.", explanation: "Not as…as menyatakan tingkat sifat yang lebih rendah." },
      { prompt: "Nyatakan ruang ini sama terangnya.", tiles: ["This", "room", "is", "as", "bright", "as", "the", "hall."], answer: "This room is as bright as the hall.", explanation: "Adjective tetap dalam bentuk dasar di antara as." },
      { prompt: "Nyatakan tas ini kurang mahal daripada itu.", tiles: ["This", "bag", "is", "less", "expensive", "than", "that", "one."], answer: "This bag is less expensive than that one.", explanation: "Less + adjective + than menyatakan tingkat yang lebih rendah." },
    ],
  }),
  "eng-a2-3-order": makeVisual(SentenceBuilder, {
    title: "Susun adjective",
    caption: "Susun kata sifat sebelum noun dengan urutan yang alami.",
    items: [
      { prompt: "Susun frasa opini + ukuran + warna + bahan.", tiles: ["a", "beautiful", "small", "red", "leather", "bag"], answer: "a beautiful small red leather bag", explanation: "Gunakan panduan sederhana: opini, ukuran, warna, bahan, lalu noun." },
      { prompt: "Susun ukuran + warna + noun.", tiles: ["a", "small", "blue", "box"], answer: "a small blue box", explanation: "Ukuran mendahului warna dan noun." },
      { prompt: "Susun opini + warna + bahan + noun.", tiles: ["a", "lovely", "brown", "wooden", "table"], answer: "a lovely brown wooden table", explanation: "Opini mendahului warna dan bahan." },
      { prompt: "Susun panjang rambut + warna + noun.", tiles: ["short", "black", "hair"], answer: "short black hair", explanation: "Panjang disebut sebelum warna." },
    ],
  }),
  "eng-a2-3-describe": makeVisual(DialogueChoice, {
    title: "Mendeskripsikan orang dan benda",
    caption: "Pilih respons yang paling sesuai dengan deskripsi dan konteks.",
    turns: [
      {
        speaker: "Maya",
        line: "Can you describe the person in the photo?",
        options: ["He is tall and has short black hair.", "He has a tall and black.", "He is more tall with hair."],
        answer: 0,
        explanation: "Kalimat ini mendeskripsikan tinggi dan rambut dengan bentuk yang tepat.",
      },
      {
        speaker: "Maya",
        line: "What is the bag like?",
        options: ["It is a leather small red bag.", "It is a small red leather bag.", "It is red bag a small."],
        answer: 1,
        explanation: "Urutan deskripsi yang alami adalah ukuran, warna, bahan, lalu noun.",
      },
      {
        speaker: "Maya",
        line: "Which park do you prefer, and why?",
        options: ["The park is the most quiet than.", "I prefer the blue park because.", "I prefer the smaller park because it is less crowded."],
        answer: 2,
        explanation: "Respons menyatakan pilihan dan alasan dengan perbandingan yang tepat.",
      },
    ],
  }),
};
