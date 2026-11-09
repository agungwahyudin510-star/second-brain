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
      "P=12 memberi Qd=60 dan Qs=80, bukan jumlah yang sama.",
      "P=10 benar, tetapi Q=50 salah: Qd=120−5×10=70 dan Qs=20+5×10=70.",
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
  "eko2-b03": [
    q("eko2-b03-q01", "Konsep • Elastisitas", "Apa yang diukur elastisitas harga permintaan?", [
      "Perubahan unit jumlah dibagi perubahan unit harga",
      "Perubahan total penerimaan dibagi perubahan pendapatan",
      "Persentase perubahan jumlah diminta dibagi persentase perubahan harga",
      "Harga maksimum yang bersedia dibayar konsumen",
    ], 2, "Elastisitas harga membandingkan respons persentase jumlah dengan perubahan persentase harga.", [
      "Itu adalah kemiringan dalam unit, bukan rasio perubahan persentase.",
      "TR dan pendapatan bukan definisi elastisitas harga permintaan.",
      "Itu adalah willingness to pay, bukan ukuran respons jumlah terhadap harga.",
    ]),
    q("eko2-b03-q02", "Konsep • Elastisitas pendapatan", "Pendapatan naik dan jumlah barang yang diminta turun. Klasifikasi yang paling tepat adalah...", [
      "Barang inferior, karena elastisitas pendapatan bertanda negatif",
      "Barang mewah, karena setiap barang yang turun adalah barang mewah",
      "Barang substitusi, karena jumlah barang tersebut turun",
      "Barang komplementer, karena pendapatan berubah",
    ], 0, "Elastisitas pendapatan negatif menunjukkan kuantitas turun saat pendapatan meningkat, sehingga barang itu inferior dalam klasifikasi respons.", [
      "Barang mewah memiliki elastisitas pendapatan positif yang lebih besar dari satu.",
      "Substitusi ditentukan oleh respons terhadap harga barang lain, bukan pendapatan.",
      "Komplementer ditentukan oleh elastisitas silang negatif, bukan perubahan pendapatan.",
    ]),
    q("eko2-b03-q03", "Konsep • Surplus", "Surplus konsumen untuk suatu unit paling tepat didefinisikan sebagai...", [
      "Harga yang diterima penjual dikurangi biaya tetap",
      "Penerimaan pajak dikurangi belanja pemerintah",
      "Biaya minimum penjual dikurangi harga pasar",
      "Willingness to pay konsumen dikurangi harga yang dibayar",
    ], 3, "Konsumen memperoleh surplus sebesar nilai maksimum yang bersedia dibayar dikurangi pembayaran aktual.", [
      "Itu bukan definisi manfaat pembeli; biaya tetap dan penerimaan penjual berbeda.",
      "Perhitungan ini bukan surplus konsumen.",
      "Arah pengurangan terbalik dan besaran itu bukan surplus konsumen.",
    ]),
    q("eko2-b03-q04", "Konsep • Batas harga", "Price floor menjadi mengikat dalam model persaingan ketika...", [
      "Ditetapkan di bawah harga ekuilibrium",
      "Ditetapkan di atas harga ekuilibrium",
      "Ditetapkan tepat sama dengan harga minimum produsen",
      "Jumlah yang diminta sama dengan jumlah ditawarkan pada setiap harga",
    ], 1, "Floor yang berada di atas P* membatasi harga agar tidak turun ke ekuilibrium.", [
      "Floor di bawah P* tidak membatasi harga ekuilibrium.",
      "Harga minimum produsen bukan pembanding untuk menentukan apakah aturan mengikat.",
      "Kesamaan jumlah pada setiap harga bukan definisi floor yang mengikat.",
    ]),
    q("eko2-b03-q05", "Hitungan • Midpoint dan TR", "Harga naik dari 10 ke 12 dan jumlah turun dari 100 ke 80. Hasil midpoint dan TR akhir yang benar adalah...", [
      "Elastisitas 1,22; TR turun dari 1.000 ke 960",
      "Elastisitas 0,28; TR naik dari 1.000 ke 1.140",
      "Elastisitas 2,00; TR tetap 1.000",
      "Elastisitas 0,82; TR turun dari 1.000 ke 960",
    ], 0, "Persentase midpoint jumlah −22,22% dibagi persentase midpoint harga 18,18% menghasilkan 1,22; TR sesudahnya 12×80=960.", [
      "Nilai 0,28 dan TR 1.140 cocok dengan contoh penurunan kuantitas yang lebih kecil, bukan data soal ini.",
      "Perubahan kuantitas tidak turun 20% pada midpoint dan TR tidak tetap.",
      "Rasio 22,22/18,18 sekitar 1,22, bukan 0,82.",
    ]),
    q("eko2-b03-q06", "Hitungan • Ceiling", "Dengan Qd=100−5P dan Qs=−20+5P, ceiling P=8 menghasilkan kekurangan 40. Dengan alokasi ke pembeli bernilai tertinggi, berapa SK, SP, dan DWL?", [
      "SK=160, SP=160, DWL=0",
      "SK=200, SP=80, DWL=40",
      "SK=40, SP=200, DWL=80",
      "SK=200, SP=40, DWL=80",
    ], 3, "Q transaksi=20; SK=½×(12+8)×20=200; SP=½×20×(8−4)=40; total 240 dan DWL=320−240=80.", [
      "Angka ini adalah surplus pada ekuilibrium tanpa ceiling, bukan saat kebijakan mengikat.",
      "SP=½×20×4=40, bukan 80; akibatnya total dan DWL pada opsi ini keliru.",
      "Ini membalik luas surplus konsumen dan produsen serta memakai angka yang tidak sesuai harga ceiling.",
    ]),
    q("eko2-b03-q07", "Hitungan • Pajak", "Pajak penjual t=4 diterapkan pada kurva dasar. Pasangan harga pembeli dan penjual, penerimaan pajak, serta DWL yang benar adalah...", [
      "P_b=12, P_s=8, penerimaan=160, DWL=0",
      "P_b=14, P_s=10, penerimaan=120, DWL=20",
      "P_b=10, P_s=14, penerimaan=120, DWL=20",
      "P_b=16, P_s=12, penerimaan=80, DWL=40",
    ], 1, "Keseimbangan baru memberi Q=30, P_b=14 dan P_s=10; penerimaan 4×30=120 dan DWL=½×4×10=20.", [
      "Harga-harga ini tidak menyelesaikan ekuilibrium setelah pajak dan mempertahankan kuantitas lama.",
      "Urutan harga salah: wedge pajak membuat pembeli membayar lebih daripada harga yang diterima penjual.",
      "Q=20 tidak mengikuti penyelesaian dua fungsi linear yang diberikan.",
    ]),
    q("eko2-b03-q08", "Kasus • Alokasi ceiling", "Harga sewa maksimum berada di bawah harga pasar tanpa kebijakan. Unit hunian yang tersedia dibagikan melalui undian. Pernyataan yang tepat adalah...", [
      "Ceiling tidak mengikat karena undian menetapkan harga",
      "Semua calon penyewa memperoleh surplus konsumen yang sama",
      "Kekurangan dapat muncul; undian acak dapat memberi hunian kepada penyewa dengan willingness to pay lebih rendah sehingga SK lebih rendah daripada alokasi pembeli bernilai tertinggi",
      "Undian menghilangkan DWL karena harga sewa tidak berubah",
    ], 2, "Harga di bawah ekuilibrium menimbulkan Qd>Qs; cara alokasi menentukan siapa memperoleh unit dan mengubah surplus.", [
      "Harga maksimum di bawah ekuilibrium mengikat walaupun unit dialokasikan tanpa harga.",
      "Undian tidak membuat willingness to pay atau manfaat semua calon penyewa sama.",
      "Harga tetap tidak menghilangkan transaksi yang hilang atau biaya alokasi.",
    ]),
    q("eko2-b03-q09", "Kasus • Insiden pajak", "Di sebuah pasar, permintaan lebih elastis daripada penawaran. Setelah pajak per unit, sisi mana yang biasanya menanggung bagian beban ekonomi lebih besar?", [
      "Pembeli, karena permintaan lebih elastis berarti pembeli lebih sulit beralih",
      "Pembeli dan penjual selalu menanggung setengah, tanpa melihat elastisitas",
      "Pemerintah menanggung seluruh beban karena menerima pajak",
      "Penjual, karena penawaran yang lebih tidak elastis memberi ruang respons lebih kecil",
    ], 3, "Sisi yang lebih tidak elastis biasanya menanggung bagian beban lebih besar; penawaran pada kasus ini lebih tidak elastis.", [
      "Permintaan yang lebih elastis berarti pembeli lebih mudah mengurangi atau mengganti pembelian.",
      "Pembagian sama tidak berlaku untuk setiap kombinasi elastisitas.",
      "Penerimaan pajak adalah transfer; itu tidak berarti pemerintah menanggung beban pasar.",
    ]),
    q("eko2-b03-q10", "Kasus • Subsidi", "Pemerintah memberi subsidi per unit kepada layanan transportasi dengan tujuan menurunkan biaya penumpang. Interpretasi ekonomi yang paling lengkap adalah...", [
      "Subsidi membentuk wedge berlawanan arah: harga pembeli turun dan penerimaan bersih penyedia naik, tetapi biaya fiskal dan perubahan kuantitas tetap dinilai",
      "Subsidi selalu menghilangkan deadweight loss dan tidak memakai anggaran",
      "Subsidi sama dengan price ceiling dan tidak mengubah insentif penawaran",
      "Penerima legal subsidi pasti menanggung seluruh manfaat ekonominya",
    ], 0, "Subsidi per unit membuat selisih antara harga pembeli dan penerimaan penjual; evaluasi memasukkan respons pasar serta belanja publik.", [
      "Subsidi memerlukan pembiayaan dan tidak otomatis menghapus DWL.",
      "Subsidi memberi insentif harga kepada penyedia, tidak sama dengan larangan harga maksimum.",
      "Manfaat ekonomi dapat terbagi antara pembeli dan penjual menurut elastisitas.",
    ]),
  ],
  "eko2-b04": [
    q("eko2-b04-q01", "Konsep • Biaya", "Biaya tetap adalah biaya yang...", [
      "Berubah seiring kuantitas output yang diproduksi",
      "Tidak berubah ketika output berubah dalam jangka pendek",
      "Selalu sama dengan biaya marjinal",
      "Hanya ada ketika perusahaan memperoleh laba",
    ], 1, "Biaya tetap tidak berubah saat output berubah dalam jangka pendek; yang berubah adalah biaya variabel dan total.", [
      "Biaya variabel, bukan biaya tetap, berubah dengan output.",
      "MC adalah perubahan biaya total untuk satu unit tambahan, bukan definisi biaya tetap.",
      "Laba bukan syarat adanya biaya tetap; biaya tetap dapat hadir bahkan saat rugi.",
    ]),
    q("eko2-b04-q02", "Konsep • Biaya rata-rata", "Kurva MC memotong kurva AVC dan ATC di titik minimum karena...", [
      "MC selalu sama dengan rata-rata",
      "Saat MC di bawah rata-rata, rata-rata turun; saat MC di atas rata-rata, rata-rata naik",
      "ATC selalu turun bila MC naik",
      "AVC dan ATC selalu tidak terpengaruh oleh hasil yang menurun",
    ], 1, "Ketika biaya tambahan di bawah rata-rata, rata-rata bergerak turun; ketika di atas rata-rata, rata-rata bergerak naik.", [
      "MC hanya sama dengan rata-rata pada satu titik tertentu, bukan selalu.",
      "MC naik dapat menaikkan ATC bila berada di atas ATC, bukan selalu menurunkannya.",
      "Hasil yang menurun tetap memengaruhi bentuk MC dan kemudian AVC/ATC.",
    ]),
    q("eko2-b04-q03", "Hitungan • Shutdown", "Diketahui FC=20, VC pada Q=3 adalah 24, dan P=7. Keputusan paling tepat adalah...", [
      "Tetap berproduksi karena potensi laba tidak jauh dari nol",
      "Menutup usaha karena P < AVC minimum 8",
      "Mengurangi output hingga Q=2 karena MC turun",
      "Memperbesar output hingga Q=4 karena biaya tetap terkendali",
    ], 1, "Pada Q=3, AVC=8 dan P=7 di bawah AVC minimum, jadi perusahaan paling baik tutup di jangka pendek.", [
      "P < AVC berarti biaya variabel tidak tertutup, dan menahan produksi menambah kerugian.",
      "MC turun bukan alasan operasi ketika harga di bawah AVC.",
      "Biaya tetap tidak bisa dikurangi dengan menambah output karena P belum menutup biaya variabel.",
    ]),
    q("eko2-b04-q04", "Konsep • Persaingan sempurna", "Dalam pasar persaingan sempurna, perusahaan dikatakan price taker karena...", [
      "Ia bisa membatasi output agar harga naik",
      "Ia menghadapi kurva permintaan horizontal pada harga pasar",
      "Ia memproduksi satu-satunya produk di pasar",
      "Ia selalu memilih harga yang sama dengan biaya tetap",
    ], 1, "Beberapa perusahaan dan produk homogen membuat setiap perusahaan menerima harga pasar yang ditetapkan pasar; ia tidak dapat memengaruhi harga secara individual.", [
      "Membatasi output dapat menaikkan harga hanya jika perusahaan mempunyai kekuatan pasar; tidak terjadi dalam pasar sempurna.",
      "Monopoli, bukan persaingan sempurna, memiliki satu penjual.",
      "Biaya tetap tidak menentukan harga pasar.",
    ]),
    q("eko2-b04-q05", "Hitungan • Profit di pasar kompetitif", "Diketahui P=15 dan fungsi biaya total dari tabel: TC Q=0..6 = 20, 30, 38, 44, 53, 67, 85. Laba maksimum terjadi pada...", [
      "Q=3 dengan laba 1",
      "Q=4 dengan laba 7",
      "Q=5 dengan laba 8",
      "Q=6 dengan laba 5",
    ], 2, "Laba = P×Q − TC; pada Q=5, 15×5 − 67 = 8, lebih besar daripada output lain.", [
      "Q=3 hanya memberi 45−44=1, bukan maksimum.",
      "Q=4 memberi 60−53=7, lebih rendah daripada Q=5.",
      "Q=6 memberi 90−85=5, lebih rendah daripada Q=5.",
    ]),
    q("eko2-b04-q06", "Konsep • Monopoli", "Pernyataan yang paling tepat tentang monopoli adalah...", [
      "Monopoli memilih P = MC",
      "Monopoli menjual output pada harga yang diatur oleh kurva permintaan pasar dan memiliki MR < P",
      "Monopoli selalu mendapat laba nol dalam jangka panjang",
      "Monopoli beroperasi tanpa memikirkan biaya marjinal",
    ], 1, "Monopoli menghadapi permintaan pasar menurun, sehingga untuk menjual lebih banyak ia harus menurunkan harga semua unit; MR < P.", [
      "P = MC adalah kondisi pasar persaingan sempurna, bukan monopoli.",
      "Tidak semua monopoli laba nol; ada laba atau kerugian sesuai biaya dan permintaan.",
      "Biaya marjinal tetap inti dalam keputusan output." ,
    ]),
    q("eko2-b04-q07", "Hitungan • Monopoli", "Dengan permintaan P=50−Q dan MC=10, output optimal monopoli adalah...", [
      "Q=10",
      "Q=20",
      "Q=30",
      "Q=40",
    ], 1, "MR = 50 − 2Q = 10, sehingga Q=20; harga yang dibayar adalah P=30.", [
      "Q=10 hanya memberi MR=30 > MC, masih belum optimal.",
      "Q=30 memberi MR=−10 < MC, terlalu tinggi.",
      "Q=40 adalah output kompetitif, bukan monopoli.",
    ]),
    q("eko2-b04-q08", "Konsep • HHI", "Pangsa pasar 40, 30, 20, 10. HHI yang benar adalah...", [
      "2.500",
      "3.000",
      "1.000",
      "10.000",
    ], 1, "HHI = 40² + 30² + 20² + 10² = 1.600 + 900 + 400 + 100 = 3.000.", [
      "2.500 adalah HHI untuk empat perusahaan sama 25, 25, 25, 25.",
      "1.000 adalah HHI untuk sepuluh perusahaan sama 10 masing-masing.",
      "10.000 adalah monopoli satu perusahaan 100%.",
    ]),
    q("eko2-b04-q09", "Konsep • Dilema tahanan", "Dalam dilema tahanan, ekuilibrium Nash cenderung terjadi pada...", [
      "(Tinggi, Tinggi) karena kerja sama terbaik",
      "(Rendah, Rendah) karena strategi dominan masing-masing",
      "(Rendah, Tinggi) karena satu pihak unggul",
      "(Tinggi, Rendah) karena informasi asimetris",
    ], 1, "Kedua pemain memiliki strategi dominan Rendah, sehingga ekuilibrium Nash adalah (Rendah, Rendah) meski kerja sama bersama lebih baik.", [
      "(Tinggi, Tinggi) adalah hasil kolusif yang lebih baik bagi keduanya, bukan ekuilibrium Nash dalam model dasar.",
      "Kedua pemain tidak punya dominan pada pilihan campuran; inilah makna strategi dominan.",
      "Asimetri informasi bukan elemen utama dalam matriks dilemma dasar.",
    ]),
    q("eko2-b04-q10", "Kasus • Kegagalan pasar", "Pajak Pigouvian paling tepat digunakan ketika...", [
      "Semua pasar selalu efisien tanpa intervensi",
      "Terdapat eksternalitas negatif yang tidak masuk ke keputusan privat",
      "Perusahaan menghadapi kuantitas yang terlalu rendah secara permanen",
      "Semua barang publik harus didanai pemerintah",
    ], 1, "Pajak Pigouvian menyesuaikan insentif agar biaya sosial ikut diperhitungkan ketika ada eksternalitas negatif.", [
      "Pasar tidak selalu efisien jika eksternalitas hadir.",
      "Eksternalitas negatif bukan berarti kuantitas terlalu rendah; sering justru terlalu tinggi.",
      "Barang publik tidak otomatis harus dibiayai pemerintah, meski sering membutuhkan penyediaan kolektif.",
    ]),
  ],
  "eko2-b05": [
    q("eko2-b05-q01", "Konsep • Definisi PDB", "Mengapa PDB menghitung barang akhir atau nilai tambah, bukan menjumlahkan semua penjualan di setiap tahap produksi?", [
      "Agar nilai ekspor dipisahkan dari nilai impor dalam semua transaksi",
      "Agar barang rumah tangga yang dibuat sendiri dicatat sebagai keluaran pasar",
      "Agar bahan antara tidak dihitung kembali setelah nilainya masuk ke barang akhir",
      "Agar transaksi keuangan dapat dijumlahkan bersama barang yang diproduksi",
    ], 2, "Barang antara sudah terkandung dalam nilai keluaran tahap berikutnya; menghitung penjualan setiap tahap menggandakan nilai yang sama.", [
      "Perlakuan ekspor dan impor ditangani lewat komponen perdagangan, bukan alasan mengeluarkan barang antara.",
      "Produksi rumah tangga tanpa transaksi pasar justru umumnya tidak tercatat dalam PDB.",
      "Transaksi keuangan murni tidak menjadi produksi barang akhir dalam PDB.",
    ]),
    q("eko2-b05-q02", "Konsep • Cakupan PDB", "Transaksi manakah yang tidak dihitung sebagai produksi baru pada periode berjalan dalam PDB?", [
      "Jual beli mobil bekas antarwarga atau pembayaran transfer tunai",
      "Pembelian roti baru dari toko oleh sebuah rumah tangga",
      "Pembangunan rumah baru oleh perusahaan konstruksi domestik",
      "Layanan potong rambut yang diberikan dan dibayar pada periode itu",
    ], 0, "Mobil bekas sudah dihitung ketika baru diproduksi dan transfer bukan pembelian keluaran baru; keduanya tidak menambah produksi berjalan.", [
      "Roti baru adalah barang akhir yang diproduksi dan dibeli pada periode berjalan.",
      "Rumah baru merupakan pembentukan modal dan bagian produksi domestik periode itu.",
      "Jasa potong rambut adalah layanan akhir yang diproduksi pada periode tersebut.",
    ]),
    q("eko2-b05-q03", "Konsep • Nominal dan riil", "Perbedaan utama PDB nominal dan PDB riil adalah...", [
      "PDB nominal menghitung ekspor, sedangkan PDB riil hanya menghitung konsumsi",
      "PDB nominal mengurangi impor, sedangkan PDB riil mengabaikan barang akhir",
      "PDB nominal memakai harga tahun dasar, sedangkan PDB riil memakai harga berjalan",
      "PDB nominal memakai harga periode berjalan, sedangkan PDB riil memakai harga tahun dasar",
    ], 3, "PDB nominal menilai keluaran memakai harga periode itu; PDB riil memakai harga tahun dasar untuk memisahkan perubahan volume dari harga.", [
      "Keduanya dapat mencakup produksi domestik yang sama; pembeda pokoknya bukan ekspor versus konsumsi.",
      "Perlakuan impor berasal dari pendekatan pengeluaran dan tidak membedakan nominal dari riil.",
      "Pernyataan ini membalik definisi nominal dan riil.",
    ]),
    q("eko2-b05-q04", "Konsep • PDB dan GNI", "Apa yang membedakan PDB dari pendapatan nasional bruto (GNI/PNB)?", [
      "PDB memasukkan transfer rumah tangga, sedangkan GNI mengeluarkan konsumsi",
      "GNI menambahkan pendapatan faktor neto dari luar negeri pada PDB",
      "PDB menghitung produksi warga di luar negeri, sedangkan GNI mengabaikannya",
      "GNI selalu sama dengan ekspor neto ditambah pengeluaran pemerintah",
    ], 1, "GNI diperoleh dari PDB ditambah pendapatan faktor yang diterima dari luar negeri dikurangi yang dibayar ke luar negeri.", [
      "Transfer bukan produksi yang dihitung sebagai bagian PDB dan bukan pembeda inti GNI.",
      "Pernyataan itu membalik fokus wilayah PDB dan pendapatan faktor penduduk.",
      "Ekspor neto dan pengeluaran pemerintah adalah komponen pengeluaran, bukan definisi GNI.",
    ]),
    q("eko2-b05-q05", "Hitungan • Pendekatan pengeluaran", "Jika C=600, I=150, G=200, X=100, dan M=120, berapakah PDB menurut pendekatan pengeluaran?", [
      "910, karena pendapatan faktor neto harus dikurangkan dari konsumsi",
      "970, karena impor ditambahkan ke ekspor neto sebelum dijumlah",
      "930, karena ekspor neto −20 dan C+I+G+(X−M)=930",
      "1.050, karena ekspor dan impor keduanya ditambahkan pada belanja",
    ], 2, "X−M=100−120=−20; maka PDB=600+150+200−20=930.", [
      "Pendapatan faktor luar negeri bukan komponen rumus pengeluaran yang diberikan.",
      "Ekspor neto adalah selisih X dikurangi M, bukan angka yang menghasilkan tambahan 40.",
      "Impor dikurangkan agar produksi luar negeri tidak dihitung sebagai produksi domestik.",
    ]),
    q("eko2-b05-q06", "Hitungan • Nilai tambah", "Tukang roti menjual roti senilai 100 setelah membeli tepung senilai 50. Berapa nilai tambah tahap tukang roti?", [
      "50, yaitu penjualan roti 100 dikurangi biaya tepung 50",
      "100, yaitu seluruh penjualan roti tanpa mengurangi biaya bahan",
      "150, yaitu nilai roti ditambah harga tepung yang dibeli sebelumnya",
      "30, yaitu nilai gandum yang dijual petani kepada penggiling",
    ], 0, "Nilai tambah tahap tukang roti=100−50=50.", [
      "Angka 100 adalah penjualan bruto; nilai tepung yang telah dihitung harus dikurangkan.",
      "Menambahkan tepung justru menghitung bahan antara dua kali.",
      "Nilai gandum adalah kontribusi petani, bukan nilai tambah tukang roti.",
    ]),
    q("eko2-b05-q07", "Hitungan • Deflator PDB", "Jika PDB nominal 2025 sebesar 1.118 dan PDB riil sebesar 1.040, berapakah deflator PDB?", [
      "93,0, dari 1.040 dibagi 1.118 lalu dikali 100",
      "107,5, dari 1.118 dibagi 1.040 lalu dikali 100",
      "11,8, dari selisih nominal dengan riil dibagi tahun dasar",
      "4,0, dari pertumbuhan riil dibandingkan pertumbuhan nominal",
    ], 1, "Deflator=(1.118/1.040)×100=107,5.", [
      "Rasio terbalik bukan rumus deflator PDB.",
      "Selisih nominal dan riil bukan nilai indeks deflator.",
      "Empat persen adalah pertumbuhan riil pada data contoh, bukan deflator.",
    ]),
    q("eko2-b05-q08", "Kasus • Pertumbuhan nominal", "PDB nominal tumbuh 11,8%, sedangkan PDB riil tumbuh 4%. Kesimpulan yang paling tepat adalah...", [
      "Jumlah barang pasti naik 11,8% karena harga tidak masuk dalam PDB nominal",
      "Harga pasti turun 7,8% karena pertumbuhan riil lebih rendah daripada nominal",
      "Produksi riil turun karena pertumbuhan nominal lebih tinggi dari pertumbuhan riil",
      "Kenaikan nominal mencakup perubahan harga; ukuran riil menunjukkan pertumbuhan volume lebih rendah",
    ], 3, "PDB nominal mencerminkan harga dan jumlah; pertumbuhan riil 4% memisahkan perubahan volume dari pengaruh harga.", [
      "PDB nominal memakai harga berjalan, sehingga harga ikut memengaruhi nilainya.",
      "Selisih laju tidak berarti harga turun; contoh deflator justru menunjukkan tingkat harga meningkat.",
      "Pertumbuhan riil 4% tetap berarti keluaran riil meningkat, bukan turun.",
    ]),
    q("eko2-b05-q09", "Kasus • Pertumbuhan per kapita", "PDB riil tumbuh 4% dan jumlah penduduk tumbuh 1%. Berapa kira-kira pertumbuhan PDB riil per kapita?", [
      "5,00%, karena pertumbuhan PDB dan penduduk dijumlahkan",
      "4,00%, karena penduduk tidak memengaruhi keluaran rata-rata per orang",
      "2,97%, dari 1,04 dibagi 1,01 lalu dikurangi satu",
      "3,00%, karena pertumbuhan penduduk selalu dikurangkan secara tepat",
    ], 2, "Pertumbuhan per kapita=(1+0,04)/(1+0,01)−1≈0,0297 atau 2,97%.", [
      "Pertumbuhan penduduk bukan tambahan terhadap keluaran per kapita.",
      "Jumlah penduduk mengubah pembagi PDB per kapita.",
      "Pengurangan sederhana hanya pendekatan; rumus rasio memberi sekitar 2,97%.",
    ]),
    q("eko2-b05-q10", "Kasus • Siklus bisnis", "Indeks PDB riil kuartalan berurutan adalah 100, 102, 103, 101, 99, 98, 100, 103. Apa kesimpulan yang tepat?", [
      "Tidak ada penurunan beruntun karena indeks kemudian pulih setelah K6",
      "K4–K6 turun tiga kuartal berturut-turut, memenuhi kaidah teknis; lembah pada seri ini ada di K6",
      "Puncak berada di K6 karena indeks K6 lebih rendah dari kuartal sebelumnya",
      "Resesi resmi pasti terjadi karena dua kuartal penurunan mendefinisikannya secara universal",
    ], 1, "Indeks turun dari K3 ke K4, K5, dan K6; titik terendah adalah K6. Rangkaian memenuhi kaidah praktis dua kuartal turun.", [
      "Pemulihan sesudah K6 tidak menghapus penurunan beruntun sebelumnya.",
      "Puncak adalah titik tertinggi sebelum kontraksi, yaitu K3 pada seri ini.",
      "Dua kuartal turun adalah kaidah praktis, bukan definisi resmi universal; data ini juga menunjukkan tiga kuartal turun.",
    ]),
  ],
  "eko2-b06": [
    q("eko2-b06-q01", "Konsep • Indeks harga konsumen", "Bagaimana indeks harga konsumen (IHK) untuk suatu periode dihitung?", [
      "Perubahan harga satu barang dibandingkan dengan upah rata-rata tahun berjalan",
      "Biaya barang yang dijual dibagi jumlah pekerja lalu dikalikan seratus",
      "Biaya seluruh produksi domestik dibagi pendapatan rumah tangga tahun dasar",
      "Biaya keranjang tetap pada harga kini dibagi biayanya pada tahun dasar, lalu dikali seratus",
    ], 3, "IHK membandingkan biaya keranjang konsumsi yang sama pada harga periode berjalan dengan biaya tahun dasar dikali 100.", [
      "Harga satu barang dan upah tidak membentuk indeks keranjang konsumsi.",
      "Jumlah pekerja bukan penyebut untuk menghitung indeks harga konsumen.",
      "Biaya seluruh produksi domestik lebih dekat dengan deflator PDB, bukan IHK.",
    ]),
    q("eko2-b06-q02", "Konsep • Bunga riil", "Mengapa suku bunga riil lebih relevan daripada bunga nominal saat menilai daya beli simpanan?", [
      "Bunga nominal telah mengurangi inflasi sehingga selalu menunjukkan daya beli bersih",
      "Bunga riil menyesuaikan pertambahan uang dengan perubahan harga barang dan jasa",
      "Bunga riil menunjukkan nilai rupiah tanpa memperhitungkan perubahan tingkat harga",
      "Bunga nominal hanya digunakan untuk menghitung harga barang impor dan ekspor",
    ], 1, "Bunga riil memperhitungkan inflasi sehingga menunjukkan perubahan kemampuan membeli, bukan hanya pertambahan saldo uang.", [
      "Bunga nominal belum dikurangi inflasi dan tidak selalu menunjukkan pertambahan daya beli.",
      "Mengabaikan perubahan harga justru menggambarkan bunga nominal, bukan riil.",
      "Klasifikasi bunga nominal dan riil tidak ditentukan oleh perdagangan luar negeri.",
    ]),
    q("eko2-b06-q03", "Konsep • Jenis pengangguran", "Pernyataan mana yang membedakan pengangguran siklis dari pengangguran struktural?", [
      "Pengangguran siklis meningkat saat resesi dan dapat mereda ketika kegiatan ekonomi pulih",
      "Pengangguran siklis muncul hanya ketika keterampilan pekerja tidak sesuai dengan lowongan",
      "Pengangguran siklis mencakup semua orang yang tidak mencari pekerjaan karena sekolah",
      "Pengangguran siklis terjadi saat pekerja berpindah kerja meskipun ekonomi tumbuh stabil",
    ], 0, "Pengangguran siklis berhubungan dengan naik-turunnya kegiatan agregat dan melemah saat ekonomi pulih.", [
      "Ketidakcocokan keterampilan adalah sumber pengangguran struktural.",
      "Orang yang tidak mencari kerja umumnya berada di luar angkatan kerja, bukan penganggur siklis.",
      "Perpindahan dan pencarian kerja merupakan sumber pengangguran friksional.",
    ]),
    q("eko2-b06-q04", "Konsep • Kurva Phillips", "Dalam model kurva Phillips jangka panjang, hubungan pengangguran dan inflasi digambarkan sebagai...", [
      "Kurva menurun permanen sehingga inflasi lebih tinggi selalu menurunkan pengangguran",
      "Kurva mendatar pada inflasi nol untuk seluruh tingkat pengangguran",
      "Garis vertikal pada tingkat pengangguran alamiah ketika ekspektasi telah menyesuaikan",
      "Garis vertikal pada pengangguran nol karena semua pencari kerja memperoleh pekerjaan",
    ], 2, "Dalam jangka panjang pengangguran kembali ke tingkat alamiah u*, sementara inflasi dapat berada pada tingkat yang berbeda.", [
      "Pertukaran jangka pendek tidak menjadi hubungan permanen setelah ekspektasi menyesuaikan.",
      "Inflasi jangka panjang tidak harus nol, dan kurva tidak mendatar pada satu tingkat harga.",
      "Tingkat alamiah bukan nol; pencarian dan ketidakcocokan tetap ada.",
    ]),
    q("eko2-b06-q05", "Hitungan • IHK", "Keranjang tetap berbiaya 900 pada 2024 dan 950 pada 2025. Berapakah IHK 2025 dengan tahun dasar 2024?", [
      "94,74, dari 900 dibagi 950 lalu dikali seratus",
      "5,56, dari selisih biaya keranjang dibagi biaya tahun dasar",
      "105,56, dari 950 dibagi 900 lalu dikali seratus",
      "50,00, dari biaya tahun berjalan dikurangi biaya tahun dasar",
    ], 2, "IHK 2025=950/900×100=105,56 dengan IHK tahun dasar sama dengan 100.", [
      "Rasio terbalik memberi indeks di bawah 100 dan bukan rumus IHK 2025.",
      "5,56 adalah tingkat inflasi (kenaikan biaya dalam persen), bukan angka indeks; indeks = 100 + 5,56.",
      "50 hanyalah selisih biaya, bukan angka indeks.",
    ]),
    q("eko2-b06-q06", "Hitungan • Suku bunga riil", "Bunga nominal 8% dan inflasi 5%. Berapakah bunga riil eksak menurut persamaan Fisher?", [
      "3,00%, dari selisih bunga nominal dan inflasi",
      "2,86%, dari 1,08 dibagi 1,05 lalu dikurangi satu",
      "13,00%, dari penjumlahan bunga nominal dan inflasi",
      "−2,86%, karena inflasi lebih rendah daripada bunga nominal",
    ], 1, "Bunga riil eksak=(1+0,08)/(1+0,05)−1≈0,02857 atau 2,86%.", [
      "Tiga persen adalah pendekatan selisih, bukan hasil eksak.",
      "Menjumlahkan bunga dan inflasi bukan persamaan Fisher.",
      "Bunga riil positif karena bunga nominal lebih tinggi daripada inflasi.",
    ]),
    q("eko2-b06-q07", "Hitungan • TPT", "Jika terdapat 120 orang bekerja dan 10 orang menganggur dalam angkatan kerja, berapakah tingkat pengangguran terbuka?", [
      "5,00%, dari 10 dibagi 200 penduduk usia kerja",
      "8,33%, dari 10 dibagi 120 orang bekerja",
      "60,00%, dari 120 orang bekerja dibagi 200 penduduk usia kerja",
      "7,69%, dari 10 dibagi 130 orang dalam angkatan kerja",
    ], 3, "Angkatan kerja=120+10=130; TPT=10/130×100=7,69%.", [
      "Penyebut 200 adalah seluruh penduduk usia kerja, bukan angkatan kerja untuk TPT.",
      "Penganggur dibagi jumlah bekerja saja tidak menjadi definisi TPT.",
      "60% adalah rasio kerja-penduduk jika penduduk usia kerja 200.",
    ]),
    q("eko2-b06-q08", "Kasus • Pekerja putus asa", "Lima dari 10 penganggur berhenti mencari kerja. TPT turun dari 7,69% menjadi 4,00%, sementara jumlah bekerja tetap 120. Kesimpulan yang tepat adalah...", [
      "TPT turun karena lima orang keluar dari angkatan kerja; lapangan kerja tidak bertambah",
      "TPT turun karena lima penganggur langsung memperoleh pekerjaan baru",
      "TPT tetap karena jumlah penduduk usia kerja tidak berubah",
      "TPT naik karena angkatan kerja berkurang sementara pengangguran bertambah",
    ], 0, "Penganggur yang berhenti mencari tidak lagi tercatat dalam angkatan kerja; penganggur menjadi 5 dari angkatan kerja 125, dan jumlah bekerja tetap 120.", [
      "Data menyatakan mereka berhenti mencari, bukan memperoleh pekerjaan.",
      "TPT berubah walaupun jumlah penduduk usia kerja tidak berubah karena penyebutnya angkatan kerja.",
      "Jumlah penganggur tercatat turun menjadi 5, bukan bertambah.",
    ]),
    q("eko2-b06-q09", "Kasus • Hukum Okun", "Tingkat pengangguran 7%, tingkat alamiah 5%, dan PDB potensial 1.000. Dengan kesenjangan output≈−2×(u−u*), berapa kesenjangan dan PDB aktual?", [
      "Kesenjangan −2%; PDB aktual 980",
      "Kesenjangan −4%; PDB aktual 960",
      "Kesenjangan +4%; PDB aktual 1.040",
      "Kesenjangan −7%; PDB aktual 930",
    ], 1, "Pengangguran siklis=7−5=2 poin; kesenjangan=−2×2=−4%; PDB aktual=1.000×0,96=960.", [
      "Perhitungan mengalikan koefisien −2 dengan selisih 2 poin, bukan 1 poin.",
      "Tanda kesenjangan negatif karena pengangguran aktual di atas alamiah.",
      "Tujuh persen adalah tingkat pengangguran, bukan kesenjangan output.",
    ]),
    q("eko2-b06-q10", "Kasus • Ekspektasi inflasi", "Pengangguran ditahan pada 3% dengan u*=5%. Jika ekspektasi inflasi berurutan 3%, 4%, lalu 5%, berapakah inflasi menurut π=πe−0,5×(u−u*)?", [
      "3%, lalu 3%, lalu 3% karena pengangguran tetap",
      "2%, lalu 3%, lalu 4% karena pengangguran berada di bawah tingkat alamiah",
      "4%, lalu 4%, lalu 4% karena inflasi menyamai ekspektasi sejak awal",
      "4%, lalu 5%, lalu 6% karena ekspektasi menyesuaikan saat u tetap di bawah u*",
    ], 3, "Karena u−u*=3−5=−2, inflasi=πe−0,5×(−2)=πe+1; hasilnya 4%, 5%, lalu 6%.", [
      "Inflasi tidak tetap sama dengan ekspektasi saat pengangguran di bawah alamiah.",
      "Tanda penyesuaiannya terbalik; pengangguran di bawah alamiah menambah satu poin pada ekspektasi.",
      "Inflasi sama dengan ekspektasi hanya saat u=u*, bukan saat u=3%.",
    ]),
  ],
  "eko2-b07": [
    q("eko2-b07-q01", "Konsep • Pertumbuhan majemuk", "Mengapa selisih kecil dalam laju pertumbuhan tahunan bisa menghasilkan perbedaan besar setelah beberapa dasawarsa?", [
      "Karena pertumbuhan selalu menambahkan jumlah tetap dari nilai awal",
      "Karena laju pertumbuhan menghapus perubahan jumlah penduduk",
      "Karena pertumbuhan tiap tahun diterapkan pada nilai yang telah bertambah",
      "Karena pertumbuhan riil mengukur perubahan harga barang konsumsi",
    ], 2, "Dalam pertumbuhan majemuk, kenaikan setiap periode menjadi bagian dari basis periode berikutnya sehingga selisih laju terakumulasi.", [
      "Penambahan tetap menggambarkan pertumbuhan linear, bukan pertumbuhan majemuk.",
      "Pertumbuhan total tidak otomatis menghapus dampak perubahan jumlah penduduk.",
      "Perubahan harga konsumsi bukan definisi pertumbuhan keluaran riil.",
    ]),
    q("eko2-b07-q02", "Konsep • Fungsi produksi", "Dalam fungsi Y=A×√K×√L, apa yang terjadi jika modal dan tenaga kerja sama-sama digandakan, sementara A tetap?", [
      "Keluaran menjadi dua kali lipat karena fungsi memiliki skala konstan",
      "Keluaran tetap karena tambahan faktor saling meniadakan",
      "Keluaran naik empat kali lipat karena kedua faktor digandakan",
      "Keluaran naik setengah kali karena pangkat tiap faktor bernilai setengah",
    ], 0, "Pangkat K dan L berjumlah satu, sehingga menggandakan kedua faktor sekaligus menggandakan keluaran.", [
      "Kenaikan kedua faktor bersama mengubah skala produksi; hasilnya bukan tetap.",
      "Menggandakan K dan L tidak mengalikan keluaran empat kali dalam bentuk pangkat ini.",
      "Pangkat 0,5 berlaku masing-masing faktor; kenaikan serentak menghasilkan pengali dua.",
    ]),
    q("eko2-b07-q03", "Konsep • Model Solow", "Apa makna keadaan mapan pada model Solow sederhana tanpa pertumbuhan penduduk?", [
      "Seluruh tabungan menjadi konsumsi pada setiap periode",
      "Investasi baru sama dengan modal yang aus dalam periode itu",
      "Modal per pekerja bertambah dengan laju yang selalu meningkat",
      "Keluaran per pekerja menjadi nol ketika modal tidak berubah",
    ], 1, "Pada keadaan mapan, investasi per pekerja tepat mengganti penyusutan sehingga stok modal per pekerja tetap.", [
      "Tabungan membiayai investasi, bukan seluruhnya dikonsumsi pada periode yang sama.",
      "Investasi menutup penyusutan; modal tidak terus bertambah tanpa batas di keadaan mapan.",
      "Modal tetap menghasilkan keluaran positif pada fungsi produksi y=√k.",
    ]),
    q("eko2-b07-q04", "Konsep • Konvergensi bersyarat", "Pernyataan mana yang tepat mengenai konvergensi dalam model Solow?", [
      "Negara miskin selalu menyusul negara kaya karena modalnya lebih sedikit",
      "Konvergensi terjadi hanya jika kedua negara memiliki penduduk sama banyak",
      "Tingkat pendapatan awal menentukan seluruh pertumbuhan jangka panjang",
      "Negara menyusul tingkat mapan serupa bila parameter dasarnya cukup sebanding",
    ], 3, "Konvergensi bersyarat memerlukan keadaan mapan yang sebanding; perbedaan parameter dapat mempertahankan kesenjangan.", [
      "Modal awal rendah saja tidak menjamin negara miskin menyusul negara kaya.",
      "Jumlah penduduk yang sama bukan syarat yang menentukan keadaan mapan dalam model per pekerja.",
      "Tabungan, penyusutan, produktivitas, dan kondisi lain ikut menentukan pertumbuhan jangka panjang.",
    ]),
    q("eko2-b07-q05", "Hitungan • Pertumbuhan majemuk", "Nilai awal 1.000 tumbuh 4% per tahun selama 30 tahun. Berapa nilai akhirnya menurut pertumbuhan majemuk?", [
      "2.200,00, dari penambahan linear 4% setiap tahun atas nilai awal",
      "3.243,40, dari 1.000 dikalikan 1,04 pangkat 30 tahun",
      "1.811,36, dari penerapan laju 2% setiap tahun selama 30 tahun",
      "4.000,00, dari nilai awal dikalikan empat untuk laju 4%",
    ], 1, "1.000×1,04³⁰=3.243,40.", [
      "Penjumlahan linear 30×40 menghasilkan 2.200, bukan pertumbuhan majemuk.",
      "1.811,36 adalah hasil laju 2%, bukan 4%, selama 30 tahun.",
      "Mengalikan nilai awal langsung dengan 4 tidak menerapkan pertumbuhan tahunan.",
    ]),
    q("eko2-b07-q06", "Hitungan • Fungsi produksi", "Dengan Y=A×√K×√L, berapakah keluaran jika A=1, K=200, dan L=100?", [
      "100,00, dari akar modal saja tanpa tenaga kerja",
      "200,00, dari menjumlahkan modal dengan tenaga kerja",
      "141,42, dari akar 200 dikali akar 100",
      "300,00, dari menjumlahkan seluruh faktor produksi",
    ], 2, "Y=1×√200×√100=14,142×10≈141,42.", [
      "Rumus melibatkan akar modal dan tenaga kerja, bukan akar modal saja.",
      "Fungsi produksi mengalikan input berakar, bukan menjumlahkannya.",
      "Menjumlahkan input tidak sesuai dengan bentuk fungsi yang diberikan.",
    ]),
    q("eko2-b07-q07", "Hitungan • Akuntansi pertumbuhan", "Jika α=0,4, gK=5%, gL=1%, dan gA=1%, berapakah pertumbuhan keluaran menurut akuntansi pertumbuhan?", [
      "3,6%, dari 1%+0,4×5%+0,6×1% sesuai bobot faktor",
      "7,0%, dari menjumlahkan pertumbuhan modal, tenaga kerja, dan teknologi",
      "2,6%, dari pertumbuhan keluaran dikurangi pertumbuhan tenaga kerja",
      "1,0%, dari residu produktivitas saja",
    ], 0, "gY=gA+αgK+(1−α)gL=1+0,4×5+0,6×1=3,6%.", [
      "Modal dan tenaga kerja memiliki bobot pangsa, sehingga tidak dijumlahkan tanpa bobot.",
      "2,6% adalah pertumbuhan per pekerja, bukan pertumbuhan keluaran total.",
      "Satu persen hanya kontribusi produktivitas, bukan jumlah semua sumber.",
    ]),
    q("eko2-b07-q08", "Kasus • Tabungan dan konsumsi", "Dengan δ=0,1 dan y=√k, tabungan naik dari s=0,2 ke s=0,3. Keadaan mapan bergeser dari (k*=4, y*=2, c*=1,6) ke (k*=9, y*=3, c*=2,1). Kesimpulan yang tepat?", [
      "Konsumsi mapan turun karena tabungan lebih besar mengurangi bagian konsumsi",
      "Keluaran mapan tidak berubah karena tabungan hanya menggeser pemakaian",
      "Konsumsi langsung naik pada periode pertama dan tetap sesudahnya",
      "Konsumsi mapan naik ke 2,1, tetapi turun sementara selama masa transisi",
    ], 3, "Pada keadaan mapan c*=(1−0,3)×3=2,1, lebih tinggi dari 1,6. Pada awal transisi y masih 2, jadi c=(1−0,3)×2=1,4, di bawah 1,6.", [
      "Bagian konsumsi memang mengecil, tetapi keluaran mapan naik lebih besar, sehingga c* naik dari 1,6 menjadi 2,1.",
      "Keluaran mapan naik dari 2 menjadi 3 karena modal per pekerja mapan naik dari 4 menjadi 9.",
      "Pada awal transisi konsumsi turun ke 1,4, karena modal belum bertambah sementara bagian tabungan sudah naik.",
    ]),
    q("eko2-b07-q09", "Kasus • Kaidah emas", "Dengan δ=0,1 dan y=√k, tabungan s=0,5 memberi konsumsi mapan 2,5. Berapa konsumsi mapan pada s=0,7 dan apa artinya?", [
      "2,1, lebih rendah dari 2,5, sehingga s=0,7 melampaui kaidah emas",
      "7,0, lebih tinggi karena keluaran mapan lebih besar pada s=0,7",
      "2,5, sama saja karena kaidah emas berlaku pada semua tingkat tabungan",
      "0, karena hampir seluruh keluaran dialokasikan untuk tabungan",
    ], 0, "Pada s=0,7: k*=49, y*=7, c*=(1−0,7)×7=2,1, lebih kecil dari 2,5 pada s=0,5. Modal berlebih menurunkan konsumsi mapan.", [
      "7,0 adalah keluaran mapan y*, bukan konsumsi; konsumsi hanya 30% dari keluaran, yaitu 2,1.",
      "Kaidah emas hanya terjadi pada satu tingkat tabungan (s=0,5 di sini), bukan semua tingkat.",
      "Pada s=0,7 hanya 70% keluaran ditabung, jadi konsumsi 30% dari 7 = 2,1, bukan 0.",
    ]),
    q("eko2-b07-q10", "Kasus • Konvergensi", "Negara kaya memiliki s=0,2 dan δ=0,1. Negara miskin memiliki s=0,1 dengan δ sama. Menurut k*=(s/δ)², kesimpulan mana yang tepat?", [
      "Keduanya menuju k*=4 karena tingkat penyusutan sama",
      "Negara miskin menuju k*=1, lebih rendah daripada k*=4 negara kaya",
      "Negara miskin menuju k*=2 karena tabungannya setengah",
      "Negara miskin pasti menyusul karena modal awalnya lebih rendah",
    ], 1, "Negara kaya memiliki k*=(0,2/0,1)²=4; negara miskin memiliki k*=(0,1/0,1)²=1 sehingga menuju tingkat mapan lebih rendah.", [
      "Tabungan berbeda mengubah keadaan mapan meskipun penyusutan sama.",
      "Rasio tabungan terhadap penyusutan dikuadratkan, menghasilkan k*=1.",
      "Modal awal rendah tidak menjamin negara miskin menyusul dengan parameter berbeda.",
    ]),
  ],
  "eko2-b08": [
    q("eko2-b08-q01", "Konsep • Fungsi uang", "Bagaimana uang mengatasi kebetulan keinginan ganda dan fungsi apa yang dijalankannya?", [
      "Uang mengharuskan kedua pihak bertukar barang langsung dengan nilai sama",
      "Uang menjadi alat tukar, satuan hitung, dan penyimpan nilai dalam transaksi",
      "Uang menghapus seluruh risiko perubahan daya beli dalam setiap transaksi",
      "Uang hanya menjadi penyimpan nilai dan tidak membantu penentuan harga",
    ], 1, "Uang memisahkan penjualan dari pembelian serta berfungsi sebagai alat tukar, satuan hitung, dan penyimpan nilai.", [
      "Pertukaran langsung adalah barter dan tetap memerlukan kecocokan kebutuhan kedua pihak.",
      "Uang memudahkan transaksi tetapi daya belinya tetap dapat berubah.",
      "Satuan hitung membantu menyatakan dan membandingkan harga.",
    ]),
    q("eko2-b08-q02", "Konsep • Neraca bank", "Pernyataan mana yang tepat membedakan masalah likuiditas dan solvabilitas bank?", [
      "Likuiditas berarti aset lebih besar dari kewajiban; solvabilitas berarti kas cukup hari ini",
      "Likuiditas dan solvabilitas sama-sama hanya mengukur jumlah cadangan tunai bank",
      "Likuiditas adalah modal positif; solvabilitas adalah kemampuan menjual aset segera",
      "Likuiditas menyangkut pembayaran tepat waktu; solvabilitas menyangkut kecukupan aset terhadap kewajiban",
    ], 3, "Likuiditas mengukur kemampuan memenuhi pembayaran yang jatuh tempo; solvabilitas mengukur kecukupan nilai aset untuk menutup kewajiban.", [
      "Definisi ini menukar konsep: nilai bersih berkaitan dengan solvabilitas, bukan likuiditas.",
      "Cadangan penting bagi pembayaran, tetapi tidak mengukur kedua konsep sekaligus.",
      "Modal positif berkaitan dengan solvabilitas; kemampuan menjual segera berkaitan dengan likuiditas.",
    ]),
    q("eko2-b08-q03", "Konsep • Penciptaan uang bank", "Dalam sistem cadangan sebagian, bagaimana kredit bank dapat menambah simpanan dalam sistem perbankan?", [
      "Bank mencatat kredit sebagai aset dan simpanan penerima sebagai liabilitas",
      "Bank memindahkan seluruh uang tunai bank sentral langsung kepada peminjam",
      "Bank mengubah modalnya menjadi uang tunai tanpa membuat kewajiban baru",
      "Bank menggandakan simpanan lama tanpa mencatat pinjaman atau pembayaran",
    ], 0, "Ketika bank memberi kredit, neraca mencatat pinjaman sebagai aset dan saldo simpanan sebagai liabilitas; pembayaran kemudian dapat menjadi simpanan di bank lain.", [
      "Cadangan bank sentral bukan uang tunai yang otomatis dipindahkan langsung kepada setiap peminjam.",
      "Kredit dan simpanan menambah sisi aset dan liabilitas, bukan mengubah modal menjadi uang tunai saja.",
      "Penciptaan simpanan melalui kredit tetap dicatat di neraca bank.",
    ]),
    q("eko2-b08-q04", "Konsep • Operasi pasar terbuka", "Apa dampak langsung pembelian obligasi oleh bank sentral dalam mekanisme sederhana?", [
      "Uang primer berkurang karena obligasi dipindahkan ke bank sentral",
      "Simpanan rumah tangga langsung dihapus dari seluruh bank komersial",
      "Cadangan bank dan uang primer bertambah karena bank sentral membayar obligasi",
      "Rasio cadangan wajib naik otomatis sebesar nilai obligasi yang dibeli",
    ], 2, "Pembayaran pembelian obligasi menambah saldo cadangan bank dan uang primer dalam model sederhana.", [
      "Pembelian dibayar dengan penambahan cadangan, bukan pengurangan uang primer.",
      "Transaksi tidak menghapus simpanan rumah tangga.",
      "Pembelian obligasi tidak otomatis mengubah rasio cadangan wajib.",
    ]),
    q("eko2-b08-q05", "Hitungan • Pengganda sederhana", "Simpanan awal 1.000 masuk ke sistem dengan rasio cadangan r=10%. Dalam model pengganda sederhana, berapa total simpanan akhir?", [
      "1.000, karena simpanan awal tidak mendukung pinjaman lanjutan",
      "900, dari satu penyaluran sebesar 90% simpanan awal",
      "10.000, dari simpanan awal dikalikan pengganda 1/0,1",
      "100, dari simpanan awal dikalikan rasio cadangan 10%",
    ], 2, "Pengganda sederhana=1/r=1/0,1=10; total simpanan model=1.000×10=10.000.", [
      "Pilihan ini hanya menghitung setoran awal dan mengabaikan rangkaian simpanan berikutnya.",
      "1.000×0,9=900, yaitu kredit putaran berikutnya, bukan total simpanan.",
      "100 hanyalah cadangan wajib awal (10% dari 1.000), bukan total simpanan akhir.",
    ]),
    q("eko2-b08-q06", "Hitungan • Pengganda dengan kebocoran", "Dengan rasio cadangan r=0,1 dan rasio uang tunai c=0,2, berapa pengganda uang menurut (1+c)/(c+r)?", [
      "4,0, dari 1,2 dibagi 0,3",
      "3,0, dari jumlah 0,2 dan 0,1 yang dikalikan 10",
      "10,0, dari satu dibagi rasio cadangan 0,1",
      "0,3, dari jumlah rasio uang tunai dan cadangan",
    ], 0, "Pengganda=(1+0,2)/(0,2+0,1)=1,2/0,3=4,0.", [
      "Mengalikan jumlah rasio 0,3 dengan 10 menghasilkan 3,0, bukan membagi 1,2 dengan 0,3.",
      "1/r=10 adalah pengganda sederhana tanpa kebocoran uang tunai.",
      "0,3 adalah penyebut formula, bukan nilai pengganda.",
    ]),
    q("eko2-b08-q07", "Hitungan • Teori kuantitas", "Menurut MV=PY, berapa P jika M=440, V=5, dan Y=1.000?", [
      "0,088, dari M dibagi hasil kali V dan Y",
      "2,0, dari tingkat harga kondisi dasar sebelum M berubah",
      "0,44, dari 440 dibagi 1.000 tanpa memasukkan kecepatan",
      "2,2, dari 440×5 dibagi 1.000",
    ], 3, "P=MV/Y=440×5/1.000=2,2.", [
      "M dibagi V×Y membalik persamaan dan tidak menghasilkan tingkat harga.",
      "Harga dasar 2,0 berlaku untuk M=400, bukan M=440 ketika V dan Y tetap.",
      "Mengabaikan V menghitung M/Y=0,44, bukan P=2,2.",
    ]),
    q("eko2-b08-q08", "Kasus • Aturan Taylor", "Dengan π=4%, kesenjangan output −2%, π*=2%, dan r*=2%, berapa rekomendasi suku bunga aturan Taylor?", [
      "5,0%, dari π+r* dikurangi satu poin respons output",
      "6,0%, dari 4+2+0,5(4−2)+0,5(−2)",
      "7,0%, dari π+r* ditambah respons inflasi tanpa respons output",
      "3,0%, dari r* ditambah respons inflasi tanpa komponen lainnya",
    ], 1, "i=4+2+0,5(4−2)+0,5(−2)=4+2+1−1=6,0%.", [
      "Pilihan ini hanya mengurangi satu poin respons output dan mengabaikan tambahan satu poin respons inflasi.",
      "Tanpa respons output, 4+2+1=7,0%; kesenjangan negatif pada soal harus ikut dihitung.",
      "Pilihan ini menjumlahkan r*=2 dengan respons inflasi +1, tetapi mengabaikan inflasi aktual dan kesenjangan output.",
    ]),
    q("eko2-b08-q09", "Kasus • Kerugian kredit bank", "Bank memiliki kredit 800 dan modal awal 100 seperti neraca contoh. Jika kerugian kredit 12,5%, apa dampaknya pada modal dan solvabilitas?", [
      "Kerugian 100 menghabiskan modal sehingga bank tak solven",
      "Kerugian 12,5 menyisakan modal 87,5 jika persentase diterapkan pada modal",
      "Kerugian 100 menurunkan modal menjadi nol tetapi bank tetap solven",
      "Modal tetap 100 karena kerugian belum mengubah nilai kewajiban simpanan",
    ], 0, "Kerugian=12,5%×800=100; modal tersisa=100−100=0, sehingga bank tak solven menurut kriteria modal harus positif.", [
      "Kerugian 12,5 adalah 12,5% dari modal 100, bukan 12,5% dari kredit 800.",
      "Modal nol berarti bantalan modal habis dan bank tidak lagi solven menurut definisi yang dipakai.",
      "Rugi kredit mengurangi nilai aset dan modal walaupun kewajiban simpanan tidak berubah.",
    ]),
    q("eko2-b08-q10", "Kasus • Pinjaman DeFi dan LTV", "Pinjaman DeFi 100 dijamin agunan yang turun dari 150 menjadi 120. Jika batas likuidasi LTV 80%, apa yang terjadi?", [
      "LTV 66,7%, posisi aman karena dihitung dari agunan awal 150",
      "LTV 80,0%, posisi tepat pada batas tanpa pemicu likuidasi",
      "LTV 83,3%, tetapi posisi aman jika ambang likuidasi dianggap 85%",
      "LTV 83,3%, melampaui batas sehingga posisi dilikuidasi",
    ], 3, "LTV=100/120×100=83,3%, melebihi ambang 80%, sehingga posisi memasuki likuidasi.", [
      "Agunan saat ini 120, bukan 150; rasio 100/120 lebih tinggi dari 66,7%.",
      "Batas 80% akan tercapai pada agunan 125; nilai 120 membuat LTV melampaui batas.",
      "Perhitungan 100/120 memang 83,3%, tetapi ambang pada soal adalah 80%, bukan 85%.",
    ]),
  ],
  "eko2-b09": [
    q("eko2-b09-q01", "Konsep • Permintaan agregat", "Mengapa kurva permintaan agregat biasanya miring turun terhadap tingkat harga?", [
      "Harga lebih tinggi selalu menaikkan kekayaan riil dan konsumsi rumah tangga",
      "Harga lebih tinggi menambah ekspor neto melalui apresiasi mata uang",
      "Harga lebih rendah dapat menaikkan kekayaan riil, menurunkan bunga, dan mendukung ekspor neto",
      "Harga lebih rendah mengurangi daya beli uang dan menghambat seluruh investasi",
    ], 2, "Efek kekayaan, suku bunga, dan nilai tukar dapat membuat pengeluaran agregat yang diminta meningkat saat tingkat harga turun.", [
      "Harga lebih tinggi mengurangi daya beli saldo nominal, bukan menaikkannya.",
      "Mata uang yang menguat cenderung menekan ekspor neto, bukan menaikkannya.",
      "Harga lebih rendah dapat meningkatkan daya beli saldo; tiga saluran itu menjelaskan kemiringan AD.",
    ]),
    q("eko2-b09-q02", "Konsep • SRAS dan LRAS", "Pernyataan mana yang tepat tentang penawaran agregat jangka pendek dan jangka panjang?", [
      "SRAS dapat miring naik karena biaya kaku; LRAS tegak pada keluaran potensial",
      "SRAS selalu tegak pada keluaran potensial; LRAS miring turun karena efek kekayaan",
      "SRAS dan LRAS sama-sama tegak karena harga tidak memengaruhi produksi",
      "SRAS miring turun karena upah kaku; LRAS mendatar pada setiap tingkat harga",
    ], 0, "Kekakuan sebagian upah dan harga membuat SRAS miring naik; LRAS menunjukkan kapasitas potensial yang tidak ditentukan tingkat harga.", [
      "Pilihan ini menukar ciri jangka pendek dan jangka panjang.",
      "Kekakuan biaya membuat produksi merespons harga jangka pendek dalam model, bukan membuat kedua kurva tegak.",
      "SRAS dalam model ini miring naik, sedangkan LRAS tegak pada potensi.",
    ]),
    q("eko2-b09-q03", "Konsep • Pengganda fiskal", "Mengapa pengganda belanja pemerintah dapat lebih besar dari satu dalam model Keynesian sederhana?", [
      "Seluruh belanja pemerintah langsung menjadi tabungan sehingga pendapatan berlipat",
      "Pajak selalu turun sebesar belanja pemerintah dan menambah konsumsi satu banding satu",
      "Belanja awal hanya memengaruhi harga sehingga tidak mengubah pendapatan penerima",
      "Sebagian pendapatan tambahan dibelanjakan lagi dan menjadi pendapatan pihak berikutnya",
    ], 3, "Dengan MPC positif, putaran konsumsi berulang menambah keluaran di atas belanja awal; pengganda 1/(1−MPC) melebihi satu.", [
      "Tabungan adalah kebocoran dari putaran belanja, bukan sumber penggandaan pendapatan.",
      "Penurunan pajak bukan mekanisme otomatis yang mendefinisikan pengganda belanja.",
      "Belanja menciptakan permintaan dan pendapatan dalam model, bukan hanya mengubah harga.",
    ]),
    q("eko2-b09-q04", "Konsep • Penstabil otomatis", "Apa contoh penstabil otomatis yang meredam siklus tanpa keputusan kebijakan baru?", [
      "Parlemen mengesahkan proyek infrastruktur tambahan setiap kali keluaran turun",
      "Pajak progresif dan tunjangan pengangguran berubah mengikuti pendapatan atau kondisi kerja",
      "Bank sentral mengubah suku bunga acuan melalui rapat kebijakan terjadwal",
      "Pemerintah mengubah sasaran inflasi setelah setiap perubahan harga bulanan",
    ], 1, "Pajak progresif dan tunjangan berubah bersama pendapatan atau pengangguran tanpa undang-undang stimulus baru.", [
      "Proyek tambahan yang disahkan khusus merupakan kebijakan diskresioner dan memerlukan keputusan.",
      "Perubahan suku bunga acuan adalah kebijakan moneter aktif lewat keputusan rapat, bukan penstabil fiskal otomatis.",
      "Mengubah sasaran inflasi adalah keputusan kebijakan, bukan mekanisme yang bekerja otomatis mengikuti pendapatan.",
    ]),
    q("eko2-b09-q05", "Hitungan • Pengganda belanja", "Jika MPC=0,8 dan belanja pemerintah naik 20, berapa perubahan keluaran dalam model sederhana?", [
      "Naik 100, karena pengganda belanja 1/(1−0,8)=5",
      "Naik 80, karena pengganda belanja sama dengan MPC dikali perubahan G",
      "Turun 100, karena pengganda belanja bertanda negatif terhadap keluaran",
      "Naik 20, karena perubahan keluaran selalu sama dengan perubahan belanja",
    ], 0, "Pengganda belanja=1/(1−0,8)=5; ΔY=5×20=+100.", [
      "Hasil 80 memakai MPC×ΔG dan melewatkan putaran konsumsi tambahan.",
      "Pengganda belanja positif; kenaikan belanja tidak menurunkan keluaran dalam model.",
      "Perubahan keluaran sama dengan belanja awal hanya jika penggandanya satu.",
    ]),
    q("eko2-b09-q06", "Hitungan • Pengganda pajak", "Jika MPC=0,8 dan pajak turun 20, berapa perubahan keluaran dalam model pajak sederhana?", [
      "Turun 80, karena pajak yang lebih rendah mengurangi pendapatan disposabel",
      "Naik 20, karena perubahan pajak diteruskan satu banding satu ke keluaran",
      "Naik 80, karena pengganda pajak −0,8/(1−0,8)=−4 dikali perubahan pajak −20",
      "Turun 100, karena pajak memakai pengganda belanja sebesar lima",
    ], 2, "Pengganda pajak=−0,8/(1−0,8)=−4; ΔT=−20 sehingga ΔY=(−4)×(−20)=+80.", [
      "Pajak turun menambah pendapatan disposabel; tanda hasilnya positif, bukan negatif.",
      "Perubahan keluaran tidak satu banding satu karena pajak memiliki pengganda −4.",
      "Pengganda belanja lima bukan pengganda pajak; rumus pajak memberi kenaikan 80.",
    ]),
    q("eko2-b09-q07", "Hitungan • Dinamika utang", "Rasio utang awal 60% PDB, r=5%, g=3%, dan saldo primer nol. Berapa rasio utang pada tahun berikutnya?", [
      "60,00%, karena saldo primer nol membuat rasio tetap",
      "61,17%, dari 60×1,05/1,03",
      "63,00%, dari menambahkan selisih r−g sebesar dua pada rasio awal",
      "58,86%, dari 60×1,03/1,05",
    ], 1, "d(1)=60×(1+0,05)/(1+0,03)=61,17% PDB.", [
      "Walau saldo primer nol, r lebih besar daripada g sehingga rasio naik dalam rumus.",
      "63,00% menambahkan r−g sebesar dua poin langsung; dinamika memakai rasio (1+r)/(1+g)=1,05/1,03.",
      "Membalik pembilang dan penyebut (1,03/1,05) menurunkan rasio, padahal r lebih besar dari g membuat rasio naik.",
    ]),
    q("eko2-b09-q08", "Kasus • Guncangan permintaan", "Pada AD: Y=1.400+a−200P dan SRAS: Y=800+100P, AD naik 100 dari keseimbangan dasar. Apa hasil keseimbangan baru?", [
      "P=1,667 dan Y=966,7, yaitu kesenjangan resesi",
      "P=2,000 dan Y=1.000, karena perubahan AD tidak menggeser keseimbangan",
      "P=2,333 dan Y=933,3, yaitu stagflasi akibat biaya produksi",
      "P=2,333 dan Y=1.033,3, yaitu keluaran di atas potensi",
    ], 3, "P=(600+100)/300=2,333; Y=800+100×2,333=1.033,3, di atas potensi 1.000.", [
      "Hasil ini cocok dengan AD turun 100, bukan naik 100.",
      "Keseimbangan dasar berlaku saat pergeseran AD nol.",
      "Keluaran 933,3 muncul saat SRAS turun 100, bukan saat AD naik.",
    ]),
    q("eko2-b09-q09", "Kasus • Guncangan penawaran", "Biaya energi naik sehingga SRAS bergeser s=−100. Dengan AD tetap pada a=0, apa hasil keseimbangan?", [
      "P=2,333 dan Y=933,3, harga naik saat keluaran turun",
      "P=1,667 dan Y=1.066,7, harga turun saat keluaran naik",
      "P=2,000 dan Y=1.000, karena biaya hanya mengubah tingkat harga",
      "P=1,667 dan Y=966,7, yaitu kesenjangan resesi karena AD turun",
    ], 0, "P=(600−(−100))/300=2,333; Y=800−100+100×2,333=933,3; ini stagflasi pada ilustrasi.", [
      "Itu hasil SRAS naik 100 (biaya turun), berlawanan dengan guncangan biaya naik.",
      "Guncangan SRAS menggeser keseimbangan harga dan keluaran dari titik dasar; P tidak tetap 2,000.",
      "P=1,667 dan Y=966,7 terjadi saat AD turun 100, bukan karena SRAS bergeser ke kiri.",
    ]),
    q("eko2-b09-q10", "Kasus • Efektivitas stimulus", "Keluaran aktual 960, potensi 1.000, MPC=0,8, dan efektivitas kebijakan 60%. Berapa tambahan belanja yang diperlukan menurut model?", [
      "8,00, karena kesenjangan 40 dibagi pengganda belanja 5",
      "10,00, karena kesenjangan 40 dibagi besar pengganda pajak 4",
      "66,67, karena kesenjangan 40 dibagi efektivitas 0,6 saja",
      "13,33, karena 40 dibagi pengganda belanja 5 lalu dibagi 0,6",
    ], 3, "ΔG=40/(5×0,6)=13,33; efektivitas kurang dari penuh menaikkan kebutuhan stimulus dibanding 8,00.", [
      "8,00 adalah kebutuhan bila efektivitas 100%, bukan 60%.",
      "10,00 adalah kebutuhan pemotongan pajak pada efektivitas penuh, bukan tambahan belanja.",
      "40/0,6=66,67; pengganda belanja lima juga harus dimasukkan.",
    ]),
  ],
  "eko2-b10": [
    q("eko2-b10-q01", "Konsep • Keunggulan komparatif", "Negara A lebih produktif daripada negara B dalam kain maupun pangan. Mengapa perdagangan tetap dapat menguntungkan keduanya?", [
      "Karena perdagangan hanya menguntungkan negara yang lebih produktif dalam semua barang",
      "Karena tiap negara berspesialisasi pada barang berbiaya peluang lebih rendah lalu menukarnya",
      "Karena negara kurang produktif otomatis unggul komparatif dalam semua barang",
      "Karena keunggulan komparatif ditentukan oleh jumlah jam kerja, bukan biaya peluang",
    ], 1, "Keuntungan perdagangan bersumber dari perbedaan biaya peluang, bukan produktivitas absolut. Tiap negara memiliki barang dengan biaya peluang lebih rendah.", [
      "Keuntungan berasal dari perbedaan biaya peluang, jadi negara yang kurang produktif pun ikut untung.",
      "Biaya peluang saling berkebalikan, sehingga satu negara tidak bisa unggul komparatif dalam kedua barang sekaligus.",
      "Keunggulan komparatif ditentukan oleh barang lain yang dikorbankan (biaya peluang), bukan jam kerja absolut.",
    ]),
    q("eko2-b10-q02", "Konsep • Tarif", "Bagaimana dampak tarif pada ekonomi kecil terbuka yang mengimpor barang?", [
      "Konsumen untung karena harga domestik turun, sedangkan produsen rugi",
      "Konsumen dan produsen sama-sama untung, sedangkan pemerintah rugi",
      "Total surplus tidak berubah karena transfer saling menghapus",
      "Konsumen rugi, produsen dan pemerintah untung, tetapi ada kerugian neto",
    ], 3, "Tarif menaikkan harga domestik: konsumen rugi, produsen untung, pemerintah menerima penerimaan tarif. Jumlahnya lebih kecil dari kerugian konsumen; selisihnya deadweight loss.", [
      "Tarif menaikkan harga domestik, bukan menurunkannya, sehingga konsumen rugi.",
      "Konsumen justru rugi karena harga naik, dan pemerintah menerima penerimaan tarif.",
      "Keuntungan produsen dan penerimaan pemerintah tidak menutup kerugian konsumen; selisihnya DWL (20 pada t=2).",
    ]),
    q("eko2-b10-q03", "Konsep • Neraca pembayaran", "Bagaimana defisit transaksi berjalan dibiayai menurut identitas neraca pembayaran?", [
      "Oleh arus modal masuk neto pada transaksi finansial",
      "Defisit itu menandakan ekonomi pasti sedang menyusut",
      "Oleh defisit transaksi finansial dengan tanda yang sama",
      "Defisit itu hanya muncul bila pemerintah defisit anggaran",
    ], 0, "Transaksi berjalan + transaksi finansial (arus modal masuk neto) + selisih = 0, sehingga defisit berjalan dicerminkan arus modal masuk.", [
      "Defisit berjalan tidak otomatis berarti ekonomi menyusut; ia dapat muncul saat investasi tinggi dan dibiayai modal luar.",
      "Tandanya berlawanan: defisit berjalan dicerminkan arus modal masuk, sehingga jumlah keduanya nol.",
      "Defisit berjalan juga bisa muncul karena tabungan swasta lebih kecil dari investasi tanpa defisit anggaran (S − I = NX).",
    ]),
    q("eko2-b10-q04", "Konsep • Kurs nominal dan riil", "Apa perbedaan kurs nominal dan kurs riil?", [
      "Kurs nominal memperhitungkan perbedaan tingkat harga, kurs riil tidak",
      "Kurs riil hanya untuk barang impor, kurs nominal hanya untuk ekspor",
      "Kurs nominal adalah harga satu mata uang dalam mata uang lain; kurs riil menyesuaikannya dengan tingkat harga",
      "Kurs nominal dan kurs riil selalu sama dalam jangka pendek maupun panjang",
    ], 2, "Kurs nominal e adalah harga mata uang; kurs riil e×P*/P membandingkan harga barang luar negeri dengan barang domestik.", [
      "Terbalik: kurs riil yang menyesuaikan perbedaan tingkat harga.",
      "Keduanya tidak dibatasi pada impor atau ekspor saja.",
      "Keduanya bisa berbeda arah karena tingkat harga berubah; misalnya e tetap tetapi P naik menurunkan kurs riil.",
    ]),
    q("eko2-b10-q05", "Hitungan • Impor ekonomi terbuka", "Dengan Qd=100−5P dan Qs=−20+5P serta harga dunia 8, berapa jumlah impor?", [
      "20, dari jumlah produksi domestik pada harga 8",
      "60, dari jumlah permintaan domestik pada harga 8",
      "40, dari permintaan 60 dikurangi produksi domestik 20",
      "80, dari penjumlahan permintaan 60 dan produksi 20",
    ], 2, "Pada P=8: Qd=100−40=60 dan Qs=−20+40=20, sehingga impor = 60 − 20 = 40.", [
      "20 adalah Qs pada harga 8, bukan impor.",
      "60 adalah Qd pada harga 8; impor adalah Qd dikurangi Qs.",
      "80 menjumlahkan Qd dan Qs; impor adalah selisihnya, yaitu 40.",
    ]),
    q("eko2-b10-q06", "Hitungan • Tarif", "Pada harga dunia 8 dengan tarif t=2, hasil yang benar adalah...", [
      "Impor 20, penerimaan 40, DWL 20",
      "Impor 40, penerimaan 80, DWL 20",
      "Impor 20, penerimaan 40, DWL 40",
      "Impor 30, penerimaan 30, DWL 5",
    ], 0, "Harga domestik 10; Qd=50, Qs=30, impor 20; penerimaan 2×20=40; DWL = ½×2×(30−20)+½×2×(60−50) = 20.", [
      "Impor 40 berlaku pada t=0; pada t=2 harga domestik 10 membuat impor 20 dan penerimaan 2×20=40.",
      "DWL = 10 + 10 = 20, bukan 40.",
      "Impor 30, penerimaan 30, dan DWL 5 berlaku untuk t=1, bukan t=2.",
    ]),
    q("eko2-b10-q07", "Hitungan • Kurs riil", "Dengan e=10 MD per MA, P=100 MD, dan P*=12 MA, berapakah kurs riil e×P*/P?", [
      "0,83, dari 100 dibagi hasil kali 10 dan 12",
      "8,33, dari harga domestik dibagi harga luar negeri",
      "120, dari kurs dikali harga luar negeri saja",
      "1,20, dari 10×12 dibagi 100",
    ], 3, "Kurs riil = 10×12/100 = 1,20: barang luar negeri 20% lebih mahal dibanding barang domestik.", [
      "0,83 adalah kebalikan (100/120), bukan e×P*/P.",
      "8,33 adalah P/P*, yaitu kurs PPP, bukan kurs riil.",
      "120 adalah e×P* tanpa dibagi harga domestik P.",
    ]),
    q("eko2-b10-q08", "Kasus • Transaksi berjalan", "Ekspor 100, impor 120, pendapatan primer neto −20, dan transfer neto +10. Berapa transaksi berjalan?", [
      "−20, hanya dari ekspor neto",
      "−30, dari −20 + (−20) + 10",
      "+10, hanya dari transfer neto",
      "−40, karena transfer dikurangkan",
    ], 1, "Transaksi berjalan = ekspor neto (−20) + pendapatan primer neto (−20) + transfer (+10) = −30.", [
      "−20 hanya ekspor neto; pendapatan primer dan transfer juga termasuk transaksi berjalan.",
      "+10 hanya transfer neto dan mengabaikan ekspor neto serta pendapatan primer.",
      "Transfer neto +10 menambah, bukan mengurangi: −20 − 20 + 10 = −30.",
    ]),
    q("eko2-b10-q09", "Kasus • UIP", "Kurs e=10, bunga domestik 6%, dan bunga asing 2%. Menurut UIP, apa kurs yang diharapkan setahun lagi?", [
      "10,39, sehingga MD diperkirakan terdepresiasi sekitar 3,9%",
      "9,62, sehingga MD diperkirakan terapresiasi sekitar 3,8%",
      "10,00, karena bunga tidak memengaruhi kurs",
      "10,60, karena kurs naik sebesar bunga domestik",
    ], 0, "e diharapkan = 10×1,06/1,02 = 10,39, atau naik sekitar 3,92% (MD melemah).", [
      "9,62 memakai arah terbalik (10×1,02/1,06); bunga domestik lebih tinggi membuat MD diperkirakan melemah.",
      "UIP mengaitkan selisih bunga dengan perubahan kurs yang diharapkan, sehingga e tidak tetap.",
      "10,60 hanya menambahkan 6% dan mengabaikan bunga asing; rumusnya e×(1+i)/(1+i*) = 10,39.",
    ]),
    q("eko2-b10-q10", "Kasus • Trilema", "Sebuah negara memilih kurs tetap dan modal bebas, dengan cadangan 60 dan intervensi 10 per bulan. Kesimpulan yang tepat?", [
      "Moneter mandiri tetap penuh dan cadangan bertahan 60 bulan",
      "Kurs tetap akan bertahan selamanya karena modal bebas menambah cadangan",
      "Kurs tetap hilang lebih dulu, sedangkan moneter mandiri tidak terpengaruh",
      "Moneter mandiri hilang, dan cadangan bertahan sekitar 6 bulan",
    ], 3, "Kurs tetap dengan modal bebas mengorbankan kebijakan moneter mandiri. Cadangan bertahan 60/10 = 6 bulan bila tekanan berlanjut.", [
      "Pada kombinasi ini moneter mandiri hilang, dan 60/10 = 6 bulan, bukan 60.",
      "Cadangan terbatas; intervensi 10 per bulan menguras cadangan dalam 6 bulan.",
      "Yang dikorbankan kombinasi ini adalah moneter mandiri; kurs tetap baru jebol bila cadangan habis.",
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
    { id: "eko2-b02-e02", prompt: "Gunakan fungsi Qd = 120 − 4P dan Qs = 24 + 4P. Hitung ekuilibrium (jawaban: P*=12, Q*=72), lalu hitung surplus atau kekurangan ketika harga ditetapkan pada P=2, yaitu 10 satuan di bawah P*. Tunjukkan semua langkah dan satuannya.", rubric, reviewPoints: ["Samakan Qd=Qs: 120−4P=24+4P, sehingga P*=12; substitusi menghasilkan Q*=72", "Pastikan P=2 adalah 10 satuan di bawah P*=12", "Hitung Qd=120−4×2=112 dan Qs=24+4×2=32", "Simpulkan kekurangan 112−32=80 unit per periode"] },
  ],
  "eko2-b03": [
    { id: "eko2-b03-e01", prompt: "Gunakan kurva Qd=100−5P dan Qs=−20+5P untuk membandingkan ekuilibrium, price ceiling P=8, dan price floor P=16. Hitung kekurangan/surplus, transaksi, SK, SP, total surplus, dan DWL; jelaskan asumsi alokasi serta distribusi manfaat.", rubric, reviewPoints: ["Menghitung ekuilibrium P*=12 dan Q*=40", "Menunjukkan Q transaksi sisi pendek pasar", "Menghitung surplus dengan luas yang tepat dan membedakan transfer dari DWL", "Membahas asumsi alokasi ceiling serta distribusi", "Membedakan prediksi positif dari penilaian normatif"] },
    { id: "eko2-b03-e02", prompt: "Analisis pajak per unit t=4 pada Qd=100−5P dan Qs=−20+5P. Hitung harga pembeli, harga penjual, insiden, penerimaan, surplus baru, dan DWL. Lalu jelaskan bagaimana hasil berubah bila salah satu sisi lebih elastis dan bagaimana subsidi membalik wedge.", rubric, reviewPoints: ["Membentuk fungsi penawaran setelah pajak dengan P penjual=P pembeli−t", "Menghitung P pembeli=14, P penjual=10, dan Q=30", "Memisahkan beban pembeli/penjual, penerimaan 120, dan DWL 20", "Menghubungkan insiden dengan elastisitas relatif", "Menjelaskan subsidi bersama biaya fiskal dan konsekuensi alokasi"] },
  ],
  "eko2-b04": [
    { id: "eko2-b04-e01", prompt: "Bandingkan perusahaan dalam pasar persaingan sempurna dan monopoli dengan fungsi biaya yang sama. Jelaskan aturan produksi, laba, dan deadweight loss; kaitkan hasilnya dengan keputusan masuk-keluar pasar dan efisiensi sosial.", rubric, reviewPoints: ["Membedakan P = MC dan MR = MC", "Menghitung dan menjelaskan laba serta DWL", "Mengaitkan insentif masuk-keluar pasar dengan laba ekonomi", "Membahas efisiensi sosial secara jelas"] },
    { id: "eko2-b04-e02", prompt: "Analisis pasar oligopoli dan persaingan monopolistik. Gunakan HHI atau CR2, salah satu matriks permainan sederhana, dan perbedaan produk untuk menjelaskan mengapa hasil pasar mungkin tidak efisien dan mengapa kolusi mudah pecah.", rubric, reviewPoints: ["Memasukkan konsentrasi pasar dan pengukuran yang relevan", "Menggunakan matriks permainan atau strategi dominan dengan benar", "Membedakan oligopoli dari persaingan monopolistik", "Menjelaskan godaan curang dan efek pada kesejahteraan"] },
    { id: "eko2-b04-e03", prompt: "Jelaskan eksternalitas negatif dan positif, analisis optimum sosial, serta kebijakan yang sesuai seperti pajak Pigouvian, subsidi, atau pengaturan sumber daya bersama. Gunakan contoh protokol open-source, ruang blok, atau token proyek untuk memperkuat argumen.", rubric, reviewPoints: ["Menjelaskan biaya sosial versus biaya privat", "Mengidentifikasi titik optimum sosial dan konsekuensi over/underproduction", "Menghubungkan kebijakan dengan insentif", "Menggunakan contoh Web3 yang konkret dan netral"] },
  ],
  "eko2-b05": [
    { id: "eko2-b05-e01", prompt: "Hitung dan bandingkan PDB dengan pendekatan pengeluaran dan pendapatan menggunakan C=600, I=150, G=200, X=100, M=120 dan pendapatan faktor yang diberikan dalam Bab 5. Jelaskan mengapa pertumbuhan nominal 11,8% tidak boleh dipakai sendirian untuk menyimpulkan pertumbuhan produksi.", rubric, reviewPoints: ["Menghitung ekspor neto dan PDB pengeluaran sebesar 930", "Menjumlahkan upah, sewa, bunga, laba, pajak tak langsung neto, dan penyusutan menjadi 930", "Menjelaskan harga berjalan dan harga tahun dasar", "Membedakan pertumbuhan nominal 11,8% dari pertumbuhan riil 4%"] },
    { id: "eko2-b05-e02", prompt: "Evaluasi PDB sebagai ukuran kesejahteraan dengan memakai contoh GNI, PDB riil per kapita, dan keterbatasan distribusi pada Bab 5 bagian 4 serta perubahan siklus dan kesenjangan output pada bagian 5. Jelaskan indikator tambahan yang perlu diperiksa sebelum mengambil kesimpulan.", rubric, reviewPoints: ["Membedakan produksi domestik dari pendapatan faktor nasional", "Menghitung atau menafsirkan pertumbuhan per kapita 2,97%", "Menjelaskan keterbatasan PDB dan distribusi", "Menafsirkan kesenjangan output −5% serta sifat estimasi PDB potensial", "Membedakan indikator siklus dari ramalan pasti"] },
  ],
  "eko2-b06": [
    { id: "eko2-b06-e01", prompt: "Hitung IHK dan inflasi dari keranjang tetap pada Bab 6 bagian 1, jelaskan bias pengukuran melalui substitusi, lalu bandingkan bunga riil pendekatan dan eksak untuk i=8%, π=5%.", rubric, reviewPoints: ["Menghitung biaya keranjang 2024=900 dan 2025=950", "Menghitung IHK=105,56 dan inflasi=5,56%", "Menjelaskan substitusi, mutu, atau barang baru sebagai keterbatasan pengukuran", "Menghitung bunga riil pendekatan 3% dan eksak 2,86%"] },
    { id: "eko2-b06-e02", prompt: "Jelaskan pengangguran friksional, struktural, dan siklis; hitung hukum Okun saat u=7%, u*=5%, dan PDB potensial 1.000; lalu gunakan model Phillips untuk membahas ekspektasi inflasi saat u=3% dan πe meningkat dari 3% menjadi 4% dan 5%.", rubric, reviewPoints: ["Membedakan tiga jenis pengangguran", "Menghitung kesenjangan output −4% dan PDB aktual 960", "Menghitung inflasi Phillips 4%, 5%, dan 6%", "Menjelaskan penyesuaian ekspektasi serta sifat ilustratif model"] },
  ],
  "eko2-b07": [
    { id: "eko2-b07-e01", prompt: "Gunakan contoh pertumbuhan 2% dan 4% selama 30 tahun, fungsi produksi, serta akuntansi pertumbuhan pada Bab 7 untuk menghitung keluaran dan menjelaskan sumber perbedaan produktivitas. Bahas bagaimana modal, tenaga kerja, teknologi, dan modal manusia berkontribusi tanpa menganggap residu sebagai teknologi murni.", rubric, reviewPoints: ["Menghitung hasil majemuk 1.811,36 dan 3.243,40", "Menerapkan fungsi produksi dan produk marjinal modal dengan benar", "Menghitung kontribusi modal 2,0, tenaga kerja 0,6, dan produktivitas 1,0 poin", "Menjelaskan residu Solow serta keterbatasan pengukuran"] },
    { id: "eko2-b07-e02", prompt: "Bandingkan lintasan dua perekonomian dalam model Solow pada Bab 7 bagian 3 dan 5. Hitung keadaan mapan untuk tingkat tabungan yang diberikan, jelaskan kaidah emas dan konvergensi bersyarat, lalu evaluasi peran institusi, insentif, serta pertukaran konsumsi sekarang dengan kapasitas masa depan.", rubric, reviewPoints: ["Menghitung k*=(s/δ)² dan keluaran mapan", "Membandingkan konsumsi mapan serta kaidah emas", "Menjelaskan bahwa konvergensi memerlukan parameter dasar sebanding", "Membahas institusi atau kebijakan sebagai pembentuk insentif, bukan resep tunggal"] },
  ],
  "eko2-b08": [
    { id: "eko2-b08-e01", prompt: "Jelaskan tiga fungsi uang dan bandingkan secara konseptual dengan aset kripto serta stablecoin. Lalu analisis neraca bank pada Bab 8 bagian 2: hitung modal setelah rugi kredit 5%, ambang kerugian yang menghabiskan modal, dan dampak penarikan simpanan 10%, 20%, serta 30%. Jelaskan bank run, likuiditas, solvabilitas, dan perbedaan risiko pinjaman DeFi beragunan.", rubric, reviewPoints: ["Menjelaskan alat tukar, satuan hitung, dan penyimpan nilai beserta barter", "Menghitung modal menjadi 60 setelah kerugian 40 dan batas 12,5% dari kredit", "Membedakan penarikan yang tertutup cadangan, memerlukan penjualan surat berharga, atau melebihi aset likuid", "Membandingkan secara konseptual likuidasi agunan otomatis dengan intermediasi dan risiko bank"] },
    { id: "eko2-b08-e02", prompt: "Jelaskan penciptaan uang melalui rantai simpanan dengan r=10%, hitung pengganda setelah kebocoran c=0,2, lalu gunakan MV=PY untuk membahas perubahan harga saat uang, kecepatan, atau keluaran berubah. Terakhir, hitung aturan Taylor untuk π=4%, kesenjangan output −2%, π*=2%, dan r*=2%; bahas asumsi dan batas kebijakan.", rubric, reviewPoints: ["Menghitung lima putaran berjumlah 4.095,1 dan total sederhana 10.000", "Menghitung pengganda kebocoran 4,0 dan uang beredar 4.000 untuk basis 1.000", "Menjelaskan identitas kuantitas serta asumsi V dan Y", "Menghitung rekomendasi Taylor 6,0% dan suku bunga riil sederhana 2%", "Membahas ekspektasi, batas bawah nol, serta sifat pedoman ilustratif"] },
  ],
  "eko2-b09": [
    { id: "eko2-b09-e01", prompt: "Gunakan model AD-AS Bab 9 untuk membandingkan keseimbangan dasar, AD yang naik 100, dan SRAS yang turun 100. Hitung P dan Y pada tiap kasus, jelaskan kesenjangan atau stagflasi, lalu bandingkan bagaimana respons kebijakan fiskal dapat membantu tanpa mengabaikan jeda dan biaya.", rubric, reviewPoints: ["Menghitung keseimbangan dasar P=2,000 dan Y=1.000", "Menghitung AD naik: P=2,333 dan Y=1.033,3", "Menghitung SRAS turun: P=2,333 dan Y=933,3 serta menamai stagflasi", "Membedakan guncangan permintaan dan penawaran", "Membahas keterbatasan respons fiskal dan penyesuaian jangka panjang"] },
    { id: "eko2-b09-e02", prompt: "Hitung pengganda fiskal untuk MPC=0,8 dan gunakan dinamika utang d(t+1)=d(t)(1+r)/(1+g)−pb pada data Bab 9. Terakhir, jelaskan kebutuhan stimulus saat Y=960 dengan efektivitas 60%, serta bagaimana jeda kebijakan, crowding out, dan ketidakpastian PDB potensial membatasi kesimpulan.", rubric, reviewPoints: ["Menghitung pengganda G=5, pajak=−4, dan anggaran berimbang=1", "Menghitung rasio utang 61,17% setelah satu tahun serta surplus primer penstabil 1,17% PDB", "Menghitung ΔG=13,33 dan pemotongan pajak=16,67 pada efektivitas 60%", "Menjelaskan jeda dan efek mengeluarkan secara kualitatif", "Menyatakan bahwa estimasi PDB potensial dan pengganda tidak pasti"] },
  ],
  "eko2-b10": [
    { id: "eko2-b10-e01", prompt: "Gunakan model perdagangan internasional untuk membandingkan keunggulan komparatif, harga dunia, dan distribusi surplus antara konsumen dan produsen. Jelaskan kapan negara menjadi importir atau eksportir, bagaimana perubahan harga dunia memengaruhi surplus, dan mengapa ada pihak yang rugi meski total surplus naik.", rubric, reviewPoints: ["Merinci bila harga dunia di bawah atau di atas ekuilibrium domestik", "Menghitung perubahan surplus konsumen dan produsen dengan benar", "Menjelaskan distribusi manfaat dan biaya", "Membedakan hasil total dari distribusi serta efek pada kelompok yang kalah"] },
    { id: "eko2-b10-e02", prompt: "Analisis dampak tarif, neraca pembayaran, serta kurs pada perekonomian terbuka. Hitung hasil sederhana untuk impor, penerimaan tarif, transaksi berjalan, dan identitas S−I = NX, lalu jelaskan bagaimana kurs dan arus modal memengaruhi ekspor neto serta ketergantungan pada pembiayaan luar negeri.", rubric, reviewPoints: ["Menghitung import, tax revenue, dan deadweight loss dalam data sederhana", "Menjelaskan transaksi berjalan, finansial, dan identitas neraca pembayaran", "Menghubungkan kurs riil dengan daya saing ekspor", "Membahas risiko ketergantungan pembiayaan eksternal dan perubahan arus modal"] },
  ],
};

export const FINAL_EXAM_QUESTIONS: AssessmentQuestion[] = [
  q("eko2-final-q01", "Konsep • Biaya peluang", "Apa yang dimaksud dengan biaya peluang suatu pilihan?", [
    "Jumlah uang yang dibayarkan untuk menjalankan pilihan tersebut",
    "Nilai alternatif terbaik yang dikorbankan saat memilih",
    "Jumlah seluruh alternatif yang tidak dipilih",
    "Manfaat total yang diperoleh dari pilihan tersebut",
  ], 1, "Biaya peluang adalah nilai alternatif terbaik yang dilepas karena sumber daya dipakai untuk pilihan lain.", [
    "Pembayaran uang dapat menjadi biaya eksplisit, tetapi tidak selalu sama dengan nilai alternatif terbaik yang dikorbankan.",
    "Biaya peluang hanya menghitung alternatif terbaik yang dilepas, bukan menjumlah semua alternatif yang tidak dipilih.",
    "Manfaat pilihan bukan nilai kesempatan yang dikorbankan untuk memperolehnya.",
  ]),
  q("eko2-final-q02", "Hitungan • Biaya peluang", "Rina dapat membuat 6 kue atau 3 roti per jam. Berapa biaya peluang untuk membuat 1 roti?", [
    "0,5 kue",
    "1 kue",
    "3 kue",
    "2 kue",
  ], 3, "Dalam satu jam, 3 roti menggantikan 6 kue; biaya peluang 1 roti adalah 6/3 = 2 kue.", [
    "0,5 adalah rasio terbalik, yaitu jumlah roti per kue.",
    "Satu jam menghasilkan 6 kue atau 3 roti, bukan 1 kue untuk setiap roti.",
    "3 adalah jumlah roti per jam, bukan jumlah kue yang dikorbankan untuk satu roti.",
  ]),
  q("eko2-final-q03", "Kasus • Keputusan marginal", "Manfaat marginal suatu unit adalah 12 dan biaya marginalnya 15. Apa keputusan yang sesuai aturan marginal?", [
    "Jangan menambah unit karena biaya marginal lebih besar",
    "Tambah unit karena manfaat marginalnya positif",
    "Tambah unit karena biaya total masa lalu sudah dibayar",
    "Abaikan biaya marginal dan bandingkan manfaat total saja",
  ], 0, "Unit tambahan tidak layak karena manfaat marginal 12 lebih kecil daripada biaya marginal 15.", [
    "Manfaat positif saja belum cukup; manfaat marginal harus setidaknya sebesar biaya marginal.",
    "Biaya masa lalu yang sudah dibayar adalah biaya tertanam dan tidak membenarkan unit yang manfaat marginalnya lebih kecil.",
    "Keputusan unit berikutnya membandingkan manfaat marginal dengan biaya marginal, bukan hanya manfaat total.",
  ]),
  q("eko2-final-q04", "Konsep • Permintaan dan barang substitusi", "Jika harga barang substitusi naik, bagaimana kurva permintaan barang ini berubah?", [
    "Bergerak ke kiri sepanjang kurva penawaran",
    "Bergerak ke atas sepanjang kurva permintaan yang sama",
    "Bergeser ke kanan karena permintaan meningkat",
    "Bergeser ke kiri karena kedua barang saling menggantikan",
  ], 2, "Kenaikan harga barang substitusi membuat sebagian konsumen beralih ke barang ini, sehingga permintaannya bergeser ke kanan.", [
    "Perubahan harga barang substitusi mengubah permintaan, bukan menggerakkan titik pada kurva penawaran.",
    "Perubahan harga barang lain menggeser kurva permintaan; gerak sepanjang kurva terjadi saat harga barang ini berubah.",
    "Untuk barang substitusi, kenaikan harga barang lain mendorong peralihan ke barang ini, bukan menjauhinya.",
  ]),
  q("eko2-final-q05", "Hitungan • Elastisitas harga", "Harga naik 20% dan kuantitas yang diminta turun 10%. Berapa elastisitas harga permintaan dalam nilai absolut?", [
    "0,5, sehingga permintaan inelastis",
    "2, sehingga permintaan elastis",
    "10, karena kuantitas turun sepuluh persen",
    "0,1, karena perubahan kuantitas dibagi harga",
  ], 0, "Elastisitas = |−10%/20%| = 0,5; karena nilainya di bawah satu, permintaan inelastis.", [
    "Nilai 2 membalik pembagian dan menunjukkan elastisitas yang keliru.",
    "Angka 10 adalah perubahan persentase kuantitas, bukan rasio persentase kuantitas terhadap harga.",
    "Pembagian yang benar adalah 10% dibagi 20%, bukan 1/10.",
  ]),
  q("eko2-final-q06", "Kasus • Keseimbangan pasar", "Jika Qd=120−3P dan Qs=20+2P, berapakah harga dan kuantitas keseimbangan?", [
    "P=10 dan Q=90",
    "P=25 dan Q=45",
    "P=20 dan Q=50",
    "P=20 dan Q=60",
  ], 3, "Samakan 120−3P=20+2P sehingga 100=5P, P=20, dan Q=60.", [
    "Pada P=10, Qd=90 tetapi Qs=40, sehingga pasar belum seimbang.",
    "Pada P=25, Qd=45 tetapi Qs=70; selain itu kuantitas yang dicantumkan tidak cocok dengan kedua kurva.",
    "P=20 benar, tetapi Q harus 120−3×20=60, bukan 50.",
  ]),
  q("eko2-final-q07", "Konsep • Insiden pajak", "Sisi pasar mana yang biasanya menanggung beban pajak lebih besar?", [
    "Sisi yang lebih elastis karena lebih mudah mengubah jumlah transaksi",
    "Sisi yang lebih inelastis karena lebih sulit menghindari pajak",
    "Pembeli selalu menanggung seluruh pajak tanpa dipengaruhi elastisitas",
    "Penjual selalu menanggung seluruh pajak karena menerima pembayaran",
  ], 1, "Sisi yang lebih inelastis memiliki respons kuantitas lebih kecil dan biasanya menanggung bagian beban pajak lebih besar.", [
    "Sisi yang lebih elastis lebih mudah mengurangi transaksi, sehingga beban relatifnya cenderung lebih kecil.",
    "Pembagian beban bergantung pada elastisitas relatif, bukan selalu seluruhnya jatuh kepada pembeli.",
    "Penerimaan pembayaran tidak menentukan insiden; elastisitas kedua sisi yang menentukan pembagian beban.",
  ]),
  q("eko2-final-q08", "Hitungan • Surplus konsumen", "Pada Qd=100−2P, harga ekuilibrium 20 dan kuantitas 60. Berapa surplus konsumen?", [
    "600",
    "1.200",
    "900",
    "1.800",
  ], 2, "Harga pencegah permintaan adalah 50; surplus konsumen = ½×60×(50−20) = 900.", [
    "600 menggunakan selisih harga 20, bukan 50−20=30.",
    "1.200 mengalikan 60×20 tanpa menghitung luas segitiga yang benar.",
    "1.800 menggandakan luas segitiga dengan memakai seluruh alas dan tinggi sebagai persegi panjang.",
  ]),
  q("eko2-final-q09", "Kasus • Pagu harga", "Pada Qd=100−2P dan Qs=20+2P, apa dampak pagu harga P=10?", [
    "Qd=80, Qs=40, sehingga terjadi kelangkaan 40",
    "Qd=40, Qs=80, sehingga terjadi surplus 40",
    "Qd=80, Qs=40, sehingga terjadi surplus 40",
    "Qd=60, Qs=40, sehingga terjadi kelangkaan 20",
  ], 0, "Pada P=10, Qd=80 dan Qs=40; kekurangan atau kelangkaan adalah 80−40=40.", [
    "Nilai Qd dan Qs tertukar; pada harga rendah pembeli meminta lebih banyak daripada yang ditawarkan.",
    "Jumlah Qd=80 dan Qs=40 benar, tetapi selisihnya adalah kekurangan, bukan surplus.",
    "Qd adalah 100−2×10=80, bukan 60; karena itu kelangkaannya bukan 20.",
  ]),
  q("eko2-final-q10", "Konsep • Eksternalitas negatif", "Apa dampak eksternalitas negatif produksi dan peran pajak Pigou?", [
    "Pasar berproduksi terlalu sedikit; pajak menaikkan produksi ke tingkat pasar",
    "Pasar mencapai optimum sosial; pajak hanya memindahkan surplus",
    "Pasar berproduksi berlebih; subsidi memperbesar selisih biaya sosial",
    "Pasar berproduksi berlebih; pajak Pigou dapat mendekatkan produksi ke optimum sosial",
  ], 3, "Biaya eksternal membuat biaya sosial melebihi biaya privat sehingga pasar berproduksi berlebih; pajak Pigou dapat menyelaraskan insentif privat dan sosial.", [
    "Eksternalitas negatif mendorong produksi berlebih, bukan terlalu sedikit.",
    "Pasar tanpa koreksi tidak otomatis mencapai optimum sosial ketika biaya eksternal diabaikan.",
    "Subsidi cenderung mendorong produksi lebih jauh, bukan mengoreksi biaya eksternal negatif.",
  ]),
  q("eko2-final-q11", "Hitungan • Monopoli", "Untuk monopoli dengan P=100−Q dan MC=20, berapakah keluaran dan harga monopoli?", [
    "Q=40 dan P=60; persaingan menghasilkan Q=80 dan P=20",
    "Q=80 dan P=20; monopoli menyamakan harga dengan biaya marginal",
    "Q=40 dan P=20; harga monopoli sama dengan biaya marginal",
    "Q=60 dan P=40; monopoli menetapkan harga pada titik tengah",
  ], 0, "MR=100−2Q; MR=MC memberi Q=40 dan P=100−40=60. Persaingan menghasilkan Q=80, P=20, dan DWL=800.", [
    "Q=80 dan P=20 adalah hasil kompetitif, bukan hasil pilihan monopoli berdasarkan MR=MC.",
    "Pada Q=40, kurva permintaan memberi P=60, bukan P=20.",
    "Titik tengah bukan aturan penetapan keluaran monopoli; gunakan MR=MC untuk memperoleh Q=40.",
  ]),
  q("eko2-final-q12", "Kasus • Dilema tahanan", "Dua perusahaan masing-masing dapat menahan diri atau curang. Hasilnya (10,10) jika sama-sama menahan diri, (15,2) jika satu curang, dan (5,5) jika sama-sama curang. Apa hasil strategi dominan?", [
    "Keduanya menahan diri dan memperoleh (10,10)",
    "Satu menahan diri dan satu curang pada (15,2)",
    "Keduanya curang; keseimbangan Nash adalah (5,5)",
    "Hasil tidak dapat ditentukan tanpa mengetahui biaya produksi",
  ], 2, "Bagi tiap perusahaan, curang memberi hasil lebih tinggi terhadap pilihan lawan; keduanya memilih curang dan mencapai keseimbangan Nash (5,5).", [
    "Menahan diri memberi hasil lebih rendah daripada curang ketika perusahaan lain menahan diri.",
    "Pilihan curang menguntungkan pelaku secara sepihak, sehingga hasil asimetris bukan keseimbangan strategi dominan.",
    "Pembayaran yang diberikan sudah cukup untuk membandingkan hasil tiap pilihan; biaya tambahan tidak diperlukan.",
  ]),
  q("eko2-final-q13", "Konsep • Pengukuran PDB", "Bagaimana PDB memperlakukan barang antara dalam pengukuran produksi?", [
    "Menjumlahkan semua penjualan barang antara dan barang akhir",
    "Menghitung barang antara sebagai impor meskipun diproduksi di dalam negeri",
    "Menghitung nilai bahan baku berulang kali pada setiap tahap produksi",
    "Menghitung barang akhir atau nilai tambah tanpa hitung ganda",
  ], 3, "PDB mengukur barang akhir atau menjumlah nilai tambah pada tiap tahap, sehingga nilai barang antara tidak dihitung berulang.", [
    "Menjumlahkan seluruh penjualan antara barang akhir akan menghitung sebagian nilai produksi lebih dari sekali.",
    "Status barang antara tidak otomatis menjadikannya impor; asal produksi dan penggunaannya adalah hal berbeda.",
    "Penghitungan berulang atas bahan baku adalah hitung ganda yang dihindari dalam PDB.",
  ]),
  q("eko2-final-q14", "Hitungan • Deflator PDB", "Jika PDB nominal 1.118 dan PDB riil 1.040, berapakah deflator PDB?", [
    "92,5",
    "107,5",
    "78",
    "1.075",
  ], 1, "Deflator PDB = (1.118/1.040)×100 = 107,5.", [
    "92,5 membalik pembilang dan penyebut, yaitu memakai PDB riil dibagi nominal.",
    "78 adalah selisih nominal dan riil, bukan indeks harga dengan tahun dasar 100.",
    "1.075 menggeser koma satu tempat; hasil rasio dikali 100 adalah 107,5.",
  ]),
  q("eko2-final-q15", "Kasus • PDB per kapita", "PDB tumbuh 5% dan penduduk tumbuh 2%. Berapa kira-kira pertumbuhan PDB per kapita?", [
    "2,94%",
    "3,00%",
    "7,00%",
    "10,00%",
  ], 0, "Pertumbuhan per kapita = 1,05/1,02−1 ≈ 2,94%.", [
    "3,00% adalah pendekatan selisih sederhana; perhitungan rasio tepatnya sekitar 2,94%.",
    "7,00% menjumlahkan pertumbuhan PDB dan penduduk, bukan membaginya.",
    "10,00% tidak mengikuti rasio PDB terhadap penduduk.",
  ]),
  q("eko2-final-q16", "Konsep • Inflasi tak terduga", "Siapa yang diuntungkan ketika inflasi aktual lebih tinggi daripada perkiraan pada pinjaman berbunga tetap?", [
    "Pemberi pinjaman karena nilai riil pembayaran kembali meningkat",
    "Peminjam karena bunga riil ex-post turun",
    "Keduanya selalu sama-sama untung karena suku bunga nominal tetap",
    "Tidak ada pihak yang terpengaruh oleh perubahan inflasi",
  ], 1, "Inflasi yang lebih tinggi menurunkan nilai riil pembayaran tetap sehingga bunga riil ex-post yang ditanggung peminjam lebih rendah.", [
    "Nilai riil pembayaran tetap turun, bukan meningkat, ketika inflasi tak terduga lebih tinggi.",
    "Bunga nominal tetap tidak membuat hasil riil kedua pihak selalu sama saat inflasi berubah.",
    "Perubahan inflasi mengubah nilai riil pembayaran dan karena itu dapat memindahkan manfaat antara peminjam dan pemberi pinjaman.",
  ]),
  q("eko2-final-q17", "Hitungan • Pengangguran", "Jika ada 10 orang menganggur dan 120 orang bekerja, berapakah tingkat pengangguran?", [
    "7,69%",
    "8,33%",
    "10,00%",
    "12,00%",
  ], 0, "Angkatan kerja = 10+120=130; tingkat pengangguran = 10/130×100 ≈ 7,69%.", [
    "8,33% membagi pengangguran dengan jumlah bekerja saja, bukan seluruh angkatan kerja.",
    "10% menggunakan pembagi 100, bukan angkatan kerja 130.",
    "12% membagi jumlah bekerja dengan jumlah penganggur, bukan menghitung penganggur sebagai bagian angkatan kerja.",
  ]),
  q("eko2-final-q18", "Kasus • Kurva Phillips", "Gunakan π=πe−0,5(u−5). Jika pengangguran u=7 dan ekspektasi inflasi πe=4, berapa inflasi π?", [
    "5",
    "4",
    "3",
    "2",
  ], 2, "π=4−0,5(7−5)=4−1=3.", [
    "5 menambahkan selisih pengangguran, padahal rumus menguranginya.",
    "4 mengabaikan suku 0,5(u−5) yang bernilai 1.",
    "2 mengurangkan seluruh selisih pengangguran dua kali, bukan mengalikannya dengan 0,5.",
  ]),
  q("eko2-final-q19", "Konsep • Model Solow", "Dalam model Solow dasar, apa dampak kenaikan tingkat tabungan?", [
    "Menaikkan laju pertumbuhan jangka panjang secara permanen",
    "Menurunkan output steady-state karena konsumsi awal berkurang",
    "Tidak memengaruhi output steady-state maupun investasi",
    "Menaikkan tingkat output steady-state, bukan laju pertumbuhan jangka panjang",
  ], 3, "Tingkat tabungan yang lebih tinggi menaikkan modal dan output steady-state, tetapi tidak dengan sendirinya mengubah laju pertumbuhan jangka panjang dalam model dasar.", [
    "Kenaikan tabungan tidak menaikkan laju pertumbuhan jangka panjang secara permanen tanpa perubahan pertumbuhan teknologi.",
    "Tabungan yang lebih tinggi mendorong akumulasi modal dan menaikkan, bukan menurunkan, output steady-state.",
    "Tingkat tabungan memengaruhi investasi dan lintasan modal dalam model Solow.",
  ]),
  q("eko2-final-q20", "Hitungan • Pertumbuhan majemuk", "Berapa nilai 1.000 setelah tumbuh 4% per tahun selama 30 tahun?", [
    "2.400,00",
    "3.243,40",
    "1.200,00",
    "4.000,00",
  ], 1, "Nilai akhir = 1.000×(1,04)^30 ≈ 3.243,40.", [
    "2.400 menambahkan pertumbuhan sederhana 4%×30=120% dan mengabaikan pemajemukan.",
    "1.200 hanya menambahkan pertumbuhan 20% dan tidak memakai periode 30 tahun dengan benar.",
    "4.000 menggandakan nilai awal secara keliru; pemajemukan 4% selama 30 tahun menghasilkan sekitar 3.243,40.",
  ]),
  q("eko2-final-q21", "Kasus • Akuntansi pertumbuhan", "Jika Y=A·K^0,3·L^0,7, gY=3%, gK=4%, dan gL=2%, berapa pertumbuhan A (TFP)?", [
    "1,4%",
    "0,6%",
    "0,4%",
    "2,2%",
  ], 2, "gA=gY−0,3gK−0,7gL=3−1,2−1,4=0,4%.", [
    "1,4% menjumlahkan 3% dengan kontribusi modal 1,2% tanpa mengurangkan kontribusi tenaga kerja.",
    "0,6% mengurangkan kontribusi modal saja dan melupakan kontribusi tenaga kerja.",
    "2,2% mengurangkan kontribusi tenaga kerja tetapi tidak mengurangkan kontribusi modal.",
  ]),
  q("eko2-final-q22", "Konsep • Likuiditas dan solvabilitas bank", "Bank memiliki cadangan 100, kredit 900, simpanan 900, dan modal 100. Apa dampak penarikan 15% simpanan sekaligus?", [
    "Bank langsung tidak solven karena penarikan 135 menghabiskan modal 100",
    "Bank tetap likuid karena cadangan 100 melebihi penarikan 15",
    "Bank dapat membayar seluruh penarikan tanpa memakai aset lain",
    "Likuiditas terganggu: 135 melebihi cadangan 100, tetapi modal 100 menjaga solvabilitas",
  ], 3, "Penarikan adalah 0,15×900=135, melebihi cadangan 100; aset 1.000 tetap melebihi simpanan 900 sehingga modal positif dan bank masih solven.", [
    "Aset 1.000 melebihi simpanan 900 sebesar 100, sehingga bank tidak langsung menjadi insolven.",
    "Penarikan 135 lebih besar, bukan lebih kecil, daripada cadangan 100.",
    "Cadangan hanya menutup 100 dari penarikan 135; bank harus mencari likuiditas tambahan.",
  ]),
  q("eko2-final-q23", "Hitungan • Pengganda uang", "Jika rasio cadangan 25% dan setoran awal 1.000, berapa total simpanan maksimum dalam model pengganda sederhana?", [
    "250",
    "4.000",
    "1.250",
    "1.000",
  ], 1, "Pengganda sederhana = 1/0,25=4; total simpanan = 4×1.000=4.000.", [
    "250 adalah 25% dari setoran, yaitu cadangan awal, bukan total simpanan.",
    "1.250 hanya menambahkan cadangan 250 kepada setoran awal dan mengabaikan rangkaian penciptaan simpanan.",
    "1.000 adalah setoran awal saja, bukan total maksimum pada model pengganda.",
  ]),
  q("eko2-final-q24", "Kasus • Teori kuantitas uang", "Jika kecepatan uang tetap, jumlah uang naik 10% dan output naik 3%. Berapa kira-kira inflasi?", [
    "13%",
    "3%",
    "10%",
    "7%",
  ], 3, "Dari MV=PY dan V tetap, pertumbuhan harga kira-kira pertumbuhan uang dikurangi pertumbuhan output: 10%−3%=7%.", [
    "13% menjumlahkan pertumbuhan uang dan output, bukan mengurangkan pertumbuhan output.",
    "3% menyamakan inflasi dengan pertumbuhan output dan mengabaikan perubahan uang.",
    "10% menganggap output tidak berubah, padahal output tumbuh 3%.",
  ]),
  q("eko2-final-q25", "Konsep • Guncangan penawaran", "Apa pola keluaran dan harga yang biasanya timbul dari guncangan penawaran negatif dalam model AD-AS?", [
    "Output turun dan harga naik, suatu keadaan stagflasi",
    "Output dan harga sama-sama naik karena biaya produksi bertambah",
    "Output naik dan harga turun karena penawaran menyusut",
    "Output tetap dan harga turun karena permintaan meningkat",
  ], 0, "Guncangan penawaran negatif menggeser SRAS ke kiri, sehingga harga naik sementara output turun; pola ini disebut stagflasi.", [
    "Kenaikan biaya tidak mendorong output dan harga bersama-sama naik dalam model dasar.",
    "Penawaran yang menyusut menurunkan output dan menaikkan harga, bukan kebalikannya.",
    "Pernyataan ini mencampur guncangan penawaran negatif dengan kenaikan permintaan.",
  ]),
  q("eko2-final-q26", "Hitungan • Pengganda fiskal", "Jika MPC=0,8, berapakah pengganda belanja pemerintah sederhana?", [
    "4",
    "0,8",
    "5",
    "−4",
  ], 2, "Pengganda belanja = 1/(1−MPC)=1/0,2=5; pengganda pajak adalah −4.", [
    "4 adalah besar pengganda pajak, bukan pengganda belanja.",
    "0,8 adalah MPC, bukan pengganda belanja.",
    "−4 adalah pengganda pajak bertanda; pengganda belanja bernilai positif 5.",
  ]),
  q("eko2-final-q27", "Kasus • Kebutuhan stimulus", "Celah output adalah −40, pengganda belanja 5, dan efektivitas kebijakan 60%. Berapa tambahan belanja yang diperlukan?", [
    "8,00",
    "10,00",
    "66,67",
    "13,33",
  ], 3, "Kebutuhan belanja = 40/(5×0,60)=13,33; efektivitas yang lebih rendah memperbesar kebutuhan nominal.", [
    "8,00 adalah kebutuhan jika efektivitas penuh 100%, bukan 60%.",
    "10,00 membagi celah dengan besar pengganda pajak 4 dan tidak menghitung efektivitas belanja.",
    "66,67 adalah 40/0,60 dan mengabaikan pengganda belanja 5.",
  ]),
  q("eko2-final-q28", "Konsep • Keunggulan komparatif", "Apa dasar keunggulan komparatif dan bagaimana perdagangan dapat menguntungkan kedua pihak?", [
    "Spesialisasi pada biaya peluang terendah dapat menguntungkan kedua pihak",
    "Setiap negara harus lebih produktif secara absolut dalam barang yang diperdagangkan",
    "Negara dengan biaya peluang lebih tinggi selalu memperoleh seluruh surplus perdagangan",
    "Perdagangan menguntungkan kedua pihak hanya jika produktivitas mereka sama",
  ], 0, "Spesialisasi menurut biaya peluang relatif memungkinkan kedua pihak memperoleh barang dengan biaya peluang lebih rendah melalui pertukaran.", [
    "Keunggulan komparatif berkenaan dengan biaya peluang, bukan keharusan unggul secara absolut.",
    "Biaya peluang lebih tinggi menunjukkan kerugian komparatif, bukan dasar untuk memperoleh seluruh surplus.",
    "Produktivitas yang sama tidak diperlukan; perbedaan biaya peluang dapat menjadi sumber keuntungan perdagangan.",
  ]),
  q("eko2-final-q29", "Hitungan • Penerimaan tarif", "Pada harga dunia 8 dengan tarif t=2, berapa penerimaan tarif jika impor menjadi 20 unit?", [
    "20",
    "40",
    "80",
    "5",
  ], 1, "Penerimaan tarif = tarif per unit × impor = 2×20=40.", [
    "20 adalah volume impor, bukan penerimaan; penerimaan mengalikan jumlah itu dengan tarif 2.",
    "80 mengalikan harga dunia 8 dengan impor dan mengabaikan tarif per unit.",
    "5 adalah deadweight loss untuk t=1 pada ilustrasi, bukan penerimaan saat t=2.",
  ]),
  q("eko2-final-q30", "Kasus • Neraca pembayaran", "Jika transaksi berjalan −30, bagaimana pencatatan transaksi finansial yang menyeimbangkan neraca pembayaran tanpa kesalahan statistik?", [
    "Transaksi finansial −30, sehingga kedua defisit saling meniadakan",
    "Transaksi finansial 0 karena arus perdagangan tidak terkait pembiayaan",
    "Transaksi finansial +30 menyeimbangkan defisit; cadangan turun juga dapat membiayainya",
    "Transaksi finansial +60 karena kedua saldo harus dijumlahkan agar neraca pembayaran seimbang",
  ], 2, "Dengan konvensi transaksi finansial positif untuk arus modal masuk, transaksi berjalan −30 diimbangi transaksi finansial +30; penurunan cadangan juga dapat menjadi sumber pembiayaan sesuai konvensi pencatatan.", [
    "Transaksi finansial −30 akan menambah defisit menjadi −60, bukan menyeimbangkannya.",
    "Defisit transaksi berjalan harus memiliki pencatatan pembiayaan yang mengimbanginya, bukan diabaikan.",
    "+60 membuat jumlah transaksi berjalan dan finansial menjadi +30, bukan nol.",
  ]),
].map((question, index) => ({
  ...question,
  chapterId: `eko2-b${String(Math.floor(index / 3) + 1).padStart(2, "0")}`,
}));

export const FINAL_EXAM_ESSAYS: EssayPrompt[] = [
  {
    id: "eko2-final-e01",
    prompt: "Sebuah perekonomian mengalami resesi dengan celah output −5% dan inflasi rendah. Bandingkan respons fiskal menggunakan pengganda belanja 5, kebutuhan ΔG, dan implikasi utang dengan respons moneter menggunakan aturan Taylor dan suku bunga riil. Evaluasi batas kedua respons, termasuk jeda kebijakan, crowding out, dan ketidakpastian PDB potensial.",
    rubric,
    reviewPoints: [
      "Menafsirkan celah output −5% dan membedakan nilai aktual dari estimasi PDB potensial.",
      "Menggunakan pengganda belanja 5 untuk menghitung kebutuhan ΔG dengan asumsi yang dinyatakan.",
      "Membahas dampak pembiayaan stimulus fiskal terhadap defisit atau utang tanpa menganggapnya otomatis tidak berkelanjutan.",
      "Menjelaskan bagaimana aturan Taylor dan inflasi rendah memengaruhi suku bunga nominal serta riil.",
      "Mengevaluasi jeda kebijakan, crowding out, transmisi moneter, dan ketidakpastian estimasi output potensial.",
    ],
  },
  {
    id: "eko2-final-e02",
    prompt: "Sebuah ekonomi kecil terbuka mengalami defisit transaksi berjalan 30. Jelaskan identitas neraca pembayaran, kaitannya dengan kurs riil dan trilema kebijakan, serta bagaimana cadangan devisa dengan runway enam bulan membatasi respons. Bahas risiko ketergantungan pembiayaan eksternal dan hubungkan analisis dengan keputusan investasi serta pengelolaan risiko pribadi.",
    rubric,
    reviewPoints: [
      "Menjelaskan bahwa defisit transaksi berjalan 30 diimbangi arus modal masuk neto atau perubahan cadangan sesuai konvensi tanda.",
      "Menguraikan bagaimana perubahan kurs riil dapat memengaruhi harga relatif dan ekspor neto tanpa menyatakan dampak yang pasti.",
      "Menerapkan trilema pada pilihan kurs tetap, mobilitas modal, dan kebijakan moneter mandiri.",
      "Menafsirkan runway cadangan enam bulan sebagai ilustrasi dengan asumsi tekanan dan laju intervensi tetap.",
      "Menilai risiko pembiayaan eksternal dan menghubungkannya dengan diversifikasi, eksposur kurs, likuiditas, atau toleransi risiko pribadi.",
    ],
  },
];
