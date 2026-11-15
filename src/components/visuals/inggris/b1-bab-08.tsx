"use client";

import DialogueChoice from "./DialogueChoice";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import SentenceBuilder from "./SentenceBuilder";
import { makeVisual } from "./index";

export const EnglishB1Bab08Visuals = {
  "eng-b1-8-article": makeVisual(FillBlank, {
    title: "Memahami artikel pendek",
    caption: "Gunakan detail eksplisit dalam artikel tentang shared workshop.",
    items: [
      { sentence: "The workshop is beside the ___.", options: ["community hall", "train station", "city hospital"], answer: 0, explanation: "Artikel menyebut ruangan workshop berada di samping community hall." },
      { sentence: "Volunteers welcome visitors on ___.", options: ["Monday evenings", "Saturday mornings", "Friday afternoons"], answer: 1, explanation: "Waktu yang disebut dalam artikel adalah Sabtu pagi." },
      { sentence: "One short class shows people how to ___.", options: ["paint a large wall", "build a new table", "sew a loose button"], answer: 2, explanation: "Artikel menyebut sesi untuk menjahit kancing yang longgar." },
      { sentence: "Visitors should book a place because ___.", options: ["the room has limited space", "all tools are for sale", "the workshop is closed to neighbors"], answer: 0, explanation: "Pemesanan diperlukan karena ruangannya terbatas." },
    ],
  }),
  "eng-b1-8-opinion": makeVisual(SentenceBuilder, {
    title: "Susun paragraf opini",
    caption: "Bangun kalimat posisi, alasan, contoh, dan kesimpulan yang jelas.",
    items: [
      { prompt: "Nyatakan opini tentang perpustakaan.", tiles: ["I", "believe", "that", "libraries", "give", "learners", "a", "useful", "place", "to", "study."], answer: "I believe that libraries give learners a useful place to study.", explanation: "Kalimat menyatakan posisi utama paragraf." },
      { prompt: "Berikan alasan tentang belajar bersama.", tiles: ["One", "reason", "is", "that", "learners", "can", "share", "ideas."], answer: "One reason is that learners can share ideas.", explanation: "Kalimat mengembangkan posisi dengan alasan yang relevan." },
      { prompt: "Tambahkan contoh dengan hedging.", tiles: ["For", "example,", "a", "quiet", "room", "may", "help", "some", "students", "focus."], answer: "For example, a quiet room may help some students focus.", explanation: "Contoh mendukung alasan dan may membatasi klaim." },
      { prompt: "Tutup paragraf opini.", tiles: ["For", "these", "reasons,", "a", "shared", "study", "space", "can", "be", "valuable."], answer: "For these reasons, a shared study space can be valuable.", explanation: "Kalimat menyimpulkan posisi tanpa menambahkan alasan baru." },
    ],
  }),
  "eng-b1-8-discussion": makeVisual(DialogueChoice, {
    title: "Interaksi dalam diskusi",
    caption: "Pilih respons yang mendengarkan dan menjaga percakapan tetap terbuka.",
    turns: [
      {
        speaker: "Mira",
        line: "I think we should start the event earlier.",
        options: ["Can I add something to that point?", "Be quiet because I disagree with you.", "Your idea is always wrong."],
        answer: 0,
        explanation: "Ungkapan meminta giliran dengan sopan dan mengaitkan respons dengan poin sebelumnya.",
      },
      {
        speaker: "Dani",
        line: "A shared room could help the group work together.",
        options: ["I see your point, but some people may need quiet space.", "That makes no sense, and I won't discuss it.", "I will talk about an unrelated topic now."],
        answer: 0,
        explanation: "Respons mengakui poin lalu menyampaikan pertimbangan berbeda secara sopan.",
      },
      {
        speaker: "Mira",
        line: "We can meet on Thursday and choose the room later.",
        options: ["No one should ask any more questions.", "So, we agree on Thursday and still need to choose a room.", "The room has four walls and a door."],
        answer: 1,
        explanation: "Respons merangkum kesepakatan dan hal yang masih perlu diputuskan.",
      },
    ],
  }),
  "eng-b1-8-summary": makeVisual(MatchPairs, {
    title: "Kalimat sumber dan parafrase",
    caption: "Cocokkan setiap gagasan dengan parafrase yang maknanya tetap sama.",
    pairs: [
      { left: "The club meets every week.", right: "Members get together once a week." },
      { left: "Visitors can borrow simple tools.", right: "Guests may use basic equipment for a short time." },
      { left: "The class begins at nine.", right: "The lesson starts at 9 a.m." },
      { left: "The group chose a new date.", right: "The members selected another day for the event." },
    ],
  }),
  "eng-b1-8-project": makeVisual(SentenceBuilder, {
    title: "Urutan mini project",
    caption: "Susun langkah proyek dari memilih sumber hingga evaluasi diri.",
    items: [
      { prompt: "Mulai dengan memilih bahan.", tiles: ["First,", "choose", "a", "familiar", "topic", "and", "a", "short", "source."], answer: "First, choose a familiar topic and a short source.", explanation: "Proyek dimulai dengan topik dan sumber yang sesuai." },
      { prompt: "Catat gagasan sumber.", tiles: ["Next,", "note", "the", "main", "ideas", "in", "your", "own", "words."], answer: "Next, note the main ideas in your own words.", explanation: "Catatan kata kunci membantu menyiapkan outline." },
      { prompt: "Rencanakan tulisan.", tiles: ["Then,", "make", "an", "outline", "before", "writing", "the", "short", "text."], answer: "Then, make an outline before writing the short text.", explanation: "Outline mengatur urutan ide sebelum draf." },
      { prompt: "Akhiri dengan refleksi.", tiles: ["Finally,", "present", "your", "ideas", "and", "choose", "one", "next", "step."], answer: "Finally, present your ideas and choose one next step.", explanation: "Presentasi dan evaluasi diri menutup proyek dengan rencana perbaikan." },
    ],
  }),
};
