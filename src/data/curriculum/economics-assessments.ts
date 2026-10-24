import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";

const q = (
  id: string,
  concept: string,
  prompt: string,
  options: string[],
  answer: number,
  explanation: string
): AssessmentQuestion => ({ id, concept, prompt, options, answer, explanation });

export const ECONOMICS_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "eko-bab-1": [
    q("b1q1", "Kelangkaan", "Mengapa pilihan tetap diperlukan meskipun seseorang memiliki pendapatan tinggi?", ["Semua barang selalu langka secara fisik", "Waktu dan sumber daya lain tetap terbatas", "Harga selalu naik", "Pendapatan tinggi menghapus kebutuhan"], 1, "Waktu, tenaga, dan perhatian tetap terbatas meskipun uang banyak."),
    q("b1q2", "Mikro dan makro", "Kenaikan harga cabai akibat gagal panen di satu daerah terutama dianalisis sebagai...", ["Ekonomi makro", "Akuntansi nasional", "Ekonomi mikro", "Kebijakan fiskal"], 2, "Perubahan pada satu pasar lokal adalah pertanyaan mikro."),
    q("b1q3", "Kebutuhan dan keinginan", "Fungsi utama membedakan kebutuhan dan keinginan dalam anggaran adalah...", ["Memberi label moral pada pembeli", "Membuat semua keinginan dilarang", "Membantu menentukan prioritas saat dana terbatas", "Menghitung pajak"], 2, "Kategorisasi membantu memilih prioritas, bukan menghakimi."),
    q("b1q4", "Biaya peluang", "Kamu memakai dua jam untuk bekerja freelance Rp120.000 per jam, bukan menonton film. Biaya peluang waktu menonton adalah...", ["Rp120.000", "Rp240.000 pendapatan yang dilepas, jika pekerjaan tersedia", "Harga tiket film saja", "Semua pendapatan masa depan"], 1, "Alternatif terbaik yang dilepas adalah pendapatan dua jam yang realistis."),
    q("b1q5", "Insentif", "Toko memberi ongkir gratis jika belanja minimal Rp300.000. Insentif ini terutama dirancang agar pembeli...", ["Membeli lebih sedikit", "Menambah isi keranjang hingga ambang", "Berhenti membandingkan harga", "Membayar pajak"], 1, "Ambang gratis ongkir mendorong peningkatan nilai belanja."),
    q("b1q6", "Biaya relevan", "Biaya Rp200.000 yang sudah dibayar dan tidak dapat dikembalikan seharusnya diperlakukan sebagai...", ["Biaya masa depan yang selalu harus ditebus", "Sunk cost; evaluasi pilihan berdasarkan biaya dan manfaat ke depan", "Biaya peluang setiap pilihan", "Pendapatan"], 1, "Sunk cost tidak berubah berdasarkan pilihan sekarang."),
    q("b1q7", "Analisis keputusan", "Langkah terbaik sebelum membeli kursus mahal adalah...", ["Menganggap hasil kerja pasti naik", "Membandingkan tujuan, biaya penuh, alternatif, dan risiko", "Memilih yang paling sering diiklankan", "Mengabaikan waktu belajar"], 1, "Analisis keputusan mempertimbangkan manfaat, biaya, alternatif, dan ketidakpastian."),
    q("b1q8", "Aplikasi", "Seseorang tetap berlangganan layanan yang jarang dipakai karena “sudah bayar setahun”. Pertanyaan yang paling membantu adalah...", ["Berapa lama sudah berlangganan?", "Apakah biaya masa lalu bisa dikembalikan?", "Jika belum berlangganan, apakah saya akan memilih layanan ini sekarang?", "Apakah teman juga berlangganan?"], 2, "Pertanyaan ini memisahkan keputusan ke depan dari sunk cost."),
  ],
  "eko-bab-2": [
    q("b2q1", "Permintaan", "Dengan faktor lain tetap, harga suatu barang naik. Hukum permintaan memprediksi...", ["Kurva permintaan bergeser ke kanan", "Jumlah yang diminta turun sepanjang kurva", "Penawaran turun", "Pendapatan pembeli naik"], 1, "Perubahan harga barang sendiri mengubah jumlah diminta, bukan menggeser kurvanya."),
    q("b2q2", "Pergeseran permintaan", "Pendapatan konsumen meningkat dan kopi adalah barang normal. Kemungkinan yang terjadi...", ["Permintaan kopi bergeser ke kanan", "Penawaran kopi bergeser ke kiri", "Jumlah diminta turun karena harga", "Kurva tidak dapat berubah"], 0, "Pendapatan yang meningkat dapat meningkatkan permintaan barang normal."),
    q("b2q3", "Penawaran", "Teknologi produksi yang lebih efisien biasanya...", ["Menggeser penawaran ke kanan", "Menggeser permintaan ke kiri", "Mengurangi jumlah penjual otomatis", "Menaikkan biaya marginal setiap unit"], 0, "Efisiensi menurunkan biaya atau meningkatkan kapasitas penawaran."),
    q("b2q4", "Keseimbangan", "Harga berada jauh di bawah harga keseimbangan dan harga dapat menyesuaikan. Model dasar memprediksi...", ["Surplus", "Kekurangan", "Permintaan nol", "Penawaran tidak berubah"], 1, "Pada harga rendah, jumlah diminta melebihi jumlah ditawarkan."),
    q("b2q5", "Elastisitas", "Jika perubahan harga 10% menyebabkan jumlah diminta turun 20%, permintaan secara absolut adalah...", ["Inelastis", "Elastis", "Unit elastis", "Tidak dapat dihitung"], 1, "Elastisitas absolut kira-kira 20%/10%=2, di atas satu."),
    q("b2q6", "Struktur pasar", "Satu penjual dominan dan hambatan masuk tinggi paling dekat dengan model...", ["Persaingan sempurna", "Monopoli", "Persaingan monopolistik", "Pasar tenaga kerja"], 1, "Monopoli dicirikan satu penjual tanpa substitusi dekat dan hambatan masuk."),
    q("b2q7", "Eksternalitas", "Pabrik menimbulkan polusi yang merugikan warga sekitar tanpa biaya itu masuk harga produk. Ini contoh...", ["Barang normal", "Eksternalitas negatif", "Surplus konsumen", "Biaya tetap"], 1, "Sebagian biaya transaksi ditanggung pihak ketiga."),
    q("b2q8", "Aplikasi", "Gagal panen mengurangi pasokan beras sementara permintaan tetap. Prediksi arah dasar...", ["Harga turun, kuantitas naik", "Harga naik, kuantitas turun", "Harga dan kuantitas naik", "Harga dan kuantitas tetap"], 1, "Pergeseran penawaran ke kiri cenderung menaikkan harga dan menurunkan kuantitas."),
  ],
  "eko-bab-3": [
    q("b3q1", "Pendapatan", "Untuk anggaran belanja rumah tangga, ukuran pendapatan yang paling langsung tersedia adalah...", ["Pendapatan kotor sebelum potongan", "Pendapatan bersih yang diterima", "Nilai aset rumah", "Limit kartu kredit"], 1, "Anggaran kas menggunakan pendapatan yang tersedia setelah potongan."),
    q("b3q2", "Arus kas", "Seseorang memiliki aset tetapi tagihan jatuh tempo sebelum gaji masuk. Masalah yang mungkin terjadi adalah...", ["Kekayaan bersih negatif pasti", "Likuiditas/arus kas", "Inflasi", "Elastisitas"], 1, "Aset tidak selalu segera tersedia untuk membayar kewajiban."),
    q("b3q3", "Anggaran", "Anggaran yang baik sebaiknya...", ["Tidak pernah berubah", "Menggunakan pendapatan realistis dan ditinjau dengan transaksi aktual", "Mengabaikan biaya berkala", "Memastikan semua orang memakai rasio sama"], 1, "Anggaran adalah rencana yang diperbarui menggunakan data nyata."),
    q("b3q4", "Dana darurat", "Tujuan utama dana darurat adalah...", ["Mengejar return tertinggi", "Menghadapi pengeluaran/kehilangan pendapatan tak terduga", "Membeli barang diskon", "Menghindari semua pajak"], 1, "Dana darurat memprioritaskan ketahanan dan akses."),
    q("b3q5", "Kekayaan bersih", "Rumus kekayaan bersih adalah...", ["Pendapatan − pajak", "Aset − kewajiban", "Aset + pengeluaran", "Tabungan × bunga"], 1, "Kekayaan bersih membandingkan total aset dan kewajiban."),
    q("b3q6", "Tujuan keuangan", "Dana yang diperlukan dalam beberapa bulan ke depan sebaiknya mempertimbangkan terutama...", ["Likuiditas dan risiko penurunan nilai", "Hanya imbal hasil historis", "Aset paling volatil", "Proyeksi maksimal"], 0, "Horizon pendek membuat akses dan kestabilan nilai penting."),
    q("b3q7", "Evaluasi", "Mengapa surplus kas saja belum cukup untuk menilai kesehatan keuangan?", ["Surplus tidak pernah berguna", "Utang, likuiditas, perlindungan, dan tujuan juga berpengaruh", "Hanya harga saham yang penting", "Pendapatan bersih tidak bisa dihitung"], 1, "Kondisi keuangan memiliki beberapa dimensi."),
    q("b3q8", "Aplikasi", "Pendapatan bersih Rp4 juta, pengeluaran Rp3,5 juta. Surplus saat ini adalah...", ["Rp500.000", "Rp1.500.000", "Rp3.500.000", "Rp7.500.000"], 0, "Rp4.000.000 − Rp3.500.000 = Rp500.000."),
  ],
  "eko-bab-4": [
    q("b4q1", "Pokok dan bunga", "Jumlah awal yang dipinjam disebut...", ["Premi", "Pokok pinjaman", "Tenor", "Denda"], 1, "Pokok adalah jumlah pinjaman sebelum bunga dan biaya."),
    q("b4q2", "Satuan bunga", "Mengapa bunga 2% tidak cukup untuk membandingkan dua pinjaman?", ["Karena persentase tidak boleh dibandingkan", "Periode, metode, dan biaya lain perlu diketahui", "Bunga selalu berubah", "Pokok tidak relevan"], 1, "Angka harus memiliki periode dan basis perhitungan yang sama."),
    q("b4q3", "Bunga majemuk", "Dalam bunga majemuk, bunga periode berikutnya dapat dihitung atas...", ["Pokok awal saja", "Saldo pokok ditambah bunga sebelumnya", "Biaya administrasi saja", "Jumlah cicilan yang sudah dibayar"], 1, "Bunga yang ditambahkan ke saldo ikut menghasilkan bunga."),
    q("b4q4", "Tenor", "Memperpanjang tenor sering menurunkan cicilan bulanan tetapi dapat...", ["Menghapus seluruh bunga", "Menaikkan total pembayaran", "Menghapus pokok", "Menjamin pinjaman lebih aman"], 1, "Pembayaran bunga berlangsung lebih lama, bergantung kontrak."),
    q("b4q5", "Biaya kredit", "Perbandingan pinjaman seharusnya memasukkan...", ["Cicilan bulanan saja", "Dana bersih diterima, seluruh biaya, tenor, dan total pembayaran", "Warna aplikasi", "Hanya iklan bunga"], 1, "Total biaya bergantung pada semua arus pembayaran dan biaya wajib."),
    q("b4q6", "Rasio utang", "Rasio beban utang yang rendah berarti...", ["Pinjaman baru pasti aman", "Perlu tetap menilai kestabilan pendapatan dan kebutuhan", "Tidak ada risiko", "Bunga tidak perlu dibaca"], 1, "Rasio adalah indikator, bukan persetujuan otomatis."),
    q("b4q7", "Pelunasan", "Metode avalanche biasanya memprioritaskan...", ["Saldo terkecil", "Utang berbunga tertinggi sambil membayar minimum lainnya", "Utang terbaru", "Utang tanpa kontrak"], 1, "Prioritas bunga tinggi dapat mengurangi biaya total."),
    q("b4q8", "Keamanan", "Pemberi pinjaman meminta OTP untuk “memastikan persetujuan”. Tindakan paling aman...", ["Kirim segera", "Jangan bagikan OTP dan verifikasi melalui kanal resmi", "Kirim PIN saja", "Minta teman meneruskan"], 1, "OTP dan kode rahasia tidak boleh dibagikan."),
  ],
  "eko-bab-5": [
    q("b5q1", "Inflasi", "Inflasi merujuk pada...", ["Kenaikan harga satu barang saja", "Kenaikan tingkat harga umum secara berkelanjutan", "Penurunan semua harga", "Kenaikan pendapatan"], 1, "Inflasi adalah perubahan tingkat harga agregat, bukan satu barang."),
    q("b5q2", "IHK", "IHK digunakan untuk mengukur...", ["Perubahan biaya keranjang barang/jasa representatif", "Pendapatan setiap keluarga", "Nilai satu saham", "Pengangguran saja"], 0, "IHK mengikuti harga keranjang berbobot."),
    q("b5q3", "Daya beli", "Jika harga keranjang pribadi naik lebih cepat daripada pendapatan nominal, daya beli keranjang itu cenderung...", ["Naik", "Turun", "Tidak terpengaruh", "Menjadi nol"], 1, "Kenaikan harga yang lebih cepat mengurangi barang yang dapat dibeli."),
    q("b5q4", "Kebijakan moneter", "Dampak perubahan suku bunga kebijakan biasanya...", ["Langsung dan sama bagi semua", "Merambat melalui beberapa kanal dengan jeda", "Tidak memengaruhi pinjaman", "Hanya mengubah pajak"], 1, "Transmisi kebijakan melibatkan biaya pendanaan, kredit, ekspektasi, dan waktu."),
    q("b5q5", "Nilai tukar", "Mata uang domestik melemah dapat...", ["Selalu menguntungkan semua rumah tangga", "Menaikkan biaya sebagian barang impor", "Menghapus inflasi", "Tidak berdampak pada eksportir"], 1, "Biaya impor dapat meningkat; dampak keseluruhan beragam."),
    q("b5q6", "PDB", "PDB terutama mengukur...", ["Kesejahteraan lengkap setiap warga", "Nilai produksi barang dan jasa akhir dalam suatu wilayah/periode", "Kekayaan bersih rumah tangga", "Harga semua aset"], 1, "PDB adalah ukuran produksi agregat, bukan ukuran kesejahteraan lengkap."),
    q("b5q7", "Fiskal", "Kebijakan fiskal menggunakan...", ["Belanja dan pajak pemerintah", "Suku bunga kartu kredit saja", "Harga saham", "Nilai tukar tetap"], 0, "Instrumen fiskal utama adalah penerimaan dan pengeluaran pemerintah."),
    q("b5q8", "Data", "Saat membaca data inflasi, hal penting yang perlu dicatat adalah...", ["Periode, cakupan, dan sumber", "Warna grafik", "Jumlah komentar di media sosial", "Prediksi tanpa asumsi"], 0, "Definisi dan periode diperlukan untuk interpretasi yang benar."),
  ],
  "eko-bab-6": [
    q("b6q1", "Risiko", "Mengapa peluang kejadian tidak selalu dapat dinyatakan dengan angka presisi?", ["Semua risiko sama", "Data mungkin tidak cukup untuk mengestimasi probabilitas", "Risiko tidak pernah terjadi", "Semua orang memiliki informasi lengkap"], 1, "Ketidakpastian sering membatasi estimasi probabilitas yang andal."),
    q("b6q2", "Likuiditas", "Likuiditas berarti...", ["Tingkat bunga pinjaman", "Kemudahan mengakses uang tanpa kehilangan nilai besar", "Jumlah utang", "Nilai pajak"], 1, "Aset likuid dapat digunakan relatif cepat dengan biaya rendah."),
    q("b6q3", "Asuransi", "Asuransi terutama berfungsi untuk...", ["Menjamin semua kerugian dibayar", "Mengalihkan sebagian risiko sesuai syarat kontrak", "Menghasilkan return pasti", "Menghapus kebutuhan dana darurat"], 1, "Perlindungan terbatas pada risiko dan ketentuan polis."),
    q("b6q4", "Polis", "Komponen yang harus dibaca selain premi adalah...", ["Pengecualian, batas manfaat, masa tunggu, dan klaim", "Logo pemasaran", "Jumlah pengikut agen", "Testimoni saja"], 0, "Syarat polis menentukan perlindungan yang benar-benar berlaku."),
    q("b6q5", "Penipuan", "Janji keuntungan tinggi pasti dan tekanan transfer sekarang adalah...", ["Bukti produk aman", "Tanda bahaya untuk berhenti dan memverifikasi", "Alasan mengirim OTP", "Jaminan regulator"], 1, "Jaminan return dan tekanan mendesak adalah sinyal risiko."),
    q("b6q6", "Perlindungan data", "Orang tak dikenal meminta seed phrase untuk memulihkan aset. Kamu sebaiknya...", ["Mengirim sebagian", "Tidak membagikannya; seed phrase memberi akses penuh", "Mengirim lewat telepon", "Meminta diskon"], 1, "Seed phrase rahasia memberi kendali aset."),
    q("b6q7", "Kontingensi", "Rencana darurat yang berguna mencakup...", ["Kontak, dokumen, kewajiban, dan tindakan awal", "Prediksi pasti masa depan", "Kata sandi dibagikan ke grup", "Hanya target investasi"], 0, "Rencana praktis mempersiapkan tindakan ketika gangguan terjadi."),
    q("b6q8", "Diversifikasi", "Diversifikasi pendapatan dapat mengurangi ketergantungan, tetapi...", ["Tidak memerlukan waktu", "Memiliki biaya, kompleksitas, dan risiko sendiri", "Menjamin laba", "Selalu cocok untuk semua orang"], 1, "Diversifikasi bukan tanpa biaya atau jaminan."),
  ],
  "eko-bab-7": [
    q("b7q1", "Investasi", "Perbedaan utama menabung dan investasi adalah...", ["Menabung berisiko nol", "Investasi memiliki risiko perubahan nilai demi kemungkinan pertumbuhan", "Menabung selalu merugi", "Investasi menjamin return"], 1, "Investasi dapat berfluktuasi dan hasilnya tidak pasti."),
    q("b7q2", "Risiko-return", "Pernyataan yang tepat mengenai return historis adalah...", ["Menjamin return masa depan", "Memberi konteks masa lalu tetapi bukan jaminan", "Tidak pernah berguna", "Menghilangkan risiko"], 1, "Kinerja historis tidak memastikan hasil mendatang."),
    q("b7q3", "Majemuk", "Bunga majemuk terjadi ketika...", ["Bunga tidak dibayar", "Hasil yang diinvestasikan kembali ikut menghasilkan hasil", "Pajak dihapus", "Nilai selalu naik"], 1, "Hasil yang ditambahkan dapat menjadi basis pertumbuhan periode berikutnya."),
    q("b7q4", "Saham", "Membeli saham berarti memiliki...", ["Kewajiban perusahaan tanpa hak", "Bagian kepemilikan sesuai hak saham", "Deposito tanpa risiko", "Kupon tetap"], 1, "Saham merepresentasikan kepemilikan dengan hak tertentu."),
    q("b7q5", "Obligasi", "Risiko obligasi dapat mencakup...", ["Hanya risiko cuaca", "Gagal bayar, perubahan suku bunga, inflasi, dan likuiditas", "Tidak ada risiko", "Hanya biaya broker"], 1, "Obligasi menghadapi risiko penerbit dan pasar."),
    q("b7q6", "Diversifikasi", "Diversifikasi...", ["Menghapus semua risiko", "Dapat menyebar eksposur tetapi tidak menjamin hasil", "Membuat aset selalu naik", "Mengganti kebutuhan memahami produk"], 1, "Diversifikasi mengurangi sebagian risiko konsentrasi, bukan semua risiko."),
    q("b7q7", "Alokasi aset", "Alokasi aset sebaiknya mempertimbangkan...", ["Hanya tren media sosial", "Tujuan, horizon, likuiditas, dan kemampuan menanggung risiko", "Return tertinggi tahun lalu", "Jumlah iklan"], 1, "Kesesuaian bergantung pada kondisi dan tujuan investor."),
    q("b7q8", "Biaya", "Return bersih sebaiknya mempertimbangkan...", ["Biaya, pajak, dan inflasi yang relevan", "Hanya angka sebelum biaya", "Jumlah likes", "Harga beli saja"], 0, "Biaya dan pajak memengaruhi hasil yang diterima."),
  ],
  "eko-bab-8": [
    q("b8q1", "Bias", "Confirmation bias membuat seseorang cenderung...", ["Mencari bukti yang menyangkal keyakinannya", "Memilih informasi yang mendukung keyakinan awal", "Menghitung bunga", "Mengukur inflasi"], 1, "Bias ini menyaring informasi sesuai kepercayaan yang ada."),
    q("b8q2", "Loss aversion", "Loss aversion dapat membuat investor...", ["Merasa rugi dan untung setara selalu", "Menahan aset rugi terlalu lama agar tidak mengakui kerugian", "Mengabaikan harga beli", "Selalu mengambil risiko lebih rendah"], 1, "Keengganan merealisasikan kerugian dapat menghambat evaluasi rasional."),
    q("b8q3", "FOMO", "Tindakan yang membantu menghadapi FOMO adalah...", ["Transfer sebelum kesempatan hilang", "Jeda, cek bukti, dan bandingkan dengan rencana", "Ikuti keputusan grup", "Pinjam dana agar ikut"], 1, "Jeda mengurangi tekanan dan mengembalikan keputusan ke tujuan."),
    q("b8q4", "Tekanan sosial", "Testimoni teman tentang keuntungan investasi...", ["Menjamin hasil sama", "Merupakan anekdot yang tetap perlu diverifikasi", "Menggantikan prospektus", "Menghapus risiko"], 1, "Pengalaman pribadi bukan jaminan hasil orang lain."),
    q("b8q5", "Belanja impulsif", "Cara sederhana menambah friksi untuk belanja impulsif adalah...", ["Simpan kartu pada semua aplikasi", "Terapkan jeda dan daftar belanja", "Belanja saat emosi tinggi", "Abaikan anggaran"], 1, "Jeda memberi waktu untuk menilai kembali kebutuhan."),
    q("b8q6", "Evaluasi klaim", "Informasi apa yang penting untuk mengevaluasi klaim return?", ["Sumber, periode, biaya, risiko, dan insentif", "Warna logo", "Jumlah emoji", "Jumlah orang yang membagikan"], 0, "Konteks dan sumber dapat mengungkap batas klaim."),
    q("b8q7", "Keamanan", "Tawaran meminta OTP agar dana investasi cair. Respons aman...", ["Kirim OTP", "Jangan bagikan kode dan verifikasi melalui kanal resmi", "Kirim screenshot rekening", "Bayar biaya lewat tautan"], 1, "OTP memberi akses dan tidak boleh dibagikan."),
    q("b8q8", "Rencana", "Rencana keuangan yang sehat sebaiknya...", ["Menganggap proyeksi sebagai kepastian", "Memiliki tujuan, asumsi, risiko, dan jadwal tinjau", "Tidak pernah berubah", "Hanya berdasarkan tren"], 1, "Rencana harus transparan terhadap asumsi dan diperbarui."),
  ],
};

const sharedRubric = "Nilai 0–5 untuk tiap kriteria: 0 = tidak dijawab/tidak relevan; 1 = sangat lemah; 2 = sebagian benar; 3 = cukup akurat; 4 = kuat dengan alasan dan penerapan; 5 = akurat, lengkap, dan jelas. Skor dua uraian masing-masing maksimal 20 poin.";

export const ECONOMICS_ESSAYS: Record<string, EssayPrompt[]> = {
  "eko-bab-1": [
    { id: "b1e1", prompt: "Pilih satu keputusan finansial nyata atau hipotetis. Jelaskan kelangkaan, alternatif terbaik yang dikorbankan, biaya dan manfaat ke depan, serta risiko yang belum pasti.", rubric: sharedRubric },
    { id: "b1e2", prompt: "Berikan contoh sunk cost. Jelaskan mengapa biaya masa lalu tidak menentukan pilihan ke depan dan informasi baru apa yang tetap relevan.", rubric: sharedRubric },
  ],
  "eko-bab-2": [
    { id: "b2e1", prompt: "Analisis dampak hipotetis gagal panen dan kenaikan pendapatan konsumen pada pasar beras. Jelaskan kurva yang bergeser dan apa yang belum dapat dipastikan.", rubric: sharedRubric },
    { id: "b2e2", prompt: "Jelaskan satu eksternalitas dalam kehidupan sehari-hari dan evaluasi satu kebijakan yang mungkin mengatasinya beserta trade-off.", rubric: sharedRubric },
  ],
  "eko-bab-3": [
    { id: "b3e1", prompt: "Buat kerangka anggaran bulanan berdasarkan pendapatan bersih hipotetis. Jelaskan prioritas, dana darurat, dan bagaimana kamu menyesuaikan rencana jika pendapatan turun.", rubric: sharedRubric },
    { id: "b3e2", prompt: "Jelaskan perbedaan arus kas, likuiditas, dan kekayaan bersih dengan satu contoh rumah tangga.", rubric: sharedRubric },
  ],
  "eko-bab-4": [
    { id: "b4e1", prompt: "Bandingkan dua pinjaman hipotetis dengan cicilan dan tenor berbeda. Sebutkan data yang harus diminta agar biaya total dapat dibandingkan dengan adil.", rubric: sharedRubric },
    { id: "b4e2", prompt: "Jelaskan strategi melunasi beberapa utang dan kapan metode avalanche atau snowball mungkin lebih cocok.", rubric: sharedRubric },
  ],
  "eko-bab-5": [
    { id: "b5e1", prompt: "Jelaskan bagaimana kenaikan inflasi dapat memengaruhi daya beli rumah tangga yang pendapatannya tidak berubah. Sebutkan batas penggunaan indeks umum.", rubric: sharedRubric },
    { id: "b5e2", prompt: "Uraikan satu jalur transmisi perubahan suku bunga kebijakan ke keputusan rumah tangga dan jelaskan mengapa dampaknya tidak seketika.", rubric: sharedRubric },
  ],
  "eko-bab-6": [
    { id: "b6e1", prompt: "Susun langkah awal menghadapi gangguan pendapatan rumah tangga. Jelaskan peran likuiditas, perlindungan, dan prioritas pembayaran.", rubric: sharedRubric },
    { id: "b6e2", prompt: "Evaluasi tawaran investasi hipotetis dengan keuntungan tinggi yang dijamin dan tekanan transfer cepat. Sebutkan langkah verifikasi yang aman.", rubric: sharedRubric },
  ],
  "eko-bab-7": [
    { id: "b7e1", prompt: "Jelaskan bagaimana tujuan, horizon waktu, likuiditas, dan kemampuan menanggung risiko memengaruhi alokasi aset hipotetis.", rubric: sharedRubric },
    { id: "b7e2", prompt: "Jelaskan mengapa diversifikasi tidak menjamin keuntungan dan biaya apa saja yang perlu dipertimbangkan saat mengevaluasi return.", rubric: sharedRubric },
  ],
  "eko-bab-8": [
    { id: "b8e1", prompt: "Analisis bagaimana FOMO dan confirmation bias dapat memengaruhi keputusan investasi. Susun langkah untuk mengevaluasi klaim secara lebih objektif.", rubric: sharedRubric },
    { id: "b8e2", prompt: "Rancang aturan pribadi yang realistis untuk mengurangi belanja impulsif atau keputusan finansial saat emosi tinggi.", rubric: sharedRubric },
  ],
};

export const FINAL_EXAM_QUESTIONS = Object.values(ECONOMICS_QUIZZES).map((questions) => questions[0]);
export const FINAL_EXAM_ESSAYS: EssayPrompt[] = [
  { id: "finale1", prompt: "Gunakan konsep dari sedikitnya tiga bab untuk menganalisis keputusan hipotetis rumah tangga menghadapi penurunan pendapatan dan tawaran pinjaman.", rubric: sharedRubric },
  { id: "finale2", prompt: "Evaluasi klaim investasi hipotetis dengan mempertimbangkan risiko, biaya, horizon, bias, dan cara verifikasi.", rubric: sharedRubric },
];
