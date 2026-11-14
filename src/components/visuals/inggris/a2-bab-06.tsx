"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA2Bab06Visuals = {
  "eng-a2-6-because": makeVisual(FillBlank, {
    title: "Because or so?",
    caption: "Pilih linker yang menunjukkan alasan atau akibat.",
    items: [
      { sentence: "I stayed home ___ it was raining.", options: ["because", "so", "but", "although"], answer: 0, explanation: "Because memperkenalkan alasan tetap di rumah." },
      { sentence: "The bus was late, ___ I walked to school.", options: ["because", "although", "while", "so"], answer: 3, explanation: "So memperkenalkan akibat dari bus yang terlambat." },
      { sentence: "___ she was tired, she went to bed early.", options: ["So", "Because", "But", "However"], answer: 1, explanation: "Because di awal kalimat memperkenalkan alasan." },
      { sentence: "It was very cold, ___ we wore warm coats.", options: ["because", "but", "so", "although"], answer: 2, explanation: "So menghubungkan cuaca dingin dengan akibatnya." },
    ],
  }),
  "eng-a2-6-but": makeVisual(FillBlank, {
    title: "But, although, or however?",
    caption: "Pilih linker kontras sesuai susunan dan tanda baca.",
    items: [
      { sentence: "The room was small, ___ it was comfortable.", options: ["but", "although", "however", "because"], answer: 0, explanation: "But menghubungkan dua klausa dalam satu kalimat." },
      { sentence: "___ it was cold, we went swimming.", options: ["But", "However", "Although", "So"], answer: 2, explanation: "Although memperkenalkan klausa kontras di awal kalimat." },
      { sentence: "The bus was slow. ___, we arrived on time.", options: ["Although", "But", "Because", "However"], answer: 3, explanation: "However dapat memulai kalimat baru dan diikuti koma." },
      { sentence: "Although she was tired, ___ finished her work.", options: ["but she", "she", "however she", "because she"], answer: 1, explanation: "Klausa although diikuti klausa utama tanpa menambahkan but." },
    ],
  }),
  "eng-a2-6-sequence": makeVisual(SentenceBuilder, {
    title: "Susun linker urutan",
    caption: "Susun ubin agar cerita dan urutan waktunya jelas.",
    items: [
      { prompt: "Awali dengan langkah pertama.", tiles: ["First,", "we", "bought", "our", "tickets."], answer: "First, we bought our tickets.", explanation: "First menandai langkah awal dan dapat diikuti koma." },
      { prompt: "Tunjukkan langkah berikutnya.", tiles: ["Then,", "we", "got", "on", "the", "train."], answer: "Then, we got on the train.", explanation: "Then menghubungkan kejadian berikutnya." },
      { prompt: "Nyatakan bahwa telepon berdering ketika kamu membaca.", tiles: ["The", "phone", "rang", "while", "I", "was", "reading."], answer: "The phone rang while I was reading.", explanation: "While menghubungkan dua kejadian yang waktunya bertumpang tindih." },
      { prompt: "Akhiri urutan cerita.", tiles: ["Finally,", "we", "arrived", "at", "the", "hotel."], answer: "Finally, we arrived at the hotel.", explanation: "Finally menandai kejadian terakhir." },
    ],
  }),
  "eng-a2-6-adverbs": makeVisual(FillBlank, {
    title: "Adverbs and intensifiers",
    caption: "Pilih adverb atau intensifier sesuai makna kalimat.",
    items: [
      { sentence: "She speaks English very ___. (good)", options: ["good", "well", "hard", "fastly"], answer: 1, explanation: "Well adalah adverb yang menerangkan cara berbicara." },
      { sentence: "He drives ___. He always checks the road. (careful)", options: ["careful", "carefully", "care", "carefulness"], answer: 1, explanation: "Carefully adalah adverb cara dari careful." },
      { sentence: "The box is ___ heavy for me to lift.", options: ["very", "quite", "enough", "too"], answer: 3, explanation: "Too heavy menunjukkan beratnya berlebihan untuk diangkat." },
      { sentence: "She works ___ every day. She puts in a lot of effort.", options: ["hardly", "hard", "harder", "hardest"], answer: 1, explanation: "Hard berarti dengan usaha besar; hardly memiliki makna berbeda." },
    ],
  }),
  "eng-a2-6-paragraph": makeVisual(DialogueChoice, {
    title: "Pilih linker untuk paragraf",
    caption: "Pilih kata penghubung yang membuat hubungan ide paling jelas.",
    turns: [
      {
        speaker: "Paragraph",
        line: "I stayed home ___ it was raining. I read a book and made some tea.",
        options: ["because", "but", "finally"],
        answer: 0,
        explanation: "Because memperkenalkan alasan mengapa penulis tinggal di rumah.",
      },
      {
        speaker: "Paragraph",
        line: "The walk was long. ___, we enjoyed the view from the hill.",
        options: ["So", "However", "Because"],
        answer: 1,
        explanation: "However menunjukkan kontras antara perjalanan yang panjang dan menikmati pemandangan.",
      },
      {
        speaker: "Paragraph",
        line: "___, we packed our bags. Then we called a taxi and went to the station.",
        options: ["Although", "Because", "First"],
        answer: 2,
        explanation: "First menandai langkah awal sebelum kegiatan berikutnya.",
      },
    ],
  }),
};
