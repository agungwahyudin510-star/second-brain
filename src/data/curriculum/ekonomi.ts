import type { CurriculumModule } from "@/lib/types";

export const EKONOMI: CurriculumModule[] = [
  {
    id: "eko-m1",
    title: "Modul 1: Fondasi Cara Berpikir Ekonomi",
    summary: "Kelangkaan, opportunity cost, supply-demand, dan elastisitas.",
    lessons: [
      {
        id: "eko-1-1",
        title: "Kelangkaan, Trade-off & Opportunity Cost",
        minutes: 15,
        content: `# Kelangkaan, Trade-off & Opportunity Cost

**Tujuan:** paham kenapa ilmu ekonomi ada, dan punya 4 "kacamata" dasar untuk menilai keputusan apa pun.

## Inti Materi
- **Kelangkaan (scarcity):** sumber daya (uang, waktu, tenaga) terbatas, sedangkan keinginan nyaris tak terbatas. Karena itu kita **harus memilih**.
- **Trade-off:** setiap pilihan berarti melepas sesuatu yang lain.
- **Opportunity cost:** nilai dari pilihan terbaik berikutnya yang kamu korbankan. Ini biaya *sebenarnya* dari sebuah keputusan, bukan cuma harga yang dibayar.
- **Marginal thinking:** keputusan rasional dibuat di "tepi". Pertanyaannya bukan "apakah ini bagus?", tapi "apakah **satu unit tambahan** ini sepadan?".
- **Insentif:** manusia merespons insentif. Ubah insentifnya, perilaku ikut berubah.

## Contoh
Kamu punya Rp10 juta. Opsinya: beli laptop baru, masuk ke aset investasi, atau tabungan darurat. Kalau kamu pilih laptop, opportunity cost-nya bukan "Rp10 juta" saja, tapi **opsi terbaik berikutnya** yang gagal kamu ambil (misalnya hasil investasi yang terlewat).

## Cek Pemahaman
1. Kamu kerja freelance Rp150 ribu/jam, lalu memilih nonton film 2 jam. Berapa opportunity cost-nya?
2. Kenapa "makan sepuasnya" di prasmanan sering membuat orang makan berlebihan? (petunjuk: biaya marginal)
3. Beri satu contoh kebijakan yang mengubah insentif, dan perilaku apa yang berubah.

## Aksi
Tulis 3 keputusan keuanganmu minggu ini dan tentukan opportunity cost masing-masing dalam satu kalimat.`,
      },
      {
        id: "eko-1-2",
        title: "Supply & Demand: Bagaimana Harga Terbentuk",
        minutes: 20,
        content: `# Supply & Demand

**Tujuan:** bisa menjelaskan kenapa harga naik/turun dan membedakan dua hal yang sering tertukar.

## Inti Materi
- **Hukum permintaan:** harga naik → jumlah yang diminta turun (hal lain tetap).
- **Hukum penawaran:** harga naik → produsen mau menjual lebih banyak.
- **Ekuilibrium:** titik pertemuan kurva, tempat jumlah yang diminta = jumlah yang ditawarkan.

## Dua Hal yang Sering Tertukar
| Konsep | Penyebab | Efek |
|---|---|---|
| **Pergerakan sepanjang kurva** | Perubahan harga barang itu sendiri | Jumlah diminta/ditawarkan berubah |
| **Pergeseran kurva** | Faktor lain (pendapatan, selera, biaya produksi, ekspektasi, teknologi) | Seluruh kurva geser, ekuilibrium baru |

## Contoh Kasus
Gagal panen cabai → **penawaran turun** (kurva supply geser kiri) → harga ekuilibrium naik, jumlah transaksi turun. Orang tidak otomatis "serakah"; pasokan memang menyusut.

## Surplus & Kekurangan
- Harga di **atas** ekuilibrium → surplus (barang menumpuk) → tekanan harga turun.
- Harga di **bawah** ekuilibrium → shortage (barang langka) → tekanan harga naik. Inilah kenapa harga yang ditahan tanpa solusi pasokan sering memunculkan antrean atau pasar gelap.

## Cek Pemahaman
1. Harga kopi naik. Apa efeknya ke permintaan teh (barang substitusi)? Kurva mana yang bergeser?
2. Teknologi produksi membaik. Kurva apa yang bergeser, ke arah mana, dan apa dampaknya ke harga?
3. Kenapa harga tiket konser populer bisa melonjak di pasar kedua?

## Aksi
Pilih 1 harga yang baru naik/turun di sekitarmu, lalu analisis: kurva mana yang bergeser dan kenapa.`,
      },
      {
        id: "eko-1-3",
        title: "Elastisitas & Konsekuensi yang Tak Terduga",
        minutes: 15,
        content: `# Elastisitas & Unintended Consequences

**Tujuan:** tahu seberapa sensitif permintaan terhadap harga, dan kenapa kebijakan sering berefek kebalikan dari niatnya.

## Elastisitas Harga Permintaan
Rumus: **% perubahan jumlah diminta ÷ % perubahan harga**.

| Nilai | Artinya | Contoh |
|---|---|---|
| > 1 (elastis) | Pembeli sangat sensitif harga | Barang mewah, banyak substitusi |
| < 1 (inelastis) | Pembeli kurang sensitif | Beras, listrik, obat penting |

**Implikasi:** barang inelastis → harga naik, pendapatan penjual ikut naik. Barang elastis → harga naik, penjual bisa kehilangan pendapatan.

## Faktor Penentu
- Ada tidaknya substitusi.
- Kebutuhan vs keinginan.
- Porsi dari pendapatan.
- Jangka waktu (jangka panjang biasanya lebih elastis).

## Unintended Consequences
Kebijakan mengubah insentif, dan orang menyesuaikan diri dengan cara yang tidak diduga. Contoh klasik **cobra effect**: hadiah untuk setiap kobra mati justru membuat orang menernakkan kobra.

## Cek Pemahaman
1. Mana yang lebih inelastis: bensin atau minuman bersoda? Kenapa?
2. Sebuah toko menaikkan harga 10% dan jumlah terjual turun 5%. Elastis atau inelastis? Pendapatan naik atau turun?
3. Cari satu contoh kebijakan/aturan yang hasilnya berlawanan dari tujuannya.

## Aksi
Cari satu produk langgananmu, tebak apakah elastis atau inelastis, lalu beri alasan dengan 2 faktor penentu di atas.`,
      },
    ],
  },
];