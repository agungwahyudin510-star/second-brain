"use client";

import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishB1Bab01Visuals = {
  "eng-b1-1-present": makeVisual(FillBlank, {
    title: "Present simple atau continuous?",
    caption: "Perhatikan apakah kalimat menyatakan kebiasaan, keadaan, atau situasi sementara.",
    items: [
      { sentence: "I ___ what you mean.", options: ["understands", "understanding", "understand", "have understanding"], answer: 2, explanation: "Understand biasanya stative verb untuk menyatakan pemahaman." },
      { sentence: "Look, the team ___ on the new project right now.", options: ["works", "is working", "work", "has worked"], answer: 1, explanation: "Right now menunjukkan kegiatan yang sedang berlangsung." },
      { sentence: "They ___ the answer to this question.", options: ["know", "are knowing", "knowing", "knows"], answer: 0, explanation: "Know menyatakan keadaan pengetahuan dan biasanya tidak memakai continuous." },
      { sentence: "I ___ about the offer at the moment.", options: ["think", "am thinking", "thinks", "thinking"], answer: 1, explanation: "Think bermakna proses mempertimbangkan di sini, sehingga continuous sesuai." },
    ],
  }),
  "eng-b1-1-past": makeVisual(FillBlank, {
    title: "Past simple atau past continuous?",
    caption: "Pilih bentuk yang menunjukkan latar atau kejadian lampau dengan tepat.",
    items: [
      { sentence: "I ___ dinner when the doorbell rang.", options: ["was cooking", "cooked", "am cooking", "have cooked"], answer: 0, explanation: "Memasak adalah latar yang sedang berlangsung ketika bel berbunyi." },
      { sentence: "While they ___, the lights went out.", options: ["worked", "were working", "are working", "have worked"], answer: 1, explanation: "Were working menggambarkan kegiatan yang berlangsung saat lampu padam." },
      { sentence: "Maya ___ her bag and left the room.", options: ["was picking up", "picks up", "has picked up", "picked up"], answer: 3, explanation: "Dua kejadian selesai berurutan memakai simple past." },
      { sentence: "What ___ you doing when I called?", options: ["did", "was", "were", "are"], answer: 2, explanation: "Pertanyaan past continuous memakai were dengan subjek you." },
    ],
  }),
  "eng-b1-1-perfect": makeVisual(FillBlank, {
    title: "Present perfect dan durasi",
    caption: "Pilih for, since, atau bentuk present perfect yang sesuai.",
    items: [
      { sentence: "I've worked here ___ 2021.", options: ["for", "since", "during", "ago"], answer: 1, explanation: "Since diikuti titik awal, yaitu 2021." },
      { sentence: "We've been waiting ___ an hour.", options: ["since", "during", "for", "ago"], answer: 2, explanation: "For diikuti durasi, yaitu an hour." },
      { sentence: "She has been ___ all morning.", options: ["work", "worked", "working", "works"], answer: 2, explanation: "Present perfect continuous memakai have/has been + verb-ing." },
      { sentence: "They ___ waiting since noon.", options: ["have been", "has been", "are", "were"], answer: 0, explanation: "Subjek they memakai have been dalam present perfect continuous." },
    ],
  }),
  "eng-b1-1-future": makeVisual(SentenceBuilder, {
    title: "Susun klausa waktu masa depan",
    caption: "Susun ubin dan gunakan present simple pada klausa waktu.",
    items: [
      { prompt: "Saya akan mengirim peta ketika menemukannya.", tiles: ["I'll", "send", "the", "map", "when", "I", "find", "it."], answer: "I'll send the map when I find it.", explanation: "Klausa when memakai present simple find untuk makna masa depan." },
      { prompt: "Kami akan menunggu di sini sampai bus tiba.", tiles: ["We'll", "wait", "here", "until", "the", "bus", "arrives."], answer: "We'll wait here until the bus arrives.", explanation: "Gunakan present simple arrives setelah until." },
      { prompt: "Telepon saya segera setelah kamu tiba di rumah.", tiles: ["Call", "me", "as", "soon", "as", "you", "get", "home."], answer: "Call me as soon as you get home.", explanation: "Klausa as soon as memakai present simple get." },
      { prompt: "Dia akan beristirahat setelah menyelesaikan pekerjaan.", tiles: ["He", "is", "going", "to", "rest", "after", "he", "finishes", "work."], answer: "He is going to rest after he finishes work.", explanation: "Rencana memakai going to; klausa after memakai present simple finishes." },
    ],
  }),
  "eng-b1-1-narrative": makeVisual(ListenChoose, {
    title: "Dengarkan narasi campuran tense",
    caption: "Dengarkan urutan cerita dan pilih informasi yang sesuai.",
    items: [
      { text: "I used to take the bus to work. One morning, I was waiting when my neighbor offered me a ride. I have remembered that kindness ever since.", options: ["The speaker used to take the bus and remembers a neighbor's kindness.", "The speaker always drove with the neighbor.", "The neighbor was waiting for a bus after work."], answer: 0, explanation: "Cerita menyebut kebiasaan naik bus dan pengalaman yang masih diingat." },
      { text: "We were preparing lunch when the guests arrived. We served the food, and everyone enjoyed the meal.", options: ["The guests arrived while lunch was being prepared.", "The meal was served before the group began cooking.", "Nobody arrived for lunch."], answer: 0, explanation: "Guests arrived during the ongoing preparation; serving followed." },
      { text: "I've been learning to draw for six months. I usually practise after dinner, but this week I'm taking an evening class.", options: ["The speaker has studied drawing for six months and has a class this week.", "The speaker started drawing yesterday and stopped.", "The speaker never practises after dinner."], answer: 0, explanation: "The speaker describes a six-month activity and a temporary class this week." },
    ],
  }),
};
