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
};

export const FINAL_EXAM_QUESTIONS: AssessmentQuestion[] = [];
export const FINAL_EXAM_ESSAYS: EssayPrompt[] = [];
