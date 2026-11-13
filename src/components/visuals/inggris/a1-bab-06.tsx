"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import { makeVisual } from "./index";

export const EnglishA1Bab06Visuals = {
  "eng-a1-6-food": makeVisual(MatchPairs, {
    title: "Cocokkan makanan",
    caption: "Pasangkan kosakata makanan dengan artinya.",
    pairs: [
      { left: "rice", right: "nasi" },
      { left: "bread", right: "roti" },
      { left: "chicken", right: "ayam" },
      { left: "vegetables", right: "sayuran" },
    ],
  }),
  "eng-a1-6-countable": makeVisual(FillBlank, {
    title: "Pilih artikel dan jumlah",
    caption: "Bedakan benda yang dapat dihitung dan yang tidak dihitung satu per satu.",
    items: [
      {
        sentence: "I have ___ egg.",
        options: ["a", "an", "some", "any"],
        answer: 1,
        explanation: "Egg adalah countable tunggal dengan bunyi awal vokal, jadi gunakan an.",
      },
      {
        sentence: "She drinks ___ water.",
        options: ["a", "an", "some", "any"],
        answer: 2,
        explanation: "Water uncountable; some dapat digunakan dalam pernyataan positif.",
      },
      {
        sentence: "We need ___ rice.",
        options: ["an", "a", "some", "any"],
        answer: 2,
        explanation: "Rice uncountable dan some sesuai untuk pernyataan positif.",
      },
      {
        sentence: "He has ___ apple.",
        options: ["a", "an", "some", "any"],
        answer: 1,
        explanation: "Apple countable tunggal dengan bunyi awal vokal, jadi gunakan an.",
      },
    ],
  }),
  "eng-a1-6-quantity": makeVisual(FillBlank, {
    title: "Pilih kata jumlah",
    caption: "Gunakan many, much, any, atau some sesuai konteks.",
    items: [
      {
        sentence: "How ___ eggs do you want?",
        options: ["much", "many", "any", "some"],
        answer: 1,
        explanation: "Eggs dapat dihitung, jadi gunakan how many.",
      },
      {
        sentence: "How ___ milk do you need?",
        options: ["many", "some", "much", "any"],
        answer: 2,
        explanation: "Milk uncountable, jadi gunakan how much.",
      },
      {
        sentence: "Do you have ___ bread?",
        options: ["some", "many", "much", "any"],
        answer: 3,
        explanation: "Any lazim digunakan dalam pertanyaan tentang jumlah yang tidak ditentukan.",
      },
      {
        sentence: "I have ___ tea.",
        options: ["any", "some", "many", "much"],
        answer: 1,
        explanation: "Some sesuai untuk pernyataan positif dengan tea.",
      },
    ],
  }),
  "eng-a1-6-prices": makeVisual(ListenChoose, {
    title: "Dengar dan pilih harga",
    caption: "Putar harga yang disebutkan, lalu pilih jumlah yang tepat.",
    items: [
      {
        text: "It's twelve dollars.",
        options: ["$2", "$12", "$20"],
        answer: 1,
        explanation: "Twelve dollars adalah $12.",
      },
      {
        text: "They are fifteen dollars.",
        options: ["$50", "$15", "$5"],
        answer: 1,
        explanation: "Fifteen dollars adalah $15.",
      },
      {
        text: "It's forty dollars.",
        options: ["$14", "$40", "$4"],
        answer: 1,
        explanation: "Forty dollars adalah $40.",
      },
    ],
  }),
  "eng-a1-6-ordering": makeVisual(DialogueChoice, {
    title: "Dialog memesan di kafe",
    caption: "Pilih respons yang sesuai di setiap giliran.",
    turns: [
      {
        speaker: "Customer",
        line: "Can I have a cup of tea, please?",
        options: ["Of course.", "Turn left.", "It's under the table."],
        answer: 0,
        explanation: "Of course adalah respons wajar untuk menerima pesanan dengan sopan.",
      },
      {
        speaker: "Server",
        line: "Anything else?",
        options: ["No, thank you.", "A glass is on the table.", "I don't like the station."],
        answer: 0,
        explanation: "No, thank you menyatakan tidak ingin menambah pesanan dengan sopan.",
      },
      {
        speaker: "Server",
        line: "Here you are.",
        options: ["Thank you very much.", "How many water?", "Go straight, please."],
        answer: 0,
        explanation: "Thank you very much adalah ungkapan terima kasih setelah menerima pesanan.",
      },
    ],
  }),
};
