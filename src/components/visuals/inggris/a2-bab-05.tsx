"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import { makeVisual } from "./index";

export const EnglishA2Bab05Visuals = {
  "eng-a2-5-transport": makeVisual(MatchPairs, {
    title: "Kosakata perjalanan",
    caption: "Cocokkan kata perjalanan dengan artinya.",
    pairs: [
      { left: "train", right: "kereta" },
      { left: "ticket", right: "tiket" },
      { left: "passport", right: "paspor" },
      { left: "luggage", right: "bagasi" },
    ],
  }),
  "eng-a2-5-hotel": makeVisual(DialogueChoice, {
    title: "Meminta informasi di hotel",
    caption: "Pilih respons sopan yang sesuai.",
    turns: [
      {
        speaker: "Receptionist",
        line: "Good evening. How can I help you?",
        options: ["I'd like to check in, please.", "I am check in yesterday.", "Tell me a room now."],
        answer: 0,
        explanation: "I'd like to check in, please adalah permintaan yang sopan dan wajar.",
      },
      {
        speaker: "Guest",
        line: "Could you tell me where the lift is?",
        options: ["Could you tell me where is the lift?", "It's at the end of the hall.", "I have a passport."],
        answer: 1,
        explanation: "Respons memberikan lokasi; indirect question memakai urutan “where the lift is.”",
      },
      {
        speaker: "Guest",
        line: "Do you know if breakfast is included?",
        options: ["Yes, I know if is breakfast.", "Breakfast included where?", "Please check your booking details for that information."],
        answer: 2,
        explanation: "Respons sopan meminta tamu memeriksa informasi reservasi yang berlaku.",
      },
    ],
  }),
  "eng-a2-5-perfect": makeVisual(FillBlank, {
    title: "Have/has + past participle",
    caption: "Pilih kata bantu dan participle yang melengkapi kalimat.",
    items: [
      { sentence: "I ___ to Bali twice.", options: ["has been", "have been", "have went", "has went"], answer: 1, explanation: "Subjek I memakai have; past participle dari be adalah been." },
      { sentence: "She ___ sushi before.", options: ["have eaten", "has ate", "has eaten", "have ate"], answer: 2, explanation: "She memakai has dan past participle eat adalah eaten." },
      { sentence: "They ___ the old museum.", options: ["have seen", "has saw", "have saw", "has seen"], answer: 0, explanation: "They memakai have; past participle dari see adalah seen." },
      { sentence: "He ___ his homework.", options: ["have done", "has did", "have did", "has done"], answer: 3, explanation: "He memakai has dan past participle do adalah done." },
    ],
  }),
  "eng-a2-5-ever": makeVisual(FillBlank, {
    title: "Ever, never, already, yet, just",
    caption: "Pilih penanda pengalaman atau waktu yang cocok dengan konteks.",
    items: [
      { sentence: "Have you ___ visited Japan?", options: ["ever", "never", "already", "just"], answer: 0, explanation: "Ever umum dipakai dalam pertanyaan pengalaman." },
      { sentence: "I have ___ flown; this will be my first flight.", options: ["already", "never", "yet", "just"], answer: 1, explanation: "Never sesuai karena pembicara menyebut ini penerbangan pertamanya." },
      { sentence: "We've ___ booked the room, so the reservation is complete.", options: ["ever", "yet", "already", "never"], answer: 2, explanation: "Already menandai bahwa pemesanan sudah selesai." },
      { sentence: "I haven't checked in ___, but I have just arrived.", options: ["just", "already", "ever", "yet"], answer: 3, explanation: "Yet lazim berada di akhir kalimat negatif present perfect." },
    ],
  }),
  "eng-a2-5-contrast": makeVisual(ListenChoose, {
    title: "Pengalaman atau waktu lampau?",
    caption: "Dengarkan kalimat dan pilih penjelasan yang tepat.",
    items: [
      { text: "I've been to Bali, but I went there in 2019.", options: ["The first clause gives an experience; the second gives a finished time.", "Both clauses describe future plans.", "The speaker is still traveling to Bali."], answer: 0, explanation: "Present perfect menyatakan pengalaman, lalu past simple memberi waktu selesai." },
      { text: "Dewi isn't here. She has gone to the market.", options: ["Dewi has visited the market before and returned.", "Dewi is probably at the market now.", "Dewi went to the market in 2019."], answer: 1, explanation: "Has gone biasanya menunjukkan Dewi pergi dan belum kembali." },
      { text: "We have seen that film. We saw it last month.", options: ["They have never watched the film.", "They are watching the film now.", "They have the experience and specify when it happened."], answer: 2, explanation: "Kalimat pertama menyatakan pengalaman; kalimat kedua memberi waktu lampau." },
    ],
  }),
};
