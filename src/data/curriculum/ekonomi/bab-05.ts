import type { CurriculumModule } from "@/lib/types";

export const BAB_05: CurriculumModule = {
  id: "eko2-b05",
  title: "Bab 5 — Mengukur Ekonomi: PDB, Nominal vs Riil, dan Siklus Bisnis",
  summary: "Produk domestik bruto merangkum produksi, ukuran nominal dan riil memisahkan harga dari volume, dan siklus bisnis menggambarkan perubahan kegiatan ekonomi dari waktu ke waktu.",
  lessons: [
    {
      id: "eko2-b05-s1",
      title: "Apa yang diukur oleh PDB?",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan definisi produk domestik bruto, aliran sirkular antar pelaku ekonomi, perbedaan barang akhir dan barang antara, serta bagaimana nilai tambah menghindari hitung ganda. Bandingkan pendekatan produksi, pengeluaran, dan pendapatan serta kenali kegiatan yang tidak dicatat sebagai PDB.

> **Poin kunci**
> - PDB adalah nilai pasar barang dan jasa akhir yang diproduksi di dalam negeri selama periode tertentu.
> - Barang antara digunakan dalam produksi barang lain; nilai pasarnya tercakup melalui nilai tambah, bukan dijumlahkan berulang.
> - Pendekatan produksi, pengeluaran, dan pendapatan mengukur kegiatan yang sama dari sisi berbeda.
> - Jual beli barang bekas, pembayaran transfer, transaksi keuangan murni, dan produksi rumah tangga tak berbayar tidak dihitung sebagai produksi berjalan.

## Definisi dan intuisi

Produk domestik bruto (PDB; gross domestic product/GDP) adalah nilai pasar seluruh barang dan jasa akhir yang diproduksi di dalam batas suatu negara selama periode tertentu, biasanya satu tahun atau satu kuartal. Setiap kata membatasi ukuran ini. “Nilai pasar” menggunakan harga untuk menjumlahkan keluaran yang berbeda. “Akhir” mencegah bahan yang sama dihitung pada beberapa tahap. “Di dalam negeri” berfokus pada lokasi produksi, bukan kewarganegaraan pemilik faktor produksi. “Selama periode” membedakan aliran produksi dari persediaan kekayaan pada satu tanggal.

Aliran sirkular (circular flow) menggambarkan pertukaran antara rumah tangga, perusahaan, pemerintah, dan luar negeri. Rumah tangga menawarkan tenaga kerja, tanah, modal, dan keterampilan kepada perusahaan, lalu menerima upah, sewa, bunga, atau laba. Perusahaan menjual barang dan jasa kepada rumah tangga, pemerintah, serta pembeli luar negeri; mereka juga membeli input dan barang modal. Pemerintah memungut pajak, membeli barang dan jasa, memberi transfer, serta menyediakan layanan. Luar negeri membeli ekspor dan menjual impor. Pengeluaran satu pihak menjadi penerimaan pihak lain, sehingga nilai produksi dapat dilihat dari transaksi penjualan, pembelian akhir, atau pendapatan yang dihasilkan.

Barang antara (intermediate good) dipakai sebagai input untuk produksi berikutnya pada periode yang sama. Barang akhir (final good) dibeli untuk penggunaan akhir, bukan untuk diproses lagi pada periode itu. Klasifikasi bergantung pada penggunaan: tepung yang dibeli rumah tangga adalah barang akhir, sedangkan tepung yang dipakai toko roti merupakan barang antara. Ada dua cara konsisten menghitungnya: catat hanya barang akhir atau jumlahkan nilai tambah di setiap tahap.

**Nilai tambah = nilai penjualan tahap produksi − biaya barang antara yang dibeli dari tahap sebelumnya.** Penjualan mencatat nilai keluaran tahap itu; biaya antara adalah nilai input produksi yang sudah dihitung sebelumnya. Contoh gandum, tepung, dan roti:

| Pelaku | Penjualan | Biaya bahan antara | Nilai tambah |
|---|---:|---:|---:|
| Petani | 30 | 0 | 30 |
| Penggiling | 50 | 30 | 20 |
| Tukang roti | 100 | 50 | 50 |
| **Jumlah** | **180** | **80** | **100** |

Jumlah nilai tambah = 30+20+50 = 100, sama dengan nilai roti akhir yang dibeli konsumen. Menjumlahkan semua penjualan menghasilkan 180 dan menghitung gandum serta tepung berulang. Pendekatan produksi menjumlahkan nilai tambah; pendekatan pengeluaran menjumlahkan pembelian barang akhir; pendekatan pendapatan menjumlahkan pendapatan yang timbul dalam produksi. Secara akuntansi ketiganya sama, meskipun data awal dapat berbeda karena pengukuran dan waktu pencatatan.

Contoh Indonesia: petani menjual gabah, penggilingan mengolah beras, lalu rumah tangga membeli beras sebagai barang akhir; pencatatan tahap demi tahap menghindari penghitungan nilai gabah dan beras sekaligus sebagai keluaran akhir. Contoh global: biji kopi, kopi sangrai, dan minuman di kedai melewati rantai produksi serupa; nilai akhir mencakup nilai tambah tiap tahap, bukan penjumlahan bruto transaksi perantara.

[[visual:eko-value-added]]

## Kesalahpahaman umum

1. PDB tidak menghitung seluruh penjualan; barang antara yang sudah menjadi input tidak dihitung lagi sebagai barang akhir.
2. Pembayaran transfer memberi pendapatan kepada penerima, tetapi bukan pembayaran atas produksi baru.
3. Membeli saham atau obligasi yang sudah diterbitkan adalah pertukaran aset keuangan, bukan produksi barang atau jasa dalam periode berjalan.

## Kaitan ke investasi dan Web3

Penilaian rantai produksi harus mengikuti nilai tambah, bukan volume transaksi mentah. Dalam aplikasi di atas protokol, biaya protokol, penyimpanan, dan layanan aplikasi dapat mewakili tahap berbeda; menghitung nilai transaksi yang sama pada lapisan dasar dan aplikasi sebagai produksi terpisah berisiko hitung ganda. Investor perlu memisahkan penjualan akhir kepada pengguna dari input yang sudah dibayar ke penyedia lain, lalu menilai bagian nilai yang benar-benar diciptakan setiap pelaku.

## Batas model

PDB tidak memasukkan produksi rumah tangga yang tidak diperdagangkan, seperti memasak atau merawat keluarga sendiri, dan biasanya tidak mencatat transaksi ilegal yang tersembunyi secara lengkap. Barang bekas dikeluarkan karena produksinya sudah dihitung ketika baru dibuat; jasa perantara yang kini dijual tetap dapat dihitung. Kualitas, perubahan mutu, waktu pencatatan, dan estimasi kegiatan informal membuat PDB tak pernah menjadi catatan sempurna seluruh kegiatan produktif.
`,
    },
    {
      id: "eko2-b05-s2",
      title: "Pendekatan pengeluaran dan pendapatan",
      minutes: 40,
      content: `## Tujuan belajar

Gunakan pendekatan pengeluaran untuk menghitung PDB, bedakan investasi riil dari pembelian aset keuangan, tafsirkan ekspor neto, dan jelaskan bagaimana pendekatan pendapatan menghubungkan kembali pengeluaran dengan penerimaan produksi.

> **Poin kunci**
> - Rumus pengeluaran adalah PDB = C + I + G + (X − M).
> - Konsumsi, investasi, pengeluaran pemerintah, dan ekspor neto membagi pembelian barang dan jasa akhir menurut pembeliannya.
> - Investasi dalam PDB adalah pembentukan modal dan penambahan persediaan, bukan pembelian saham yang sudah ada.
> - Pendapatan faktor, pajak tak langsung neto, dan penyusutan melengkapi sisi pendapatan agar sama dengan PDB.

## Definisi, intuisi, dan rumus

Pendekatan pengeluaran (expenditure approach) menjumlahkan pengeluaran atas produksi akhir di dalam negeri: **PDB = C + I + G + (X − M)**. C adalah konsumsi rumah tangga atas barang dan jasa akhir; I adalah investasi domestik, termasuk mesin, bangunan, perumahan baru, dan perubahan persediaan; G adalah pembelian pemerintah atas barang dan jasa; X adalah ekspor yang diproduksi di dalam negeri; M adalah impor yang diproduksi di luar negeri. Semua komponen diukur untuk periode dan batas produksi yang sama.

Investasi di sini bermakna penambahan modal produktif, bukan membeli saham atau token bekas dari orang lain. Pembelian rumah baru termasuk pembentukan modal, sedangkan komisi jasa broker dapat termasuk jasa yang diproduksi pada periode transaksi. G mencatat pembelian barang dan jasa pemerintah, bukan pembayaran transfer seperti bantuan tunai atau pensiun; transfer mengubah distribusi pendapatan tetapi bukan pembelian keluaran saat itu. Pajak dan transfer memengaruhi pendapatan yang dapat dibelanjakan, tetapi tidak langsung menjadi komponen pembelian pemerintah.

Ekspor neto adalah X−M. Impor dikurangkan bukan karena impor selalu merugikan, melainkan karena C, I, dan G dapat mencakup barang impor. Pengurangan memastikan pengeluaran untuk produksi luar negeri tidak dianggap keluaran domestik. Ekspor neto positif berarti nilai ekspor melebihi impor; nilai negatif berarti impor lebih besar. Tanda tersebut sendiri tidak mengukur kesejahteraan atau kualitas perdagangan.

## Contoh hitungan lengkap

| Komponen | Nilai | Makna |
|---|---:|---|
| Konsumsi C | 600 | Pembelian akhir rumah tangga |
| Investasi I | 150 | Barang modal dan persediaan |
| Pembelian pemerintah G | 200 | Barang dan jasa, tanpa transfer |
| Ekspor X | 100 | Produksi domestik dibeli luar negeri |
| Impor M | 120 | Produksi luar negeri dikurangkan |
| Ekspor neto X−M | 100−120 = −20 | Impor melampaui ekspor |
| **PDB** | **600+150+200−20 = 930** | **Nilai produksi domestik** |

Pendekatan pendapatan menjumlahkan balas jasa faktor produksi: upah, sewa, bunga, dan laba. Agar sebanding dengan PDB pada harga pasar, tambahkan pajak tak langsung neto atas subsidi dan penyusutan modal. Dalam contoh, **PDB = upah + sewa + bunga + laba + pajak tak langsung neto + penyusutan**.

| Bagian pendekatan pendapatan | Perhitungan | Jumlah berjalan |
|---|---:|---:|
| Upah, sewa, bunga, laba | 520+50+40+140 | 750 |
| Tambahkan pajak tak langsung neto | 750+80 | 830 |
| Tambahkan penyusutan | 830+100 | **930** |

Hasil pendapatan 930 sama dengan pendekatan pengeluaran. Rantai sebab-akibatnya: rumah tangga dan pemerintah membeli keluaran akhir; perusahaan menerima penjualan; penerimaan itu membayar tenaga kerja dan pemilik input, mengganti penyusutan, serta mencakup pajak atas produksi. Selisih statistik antara pendekatan dapat muncul dalam data awal, tetapi konsep dasarnya adalah pencatatan sisi yang berbeda dari aliran yang sama.

Contoh Indonesia: pembelian pemerintah atas layanan kebersihan atau alat kesehatan merupakan pengeluaran barang/jasa; bantuan tunai kepada rumah tangga adalah transfer dan tidak dihitung sebagai G. Contoh global: ekspor perangkat lunak yang dibuat dalam negeri menambah X, sementara impor perangkat keras yang dibeli perusahaan tercermin dahulu dalam I lalu dikurangkan melalui M agar nilai impor tidak menjadi produksi lokal.

[[visual:eko-gdp-expenditure]]

## Kesalahpahaman umum

1. Membeli saham yang sudah ada memindahkan kepemilikan aset; itu bukan investasi dalam rumus PDB.
2. Pengeluaran pemerintah mencakup pembelian layanan dan barang, bukan transfer tunai.
3. Impor dikurangi untuk menjaga batas geografis produksi, bukan sebagai penilaian bahwa impor selalu buruk.

## Kaitan ke investasi dan Web3

Spekulasi aset berbeda dari investasi dalam PDB. Membeli token bekas dari pemegang lain adalah pertukaran aset keuangan, bukan produksi baru; membangun perangkat keras, mengembangkan perangkat lunak, atau menyediakan jasa komputasi dapat menjadi produksi apabila memenuhi aturan pencatatan. Investor protokol perlu membedakan modal yang membangun kapasitas produktif dari perputaran token di pasar sekunder, yang dapat besar tanpa menambah keluaran akhir domestik.

## Batas model

Komponen C, I, G, X, dan M mengelompokkan pengeluaran, tetapi tidak menyatakan apakah kegiatan itu bermanfaat, adil, atau berkelanjutan. Pembelian pemerintah dapat meningkatkan PDB walau hasil layanan berbeda kualitasnya; konsumsi barang tahan lama dan persediaan memerlukan aturan pencatatan waktu. Ekonomi lintas batas, perusahaan multinasional, dan estimasi penyusutan menambah tantangan pengukuran.
`,
    },
    {
      id: "eko2-b05-s3",
      title: "PDB nominal, PDB riil, dan deflator",
      minutes: 40,
      content: `## Tujuan belajar

Hitung PDB nominal dan riil dari harga serta jumlah, gunakan tahun dasar dan deflator PDB untuk memisahkan perubahan harga dari volume, dan tafsirkan pertumbuhan ekonomi riil tanpa menyamakan kenaikan harga dengan kenaikan produksi.

> **Poin kunci**
> - PDB nominal menilai produksi memakai harga pada periode yang sedang dihitung.
> - PDB riil menilai jumlah periode berjalan dengan harga tetap dari tahun dasar.
> - Deflator PDB adalah PDB nominal dibagi PDB riil, dikalikan 100.
> - Pertumbuhan nominal mencampur perubahan harga dan jumlah; pertumbuhan riil memusatkan perhatian pada perubahan volume produksi.

## Definisi dan intuisi

PDB nominal (nominal GDP) mengalikan jumlah keluaran suatu periode dengan harga pada periode yang sama. Nilainya naik ketika jumlah meningkat, harga meningkat, atau keduanya. Untuk menilai apakah produksi bertambah, ekonom menghitung PDB riil (real GDP) dengan menilai jumlah keluaran periode berjalan memakai harga dari tahun dasar (base year) yang ditetapkan. Dengan harga pembanding tetap, perbedaan nilai antartahun terutama mencerminkan perubahan jumlah, bukan inflasi harga barang yang sama.

Tahun dasar adalah periode acuan harga untuk perhitungan riil. Seri statistik dapat memperbarui atau menautkan tahun dasar untuk mewakili struktur ekonomi yang berubah. Perbandingan yang sah harus menggunakan seri dan metode yang konsisten; angka dari tahun dasar berbeda tidak selalu dapat langsung disambungkan tanpa penyesuaian.

**Deflator PDB = (PDB nominal ÷ PDB riil) × 100.** Deflator merangkum perubahan harga keluaran domestik dalam cakupan PDB relatif terhadap tahun dasar; nilainya 100 pada tahun dasar dalam konstruksi sederhana. **Pertumbuhan riil = (PDB riil periode baru ÷ PDB riil periode lama − 1) × 100%.** Pertumbuhan nominal memakai rumus sama pada PDB nominal dan mencampur perubahan harga dengan perubahan volume.

## Contoh hitungan lengkap

Tahun dasar 2024 memiliki harga A=10 dan B=20. Jumlah A dan B pada 2024 masing-masing 50 dan 25; pada 2025 masing-masing 52 dan 26. Harga 2025 adalah A=11 dan B=21.

| Periode dan ukuran | Perhitungan dengan harga yang sesuai | Hasil |
|---|---|---:|
| PDB nominal 2024 | 10×50 + 20×25 | 1.000 |
| PDB nominal 2025 | 11×52 + 21×26 = 572+546 | 1.118 |
| PDB riil 2025, harga 2024 | 10×52 + 20×26 = 520+520 | 1.040 |
| Pertumbuhan nominal | (1.118/1.000 − 1)×100% | 11,8% |
| Pertumbuhan riil | (1.040/1.000 − 1)×100% | 4% |
| Deflator PDB 2025 | (1.118/1.040)×100 | 107,5 |

Deflator 107,5 berarti tingkat harga agregat keluaran pada ukuran ini 7,5% di atas tahun dasar. Pemeriksaan faktor: 1.118/1.040=1,075 dan (1,04)(1,075)=1,118. Dengan demikian, pertumbuhan nominal 11,8% bukan bukti volume produksi tumbuh sebesar itu; hasilnya menggabungkan pertumbuhan riil 4% dan kenaikan harga sekitar 7,5%. Perkalian dua faktor menjelaskan mengapa persentasenya tidak persis dijumlahkan.

Mekanismenya: harga dan jumlah setiap barang dikalikan; penggunaan harga tahun berjalan membuat inflasi meningkatkan nominal meskipun volume hanya sedikit berubah. Mengunci harga ke tahun dasar mengisolasi perubahan jumlah. Deflator kemudian membandingkan dua ukuran untuk memperoleh perubahan harga keluaran domestik. Indeks harga konsumen memiliki cakupan keranjang konsumsi rumah tangga yang berbeda, sehingga tidak selalu bergerak sama dengan deflator PDB.

Contoh Indonesia: jika pendapatan nominal pedagang naik saat harga jual juga naik, ia perlu membandingkan volume penjualan dan biaya dengan ukuran riil sebelum menyimpulkan usaha berkembang. Contoh global: penjualan produsen lintas negara dapat bertambah nominal ketika harga komoditas dunia naik, walaupun jumlah barang yang diproduksi berubah lebih kecil; data aktual harus diverifikasi sebelum membuat klaim.

[[visual:eko-nominal-real]]

## Kesalahpahaman umum

1. PDB nominal bukan ukuran murni pertumbuhan kuantitas karena harga periode berjalan ikut berubah.
2. Deflator 107,5 adalah indeks dengan tahun dasar 100, bukan tingkat inflasi 107,5%.
3. Pertumbuhan riil 4% tidak berarti setiap industri atau rumah tangga mengalami kenaikan produksi atau pendapatan sebesar 4%.

## Kaitan ke psikologi keuangan dan investasi

Ilusi nominal terjadi ketika kenaikan jumlah rupiah dianggap kenaikan kekayaan nyata tanpa mengurangi perubahan harga. Investor yang melihat nilai portofolio atau pendapatan meningkat perlu membedakan imbal hasil nominal dari daya beli setelah inflasi, biaya, dan pajak. Harga aset tidak diukur langsung oleh deflator PDB, tetapi prinsip psikologisnya sama: angka nominal yang lebih besar belum tentu berarti kapasitas membeli lebih banyak.

## Batas model

PDB riil mengandalkan indeks harga dan teknik agregasi; barang baru, perubahan mutu, substitusi, serta layanan digital sulit dinilai dengan satu harga tetap. Deflator PDB mencakup keluaran domestik, bukan semua barang konsumsi termasuk impor. Seri riil merupakan estimasi statistik yang dapat direvisi, bukan pengukuran fisik tanpa ketidakpastian.
`,
    },
    {
      id: "eko2-b05-s4",
      title: "PDB, pendapatan nasional, dan kesejahteraan",
      minutes: 40,
      content: `## Tujuan belajar

Bedakan PDB dari pendapatan nasional bruto, hitung PDB riil per kapita dan pertumbuhannya, serta jelaskan alasan PDB berguna untuk mengukur produksi tetapi tidak cukup untuk menyimpulkan kesejahteraan masyarakat.

> **Poin kunci**
> - PDB mengukur produksi di wilayah domestik; pendapatan nasional bruto menambahkan pendapatan faktor neto dari luar negeri.
> - PDB per kapita membagi PDB dengan jumlah penduduk dan tetap merupakan rata-rata, bukan distribusi pendapatan.
> - Pertumbuhan PDB per kapita memperhitungkan pertumbuhan penduduk dan dapat berbeda dari pertumbuhan PDB total.
> - PDB tidak merangkum ekonomi informal, eksternalitas, waktu luang, mutu hidup, maupun pembagian hasil.

## Definisi dan intuisi

PDB mengukur nilai produksi yang berlangsung di dalam batas negara, tanpa memandang apakah tenaga kerja atau modal dimiliki penduduk lokal atau pihak asing. Pendapatan nasional bruto (PNB; gross national income/GNI) mengukur pendapatan faktor yang diterima penduduk dari produksi domestik maupun luar negeri. Dalam pencatatan makro modern, GNI adalah istilah yang lazim; istilah PNB tetap dikenal. Hubungannya: **GNI = PDB + pendapatan faktor neto dari luar negeri**, yaitu pendapatan faktor yang diterima dari luar dikurangi pendapatan yang dibayarkan ke luar.

PDB per kapita adalah PDB dibagi jumlah penduduk. Ukuran riil per kapita menggunakan PDB riil agar perubahan harga tidak disalahartikan sebagai tambahan keluaran per orang. Rata-rata ini berguna untuk membandingkan tingkat produksi antarwaktu atau antarperekonomian jika definisi dan harga pembanding sesuai. Namun rata-rata tidak menjelaskan siapa yang menerima pendapatan, bagaimana rumah tangga mengakses layanan, atau apakah hasil produksi memperbaiki kehidupan semua kelompok.

Pertumbuhan per kapita terkait dengan pertumbuhan PDB riil dan pertumbuhan penduduk. Untuk tingkat pertumbuhan g pada PDB riil dan n pada penduduk, **pertumbuhan per kapita = (1+g)/(1+n) − 1**. g dan n ditulis sebagai desimal dalam rumus. Jika PDB riil naik lebih cepat daripada jumlah penduduk, keluaran rata-rata per orang meningkat. Penghitungan tepat memakai rasio, bukan sekadar mengurangkan laju, walau selisih mendekati hasil ketika persentase kecil.

## Contoh hitungan lengkap

| Ukuran | Perhitungan | Hasil |
|---|---|---:|
| PDB | Data produksi domestik | 930 |
| Pendapatan faktor neto dari luar | 30 diterima − 50 dibayarkan | −20 |
| GNI/PNB | 930+30−50 | 910 |
| PDB riil per kapita 2024 | 1.000 ÷ 100 penduduk | 10,0 |
| PDB riil per kapita 2025 | 1.040 ÷ 100 penduduk | 10,4 |
| Pertumbuhan per kapita, g=4%, n=1% | 1,04/1,01−1 | 2,97% |

Pendapatan faktor neto negatif pada contoh karena pembayaran kepada pemilik faktor luar negeri melebihi penerimaan penduduk dari luar. PDB tetap 930 karena mengukur lokasi produksi; GNI menjadi 910 karena mengukur pendapatan faktor penduduk setelah arus lintas batas. Ketika penduduk tumbuh 1%, PDB riil total yang tumbuh 4% menghasilkan pertumbuhan per kapita 2,97%, bukan 4%.

Keterbatasan penting mencakup produksi informal yang tidak tertangkap lengkap, polusi atau manfaat sosial yang tidak tercermin dalam harga, ketimpangan, perubahan waktu luang, dan mutu barang maupun layanan. Kenaikan produksi untuk membersihkan kerusakan dapat menambah PDB meskipun kerusakan awal mengurangi kesejahteraan. Perbandingan daya beli antarnegara dapat mempertimbangkan paritas daya beli (purchasing power parity/PPP) secara kualitatif untuk menjelaskan perbedaan harga lokal; tanpa data setara dan terverifikasi, PPP bukan jalan pintas untuk memberi angka kesejahteraan.

Contoh Indonesia: PDB per kapita dapat tumbuh sementara pengalaman pekerja informal, daerah terpencil, atau rumah tangga berbeda; distribusi, layanan publik, dan biaya lingkungan perlu dilihat bersama. Contoh global: negara dengan PDB per kapita sama dapat berbeda dalam harga perumahan, waktu perjalanan, layanan kesehatan, dan waktu luang. Perbandingan konkret memerlukan data yang sebanding dan diverifikasi.

[[visual:eko-gdp-per-capita]]

## Kesalahpahaman umum

1. PDB domestik tidak otomatis menjadi pendapatan penduduk; laba atau upah dapat mengalir kepada pemilik faktor dari luar negeri.
2. PDB per kapita adalah rata-rata aritmetika dan tidak menggambarkan distribusi.
3. PDB yang meningkat tidak dengan sendirinya membuktikan kesejahteraan membaik untuk semua orang.

## Kaitan ke investasi dan Web3

Satu angka agregat tidak cukup untuk menilai kondisi masyarakat; prinsip ini juga berlaku pada proyek kripto. Nilai total terkunci (total value locked/TVL) yang tinggi tidak sendirian menunjukkan keamanan, aktivitas produktif, distribusi manfaat, atau kemampuan protokol bertahan. Investor perlu memeriksa mutu aktivitas, risiko kontrak, sumber likuiditas, biaya, dan ketergantungan pada insentif secara terpisah, tanpa menganggap satu metrik sebagai kesejahteraan keseluruhan.

## Batas model

PDB per kapita mengasumsikan penduduk sebagai pembagi yang relevan dan tidak mengukur distribusi atau kebutuhan berbeda. PNB/GNI juga tidak menyatakan siapa menerima pendapatan secara merata. Perbandingan PPP harus memakai metodologi, tahun, dan cakupan barang konsisten; penilaian kesejahteraan memerlukan indikator tambahan dan pertimbangan nilai yang dinyatakan terbuka.
`,
    },
    {
      id: "eko2-b05-s5",
      title: "Siklus bisnis dan kesenjangan output",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan fase siklus bisnis, hitung perubahan PDB riil kuartalan dan kesenjangan output, bedakan resesi teknis sebagai kaidah praktis dari penetapan resesi resmi, serta baca indikator siklus tanpa menganggapnya sebagai ramalan pasti.

> **Poin kunci**
> - Siklus bisnis bergerak melalui ekspansi, puncak, kontraksi atau resesi, dan lembah sebelum pemulihan.
> - Dua kuartal berturut-turut PDB riil turun adalah kaidah praktis populer, bukan definisi resmi universal.
> - Kesenjangan output membandingkan PDB aktual dengan PDB potensial.
> - Indikator utama memberi petunjuk tentang arah kegiatan, bukan kepastian waktu atau besarnya perubahan mendatang.

## Definisi dan intuisi

Siklus bisnis (business cycle) adalah fluktuasi kegiatan ekonomi agregat di sekitar kecenderungan pertumbuhan jangka panjang. Ekspansi adalah masa kegiatan dan produksi meningkat; puncak adalah titik tertinggi sebelum kegiatan melemah; resesi atau kontraksi adalah penurunan kegiatan yang meluas; lembah adalah titik terendah sebelum pemulihan. Fase ini ditentukan dari beberapa indikator dan konteks, bukan dari satu angka kuartal secara terpisah. Pemulihan dapat berlanjut menjadi ekspansi berikutnya.

Resesi teknis sering disebut ketika PDB riil turun selama dua kuartal berturut-turut. Itu kaidah praktis yang mudah dihitung, tetapi bukan definisi resmi universal. Penetapan resesi oleh lembaga analisis biasanya menimbang kedalaman, durasi, dan keluasan pelemahan di berbagai ukuran seperti pekerjaan, produksi, dan pendapatan. Karena rilis awal data dapat direvisi, kesimpulan berdasarkan satu rangkaian kuartal perlu hati-hati.

PDB potensial (potential GDP) adalah tingkat produksi berkelanjutan ketika sumber daya digunakan pada tingkat normal tanpa tekanan inflasi yang terus meningkat. Nilainya tidak diamati langsung; analis memperkirakannya dari tenaga kerja, modal, produktivitas, dan kondisi kapasitas. Kesenjangan output (output gap) menyatakan jarak produksi aktual dari potensial relatif terhadap potensial: **kesenjangan output = (Y − Y*)/Y* × 100%**, dengan Y sebagai PDB riil aktual dan Y* sebagai PDB potensial. Hasil negatif menunjukkan produksi di bawah potensi menurut estimasi; hasil positif menunjukkan produksi di atas potensi.

Indikator utama secara kualitatif mencakup pesanan baru, izin pembangunan, klaim pengangguran, ekspektasi usaha, kondisi kredit, jam kerja, serta pasar keuangan. Masing-masing bergerak dengan cakupan dan jeda berbeda. Gabungan beberapa sinyal membantu membentuk gambaran, namun tak satu pun indikator menjanjikan bahwa resesi pasti datang atau bahwa titik balik sudah terjadi.

## Contoh hitungan lengkap

| Kuartal | Indeks PDB riil | Perubahan dari kuartal sebelumnya |
|---|---:|---:|
| K1 | 100 | — |
| K2 | 102 | +2,00% |
| K3 | 103 | +0,98% |
| K4 | 101 | −1,94% |
| K5 | 99 | −1,98% |
| K6 | 98 | −1,01% |
| K7 | 100 | +2,04% |
| K8 | 103 | +3,00% |

Rumus perubahan kuartalan adalah **(PDB riil kuartal baru ÷ PDB riil kuartal sebelumnya − 1) × 100%**. Contoh K3: (103/102−1)×100%=+0,98%. K4: (101/103−1)×100%=−1,94%. Penurunan terjadi berturut-turut pada K4, K5, dan K6, sehingga rangkaian tersebut memenuhi kaidah praktis dua kuartal turun. Puncak dalam data ada di K3, lembah di K6; sesudahnya indeks naik. Kesimpulan ini hanya tentang seri ilustratif, bukan penetapan resmi keadaan ekonomi nyata.

Jika PDB aktual Y=950 dan potensial Y*=1.000, kesenjangan output = (950−1.000)/1.000×100%=−5%. Artinya output berada 5% di bawah estimasi potensi. Nilai potensial yang berbeda akan mengubah kesenjangan, jadi angka itu bukan jumlah kapasitas menganggur yang diamati langsung.

Contoh Indonesia: penurunan pesanan pabrik, jam kerja, dan belanja rumah tangga bersama-sama dapat menjadi petunjuk pelemahan; kesimpulan perlu mencakup periode dan indikator luas. Contoh global: penurunan produksi industri di beberapa kawasan dapat bertepatan dengan pelemahan perdagangan, tetapi perbedaan waktu rilis dan revisi mengharuskan verifikasi sebelum menyebutnya resesi.

[[visual:eko-business-cycle]]

## Kesalahpahaman umum

1. Dua kuartal turun berturut-turut adalah aturan praktis, bukan syarat resmi universal untuk menyatakan resesi.
2. PDB potensial adalah estimasi, bukan kapasitas maksimum fisik yang diketahui tepat.
3. Satu indikator utama tidak memprediksi dengan pasti waktu atau kedalaman siklus berikutnya.

## Kaitan ke investasi dan psikologi

Investor menghadapi siklus pasar aset yang dapat bergerak sebelum atau sesudah siklus produksi. Bias pengikut tren mendorong pembelian setelah harga naik dan penjualan setelah harga jatuh, seolah gerak terakhir menjamin gerak berikutnya. Memantau indikator makro membantu menguji narasi portofolio, tetapi tidak memberi sinyal pasti untuk mengatur waktu pasar. Dalam Web3, aktivitas transaksi dan biaya jaringan dapat menguat saat ekspansi perhatian lalu melemah ketika risiko meningkat; pola itu tidak cukup untuk memprediksi harga token.

## Batas model

Siklus mengabstraksikan variasi sektor dan rumah tangga, sementara kontraksi dapat berdampak tidak merata. Estimasi PDB potensial dan tanggal titik balik direvisi seiring data baru. Perubahan musiman, kejutan pasokan, bencana, kebijakan, dan perubahan struktural dapat menyerupai pola siklus; kaidah kuartalan dan indikator harus ditafsirkan bersama bukti lain.
`,
    },
  ],
  chapterResources: {
    summary: [
      "PDB mengukur nilai pasar produksi akhir domestik selama periode tertentu.",
      "Menjumlahkan nilai tambah atau barang akhir mencegah hitung ganda di rantai produksi.",
      "PDB = C + I + G + (X − M); pendekatan pendapatan mencatat sisi penerimaan produksi.",
      "PDB nominal memakai harga periode berjalan; PDB riil memakai harga tahun dasar.",
      "Deflator PDB membandingkan nominal dengan riil untuk merangkum perubahan harga keluaran domestik.",
      "GNI menyesuaikan PDB dengan pendapatan faktor neto dari luar negeri; PDB per kapita tetap menyembunyikan distribusi.",
      "Siklus bisnis memiliki ekspansi, puncak, kontraksi, dan lembah; resesi teknis dua kuartal turun adalah kaidah praktis.",
      "Kesenjangan output membandingkan PDB aktual dengan potensi yang diestimasi, bukan diamati langsung.",
    ],
    glossary: [
      { term: "Produk domestik bruto", english: "Gross domestic product (GDP)", definition: "Nilai pasar barang dan jasa akhir yang diproduksi di dalam negeri selama periode tertentu." },
      { term: "Barang akhir", english: "Final good", definition: "Barang untuk penggunaan akhir, bukan input produksi lanjutan pada periode yang sama." },
      { term: "Barang antara", english: "Intermediate good", definition: "Barang yang digunakan sebagai input dalam produksi barang atau jasa lain." },
      { term: "Nilai tambah", english: "Value added", definition: "Nilai keluaran suatu tahap dikurangi nilai barang antara yang dipakai." },
      { term: "Hitung ganda", english: "Double counting", definition: "Menghitung nilai input dan nilai barang akhir yang sama lebih dari sekali." },
      { term: "Konsumsi", english: "Consumption (C)", definition: "Pengeluaran rumah tangga atas barang dan jasa akhir." },
      { term: "Investasi", english: "Investment (I)", definition: "Pengeluaran untuk modal produktif dan perubahan persediaan, bukan pembelian aset lama." },
      { term: "Pengeluaran pemerintah", english: "Government purchases (G)", definition: "Pembelian barang dan jasa pemerintah, tidak termasuk pembayaran transfer." },
      { term: "Ekspor neto", english: "Net exports (X−M)", definition: "Nilai ekspor dikurangi nilai impor." },
      { term: "PDB nominal", english: "Nominal GDP", definition: "Nilai produksi yang dihitung memakai harga pada periode yang sama." },
      { term: "PDB riil", english: "Real GDP", definition: "Nilai produksi yang dihitung memakai harga tetap tahun dasar." },
      { term: "Tahun dasar", english: "Base year", definition: "Periode acuan harga untuk menghitung ukuran riil." },
      { term: "Deflator PDB", english: "GDP deflator", definition: "PDB nominal dibagi PDB riil dikalikan 100." },
      { term: "Pertumbuhan ekonomi", english: "Economic growth", definition: "Perubahan keluaran riil agregat dalam suatu periode." },
      { term: "Pendapatan nasional bruto", english: "Gross national income (GNI)", definition: "PDB ditambah pendapatan faktor neto yang diterima dari luar negeri." },
      { term: "PDB per kapita", english: "GDP per capita", definition: "PDB dibagi jumlah penduduk." },
      { term: "Siklus bisnis", english: "Business cycle", definition: "Fluktuasi kegiatan ekonomi agregat di sekitar kecenderungan jangka panjang." },
      { term: "Resesi", english: "Recession", definition: "Pelemahan kegiatan ekonomi yang luas dan signifikan; penetapan mempertimbangkan beberapa indikator." },
      { term: "Ekspansi", english: "Expansion", definition: "Fase ketika kegiatan ekonomi agregat meningkat." },
      { term: "Puncak", english: "Peak", definition: "Titik tertinggi kegiatan sebelum fase kontraksi." },
      { term: "Lembah", english: "Trough", definition: "Titik terendah kegiatan sebelum pemulihan." },
      { term: "PDB potensial", english: "Potential GDP", definition: "Estimasi tingkat produksi berkelanjutan dengan pemanfaatan sumber daya normal." },
      { term: "Kesenjangan output", english: "Output gap", definition: "Selisih PDB aktual dan potensial sebagai proporsi PDB potensial." },
      { term: "Ekonomi informal", english: "Informal economy", definition: "Kegiatan ekonomi yang tidak tercatat atau tidak teratur sepenuhnya dalam sistem formal." },
      { term: "Pembayaran transfer", english: "Transfer payment", definition: "Pembayaran tanpa pertukaran langsung atas produksi barang atau jasa baru." },
      { term: "Paritas daya beli", english: "Purchasing power parity (PPP)", definition: "Cara perbandingan yang mempertimbangkan perbedaan tingkat harga antarwilayah." },
    ],
    exercises: [
      {
        prompt: "Petani menjual gandum 30 ke penggiling, penggiling menjual tepung 50 ke tukang roti, dan tukang roti menjual roti 100 ke konsumen. Hitung nilai tambah dan jelaskan mengapa jumlah penjualan bukan PDB barang akhir.",
        solution: "1. Nilai tambah petani=30−0=30. 2. Nilai tambah penggiling=50−30=20. 3. Nilai tambah tukang roti=100−50=50. 4. Jumlah nilai tambah=30+20+50=100, sama dengan roti akhir. 5. Jumlah penjualan bruto 30+50+100=180 menghitung gandum dan tepung lagi sebagai input, sehingga terjadi hitung ganda.",
      },
      {
        prompt: "Hitung PDB dengan C=600, I=150, G=200, X=100, M=120. Jelaskan perlakuan impor.",
        solution: "1. Ekspor neto=X−M=100−120=−20. 2. PDB=C+I+G+(X−M)=600+150+200−20=930. 3. Impor dikurangkan agar produksi luar negeri yang terkandung dalam C, I, atau G tidak dihitung sebagai produksi domestik.",
      },
      {
        prompt: "Dari tabel dua barang Bab 5, hitung PDB riil 2025, deflator, dan pertumbuhan riil.",
        solution: "1. Tahun dasar 2024: PDB riil 2024=10×50+20×25=1.000. 2. PDB nominal 2025=11×52+21×26=572+546=1.118. 3. PDB riil 2025 memakai harga 2024: 10×52+20×26=520+520=1.040. 4. Deflator=1.118/1.040×100=107,5. 5. Pertumbuhan riil=1.040/1.000−1=4%.",
      },
      {
        prompt: "Jika PDB riil tumbuh 4% dan penduduk tumbuh 1%, hitung pertumbuhan per kapita. Lalu hitung kesenjangan output saat Y=950 dan Y*=1.000.",
        solution: "1. Gunakan pertumbuhan per kapita=(1+g)/(1+n)−1. 2. (1,04/1,01)−1=0,0297 atau 2,97%. 3. Kesenjangan output=(Y−Y*)/Y*×100%. 4. (950−1.000)/1.000×100%=−5%, sehingga output aktual berada di bawah estimasi potensial.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
