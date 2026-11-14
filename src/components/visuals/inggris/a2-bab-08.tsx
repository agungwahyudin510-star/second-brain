"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishA2Bab08Visuals = {
  "eng-a2-8-story": makeVisual(ListenChoose, {
    title: "Dengarkan cerita",
    caption: "Dengarkan tiap cerita dan pilih ringkasan yang tepat.",
    items: [
      { text: "I've visited Surabaya. I went there last year with my cousin.", options: ["The speaker has the experience and went last year.", "The speaker is going next year.", "The speaker has never visited Surabaya."], answer: 0, explanation: "Present perfect menyatakan pengalaman; past simple memberi waktu last year." },
      { text: "First, we arrived at the station. Then, we bought our tickets.", options: ["They bought tickets before they arrived.", "They arrived first and bought tickets next.", "They stayed at the hotel."], answer: 1, explanation: "First dan then menunjukkan urutan kedatangan lalu membeli tiket." },
      { text: "It rained, but we visited the museum because it was our last day.", options: ["They stayed home because it rained.", "They visited the museum next week.", "They visited the museum despite the rain; it was their last day."], answer: 2, explanation: "But menunjukkan kontras; because memberi alasan berkunjung." },
    ],
  }),
  "eng-a2-8-prefer": makeVisual(FillBlank, {
    title: "Preferences and comparisons",
    caption: "Pilih pola yang tepat untuk menyatakan pilihan.",
    items: [
      { sentence: "I prefer tea ___ coffee.", options: ["than", "to", "from", "with"], answer: 1, explanation: "Prefer diikuti to saat membandingkan dua noun." },
      { sentence: "I'd rather ___ at home tonight.", options: ["staying", "to stay", "stayed", "stay"], answer: 3, explanation: "Would rather diikuti kata kerja dasar stay." },
      { sentence: "The train is faster ___ the bus.", options: ["to", "as", "than", "from"], answer: 2, explanation: "Comparative faster diikuti than." },
      { sentence: "This room is as quiet ___ the library.", options: ["as", "than", "to", "more"], answer: 0, explanation: "Pola kesetaraan adalah as + adjective + as." },
    ],
  }),
  "eng-a2-8-roleplay": makeVisual(DialogueChoice, {
    title: "Rencana dan solusi",
    caption: "Pilih respons yang menyampaikan rencana atau solusi dengan jelas.",
    turns: [
      {
        speaker: "Nina",
        line: "What are you doing next Sunday?",
        options: ["I'm meeting my cousin at the station.", "I met my cousin last week.", "I meet my cousin every Sunday."],
        answer: 0,
        explanation: "Present continuous dengan waktu mendatang dapat menyatakan pengaturan yang telah dibuat.",
      },
      {
        speaker: "Nina",
        line: "The weather report says it may rain. What could we do?",
        options: ["We went to the beach yesterday.", "We could take an umbrella.", "We have taken it last year."],
        answer: 1,
        explanation: "Could menawarkan kemungkinan solusi untuk rencana mendatang.",
      },
      {
        speaker: "Nina",
        line: "Our train is delayed. How can we tell the hotel?",
        options: ["We should the hotel call.", "We called the hotel tomorrow.", "I could send them a polite message now."],
        answer: 2,
        explanation: "Could + kata kerja dasar menawarkan tindakan yang mungkin dilakukan sekarang.",
      },
    ],
  }),
  "eng-a2-8-notices": makeVisual(ListenChoose, {
    title: "Baca tanda dan pengumuman",
    caption: "Pilih arti atau detail yang diminta dari tiap teks pendek.",
    items: [
      { text: "No entry.", options: ["Do not go in.", "Please wait here.", "The room is open."], answer: 0, explanation: "No entry berarti dilarang masuk." },
      { text: "Staff only. Please use the side entrance.", options: ["Visitors may use this room.", "This area is for staff; use the side entrance.", "The side entrance is closed."], answer: 1, explanation: "Staff only membatasi area untuk staf; teks meminta memakai pintu samping." },
      { text: "The meeting is on Wednesday at 10 a.m. in Room 4. Please bring your laptop.", options: ["Bring a notebook to Room 10.", "The meeting is on Friday in Room 4.", "Bring your laptop to Room 4 on Wednesday at 10 a.m."], answer: 2, explanation: "Pesan menyebut laptop, Rabu pukul 10 pagi, dan Room 4." },
    ],
  }),
  "eng-a2-8-writing": makeVisual(SentenceBuilder, {
    title: "Susun kalimat paragraf",
    caption: "Susun kalimat dengan penghubung untuk membuat paragraf yang runtut.",
    items: [
      { prompt: "Nyatakan pengalaman mengunjungi kota.", tiles: ["I've", "visited", "the", "city."], answer: "I've visited the city.", explanation: "Present perfect menyatakan pengalaman tanpa waktu selesai." },
      { prompt: "Tambahkan alasan perjalanan.", tiles: ["I", "went", "because", "my", "friend", "invited", "me."], answer: "I went because my friend invited me.", explanation: "Because memperkenalkan alasan." },
      { prompt: "Tunjukkan kontras cuaca dan kegiatan.", tiles: ["It", "rained,", "but", "we", "walked", "around."], answer: "It rained, but we walked around.", explanation: "But menghubungkan dua gagasan yang kontras." },
      { prompt: "Tutup urutan cerita.", tiles: ["Finally,", "we", "went", "home."], answer: "Finally, we went home.", explanation: "Finally menandai kejadian terakhir." },
    ],
  }),
};
