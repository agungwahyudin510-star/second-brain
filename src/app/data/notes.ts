import type { Note } from "@/lib/types";

const d = "2026-10-01T08:00:00.000Z";

export const SEED_NOTES: Note[] = [
  {
    id: "eko-1",
    pillar: "ekonomi",
    title: "Inflasi & Suku Bunga: Hubungan Dasar",
    category: "Inflasi",
    tags: ["inflasi", "suku bunga", "bank sentral"],
    createdAt: d,
    updatedAt: d,
    content: `# Inflasi & Suku Bunga

**Inflasi** adalah kenaikan harga barang dan jasa secara umum dan terus-menerus, sehingga daya beli uang menurun.

## Mekanisme Dasar
1. Permintaan naik lebih cepat dari pasokan, sehingga harga naik.
2. Bank sentral **menaikkan suku bunga**.
3. Kredit jadi mahal, konsumsi dan investasi melambat, dan tekanan inflasi mereda.

## Dua Jenis Penyebab
| Jenis | Penyebab | Contoh |
|---|---|---|
| Demand-pull | Permintaan berlebih | Ekonomi overheating |
| Cost-push | Biaya produksi naik | Harga energi melonjak |

> **Insight:** Suku bunga tinggi biasanya menekan valuasi aset berisiko (saham growth, kripto) karena *discount rate* naik.

## Pertanyaan Reflektif
- Apa bedanya inflasi inti (core) dengan inflasi headline?
- Mengapa deflasi juga berbahaya?`,
  },
  {
    id: "eko-2",
    pillar: "ekonomi",
    title: "Siklus Pasar: Fase & Psikologinya",
    category: "Siklus Pasar",
    tags: ["market cycle", "bull", "bear"],
    createdAt: d,
    updatedAt: d,
    content: `# Siklus Pasar

Pasar bergerak dalam gelombang yang berulang, dan polanya mirip meski pemicunya selalu berbeda.

1. **Akumulasi**: harga rendah, sentimen pesimis, pemain besar mulai masuk.
2. **Mark-up (Bull)**: harga naik, optimisme meningkat, publik ikut masuk.
3. **Distribusi**: euforia, berita bagus di mana-mana, pemain besar mulai keluar.
4. **Mark-down (Bear)**: harga turun, panik, kapitulasi.

## Catatan
- Siklus kredit dan likuiditas sering menjadi pendorong utama.
- Timing puncak dan dasar nyaris mustahil diprediksi. Fokus pada **proses dan manajemen risiko**.`,
  },
  {
    id: "ing-1",
    pillar: "inggris",
    title: "8 Phrasal Verbs untuk Business Reading",
    category: "Vocabulary",
    tags: ["phrasal verb", "business"],
    createdAt: d,
    updatedAt: d,
    content: `# Phrasal Verbs Bisnis

| Phrasal Verb | Arti | Contoh |
|---|---|---|
| roll out | meluncurkan bertahap | The firm will **roll out** a new product in Q4. |
| scale back | mengurangi skala | They **scaled back** hiring plans. |
| cut back on | memangkas | Companies **cut back on** spending. |
| step down | mengundurkan diri | The CEO will **step down** next month. |
| take over | mengambil alih | A rival **took over** the startup. |
| phase out | menghapus bertahap | The bank is **phasing out** paper statements. |
| bail out | menyelamatkan (finansial) | Governments **bailed out** the banks. |
| cash in on | memanfaatkan untuk untung | Investors **cashed in on** the rally. |

**Latihan:** buat 1 kalimat sendiri untuk tiap phrasal verb di atas.`,
  },
  {
    id: "ing-2",
    pillar: "inggris",
    title: "Membaca Headline Finansial",
    category: "Financial Reading",
    tags: ["headline", "reading"],
    createdAt: d,
    updatedAt: d,
    content: `# Membaca Headline Finansial

Headline sering memakai verba kuat dan singkat:

- **Surge / Soar / Jump**: naik tajam
- **Plunge / Tumble / Slump**: turun tajam
- **Edge up / Edge down**: naik atau turun tipis
- **Rebound**: pulih setelah turun

## Strategi
1. Cari **subjek** (siapa/apa), **verba** (arah), dan **angka**.
2. Perhatikan kata hedging: *may, could, reportedly, sources say*.
3. Bedakan **fakta** dan **opini analis**.

> Contoh: *Stocks edge up as investors weigh inflation data.*
> Artinya: saham naik tipis karena investor menimbang data inflasi.`,
  },
  {
    id: "web-1",
    pillar: "web3",
    title: "Cara Kerja Blockchain Secara Sederhana",
    category: "Blockchain",
    tags: ["blockchain", "konsensus", "hash"],
    createdAt: d,
    updatedAt: d,
    content: `# Blockchain 101

Blockchain adalah **buku besar (ledger) terdistribusi** yang datanya disusun dalam blok dan saling terhubung lewat hash.

## Komponen Utama
- **Block**: kumpulan transaksi + hash blok sebelumnya.
- **Hash**: sidik jari digital. Ubah 1 data, hash berubah total.
- **Node**: komputer peserta jaringan yang menyimpan salinan ledger.
- **Konsensus**: aturan agar semua node sepakat (PoW, PoS).

## Alur Transaksi
1. User menandatangani transaksi dengan *private key*.
2. Transaksi masuk *mempool*.
3. Validator/miner memasukkannya ke blok.
4. Blok disebarkan dan diverifikasi node lain.

> **Kunci:** keamanan datang dari kombinasi kriptografi, insentif ekonomi, dan desentralisasi.`,
  },
  {
    id: "web-2",
    pillar: "web3",
    title: "AMM & Liquidity Pool (DeFi)",
    category: "DeFi",
    tags: ["defi", "amm", "uniswap"],
    createdAt: d,
    updatedAt: d,
    content: `# AMM & Liquidity Pool

**Automated Market Maker (AMM)** menggantikan order book dengan rumus matematika.

## Constant Product
\`x * y = k\`, di mana x dan y adalah jumlah dua token di pool. Setiap swap menggeser rasio keduanya sehingga harga berubah.

## Peran Liquidity Provider (LP)
- Menyetor dua token ke pool, dapat **fee** dari tiap swap.
- Risiko utama: **impermanent loss** saat harga relatif token bergerak jauh.

## Checklist Sebelum Masuk Pool
- [ ] Apakah kontrak sudah diaudit?
- [ ] Berapa TVL dan volume harian?
- [ ] Apakah fee sepadan dengan risiko impermanent loss?`,
  },
  {
    id: "psi-1",
    pillar: "psikologi",
    title: "Loss Aversion & Prospect Theory",
    category: "Cognitive Bias",
    tags: ["loss aversion", "kahneman", "bias"],
    createdAt: d,
    updatedAt: d,
    content: `# Loss Aversion

Menurut **Prospect Theory** (Kahneman & Tversky), rasa sakit karena rugi kira-kira **2x lebih kuat** daripada senangnya untung dengan jumlah yang sama.

## Dampak ke Keputusan
- Menahan posisi rugi terlalu lama (*disposition effect*).
- Menjual posisi untung terlalu cepat.
- Menghindari risiko wajar karena takut rugi.

## Cara Melawan
1. Tentukan **exit plan** sebelum masuk posisi.
2. Pikirkan keputusan sebagai **portofolio**, bukan satu trade.
3. Tanya: *Kalau saya belum punya aset ini, apakah saya akan membelinya sekarang?*`,
  },
  {
    id: "psi-2",
    pillar: "psikologi",
    title: "Siklus Fear & Greed",
    category: "Fear & Greed",
    tags: ["fear", "greed", "emosi"],
    createdAt: d,
    updatedAt: d,
    content: `# Siklus Fear & Greed

Emosi massa menggerakkan harga jauh melampaui nilai fundamentalnya.

| Fase | Emosi dominan | Perilaku umum |
|---|---|---|
| Euforia | Greed ekstrem | FOMO, leverage berlebih |
| Cemas | Denial | Beli saat turun tanpa analisis |
| Panik | Fear ekstrem | Jual di dasar |
| Harapan | Relief | Masuk lagi terlambat |

## Latihan Harian
- Catat skor emosi 0-100 di Mindset Audit.
- Bandingkan dengan keputusan yang diambil hari itu.`,
  },
];