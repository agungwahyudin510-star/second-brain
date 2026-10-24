import type { CurriculumModule } from "@/lib/types";

// For later chapters: map every quiz distractor to its wrong option letter, keep price curves at P >= 0 and derive labeled points from data, and give every lesson key points, tabulated calculations, and one model-boundary block.

export const BAB_01: CurriculumModule = {
  id: "eko2-b01",
  title: "Bab 1 — Fondasi Berpikir Ekonomi",
  summary: "Kelangkaan, biaya peluang, pilihan marginal, insentif, PPF, spesialisasi, dan keunggulan komparatif.",
  lessons: [
    {
      id: "eko2-b01-s1",
      title: "Kelangkaan, trade-off, dan batas produksi",
      minutes: 35,
      content: `## Tujuan belajar dan peta konsep

Setelah bagian ini, kamu dapat (1) menjelaskan kelangkaan tanpa menyamakannya dengan kemiskinan, (2) mengidentifikasi sumber daya dan alternatif penggunaannya, (3) membaca batas kemungkinan produksi (production possibilities frontier/PPF), (4) membedakan titik efisien, tidak efisien, dan belum dapat dicapai, serta (5) menghitung trade-off ketika kapasitas dialihkan. Peta bab ini berawal dari kelangkaan; kelangkaan membuat pilihan perlu dibuat, pilihan menimbulkan trade-off dan biaya peluang, lalu pemikiran marginal, insentif, serta spesialisasi membantu memilih penggunaan sumber daya. Bab ini menjadi fondasi untuk Bab 2: di sana keputusan pembeli dan penjual yang terpisah berinteraksi melalui pasar.

> **Poin kunci**
> - Kelangkaan membuat individu dan masyarakat memilih di antara penggunaan sumber daya.
> - Setiap pilihan punya trade-off dan biaya peluang.
> - PPF membedakan kapasitas efisien, kapasitas menganggur, dan produksi yang belum terjangkau.

## Definisi, intuisi, dan batas model

Kelangkaan adalah keadaan ketika sumber daya yang tersedia tidak cukup untuk memenuhi semua penggunaan yang diinginkan pada saat bersamaan. Definisi ini berlaku pada waktu, kemampuan, lahan, bahan baku, mesin, perhatian, dan uang. Orang dengan pendapatan tinggi pun menghadapi kelangkaan waktu; organisasi yang memiliki anggaran besar tetap harus memilih proyek, tenaga ahli, dan jadwal. Kelangkaan bukan berarti suatu benda langka secara geologis, juga bukan sinonim kemiskinan. Maknanya bergantung pada perbandingan antara kapasitas dan penggunaan yang mungkin.

Karena tidak semua tujuan bisa dipenuhi, pengambil keputusan memilih satu kombinasi dan melepas sebagian kemungkinan lain. Hubungan antara pilihan dan hal yang dilepas disebut trade-off. Dalam perekonomian, pertanyaan dasarnya ialah apa yang diproduksi, bagaimana cara memproduksinya, dan siapa yang menerima hasilnya. Rumah tangga menjawab lewat belanja dan waktu kerja; perusahaan lewat investasi dan proses produksi; pemerintah lewat pajak, layanan, serta peraturan. Setiap keputusan memakai sumber daya yang dapat digunakan untuk tujuan lain.

PPF merangkum kombinasi maksimum dua keluaran yang dapat dihasilkan dengan sumber daya dan teknologi tertentu, dalam periode yang ditetapkan. PPF bukan ramalan, target produksi, atau batas moral. Ia adalah model untuk menalar kapasitas. Titik pada kurva menggunakan kapasitas secara produktif menurut model; titik di dalam kurva menunjukkan kapasitas yang menganggur atau salah alokasi; titik di luar kurva belum dapat dicapai dengan kapasitas saat ini. Efisiensi produksi tidak otomatis berarti hasilnya adil atau paling diinginkan. PPF juga menyederhanakan banyak barang menjadi dua kategori.

Kemiringan PPF menyatakan biaya peluang: berapa banyak keluaran vertikal yang dilepas untuk menambah keluaran horizontal. Jika sumber daya tidak sama cocok untuk setiap kegiatan, PPF biasanya melengkung keluar. Memindahkan pekerja yang paling cocok membuat barang A terlebih dahulu mungkin hanya mengurangi sedikit barang B; pemindahan berikutnya dapat mengorbankan semakin banyak B. Karena itu biaya peluang marginal dapat meningkat, bukan selalu konstan.

## Mekanisme dan hitungan lengkap

Misalkan koperasi memakai 10 jam mesin untuk dua produk ilustratif: beras siap kirim (R) dan keranjang sayur (S). Tabel berikut menelusuri biaya peluang tiap perpindahan kombinasi.

| Kombinasi | Beras R | Sayur S | Perubahan dari kombinasi sebelumnya | Biaya peluang per R tambahan |
|---|---:|---:|---|---:|
| A | 0 | 100 | — | — |
| B | 10 | 90 | +10 R, −10 S | 10/10 = 1 S |
| C | 20 | 70 | +10 R, −20 S | 20/10 = 2 S |
| D | 30 | 40 | +10 R, −30 S | 30/10 = 3 S |

Langkah B→C: tambahan R = 20−10 = 10; S yang dikorbankan = 90−70 = 20; biaya peluang per R = 20÷10 = 2 keranjang S. Langkah C→D: tambahan R = 30−20 = 10; S yang dikorbankan = 70−40 = 30; biaya peluang per R = 30÷10 = 3 keranjang S. Biaya peluang meningkat karena sumber daya yang makin cocok untuk sayur dialihkan ke beras. Semua angka adalah ilustrasi.

Proses perubahan kapasitas dapat dibaca bertahap. Pertama, tetapkan sumber daya, teknologi, dan periode. Kedua, catat beberapa kombinasi yang mungkin. Ketiga, bandingkan dua titik untuk menghitung tambahan output dan output yang dikorbankan. Keempat, periksa apakah titik tersebut dapat dicapai dan apakah kapasitas dipakai penuh. Kelima, tanyakan apakah ada perubahan teknologi, jumlah tenaga kerja, keterampilan, atau modal yang mengubah batas itu. Perbaikan irigasi atau logistik dapat memperluas kapasitas produksi pertanian; pengangguran alat dan tenaga kerja dapat menempatkan output di bawah kapasitas yang tersedia. Perluasan kapasitas tidak menjamin semua orang menerima manfaat yang sama.

Dalam konteks Web3, ruang blok per transaksi terbatas; validator atau penambang memilih transaksi mana yang masuk ketika permintaan melebihi kapasitas. Ini kelangkaan ruang komputasi dan trade-off antara transaksi yang diproses. Dalam investasi, modal dan waktu yang dialokasikan ke satu proyek tidak tersedia serentak untuk proyek lain. Psikologi perencanaan sering meremehkan keterbatasan waktu dan perhatian.

[[visual:eko-ppf]]

## Kesalahpahaman umum

1. Titik di PPF efisien dalam penggunaan kapasitas, tetapi label itu sendiri tidak menilai keadilan, dampak lingkungan, atau prioritas masyarakat.
2. Titik di dalam kurva tidak selalu berarti pekerja malas; resesi, gangguan bahan baku, atau ketidakcocokan keterampilan dapat membuat kapasitas menganggur.
3. Pertumbuhan memperluas kapasitas; teknologi dan sumber daya baru memerlukan waktu serta biaya.

## Batas model

PPF menyederhanakan banyak keluaran menjadi dua, dan menganggap teknologi serta sumber daya tetap saat membandingkan titik. Efisiensi produksi tidak menyatakan hasil itu adil atau berkelanjutan.
`,
    },
    {
      id: "eko2-b01-s2",
      title: "Biaya peluang: nilai alternatif terbaik yang dilepas",
      minutes: 35,
      content: `## Tujuan belajar

Gunakan biaya peluang untuk mengenali alternatif terbaik yang dilepas, membedakan biaya eksplisit dari implisit, dan menilai keputusan dengan membandingkan manfaat bersih secara konsisten.

> **Poin kunci**
> - Biaya peluang adalah nilai alternatif terbaik yang dikorbankan.
> - Biaya eksplisit dibayar langsung; biaya implisit memakai sumber daya sendiri.
> - Biaya masa lalu yang tidak dapat dipulihkan tidak menentukan keputusan ke depan.

## Definisi dan intuisi

Biaya peluang (opportunity cost) adalah nilai dari alternatif terbaik yang dikorbankan ketika sumber daya digunakan untuk suatu pilihan. Definisi ini selalu bersifat perbandingan: kita menilai keputusan yang diambil terhadap opsi layak yang paling bernilai di antara opsi yang tidak dipilih. Biaya peluang berbeda dari harga akuntansi. Harga Rp100.000 dapat menjadi biaya kas, sementara biaya peluangnya mungkin berupa waktu kerja, istirahat, atau manfaat kegiatan lain yang tidak jadi dilakukan. Keduanya dapat relevan, tetapi jangan menjumlahkan hal yang sama dua kali.

Bayangkan satu sore hanya memiliki tiga jam. Kamu bisa mengikuti kelas, bekerja lepas, beristirahat, atau membantu keluarga. Jika memilih kelas, pilihan terbaik berikutnya mungkin pekerjaan lepas yang benar-benar tersedia. Namun jika pekerjaan itu tidak tersedia pada jam tersebut, pendapatan yang dibayangkan bukan alternatif realistis. Biaya peluang harus menggunakan opsi yang feasible, bukan seluruh kemungkinan khayalan. Nilai juga tidak selalu harus dikonversi ke rupiah: kesehatan, pembelajaran, keamanan, dan kepuasan bisa penting meski sulit diberi angka.

Biaya eksplisit adalah pengeluaran langsung, misalnya biaya transportasi ke kelas. Biaya implisit adalah nilai sumber daya milik sendiri yang dipakai, misalnya waktu pemilik usaha tanpa gaji formal. Untuk analisis ekonomi, keduanya perlu dipertimbangkan. Laba akuntansi biasanya mengurangkan biaya eksplisit; laba ekonomi mengurangkan biaya eksplisit dan implisit. Perbedaan ini membantu menjelaskan mengapa usaha yang tampak menghasilkan kas belum tentu pilihan terbaik bagi pemilik jika waktu dan modalnya memiliki alternatif bernilai tinggi.

## Mekanisme sebab-akibat dan rumus

Urutannya: identifikasi sumber daya terbatas; tulis pilihan yang benar-benar dapat diambil; tentukan opsi yang dipilih; cari satu alternatif terbaik yang dilepas; ukur nilai manfaat alternatif itu dengan satuan yang konsisten; lalu bandingkan dengan manfaat pilihan yang diambil. Secara ringkas, biaya peluang suatu pilihan = nilai manfaat alternatif terbaik yang tidak dipilih. Dalam model laba ekonomi: laba ekonomi = pendapatan total − biaya eksplisit − biaya implisit. Pendapatan total adalah nilai penjualan selama periode yang sama; biaya eksplisit adalah pembayaran kas; biaya implisit adalah nilai penggunaan sumber daya sendiri. Rumus ini alat berpikir, bukan bukti bahwa semua nilai dapat diukur tepat.

## Contoh hitungan lengkap

Nadia memiliki satu sore empat jam dan memilih menyiapkan katalog toko daringnya. Alternatif yang tersedia: pekerjaan lepas dengan upah ilustratif Rp80.000 per jam, kursus gratis yang hanya tersedia sore itu, atau istirahat. Nadia menilai manfaat katalog Rp420.000, kursus Rp250.000, dan istirahat Rp180.000.

| Langkah | Perhitungan | Hasil |
|---|---|---:|
| Pendapatan kerja empat jam | 4 × Rp80.000 | Rp320.000 |
| Alternatif terbaik yang dilepas | Maks(Rp320.000, Rp250.000, Rp180.000) | Rp320.000 |
| Manfaat bersih katalog sebelum biaya kas | Rp420.000 − Rp320.000 | Rp100.000 |
| Manfaat bersih setelah biaya iklan | Rp100.000 − Rp50.000 | Rp50.000 |
| Jika kursus kemudian dinilai Rp450.000 | Rp420.000 − Rp450.000 − Rp50.000 | −Rp80.000 |

Perhitungan berubah karena nilai alternatif terbaik berubah, bukan karena biaya katalog berubah. Angka manfaat katalog, kursus, dan istirahat adalah penilaian hipotetis, bukan harga pasar.

Angka manfaat katalog dan kursus adalah penilaian hipotetis, bukan nilai pasar yang terverifikasi. Ketidakpastian hasil harus dicatat: katalog mungkin meningkatkan penjualan atau tidak. Analisis sensitivitas dapat menghitung hasil pada skenario rendah, dasar, dan tinggi tanpa menyebut satu proyeksi sebagai kepastian.

Di Indonesia, seorang mahasiswa yang memilih mengambil shift berbayar saat jadwal kelas daring berlangsung menghadapi biaya peluang berupa materi yang mungkin terlewat; sebaliknya, menghadiri kelas mengorbankan penghasilan yang tersedia. Dalam perusahaan global, jam teknisi yang memperbaiki satu lini mesin tidak dapat sekaligus dipakai untuk merawat lini lain.

[[visual:eko-opportunity-cost]]

## Kesalahpahaman umum

1. Biaya peluang bukan jumlah semua alternatif yang tidak dipilih; orang tidak dapat memakai satu jam yang sama untuk semua alternatif sekaligus.
2. Biaya masa lalu yang tidak dapat dikembalikan (sunk cost) bukan biaya peluang keputusan sekarang. Pengalaman masa lalu boleh mengubah informasi, tetapi uang yang tak dapat dipulihkan tidak menjadi alasan tunggal untuk lanjut.
3. Harga bukan selalu seluruh biaya ekonomi; waktu, risiko, dan sumber daya milik sendiri juga dapat memiliki nilai.

Dalam investasi Web3, mengunci aset melalui staking atau lock-up berarti melepas likuiditas dan imbal hasil alternatif selama periode penguncian; risiko kontrak menambah pertimbangan, bukan mengubah definisi opportunity cost. Secara psikologis, menuliskan alternatif terbaik mencegah pilihan yang dilepas tampak “gratis”.

## Batas model

Nilai nonmoneter dan probabilitas hasil masa depan tidak selalu terukur dalam rupiah. Hitungan membandingkan opsi yang tersedia dan tidak menghitung manfaat yang sama dua kali.
`,
    },
    {
      id: "eko2-b01-s3",
      title: "Berpikir marginal dan insentif",
      minutes: 35,
      content: `## Tujuan belajar

Hitung MB, MC, manfaat bersih per unit, dan manfaat bersih kumulatif; jelaskan bagaimana insentif mengubah perilaku serta mengapa respons dapat memiliki konsekuensi sampingan.

> **Poin kunci**
> - Keputusan marginal membandingkan manfaat dan biaya dari unit berikutnya.
> - Tambahkan unit selama MB ≥ MC; berhenti ketika unit berikutnya mengurangi manfaat bersih.
> - Insentif mengubah konsekuensi pilihan dan dapat mengubah perilaku.

## Definisi formal dan intuisi

Analisis marginal membandingkan manfaat tambahan dengan biaya tambahan dari satu perubahan kecil pada keputusan. “Marginal” berarti tambahan atau perubahan pada unit berikutnya, bukan sekadar sesuatu yang kecil atau tidak penting. Seseorang sebaiknya menambah aktivitas selama manfaat marginal (marginal benefit/MB) sekurang-kurangnya sebesar biaya marginal (marginal cost/MC), dengan tujuan dan kendala yang jelas. Aturan ini tidak menyatakan bahwa semua manfaat harus berupa uang; tambahan waktu bersama keluarga, kualitas, atau risiko dapat ikut dipertimbangkan.

Perbedaan antara total dan marginal penting. Total manfaat menjawab berapa banyak manfaat keseluruhan; manfaat marginal menjawab apa yang diperoleh jika satu unit lagi ditambahkan. Jika lima jam belajar sudah memberi banyak nilai, itu tidak otomatis berarti jam keenam bernilai lebih besar daripada istirahat. Manfaat tambahan dapat menurun karena kebutuhan yang paling penting sudah terpenuhi. Sebaliknya, biaya tambahan bisa naik karena lembur, kelelahan, atau bahan produksi yang semakin sulit didapat.

Insentif adalah perubahan manfaat atau biaya yang memengaruhi pilihan. Upah, harga, pajak, diskon, aturan, reputasi, dan pengakuan sosial dapat menjadi insentif. Rantai sebab-akibatnya: aturan atau imbalan mengubah konsekuensi pilihan; orang menyesuaikan perilaku berdasarkan kendala dan preferensinya; perilaku agregat dapat menghasilkan hasil yang tidak diniatkan. Respons tidak seragam karena informasi, sumber daya, dan tujuan berbeda. Insentif bukan jaminan bahwa setiap orang bereaksi sama.

## Rumus dan hitungan langkah demi langkah

Manfaat marginal unit ke-n = total manfaat setelah unit n − total manfaat setelah unit n−1. Biaya marginal unit ke-n dihitung dengan cara yang sama untuk total biaya. Manfaat bersih marginal = MB − MC. Dalam model diskret, tambahkan unit selama manfaat bersih marginal tidak negatif, kemudian berhenti ketika unit berikutnya memberi MB < MC.

Sebuah kedai mempertimbangkan unit layanan tambahan. Hitung selisih MB−MC dan jumlah manfaat bersih setelah setiap unit.

| Unit | MB | MC | MB−MC | Manfaat bersih kumulatif |
|---:|---:|---:|---:|---:|
| 1 | 100 | 20 | 100−20 = 80 | 80 |
| 2 | 85 | 30 | 85−30 = 55 | 80+55 = 135 |
| 3 | 70 | 40 | 70−40 = 30 | 135+30 = 165 |
| 4 | 55 | 55 | 55−55 = 0 | 165+0 = 165 |
| 5 | 40 | 75 | 40−75 = −35 | 165−35 = 130 |

Empat unit pertama menghasilkan manfaat bersih total 165 unit nilai. Unit kelima mengurangi total menjadi 130, jadi pilihan optimum dalam contoh adalah empat unit.

### Mengapa kurva marginal berubah

Jika tambahan jam belajar memberi peningkatan pemahaman yang semakin kecil, MB menurun. Jika jam lembur memerlukan ongkos transportasi tambahan atau mengurangi produktivitas karena lelah, MC dapat meningkat. Perpotongan MB dan MC menandai titik optimum interior dalam model tertentu. Jika ada batas anggaran, kewajiban minimum, dampak pihak ketiga, atau pilihan diskret yang tidak dapat dibagi, solusi dapat berada pada batas, bukan tepat di perpotongan.

Di Indonesia, promo tarif pengantaran yang berlaku hanya di jam sepi dapat mengubah waktu konsumen memesan dan waktu pengemudi bekerja; hasil akhirnya bergantung kapasitas, aturan, dan biaya yang ditanggung berbagai pihak. Dalam bisnis global, bonus berdasarkan jumlah unit bisa menaikkan output, tetapi jika kualitas tidak dihitung, cacat produk mungkin meningkat.

[[visual:eko-marginal]]

## Kesalahpahaman umum

1. MB = MC bukan aturan bahwa harga harus selalu sama dengan biaya; itu kondisi keputusan marginal dalam model dengan asumsi tertentu.
2. Menilai margin bukan berarti mengabaikan biaya total yang sudah relevan, kendala, atau konsekuensi distribusi.
3. Insentif yang dimaksudkan baik tidak selalu menghasilkan perilaku yang dikehendaki; ukuran kinerja dapat dimanipulasi atau membuat kualitas diabaikan.

Untuk investor, keputusan menambah posisi membandingkan return dan risiko marginal ke depan, bukan harga beli masa lalu. Dalam Web3, reward tambahan pada kontrak dapat mendorong penggunaan lebih banyak dan menaikkan paparan risiko kontrak. Euforia dapat membesarkan estimasi MB, sedangkan loss aversion dapat membesarkan persepsi MC.

## Batas model

MB dan MC merangkum nilai serta biaya tambahan yang dibandingkan; dampak pihak ketiga dan kendala kapasitas memerlukan analisis tersendiri. Titik MB=MC berlaku untuk solusi interior, bukan semua pilihan.
`,
    },
    {
      id: "eko2-b01-s4",
      title: "Spesialisasi dan keunggulan komparatif",
      minutes: 40,
      content: `## Tujuan belajar

Hitung biaya peluang dua produsen, tentukan keunggulan komparatif, dan bandingkan output sebelum serta sesudah spesialisasi.

> **Poin kunci**
> - Keunggulan absolut membandingkan produktivitas; keunggulan komparatif membandingkan biaya peluang.
> - Pihak dengan keunggulan absolut pada semua barang tetap punya biaya peluang relatif berbeda.
> - Spesialisasi dapat menambah output total, tetapi tidak menentukan distribusi hasil.

## Definisi, intuisi, dan mekanisme

Keunggulan absolut (absolute advantage) berarti suatu pihak dapat menghasilkan lebih banyak output dengan sumber daya yang sama, atau output yang sama dengan lebih sedikit sumber daya. Keunggulan komparatif (comparative advantage) berarti pihak tersebut memiliki biaya peluang lebih rendah untuk menghasilkan suatu barang. Perdagangan sukarela dapat memberi ruang bagi spesialisasi menurut keunggulan komparatif, sekalipun satu pihak memiliki keunggulan absolut di semua barang. Kunci manfaat pertukaran bukan “siapa paling produktif dalam semua hal”, melainkan apa yang harus dikorbankan untuk menambah satu output.

Mekanismenya: hitung berapa unit barang B yang dilepas untuk menghasilkan lebih banyak barang A; bandingkan biaya peluang antar pihak; spesialisasikan sebagian sumber daya pada barang yang biaya peluang relatifnya lebih rendah; lalu tukarkan hasil pada rasio yang berada di antara biaya peluang kedua pihak. Rasio pertukaran di luar rentang itu umumnya tidak menguntungkan salah satu pihak dibanding memproduksi sendiri, dengan asumsi kualitas, biaya transaksi, dan preferensi dapat diabaikan.

### Rumus dan hitungan lengkap

Biaya peluang 1 unit A = unit B yang dikorbankan ÷ unit A tambahan. Ari menghasilkan 12 beras atau 6 kopi per jam; Bima menghasilkan 8 beras atau 8 kopi per jam.

| Produsen | 1 beras mengorbankan | 1 kopi mengorbankan | Keunggulan komparatif |
|---|---:|---:|---|
| Ari | 6/12 = 0,5 kopi | 12/6 = 2 beras | Beras |
| Bima | 8/8 = 1 kopi | 8/8 = 1 beras | Kopi |

Untuk output sebelum spesialisasi, tiap pihak membagi satu jam menjadi dua setengah jam.

| Produsen / total | Beras sebelum | Kopi sebelum | Beras sesudah | Kopi sesudah |
|---|---:|---:|---:|---:|
| Ari | 12×0,5 = 6 | 6×0,5 = 3 | 12 | 0 |
| Bima | 8×0,5 = 4 | 8×0,5 = 4 | 0 | 8 |
| **Total** | **6+4 = 10** | **3+4 = 7** | **12** | **8** |

Perdagangan 1 beras dengan 0,75 kopi berada di antara biaya peluang Ari (0,5) dan Bima (1). Ari menerima lebih dari 0,5 kopi yang dikorbankan untuk membuat beras; Bima membayar kurang dari 1 kopi yang harus dikorbankan jika membuat beras sendiri.

## Ketika satu pihak unggul di semua barang

Citra menghasilkan 20 beras atau 10 kopi per jam; Dedi menghasilkan 6 beras atau 6 kopi. Citra memiliki keunggulan absolut pada keduanya. Biaya peluang menunjukkan pola relatif yang berbeda.

| Produsen | 1 beras mengorbankan | 1 kopi mengorbankan | Keunggulan komparatif |
|---|---:|---:|---|
| Citra | 10/20 = 0,5 kopi | 20/10 = 2 beras | Beras |
| Dedi | 6/6 = 1 kopi | 6/6 = 1 beras | Kopi |

| Produsen / total | Beras sebelum | Kopi sebelum | Beras sesudah | Kopi sesudah |
|---|---:|---:|---:|---:|
| Citra | 20×0,5 = 10 | 10×0,5 = 5 | 20×0,8 = 16 | 10×0,2 = 2 |
| Dedi | 6×0,5 = 3 | 6×0,5 = 3 | 0 | 6 |
| **Total** | **10+3 = 13** | **5+3 = 8** | **16** | **2+6 = 8** |

Sesudah perubahan alokasi, beras bertambah 16−13=3 unit dan kopi tetap 8 unit, tanpa menambah satu jam kerja masing-masing. Citra tidak berspesialisasi penuh: ia paling efisien membuat kopi secara absolut, tetapi biaya peluangnya untuk kopi (2 beras) lebih tinggi daripada Dedi (1 beras). Citra memakai 0,2 jam untuk kopi; Dedi memakai satu jam penuh untuk kopi.

Keuntungan total potensial tidak berarti distribusi otomatis adil. Perbedaan daya tawar, biaya pengiriman, standar mutu, akses pasar, dan dampak pada pekerjaan dapat menentukan siapa menikmati manfaat. Spesialisasi berlebihan juga menciptakan ketergantungan pada mitra dan gangguan pasokan.

Contoh mekanisme di Indonesia: petani, pengolah, dan pedagang mengkhususkan diri pada tahapan sesuai keterampilan dan alat, lalu bertukar hasil. Di perdagangan internasional, biaya peluang relatif membantu menjelaskan spesialisasi, sementara rantai pasok dan kebijakan memengaruhi manfaat aktual.

[[visual:eko-comparative]]

## Kesalahpahaman umum

1. Produsen tercepat belum tentu memiliki keunggulan komparatif; bandingkan biaya peluang.
2. Keunggulan absolut di semua barang tidak menghapus keuntungan dari spesialisasi relatif.
3. Tambahan output total tidak menjamin setiap pekerja atau daerah memperoleh manfaat yang sama.

Rantai pasok investasi yang terkonsentrasi pada satu pemasok memberi produktivitas sekaligus risiko gangguan. Proyek Web3 yang memakai validator atau penyedia infrastruktur khusus memperoleh spesialisasi tetapi juga ketergantungan operasional. Menghitung biaya peluang mencegah bias psikologis “yang paling cepat harus mengerjakan semuanya”.

## Batas model

Perhitungan menganggap kapasitas dan mutu tetap serta pertukaran tanpa biaya. Biaya logistik, daya tawar, dampak pekerjaan, risiko pasokan, dan distribusi surplus perlu dinilai terpisah.
`,
    },
    {
      id: "eko2-b01-s5",
      title: "Menyusun keputusan ekonomi yang dapat diuji",
      minutes: 35,
      content: `## Tujuan belajar

Evaluasi insentif diskon dengan menghitung total sebelum diskon, pembayaran setelah diskon, perubahan pembayaran, serta manfaat bersih barang tambahan.

> **Poin kunci**
> - Ambang diskon dinilai dari total sebelum potongan.
> - Bandingkan perubahan pembayaran dengan nilai barang tambahan bagi pembeli.
> - Diskon tidak menghapus biaya peluang atau menjamin penghematan.

## Kerangka keputusan dan insentif

Model ekonomi berguna ketika pertanyaan dan asumsi dibuat jelas. Untuk keputusan pribadi maupun organisasi, tulis tujuan, kendala sumber daya, pilihan yang layak, konsekuensi marginal, biaya peluang, serta siapa yang menerima manfaat atau menanggung biaya. Bedakan fakta dari perkiraan dan preferensi. Kerangka sederhana tidak menghapus ketidakpastian, tetapi membuat alasan keputusan dapat diperiksa dan diperbarui.

Insentif bekerja melalui perubahan payoff atau kendala. Misalnya, toko memberi potongan Rp20.000 bagi pembelian di atas Rp200.000. Jika keranjang awal Rp190.000 dan pelanggan membeli barang tambahan Rp25.000 hanya untuk mendapatkan potongan, total pengeluaran menjadi Rp215.000 − Rp20.000 = Rp195.000. Secara kas, pembeli membayar Rp5.000 lebih banyak daripada keranjang awal dan memperoleh barang tambahan. Apakah itu bermanfaat tergantung nilai barang tambahan bagi pembeli; diskon bukan penghematan jika produk tambahan tidak bernilai setidaknya biaya tambahannya.

Contoh hitungan keputusan: pembeli mempertimbangkan barang tambahan Rp25.000 untuk memperoleh diskon Rp20.000. Nilai manfaat barang tambahan diuji pada dua penilaian hipotetis.

| Langkah | Perhitungan | Hasil |
|---|---|---:|
| Total sebelum diskon | Rp190.000 + Rp25.000 | Rp215.000 |
| Cek syarat diskon | Rp215.000 > Rp200.000 | Berlaku |
| Total bayar | Rp215.000 − Rp20.000 | Rp195.000 |
| Perubahan pembayaran | Rp195.000 − Rp190.000 | +Rp5.000 |
| Manfaat bersih jika nilai barang Rp8.000 | Rp8.000 − Rp5.000 | +Rp3.000 |
| Manfaat bersih jika nilai barang Rp2.000 | Rp2.000 − Rp5.000 | −Rp3.000 |

Diskon mengurangi total bayar dibanding total sebelum potongan, tetapi pembeli membayar Rp5.000 lebih banyak daripada keranjang awal. Nilai barang adalah penilaian ilustratif.

Insentif dapat mendorong akibat tak terduga. Target “jumlah layanan per jam” bisa membuat kualitas diabaikan; target “hemat biaya” bisa menunda perawatan yang penting; hadiah untuk pendaftaran dapat menarik pengguna yang tidak cocok. Karena itu periksa siapa yang merancang insentif, siapa yang merespons, informasi apa yang mereka miliki, serta perilaku apa yang mudah diukur tetapi bukan tujuan sebenarnya. Kebijakan juga bisa memindahkan biaya ke pihak yang tidak ikut membuat keputusan.

Langkah praktis:
1. Nyatakan keputusan dan satuan waktunya.
2. Catat sumber daya terbatas serta tujuan yang tidak boleh dikorbankan.
3. Bandingkan alternatif yang benar-benar tersedia.
4. Hitung manfaat dan biaya marginal untuk perubahan kecil.
5. Tulis asumsi, risiko, dan dampak pada pihak lain.
6. Tentukan bukti apa yang akan membuatmu meninjau ulang keputusan.

Untuk contoh Indonesia, penerima promo belanja dapat membandingkan harga setelah diskon, biaya kirim, serta apakah tambahan barang memang dibutuhkan; klaim “hemat” tidak otomatis sama dengan belanja lebih baik. Contoh global serupa terlihat pada program loyalitas yang mengubah waktu pembelian, namun efeknya berbeda menurut akses konsumen dan syarat program.

[[visual:eko-incentive-discount]]

## Kesalahpahaman umum

1. Model adalah peta, bukan seluruh wilayah. Asumsi ceteris paribus (faktor lain tetap) membantu mengisolasi sebab, tetapi dunia nyata dapat mengubah banyak faktor serentak.
2. “Rasional” tidak berarti egois atau selalu memilih uang terbesar; tujuan, norma, kepedulian, dan informasi juga membentuk pilihan.
3. Biaya yang sulit diukur bukan biaya nol; catat secara kualitatif.

Pembeli menghadapi insentif promo: bandingkan harga setelah potongan dengan keranjang yang memang direncanakan, bukan hanya besarnya diskon yang diiklankan. Dalam investasi, promosi return harus dibandingkan dengan biaya, risiko, dan kebutuhan likuiditas. Jeda membantu mengurangi keputusan impulsif akibat framing diskon.

## Batas model

Hitungan menganggap keranjang awal tetap dibeli, diskon berlaku pada keseluruhan transaksi, dan pembeli dapat menilai manfaat barang tambahan. Syarat promo, biaya lain, serta manfaat nonmoneter dapat mengubah keputusan.

`,
    },
  ],
  chapterResources: {
    summary: [
      "Kelangkaan membandingkan sumber daya terbatas dengan berbagai penggunaan yang mungkin.",
      "Memilih satu opsi berarti menerima trade-off; biaya peluang adalah alternatif terbaik yang dilepas.",
      "PPF menunjukkan kapasitas produksi dengan teknologi dan sumber daya yang ditetapkan.",
      "Titik efisien, titik di dalam kurva, dan titik di luar kurva mempunyai makna berbeda.",
      "Keputusan marginal membandingkan manfaat dan biaya tambahan untuk unit berikutnya.",
      "Insentif memengaruhi perilaku dan dapat menimbulkan akibat sampingan yang tidak diniatkan.",
      "Keunggulan komparatif ditentukan biaya peluang relatif, bukan hanya produktivitas absolut.",
      "Spesialisasi dapat memperbesar output total; biaya transaksi dan distribusi manfaat tetap perlu dinilai.",
    ],
    glossary: [
      { term: "Kelangkaan", english: "Scarcity", definition: "Sumber daya terbatas relatif terhadap seluruh penggunaan yang diinginkan." },
      { term: "Trade-off", english: "Trade-off", definition: "Pengorbanan satu penggunaan untuk memperoleh lebih banyak dari penggunaan lain." },
      { term: "Biaya peluang", english: "Opportunity cost", definition: "Nilai alternatif terbaik yang dilepas saat membuat pilihan." },
      { term: "Batas kemungkinan produksi", english: "Production possibilities frontier (PPF)", definition: "Kombinasi output maksimum yang mungkin dengan sumber daya dan teknologi tertentu." },
      { term: "Manfaat marginal", english: "Marginal benefit (MB)", definition: "Manfaat tambahan dari satu unit atau tindakan berikutnya." },
      { term: "Biaya marginal", english: "Marginal cost (MC)", definition: "Biaya tambahan dari satu unit atau tindakan berikutnya." },
      { term: "Insentif", english: "Incentive", definition: "Manfaat atau biaya yang memengaruhi pilihan." },
      { term: "Keunggulan absolut", english: "Absolute advantage", definition: "Kemampuan menghasilkan lebih banyak dengan sumber daya sama." },
      { term: "Keunggulan komparatif", english: "Comparative advantage", definition: "Kemampuan menghasilkan barang dengan biaya peluang relatif lebih rendah." },
      { term: "Spesialisasi", english: "Specialization", definition: "Pemusatan sumber daya atau kegiatan pada tugas tertentu." },
      { term: "Biaya tenggelam", english: "Sunk cost", definition: "Biaya masa lalu yang tidak dapat dipulihkan oleh keputusan sekarang." },
    ],
    exercises: [
      {
        prompt: "Sebuah komunitas dapat membuat 40 meja atau 80 kursi. Jika kapasitasnya linear dan menghasilkan 20 meja, berapa kursi yang dibuat dan berapa biaya peluang satu meja?",
        solution: "1. Garis menghubungkan (0 meja, 80 kursi) dan (40 meja, 0 kursi). 2. Biaya peluang satu meja = 80 ÷ 40 = 2 kursi. 3. Pada 20 meja, kursi yang tersisa = 80 − (20 × 2) = 40 kursi. Asumsi linear perlu dinyatakan; teknologi dapat membuat opportunity cost berubah.",
      },
      {
        prompt: "Kamu belajar tiga jam alih-alih mengambil pekerjaan yang tersedia dengan upah bersih Rp60.000 per jam. Hitung biaya peluang pendapatan dan sebutkan asumsi pentingnya.",
        solution: "1. Alternatif kerja berlangsung 3 jam. 2. Pendapatan yang dilepas = 3 × Rp60.000 = Rp180.000. 3. Nilai ini biaya peluang yang relevan jika shift benar-benar tersedia dan merupakan alternatif terbaik; jadwal yang tak tersedia atau opsi lebih bernilai dapat mengubahnya.",
      },
      {
        prompt: "MB lima unit berturut-turut adalah 30, 25, 20, 15, 10; MC-nya 8, 12, 18, 20, 24. Tentukan jumlah pilihan menurut MB ≥ MC.",
        solution: "1. Unit 1: 30−8=22. 2. Unit 2: 25−12=13. 3. Unit 3: 20−18=2. 4. Unit 4: 15−20=−5, sehingga berhenti. Pilih tiga unit; unit kelima juga tidak menambah surplus.",
      },
      {
        prompt: "X dapat membuat 10 roti atau 5 jus per jam; Y dapat membuat 6 roti atau 6 jus. Siapa memiliki comparative advantage pada roti?",
        solution: "1. Opportunity cost 1 roti bagi X = 5/10 = 0,5 jus. 2. Bagi Y = 6/6 = 1 jus. 3. X memiliki biaya peluang roti lebih rendah. Y memiliki keunggulan komparatif jus karena biaya peluangnya 1 roti dibanding 2 roti bagi X. Pertukaran menguntungkan jika rasio di antara biaya peluang dan biaya transaksi tidak menghapus surplus.",
      },
      {
        prompt: "Mira dapat membuat 18 roti atau 12 jus per jam; Niko dapat membuat 9 roti atau 9 jus. Mereka semula membagi satu jam sama rata untuk dua barang. Bandingkan output total sebelum spesialisasi dengan alokasi ketika Mira memakai 0,75 jam untuk roti dan 0,25 jam untuk jus, sementara Niko memakai satu jam penuh untuk jus.",
        solution: "1. Biaya peluang satu roti: Mira 12/18=2/3 jus; Niko 9/9=1 jus. Jadi Mira memiliki comparative advantage roti. 2. Biaya peluang satu jus: Mira 18/12=1,5 roti; Niko 9/9=1 roti. Jadi Niko memiliki comparative advantage jus. 3. Sebelum: Mira 9 roti + 6 jus; Niko 4,5 roti + 4,5 jus; total 13,5 roti + 10,5 jus. 4. Sesudah alokasi: Mira membuat 18×0,75=13,5 roti dan 12×0,25=3 jus; Niko membuat 9 jus. Total 13,5 roti + 12 jus. Roti tetap, jus bertambah 1,5 unit tanpa tambahan waktu. Mira unggul absolut di kedua barang, tetapi membagi waktunya karena Niko memiliki biaya peluang lebih rendah untuk jus.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
