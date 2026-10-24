import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";

function q(
  id: string,
  concept: string,
  prompt: string,
  options: string[],
  answer: number,
  correctReason: string,
  distractorReasons: string[]
): AssessmentQuestion {
  let distractorIndex = 0;
  const wrong = options
    .map((_, index) => index === answer
      ? null
      : `${String.fromCharCode(65 + index)}. ${distractorReasons[distractorIndex++]}`)
    .filter(Boolean)
    .join(" ");
  return {
    id,
    concept,
    prompt,
    options,
    answer,
    explanation: `Jawaban benar: ${options[answer]}. ${correctReason} Pengecoh: ${wrong}`,
  };
}

export const ECONOMICS_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "eko2-b01": [
    q("eko2-b01-q01", "Konsep • Kelangkaan", "Mengapa kelangkaan tetap menjadi masalah ekonomi bagi seseorang yang memiliki banyak uang?", [
      "Karena seluruh barang pasti langka secara fisik",
      "Karena waktu, perhatian, keterampilan, dan kapasitas tetap terbatas",
      "Karena semua harga selalu naik",
      "Karena pendapatan tinggi membuat kebutuhan tidak terbatas",
    ], 1, "Uang adalah satu sumber daya; waktu dan kapasitas penggunaan tidak dapat dipakai untuk semua tujuan sekaligus.", [
      "Kelangkaan ekonomi tidak mensyaratkan barang langka secara fisik; yang dibandingkan adalah sumber daya dengan alternatif penggunaannya.",
      "Pilihan ini keliru karena inflasi bukan alasan universal bagi kelangkaan sumber daya.",
      "Pendapatan tinggi tidak menghapus kendala waktu atau pilihan penggunaan sumber daya.",
    ]),
    q("eko2-b01-q02", "Konsep • PPF", "Titik yang berada di dalam PPF, dengan teknologi dan sumber daya yang sama, paling tepat menunjukkan...", [
      "Kombinasi yang mustahil dicapai",
      "Kombinasi paling adil bagi masyarakat",
      "Kapasitas produksi belum digunakan sepenuhnya atau dialokasikan tidak efisien",
      "Pertumbuhan ekonomi yang sudah terjadi",
    ], 2, "Titik di dalam batas dapat dicapai tetapi masih menyisakan kapasitas menurut model.", [
      "Titik di luar PPF, bukan di dalamnya, belum dapat dicapai dengan kapasitas yang ditetapkan.",
      "PPF menunjukkan kemungkinan produksi, bukan distribusi atau keadilan hasil.",
      "Pertumbuhan biasanya menggeser batas produksi, bukan ditunjukkan oleh titik di dalam batas lama.",
    ]),
    q("eko2-b01-q03", "Konsep • Marginal", "Aturan keputusan marginal sederhana menyarankan menambah satu unit selama...", [
      "Manfaat marginal lebih besar atau sama dengan biaya marginal",
      "Manfaat total sudah positif",
      "Biaya masa lalu dapat diperoleh kembali",
      "Harga barang selalu sama dengan manfaat total",
    ], 0, "Perbandingan MB dengan MC menilai perubahan pada unit berikutnya.", [
      "Manfaat total positif belum menjamin unit tambahan layak; biaya tambahan juga harus dibandingkan.",
      "Sunk cost yang tak dapat dipulihkan tidak menentukan apakah unit berikutnya menguntungkan.",
      "Harga dan manfaat total adalah konsep berbeda; aturan marginal membandingkan tambahan manfaat dan tambahan biaya.",
    ]),
    q("eko2-b01-q04", "Konsep • Keunggulan komparatif", "Apa yang menentukan keunggulan komparatif suatu pihak dalam menghasilkan barang?", [
      "Output absolut terbesar pada semua produk",
      "Harga jual paling tinggi",
      "Biaya peluang yang lebih rendah daripada pihak pembanding",
      "Jumlah pekerja paling banyak",
    ], 2, "Keunggulan komparatif ditentukan oleh biaya peluang relatif.", [
      "Output absolut berkaitan dengan keunggulan absolut, bukan dengan biaya relatif yang dikorbankan.",
      "Harga jual dapat berubah dan tidak mengukur sumber daya alternatif yang dilepas.",
      "Jumlah pekerja sendiri tidak menunjukkan biaya peluang per unit output.",
    ]),
    q("eko2-b01-q05", "Hitungan • Biaya peluang", "Satu jam kerja dapat menghasilkan 12 unit A atau 6 unit B. Jika satu unit A tambahan dibuat dengan mengalihkan kapasitas dari B, berapa biaya peluang 1 unit A?", [
      "0,5 unit B",
      "2 unit B",
      "6 unit B",
      "12 unit B",
    ], 0, "Biaya peluang A = 6 unit B ÷ 12 unit A = 0,5 unit B per A.", [
      "2 adalah rasio kebalikan, yaitu biaya peluang 1 B dalam unit A.",
      "6 unit B adalah total output B per jam, bukan biaya untuk satu unit A.",
      "12 adalah output A per jam, bukan jumlah B yang dikorbankan per A.",
    ]),
    q("eko2-b01-q06", "Hitungan • Manfaat marginal", "Manfaat marginal tiga unit berturut-turut adalah 30, 24, dan 15. Biaya marginalnya 10, 18, dan 20. Berapa unit dipilih menurut aturan MB ≥ MC?", [
      "1 unit",
      "2 unit",
      "3 unit",
      "0 unit",
    ], 1, "Unit pertama memberi MB−MC=20 dan unit kedua 6; unit ketiga memberi 15−20=−5. Pilih dua unit.", [
      "Berhenti setelah unit pertama mengabaikan bahwa unit kedua masih memberi manfaat marginal lebih besar dari biayanya.",
      "Unit ketiga menurunkan manfaat bersih karena biaya marginal melebihi manfaatnya.",
      "Unit pertama memiliki manfaat marginal 30 yang lebih besar daripada biaya 10, sehingga tidak memilih apa pun mengabaikan manfaat positif.",
    ]),
    q("eko2-b01-q07", "Hitungan • Pilihan alternatif", "Kamu memilih belajar satu sore. Alternatif realistis terbaik yang dilepas adalah kerja 4 jam dengan upah bersih Rp50.000 per jam. Berapa nilai pendapatan yang menjadi biaya peluang?", [
      "Rp50.000",
      "Rp100.000",
      "Rp200.000",
      "Rp250.000",
    ], 2, "Empat jam × Rp50.000 per jam = Rp200.000 pendapatan yang dilepas.", [
      "Ini hanya nilai satu jam, padahal alternatif berlangsung empat jam.",
      "Ini menghitung dua jam, bukan empat jam yang tersedia.",
      "Perkalian upah dan jam kerja adalah Rp200.000; angka lain tidak mengikuti data.",
    ]),
    q("eko2-b01-q08", "Kasus • Insentif", "Sebuah toko memberi diskon setelah keranjang melewati ambang tertentu. Pembeli menambah barang yang tidak dibutuhkan hanya agar memperoleh diskon. Analisis paling tepat adalah...", [
      "Diskon pasti menghemat uang karena persentase harga turun",
      "Perlu membandingkan nilai barang tambahan dengan biaya bersih setelah diskon",
      "Diskon menghapus biaya peluang",
      "Pembelian menunjukkan hukum permintaan tidak berlaku",
    ], 1, "Keputusan ditentukan oleh biaya tambahan dan manfaat barang tambahan, bukan label promosi saja.", [
      "Total belanja dapat naik; potongan harga tidak menjamin penghematan dibanding keranjang awal.",
      "Biaya peluang tetap ada karena uang dapat digunakan untuk alternatif lain.",
      "Satu keputusan pembeli tidak menyangkal hukum permintaan; perubahan jumlah bisa dipengaruhi insentif lain.",
    ]),
    q("eko2-b01-q09", "Kasus • Sunk cost", "Kamu membayar tiket yang tak dapat dikembalikan, lalu jatuh sakit sebelum acara. Pertanyaan ekonomi yang paling relevan untuk keputusan sekarang ialah...", [
      "Bagaimana cara memastikan harga tiket kembali?",
      "Apakah saya harus hadir agar biaya masa lalu tidak sia-sia?",
      "Manfaat dan risiko tambahan apa yang timbul jika saya hadir dibanding beristirahat?",
      "Berapa banyak orang lain tetap datang?",
    ], 2, "Biaya masa lalu tidak berubah; pilihan sekarang membandingkan konsekuensi ke depan.", [
      "Premis menyebut tiket tidak dapat dikembalikan, jadi pemulihan biaya bukan alternatif yang tersedia.",
      "Hadir tidak mengembalikan uang dan dapat menambah biaya atau risiko kesehatan.",
      "Perilaku orang lain dapat memberi konteks, tetapi tidak menggantikan perbandingan manfaat dan biaya bagi pengambil keputusan.",
    ]),
    q("eko2-b01-q10", "Kasus • PPF dan pertumbuhan", "Sebuah koperasi melatih pekerja dan memperbaiki peralatan. Dalam diagram PPF, perubahan kapasitas jangka panjang ini paling tepat digambarkan sebagai...", [
      "Pergerakan sepanjang kurva lama akibat perubahan harga saja",
      "Pergeseran batas kemungkinan produksi ke luar, jika produktivitas benar-benar meningkat",
      "Titik produksi menjadi tidak efisien",
      "Biaya peluang menjadi nol untuk semua produk",
    ], 1, "Produktivitas dan kapasitas yang membaik memungkinkan kombinasi output yang sebelumnya di luar batas lama.", [
      "Perubahan kapasitas bukan sekadar gerak sepanjang PPF yang tetap.",
      "Peningkatan produktivitas tidak dengan sendirinya membuat penggunaan kapasitas tidak efisien.",
      "Sumber daya tetap terbatas sehingga biaya peluang umumnya tidak otomatis menjadi nol.",
    ]),
  ],
  "eko2-b02": [
    q("eko2-b02-q01", "Konsep • Permintaan", "Definisi permintaan yang paling tepat adalah...", [
      "Keinginan memiliki barang tanpa mempertimbangkan kemampuan membayar",
      "Hubungan harga dengan jumlah yang bersedia dan mampu dibeli dalam periode tertentu",
      "Jumlah barang yang saat ini tersimpan di toko",
      "Jumlah transaksi yang pernah terjadi sepanjang waktu",
    ], 1, "Permintaan menghubungkan harga dengan jumlah yang bersedia dan mampu dibeli pada periode yang ditentukan.", [
      "Keinginan tanpa kemampuan membeli belum tentu menjadi permintaan efektif.",
      "Stok adalah persediaan, bukan jadwal hubungan harga-jumlah yang diinginkan pembeli.",
      "Riwayat transaksi tidak menggambarkan seluruh pasangan harga-kuantitas pada periode tertentu.",
    ]),
    q("eko2-b02-q02", "Konsep • Gerak sepanjang kurva", "Harga barang itu sendiri turun, dengan faktor lain tetap. Istilah yang tepat adalah...", [
      "Permintaan bergeser ke kanan",
      "Penawaran bergeser ke kiri",
      "Jumlah yang diminta meningkat melalui gerak sepanjang kurva permintaan",
      "Jumlah yang ditawarkan meningkat",
    ], 2, "Perubahan harga barang itu sendiri mengubah kuantitas yang diminta pada kurva yang sama.", [
      "Pergeseran permintaan berasal dari faktor selain harga barang itu sendiri.",
      "Tidak ada informasi bahwa kondisi biaya atau penawaran berubah.",
      "Perubahan harga dapat mengubah jumlah diminta, bukan otomatis jumlah yang ditawarkan.",
    ]),
    q("eko2-b02-q03", "Konsep • Penawaran", "Teknologi produksi yang menurunkan biaya per unit biasanya menyebabkan...", [
      "Kurva penawaran bergeser ke kanan",
      "Kurva permintaan bergeser ke kiri",
      "Gerak sepanjang kurva penawaran akibat harga barang naik",
      "Jumlah penjual pasti menjadi satu",
    ], 0, "Biaya lebih rendah memungkinkan produsen menawarkan lebih banyak pada berbagai harga.", [
      "Teknologi produksi memengaruhi keputusan penjual, bukan secara langsung preferensi pembeli.",
      "Tidak disebutkan harga barang naik; perubahan teknologi menggeser jadwal penawaran.",
      "Efisiensi produksi tidak menyiratkan jumlah penjual turun menjadi satu.",
    ]),
    q("eko2-b02-q04", "Konsep • Ekuilibrium", "Pada harga pasar tertentu, Qs lebih besar daripada Qd. Kondisi ini disebut...", [
      "Kekurangan",
      "Ekuilibrium",
      "Surplus penawaran",
      "Pergeseran permintaan",
    ], 2, "Jika jumlah yang ditawarkan melampaui jumlah yang diminta, terdapat surplus penawaran pada harga tersebut.", [
      "Kekurangan terjadi saat Qd lebih besar daripada Qs.",
      "Ekuilibrium mensyaratkan Qs sama dengan Qd.",
      "Pergeseran permintaan adalah perubahan seluruh jadwal, bukan nama ketidakseimbangan kuantitas.",
    ]),
    q("eko2-b02-q05", "Hitungan • Ekuilibrium", "Jika Qd = 100 − 5P dan Qs = 20 + 5P, berapakah harga ekuilibrium P*?", [
      "4",
      "6",
      "8",
      "10",
    ], 2, "Samakan 100−5P=20+5P; 80=10P, sehingga P*=8.", [
      "P=4 tidak menyamakan jumlah diminta dan ditawarkan.",
      "P=6 menghasilkan Qd=70 dan Qs=50, bukan jumlah sama.",
      "P=10 menghasilkan Qd=50 dan Qs=70, sehingga terjadi surplus, bukan ekuilibrium.",
    ]),
    q("eko2-b02-q06", "Hitungan • Kekurangan", "Dengan Qd = 90 − 3P dan Qs = 18 + 3P, pada P=10 terjadi...", [
      "Surplus 12 unit",
      "Kekurangan 12 unit",
      "Ekuilibrium pada 54 unit",
      "Kekurangan 30 unit",
    ], 1, "Qd=90−30=60 dan Qs=18+30=48; kekurangan=60−48=12 unit.", [
      "Qd lebih besar, jadi arah selisihnya kekurangan, bukan surplus.",
      "Jumlah ekuilibrium 54 berlaku pada P=12, bukan P=10.",
      "Selisih jumlah adalah 60−48=12, bukan 30.",
    ]),
    q("eko2-b02-q07", "Hitungan • Pergeseran permintaan", "Semula Qd = 100 − 5P dan Qs = 20 + 5P. Jika permintaan bergeser menjadi Qd = 120 − 5P, berapa ekuilibrium baru (P*, Q*)?", [
      "(8, 60)",
      "(10, 70)",
      "(12, 60)",
      "(10, 50)",
    ], 1, "120−5P=20+5P memberi P=10; substitusi memberi Q=120−50=70.", [
      "Pasangan ini adalah ekuilibrium lama sebelum pergeseran permintaan.",
      "Ini hasil persamaan baru dan konsisten dengan penawaran: 20+5×10=70.",
      "P=12 memberi Qd=60 dan Qs=80, bukan jumlah yang sama.",
    ]),
    q("eko2-b02-q08", "Kasus • Substitusi", "Harga kopi naik sementara faktor lain tetap. Jika teh adalah substitusi bagi sebagian pembeli, prediksi yang paling sesuai ialah...", [
      "Permintaan teh dapat bergeser ke kanan",
      "Jumlah teh yang diminta pasti turun",
      "Penawaran teh bergeser ke kiri",
      "Ekuilibrium teh tidak mungkin berubah",
    ], 0, "Sebagian pembeli dapat beralih dari kopi ke teh, sehingga pada setiap harga teh permintaan berpotensi meningkat.", [
      "Kenaikan harga kopi dapat membuat pembeli beralih ke teh, bukan selalu mengurangi pembelian teh.",
      "Tidak ada informasi biaya produsen teh berubah.",
      "Pergeseran permintaan teh dapat mengubah ekuilibrium pasar teh.",
    ]),
    q("eko2-b02-q09", "Kasus • Gangguan penawaran", "Gangguan logistik mengurangi barang yang sampai di pasar, sedangkan permintaan tetap. Model dasar memprediksi...", [
      "Penawaran bergeser ke kanan; harga turun dan kuantitas naik",
      "Penawaran bergeser ke kiri; harga cenderung naik dan kuantitas turun",
      "Permintaan bergeser ke kiri; harga pasti tetap",
      "Gerak sepanjang kurva penawaran tanpa perubahan faktor lain",
    ], 1, "Gangguan mengurangi penawaran pada harga tertentu; dengan permintaan tetap, ekuilibrium baru cenderung memiliki harga lebih tinggi dan kuantitas lebih rendah.", [
      "Arah pergeseran dan perubahan ekuilibrium terbalik dari dampak gangguan pasokan.",
      "Kejadian awal mengubah kapasitas penjual; harga tidak dijamin tetap.",
      "Logistik adalah faktor selain harga barang itu sendiri sehingga menggeser kurva penawaran.",
    ]),
    q("eko2-b02-q10", "Kasus • Harga di bawah ekuilibrium", "Harga tiket ditahan di bawah harga yang menyamakan Qd dan Qs. Kursi terbatas dan antrean muncul. Interpretasi yang paling tepat adalah...", [
      "Permintaan hilang karena tiket murah",
      "Qd dapat melebihi Qs sehingga terjadi kekurangan; alokasi nonharga mungkin menentukan siapa mendapat tiket",
      "Surplus penawaran karena banyak orang mengantre",
      "Kurva penawaran pasti bergeser ke kanan",
    ], 1, "Harga rendah relatif terhadap ekuilibrium dapat menimbulkan Qd>Qs; antrean adalah salah satu cara nonharga mengalokasikan jumlah terbatas.", [
      "Harga rendah tidak menghapus keinginan atau kemampuan membeli.",
      "Antrean mencerminkan banyak pembeli bersaing atas pasokan terbatas, bukan kelebihan pasokan.",
      "Tidak ada informasi kapasitas penjual bertambah; antrean tidak membuktikan pergeseran penawaran.",
    ]),
  ],
};

const rubric = "Nilai 0–5 pada ketepatan konsep, kualitas alasan, penerapan pada kasus, dan kejelasan. Tiap kriteria bernilai 0 (tidak ada/relevansi tidak tampak) hingga 5 (tepat, lengkap, dan dijelaskan).";

export const ECONOMICS_ESSAYS: Record<string, EssayPrompt[]> = {
  "eko2-b01": [
    { id: "eko2-b01-e01", prompt: "Gunakan PPF untuk menganalisis pilihan sebuah koperasi antara dua jenis output. Jelaskan kelangkaan, efisiensi, biaya peluang, dan bagaimana peningkatan keterampilan dapat mengubah batas produksi.", rubric, reviewPoints: ["Menetapkan sumber daya dan periode", "Membedakan titik efisien dan tidak efisien", "Menghitung biaya peluang dengan satuan konsisten", "Membedakan gerak pada PPF dari pergeseran kapasitas"] },
    { id: "eko2-b01-e02", prompt: "Pilih satu keputusan nyata atau hipotetis. Bandingkan manfaat marginal dan biaya marginal, alternatif terbaik yang dilepas, insentif yang memengaruhi pilihan, serta informasi yang dapat membuat keputusan ditinjau ulang.", rubric, reviewPoints: ["Alternatif layak dinyatakan", "MB dan MC berorientasi ke depan", "Insentif dan kemungkinan konsekuensi sampingan dibahas", "Ketidakpastian tidak diperlakukan sebagai kepastian"] },
  ],
  "eko2-b02": [
    { id: "eko2-b02-e01", prompt: "Analisis pasar hipotetis yang mengalami kenaikan pendapatan pembeli dan gangguan biaya input secara bersamaan. Tentukan kurva yang bergeser dan jelaskan bagian arah perubahan ekuilibrium yang dapat atau tidak dapat dipastikan.", rubric, reviewPoints: ["Mengidentifikasi barang normal/inferior sebagai asumsi", "Mengidentifikasi kurva permintaan dan penawaran", "Menjelaskan dampak masing-masing pergeseran", "Mengenali hasil harga/kuantitas yang mungkin ambigu"] },
    { id: "eko2-b02-e02", prompt: "Gunakan fungsi Qd = 120 − 4P dan Qs = 24 + 4P. Hitung ekuilibrium, lalu hitung surplus atau kekurangan ketika harga ditetapkan 10 satuan di bawah harga ekuilibrium. Tunjukkan semua langkah dan satuannya.", rubric, reviewPoints: ["Persamaan disamakan dengan benar", "P* dan Q* disubstitusikan untuk cek", "Qd dan Qs dihitung di harga yang diberikan", "Arah selisih serta satuan dijelaskan"] },
  ],
};

export const FINAL_EXAM_QUESTIONS: AssessmentQuestion[] = [];
export const FINAL_EXAM_ESSAYS: EssayPrompt[] = [];
