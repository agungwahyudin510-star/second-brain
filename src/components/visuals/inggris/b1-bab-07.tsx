"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import ListenChoose from "./ListenChoose";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishB1Bab07Visuals = {
  "eng-b1-7-clarify": makeVisual(DialogueChoice, {
    title: "Klarifikasi dan konfirmasi",
    caption: "Pilih respons yang memeriksa informasi dengan sopan dan spesifik.",
    turns: [
      {
        speaker: "Colleague",
        line: "Please move the meeting to the smaller room before Friday.",
        options: ["Do you mean we should use the smaller room before Friday?", "I moved a different meeting last Friday.", "The smaller rooms are always uncomfortable."],
        answer: 0,
        explanation: "Respons mengulang tindakan dan batas waktu untuk memastikan maksud.",
      },
      {
        speaker: "Visitor",
        line: "The form needs one more detail.",
        options: ["You should have explained that earlier.", "Could you give me an example of the detail you need?", "The form is always difficult to complete."],
        answer: 1,
        explanation: "Pertanyaan meminta contoh konkret tanpa menyalahkan pembicara.",
      },
      {
        speaker: "Manager",
        line: "Send the draft after you check the names.",
        options: ["I sent a draft to the manager yesterday.", "Names are not important for a draft.", "Let me check I've understood: I should verify the names first."],
        answer: 2,
        explanation: "Parafrase mengulang urutan tindakan dan meminta konfirmasi.",
      },
    ],
  }),
  "eng-b1-7-reported": makeVisual(FillBlank, {
    title: "Reported speech",
    caption: "Pilih bentuk yang sesuai untuk melaporkan ucapan dan pertanyaan.",
    items: [
      { sentence: "“I am ready,” she said. → She said that she ___ ready.", options: ["is", "was", "will be"], answer: 1, explanation: "Dalam laporan lampau, am biasanya bergeser menjadi was." },
      { sentence: "“I will call tomorrow,” he said. → He said he ___ the next day.", options: ["would call", "will call", "called"], answer: 0, explanation: "Will bergeser menjadi would dalam reported speech lampau." },
      { sentence: "“Where do you work?” she asked. → She asked where I ___.", options: ["do work", "did I work", "worked"], answer: 2, explanation: "Reported question memakai urutan pernyataan dan backshift yang sesuai." },
      { sentence: "“Are you free?” he asked me. → He asked me ___ I was free.", options: ["that", "if", "what"], answer: 1, explanation: "If memperkenalkan reported yes/no question." },
    ],
  }),
  "eng-b1-7-suggest": makeVisual(SentenceBuilder, {
    title: "Saran dan kompromi",
    caption: "Susun kalimat yang mengajukan usulan secara wajar dan sopan.",
    items: [
      { prompt: "Sarankan rapat setelah makan siang.", tiles: ["How", "about", "meeting", "after", "lunch?"], answer: "How about meeting after lunch?", explanation: "How about diikuti gerund meeting." },
      { prompt: "Usulkan agar kita berbagi tugas.", tiles: ["Why", "don't", "we", "share", "the", "task?"], answer: "Why don't we share the task?", explanation: "Why don't we diikuti kata kerja dasar." },
      { prompt: "Sampaikan saran untuk memeriksa jadwal.", tiles: ["I'd", "suggest", "checking", "the", "schedule", "first."], answer: "I'd suggest checking the schedule first.", explanation: "I'd suggest dapat diikuti gerund." },
      { prompt: "Tawarkan kompromi mengenai waktu.", tiles: ["Would", "you", "be", "willing", "to", "meet", "halfway", "on", "the", "time?"], answer: "Would you be willing to meet halfway on the time?", explanation: "Pertanyaan sopan ini membuka ruang untuk bernegosiasi." },
    ],
  }),
  "eng-b1-7-complaint": makeVisual(DialogueChoice, {
    title: "Keluhan dan penyelesaian",
    caption: "Pilih respons yang sopan, jelas, dan berorientasi pada solusi.",
    turns: [
      {
        speaker: "Customer",
        line: "My order arrived with a damaged box.",
        options: ["I'm sorry to trouble you, but the box arrived damaged.", "Your delivery service is useless and careless.", "I will complain about every person who works here."],
        answer: 0,
        explanation: "Keluhan menyebut masalah secara spesifik tanpa menyerang pribadi.",
      },
      {
        speaker: "Staff",
        line: "We can replace the item tomorrow.",
        options: ["That is not good enough, and I won't listen.", "I appreciate the offer, but tomorrow is too late. Is there another option?", "You should know what I want without asking."],
        answer: 1,
        explanation: "Respons menolak dengan sopan dan meminta alternatif.",
      },
      {
        speaker: "Customer",
        line: "We can send a new copy today and collect the damaged one.",
        options: ["Nothing can ever solve this problem.", "You always make mistakes with every order.", "That would be helpful, thank you. Please confirm the delivery time."],
        answer: 2,
        explanation: "Respons menerima solusi dan memastikan detail tindak lanjut.",
      },
    ],
  }),
  "eng-b1-7-solving": makeVisual(ListenChoose, {
    title: "Instruksi dan pilihan solusi",
    caption: "Dengarkan kondisi dan pilih langkah yang sesuai.",
    items: [
      { text: "Once you receive the form, check the address. If it is correct, send it to the office.", options: ["Check the address, then send the form if it is correct.", "Send the form before checking its address.", "Ask the visitor to leave without the form."], answer: 0, explanation: "Instruksi menyatakan pemeriksaan alamat dilakukan sebelum pengiriman." },
      { text: "If the room is locked, call the front desk. Otherwise, set up the chairs.", options: ["Set up chairs whether or not the room is locked.", "Call the front desk if the room is locked.", "Leave the building when the room is open."], answer: 1, explanation: "Cabang if mengarahkan pendengar menelepon front desk saat terkunci." },
      { text: "After that, save a new copy. If the file name is already in use, add today's date.", options: ["Delete the old file before checking its name.", "Use the same name and replace every copy.", "Add today's date if the file name is already in use."], answer: 2, explanation: "Instruksi memberi nama baru dengan tanggal hanya jika nama sudah digunakan." },
    ],
  }),
};
