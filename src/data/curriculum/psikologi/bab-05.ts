import type { CurriculumModule } from "@/lib/types";

export const BAB_05: CurriculumModule = {
  id: "psi2-b05",
  title: "Bab 5 — Behavioral Economics & Cognitive Biases",
  summary: "Bab ini mengenalkan rasionalitas terbatas, bias kognitif, teori prospek, dan pengaruh sosial dalam keputusan. Contoh serta hitungan dipakai untuk belajar memeriksa proses berpikir, bukan memberi saran investasi atau menjamin hasil.",
  lessons: [
    {
      id: "psi2-b05-s1",
      title: "Rasionalitas Terbatas dan Satisficing",
      minutes: 35,
      content: `# Rasionalitas Terbatas dan Satisficing

## Tujuan belajar

Setelah bagian ini, kamu dapat menjelaskan rasionalitas terbatas, membedakan satisficing dari maximizing, serta menghitung bagaimana biaya pencarian mengubah hasil bersih pilihan.

Model keputusan yang sepenuhnya rasional sering mengandaikan seseorang mengetahui semua pilihan, seluruh akibat, dan peluang masing-masing, lalu memiliki waktu serta kapasitas untuk menghitung semuanya. Dalam kehidupan nyata, informasi dapat tersebar, masa depan tidak pasti, dan perhatian terbatas. Rasionalitas terbatas (bounded rationality) menggambarkan keputusan yang dibuat dengan keterbatasan informasi, waktu, dan kemampuan pemrosesan. Ini bukan berarti orang selalu ceroboh; justru orang dapat memakai aturan sederhana untuk mengambil keputusan yang cukup baik dalam keadaan yang tersedia.

Bayangkan memilih kursus, laptop, atau layanan daring. Pilihan mungkin memiliki banyak atribut: harga, mutu, dukungan, privasi, dan kemudahan. Membandingkan seluruh alternatif membutuhkan waktu. Seseorang dapat menetapkan beberapa syarat penting terlebih dahulu, seperti batas biaya dan fitur minimum, lalu mencari sampai menemukan pilihan yang memenuhi ambang itu. Cara ini disebut satisficing, gabungan gagasan satisfying dan sufficing: berhenti pada pilihan yang cukup memuaskan menurut kriteria yang sudah ditetapkan. Maximizing berarti terus mencari atau membandingkan untuk menemukan pilihan terbaik di antara alternatif yang dipertimbangkan.

Kedua pendekatan tidak selalu memiliki satu pemenang. Satisficing dapat menghemat waktu dan perhatian, terutama ketika banyak opsi serupa atau keputusan mudah diubah. Namun, ambang yang terlalu rendah atau kriteria yang tidak relevan dapat menghasilkan pilihan yang kurang cocok. Maximizing dapat masuk akal untuk keputusan penting dan sulit dibalik, tetapi pencarian lebih luas memiliki biaya: waktu, tenaga, peluang yang terlewat, dan kesulitan membandingkan informasi yang tidak sebanding. Lebih banyak pencarian tidak otomatis membuat keputusan lebih baik bila data berkualitas rendah atau tujuan belum jelas.

[[visual:psi-bounded-search]]

Perhatikan contoh angka model. Nilai delapan opsi secara berurutan adalah 60, 72, 65, 80, 70, 85, 68, dan 78. Ambang puas adalah 75 dan biaya memeriksa tiap opsi 2. Satisficer memeriksa urutan satu per satu dan berhenti pada opsi keempat yang bernilai 80. Ia mengeluarkan biaya 4×2=8, sehingga nilai bersihnya 80−8=72. Maximizer memeriksa semua delapan opsi, memilih nilai tertinggi 85, dan mengeluarkan biaya 8×2=16; nilai bersihnya 85−16=69. Dalam ilustrasi ini, pencarian berhenti lebih cepat menghasilkan nilai bersih lebih tinggi, walau nilai opsi mentah yang dipilih lebih rendah. Jika biaya pencarian berubah, siapa yang unggul juga dapat berubah.

Model itu menganggap urutan opsi dan nilai diketahui, biaya pemeriksaan sama, serta nilai dapat dibandingkan pada satu skala. Dalam keputusan nyata, seseorang belum tentu tahu opsi yang belum diperiksa atau nilai sebenarnya. Ambang juga dapat berubah ketika informasi baru muncul. Karena itu, angka tersebut menunjukkan trade-off, bukan resep bahwa selalu sebaiknya berhenti cepat. Menetapkan kriteria sebelum mencari dapat membantu mengurangi perubahan standar yang terus bergerak, tetapi kriteria tetap perlu sesuai kebutuhan.

Strategi pencarian dapat dibuat bertahap. Pertama, nyatakan tujuan dan batas yang tidak boleh dilanggar. Kedua, tentukan atribut yang benar-benar penting dan bukti yang dapat memeriksanya. Ketiga, tetapkan kapan pencarian cukup, misalnya setelah beberapa opsi layak memenuhi semua kriteria minimum. Untuk keputusan yang sulit dibalik, mungkin berguna mencari lebih banyak atau meminta penilaian independen. Untuk pilihan rutin, pendekatan sederhana dapat menjaga waktu untuk prioritas lain. Evaluasi proses berdasarkan kualitas informasi dan hasil yang dapat diamati, bukan hanya rasa yakin setelah memilih.

Hubungan dengan keputusan sehari-hari / investasi / Web3: saat memilih aplikasi pencatatan aset atau membaca proyek baru, daftar kriteria seperti keamanan akun, transparansi, dan biaya dapat membatasi pencarian. Jangan menganggap contoh ini rekomendasi membeli atau menjual aset; keputusan finansial memiliki risiko dan informasi yang tidak tercakup model.

> **Poin kunci:** Satisficing berhenti pada opsi yang memenuhi ambang, sedangkan maximizing memperluas pencarian; biaya pencarian ikut menentukan nilai bersih.

**Batas bukti:** Model delapan opsi menganggap nilai dan biaya tetap, sehingga hanya ilustrasi. Perilaku dan dampak strategi pencarian berbeda antarorang, keputusan, dan konteks; tidak ada satu pendekatan yang selalu unggul.

**Refleksi:**
1. Pada keputusan apa kamu akan menetapkan ambang cukup sebelum mulai mencari?
2. Kapan biaya mencari satu alternatif lagi mungkin lebih besar daripada manfaat informasinya?`,
    },
    {
      id: "psi2-b05-s2",
      title: "Konfirmasi, Jangkar, dan Bingkai",
      minutes: 35,
      content: `# Konfirmasi, Jangkar, dan Bingkai

## Tujuan belajar

Kamu akan mengenali bias konfirmasi, efek jangkar, dan efek bingkai, serta mempraktikkan cara membandingkan klaim yang setara dengan acuan dan bahasa yang sama.

Bias kognitif adalah kecenderungan berpikir yang dapat memengaruhi penilaian secara sistematis, tetapi tidak selalu muncul dengan cara yang sama. Bias konfirmasi (confirmation bias) adalah kecenderungan mencari, mengingat, atau menafsirkan informasi yang terasa mendukung keyakinan awal. Misalnya, seseorang percaya aplikasi tertentu paling aman lalu lebih memperhatikan komentar positif, sementara keluhan dianggap tidak penting. Ini bukan berarti seseorang sengaja mengabaikan bukti; perhatian dan interpretasi dapat berjalan tanpa disadari. Pemeriksaan yang berguna adalah bertanya: bukti apa yang dapat membuat saya mengubah kesimpulan, dan apakah saya menerapkan standar yang sama pada informasi yang mendukung maupun menentang?

Efek jangkar (anchoring effect) terjadi ketika angka atau informasi awal memengaruhi estimasi berikutnya. Misalnya, harga awal yang ditampilkan sebuah toko dapat menjadi pembanding ketika melihat harga diskon. Jangkar dapat memengaruhi perkiraan meskipun angka awal tidak relevan atau belum diverifikasi. Dalam model ilustratif, estimasi = 50 + 0,3×(jangkar−50). Jika jangkar 100, estimasi menjadi 65; jika jangkar 20, estimasi menjadi 41; jika jangkar 50, estimasi tetap 50. Rumus ini menunjukkan tarikan sebagian ke angka awal pada satu aturan sederhana, bukan hukum universal tentang besar pengaruh jangkar.

Sebelum memperkirakan, seseorang dapat menulis estimasi mandiri dan alasan yang digunakan, lalu membandingkannya dengan angka yang ditampilkan. Cara ini tidak menghapus semua pengaruh, tetapi membantu membuat acuan terlihat. Periksa pula satuan, rentang historis yang relevan, dan apakah angka awal benar-benar terkait dengan pertanyaan. Jika angka berbeda, tanyakan sumber dan cara pembentukannya, bukan memilih angka tengah secara otomatis.

[[visual:psi-anchor-frame]]

Efek bingkai (framing effect) merujuk pada perubahan penilaian yang dapat muncul ketika informasi yang setara dipresentasikan dengan penekanan berbeda. Contoh klasik menyebut 600 orang dan dua deskripsi program: “200 diselamatkan” atau “400 meninggal”. Dengan asumsi kategori hasilnya lengkap dan saling melengkapi, keduanya ekuivalen: 200 dari 600 adalah 33,3%, sedangkan 400 dari 600 adalah 66,7%; 600−200=400. Perbedaan kalimat dapat membuat perhatian tertuju pada hasil yang diperoleh atau hilang. Kesetaraan angka ini tidak berarti setiap bingkai dalam kehidupan nyata ekuivalen; rincian, ketidakpastian, dan konsekuensi dapat berbeda.

Untuk membandingkan pilihan secara adil, ubah deskripsi ke satu ukuran dan titik acuan bersama. Tanyakan siapa yang termasuk dalam penyebut, periode waktu yang dibahas, apa yang tidak disebutkan, dan apakah probabilitas maupun hasil benar-benar sama. Ketika seseorang mempresentasikan risiko sebagai “peluang berhasil” atau “peluang gagal”, hitung kedua sisi dari jumlah yang sama sebelum menilai. Berhati-hatilah terhadap grafik yang memotong sumbu atau memilih periode yang hanya menonjolkan bagian tertentu.

Ketiga konsep ini dapat berinteraksi. Keyakinan awal bisa menentukan informasi mana yang dicari; angka pertama menjadi jangkar; dan bingkai positif atau negatif mengarahkan perhatian. Satu contoh belum cukup untuk memastikan bias tertentu. Pengalaman, keahlian, kebutuhan, tujuan, dan kualitas informasi juga memengaruhi keputusan. Strategi praktisnya bukan menuduh diri sendiri bias, melainkan membuat prosedur: tulis alasan sebelum melihat angka, cari bukti yang dapat menyangkal dugaan, samakan penyebut, dan minta orang lain memeriksa asumsi.

Hubungan dengan keputusan sehari-hari / investasi / Web3: unggahan komunitas yang menyoroti kenaikan harga dapat menguatkan konfirmasi, harga puncak dapat menjadi jangkar, dan klaim “banyak pengguna berhasil” dapat membingkai risiko secara selektif. Bandingkan data dengan definisi serta periode sama; ini latihan evaluasi informasi, bukan saran investasi.

> **Poin kunci:** Periksa bukti yang menentang dugaan, pertanyakan angka awal, dan ubah bingkai ke ukuran bersama sebelum membandingkan.

**Batas bukti:** Besar efek jangkar atau bingkai berbeda menurut tugas, informasi, dan konteks; model jangkar serta contoh 600 orang bersifat ilustratif. Ekuivalensi harus diperiksa dari asumsi dan penyebut, bukan dari kemiripan kata saja.

**Refleksi:**
1. Angka awal apa yang pernah memengaruhi perkiraanmu, dan bagaimana kamu dapat mengujinya?
2. Bagaimana kamu mengubah dua klaim dengan bingkai berbeda menjadi perbandingan yang setara?`,
    },
    {
      id: "psi2-b05-s3",
      title: "Loss Aversion dan Prospect Theory",
      minutes: 35,
      content: `# Loss Aversion dan Prospect Theory

## Tujuan belajar

Kamu dapat menjelaskan titik acuan, aversi kerugian, serta fungsi nilai kualitatif dalam teori prospek dan menghitung nilai harapan serta nilai subjektif pada contoh sederhana.

Teori prospek (prospect theory) adalah salah satu kerangka untuk memahami pilihan ketika hasil dinilai sebagai perubahan relatif terhadap titik acuan, bukan hanya sebagai jumlah akhir. Titik acuan dapat berupa keadaan sekarang, harapan, atau harga yang diingat. Karena acuannya berbeda, perubahan yang sama dapat terasa sebagai keuntungan bagi satu orang dan kerugian bagi orang lain. Titik acuan dapat bergeser, sehingga penilaian tidak selalu konsisten sepanjang waktu.

Aversi kerugian (loss aversion) menggambarkan temuan bahwa kerugian dapat terasa lebih berat daripada keuntungan setara dalam banyak konteks. Ini kecenderungan, bukan angka tetap atau sifat yang sama pada semua orang. Besar dan arah efek dapat bergantung pada tugas, pengalaman, ukuran hasil, dan cara pertanyaan disampaikan; sebagian temuan efek perilaku juga sulit direplikasi dalam konteks berbeda. Karena itu, jangan menganggap satu rasio tertentu sebagai konstanta universal atau menyimpulkan keputusan seseorang hanya dari satu pilihan.

Fungsi nilai dalam teori prospek sering digambarkan secara kualitatif: nilai subjektif bergantung pada perubahan relatif terhadap acuan, dan bagian kerugian dapat memiliki kemiringan lebih curam daripada bagian keuntungan. Bentuk persis fungsi dan parameternya merupakan pilihan model, bukan peta lengkap psikologi individu. Ilustrasi visual di bab ini menggunakan bentuk sederhana untuk menunjukkan bagaimana parameter yang dipilih dapat mengubah evaluasi. Ia bukan alat ukur emosi atau prediktor keputusan finansial seseorang.

[[visual:psi-prospect-gamble]]

Pertimbangkan taruhan hipotetis: peluang 50% memperoleh 120 dan peluang 50% kehilangan 100, relatif terhadap titik acuan. Nilai harapan aritmetisnya 0,5×120−0,5×100=+10. Jika fungsi subjektif ilustratif menerapkan λ=2 pada kerugian, nilai subjektifnya 0,5×120−0,5×2×100=60−100=−40; model ini menolak taruhan. Nilai harapan dan nilai subjektif menjawab pertanyaan berbeda: yang pertama merata-ratakan hasil dengan probabilitas, sedangkan yang kedua memakai bobot nilai model.

Dalam model linear tersebut, nilai impas untuk keuntungan G didapat dari 0,5×G=0,5×2×100, sehingga G=200. Jika λ=1, nilai impasnya 100. Perubahan parameter mengubah hasil perhitungan, yang menunjukkan mengapa λ=2 di sini hanya asumsi ilustratif. Selain itu, taruhan nyata mungkin memiliki biaya, probabilitas yang tidak diketahui, batas likuiditas, atau hasil yang tidak dapat diringkas dalam satu angka. Nilai harapan positif tidak otomatis membuat pilihan cocok untuk setiap orang atau setiap situasi.

Titik acuan dapat membuat perubahan harga terasa sebagai rugi atau untung, meski keputusan ke depan seharusnya mempertimbangkan informasi kini. Namun, mengenali kemungkinan loss aversion bukan berarti semua orang perlu mengabaikan rasa kehilangan; emosi dapat menandai tujuan atau risiko yang dianggap penting. Prosedur yang lebih hati-hati adalah memisahkan keputusan masa lalu dari hasil berikutnya, menuliskan skenario dan probabilitas, lalu menilai hasil relatif terhadap tujuan yang relevan. Hindari mengubah model sederhana menjadi aturan transaksi.

Kerangka teori prospek menjelaskan pola yang dapat muncul, tetapi tidak setiap perilaku. Orang dapat memakai probabilitas secara berbeda, memiliki acuan yang berubah, atau mempertimbangkan faktor sosial dan kebutuhan. Penelitian tentang pilihan juga bergantung pada desain eksperimen dan penerapan lapangan. Gunakan teori sebagai pertanyaan: apa acuannya, bagaimana hasil dibingkai, dan apakah kerugian yang dibayangkan sebanding dengan risiko aktual? Jangan jadikan satu label sebagai diagnosis kepribadian.

Hubungan dengan keputusan sehari-hari / investasi / Web3: seseorang mungkin mengukur aset terhadap harga belinya lalu enggan menerima kerugian, atau justru mengambil risiko untuk kembali ke angka itu. Pisahkan harga masa lalu dari informasi dan kebutuhan saat ini; contoh ini untuk memahami bias, bukan nasihat membeli, menjual, atau menahan aset.

> **Poin kunci:** Teori prospek menilai perubahan relatif terhadap titik acuan; aversi kerugian dapat berperan, tetapi besar efeknya bergantung konteks.

**Batas bukti:** λ=2 dan taruhan di atas adalah parameter latihan, bukan konstanta universal atau ukuran risiko individu. Nilai harapan tidak mencakup semua tujuan, peluang, batasan, maupun konsekuensi nyata.

**Refleksi:**
1. Titik acuan apa yang memengaruhi cara seseorang menamai hasil sebagai rugi atau untung?
2. Informasi apa yang perlu diketahui sebelum membandingkan nilai harapan dan nilai subjektif?`,
    },
    {
      id: "psi2-b05-s4",
      title: "Sunk Cost, Overconfidence, dan Present Bias",
      minutes: 35,
      content: `# Sunk Cost, Overconfidence, dan Present Bias

## Tujuan belajar

Kamu akan membedakan biaya tertanam dari biaya masa depan, mengenali keyakinan berlebih dan bias masa kini, serta menjelaskan bagaimana preferensi dapat berbalik ketika waktu berubah.

Biaya tertanam (sunk cost) adalah biaya yang sudah dikeluarkan dan tidak dapat dipulihkan melalui pilihan sekarang. Biaya ini dapat memengaruhi perasaan, tetapi untuk keputusan marjinal ke depan, pertanyaan yang relevan adalah manfaat serta biaya tambahan dari tiap pilihan. Misalnya, seseorang telah mengeluarkan 500 untuk proyek. Menambah 100 lagi memberi hasil harapan 80. Hasil tambahan bersih adalah 80−100=−20; angka 500 yang telah keluar tidak berubah bila proyek diteruskan maupun dihentikan. Dalam perbandingan marjinal sederhana, biaya 500 diabaikan. Ini bukan berarti pengalaman masa lalu tidak penting: informasi dari pengeluaran sebelumnya mungkin memberi bukti baru mengenai prospek, tetapi uang yang tidak dapat dipulihkan bukan manfaat untuk terus membayar.

Keyakinan berlebih (overconfidence) adalah istilah umum untuk keyakinan yang terlalu tinggi dibanding ketepatan atau informasi yang tersedia. Ia dapat muncul sebagai perkiraan kemampuan yang berlebihan, rentang prediksi terlalu sempit, atau keyakinan bahwa suatu hasil lebih pasti daripada kenyataannya. Untuk memeriksanya, catat prediksi dan tingkat keyakinan sebelum hasil diketahui, gunakan rentang, lalu bandingkan prediksi dengan hasil berkali-kali. Satu prediksi tepat tidak membuktikan kalibrasi baik; satu kesalahan juga tidak membuktikan seseorang selalu terlalu percaya diri. Kualitas data dan peristiwa acak perlu dipertimbangkan.

Bias masa kini (present bias) mengacu pada kecenderungan memberi bobot sangat besar pada hasil segera dibanding hasil yang tertunda. Model β-δ memisahkan diskonto biasa δ per periode dari bobot tambahan β untuk hasil yang tertunda ketika dibandingkan dengan sekarang. Dalam contoh, β=0,7 dan δ=1. Pilih antara 100 sekarang dan 120 bulan depan: nilai sekarang model untuk opsi 120 adalah 0,7×120=84, kurang dari 100, sehingga model memilih 100 sekarang.

[[visual:psi-present-bias]]

Sekarang bandingkan pilihan di bulan keenam: 100 pada bulan keenam versus 120 pada bulan ketujuh. Dengan δ=1, nilai model masing-masing adalah 0,7×100=70 dan 0,7×120=84, sehingga pilihan 120 pada bulan ketujuh lebih tinggi. Preferensi yang berubah saat “sekarang” bergeser disebut pembalikan preferensi. Model ini menunjukkan satu kemungkinan pola, bukan klaim bahwa setiap orang akan menunda atau mengambil uang pada waktu tertentu.

Pembalikan preferensi dapat menyulitkan rencana: seseorang berniat mulai belajar minggu depan, tetapi ketika minggu depan menjadi hari ini, ia memilih kegiatan lain. Pre-commitment atau komitmen awal dapat membantu mengurangi keputusan berulang, seperti menyiapkan bahan dan menentukan waktu mulai. Komitmen perlu aman, sukarela, dan dapat disesuaikan ketika keadaan berubah. Tidak semua penundaan adalah bias; menunggu dapat masuk akal jika informasi atau sumber daya belum tersedia.

Ketiga konsep dapat bertemu dalam satu proyek. Seseorang mungkin terus membayar karena sudah mengeluarkan banyak, yakin mampu memprediksi hasil berikutnya, dan menunda evaluasi sampai esok. Pertanyaan pemisah dapat membantu: biaya apa yang benar-benar masih dapat dihindari? Apa yang akan saya pilih jika belum mengeluarkan biaya lama? Seberapa akurat prediksi saya sebelumnya? Apa akibat pilihan sekarang dan tertunda pada waktu yang sama? Jawaban perlu mempertimbangkan ketidakpastian, tujuan, dan dampak pada pihak lain.

Hubungan dengan keputusan sehari-hari / investasi / Web3: setelah membeli aset yang turun, biaya pembelian lampau tidak menentukan apakah informasi saat ini mendukung langkah berikutnya. Keyakinan pada prediksi harga perlu dibandingkan dengan rekam jejak, dan keputusan segera versus tertunda perlu mempertimbangkan risiko serta kebutuhan pribadi. Ini pembelajaran bias, bukan nasihat finansial.

> **Poin kunci:** Bedakan biaya yang sudah tak dapat dipulihkan dari biaya ke depan, kalibrasikan keyakinan dengan hasil, dan periksa perubahan nilai saat waktu bergeser.

**Batas bukti:** Contoh sunk cost dan model β-δ menyederhanakan keputusan serta tidak memprediksi individu. Penundaan, keyakinan, dan pilihan dipengaruhi konteks; model tidak menyarankan keputusan finansial atau diagnosis.

**Refleksi:**
1. Biaya mana yang telah menjadi sunk cost, dan biaya masa depan apa yang masih dapat dipilih?
2. Bagaimana kamu dapat memeriksa ketepatan keyakinan tanpa hanya mengingat prediksi yang berhasil?`,
    },
    {
      id: "psi2-b05-s5",
      title: "FOMO, Perilaku Kawanan, dan Keputusan Kelompok",
      minutes: 35,
      content: `# FOMO, Perilaku Kawanan, dan Keputusan Kelompok

## Tujuan belajar

Kamu akan menjelaskan bukti sosial, FOMO, dan kaskade informasi sebagai model sederhana, serta membedakan informasi pribadi dari keputusan yang terlihat dalam kelompok.

Bukti sosial (social proof) adalah penggunaan tindakan atau penilaian orang lain sebagai petunjuk ketika situasi tidak pasti. Mengikuti orang lain dapat masuk akal jika mereka memiliki informasi relevan yang tidak kita miliki. Namun, tindakan yang terlihat belum tentu mencerminkan bukti independen: banyak orang dapat meniru satu sumber yang sama, memiliki tujuan berbeda, atau mengikuti kebiasaan kelompok. Jumlah suara atau popularitas saja tidak membuktikan bahwa pilihan benar atau cocok untuk setiap orang.

Kaskade informasi (information cascade) adalah model sederhana ketika seseorang mengamati tindakan sebelumnya, lalu tindakannya sendiri lebih banyak mengikuti informasi sosial yang terlihat daripada sinyal pribadinya. Dalam ilustrasi, lima orang memiliki sinyal privat [A, A, B, B, B]. Orang pertama mendapat A dan memilih A. Orang kedua juga mendapat A lalu memilih A. Orang ketiga memiliki sinyal B, tetapi melihat dua keputusan A; ia dapat mengikuti mayoritas yang tampak. Setelah itu, tindakan orang berikutnya mungkin bergantung pada keputusan A yang terlihat, bukan sinyal privat mereka. Hasil model: kelima orang memilih A walau tiga dari lima sinyal privat adalah B.

[[visual:psi-herd-cascade]]

Model ini mengasumsikan orang mengamati keputusan terdahulu namun tidak mengetahui sinyal privat orang lain. Ketika dua keputusan awal searah, pengamat dapat menafsirkan bahwa keputusan tersebut menyandikan informasi. Tetapi di dunia nyata, keputusan awal mungkin mengikuti keberuntungan, tekanan, atau informasi yang sama; orang juga dapat memiliki pengetahuan yang tidak terlihat. Karena itu, kaskade adalah penjelasan mekanisme yang mungkin, bukan kesimpulan dari kerumunan yang kebetulan memilih sama. Sinyal privat pun tidak otomatis benar—perlu diuji berdasarkan kualitasnya.

FOMO (fear of missing out) adalah rasa khawatir tertinggal dari pengalaman atau peluang yang tampak dinikmati orang lain. Unggahan tentang keuntungan, acara, atau tren dapat membuat kesempatan terasa mendesak, sementara kerugian dan orang yang tidak ikut kurang terlihat. FOMO dapat menggeser perhatian dari tujuan sendiri ke tindakan kelompok. Menamai perasaan ini tidak berarti semua keputusan mengikuti tren salah. Pertanyaan yang berguna adalah: apa yang diketahui secara langsung, apa yang hanya dilihat sebagai tindakan orang lain, dan apa konsekuensi jika menunggu untuk memeriksa informasi?

Misalnya, seseorang melihat banyak akun membicarakan proyek aset digital. Ia mungkin mengira pembelian orang lain menandakan nilai yang kuat, tetapi bisa jadi semua unggahan merujuk pada kabar yang sama. Periksa sumber primer, konflik kepentingan, kemungkinan kerugian, likuiditas, dan apakah klaim dapat diverifikasi. Jangan menyamakan jumlah pesan dengan jumlah bukti independen. Mencari pandangan yang berlawanan dapat mengungkap asumsi, tetapi sumber alternatif juga harus dinilai mutunya.

Studi kasus lain adalah seseorang menahan aset yang merugi karena berharap kembali ke harga beli. Keputusan dapat dipengaruhi titik acuan dan aversi kerugian, biaya tertanam, keyakinan bahwa harga akan pulih, atau pengaruh komunitas yang terus menyatakan “jangan jual.” Setiap penjelasan adalah hipotesis, bukan label. Untuk memetakan masalah, bedakan harga beli yang telah terjadi, bukti tentang kondisi kini, batas risiko yang ditetapkan, dan alasan yang akan mengubah pandangan. Keputusan harus dibuat berdasarkan tujuan, toleransi risiko, dan informasi individu, bukan tekanan bab ini.

Keputusan kelompok dapat diperbaiki dengan mengumpulkan penilaian awal secara independen sebelum diskusi, meminta anggota menyatakan bukti dan ketidakpastian, serta mencatat alternatif. Cara ini dapat mengurangi dominasi suara pertama, tetapi tidak menjamin bebas bias. Peran fasilitator adalah menjaga agar keberatan dapat disampaikan dan fakta diverifikasi, bukan membuat konsensus tampak pasti. Jika keputusan mendesak, catat apa yang belum diketahui dan siapa yang bertanggung jawab meninjau ulang.

Hubungan dengan keputusan sehari-hari / investasi / Web3: saat komunitas ramai mempromosikan aset, tetapkan jeda untuk memeriksa sumber dan tulis alasan keputusan sebelum membaca opini tambahan. Bandingkan bukti independen, risiko, dan tujuan pribadi; popularitas bukan jaminan hasil dan contoh ini bukan saran investasi.

> **Poin kunci:** Tindakan kelompok dapat memberi petunjuk, tetapi kaskade dan FOMO dapat menyamarkan apakah orang mengikuti sinyal independen atau meniru keputusan yang sama.

**Batas bukti:** Kaskade lima orang adalah model mainan dengan asumsi informasi terbatas; perilaku sosial nyata lebih kompleks. FOMO dan kawanan tidak menjelaskan semua keputusan bersama, dan besarnya pengaruh berbeda antar konteks.

**Refleksi:**
1. Bagaimana membedakan bukti independen dari banyak orang yang mengulang sumber sama?
2. Informasi atau batas apa yang perlu ditetapkan sebelum tekanan kelompok memengaruhi keputusanmu?`,
    },
  ],
  chapterResources: {
    summary: [
      "Rasionalitas terbatas menjelaskan keputusan di bawah batas informasi, waktu, dan kapasitas pemrosesan.",
      "Satisficing berhenti ketika ambang terpenuhi; maximizing mencari alternatif lebih luas dengan biaya tambahan.",
      "Bias konfirmasi, jangkar, dan bingkai dapat memengaruhi pencarian, estimasi, serta perbandingan informasi.",
      "Teori prospek memakai titik acuan; aversi kerugian dapat muncul tetapi efeknya bergantung konteks.",
      "Biaya tertanam tidak berubah oleh pilihan kini; keputusan marjinal berfokus pada biaya dan manfaat ke depan.",
      "Keyakinan berlebih dan bias masa kini dapat diperiksa dengan catatan prediksi dan perbandingan waktu.",
      "Bukti sosial dan kaskade informasi dapat membuat keputusan kelompok mengikuti tindakan terlihat, bukan sinyal independen.",
      "Model angka dalam bab adalah ilustrasi edukatif, bukan konstanta universal atau saran keuangan.",
    ],
    glossary: [
      { term: "Rasionalitas terbatas", english: "Bounded rationality", definition: "Pengambilan keputusan dengan keterbatasan informasi, waktu, dan kapasitas pemrosesan." },
      { term: "Satisficing", english: "Satisficing", definition: "Menghentikan pencarian setelah pilihan memenuhi ambang kriteria yang dianggap cukup." },
      { term: "Heuristik", english: "Heuristic", definition: "Aturan praktis yang menyederhanakan penilaian atau pencarian." },
      { term: "Bias kognitif", english: "Cognitive bias", definition: "Kecenderungan berpikir yang dapat memengaruhi penilaian secara sistematis." },
      { term: "Bias konfirmasi", english: "Confirmation bias", definition: "Kecenderungan memperhatikan atau menafsirkan bukti yang sejalan dengan dugaan awal." },
      { term: "Efek jangkar", english: "Anchoring effect", definition: "Pengaruh informasi awal terhadap estimasi berikutnya." },
      { term: "Efek bingkai", english: "Framing effect", definition: "Perubahan penilaian yang dapat terjadi saat informasi setara dipresentasikan berbeda." },
      { term: "Titik acuan", english: "Reference point", definition: "Keadaan atau nilai pembanding yang digunakan untuk menilai perubahan." },
      { term: "Aversi kerugian", english: "Loss aversion", definition: "Kecenderungan kerugian terasa lebih berat daripada keuntungan setara dalam banyak konteks." },
      { term: "Teori prospek", english: "Prospect theory", definition: "Kerangka yang menjelaskan pilihan berdasarkan perubahan relatif terhadap titik acuan dan nilai subjektif." },
      { term: "Biaya tertanam", english: "Sunk cost", definition: "Biaya lampau yang tidak dapat dipulihkan melalui pilihan sekarang." },
      { term: "Keyakinan berlebih", english: "Overconfidence", definition: "Keyakinan yang melebihi ketepatan atau bukti yang tersedia pada suatu konteks." },
      { term: "Bias masa kini", english: "Present bias", definition: "Kecenderungan memberi bobot relatif besar pada hasil yang segera." },
      { term: "Diskonto", english: "Discounting", definition: "Pengurangan nilai subjektif hasil berdasarkan waktu atau faktor lain." },
      { term: "Pembalikan preferensi", english: "Preference reversal", definition: "Perubahan pilihan ketika konteks waktu atau titik perbandingan berubah." },
      { term: "Bukti sosial", english: "Social proof", definition: "Penggunaan tindakan orang lain sebagai petunjuk dalam situasi tidak pasti." },
      { term: "Kaskade informasi", english: "Information cascade", definition: "Model ketika keputusan terlihat dari orang sebelumnya mengalahkan penggunaan sinyal privat." },
      { term: "FOMO", english: "Fear of missing out", definition: "Kekhawatiran tertinggal dari peluang atau pengalaman yang tampak dimiliki orang lain." },
      { term: "Nudge", english: "Nudge", definition: "Perubahan arsitektur pilihan yang mengarahkan perilaku tanpa menghapus pilihan secara langsung." },
      { term: "Efek disposisi", english: "Disposition effect", definition: "Kecenderungan yang dilaporkan untuk melepas posisi untung dan menahan posisi rugi dalam konteks tertentu." },
      { term: "Arsitektur pilihan", english: "Choice architecture", definition: "Cara pilihan disusun dan disajikan yang dapat memengaruhi keputusan." },
    ],
    exercises: [
      {
        prompt: "Nilai opsi berurutan adalah [60, 72, 65, 80, 70, 85, 68, 78], ambang puas 75, dan biaya pemeriksaan 2 per opsi. Hitung nilai bersih satisficer dan maximizer.",
        solution: "1. Satisficer memeriksa 60, 72, 65, lalu berhenti pada 80 (opsi ke-4). 2. Biaya pencarian=4×2=8; nilai bersih=80−8=72. 3. Maximizer memeriksa 8 opsi dan memilih 85. 4. Biaya=8×2=16; nilai bersih=85−16=69. 5. Pada biaya ini satisficer unggul 3 poin bersih; hasil dapat berubah jika biaya atau urutan berubah.",
      },
      {
        prompt: "Gunakan estimasi = 50+0,3×(jangkar−50). Hitung untuk jangkar 100, 20, dan 50. Untuk bingkai 600 orang, hitung persentase 200 diselamatkan dan 400 meninggal.",
        solution: "1. Jangkar 100: 50+0,3×50=65. 2. Jangkar 20: 50+0,3×(−30)=41. 3. Jangkar 50: 50. 4. 200/600=33,3%; 400/600=66,7%. 5. Dengan kategori saling melengkapi, 200 diselamatkan setara dengan 400 meninggal.",
      },
      {
        prompt: "Gamble hipotetis memiliki peluang 50% menang 120 dan 50% kalah 100. Hitung nilai harapan, nilai subjektif dengan λ=2, dan gain impas untuk λ=2 serta λ=1.",
        solution: "1. Nilai harapan=0,5×120−0,5×100=+10. 2. Nilai subjektif=0,5×120−0,5×2×100=60−100=−40. 3. Untuk λ=2: 0,5×G=0,5×2×100, jadi G=200. 4. Untuk λ=1: 0,5×G=0,5×100, jadi G=100. 5. Parameter tersebut asumsi ilustratif, bukan ukuran universal.",
      },
      {
        prompt: "Dengan β=0,7 dan δ=1, bandingkan 100 sekarang dengan 120 bulan depan, lalu 100 bulan keenam dengan 120 bulan ketujuh. Hitung pula keputusan marjinal bila sudah keluar 500, tambahan biaya 100 memberi hasil harapan 80.",
        solution: "1. Sekarang: nilai opsi 120 bulan depan=0,7×120=84, sehingga model memilih 100 sekarang. 2. Bulan 6 vs 7: 0,7×100=70 dan 0,7×120=84, sehingga memilih 120 pada bulan 7; preferensi berbalik. 3. Biaya tambahan bersih=80−100=−20, sehingga dalam model marjinal jangan menambah 100. 4. Biaya 500 sudah tertanam dan tidak dipulihkan oleh keputusan lanjut/henti, jadi tidak dimasukkan sebagai manfaat ke depan.",
      },
    ],
    furtherReading: [
      { title: "Thinking, Fast and Slow", authors: "Daniel Kahneman" },
      { title: "Misbehaving", authors: "Richard H. Thaler" },
      { title: "Nudge", authors: "Richard H. Thaler dan Cass R. Sunstein" },
      { title: "Predictably Irrational", authors: "Dan Ariely (sebagian temuan buku populer ini perlu dibaca kritis)" },
      { title: "Judgment under Uncertainty", authors: "Daniel Kahneman, Paul Slovic, Amos Tversky (editor)" },
    ],
  },
};
