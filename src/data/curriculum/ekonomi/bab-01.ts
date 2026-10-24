import type { CurriculumModule } from "@/lib/types";

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

## Definisi, intuisi, dan batas model

Kelangkaan adalah keadaan ketika sumber daya yang tersedia tidak cukup untuk memenuhi semua penggunaan yang diinginkan pada saat bersamaan. Definisi ini berlaku pada waktu, kemampuan, lahan, bahan baku, mesin, perhatian, dan uang. Orang dengan pendapatan tinggi pun menghadapi kelangkaan waktu; organisasi yang memiliki anggaran besar tetap harus memilih proyek, tenaga ahli, dan jadwal. Kelangkaan bukan berarti suatu benda langka secara geologis, juga bukan sinonim kemiskinan. Maknanya bergantung pada perbandingan antara kapasitas dan penggunaan yang mungkin.

Karena tidak semua tujuan bisa dipenuhi, pengambil keputusan memilih satu kombinasi dan melepas sebagian kemungkinan lain. Hubungan antara pilihan dan hal yang dilepas disebut trade-off. Dalam perekonomian, pertanyaan dasarnya ialah apa yang diproduksi, bagaimana cara memproduksinya, dan siapa yang menerima hasilnya. Rumah tangga menjawab lewat belanja dan waktu kerja; perusahaan lewat investasi dan proses produksi; pemerintah lewat pajak, layanan, serta peraturan. Setiap keputusan memakai sumber daya yang dapat digunakan untuk tujuan lain.

PPF merangkum kombinasi maksimum dua keluaran yang dapat dihasilkan dengan sumber daya dan teknologi tertentu, dalam periode yang ditetapkan. PPF bukan ramalan, target produksi, atau batas moral. Ia adalah model untuk menalar kapasitas. Titik pada kurva menggunakan kapasitas secara produktif menurut model; titik di dalam kurva menunjukkan kapasitas yang menganggur atau salah alokasi; titik di luar kurva belum dapat dicapai dengan kapasitas saat ini. Efisiensi produksi tidak otomatis berarti hasilnya adil atau paling diinginkan. PPF juga menyederhanakan banyak barang menjadi dua kategori.

Kemiringan PPF menyatakan biaya peluang: berapa banyak keluaran vertikal yang dilepas untuk menambah keluaran horizontal. Jika sumber daya tidak sama cocok untuk setiap kegiatan, PPF biasanya melengkung keluar. Memindahkan pekerja yang paling cocok membuat barang A terlebih dahulu mungkin hanya mengurangi sedikit barang B; pemindahan berikutnya dapat mengorbankan semakin banyak B. Karena itu biaya peluang marginal dapat meningkat, bukan selalu konstan.

## Mekanisme dan hitungan lengkap

Misalkan sebuah koperasi memiliki 10 jam mesin dan membuat dua produk ilustratif: paket beras siap kirim (R) dan keranjang sayur (S). Kombinasi A adalah 0 R dan 100 S; kombinasi B adalah 10 R dan 90 S; kombinasi C adalah 20 R dan 70 S; kombinasi D adalah 30 R dan 40 S. Saat produksi beralih dari B ke C, tambahan R = 20 − 10 = 10 paket, sedangkan S berubah 70 − 90 = −20 keranjang. Biaya peluang per satu R tambahan = 20/10 = 2 keranjang S. Dari C ke D, tambahan 10 R mengorbankan 30 S, atau 3 S per R. Biaya peluang meningkat karena sumber daya yang relatif lebih cocok untuk sayur digunakan untuk beras. Seluruh angka ini hanya latihan hitung.

Proses perubahan kapasitas dapat dibaca bertahap. Pertama, tetapkan sumber daya, teknologi, dan periode. Kedua, catat beberapa kombinasi yang mungkin. Ketiga, bandingkan dua titik untuk menghitung tambahan output dan output yang dikorbankan. Keempat, periksa apakah titik tersebut dapat dicapai dan apakah kapasitas dipakai penuh. Kelima, tanyakan apakah ada perubahan teknologi, jumlah tenaga kerja, keterampilan, atau modal yang mengubah batas itu. Perbaikan irigasi atau logistik dapat memperluas kapasitas produksi pertanian; pengangguran alat dan tenaga kerja dapat menempatkan output di bawah kapasitas yang tersedia. Perluasan kapasitas tidak menjamin semua orang menerima manfaat yang sama.

Dalam konteks Indonesia, pilihan penggunaan lahan dan jam kerja pada musim tanam dapat memperlihatkan trade-off antara komoditas, pemeliharaan tanah, dan waktu panen. Ini ilustrasi mekanisme, bukan klaim data produktivitas tertentu. Contoh global yang mudah dipahami ialah rumah sakit yang mengalokasikan ruang operasi, dokter, dan jadwal antara jenis layanan yang berbeda: menambah satu jenis tindakan berarti memakai tenaga dan waktu yang tidak dapat dipakai serentak untuk tindakan lain.

[[visual:eko-ppf]]

## Kesalahpahaman umum

1. Titik di PPF disebut efisien dalam penggunaan kapasitas, tetapi tidak otomatis paling adil, ramah lingkungan, atau sesuai prioritas masyarakat.
2. Titik di dalam kurva tidak selalu berarti pekerja malas; resesi, gangguan bahan baku, atau ketidakcocokan keterampilan dapat membuat kapasitas menganggur.
3. Pertumbuhan tidak berarti semua keluaran meningkat seketika. Teknologi atau sumber daya baru dapat menggeser batas ke luar, tetapi perlu waktu dan biaya.

Untuk keputusan investasi, PPF mengingatkan bahwa modal dan waktu untuk satu aset atau proyek mengurangi sumber daya bagi alternatif lain. Dalam Web3, pilihan memakai kapasitas komputasi untuk satu transaksi memiliki opportunity cost terhadap pekerjaan lain. Psikologi keputusan penting karena manusia sering memperlakukan waktu dan perhatian seolah tidak terbatas; menuliskan batas nyata membantu menghindari rencana yang tidak mungkin dijalankan.
`,
    },
    {
      id: "eko2-b01-s2",
      title: "Biaya peluang: nilai alternatif terbaik yang dilepas",
      minutes: 35,
      content: `## Definisi dan intuisi

Biaya peluang (opportunity cost) adalah nilai dari alternatif terbaik yang dikorbankan ketika sumber daya digunakan untuk suatu pilihan. Definisi ini selalu bersifat perbandingan: kita menilai keputusan yang diambil terhadap opsi layak yang paling bernilai di antara opsi yang tidak dipilih. Biaya peluang berbeda dari harga akuntansi. Harga Rp100.000 dapat menjadi biaya kas, sementara biaya peluangnya mungkin berupa waktu kerja, istirahat, atau manfaat kegiatan lain yang tidak jadi dilakukan. Keduanya dapat relevan, tetapi jangan menjumlahkan hal yang sama dua kali.

Bayangkan satu sore hanya memiliki tiga jam. Kamu bisa mengikuti kelas, bekerja lepas, beristirahat, atau membantu keluarga. Jika memilih kelas, pilihan terbaik berikutnya mungkin pekerjaan lepas yang benar-benar tersedia. Namun jika pekerjaan itu tidak tersedia pada jam tersebut, pendapatan yang dibayangkan bukan alternatif realistis. Biaya peluang harus menggunakan opsi yang feasible, bukan seluruh kemungkinan khayalan. Nilai juga tidak selalu harus dikonversi ke rupiah: kesehatan, pembelajaran, keamanan, dan kepuasan bisa penting meski sulit diberi angka.

Biaya eksplisit adalah pengeluaran langsung, misalnya biaya transportasi ke kelas. Biaya implisit adalah nilai sumber daya milik sendiri yang dipakai, misalnya waktu pemilik usaha tanpa gaji formal. Untuk analisis ekonomi, keduanya perlu dipertimbangkan. Laba akuntansi biasanya mengurangkan biaya eksplisit; laba ekonomi mengurangkan biaya eksplisit dan implisit. Perbedaan ini membantu menjelaskan mengapa usaha yang tampak menghasilkan kas belum tentu pilihan terbaik bagi pemilik jika waktu dan modalnya memiliki alternatif bernilai tinggi.

## Mekanisme sebab-akibat dan rumus

Urutannya: identifikasi sumber daya terbatas; tulis pilihan yang benar-benar dapat diambil; tentukan opsi yang dipilih; cari satu alternatif terbaik yang dilepas; ukur nilai manfaat alternatif itu dengan satuan yang konsisten; lalu bandingkan dengan manfaat pilihan yang diambil. Secara ringkas, biaya peluang suatu pilihan = nilai manfaat alternatif terbaik yang tidak dipilih. Dalam model laba ekonomi: laba ekonomi = pendapatan total − biaya eksplisit − biaya implisit. Pendapatan total adalah nilai penjualan selama periode yang sama; biaya eksplisit adalah pembayaran kas; biaya implisit adalah nilai penggunaan sumber daya sendiri. Rumus ini alat berpikir, bukan bukti bahwa semua nilai dapat diukur tepat.

## Contoh hitungan lengkap

Nadia memiliki satu sore empat jam dan memilih menyiapkan katalog toko daringnya. Alternatif yang tersedia: pekerjaan lepas selama empat jam dengan bayaran bersih ilustratif Rp80.000 per jam; kursus gratis yang hanya tersedia sore itu; atau istirahat. Untuk latihan ini, Nadia menilai manfaat katalog sebesar Rp420.000, pekerjaan lepas memberi Rp4 × Rp80.000 = Rp320.000, kursus bernilai Rp250.000 menurut penilaiannya, dan istirahat bernilai Rp180.000. Alternatif terbaik yang dilepas adalah kerja lepas senilai Rp320.000. Manfaat bersih ekonomi katalog = Rp420.000 − Rp320.000 = Rp100.000, sebelum biaya kas. Bila biaya iklan Rp50.000, sisa manfaat bersih ilustratif = Rp100.000 − Rp50.000 = Rp50.000. Jika Nadia menilai kursus bernilai Rp450.000 setelah mendapat informasi baru, alternatif terbaik berubah; biaya peluangnya menjadi Rp450.000 dan manfaat bersih katalog menjadi negatif Rp80.000. Perhitungan berubah karena opsi terbaik berubah, bukan karena biaya katalog berubah.

Angka manfaat katalog dan kursus adalah penilaian hipotetis, bukan nilai pasar yang terverifikasi. Ketidakpastian hasil harus dicatat: katalog mungkin meningkatkan penjualan atau tidak. Analisis sensitivitas dapat menghitung hasil pada skenario rendah, dasar, dan tinggi tanpa menyebut satu proyeksi sebagai kepastian.

Di Indonesia, seorang mahasiswa yang memilih mengambil shift berbayar saat jadwal kelas daring berlangsung menghadapi biaya peluang berupa materi yang mungkin terlewat; sebaliknya, menghadiri kelas dapat mengorbankan penghasilan yang benar-benar tersedia. Tidak ada jawaban universal—tujuan, kebutuhan, dan alternatif masing-masing berbeda. Dalam perusahaan global, jam teknisi yang memperbaiki satu lini mesin tidak dapat sekaligus dipakai untuk merawat lini lain.

[[visual:eko-opportunity-cost]]

## Kesalahpahaman umum

1. Biaya peluang bukan jumlah semua alternatif yang tidak dipilih; orang tidak dapat memakai satu jam yang sama untuk semua alternatif sekaligus.
2. Biaya masa lalu yang tidak dapat dikembalikan (sunk cost) bukan biaya peluang keputusan sekarang. Pengalaman masa lalu boleh mengubah informasi, tetapi uang yang tak dapat dipulihkan tidak menjadi alasan tunggal untuk lanjut.
3. Harga bukan selalu seluruh biaya ekonomi; waktu, risiko, dan sumber daya milik sendiri juga dapat memiliki nilai.

Investor membandingkan proyek yang bersaing atas modal, likuiditas, dan toleransi risikonya; return historis suatu aset tidak menghapus biaya peluang dari pilihan lain. Pada Web3, memilih mengunci aset dalam protokol berarti melepas akses likuid selama periode tertentu dan mungkin menanggung risiko kontrak. Dalam psikologi keputusan, framing dapat membuat opsi yang tidak dipilih terasa “gratis”; menuliskan alternatif terbaik secara eksplisit membuat trade-off lebih terlihat.
`,
    },
    {
      id: "eko2-b01-s3",
      title: "Berpikir marginal dan insentif",
      minutes: 35,
      content: `## Definisi formal dan intuisi

Analisis marginal membandingkan manfaat tambahan dengan biaya tambahan dari satu perubahan kecil pada keputusan. “Marginal” berarti tambahan atau perubahan pada unit berikutnya, bukan sekadar sesuatu yang kecil atau tidak penting. Seseorang sebaiknya menambah aktivitas selama manfaat marginal (marginal benefit/MB) sekurang-kurangnya sebesar biaya marginal (marginal cost/MC), dengan tujuan dan kendala yang jelas. Aturan ini tidak menyatakan bahwa semua manfaat harus berupa uang; tambahan waktu bersama keluarga, kualitas, atau risiko dapat ikut dipertimbangkan.

Perbedaan antara total dan marginal penting. Total manfaat menjawab berapa banyak manfaat keseluruhan; manfaat marginal menjawab apa yang diperoleh jika satu unit lagi ditambahkan. Jika lima jam belajar sudah memberi banyak nilai, itu tidak otomatis berarti jam keenam bernilai lebih besar daripada istirahat. Manfaat tambahan dapat menurun karena kebutuhan yang paling penting sudah terpenuhi. Sebaliknya, biaya tambahan bisa naik karena lembur, kelelahan, atau bahan produksi yang semakin sulit didapat.

Insentif adalah perubahan manfaat atau biaya yang memengaruhi pilihan. Upah, harga, pajak, diskon, aturan, reputasi, dan pengakuan sosial dapat menjadi insentif. Rantai sebab-akibatnya: aturan atau imbalan mengubah konsekuensi pilihan; orang menyesuaikan perilaku berdasarkan kendala dan preferensinya; perilaku agregat dapat menghasilkan hasil yang tidak diniatkan. Respons tidak seragam karena informasi, sumber daya, dan tujuan berbeda. Insentif bukan jaminan bahwa setiap orang bereaksi sama.

## Rumus dan hitungan langkah demi langkah

Manfaat marginal unit ke-n = total manfaat setelah unit n − total manfaat setelah unit n−1. Biaya marginal unit ke-n dihitung dengan cara yang sama untuk total biaya. Manfaat bersih marginal = MB − MC. Dalam model diskret, tambahkan unit selama manfaat bersih marginal tidak negatif, kemudian berhenti ketika unit berikutnya memberi MB < MC.

Sebuah kedai mempertimbangkan jam promosi tambahan. Manfaat kotor dari unit layanan tambahan berturut-turut dinilai 100, 85, 70, 55, 40 unit nilai; biaya marginalnya 20, 30, 40, 55, 75. Untuk unit pertama, MB − MC = 100 − 20 = 80. Unit kedua: 85 − 30 = 55. Unit ketiga: 70 − 40 = 30. Unit keempat: 55 − 55 = 0. Unit kelima: 40 − 75 = −35. Manfaat bersih total untuk empat unit pertama = 80 + 55 + 30 + 0 = 165 unit nilai. Unit kelima tidak ditambah dalam model karena menurunkan total manfaat bersih menjadi 130. Maka jumlah yang dipilih adalah empat unit, dengan catatan asumsi nilai dapat dibandingkan dan tidak ada kendala lain yang diabaikan.

### Mengapa kurva marginal berubah

Jika tambahan jam belajar memberi peningkatan pemahaman yang semakin kecil, MB menurun. Jika jam lembur memerlukan ongkos transportasi tambahan atau mengurangi produktivitas karena lelah, MC dapat meningkat. Perpotongan MB dan MC menandai titik optimum interior dalam model tertentu. Jika ada batas anggaran, kewajiban minimum, dampak pihak ketiga, atau pilihan diskret yang tidak dapat dibagi, solusi dapat berada pada batas, bukan tepat di perpotongan.

Di Indonesia, promo tarif pengantaran yang berlaku hanya di jam sepi dapat mengubah waktu konsumen memesan dan waktu pengemudi bekerja; hasil akhirnya bergantung kapasitas, aturan, dan biaya yang ditanggung berbagai pihak. Dalam bisnis global, bonus berdasarkan jumlah unit bisa menaikkan output, tetapi jika kualitas tidak dihitung, cacat produk mungkin meningkat.

[[visual:eko-marginal]]

## Kesalahpahaman umum

1. MB = MC bukan aturan bahwa harga harus selalu sama dengan biaya; itu kondisi keputusan marginal dalam model dengan asumsi tertentu.
2. Menilai margin bukan berarti mengabaikan biaya total yang sudah relevan, kendala, atau konsekuensi distribusi.
3. Insentif yang dimaksudkan baik tidak selalu menghasilkan perilaku yang dikehendaki; ukuran kinerja dapat dimanipulasi atau membuat kualitas diabaikan.

Dalam investasi, keputusan tambah atau kurangi posisi sebaiknya mempertimbangkan manfaat dan risiko marginal ke depan, bukan hanya harga beli. Kontrak Web3 yang memberi reward tambahan juga dapat mendorong perilaku yang menimbulkan risiko baru ketika emisi reward berkurang atau biaya transaksi naik. Psikologi keputusan memengaruhi estimasi MB dan MC: euforia dapat membesar-besarkan manfaat, sementara loss aversion dapat membuat biaya terlihat terlalu besar. Tuliskan asumsi dan bukti untuk setiap estimasi.
`,
    },
    {
      id: "eko2-b01-s4",
      title: "Spesialisasi dan keunggulan komparatif",
      minutes: 40,
      content: `## Definisi, intuisi, dan mekanisme

Keunggulan absolut (absolute advantage) berarti suatu pihak dapat menghasilkan lebih banyak output dengan sumber daya yang sama, atau output yang sama dengan lebih sedikit sumber daya. Keunggulan komparatif (comparative advantage) berarti pihak tersebut memiliki biaya peluang lebih rendah untuk menghasilkan suatu barang. Perdagangan sukarela dapat memberi ruang bagi spesialisasi menurut keunggulan komparatif, sekalipun satu pihak memiliki keunggulan absolut di semua barang. Kunci manfaat pertukaran bukan “siapa paling produktif dalam semua hal”, melainkan apa yang harus dikorbankan untuk menambah satu output.

Mekanismenya: hitung berapa unit barang B yang dilepas untuk menghasilkan lebih banyak barang A; bandingkan biaya peluang antar pihak; spesialisasikan sebagian sumber daya pada barang yang biaya peluang relatifnya lebih rendah; lalu tukarkan hasil pada rasio yang berada di antara biaya peluang kedua pihak. Rasio pertukaran di luar rentang itu umumnya tidak menguntungkan salah satu pihak dibanding memproduksi sendiri, dengan asumsi kualitas, biaya transaksi, dan preferensi dapat diabaikan.

### Rumus dan hitungan lengkap

Biaya peluang 1 unit A = unit B yang dikorbankan ÷ unit A tambahan. Misalkan dalam satu jam produsen fiktif Ari dapat membuat 12 paket beras atau 6 paket kopi; Bima dapat membuat 8 paket beras atau 8 paket kopi. Untuk Ari, 1 beras mengorbankan 6/12 = 0,5 kopi; 1 kopi mengorbankan 12/6 = 2 beras. Untuk Bima, 1 beras mengorbankan 8/8 = 1 kopi; 1 kopi mengorbankan 8/8 = 1 beras. Jadi Ari memiliki biaya peluang beras lebih rendah (0,5 < 1) dan Bima biaya peluang kopi lebih rendah (1 < 2). Ari berspesialisasi pada beras, Bima pada kopi.

Hitung output sebelum dan sesudah, dengan setiap pihak membagi satu jam menjadi setengah jam untuk tiap produk. Sebelum: Ari menghasilkan 6 beras dan 3 kopi; Bima 4 beras dan 4 kopi; total 10 beras dan 7 kopi. Setelah keduanya memakai satu jam penuh pada keunggulan komparatif: total menjadi 12 beras dan 8 kopi. Total kedua barang bertambah tanpa menambah waktu. Perdagangan 1 beras dengan 0,75 kopi berada di antara biaya peluang Ari 0,5 dan Bima 1. Ari menerima 0,75 kopi, lebih dari 0,5 yang dapat dihasilkan sendiri dengan sumber daya yang dialihkan; Bima membayar 0,75 kopi untuk mendapatkan 1 beras, kurang dari 1 kopi yang harus dikorbankan jika memproduksi beras sendiri. Contoh ini mengandaikan produksi dan pertukaran tanpa biaya, asumsi yang sering tidak berlaku sepenuhnya.

Keuntungan total potensial tidak berarti distribusi otomatis adil. Perbedaan daya tawar, biaya pengiriman, standar mutu, akses pasar, dan dampak pada pekerjaan dapat menentukan siapa menikmati manfaat. Spesialisasi berlebihan juga menciptakan ketergantungan pada mitra dan gangguan pasokan.

Contoh Indonesia yang bersifat mekanisme: petani, pengolah, dan pedagang dapat mengkhususkan diri pada tahapan yang sesuai keterampilan serta akses alat, lalu saling bertukar hasil; biaya transportasi dan posisi tawar menentukan hasil bersih. Contoh global: negara dan perusahaan memperdagangkan barang atau jasa yang biaya peluang relatifnya berbeda, tetapi perdagangan nyata melibatkan kebijakan, rantai pasok, dan biaya penyesuaian.

[[visual:eko-comparative]]

## Kesalahpahaman umum

1. Pihak yang paling cepat memproduksi suatu barang belum tentu memiliki keunggulan komparatif pada barang itu; bandingkan biaya peluang.
2. Spesialisasi tidak menjamin setiap pekerja atau daerah memperoleh keuntungan yang sama, dan perubahan pekerjaan dapat menimbulkan biaya transisi.
3. Perdagangan tidak menciptakan manfaat tanpa batas. Biaya logistik, kontrak, kualitas, risiko pasokan, dan eksternalitas dapat mengurangi surplus.

Investor dapat melihat spesialisasi sebagai sumber produktivitas sekaligus risiko konsentrasi; rantai pasok yang efisien tetap rentan jika terlalu bergantung pada satu pemasok. Proyek Web3 dapat mengandalkan pihak khusus seperti validator atau penyedia infrastruktur, tetapi ketergantungan menimbulkan risiko operasional. Psikologi kelompok dapat salah mengartikan keunggulan absolut sebagai bukti satu pihak harus melakukan semuanya; menghitung biaya peluang memperjelas ruang kerja sama.
`,
    },
    {
      id: "eko2-b01-s5",
      title: "Menyusun keputusan ekonomi yang dapat diuji",
      minutes: 35,
      content: `## Kerangka keputusan dan insentif

Model ekonomi berguna ketika pertanyaan dan asumsi dibuat jelas. Untuk keputusan pribadi maupun organisasi, tulis tujuan, kendala sumber daya, pilihan yang layak, konsekuensi marginal, biaya peluang, serta siapa yang menerima manfaat atau menanggung biaya. Bedakan fakta dari perkiraan dan preferensi. Kerangka sederhana tidak menghapus ketidakpastian, tetapi membuat alasan keputusan dapat diperiksa dan diperbarui.

Insentif bekerja melalui perubahan payoff atau kendala. Misalnya, toko memberi potongan Rp20.000 bagi pembelian di atas Rp200.000. Jika keranjang awal Rp190.000 dan pelanggan membeli barang tambahan Rp25.000 hanya untuk mendapatkan potongan, total pengeluaran menjadi Rp215.000 − Rp20.000 = Rp195.000. Secara kas, pembeli membayar Rp5.000 lebih banyak daripada keranjang awal dan memperoleh barang tambahan. Apakah itu bermanfaat tergantung nilai barang tambahan bagi pembeli; diskon bukan penghematan jika produk tambahan tidak bernilai setidaknya biaya tambahannya.

Contoh hitungan keputusan: pembeli mempertimbangkan barang tambahan Rp25.000 untuk memperoleh diskon Rp20.000. Perubahan pembayaran bersih = Rp25.000 − Rp20.000 = Rp5.000. Jika manfaat barang tambahan dinilai Rp8.000, manfaat bersih = Rp8.000 − Rp5.000 = Rp3.000. Jika manfaatnya hanya Rp2.000, manfaat bersih = Rp2.000 − Rp5.000 = −Rp3.000. Nilai kepuasan ini ilustratif. Perhitungan juga mengandaikan barang awal tetap akan dibeli dan diskon benar-benar berlaku pada seluruh transaksi sesuai syarat.

Insentif dapat mendorong akibat tak terduga. Target “jumlah layanan per jam” bisa membuat kualitas diabaikan; target “hemat biaya” bisa menunda perawatan yang penting; hadiah untuk pendaftaran dapat menarik pengguna yang tidak cocok. Karena itu periksa siapa yang merancang insentif, siapa yang merespons, informasi apa yang mereka miliki, serta perilaku apa yang mudah diukur tetapi bukan tujuan sebenarnya. Kebijakan juga bisa memindahkan biaya ke pihak yang tidak ikut membuat keputusan.

Langkah praktis:
1. Nyatakan keputusan dan satuan waktunya.
2. Catat sumber daya terbatas serta tujuan yang tidak boleh dikorbankan.
3. Bandingkan alternatif yang benar-benar tersedia.
4. Hitung manfaat dan biaya marginal untuk perubahan kecil.
5. Tulis asumsi, risiko, dan dampak pada pihak lain.
6. Tentukan bukti apa yang akan membuatmu meninjau ulang keputusan.

Untuk contoh Indonesia, penerima promo belanja dapat membandingkan harga setelah diskon, biaya kirim, serta apakah tambahan barang memang dibutuhkan; klaim “hemat” tidak otomatis sama dengan belanja lebih baik. Contoh global serupa terlihat pada program loyalitas yang mengubah waktu pembelian, namun efeknya berbeda menurut akses konsumen dan syarat program.

[[visual:eko-opportunity-cost]]

## Kesalahpahaman umum

1. Model adalah peta, bukan seluruh wilayah. Asumsi ceteris paribus (faktor lain tetap) membantu mengisolasi sebab, tetapi dunia nyata dapat mengubah banyak faktor serentak.
2. “Rasional” tidak berarti egois atau selalu memilih uang terbesar; tujuan, norma, kepedulian, dan informasi juga membentuk pilihan.
3. Biaya yang sulit diukur tidak sama dengan biaya nol. Catat secara kualitatif jika nilai rupiahnya tidak dapat diestimasi dengan andal.

Dalam investasi, kerangka ini membantu menguji klaim return dengan memasukkan biaya, risiko, likuiditas, serta alternatif. Dalam Web3, periksa siapa menerima token reward dan siapa menanggung biaya keamanan atau volatilitas; insentif token dapat berubah nilainya. Dalam psikologi keputusan, gunakan jeda untuk mengurangi pengaruh FOMO, framing diskon, dan sunk cost. Keputusan yang baik bukan yang selalu menghasilkan hasil terbaik secara kebetulan, melainkan yang memakai informasi layak dan dapat dikoreksi saat bukti baru datang.

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
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
