import type { CurriculumModule } from "@/lib/types";

type Outline = [string, string, string];

function roadmap(level: "A2" | "B1" | "B2", chapters: Outline[]): CurriculumModule[] {
  return chapters.map(([title, summary, topics], index) => ({
    id: `eng-${level.toLowerCase()}-${index + 1}`,
    title: `${level} • Bab ${index + 1}: ${title}`,
    summary,
    lessons: [{
      id: `eng-${level.toLowerCase()}-${index + 1}-1`,
      title: `Peta belajar: ${title}`,
      minutes: 8,
      content: `# ${title}\n\n**Target level ${level}:** ${summary}\n\nMateri yang direncanakan pada bab ini: ${topics}\n\n**Contoh konteks:** gunakan ungkapan sesuai situasi, perhatikan siapa yang berbicara dan kapan peristiwa terjadi, lalu pilih bentuk bahasa yang membantu lawan bicara memahami maksudmu.\n\n**Status:** ini adalah peta bab, bukan materi lengkap atau asesmen. Materi rinci, latihan, dan kuis bab ${level} belum tersedia. Selesaikan dan tinjau materi A1 terlebih dahulu; bab ini tidak mengklaim penguasaan level atau sertifikasi CEFR.`,
    }],
  }));
}

export const ENGLISH_A2 = roadmap("A2", [
  ["Past Experiences", "Menceritakan kejadian lampau dengan simple past, was/were, dan penanda waktu.", "regular/irregular verbs, pertanyaan tentang masa lalu, dan pengalaman pekan lalu."],
  ["Future Plans", "Menyatakan niat, prediksi, dan rencana.", "be going to, will dalam konteks dasar, pengaturan masa depan, dan membuat janji."],
  ["Comparisons & Descriptions", "Membandingkan dan mendeskripsikan orang, tempat, serta benda.", "comparatives, superlatives, as ... as, dan urutan kata sifat dasar."],
  ["Health & Everyday Problems", "Menjelaskan masalah umum dan memberikan saran sederhana.", "kosakata tubuh/kesehatan, should, must, have to, dan permintaan sopan."],
  ["Travel & Experiences", "Meminta informasi perjalanan dan berbagi pengalaman.", "transportasi, akomodasi, present perfect pengantar, ever, dan never."],
  ["Connecting Ideas", "Menghubungkan ide menjadi paragraf yang mudah diikuti.", "because, so, but, although, urutan peristiwa, dan adverbia dasar."],
  ["Work & Study", "Berkomunikasi dalam kegiatan kerja dan belajar yang rutin.", "kosakata pekerjaan, tanggung jawab, instruksi, dan email dasar."],
  ["A2 Practical Communication", "Mengintegrasikan membaca, mendengar, menulis, dan percakapan rutin.", "pesan sehari-hari, narasi pengalaman, preferensi, dan role-play."],
]);

export const ENGLISH_B1 = roadmap("B1", [
  ["Tense Mastery", "Menceritakan waktu dan hubungan peristiwa dengan lebih tepat.", "present/past/future review, present perfect, past continuous, dan penanda waktu."],
  ["Complex Sentences", "Menggabungkan klausa dan menjelaskan kondisi.", "relative clauses, zero/first/second conditional, gerunds, infinitives, dan linking words."],
  ["Expressing Opinions", "Menyampaikan pendapat, alasan, serta perbedaan pandangan dengan sopan.", "hedging, argumen, setuju/tidak setuju, dan kelebihan-kekurangan."],
  ["Reading for Understanding", "Menemukan ide utama dan menyimpulkan makna dari teks yang lebih panjang.", "skimming, scanning, context clues, fakta/opini, inferensi, dan tujuan penulis."],
  ["Listening in Context", "Memahami inti, detail, dan maksud dalam percakapan yang lebih alami.", "connected speech, reductions umum, konteks, dan variasi kecepatan."],
  ["Writing with Structure", "Menulis paragraf dan email dengan alur yang jelas.", "topic sentence, contoh pendukung, narasi, deskripsi, penyuntingan."],
  ["Communication & Problem Solving", "Mengklarifikasi, mengusulkan solusi, dan mengatasi salah paham.", "negosiasi, pelaporan informasi, instruksi, dan percakapan bercabang."],
  ["B1 Applied English", "Menggunakan bahasa secara mandiri pada topik yang dikenal.", "artikel panjang, paragraf opini, diskusi, ringkasan, dan komunikasi lisan."],
]);

export const ENGLISH_B2 = roadmap("B2", [
  ["Advanced Tense & Aspect", "Memilih tense/aspect secara konsisten dalam narasi dan teks panjang.", "narrative tenses, past perfect, future continuous/perfect pengantar."],
  ["Advanced Grammar", "Menggunakan struktur kompleks untuk makna yang lebih presisi.", "passive voice, reported speech, conditionals, modals, dan relative clauses."],
  ["Vocabulary & Collocations", "Memilih kosakata, kolokasi, dan register yang alami.", "phrasal verbs, word families, affixes, connotation, dan paraphrase."],
  ["Critical Reading", "Mengevaluasi argumen, bukti, nada, dan makna tersirat.", "struktur argumen, inferensi, klaim, ringkasan, dan tujuan penulis."],
  ["Advanced Listening", "Mengikuti diskusi panjang dan merangkum informasi lisan.", "sikap pembicara, aksen, implikasi, pencatatan, dan ringkasan."],
  ["Academic & Professional Writing", "Menyusun tulisan formal dengan argumen dan kohesi yang kuat.", "register, esai, thesis statement, bukti, revisi, dan proofreading."],
  ["Presentation & Discussion", "Menyampaikan ide kompleks dan merespons pertanyaan secara fleksibel.", "signposting, penjelasan konsep teknis, persuasi, dan diskusi profesional."],
  ["B2 Applied English", "Mengintegrasikan pemahaman dan produksi bahasa pada topik abstrak.", "teks kompleks, esai, materi lisan panjang, opini bernuansa, dan proyek akhir."],
]);
