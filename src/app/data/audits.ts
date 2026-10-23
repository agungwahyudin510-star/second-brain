import type { AuditSet } from "@/lib/types";

export const AUDITS: AuditSet[] = [
  {
    id: "bias-check",
    pillar: "psikologi",
    title: "Cognitive Bias Check",
    description: "Centang yang sudah kamu lakukan sebelum mengambil keputusan penting.",
    items: [
      { id: "b1", text: "Saya sudah mencari bukti yang BERTENTANGAN dengan keyakinan saya (anti confirmation bias)." },
      { id: "b2", text: "Saya tidak mengambil keputusan hanya karena banyak orang melakukannya (anti herd mentality)." },
      { id: "b3", text: "Saya sudah menentukan batas rugi dan target sebelum masuk (anti loss aversion)." },
      { id: "b4", text: "Keputusan ini tidak dipengaruhi angka acuan pertama yang saya lihat (anti anchoring)." },
      { id: "b5", text: "Saya tidak sedang mengejar kerugian sebelumnya (anti sunk cost)." },
      { id: "b6", text: "Saya sudah menunggu minimal beberapa jam sejak ide ini muncul (anti impulsif)." },
    ],
  },
  {
    id: "emotion-check",
    pillar: "psikologi",
    title: "Fear & Greed Self-Check",
    description: "Cek kondisi emosi sebelum bertransaksi.",
    items: [
      { id: "e1", text: "Saya tidak sedang FOMO karena melihat harga naik tajam." },
      { id: "e2", text: "Saya tidak sedang panik karena melihat merah di layar." },
      { id: "e3", text: "Ukuran posisi saya masih sesuai rencana, bukan karena emosi." },
      { id: "e4", text: "Saya cukup tidur dan tidak sedang lelah atau emosional." },
      { id: "e5", text: "Saya bisa menjelaskan alasan keputusan ini dalam 2 kalimat." },
    ],
  },
  {
    id: "macro-check",
    pillar: "ekonomi",
    title: "Macro Sanity Check",
    description: "Pastikan kamu sudah melihat kondisi makro sebelum menentukan strategi.",
    items: [
      { id: "m1", text: "Saya tahu arah suku bunga bank sentral saat ini." },
      { id: "m2", text: "Saya sudah cek tren inflasi terbaru." },
      { id: "m3", text: "Saya paham fase siklus pasar yang sedang berjalan (perkiraan saya)." },
      { id: "m4", text: "Saya tahu kondisi likuiditas global secara umum." },
      { id: "m5", text: "Saya sudah mempertimbangkan risiko terburuk (worst case)." },
    ],
  },
];