import type { CurriculumModule } from "@/lib/types";

export const BAB_06: CurriculumModule = {
  id: "eko2-b06",
  title: "Bab 6 — Inflasi, IHK, dan Pengangguran",
  summary: "Indeks harga konsumen mengukur perubahan biaya keranjang, suku bunga riil menunjukkan perubahan daya beli, dan statistik tenaga kerja serta model siklus membantu membaca kondisi ekonomi.",
  lessons: [
    {
      id: "eko2-b06-s1",
      title: "Mengukur inflasi dengan IHK",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan inflasi dan indeks harga konsumen (IHK), hitung perubahan biaya keranjang tetap dari tahun dasar, bedakan IHK dari deflator PDB, dan kenali bias yang muncul saat keranjang tidak cepat menyesuaikan perubahan pilihan dan mutu.

> **Poin kunci**
> - Inflasi adalah kenaikan tingkat harga umum secara berkelanjutan; harga satu barang yang naik bukan seluruh inflasi.
> - IHK membandingkan biaya keranjang konsumsi tetap pada harga periode berjalan dengan biaya keranjang yang sama pada tahun dasar.
> - Tingkat inflasi dihitung dari perubahan persentase IHK antarperiode.
> - IHK dan deflator PDB memakai cakupan berbeda: keranjang konsumen berbanding seluruh produksi domestik.

## Definisi dan intuisi

Tingkat harga adalah ukuran rata-rata harga sekumpulan barang dan jasa. Inflasi (inflation) merupakan kenaikan tingkat harga secara berkelanjutan; deflasi adalah penurunan tingkat harga. Perubahan harga satu komoditas belum cukup untuk menyebut ekonomi mengalami inflasi, sebab harga relatif berubah karena kelangkaan, musim, atau perubahan biaya. Indeks harga meringkas perubahan harga beberapa barang yang diberi bobot sesuai keranjang pengeluaran.

Indeks harga konsumen (IHK; consumer price index/CPI) menaksir biaya keranjang barang dan jasa yang dibeli rumah tangga. Untuk mengisolasi perubahan harga, jumlah barang pada keranjang tahun dasar dipertahankan: **IHK_t = (biaya keranjang pada harga periode t ÷ biaya keranjang pada harga tahun dasar) × 100**. IHK tahun dasar bernilai 100. Tingkat inflasi adalah **(IHK_t ÷ IHK_(t−1) − 1) × 100%**. IHK adalah indeks, bukan harga rupiah; persentase perubahan indeks adalah laju inflasi.

Keranjang tetap memudahkan perbandingan, tetapi konsumsi dapat berubah saat harga relatif dan preferensi berubah. Bias substitusi terjadi ketika konsumen beralih ke barang relatif murah, sementara keranjang resmi belum segera mencerminkan peralihan itu. Perubahan mutu juga sulit dipisahkan dari harga: perangkat baru mungkin lebih mahal karena fiturnya meningkat. Barang baru yang belum ada di keranjang lama serta perbedaan keranjang rumah tangga menjadi sumber bias tambahan. Karena itu IHK adalah taksiran biaya hidup berdasarkan metodologi tertentu, bukan tagihan yang sama bagi setiap keluarga.

## Rumus dan contoh hitungan

| Barang | Jumlah tetap | Harga 2024 | Harga 2025 | Biaya 2024 | Biaya 2025 |
|---|---:|---:|---:|---:|---:|
| Beras | 40 | 10 | 10,5 | 400 | 420 |
| Telur | 20 | 15 | 16 | 300 | 320 |
| Transportasi | 10 | 20 | 21 | 200 | 210 |
| **Jumlah** |  |  |  | **900** | **950** |

Biaya keranjang adalah jumlah harga tiap barang dikalikan jumlah tetapnya. Jadi IHK 2025 = 950/900×100 = **105,56**. Inflasi 2025 = 105,56/100−1 = **5,56%**. Bila IHK 2026 = 108,5, inflasi 2026 = 108,5/105,56−1 = **2,79%**. Tingkat harga masih lebih tinggi dari tahun dasar, tetapi kenaikannya selama 2026 lebih lambat.

Untuk melihat bias substitusi, keranjang yang berubah menjadi 45 beras, 15 telur, dan 10 transportasi menghabiskan 450+225+200 = 875 pada harga 2024 dan 472,5+240+210 = 922,5 pada harga 2025. Rasio 922,5/875×100 = **105,43**; IHK keranjang tetap 105,56 lebih tinggi 0,13 poin. Dalam ilustrasi ini, keranjang tetap sedikit melebihkan kenaikan biaya ketika konsumen beralih dari telur menuju beras. Kesimpulan umum berlaku sebagai kecenderungan saat substitusi memungkinkan, bukan besaran universal.

Deflator PDB adalah PDB nominal dibagi PDB riil dikali 100 dan mencakup harga keluaran domestik akhir. IHK fokus pada keranjang konsumen dan dapat memuat barang impor; deflator mencakup komposisi produksi domestik yang berubah. Kedua indeks menjawab pertanyaan berbeda sehingga nilainya tidak harus sama.

Contoh Indonesia: rumah tangga yang lebih banyak mengeluarkan uang untuk transportasi memiliki inflasi pribadi berbeda dari rumah tangga yang belanja pangannya dominan; bobot pengeluaran menentukan pengalaman masing-masing. Contoh global: perubahan harga sewa dan energi memengaruhi negara secara berbeda menurut komposisi konsumsi. Angka aktual tertentu memerlukan verifikasi.

[[visual:eko-cpi-basket]]

## Kesalahpahaman umum

1. IHK 105,56 berarti indeks 5,56% di atas tahun dasar, bukan harga satu barang meningkat 105,56%.
2. Inflasi 2,79% setelah indeks naik lagi berarti tingkat harga meningkat lebih lambat, bukan harga kembali turun.
3. IHK tidak mengukur setiap rumah tangga dengan tepat karena pola belanja dan mutu barang berbeda.

## Kaitan ke investasi dan psikologi

Inflasi pribadi investor dipengaruhi keranjang belanja: biaya sewa, perjalanan, pangan, atau layanan keuangan dapat memiliki bobot berbeda dari keranjang rata-rata. Investor sebaiknya membandingkan kenaikan pendapatan dan hasil portofolio dengan biaya yang benar-benar dihadapi, sambil tetap memakai IHK resmi untuk ukuran umum yang konsisten.

## Batas model

Contoh menganggap jumlah dan mutu keranjang tetap serta harga terukur tanpa kesalahan. Statistik resmi menggunakan sampel, bobot, dan penyesuaian mutu yang lebih rumit. IHK tidak mencakup semua aset, biaya hidup, atau perubahan kesejahteraan; perbandingan antarperiode harus memperhatikan revisi metodologi.
`,
    },
    {
      id: "eko2-b06-s2",
      title: "Dampak inflasi, bunga riil, dan daya beli",
      minutes: 40,
      content: `## Tujuan belajar

Bedakan suku bunga nominal dan riil, hitung daya beli dari tingkat inflasi, jelaskan biaya inflasi dan redistribusi antara kreditur dan debitur, serta gunakan aturan 70 sebagai pendekatan waktu pelipatan harga.

> **Poin kunci**
> - Bunga riil mengukur perubahan daya beli setelah inflasi, bukan sekadar rupiah yang diterima.
> - Pendekatan Fisher adalah r≈i−π; rumus eksak adalah (1+i)/(1+π)−1.
> - Inflasi yang tak terduga menguntungkan debitur tetap dan merugikan kreditur tetap secara riil.
> - Aturan 70 memperkirakan waktu harga berlipat dua, bukan ramalan presisi.

## Definisi dan intuisi

Suku bunga nominal (nominal interest rate/i) menyatakan pertambahan uang dalam persentase. Suku bunga riil (real interest rate/r) mengukur perubahan kemampuan membeli barang setelah perubahan tingkat harga. Jika saldo bertambah 8% sementara harga naik 5%, daya beli meningkat sekitar 3%, bukan 8%. Persamaan Fisher eksak memberi **r=(1+i)/(1+π)−1**, dengan i dan π ditulis sebagai desimal. Untuk laju kecil, pendekatannya **r≈i−π**. Inflasi aktual dibandingkan dengan tingkat yang relevan untuk periode investasi; ekspektasi inflasi berguna sebelum hasil diketahui.

Inflasi mengurangi daya beli uang tunai yang tidak memberi bunga. Biaya sepatu (shoe-leather cost) menggambarkan waktu dan upaya mengurangi saldo tunai ketika inflasi tinggi, sedangkan biaya menu (menu cost) adalah biaya mengganti daftar harga, sistem, dan label. Inflasi juga dapat mendistorsi pajak karena aturan nominal tidak selalu disesuaikan dengan kenaikan harga. Kontrak yang ditetapkan dalam nominal membagi ulang kekayaan: inflasi tak terduga menurunkan nilai riil pembayaran tetap kepada kreditur dan mengurangi beban riil debitur. Jika inflasi telah diperkirakan, suku bunga dan kontrak dapat menyesuaikan sebagian.

Inflasi tinggi yang berlangsung cepat mengganggu penyusunan kontrak, perencanaan, dan fungsi uang sebagai penyimpan nilai. Hiperinflasi adalah keadaan inflasi luar biasa tinggi dan terus meningkat, bukan sekadar satu bulan harga melonjak. Pengendalian memerlukan kredibilitas kebijakan serta pemulihan fungsi mata uang. Ilustrasi kualitatif ini tidak menyatakan kondisi negara tertentu.

Aturan 70 memperkirakan waktu pelipatan dua dengan **70 ÷ laju inflasi tahunan dalam persen**. Pada inflasi 5%, perkiraannya 70/5=14 tahun. Rumus eksak menyelesaikan (1+π)^t=2 dan memberi sekitar 14,21 tahun untuk 5%; perkiraan 14 tahun mudah digunakan, tetapi mengasumsikan laju tetap.

## Contoh hitungan lengkap

| Skenario | Rumus dan langkah | Hasil |
|---|---|---:|
| Bunga i=8%, inflasi π=5% | Pendekatan: 8%−5% | r≈3% |
| Bunga i=8%, inflasi π=5% | Eksak: 1,08/1,05−1 | r=2,86% |
| Bunga i=4%, inflasi π=5% | Pendekatan: 4%−5% | r≈−1% |
| Bunga i=4%, inflasi π=5% | Eksak: 1,04/1,05−1 | r=−0,95% |
| Daya beli 100 setelah 10 tahun | 100/1,05^10; 1,05^10=1,6289 | 61,39 |
| Pelipatan harga pada 5% | Aturan 70: 70/5 | 14 tahun |
| Pelipatan eksak pada 5% | ln(2)/ln(1,05) | 14,21 tahun |

Hasil riil negatif berarti saldo nominal tumbuh lebih lambat daripada harga, sehingga simpanan membeli lebih sedikit. Daya beli 100 setelah sepuluh tahun pada inflasi tetap 5% setara 61,39 dalam satuan daya beli awal. Nilai ini bukan perubahan saldo nominal, melainkan nilai barang yang dapat dibeli dengan uang nominal tersebut.

Contoh Indonesia: deposan membandingkan bunga tabungan dengan kenaikan biaya kebutuhan yang dihadapi sebelum menyimpulkan tabungan bertambah secara riil. Contoh global: pemegang obligasi berbunga tetap dan debitur rumah tangga merasakan perubahan inflasi tak terduga secara berlawanan. Besaran aktual tergantung kontrak dan inflasi yang terealisasi.

[[visual:eko-real-interest]]

## Kesalahpahaman umum

1. Bunga nominal positif tidak menjamin daya beli bertambah; inflasi dapat lebih tinggi.
2. Selisih bunga dan inflasi adalah pendekatan; rumus eksak menghasilkan 2,86%, bukan tepat 3%.
3. Inflasi suplai token berarti jumlah unit token berubah; itu bukan inflasi harga barang dan jasa.

## Kaitan ke investasi, Web3, dan psikologi

Imbal hasil staking atau bunga nominal perlu dibandingkan dengan kenaikan harga keranjang konsumsi untuk menilai hasil riil. Dilusi suplai token menambah jumlah unit token dan dapat mengurangi bagian kepemilikan jika permintaan serta distribusi tetap; inflasi suplai token bukan ukuran inflasi harga konsumen. Ilusi uang membuat kenaikan angka saldo tampak sebagai keuntungan walau daya beli turun, sehingga investor sebaiknya menilai hasil setelah inflasi, biaya, dan risiko.

## Batas model

Perhitungan menganggap laju inflasi konstan dan keranjang relevan bagi pemegang uang. Rumus Fisher eksak memakai inflasi periode yang sama dengan bunga. Kontrak variabel, pajak, risiko gagal bayar, dan perubahan konsumsi membuat hasil riil aktual berbeda dari contoh.
`,
    },
    {
      id: "eko2-b06-s3",
      title: "Mengukur pengangguran dan partisipasi kerja",
      minutes: 40,
      content: `## Tujuan belajar

Klasifikasikan penduduk usia kerja sebagai bekerja, menganggur, atau bukan angkatan kerja; hitung tingkat pengangguran terbuka, partisipasi angkatan kerja, dan rasio kerja-penduduk; serta jelaskan mengapa pekerja putus asa mengubah tingkat pengangguran tanpa menambah pekerjaan.

> **Poin kunci**
> - Angkatan kerja terdiri atas orang bekerja dan orang menganggur yang tersedia serta aktif mencari kerja menurut definisi statistik.
> - Tingkat pengangguran terbuka membagi penganggur dengan angkatan kerja, bukan seluruh penduduk.
> - Tingkat partisipasi membagi angkatan kerja dengan penduduk usia kerja.
> - Pekerja putus asa yang berhenti mencari dapat keluar dari angkatan kerja sehingga TPT turun walau jumlah bekerja tetap.

## Definisi dan intuisi

Statistik ketenagakerjaan mengelompokkan penduduk menurut usia kerja, kegiatan ekonomi selama periode rujukan, ketersediaan bekerja, dan pencarian kerja. Penduduk usia kerja adalah kelompok yang memenuhi ambang usia statistik suatu negara. Bekerja berarti melakukan pekerjaan berbayar atau kegiatan produksi tertentu dalam definisi survei; orang yang sementara tidak hadir karena cuti dapat tetap dikategorikan bekerja. Menganggur adalah orang tanpa pekerjaan yang memenuhi kriteria tersedia dan aktif mencari pekerjaan. Orang di luar dua kategori itu menjadi bukan angkatan kerja, misalnya pelajar penuh waktu atau pengurus rumah tangga yang tidak sedang mencari kerja.

Angkatan kerja (labor force) adalah **bekerja + menganggur**. Tingkat pengangguran terbuka (TPT; unemployment rate/u) adalah **jumlah penganggur ÷ angkatan kerja × 100%**. Tingkat partisipasi angkatan kerja (TPAK; labor force participation rate) adalah **angkatan kerja ÷ penduduk usia kerja × 100%**. Rasio kerja-penduduk (employment-population ratio) adalah **jumlah bekerja ÷ penduduk usia kerja × 100%**. Penyebut berbeda membuat indikator menjawab pertanyaan berbeda: TPT mengukur bagian pencari kerja yang belum memperoleh pekerjaan, TPAK mengukur keterlibatan dalam angkatan kerja, dan rasio kerja-penduduk menunjukkan proporsi penduduk yang bekerja.

Pekerja putus asa (discouraged workers) ingin bekerja tetapi berhenti mencari karena merasa kesempatan terbatas; menurut aturan survei, mereka dapat diklasifikasikan di luar angkatan kerja. Ketika pencari kerja putus asa keluar, TPT bisa turun tanpa satu pun pekerjaan baru. Setengah menganggur mencakup orang yang bekerja lebih sedikit jam dari yang diinginkan atau dalam pekerjaan yang kurang memanfaatkan keterampilan, bergantung definisi pengukuran. Sektor informal menyediakan pekerjaan dan pendapatan, tetapi jam kerja, perlindungan, atau penghasilan mungkin tidak tertangkap lengkap dalam ukuran formal.

## Contoh hitungan lengkap

| Kategori awal | Jumlah orang |
|---|---:|
| Penduduk usia kerja | 200 |
| Bekerja | 120 |
| Menganggur dan mencari kerja | 10 |
| Bukan angkatan kerja | 70 |
| Angkatan kerja = bekerja + menganggur | 120+10 = 130 |
| TPT | 10/130×100% = **7,69%** |
| TPAK | 130/200×100% = **65%** |
| Rasio kerja-penduduk | 120/200×100% = **60%** |

Bila lima dari sepuluh penganggur berhenti mencari, jumlah bekerja tetap 120, penganggur yang masih mencari menjadi 5, dan angkatan kerja menjadi 125. TPT baru = 5/125×100% = **4,00%**; TPAK = 125/200×100% = **62,5%**; rasio kerja-penduduk tetap 120/200×100% = **60%**. Tingkat pengangguran yang turun sendiri bukan bukti lapangan kerja bertambah.

Contoh Indonesia: pekerja lepas yang sedang mencari kontrak dapat dikategorikan berdasarkan kegiatan, ketersediaan, dan pencarian menurut survei; pekerja informal tetap dapat dihitung bekerja. Contoh global: pekerja gig atau anggota organisasi otonom terdesentralisasi yang mengerjakan proyek lepas menunjukkan bentuk kerja yang sulit dirangkum satu jabatan dan jam kerja tetap. Tidak diasumsikan data angka negara tertentu.

[[visual:eko-unemployment]]

## Kesalahpahaman umum

1. Tidak semua orang tanpa pekerjaan dihitung menganggur; syarat pencarian dan ketersediaan kerja penting.
2. TPT yang turun dapat terjadi karena angkatan kerja menyusut, bukan karena jumlah bekerja naik.
3. Pekerja informal atau paruh waktu tetap bisa bekerja, meskipun kualitas dan kecukupan jam kerja perlu ukuran tambahan.

## Kaitan ke investasi, Web3, dan psikologi

Investor dan pembuat kebijakan perlu membaca TPT bersama TPAK serta rasio kerja-penduduk. Pekerja lepas, gig, dan kontributor kerja DAO dapat memiliki pendapatan, jam, serta status pencarian yang berubah; satu indikator standar mungkin tidak menceritakan seluruh pengalaman mereka. Psikologi putus asa juga membuat orang berhenti mencari setelah penolakan berulang, sehingga angka pengangguran resmi bisa tampak membaik saat prospek kerja justru belum membaik.

## Batas model

Definisi usia kerja, pencarian aktif, pekerjaan singkat, dan masa rujukan berbeda antar survei. Angka agregat tidak menggambarkan upah, keamanan kerja, jam kerja yang diinginkan, atau mutu pekerjaan. Perbandingan antarwilayah memerlukan definisi konsisten dan memperhitungkan kerja informal serta partisipasi yang berubah.
`,
    },
    {
      id: "eko2-b06-s4",
      title: "Jenis pengangguran dan hukum Okun",
      minutes: 40,
      content: `## Tujuan belajar

Bedakan pengangguran friksional, struktural, dan siklis; hitung pengangguran siklis relatif terhadap tingkat alamiah; lalu gunakan hubungan Okun sederhana untuk memperkirakan kesenjangan output dan PDB aktual.

> **Poin kunci**
> - Pengangguran friksional muncul selama pencarian atau perpindahan pekerjaan; struktural berasal dari ketidakcocokan atau kekakuan pasar.
> - Pengangguran siklis berkaitan dengan pelemahan permintaan dan kegiatan ekonomi.
> - Tingkat pengangguran alamiah u* adalah tolok ukur pengangguran friksional dan struktural, bukan nol pengangguran.
> - Hukum Okun menghubungkan kenaikan pengangguran siklis dengan kesenjangan output negatif; koefisiennya bervariasi.

## Definisi dan intuisi

Pengangguran friksional terjadi ketika pekerja berpindah pekerjaan, memasuki angkatan kerja, atau mencari kecocokan yang lebih baik. Pencarian memerlukan waktu meski tersedia lowongan. Pengangguran struktural terjadi ketika keterampilan, lokasi, atau upah yang ditawarkan tidak cocok dengan kebutuhan dan kondisi pasar kerja. Perubahan teknologi dapat mengurangi permintaan beberapa tugas sambil menaikkan kebutuhan keterampilan lain; pelatihan, mobilitas, dan waktu penyesuaian menentukan dampak. Upah kaku di atas tingkat yang menyeimbangkan permintaan dan penawaran kerja juga dapat membuat jumlah pencari kerja melebihi lowongan. Upah minimum dapat berpengaruh pada kelompok dan pasar tertentu, tetapi dampak aktualnya memerlukan analisis bukti serta struktur pasar.

Pengangguran siklis berubah bersama siklus bisnis: ketika permintaan barang turun, perusahaan mengurangi produksi dan perekrutan; ketika kegiatan pulih, kebutuhan tenaga kerja dapat meningkat. Tingkat pengangguran alamiah (natural rate of unemployment/u*) adalah tingkat pengangguran yang konsisten dengan pencarian dan kecocokan normal, mencakup komponen friksional dan struktural dalam kerangka sederhana. Tingkat alamiah bukan angka tetap yang bebas kebijakan, dan bukan klaim bahwa pengangguran tidak menimbulkan biaya.

Pengangguran siklis dihitung **u−u***, dengan u tingkat pengangguran aktual. Versi sederhana hukum Okun (Okun's law) pada materi ini adalah **kesenjangan output (%) ≈ −2×(u−u*)**, ketika laju pengangguran ditulis dalam poin persentase. Koefisien −2 bersifat ilustratif: kenaikan pengangguran siklis satu poin berkaitan dengan output aktual kira-kira dua persen di bawah potensial dalam model ini. Hubungan empiris bervariasi antarnegara, waktu, kebijakan, dan cara mengukur potensi.

Kesenjangan output adalah (Y−Y*)/Y*×100%, dengan Y PDB aktual dan Y* PDB potensial. Jika kesenjangan negatif, PDB aktual di bawah estimasi potensi. Jika positif, kegiatan berada di atas estimasi potensi. Hubungan Okun mengaitkan dua ukuran agregat, bukan rumus sebab-akibat yang tepat untuk setiap pekerja atau industri.

## Contoh hitungan lengkap

| Tahap | Perhitungan | Hasil |
|---|---|---:|
| Pengangguran aktual dan alamiah | u=7%; u*=5% | — |
| Pengangguran siklis | u−u*=7−5 | 2 poin persentase |
| Kesenjangan output menurut Okun | −2×(7−5) | −4% |
| PDB potensial | Y*=1.000 | — |
| PDB aktual | 1.000×(1−0,04) | **960** |
| Output di bawah potensi | 1.000−960 | **40** |

Bila u=4% dan u*=5%, kesenjangan output = −2×(4−5) = **+2%** dalam rumus ilustratif. Hasil positif tidak berarti kapasitas dapat tumbuh tanpa batas; model mengasumsikan koefisien yang sama dan ukuran potensi tertentu.

Mekanismenya: permintaan melemah, produksi dan jam kerja turun, lowongan berkurang; lebih banyak orang menganggur siklis dan output menjauh dari potensi. Saat permintaan pulih, perusahaan meningkatkan produksi dan perekrutan. Namun ketidakcocokan keterampilan dapat menetap walau permintaan agregat kembali kuat, sehingga pelatihan atau relokasi tetap relevan.

Contoh Indonesia: perubahan permintaan atas keterampilan digital dapat menggeser peluang kerja antarindustri; pekerja membutuhkan waktu belajar dan berpindah, tetapi tidak ada klaim tentang jumlah pekerjaan tertentu. Contoh global: otomatisasi dapat mengubah tugas di manufaktur dan jasa, menciptakan penyesuaian struktural yang berbeda menurut pendidikan dan lokasi. Hasil masa depan tidak diprediksi oleh contoh ini.

[[visual:eko-okun]]

## Kesalahpahaman umum

1. Tingkat pengangguran alamiah bukan berarti tingkat pengangguran nol atau kondisi tanpa biaya sosial.
2. Hukum Okun adalah hubungan perkiraan dengan koefisien bervariasi, bukan identitas akuntansi.
3. Tidak semua pengangguran akibat teknologi bersifat siklis; ketidakcocokan keterampilan dapat menjadi struktural.

## Kaitan ke investasi, Web3, dan psikologi

Perubahan teknologi menggeser permintaan keterampilan, sehingga investor perlu membedakan pelemahan siklis sementara dari kebutuhan adaptasi tenaga kerja yang lebih panjang. Perusahaan protokol atau layanan digital juga membutuhkan keterampilan baru, tetapi perubahan tersebut tidak membuat satu hasil pekerjaan pasti. Bias narasi teknologi sering menyederhanakan proses menjadi “pekerjaan hilang” atau “pekerjaan baru”; analisis struktural memeriksa tugas, lokasi, upah, dan masa transisi.

## Batas model

Tingkat alamiah dan PDB potensial tidak diamati langsung dan dapat direvisi. Koefisien Okun −2 hanya ilustrasi, tidak boleh dipakai sebagai prediksi pasti. Data pengangguran dan output dapat bergerak dengan jeda, partisipasi tenaga kerja berubah, dan produktivitas maupun kebijakan mengubah hubungan.
`,
    },
    {
      id: "eko2-b06-s5",
      title: "Kurva Phillips dan ekspektasi inflasi",
      minutes: 40,
      content: `## Tujuan belajar

Gunakan kurva Phillips jangka pendek untuk menghitung hubungan inflasi dan pengangguran, jelaskan peran ekspektasi serta pergeseran kurva, dan terangkan mengapa menjaga pengangguran di bawah tingkat alamiah secara terus-menerus meningkatkan inflasi dalam model.

> **Poin kunci**
> - Kurva Phillips jangka pendek merangkum pertukaran antara inflasi dan pengangguran ketika ekspektasi inflasi tertentu.
> - Ekspektasi inflasi menggeser kurva: pada pengangguran sama, ekspektasi lebih tinggi menghasilkan inflasi yang lebih tinggi.
> - Dalam jangka panjang kurva vertikal pada u*, sehingga tidak ada pertukaran permanen yang dapat menahan pengangguran di bawah alamiah.
> - Kredibilitas kebijakan memengaruhi cara rumah tangga dan perusahaan membentuk ekspektasi, tetapi tidak menghapus biaya penyesuaian.

## Definisi dan intuisi

Kurva Phillips jangka pendek menggambarkan hubungan negatif antara inflasi dan pengangguran siklis pada ekspektasi inflasi tertentu. Bentuk sederhana yang digunakan ialah **π = πe − 0,5×(u−u*)**, dengan π inflasi aktual, πe ekspektasi inflasi, u tingkat pengangguran aktual, dan u* tingkat pengangguran alamiah. Selisih u−u* diukur dalam poin persentase; koefisien 0,5 adalah ilustrasi, bukan angka universal.

Jika u berada di bawah u*, suku (u−u*) negatif, sehingga pengurang negatif menaikkan inflasi di atas ekspektasi. Jika u di atas u*, inflasi lebih rendah daripada ekspektasi dalam model. Ketika ekspektasi naik, seluruh kurva jangka pendek bergeser ke atas. Perubahan biaya energi atau gangguan pasokan dapat menggeser hubungan yang diamati, sehingga titik data tidak selalu bergerak sepanjang kurva yang sama.

Pada jangka panjang, ekspektasi menyesuaikan dengan inflasi yang berlangsung. Kurva Phillips jangka panjang vertikal pada u*: pengangguran kembali ke tingkat alamiah setelah penyesuaian, sementara inflasi bisa berada pada tingkat yang lebih tinggi. Mendorong pengangguran di bawah u* secara terus-menerus tidak mempertahankan keuntungan riil; perusahaan dan pekerja menaikkan harga dan tuntutan nominal ketika memperkirakan inflasi berlanjut. Hasilnya adalah inflasi yang makin tinggi, bukan pengangguran yang terus-menerus rendah.

Ekspektasi dapat bersifat adaptif, mengacu pada pengalaman inflasi sebelumnya, atau dibentuk dari informasi kebijakan dan keadaan ekonomi. Jangkar ekspektasi berarti publik percaya inflasi jangka menengah akan kembali ke sasaran atau rentang yang diyakini. Kredibilitas bank sentral dan konsistensi komunikasi dapat membantu menjaga jangkar itu. Jika publik meragukan komitmen kebijakan, ekspektasi dapat menyesuaikan lebih cepat dan pengendalian inflasi menjadi lebih mahal dalam output dan pekerjaan. Ini bukan jaminan bahwa komunikasi saja cukup.

## Contoh hitungan lengkap

Dengan u*=5%, hubungan menjadi **π=πe−0,5×(u−5)**.

| u | Inflasi jika πe=3 | Inflasi jika πe=5 |
|---:|---:|---:|
| 3 | 3−0,5×(3−5)=**4,0** | 5−0,5×(3−5)=**6,0** |
| 4 | 3−0,5×(4−5)=**3,5** | 5−0,5×(4−5)=**5,5** |
| 5 | 3−0,5×(5−5)=**3,0** | 5−0,5×(5−5)=**5,0** |
| 6 | 3−0,5×(6−5)=**2,5** | 5−0,5×(6−5)=**4,5** |
| 7 | 3−0,5×(7−5)=**2,0** | 5−0,5×(7−5)=**4,0** |

Pada u=5, inflasi sama dengan ekspektasi karena pengangguran sama dengan tingkat alamiah. Jika pemerintah menahan u=3, putaran pertama dengan πe=3 memberi π=3−0,5×(−2)=**4**. Ketika ekspektasi menyesuaikan ke 4, inflasi menjadi **5**. Saat πe menjadi 5, inflasi menjadi **6**. Inflasi naik satu poin tiap putaran selama u tetap 3; hanya pada u=u*=5 inflasi sama dengan ekspektasi.

Contoh Indonesia: perubahan harga pangan dapat mengubah inflasi aktual dan ekspektasi rumah tangga, tetapi penilaian kebijakan memerlukan data dan konteks yang terverifikasi. Contoh global: perusahaan yang memperkirakan kenaikan biaya dapat menetapkan harga lebih cepat, sementara pekerja menegosiasikan upah dengan mempertimbangkan daya beli; respons berbeda menurut pasar dan kredibilitas kebijakan.

[[visual:eko-phillips]]

## Kesalahpahaman umum

1. Kurva Phillips jangka pendek tidak menjamin pengangguran rendah dapat dipertahankan tanpa perubahan ekspektasi.
2. Kurva jangka panjang vertikal tidak berarti inflasi selalu tetap; artinya tingkat pengangguran jangka panjang tidak ditentukan oleh inflasi.
3. Kenaikan ekspektasi menggeser kurva ke atas, bukan sekadar menggerakkan ekonomi sepanjang kurva yang sama.

## Kaitan ke psikologi dan kebijakan

Jangkar ekspektasi berkaitan dengan bias penjangkaran (anchoring): rumah tangga dapat memakai angka inflasi yang paling mudah diingat saat memperkirakan harga mendatang. Komunikasi bank sentral yang konsisten membantu publik membentuk acuan, sedangkan kejutan berulang dapat melemahkan kepercayaan. Investor dan perusahaan sebaiknya membedakan ekspektasi survei, inflasi terealisasi, dan perubahan harga aset; satu angka tidak memastikan kebijakan atau hasil pasar.

## Batas model

Kurva ini menyederhanakan dinamika ekspektasi, guncangan penawaran, dan heterogenitas pekerja serta perusahaan. Koefisien −0,5 bersifat ilustratif. Tingkat alamiah tidak diketahui tepat; inflasi dan pengangguran diukur dengan jeda dan revisi. Hubungan tersebut bukan resep mekanis untuk memilih kebijakan.
`,
    },
  ],
  chapterResources: {
    summary: [
      "IHK membandingkan biaya keranjang tetap pada harga periode berjalan dengan biaya pada tahun dasar.",
      "Inflasi adalah perubahan persentase IHK; keranjang dan bobot membuat inflasi pribadi berbeda.",
      "Suku bunga riil menyesuaikan bunga nominal dengan inflasi dan menjelaskan perubahan daya beli.",
      "Inflasi tak terduga mengubah nilai riil kontrak tetap dan menimbulkan biaya penyesuaian.",
      "TPT, TPAK, dan rasio kerja-penduduk memakai penyebut berbeda dan harus dibaca bersama.",
      "Pengangguran dibedakan menjadi friksional, struktural, dan siklis; tingkat alamiah bukan nol.",
      "Hukum Okun dan kurva Phillips adalah model perkiraan, bukan hubungan universal yang pasti.",
      "Ekspektasi inflasi menggeser kurva Phillips jangka pendek; jangka panjang pengangguran kembali ke tingkat alamiah.",
    ],
    glossary: [
      { term: "Inflasi", english: "Inflation", definition: "Kenaikan tingkat harga umum yang berlangsung berkelanjutan." },
      { term: "Indeks harga konsumen", english: "Consumer price index (CPI)", definition: "Indeks biaya keranjang konsumsi rumah tangga pada harga periode berjalan relatif terhadap tahun dasar." },
      { term: "Keranjang konsumsi", english: "Market basket", definition: "Kumpulan barang dan jasa dengan jumlah atau bobot tertentu untuk mengukur perubahan biaya." },
      { term: "Tahun dasar", english: "Base year", definition: "Periode acuan harga untuk menghitung indeks harga." },
      { term: "Deflator PDB", english: "GDP deflator", definition: "Rasio PDB nominal terhadap PDB riil dikalikan 100." },
      { term: "Bias substitusi", english: "Substitution bias", definition: "Kecenderungan keranjang tetap melebihkan kenaikan biaya saat konsumen beralih ke barang relatif murah." },
      { term: "Suku bunga nominal", english: "Nominal interest rate", definition: "Tingkat pertambahan uang sebelum penyesuaian inflasi." },
      { term: "Suku bunga riil", english: "Real interest rate", definition: "Tingkat perubahan daya beli setelah memperhitungkan inflasi." },
      { term: "Persamaan Fisher", english: "Fisher equation", definition: "Hubungan eksak bunga nominal, inflasi, dan bunga riil." },
      { term: "Daya beli", english: "Purchasing power", definition: "Jumlah barang dan jasa yang dapat dibeli dengan sejumlah uang." },
      { term: "Biaya sepatu", english: "Shoe-leather cost", definition: "Waktu dan sumber daya untuk mengurangi saldo uang ketika inflasi tinggi." },
      { term: "Biaya menu", english: "Menu cost", definition: "Biaya penyesuaian daftar harga dan sistem akibat perubahan tingkat harga." },
      { term: "Hiperinflasi", english: "Hyperinflation", definition: "Inflasi yang sangat tinggi dan berlangsung cepat secara ekstrem." },
      { term: "Angkatan kerja", english: "Labor force", definition: "Jumlah penduduk bekerja dan menganggur yang aktif mencari kerja menurut definisi statistik." },
      { term: "Tingkat pengangguran terbuka", english: "Unemployment rate", definition: "Jumlah penganggur dibagi angkatan kerja." },
      { term: "Tingkat partisipasi angkatan kerja", english: "Labor force participation rate", definition: "Angkatan kerja dibagi penduduk usia kerja." },
      { term: "Pekerja putus asa", english: "Discouraged worker", definition: "Orang yang ingin bekerja tetapi berhenti mencari karena merasa peluang kerja terbatas." },
      { term: "Pengangguran friksional", english: "Frictional unemployment", definition: "Pengangguran sementara selama pencarian atau perpindahan kerja." },
      { term: "Pengangguran struktural", english: "Structural unemployment", definition: "Pengangguran akibat ketidakcocokan keterampilan, lokasi, atau kondisi pasar kerja." },
      { term: "Pengangguran siklis", english: "Cyclical unemployment", definition: "Pengangguran yang berubah bersama fluktuasi kegiatan ekonomi." },
      { term: "Tingkat pengangguran alamiah", english: "Natural rate of unemployment", definition: "Tingkat pengangguran yang konsisten dengan pencarian dan kecocokan normal dalam model." },
      { term: "Hukum Okun", english: "Okun's law", definition: "Hubungan perkiraan antara pengangguran siklis dan kesenjangan output." },
      { term: "Kurva Phillips", english: "Phillips curve", definition: "Hubungan jangka pendek antara inflasi, ekspektasi inflasi, dan pengangguran." },
      { term: "Ekspektasi inflasi", english: "Expected inflation", definition: "Perkiraan pelaku ekonomi tentang perubahan tingkat harga pada masa mendatang." },
      { term: "Ilusi uang", english: "Money illusion", definition: "Kecenderungan menilai perubahan nominal tanpa menyesuaikannya dengan daya beli." },
    ],
    exercises: [
      {
        prompt: "Hitung IHK 2025 dan inflasi 2025 dari keranjang tetap pada bagian 1. Jika IHK 2026=108,5, hitung inflasi 2026.",
        solution: "1. Biaya keranjang 2024=400+300+200=900; biaya 2025=420+320+210=950. 2. IHK 2025=950/900×100=105,56. 3. Inflasi 2025=105,56/100−1=5,56%. 4. Inflasi 2026=108,5/105,56−1=2,79%.",
      },
      {
        prompt: "Untuk i=8% dan π=5%, hitung bunga riil pendekatan dan eksak. Hitung juga daya beli 100 setelah 10 tahun pada inflasi 5%.",
        solution: "1. Pendekatan Fisher: r≈8%−5%=3%. 2. Rumus eksak: r=1,08/1,05−1=0,02857≈2,86%. 3. Nilai daya beli=100/1,05^10. 4. Karena 1,05^10=1,6289, hasilnya 100/1,6289≈61,39.",
      },
      {
        prompt: "Dengan 120 bekerja, 10 menganggur, dan 70 bukan angkatan kerja, hitung TPT, TPAK, dan rasio kerja-penduduk. Hitung lagi jika lima penganggur berhenti mencari.",
        solution: "1. Penduduk usia kerja=120+10+70=200; angkatan kerja=120+10=130. 2. TPT=10/130×100=7,69%; TPAK=130/200×100=65%; rasio kerja-penduduk=120/200×100=60%. 3. Jika lima berhenti mencari, bekerja tetap 120, menganggur 5, angkatan kerja 125, dan bukan angkatan kerja 75. 4. TPT=5/125×100=4,00%; TPAK=125/200×100=62,5%; rasio kerja-penduduk tetap 60%.",
      },
      {
        prompt: "Gunakan hukum Okun sederhana ketika u=7%, u*=5%, dan Y*=1.000. Hitung pengangguran siklis, kesenjangan output, PDB aktual, dan kehilangan output.",
        solution: "1. Pengangguran siklis=u−u*=7−5=2 poin persentase. 2. Kesenjangan output≈−2×2=−4%. 3. Y=Y*×(1−0,04)=1.000×0,96=960. 4. Selisih terhadap potensi=1.000−960=40. Koefisien hukum Okun bersifat ilustratif.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
