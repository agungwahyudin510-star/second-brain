"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import { makeVisual } from "./index";

export const EnglishA2Bab04Visuals = {
  "eng-a2-4-body": makeVisual(MatchPairs, {
    title: "Cocokkan kosakata kesehatan",
    caption: "Pasangkan keluhan dengan artinya dalam bahasa Indonesia.",
    pairs: [
      { left: "headache", right: "sakit kepala" },
      { left: "fever", right: "demam" },
      { left: "cough", right: "batuk" },
      { left: "sore throat", right: "sakit tenggorokan" },
    ],
  }),
  "eng-a2-4-advice": makeVisual(FillBlank, {
    title: "Should or shouldn't?",
    caption: "Pilih saran yang paling sesuai dengan konteks kalimat.",
    items: [
      { sentence: "You feel tired. You ___ rest.", options: ["should", "shouldn't", "mustn't", "don't"], answer: 0, explanation: "Should memberi saran umum untuk beristirahat." },
      { sentence: "The sign says no entry. You ___ go in.", options: ["should", "shouldn't", "mustn't", "don't have"], answer: 2, explanation: "Mustn't menyatakan larangan pada tanda." },
      { sentence: "You have an early class. You ___ stay up all night.", options: ["should", "shouldn't", "must", "have to"], answer: 1, explanation: "Shouldn't memberi saran untuk tidak begadang." },
      { sentence: "You don't understand the task. You ___ ask your teacher.", options: ["should", "shouldn't", "mustn't", "doesn't"], answer: 0, explanation: "Should memberi saran yang sesuai untuk meminta penjelasan." },
    ],
  }),
  "eng-a2-4-obligation": makeVisual(FillBlank, {
    title: "Kewajiban dan larangan",
    caption: "Bedakan must, mustn't, have to, dan don't have to dari konteksnya.",
    items: [
      { sentence: "Visitors ___ show a ticket to enter.", options: ["mustn't", "don't have to", "must", "had"], answer: 2, explanation: "Must menyatakan kewajiban dalam aturan masuk." },
      { sentence: "The door is marked “Staff only.” You ___ enter.", options: ["have to", "don't have to", "must", "mustn't"], answer: 3, explanation: "Tanda Staff only menunjukkan larangan bagi pengunjung." },
      { sentence: "Food is provided, so you ___ bring lunch.", options: ["must", "mustn't", "don't have to", "has to"], answer: 2, explanation: "Makanan disediakan, jadi membawa makan siang tidak wajib." },
      { sentence: "Yesterday, we ___ wait for the late bus.", options: ["have to", "mustn't", "don't have to", "had to"], answer: 3, explanation: "Had to menyatakan kewajiban pada masa lampau." },
    ],
  }),
  "eng-a2-4-doctor": makeVisual(DialogueChoice, {
    title: "Percakapan di klinik",
    caption: "Pilih respons sopan untuk melanjutkan percakapan latihan.",
    turns: [
      {
        speaker: "Receptionist",
        line: "Good morning. How can I help you?",
        options: ["I'd like to make an appointment, please.", "I am an appointment yesterday.", "Give me a time now."],
        answer: 0,
        explanation: "Ungkapan ini sopan untuk meminta janji temu.",
      },
      {
        speaker: "Receptionist",
        line: "What would you like to tell the health professional?",
        options: ["My phone is very expensive.", "I have a sore throat and feel tired.", "I have to wear a blue bag."],
        answer: 1,
        explanation: "Respons ini menyampaikan keluhan sederhana dengan jelas.",
      },
      {
        speaker: "Pharmacist",
        line: "Here are the product instructions.",
        options: ["I will change the instructions.", "I don't need to read them.", "How often should I use this? Could you explain the label?", "I take any amount."],
        answer: 2,
        explanation: "Tanyakan petunjuk dengan sopan dan jangan menebak penggunaan atau dosis.",
      },
    ],
  }),
  "eng-a2-4-problems": makeVisual(ListenChoose, {
    title: "Dengarkan masalah sehari-hari",
    caption: "Dengarkan kalimat dan pilih ringkasan masalah yang tepat.",
    items: [
      { text: "I can't find my keys. Could you help me look for them?", options: ["The speaker has lost their keys and asks for help.", "The speaker wants to buy new shoes.", "The speaker is looking for a new job."], answer: 0, explanation: "Pembicara tidak menemukan kunci dan meminta bantuan mencarinya." },
      { text: "I'm sorry I'm late. My bus was delayed this morning.", options: ["The speaker missed a meeting yesterday.", "The speaker's phone is broken.", "The speaker is late because the bus was delayed."], answer: 2, explanation: "Pembicara menjelaskan keterlambatan karena bus tertunda." },
      { text: "My phone isn't working. The screen is black, so I'll ask for technical help.", options: ["The speaker has forgotten a password.", "The phone has a problem and the speaker will ask for help.", "The speaker wants to buy a train ticket."], answer: 1, explanation: "Layar ponsel bermasalah dan pembicara akan meminta bantuan teknis." },
    ],
  }),
};
