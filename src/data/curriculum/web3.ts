import type { CurriculumModule } from "@/lib/types";

export const WEB3: CurriculumModule[] = [
  {
    id: "web-m1",
    title: "Modul 1: Fondasi Blockchain",
    summary: "Masalah yang diselesaikan blockchain, kriptografi dasar, dan mekanisme konsensus.",
    lessons: [
      {
        id: "web-1-1",
        title: "Kenapa Blockchain Ada: Masalah Kepercayaan",
        minutes: 15,
        content: `# Kenapa Blockchain Ada

**Tujuan:** paham masalah inti yang dipecahkan blockchain sebelum masuk ke teknis.

## Masalah: Double Spending
Uang digital itu hanya data, dan data mudah **disalin**. Bagaimana mencegah satu koin dipakai dua kali?

**Solusi tradisional:** pihak ketiga tepercaya (bank/payment processor) yang memegang buku besar dan menjadi penentu. Konsekuensinya: kita bergantung pada satu pihak (biaya, sensor, risiko kegagalan atau penyalahgunaan).

## Ide Blockchain
Buku besar **dibagi ke banyak komputer (node)**, dan aturan jaringan membuat semua pihak sepakat soal urutan transaksi **tanpa perlu percaya pada satu pihak**. Bitcoin (whitepaper Satoshi Nakamoto, 2008) adalah implementasi pertamanya.

## Sifat Kunci
- **Terdistribusi:** salinan ledger ada di banyak node.
- **Append-only:** data baru ditambahkan, yang lama sangat sulit diubah.
- **Transparan & dapat diverifikasi:** siapa pun bisa memeriksa aturan dan riwayat.
- **Insentif ekonomi:** peserta jujur diberi imbalan, yang curang dihukum biaya.

## Trade-off (Penting!)
Desentralisasi biasanya mengorbankan **kecepatan dan efisiensi**. Tidak semua masalah butuh blockchain. Kalau satu pihak tepercaya sudah cukup, database biasa lebih murah dan cepat.

## Cek Pemahaman
1. Jelaskan double spending dengan kata-katamu sendiri.
2. Apa harga yang dibayar untuk menghilangkan pihak ketiga tepercaya?
3. Sebutkan satu kasus di mana database biasa lebih cocok daripada blockchain.

## Aksi
Tulis di catatan Web3: "3 situasi yang butuh blockchain vs 3 yang tidak".`,
      },
      {
        id: "web-1-2",
        title: "Kriptografi Dasar: Hash, Key & Signature",
        minutes: 20,
        content: `# Kriptografi Dasar

**Tujuan:** paham tiga alat yang membuat blockchain aman.

## 1. Hash Function
Fungsi yang mengubah data apa pun menjadi "sidik jari" berukuran tetap (contoh: SHA-256 di Bitcoin).
- **Deterministik:** input sama → output sama.
- **Satu arah:** hampir mustahil menebak input dari output.
- **Avalanche effect:** ubah satu karakter, hash berubah total.

Blok berisi hash blok sebelumnya, sehingga mengubah data lama akan merusak seluruh rantai setelahnya.

## 2. Public & Private Key
- **Private key:** rahasia, bukti kepemilikan. Jangan pernah dibagikan.
- **Public key / address:** boleh dibagikan, diturunkan dari private key.

## 3. Digital Signature
Kamu **menandatangani** transaksi dengan private key. Siapa pun bisa memverifikasi tanda tangan memakai public key, tanpa tahu private key-nya.

## Konsekuensi Praktis
- **Wallet bukan tempat menyimpan koin.** Koin ada di blockchain; wallet menyimpan **kunci** yang memberi hak memindahkannya.
- **Seed phrase = akses penuh.** Siapa yang memegangnya memegang asetnya. Tidak ada tombol "lupa password".
- **Not your keys, not your coins:** kalau kunci dipegang pihak lain (exchange), kamu bergantung pada pihak itu.

## Cek Pemahaman
1. Kenapa mengubah satu transaksi lama membuat seluruh blok sesudahnya tidak valid?
2. Apa beda public key dan private key dalam hal fungsinya?
3. Kenapa tidak boleh memotret atau mengirim seed phrase lewat chat?

## Aksi
Cari tool hash online, masukkan "halo" lalu "Halo", dan catat perbedaan hasilnya (buktikan avalanche effect).`,
      },
      {
        id: "web-1-3",
        title: "Konsensus: PoW vs PoS & Model Akun",
        minutes: 20,
        content: `# Konsensus & Model Data

**Tujuan:** paham bagaimana ribuan node sepakat tanpa pemimpin, dan beda dua pendekatan utama.

## Masalah yang Dipecahkan
Node tidak saling percaya. Perlu aturan agar semua sepakat blok mana yang sah.

## Proof of Work (PoW) - contoh: Bitcoin
- Miner berlomba memecahkan teka-teki komputasi; pemenang menambah blok dan dapat reward.
- Keamanan berasal dari **biaya listrik dan hardware**. Menyerang jaringan = mahal.
- Kelemahan: konsumsi energi besar, throughput rendah.

## Proof of Stake (PoS) - contoh: Ethereum
- **Validator** mengunci (stake) aset sebagai jaminan, dipilih untuk memproses blok.
- Curang → stake bisa dipotong (**slashing**).
- Keamanan berasal dari **modal yang dipertaruhkan**. Jauh lebih hemat energi.
- Ethereum beralih dari PoW ke PoS pada **The Merge (September 2022)**.

## 51% Attack
Kalau satu pihak menguasai mayoritas daya (PoW) atau stake (PoS), ia bisa memanipulasi urutan transaksi. Makin terdesentralisasi, makin mahal serangannya.

## Dua Model Pencatatan
| Model | Cara kerja | Contoh |
|---|---|---|
| **UTXO** | Melacak "keping" output yang belum terpakai | Bitcoin |
| **Account** | Melacak saldo per akun (seperti rekening) | Ethereum |

## Gas (Biaya Transaksi)
Ruang di blok terbatas, jadi pengguna membayar fee agar transaksinya diproses. Saat jaringan ramai, fee naik (supply-demand lagi!).

## Cek Pemahaman
1. Dari mana keamanan PoW dan PoS masing-masing berasal?
2. Kenapa slashing penting dalam PoS?
3. Kenapa fee transaksi melonjak saat jaringan ramai? Kaitkan dengan materi Ekonomi.

## Aksi
Buat tabel perbandingan PoW vs PoS (keamanan, energi, kecepatan, risiko) di catatan Web3 milikmu.`,
      },
    ],
  },
];