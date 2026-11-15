"use client";

import DialogueChoice from "./DialogueChoice";
import ListenChoose from "./ListenChoose";
import MatchPairs from "./MatchPairs";
import { makeVisual } from "./index";

export const EnglishB1Bab05Visuals = {
  "eng-b1-5-connected": makeVisual(ListenChoose, {
    title: "Dengarkan connected speech",
    caption: "Putar ujaran dan kenali bunyi yang tersambung atau melemah.",
    items: [
      { text: "Please turn it off before you leave.", options: ["The sounds link across turn it off.", "There is a long pause after every word.", "The phrase means to turn on a light."], answer: 0, explanation: "Batas bunyi pada turn it off dapat tersambung dalam ujaran alami." },
      { text: "I want to ask a question.", options: ["To may have a weak form in the sentence.", "Every word must have equal stress.", "Want to is always written as wanna."], answer: 0, explanation: "To dapat terdengar ringan saat tidak mendapat tekanan." },
      { text: "A cup of tea and bread.", options: ["Of and and may be weak forms.", "Cup and tea are always unstressed.", "And changes the meaning to or."], answer: 0, explanation: "Of dan and dapat diucapkan ringan dalam frasa." },
    ],
  }),
  "eng-b1-5-reductions": makeVisual(MatchPairs, {
    title: "Bentuk lisan dan bentuk standar",
    caption: "Pasangkan reduction informal dengan bentuk lengkapnya.",
    pairs: [
      { left: "gonna", right: "going to" },
      { left: "wanna", right: "want to" },
      { left: "gotta", right: "got to" },
      { left: "should've", right: "should have" },
    ],
  }),
  "eng-b1-5-gist": makeVisual(DialogueChoice, {
    title: "Strategi sebelum dan saat menyimak",
    caption: "Pilih langkah yang membantu memahami pesan secara efisien.",
    turns: [
      {
        speaker: "Teacher",
        line: "Before you listen to a message titled “A Class Trip,” what is a useful first step?",
        options: ["Predict possible words about travel and time.", "Translate every word before the audio starts.", "Ignore the title and wait without a plan."],
        answer: 0,
        explanation: "Judul membantu memprediksi kosakata atau informasi yang mungkin muncul.",
      },
      {
        speaker: "Teacher",
        line: "On the first listen, what should you focus on?",
        options: ["The spelling of every word.", "The main idea and purpose.", "Writing every sentence exactly."],
        answer: 1,
        explanation: "Pendengaran awal sebaiknya menangkap gist, bukan semua detail.",
      },
      {
        speaker: "Teacher",
        line: "You missed one unfamiliar word. What should you do?",
        options: ["Stop listening and think about it.", "Guess a new topic.", "Keep listening and use the surrounding context."],
        answer: 2,
        explanation: "Terus menyimak membantu menangkap informasi berikutnya; konteks dapat membantu memahami kata itu." },
    ],
  }),
  "eng-b1-5-numbers": makeVisual(ListenChoose, {
    title: "Angka dan waktu",
    caption: "Dengarkan angka atau waktu, lalu pilih bentuk yang disebutkan.",
    items: [
      { text: "The room number is thirteen.", options: ["13", "30", "15"], answer: 0, explanation: "Audio menyebut thirteen, yaitu 13." },
      { text: "The group has fifteen members.", options: ["50", "15", "13"], answer: 1, explanation: "Audio menyebut fifteen, yaitu 15." },
      { text: "The call begins at four forty-five.", options: ["4:15", "5:45", "4:45"], answer: 2, explanation: "Four forty-five menunjukkan pukul 4:45." },
    ],
  }),
  "eng-b1-5-conversation": makeVisual(ListenChoose, {
    title: "Voicemail dan pengumuman",
    caption: "Dengarkan pesan singkat dan temukan detail atau tindakan penting.",
    items: [
      { text: "Hi, it's Mia. The meeting has moved from two p.m. to three p.m. Please call me back.", options: ["The meeting time changed.", "The meeting room changed.", "The meeting leader changed."], answer: 0, explanation: "Pesan menyebut waktu berubah dari dua menjadi tiga." },
      { text: "Attention, passengers. The four forty-five train to Central leaves from platform three.", options: ["Platform two", "Platform three", "Platform four"], answer: 1, explanation: "Pengumuman menyebut platform three." },
      { text: "Would you like to join us for lunch on Friday? Please message me if you can come.", options: ["The speaker is cancelling lunch.", "The speaker asks for a reply about an invitation.", "The speaker changed a train platform."], answer: 1, explanation: "Pesan mengundang pendengar makan siang dan meminta balasan." },
    ],
  }),
};
