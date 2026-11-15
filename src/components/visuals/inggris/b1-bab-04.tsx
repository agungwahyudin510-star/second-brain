"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishB1Bab04Visuals = {
  "eng-b1-4-skimscan": makeVisual(MatchPairs, {
    title: "Strategi membaca",
    caption: "Pasangkan strategi membaca dengan tujuan utamanya.",
    pairs: [
      { left: "Skimming", right: "Baca cepat untuk garis besar" },
      { left: "Scanning", right: "Cari detail tertentu" },
      { left: "Read around a keyword", right: "Periksa konteks detail" },
      { left: "Check the heading", right: "Kenali topik bagian" },
    ],
  }),
  "eng-b1-4-context": makeVisual(FillBlank, {
    title: "Petunjuk arti dari konteks",
    caption: "Pilih makna yang didukung oleh kata dan kalimat di sekitarnya.",
    items: [
      { sentence: "The path was narrow; only one person could walk on it at a time. Narrow means ___.", options: ["not wide", "very long", "newly built", "very quiet"], answer: 0, explanation: "Hanya satu orang dapat berjalan pada satu waktu, jadi narrow berarti tidak lebar." },
      { sentence: "The re-opened gate was available again after repairs. Re-opened means ___.", options: ["closed for the first time", "opened again", "made smaller", "painted a new color"], answer: 1, explanation: "Re- menunjukkan tindakan dilakukan kembali." },
      { sentence: "The directions were confusing, so visitors asked for help. Confusing means ___.", options: ["easy to follow", "not clear or easy to understand", "very short", "written in large letters"], answer: 1, explanation: "Pengunjung perlu bantuan memahami petunjuk, jadi confusing berarti tidak jelas." },
      { sentence: "The path was usable again, so walkers could travel along it. Usable means ___.", options: ["able to be used", "too dangerous to enter", "already forgotten", "not wide enough"], answer: 0, explanation: "Konteks menyatakan pejalan dapat melewati jalur tersebut." },
    ],
  }),
  "eng-b1-4-factopinion": makeVisual(FillBlank, {
    title: "Fakta atau opini?",
    caption: "Pilih apakah kalimat dapat diperiksa atau menyatakan penilaian.",
    items: [
      { sentence: "The library opens at 9 a.m. according to the notice.", options: ["Fact", "Opinion"], answer: 0, explanation: "Jam buka dapat diperiksa dengan membaca notice." },
      { sentence: "This is the most welcoming library in town.", options: ["Fact", "Opinion"], answer: 1, explanation: "Most welcoming adalah penilaian yang dapat berbeda antarpembaca." },
      { sentence: "The building is closed on Sundays.", options: ["Fact", "Opinion"], answer: 0, explanation: "Informasi jadwal dapat diperiksa pada sumber yang sesuai." },
      { sentence: "The reading room is the best place to study.", options: ["Fact", "Opinion"], answer: 1, explanation: "Best place menyampaikan preferensi atau penilaian." },
    ],
  }),
  "eng-b1-4-inference": makeVisual(DialogueChoice, {
    title: "Pilih inferensi berbasis bukti",
    caption: "Gunakan petunjuk teks, bukan asumsi yang tidak disebutkan.",
    turns: [
      {
        speaker: "Text",
        line: "Rina arrived at the office with wet shoes and a folded umbrella.",
        options: ["It probably rained earlier.", "Rina travelled by plane.", "Her shoes are new."],
        answer: 0,
        explanation: "Sepatu basah dan payung mendukung kemungkinan hujan, tanpa memastikan sebabnya.",
      },
      {
        speaker: "Text",
        line: "The lights were off, the chairs were stacked, and the door was locked.",
        options: ["A meeting will start soon.", "The place may be closed.", "The room has no chairs."],
        answer: 1,
        explanation: "Lampu mati, kursi ditumpuk, dan pintu terkunci menyarankan tempat mungkin sudah tutup.",
      },
      {
        speaker: "Text",
        line: "The note asks visitors to wait until the floor is dry. A caretaker carries a mop.",
        options: ["The floor may be getting cleaned.", "The hall is certainly flooded.", "The event has been cancelled."],
        answer: 0,
        explanation: "Instruksi dan mop mendukung dugaan bahwa lantai sedang dibersihkan, tetapi tidak membuktikan banjir atau pembatalan.",
      },
    ],
  }),
  "eng-b1-4-summary": makeVisual(SentenceBuilder, {
    title: "Parafrasa kalimat",
    caption: "Susun kalimat dengan struktur berbeda tetapi makna yang tetap sama.",
    items: [
      { prompt: "Parafrasekan: “Volunteers will arrange chairs.”", tiles: ["People", "who", "offer", "help", "will", "set", "up", "the", "chairs."], answer: "People who offer help will set up the chairs.", explanation: "Volunteers diparafrasekan sebagai people who offer help; makna tetap." },
      { prompt: "Parafrasekan: “The event opens at ten.”", tiles: ["The", "event", "begins", "at", "10", "a.m."], answer: "The event begins at 10 a.m.", explanation: "Opens dalam konteks acara dapat diparafrasekan menjadi begins." },
      { prompt: "Parafrasekan: “Visitors may bring books on Saturday.”", tiles: ["People", "can", "also", "bring", "books", "on", "Saturday."], answer: "People can also bring books on Saturday.", explanation: "Visitors diparafrasekan menjadi people dan may menjadi can." },
      { prompt: "Parafrasekan: “The room is closed on Sundays.”", tiles: ["The", "room", "is", "not", "open", "on", "Sundays."], answer: "The room is not open on Sundays.", explanation: "Is closed dan is not open memiliki makna yang setara di sini." },
    ],
  }),
};
