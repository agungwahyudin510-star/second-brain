import type { CurriculumModule } from "@/lib/types";

export const PSIKOLOGI: CurriculumModule[] = [
  {
    id: "psi-m1",
    title: "Modul 1: Cara Otak Mengambil Keputusan",
    summary: "System 1 vs 2, bias kognitif inti, dan prospect theory.",
    lessons: [
      {
        id: "psi-1-1",
        title: "System 1 vs System 2",
        minutes: 15,
        content: `# System 1 vs System 2

**Tujuan:** paham dua "mode" berpikir dan kapan masing-masing menyesatkan.

Kerangka ini dipopulerkan Daniel Kahneman dalam buku *Thinking, Fast and Slow*.

| | System 1 | System 2 |
|---|---|---|
| Sifat | Cepat, otomatis, intuitif | Lambat, sadar, analitis |
| Usaha | Hampir nol | Butuh energi dan fokus |
| Contoh | Mengenali wajah marah, 2+2 | Menghitung 17 x 24, membandingkan dua investasi |
| Risiko | Bias dan jalan pintas keliru | Malas, mudah lelah |

## Poin Penting
- Kebanyakan keputusan harian dikendalikan System 1. Itu efisien, tapi rawan bias.
- System 2 sering hanya **membenarkan** keputusan System 1 (rasionalisasi), bukan mengaudit.
- Lelah, lapar, terburu-buru, atau emosi tinggi → kita makin bergantung pada System 1.

## Kaitan ke Pasar
Harga naik tajam memicu FOMO (System 1). Keputusan beli terasa "jelas", padahal belum ada analisis. Memperlambat diri adalah cara memanggil System 2.

## Cek Pemahaman
1. Sebutkan dua keputusan terakhirmu: mana yang System 1, mana yang System 2?
2. Kenapa keputusan finansial sebaiknya tidak diambil saat sangat emosional?
3. Apa risiko System 2 yang hanya dipakai untuk membenarkan?

## Aksi
Mulai aturan **jeda 24 jam** untuk pembelian/investasi non-rutin di atas nominal tertentu, dan catat hasilnya seminggu.`,
      },
      {
        id: "psi-1-2",
        title: "Empat Bias Kognitif Inti",
        minutes: 20,
        content: `# Empat Bias Kognitif Inti

**Tujuan:** mengenali empat bias yang paling sering merusak keputusan finansial.

## 1. Confirmation Bias
Mencari dan mempercayai informasi yang **mendukung** keyakinan kita, lalu mengabaikan yang bertentangan.
*Gejala:* hanya mengikuti akun yang bullish pada aset yang sudah kamu beli.
*Penangkal:* cari argumen terbaik dari pihak lawan dengan sengaja.

## 2. Anchoring
Angka pertama yang dilihat menjadi "jangkar" penilaian.
*Gejala:* "harganya sudah turun dari 100 ke 60, murah!" padahal nilai wajarnya mungkin 30.
*Penangkal:* nilai berdasarkan fundamental, bukan harga masa lalu.

## 3. Availability Heuristic
Menilai kemungkinan sesuatu dari **seberapa mudah contohnya teringat**.
*Gejala:* takut berlebihan setelah berita krisis, atau yakin "pasti naik" karena banyak kisah sukses viral.
*Penangkal:* tanya base rate (data jangka panjang), bukan cerita.

## 4. Overconfidence
Merasa lebih tahu daripada kenyataannya, dan menilai kemampuan prediksi terlalu tinggi.
*Gejala:* posisi terlalu besar, tanpa rencana kalau salah.
*Penangkal:* catat prediksi dan skor akurasinya (decision journal).

## Cek Pemahaman
1. Bias mana yang paling sering kamu alami? Beri satu contoh nyata.
2. Kenapa konten viral "cuan 10x" memicu availability heuristic?
3. Bagaimana decision journal membantu melawan overconfidence?

## Aksi
Buka **Mindset Audit → Cognitive Bias Check** dan jalankan sebelum keputusan finansial berikutnya.`,
      },
      {
        id: "psi-1-3",
        title: "Prospect Theory & Loss Aversion",
        minutes: 20,
        content: `# Prospect Theory & Loss Aversion

**Tujuan:** paham kenapa rugi terasa lebih menyakitkan daripada untung terasa menyenangkan, dan dampaknya ke perilaku.

## Ide Inti (Kahneman & Tversky)
Orang menilai hasil sebagai **untung/rugi terhadap titik acuan**, bukan total kekayaan. Dan rugi terasa kira-kira **sekitar dua kali** lebih kuat daripada untung dengan nominal sama.

## Dampak Perilaku
- **Disposition effect:** menjual yang untung terlalu cepat, menahan yang rugi terlalu lama.
- **Risk-seeking saat rugi:** berani ambil risiko besar demi "balik modal".
- **Sunk cost fallacy:** terus bertahan karena "sudah terlanjur keluar banyak".
- **Framing effect:** pilihan yang sama terasa beda jika disajikan sebagai "90% selamat" vs "10% meninggal".

## Pertanyaan Pemutus
> "Kalau saya belum punya posisi ini, apakah saya akan membelinya **sekarang** di harga ini?"

Kalau jawabannya tidak, kemungkinan kamu bertahan karena loss aversion atau sunk cost, bukan karena analisis.

## Higiene Keputusan
1. Tentukan **exit plan** (batas rugi dan target) sebelum masuk.
2. Lakukan **pre-mortem**: bayangkan keputusan ini gagal, tulis 3 penyebab paling mungkin.
3. Pakai **checklist** untuk keputusan penting.
4. Catat di **decision journal**: alasan, keyakinan (%), hasil.

## Cek Pemahaman
1. Jelaskan disposition effect dan kenapa merugikan.
2. Apa beda sunk cost dengan biaya relevan untuk keputusan ke depan?
3. Tulis pre-mortem singkat untuk satu keputusan yang sedang kamu timbang.

## Aksi
Catat skor emosi harianmu di **Mindset Audit → Fear & Greed Index Note** selama 7 hari, lalu bandingkan dengan keputusan yang kamu ambil.`,
      },
    ],
  },
];