import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";

const q = (
  id: string,
  concept: string,
  prompt: string,
  options: string[],
  answer: number,
  explanation: string
): AssessmentQuestion => ({ id, concept, prompt, options, answer, explanation });

const essay = (id: string, prompt: string): EssayPrompt => ({
  id,
  prompt,
  rubric: "Nilai 0–5 untuk tiap kriteria: 0 = tidak dijawab/tidak relevan; 1 = sangat lemah; 2 = sebagian benar; 3 = cukup akurat; 4 = kuat dengan alasan dan penerapan; 5 = akurat, lengkap, dan jelas. Empat kriteria: ketepatan konsep, kualitas penalaran, penerapan, dan kejelasan. Total maksimal 20 poin.",
  reviewPoints: [
    "Definisikan konsep psikologi yang relevan dengan pertanyaan secara akurat.",
    "Jelaskan mekanisme atau alasan, bukan hanya menyebut istilah.",
    "Terapkan konsep pada contoh/situasi yang diminta.",
    "Nyatakan satu batas, faktor alternatif, atau konteks yang memengaruhi kesimpulan.",
  ],
});

export const qv2 = (
  id: string,
  concept: string,
  prompt: string,
  options: string[],
  answerIndex: number,
  correctReason: string,
  distractorReasons: string[]
): AssessmentQuestion => {
  let distractorIndex = 0;
  const wrong = options
    .map((_, index) => index === answerIndex
      ? null
      : `${String.fromCharCode(65 + index)}. ${distractorReasons[distractorIndex++]}`)
    .filter(Boolean)
    .join(" ");
  return {
    id,
    concept,
    prompt,
    options,
    answer: answerIndex,
    explanation: `Jawaban benar: ${options[answerIndex]}. ${correctReason} Pengecoh: ${wrong}`,
  };
};

export const PSYCHOLOGY_V2_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "psi2-b01": [
    qv2("psi2-b01-q01", "Konsep • Ruang lingkup", "Psikologi paling tepat didefinisikan sebagai...", [
      "Kumpulan nasihat untuk mengubah kebiasaan seseorang",
      "Kajian tentang cara memberi label pada perilaku yang berbeda",
      "Penjelasan tentang proses mental tanpa menguji bukti",
      "Kajian ilmiah perilaku dan proses mental",
    ], 3, "Psikologi menggunakan cara ilmiah untuk mengkaji tindakan dan proses mental.", [
      "Nasihat dapat berguna, tetapi tidak mencakup keseluruhan bidang psikologi ilmiah.",
      "Memberi label tidak sama dengan menyelidiki perilaku secara sistematis.",
      "Proses mental dikaji dengan bukti dan indikator, bukan penjelasan tanpa pengujian.",
    ]),
    qv2("psi2-b01-q02", "Konsep • Pengukuran", "Manakah contoh definisi operasional untuk fokus dalam sesi belajar?", [
      "Jumlah jawaban tepat dari sepuluh soal pada satu sesi",
      "Seberapa besar seseorang menghargai pendidikan secara umum",
      "Perkiraan kecerdasan berdasarkan kesan seorang pengamat",
      "Kemampuan berkonsentrasi dengan baik dalam setiap keadaan",
    ], 0, "Definisi ini menetapkan ukuran yang spesifik dan dapat diamati dalam konteks tertentu.", [
      "Sikap umum terhadap pendidikan bukan ukuran fokus dalam sesi belajar tertentu.",
      "Perkiraan dari kesan pengamat tidak menetapkan prosedur ukur yang jelas.",
      "Klaim setiap keadaan terlalu luas untuk menjadi ukuran fokus yang teramati.",
    ]),
    qv2("psi2-b01-q03", "Konsep • Nature dan nurture", "Pernyataan yang paling tepat tentang perilaku dan faktor biologis-lingkungan adalah...", [
      "Biologi saja selalu menentukan perilaku jika bawaan diketahui",
      "Lingkungan selalu menghapus pengaruh biologis pada perilaku",
      "Perilaku mencerminkan interaksi biologi dan lingkungan",
      "Biologi dan lingkungan bekerja terpisah tanpa saling berinteraksi",
    ], 2, "Banyak penjelasan mempertimbangkan bagaimana kondisi biologis dan pengalaman saling terkait.", [
      "Mengetahui faktor bawaan tidak membuktikan biologi selalu menjadi penentu tunggal.",
      "Lingkungan tidak selalu menghapus pengaruh biologis pada perilaku.",
      "Pernyataan ini menolak interaksi yang justru perlu dipertimbangkan.",
    ]),
    qv2("psi2-b01-q04", "Konsep • Kausalitas", "Dua variabel berkorelasi dalam suatu pengamatan. Kesimpulan yang tepat adalah...", [
      "Variabel pertama pasti menyebabkan perubahan pada variabel kedua",
      "Keduanya berkaitan; sebab-akibat belum dapat dipastikan",
      "Variabel kedua pasti menyebabkan perubahan pada variabel pertama",
      "Faktor lain tak dapat menjelaskan hubungan yang teramati",
    ], 1, "Korelasi menggambarkan keterkaitan, tetapi tidak menetapkan arah sebab atau menyingkirkan faktor lain.", [
      "Korelasi saja tidak membuktikan arah kausal yang tertentu.",
      "Arah sebaliknya juga tidak dapat dipastikan dari korelasi saja.",
      "Confounder atau penjelasan alternatif masih mungkin ada.",
    ]),
    qv2("psi2-b01-q05", "Hitungan • Selisih rerata", "Rerata kontrol 60 dan rerata perlakuan 66. Berapa selisih rerata perlakuan dikurangi kontrol?", [
      "6 poin",
      "12 poin",
      "60 poin",
      "66 poin",
    ], 0, "Selisihnya 66−60=6 poin.", [
      "12 menjumlahkan kedua rerata, bukan mengurangkan kontrol dari perlakuan.",
      "60 adalah rerata kontrol, bukan selisih kedua kelompok.",
      "66 adalah rerata perlakuan, bukan selisih rerata.",
    ]),
    qv2("psi2-b01-q06", "Hitungan • Poin persentase", "Perbaikan terjadi pada 40 dari 50 orang di A dan 25 dari 50 orang di B. Berapa selisih tingkat perbaikan dalam poin persentase?", [
      "60%",
      "1,6 kali",
      "15 poin persentase",
      "30 poin persentase",
    ], 3, "A=80% dan B=50%, sehingga selisihnya 30 poin persentase.", [
      "60% adalah peningkatan relatif terhadap B, bukan selisih poin persentase.",
      "1,6 adalah rasio 80% terhadap 50%, bukan selisih.",
      "15 adalah selisih jumlah orang, bukan selisih persentase.",
    ]),
    qv2("psi2-b01-q07", "Hitungan • Bias seleksi", "Model ilustratif menyatakan teramati = efek + bias. Jika selisih teramati 8 dan efek 5, berapa bias seleksi dalam model?", [
      "13",
      "3",
      "5",
      "8",
    ], 1, "Bias = 8−5=3.", [
      "13 menjumlahkan selisih teramati dan efek, bukan mencari komponen sisanya.",
      "5 adalah efek yang diasumsikan, bukan bias.",
      "8 adalah selisih teramati yang terdiri dari efek dan bias.",
    ]),
    qv2("psi2-b01-q08", "Kasus • Kebiasaan belajar", "Seorang siswa sering menunda belajar. Langkah awal yang paling tepat adalah...", [
      "Memberi label kurang disiplin dari perilaku yang tampak",
      "Menganggap penyebabnya pasti karena penggunaan ponsel",
      "Kumpulkan data tidur, tugas, kebiasaan, serta lingkungan",
      "Menyimpulkan gangguan tanpa asesmen profesional yang memadai",
    ], 2, "Data dari beberapa konteks membantu membangun hipotesis tanpa melompat pada label atau diagnosis.", [
      "Satu pola perilaku belum cukup untuk menyimpulkan sifat tetap.",
      "Ponsel mungkin relevan, tetapi belum tentu penyebab penundaan.",
      "Diagnosis tidak dapat disimpulkan dari contoh singkat dan bukan tujuan pembelajaran ini.",
    ]),
    qv2("psi2-b01-q09", "Kasus • Self-selection", "Aplikasi viral mengklaim bahwa penggunanya lebih bahagia. Apa langkah evaluasi yang paling kuat?", [
      "Menyimpulkan aplikasi menyebabkan bahagia karena ramai dipakai",
      "Membandingkan unggahan positif dari pengguna aplikasi saja",
      "Mengabaikan laporan pengguna karena bersifat subjektif",
      "Uji acak; pertimbangkan seleksi diri dan confounder",
    ], 3, "Pengguna yang memilih aplikasi mungkin berbeda sejak awal; rancangan acak yang tepat dapat membantu menguji efeknya.", [
      "Popularitas tidak membuktikan bahwa aplikasi menyebabkan kebahagiaan.",
      "Unggahan terpilih bias dan bukan kelompok pembanding yang setara.",
      "Laporan pengguna memberi petunjuk, tetapi tetap perlu ditafsirkan hati-hati.",
    ]),
    qv2("psi2-b01-q10", "Kasus • Hipotesis kompetitif", "Dua siswa merespons kritik dengan cara berbeda. Cara menyelidiki yang paling tepat adalah...", [
      "Beri label tangguh pada siswa yang segera merespons kritik",
      "Uji hipotesis berbeda dengan mengumpulkan data konteks siswa",
      "Anggap makna komentar sama bagi keduanya tanpa bertanya",
      "Gunakan satu respons untuk memperkirakan pilihan mereka kelak",
    ], 1, "Hipotesis kompetitif dan data konteks membantu membedakan penjelasan tanpa memberi label prematur.", [
      "Respons cepat saja tidak membuktikan siswa memiliki sifat tangguh.",
      "Komentar sama belum tentu ditafsirkan sama oleh kedua siswa.",
      "Satu pengamatan tidak memastikan perilaku selanjutnya.",
    ]),
  ],
  "psi2-b02": [
    qv2("psi2-b02-q01", "Konsep • Persepsi", "Persepsi paling tepat merujuk pada proses...", [
      "Menerima rangsangan melalui indera tanpa memberi makna",
      "Mengingat semua informasi indera tanpa berubah",
      "Mengolah dan memaknai informasi indera yang diterima",
      "Mengubah rangsangan menjadi respons tubuh otomatis",
    ], 2, "Persepsi mengorganisasi dan memberi makna pada informasi indera, berbeda dari penerimaan sensasi.", [
      "Penerimaan rangsangan menggambarkan sensasi, belum proses pemaknaan.",
      "Ingatan tidak menyimpan semua informasi indera secara sempurna.",
      "Respons tubuh bukan definisi persepsi.",
    ]),
    qv2("psi2-b02-q02", "Konsep • Atensi", "Pernyataan yang paling tepat tentang perhatian dan perpindahan tugas adalah...", [
      "Atensi selalu terbagi rata ketika beberapa tugas dilakukan",
      "Atensi terbatas; berpindah tugas punya biaya",
      "Notifikasi selalu membantu memahami bacaan yang sulit",
      "Pergantian tugas menghapus biaya mengingat tujuan",
    ], 1, "Perhatian terbatas dan kembali ke tujuan setelah berpindah dapat membutuhkan waktu atau usaha.", [
      "Perhatian tidak selalu terbagi rata pada semua tugas.",
      "Notifikasi dapat mengganggu, dan manfaatnya bergantung konteks.",
      "Pergantian tidak menghapus kebutuhan memulihkan tujuan tugas.",
    ]),
    qv2("psi2-b02-q03", "Konsep • Sistem memori", "Perbedaan paling tepat antara memori kerja dan jangka panjang adalah...", [
      "Memori sensori menyimpan semua pengalaman untuk waktu lama",
      "Memori kerja hanya menyimpan informasi dan tidak mengolahnya",
      "Memori jangka panjang hanya menahan bunyi sesaat",
      "Memori kerja mengolah sementara; jangka panjang lebih lama",
    ], 3, "Memori kerja menahan dan mengolah informasi sementara, sedangkan memori jangka panjang dapat mempertahankannya lebih lama.", [
      "Jejak sensori singkat dan tidak menyimpan semua pengalaman lama.",
      "Memori kerja terlibat dalam pengolahan, bukan hanya penyimpanan pasif.",
      "Memori jangka panjang tidak terbatas pada bunyi sesaat.",
    ]),
    qv2("psi2-b02-q04", "Konsep • Strategi belajar", "Praktik yang paling langsung melatih pengambilan kembali informasi adalah...", [
      "Uji diri tanpa catatan, lalu cek umpan balik",
      "Membaca ulang bagian yang sama sampai terasa akrab",
      "Menyorot semua paragraf untuk mengenali istilah penting",
      "Menyalin catatan lengkap agar tampak tersimpan",
    ], 0, "Retrieval practice meminta pelajar mengambil informasi dari ingatan; umpan balik membantu memeriksa jawaban.", [
      "Membaca ulang melatih pengenalan, tetapi tidak selalu menguji pengambilan dari ingatan.",
      "Menyorot dapat menandai teks tanpa meminta jawaban dari ingatan.",
      "Menyalin catatan tidak dengan sendirinya menguji retrieval.",
    ]),
    qv2("psi2-b02-q05", "Hitungan • Chunking", "Dua belas digit dikelompokkan menjadi chunk berukuran tiga digit. Berapa jumlah bagian?", [
      "12 bagian",
      "3 bagian",
      "4 bagian",
      "36 bagian",
    ], 2, "Jumlah bagian = ceil(12/3)=4.", [
      "12 adalah jumlah digit sebelum pengelompokan.",
      "3 adalah ukuran tiap kelompok, bukan jumlah kelompok.",
      "36 mengalikan jumlah digit dengan ukuran chunk, bukan membaginya.",
    ]),
    qv2("psi2-b02-q06", "Hitungan • Model retensi", "Dengan S awal 2 hari, dua tinjauan menggandakan S, lalu uji 7 hari kemudian. Berapa retensi model?", [
      "41,7%",
      "17,4%",
      "64,6%",
      "3,0%",
    ], 0, "Dua tinjauan memberi S=2×2²=8; exp(−7/8)≈41,7%.", [
      "17,4% memakai satu tinjauan, sehingga S=4.",
      "64,6% memakai tiga tinjauan, sehingga S=16.",
      "3,0% adalah hasil tanpa tinjauan, sehingga S=2.",
    ]),
    qv2("psi2-b02-q07", "Hitungan • Base rate", "Dari 1.000 transaksi, 1% penipuan, sensitivitas 90%, dan salah-tandai 10%. Berapa peluang peringatan benar?", [
      "90%",
      "9,09%",
      "10%",
      "8,33%",
    ], 3, "TP=9 dan FP=99, jadi peluang peringatan benar = 9/(9+99)=9/108≈8,33%.", [
      "90% adalah sensitivitas, bukan peluang benar di antara semua peringatan.",
      "9/99 mengabaikan sembilan peringatan benar dari penyebut total.",
      "10% adalah tingkat salah-tandai, bukan proporsi peringatan benar.",
    ]),
    qv2("psi2-b02-q08", "Kasus • Kalibrasi", "Seseorang yakin 90% tetapi benar 6 dari 10 soal. Langkah belajar yang paling berguna adalah...", [
      "Membaca ulang sampai materi terasa makin akrab",
      "Uji diri tanpa catatan, lalu cek akurasi",
      "Menganggap nilai rendah sebagai ukuran kemampuan tetap",
      "Menaikkan keyakinan agar sesuai target yang diinginkan",
    ], 1, "Uji diri menghasilkan bukti kinerja untuk dibandingkan dengan keyakinan; contoh ini berbeda 30 poin persentase.", [
      "Rasa akrab setelah membaca ulang belum tentu mencerminkan retrieval.",
      "Satu hasil tidak menetapkan kemampuan tetap seseorang.",
      "Mengubah keyakinan tanpa bukti tidak memperbaiki kalibrasi.",
    ]),
    qv2("psi2-b02-q09", "Kasus • Biaya atensi", "Dalam blok 60 menit, 5 gangguan per jam masing-masing memerlukan pemulihan 3 menit. Respons yang sesuai adalah...", [
      "Paksa fokus tanpa mengubah lingkungan atau gangguan",
      "Anggap seluruh 60 menit tetap fokus karena blok belum selesai",
      "Batasi gangguan; model memperkirakan fokus efektif 45 menit",
      "Tambahkan lebih banyak tugas agar gangguan terasa biasa",
    ], 2, "Model memberi 60−(5×3)=45 menit; mengurangi gangguan yang dapat diatur dapat membantu menjaga sesi.", [
      "Memaksa diri tidak mengubah waktu pemulihan yang diasumsikan model.",
      "Blok 60 menit tidak berarti seluruh waktunya fokus efektif.",
      "Menambah tugas tidak mengurangi biaya gangguan dalam model.",
    ]),
    qv2("psi2-b02-q10", "Kasus • Availability heuristic", "Kecelakaan yang sedang viral terasa sangat sering. Cara memeriksa penilaian itu adalah...", [
      "Cek base rate dan data pembanding yang sesuai",
      "Simpulkan frekuensi dari banyaknya unggahan yang terlihat",
      "Abaikan semua berita karena ingatan selalu menyesatkan",
      "Anggap contoh yang mudah diingat pasti paling umum",
    ], 0, "Availability heuristic memakai kemudahan mengingat; base rate dan data relevan membantu memeriksa frekuensi.", [
      "Banyak unggahan bukan penyebut yang mewakili seluruh kejadian.",
      "Berita dapat memberi petunjuk, tetapi perlu dinilai bersama data lain.",
      "Mudah diingat tidak membuktikan bahwa kejadian paling umum.",
    ]),
  ],
  "psi2-b03": [
    qv2("psi2-b03-q01", "Konsep • Komponen emosi", "Pernyataan yang paling tepat tentang emosi adalah...", [
      "Emosi hanya perasaan sadar tanpa tubuh, penilaian, atau dorongan",
      "Emosi dapat mencakup rasa, tubuh, tafsir, ekspresi, dan dorongan",
      "Emosi selalu memberi respons tubuh yang seragam bagi semua orang",
      "Emosi hanya suasana hati panjang tanpa pemicu yang dapat dikenali",
    ], 1, "Emosi dapat mencakup pengalaman, tubuh, penilaian, ekspresi, serta kecenderungan bertindak.", [
      "Emosi dapat melibatkan respons tubuh dan dorongan, bukan hanya rasa sadar.",
      "Respons emosi tidak selalu sama bagi setiap orang.",
      "Emosi dan suasana hati berhubungan tetapi tidak identik.",
    ]),
    qv2("psi2-b03-q02", "Konsep • Suasana hati", "Suasana hati biasanya berbeda dari emosi karena cenderung...", [
      "Selalu lebih kuat dan terkait satu pemicu yang diketahui",
      "Hanya terdiri atas sensasi tubuh tanpa pengalaman subjektif",
      "Berlangsung tepat satu jam lalu berubah menjadi emosi",
      "Lebih menyebar, tanpa satu pemicu yang jelas",
    ], 3, "Suasana hati cenderung lebih menyebar dan tidak selalu memiliki pemicu tunggal yang jelas.", [
      "Emosi tidak selalu lebih lemah, dan suasana hati tidak selalu terkait satu pemicu.",
      "Suasana hati bukan hanya sensasi tubuh tanpa pengalaman.",
      "Tidak ada durasi tetap yang otomatis mengubah suasana hati menjadi emosi.",
    ]),
    qv2("psi2-b03-q03", "Konsep • Appraisal", "Appraisal dalam peta emosi merujuk pada...", [
      "Penilaian makna situasi terhadap tujuan seseorang",
      "Rangsangan indera yang diterima sebelum sempat dimaknai",
      "Ekspresi wajah yang sama pada semua orang di tiap keadaan",
      "Tindakan otomatis yang tidak dipengaruhi konteks sekitar",
    ], 0, "Appraisal adalah penilaian makna situasi terhadap tujuan, kebutuhan, atau keselamatan.", [
      "Penerimaan rangsangan indera lebih dekat dengan sensasi.",
      "Ekspresi dapat berbeda dan tidak selalu menunjukkan satu makna.",
      "Tindakan dapat dipengaruhi interpretasi dan konteks.",
    ]),
    qv2("psi2-b03-q04", "Konsep • Emosi dan keputusan", "Cara paling cermat menggunakan emosi saat mengambil keputusan adalah...", [
      "Mengikuti emosi karena selalu menunjukkan hasil paling aman",
      "Mengabaikan emosi karena tidak pernah memberi informasi",
      "Jadikan emosi petunjuk; periksa tujuan dan bukti",
      "Memutuskan segera agar arousal tidak memengaruhi pilihan",
    ], 2, "Emosi dapat memberi informasi, tetapi arousal tinggi dapat mendorong keputusan tergesa; periksa tujuan serta bukti.", [
      "Emosi bukan jaminan bahwa hasil tertentu paling aman.",
      "Emosi dapat menandai nilai atau risiko yang dirasakan.",
      "Keputusan segera tidak selalu mengurangi pengaruh arousal.",
    ]),
    qv2("psi2-b03-q05", "Hitungan • Intensitas appraisal", "Pentingnya tujuan 8 dan ancaman dinilai 5. Menurut model intensitas ilustratif, hasilnya...", [
      "40,0",
      "4,0",
      "13,0",
      "3,0",
    ], 1, "Intensitas = 8×5÷10=4,0.", [
      "40,0 mengalikan kedua nilai tanpa membagi 10.",
      "13,0 menjumlahkan nilai lalu menambahkan skala.",
      "3,0 tidak mengikuti hasil perkalian dan pembagian model.",
    ]),
    qv2("psi2-b03-q06", "Hitungan • Arousal", "Arousal awal 8 turun 25% tiap jam. Berapa nilai model setelah dua jam?", [
      "6,00",
      "4,00",
      "3,38",
      "4,50",
    ], 3, "A(2)=8×0,75²=4,50.", [
      "6,00 adalah nilai setelah satu jam.",
      "4,00 mengurangi 25% nilai awal secara linear dua kali.",
      "3,38 adalah nilai model setelah tiga jam.",
    ]),
    qv2("psi2-b03-q07", "Hitungan • Suppression", "Jika perasaan 4,0 dan ekspresi ditekan 70%, berapa nilai perasaan dalam model?", [
      "4,0",
      "1,2",
      "2,8",
      "0,0",
    ], 0, "Suppression dalam model mengubah ekspresi yang tampak, sedangkan perasaan tetap 4,0.", [
      "1,2 adalah nilai ekspresi yang tampak setelah penekanan.",
      "2,8 adalah bagian ekspresi yang ditekan, bukan perasaan.",
      "Model tidak menyatakan perasaan hilang seluruhnya.",
    ]),
    qv2("psi2-b03-q08", "Kasus • Aturan jeda", "Arousal model mulai dari 8 dan aturan jeda menunggu sampai ≤4. Dengan peluruhan 25% per jam, kapan ambang pertama tercapai?", [
      "1 jam",
      "2 jam",
      "3 jam",
      "4 jam",
    ], 2, "Pada 3 jam nilai 3,375 ≤ 4 sehingga ambang pertama tercapai.", [
      "Setelah 1 jam nilai model masih 6,00, di atas ambang.",
      "Setelah 2 jam nilai model 4,50, masih di atas ambang.",
      "Setelah 4 jam nilainya 2,53, sudah di bawah ambang tetapi ambang pertama tercapai lebih awal pada 3 jam.",
    ]),
    qv2("psi2-b03-q09", "Kasus • Kritik", "Kritik terasa seperti serangan pribadi. Respons awal yang paling membantu untuk memahami situasi adalah...", [
      "Membalas segera agar maksud diri tidak diragukan",
      "Menganggap tafsir pertama pasti benar tanpa pemeriksaan",
      "Menghindari semua umpan balik berikutnya",
      "Jeda, cek fakta, tinjau tafsir, lalu klarifikasi",
    ], 3, "Jeda, pemeriksaan fakta, reappraisal, dan klarifikasi dapat membantu membedakan maksud serta interpretasi.", [
      "Balasan segera dapat memperbesar konflik sebelum fakta diperiksa.",
      "Tafsir awal adalah hipotesis, bukan kepastian tentang maksud pemberi kritik.",
      "Menghindari semua umpan balik dapat menutup informasi yang berguna.",
    ]),
    qv2("psi2-b03-q10", "Kasus • Avoidance", "Seseorang menghindari tugas yang memicu cemas dan merasa lega sesaat, tetapi tenggat tetap ada. Langkah yang sesuai adalah...", [
      "Pecah tugas menjadi langkah kecil dan hadapi bertahap",
      "Tunda seluruh tugas sampai rasa cemas hilang sepenuhnya",
      "Salahkan diri karena belum menyelesaikannya dengan cepat",
      "Hapus tujuan agar tidak perlu memikirkan tugas",
    ], 0, "Langkah kecil dapat mengurangi hambatan sambil menangani tugas; strategi tetap bergantung pada keamanan dan konteks.", [
      "Menunggu emosi hilang sepenuhnya dapat memperpanjang penghindaran.",
      "Menyalahkan diri tidak memberi langkah penyelesaian yang konkret.",
      "Menghapus tujuan tidak menyelesaikan tuntutan tugas yang masih ada.",
    ]),
  ],
  "psi2-b04": [
    qv2("psi2-b04-q01", "Konsep • Conditioning", "Pernyataan yang paling tepat membedakan classical dan operant conditioning adalah...", [
      "Classical: asosiasi stimulus; operant: tindakan dan konsekuensi",
      "Classical mengubah tujuan; operant hanya mengukur perasaan subjektif",
      "Classical memakai hadiah; operant memasangkan dua stimulus",
      "Classical dan operant menjelaskan pembelajaran tanpa perbedaan penting",
    ], 0, "Classical menelaah asosiasi ant stimulus, sedangkan operant menelaah perilaku dan konsekuensi.", [
      "Perubahan tujuan bukan pembeda utama kedua kerangka.",
      "Pemasangan stimulus lebih sesuai dengan classical; hadiah bukan definisi operant saja.",
      "Keduanya menelaah pembelajaran dengan hubungan yang berbeda.",
    ]),
    qv2("psi2-b04-q02", "Konsep • Penguatan negatif", "Penguatan negatif terjadi ketika...", [
      "Konsekuensi menyenangkan ditambahkan dan perilaku meningkat",
      "Sesuatu yang disukai dihapus dan perilaku kemudian menurun",
      "Stimulus tak menyenangkan dihapus dan perilaku meningkat",
      "Konsekuensi tak menyenangkan ditambahkan dan perilaku menurun",
    ], 2, "Penguatan negatif menghilangkan stimulus tidak menyenangkan dan meningkatkan kemungkinan perilaku.", [
      "Penambahan yang meningkatkan perilaku lebih sesuai dengan penguatan positif.",
      "Penghilangan yang menurunkan perilaku lebih sesuai dengan hukuman negatif.",
      "Penambahan yang menurunkan perilaku lebih sesuai dengan hukuman positif.",
    ]),
    qv2("psi2-b04-q03", "Konsep • Motivasi", "Menurut kerangka determinasi diri, dukungan motivasi dapat mencakup...", [
      "Hadiah besar, kompetisi, dan pengawasan ketat",
      "Dukungan otonomi, kompetensi, serta keterkaitan",
      "Kecepatan, kepatuhan, dan hasil yang sama bagi semua",
      "Penghapusan pilihan agar tujuan lebih mudah dicapai semua",
    ], 1, "Teori determinasi diri secara pengantar membahas otonomi, kompetensi, dan keterkaitan.", [
      "Hadiah atau kompetisi bukan tiga kebutuhan yang disebut kerangka ini.",
      "Kebutuhan tidak menuntut hasil atau pengalaman yang sama bagi semua.",
      "Menghapus pilihan tidak sama dengan mendukung otonomi.",
    ]),
    qv2("psi2-b04-q04", "Konsep • Kebiasaan dan friction", "Kebiasaan paling tepat dipahami sebagai pola yang melibatkan...", [
      "Kepribadian tetap yang tidak dipengaruhi lingkungan",
      "Hadiah yang selalu diberikan sesudah setiap tindakan",
      "Tindakan acak tanpa pemicu atau konsekuensi",
      "Pemicu, tindakan, konsekuensi, friction, dan konteks",
    ], 3, "Peta pemicu–tindakan–konsekuensi membantu menganalisis kebiasaan; friction dan konteks memengaruhi tindakan.", [
      "Pola kebiasaan dapat dipengaruhi lingkungan dan tidak menetapkan sifat tetap.",
      "Konsekuensi tidak harus berupa hadiah atau hadir setiap kali.",
      "Peta kebiasaan mempertimbangkan isyarat dan hasil, bukan tindakan tanpa konteks.",
    ]),
    qv2("psi2-b04-q05", "Hitungan • Akuisisi", "Model ΔV=0,2(1−V) dimulai dari V₀=0. Berapa V setelah tiga percobaan?", [
      "0,600",
      "0,360",
      "0,488",
      "0,200",
    ], 2, "V₁=0,200, V₂=0,360, lalu V₃=0,488.", [
      "0,600 memakai kenaikan linear 0,2 tiap percobaan.",
      "0,360 adalah nilai setelah dua percobaan.",
      "0,200 adalah nilai setelah satu percobaan.",
    ]),
    qv2("psi2-b04-q06", "Hitungan • Goal pace", "Target 300 halaman dalam 30 hari; setelah 12 hari selesai 96 halaman. Laju untuk sisa target per hari adalah...", [
      "11,33 halaman/hari",
      "10,00 halaman/hari",
      "8,00 halaman/hari",
      "17,00 halaman/hari",
    ], 0, "Sisa 204 halaman dibagi 18 hari = 11,33 halaman/hari.", [
      "10,00 adalah laju rencana awal, bukan laju sisa target.",
      "8,00 adalah laju aktual selama 12 hari pertama.",
      "17,00 memakai 204 halaman dibagi 12 hari, bukan 18 hari tersisa.",
    ]),
    qv2("psi2-b04-q07", "Hitungan • Jadwal rasio", "Dengan 100 respons pada jadwal rasio tetap 5, berapa jumlah penguatan?", [
      "5",
      "95",
      "500",
      "20",
    ], 3, "Jumlah penguatan = 100÷5=20.", [
      "5 adalah rasio respons per penguatan, bukan jumlah penguatan.",
      "95 tidak mengikuti pembagian respons dengan rasio.",
      "500 mengalikan respons dengan rasio, bukan membaginya.",
    ]),
    qv2("psi2-b04-q08", "Kasus • Friction", "Media sosial mengganggu sesi belajar. Perubahan lingkungan yang masuk akal adalah...", [
      "Mengandalkan kemauan tanpa mengubah akses ponsel",
      "Tambah hambatan godaan, mudahkan langkah awal belajar",
      "Menambah notifikasi agar kebiasaan belajar lebih konsisten",
      "Menghapus semua jeda dan menambah lama sesi belajar",
    ], 1, "Menjauhkan ponsel dapat menaikkan friction godaan, sementara menyiapkan bahan dapat memudahkan mulai belajar.", [
      "Tidak mengubah akses membiarkan friction godaan tetap rendah.",
      "Notifikasi tambahan dapat meningkatkan gangguan, bukan mengurangi friction godaan.",
      "Menghapus jeda bukan cara yang diperlukan untuk mengubah lingkungan.",
    ]),
    qv2("psi2-b04-q09", "Kasus • Overjustification", "Anak yang suka menggambar diberi hadiah besar tiap gambar lalu minatnya turun. Kesimpulan awal yang hati-hati adalah...", [
      "Hadiah mungkin menggeser minat; periksa konteks dan data",
      "Hadiah selalu menghilangkan motivasi intrinsik pada semua anak",
      "Penurunan minat membuktikan anak tidak menyukai gambar",
      "Hadiah tidak mungkin berkaitan dengan perubahan minat",
    ], 0, "Overjustification adalah kemungkinan yang bergantung konteks; dugaan perlu diuji dengan data.", [
      "Efek hadiah tidak selalu sama pada semua orang atau kegiatan.",
      "Perubahan minat tidak membuktikan bahwa minat awal tidak ada.",
      "Hadiah mungkin berkaitan, tetapi tidak dapat dikesampingkan tanpa pemeriksaan.",
    ]),
    qv2("psi2-b04-q10", "Kasus • Hukuman dan perilaku alternatif", "Seseorang hanya menghukum perilaku yang tidak diinginkan tanpa mengajarkan pengganti. Langkah yang lebih lengkap adalah...", [
      "Memperberat hukuman sampai perilaku berhenti",
      "Mengabaikan semua konsekuensi dan tidak memberi umpan balik",
      "Ajarkan perilaku alternatif dan kuatkan saat dilakukan",
      "Menganggap perilaku buruk sebagai sifat tetap seseorang",
    ], 2, "Mengajarkan serta menguatkan perilaku alternatif memberi tindakan yang dapat menggantikan pola yang tidak diinginkan.", [
      "Hukuman lebih berat dapat menambah efek samping tanpa mengajarkan alternatif.",
      "Umpan balik dan konsekuensi yang relevan dapat memberi informasi.",
      "Perilaku tidak cukup untuk menyimpulkan sifat tetap.",
    ]),
  ],
};

export const PSYCHOLOGY_V2_ESSAYS: Record<string, EssayPrompt[]> = {
  "psi2-b01": [
    essay("psi2-b01-e01", "Rancang penelitian kecil tentang kebiasaan belajar. Tetapkan definisi operasional, kelompok pembanding yang sesuai, satu confounder yang perlu dipertimbangkan, dan batas kesimpulan yang mungkin dibuat."),
    essay("psi2-b01-e02", "Jelaskan mengapa klaim “gen menentukan perilaku” dan “lingkungan menentukan segalanya” sama-sama terlalu sederhana. Gunakan model interaksi hipotetis, lalu hubungkan cara berpikir tersebut dengan penilaian klaim dalam keputusan sehari-hari."),
  ],
  "psi2-b02": [
    {
      ...essay("psi2-b02-e01", "Rancang rencana belajar dua minggu yang memakai retrieval practice, spaced practice, dan kalibrasi. Jelaskan cara mengevaluasi hasil, menyesuaikan jadwal, dan menyatakan batas kesimpulan."),
      reviewPoints: [
        "Tetapkan tujuan belajar dan jadwal latihan tersebar yang realistis.",
        "Rancang retrieval practice dengan pemeriksaan jawaban atau umpan balik.",
        "Jelaskan cara membandingkan keyakinan dengan akurasi secara berkala.",
        "Gunakan hasil evaluasi untuk menyesuaikan latihan tanpa mengklaim hasil universal.",
        "Nyatakan faktor konteks atau keterbatasan rencana.",
      ],
    },
    {
      ...essay("psi2-b02-e02", "Jelaskan mengapa alat deteksi dengan sensitivitas “akurat 90%” masih dapat menghasilkan banyak peringatan palsu. Gunakan base rate dan penyebut yang tepat, lalu hubungkan dengan penilaian klaim investasi atau keamanan."),
      reviewPoints: [
        "Bedakan sensitivitas, false positive, dan peluang peringatan benar.",
        "Jelaskan peran base rate dan jumlah kasus bukan positif.",
        "Tunjukkan cara menghitung true positive dan false positive.",
        "Hubungkan penalaran dengan contoh klaim investasi atau keamanan.",
        "Nyatakan batas penggunaan angka dan konteks alat.",
      ],
    },
  ],
  "psi2-b03": [
    {
      ...essay("psi2-b03-e01", "Jelaskan peta pemicu–interpretasi–respons pada kasus menerima kritik. Bandingkan reappraisal, suppression, dan avoidance, lalu nyatakan batas kesimpulan yang dapat dibuat."),
      reviewPoints: [
        "Pisahkan pemicu, interpretasi, respons tubuh, dan tindakan.",
        "Bandingkan cara kerja reappraisal, suppression, dan avoidance.",
        "Gunakan contoh konkret dan pertimbangkan konteks serta tujuan.",
        "Nyatakan hipotesis alternatif atau batas bukti.",
        "Hindari mendiagnosis atau memberi label dari satu kejadian.",
      ],
    },
    {
      ...essay("psi2-b03-e02", "Rancang aturan jeda pribadi untuk keputusan finansial saat emosi tinggi, misalnya ketika harga turun tajam. Jelaskan bukti yang akan diperiksa, kapan aturan tidak sesuai, dan batasnya."),
      reviewPoints: [
        "Tentukan tanda atau kondisi yang memicu jeda.",
        "Sebutkan bukti dan sumber yang diperiksa sebelum keputusan.",
        "Jelaskan kapan keputusan dapat ditinjau dan tujuan yang dijaga.",
        "Pertimbangkan situasi mendesak atau keselamatan saat jeda tidak sesuai.",
        "Nyatakan bahwa aturan bukan jaminan hasil finansial.",
      ],
    },
  ],
  "psi2-b04": [
    {
      ...essay("psi2-b04-e01", "Rancang sistem belajar tiga minggu memakai tujuan spesifik, umpan balik, dan pengaturan friction. Jelaskan cara mengevaluasi hasil dan menyatakan batas kesimpulan."),
      reviewPoints: [
        "Tetapkan tujuan belajar dan indikator kemajuan yang spesifik.",
        "Jelaskan bagaimana umpan balik mendukung langkah berikutnya.",
        "Rancang perubahan friction atau lingkungan yang dapat diuji.",
        "Nyatakan cara meninjau dan menyesuaikan rencana.",
        "Sebutkan faktor konteks dan batas generalisasi.",
      ],
    },
    {
      ...essay("psi2-b04-e02", "Bedakan classical dan operant conditioning melalui kasus notifikasi aplikasi atau keputusan trading berulang. Jelaskan bagaimana jadwal penguatan variabel dapat berkaitan dengan pengecekan berulang dan apa batas kesimpulannya."),
      reviewPoints: [
        "Bedakan asosiasi stimulus dari hubungan tindakan dan konsekuensi.",
        "Terapkan kedua kerangka pada contoh yang jelas.",
        "Jelaskan rasio variabel sebagai rata-rata dengan waktu penguatan tak terduga.",
        "Sebutkan penjelasan alternatif dan faktor konteks.",
        "Hindari klaim bahwa jadwal tertentu selalu menghasilkan perilaku sama.",
      ],
    },
  ],
};

export const PSYCHOLOGY_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "psi-bab-2": [
    q("p2q1", "Psikologi kognitif", "Psikologi kognitif terutama mempelajari...", ["Pajak dan inflasi", "Perhatian, persepsi, memori, dan penalaran", "Hanya perilaku yang diwariskan", "Hanya ekspresi wajah"], 1, "Bidang kognitif meneliti pemrosesan informasi."),
    q("p2q2", "Persepsi", "Dua orang memahami nada pesan yang sama secara berbeda. Penjelasan masuk akal adalah...", ["Persepsi dipengaruhi konteks dan pengetahuan sebelumnya", "Salah satu pasti berbohong", "Sensasi selalu identik dengan interpretasi", "Bahasa tidak memiliki konteks"], 0, "Interpretasi dipengaruhi konteks, harapan, dan pengetahuan."),
    q("p2q3", "Perhatian", "Mengapa notifikasi dapat mengganggu tugas kompleks?", ["Perhatian dapat terbatas dan berpindah konteks memiliki biaya", "Otak tidak dapat mendengar suara", "Semua orang memiliki kapasitas sama", "Notifikasi selalu merusak memori permanen"], 0, "Tugas kompleks bersaing meminta perhatian dan perpindahan dapat mengganggu."),
    q("p2q4", "Memori kerja", "Memori kerja paling tepat digambarkan sebagai...", ["Semua ingatan sepanjang hidup", "Informasi yang sedang dipertahankan dan diolah", "Memori yang tidak pernah lupa", "Sistem emosi saja"], 1, "Memori kerja aktif dan terbatas, berbeda dari memori jangka panjang."),
    q("p2q5", "Retrieval", "Latihan menutup buku lalu menjelaskan konsep terutama melatih...", ["Retrieval", "Sensasi", "Punishment", "Konformitas"], 0, "Pengambilan kembali informasi tanpa petunjuk adalah retrieval practice."),
    q("p2q6", "Spaced practice", "Spaced practice berarti...", ["Belajar tersebar dalam beberapa sesi", "Mengulang satu sesi tanpa henti", "Membaca tanpa jeda", "Menghindari latihan"], 0, "Latihan terdistribusi menyebar belajar melintasi waktu."),
    q("p2q7", "Heuristik", "Contoh kecelakaan yang baru viral terasa sangat umum. Apa respons evaluatif terbaik?", ["Menganggap ingatan sebagai statistik", "Mencari base rate dan data yang relevan", "Mengabaikan semua risiko", "Menyimpulkan kausalitas"], 1, "Kemudahan mengingat bukan ukuran cukup untuk frekuensi."),
    q("p2q8", "Aplikasi belajar", "Membaca ulang terasa mudah tetapi gagal menjawab soal tanpa buku. Apa interpretasi terbaik?", ["Familiaritas tidak selalu menandakan retrieval yang kuat", "Buku pasti salah", "Belajar tidak mungkin berhasil", "Kapasitas memori hilang"], 0, "Pengenalan selama membaca berbeda dari kemampuan mengingat dan menerapkan."),
  ],
  "psi-bab-3": [
    q("p3q1", "Emosi", "Pernyataan yang paling akurat tentang emosi adalah...", ["Setiap emosi punya satu pemicu universal", "Emosi dapat melibatkan pengalaman, tubuh, perhatian, dan kecenderungan bertindak", "Emosi selalu menghalangi keputusan", "Emosi sama dengan suasana hati"], 1, "Emosi memiliki beberapa komponen dan dipengaruhi konteks."),
    q("p3q2", "Konsep afektif", "Suasana hati biasanya dibedakan dari emosi karena cenderung...", ["Lebih menyebar dan tidak selalu memiliki pemicu tunggal yang jelas", "Tidak memiliki pengalaman subjektif", "Selalu berlangsung satu detik", "Sama dengan perilaku"], 0, "Suasana hati sering lebih menyebar dan bertahan, walau istilah bergantung konteks."),
    q("p3q3", "Interpretasi", "Dalam peta pemicu–interpretasi–respons, interpretasi adalah...", ["Fakta eksternal itu sendiri", "Makna yang diberikan seseorang terhadap situasi", "Diagnosis", "Selalu penyebab tunggal"], 1, "Interpretasi memediasi pemaknaan, tetapi model ini tidak selalu linear."),
    q("p3q4", "Keputusan", "Mengelola emosi untuk keputusan berarti...", ["Menghapus emosi sepenuhnya", "Mengenali emosi dan memeriksa tujuan serta bukti", "Selalu menunda", "Mengikuti dorongan pertama"], 1, "Emosi dapat memberi informasi, namun perlu ditinjau bersama fakta dan tujuan."),
    q("p3q5", "Reappraisal", "Cognitive reappraisal adalah...", ["Meninjau ulang makna situasi tanpa menyangkal fakta", "Menekan semua ekspresi", "Menghindari semua masalah", "Memberi diagnosis"], 0, "Reappraisal mengubah interpretasi, bukan menghapus atau menyangkal kenyataan."),
    q("p3q6", "Regulasi", "Pernyataan yang tepat mengenai suppression dan avoidance adalah...", ["Keduanya selalu buruk", "Keduanya dapat berguna sesaat tetapi memiliki trade-off dan konteks", "Keduanya identik dengan reappraisal", "Selalu menyelesaikan penyebab"], 1, "Strategi regulasi perlu dievaluasi berdasarkan tujuan dan konteks."),
    q("p3q7", "Impuls", "Dorongan impulsif muncul. Pilihan yang dapat membuka ruang respons adalah...", ["Menghakimi diri", "Menamai emosi dan mengambil jeda singkat bila aman", "Menganggap dorongan sebagai perintah", "Menyalahkan orang lain"], 1, "Jeda dapat membantu, meski tidak menjamin hasil dan tidak selalu sesuai."),
    q("p3q8", "Penerapan", "Setelah kritik, respons terukur adalah...", ["Menyimpulkan diri tidak berharga", "Memisahkan kata yang terdengar dari interpretasi lalu meminta contoh spesifik", "Membalas dengan serangan", "Menganggap kritik selalu benar"], 1, "Memisahkan fakta dan tafsir membantu mengumpulkan informasi."),
  ],
  "psi-bab-4": [
    q("p4q1", "Belajar", "Perubahan perilaku akibat pengalaman yang relatif bertahan disebut...", ["Belajar", "Suasana hati", "Bias atribusi", "Sensasi"], 0, "Definisi umum belajar mengacu pada perubahan relatif bertahan dari pengalaman."),
    q("p4q2", "Classical conditioning", "Pengondisian klasik terutama menjelaskan...", ["Asosiasi antara stimulus dan respons", "Hukuman hukum", "Penalaran statistik", "Sifat tetap"], 0, "Classical conditioning melibatkan asosiasi stimulus."),
    q("p4q3", "Operant conditioning", "Pengondisian operan meneliti bagaimana ___ memengaruhi perilaku.", ["Konsekuensi", "Warna pakaian saja", "Gen tunggal", "Tingkat inflasi"], 0, "Konsekuensi setelah tindakan dapat mengubah kemungkinan tindakan tersebut."),
    q("p4q4", "Reinforcement", "Menghilangkan bunyi pengingat ketika sabuk pengaman dipasang sehingga pemasangan meningkat adalah...", ["Negative reinforcement", "Positive punishment", "Negative punishment", "Classical extinction"], 0, "Sesuatu yang tidak menyenangkan dihilangkan dan perilaku meningkat."),
    q("p4q5", "Motivasi", "Pernyataan yang tepat tentang motivasi intrinsik dan ekstrinsik adalah...", ["Satu selalu lebih baik", "Keduanya dapat hadir bersamaan dan pengaruhnya tergantung konteks", "Ekstrinsik berarti tidak ada motivasi", "Intrinsik menjamin keberhasilan"], 1, "Motivasi dapat memiliki beberapa sumber."),
    q("p4q6", "Self-efficacy", "Self-efficacy paling tepat berarti...", ["Keyakinan dapat melakukan tindakan tertentu", "Harga diri umum", "Jaminan berhasil", "Keterampilan aktual saja"], 0, "Self-efficacy adalah keyakinan spesifik terhadap kemampuan melakukan tindakan."),
    q("p4q7", "Habit", "Apa cara realistis mengubah kebiasaan membuka media sosial saat belajar?", ["Menyalahkan diri", "Petakan pemicu dan ubah friksi/siapkan tindakan alternatif", "Menganggap butuh jumlah hari tetap", "Menghapus semua tujuan"], 1, "Memahami konteks dan mendesain lingkungan dapat membantu."),
    q("p4q8", "Evaluasi", "Mengapa kebiasaan tidak selalu terbentuk setelah jumlah hari yang tetap?", ["Konteks, perilaku, kesempatan, dan individu berbeda", "Pengulangan tidak berpengaruh", "Kebiasaan tidak nyata", "Semua orang lupa"], 0, "Waktu pembentukan kebiasaan bervariasi dan tidak universal."),
  ],
  "psi-bab-5": [
    q("p5q1", "Behavioral science", "Behavioral science terutama berupaya...", ["Mengkaji perilaku dengan pendekatan sistematis", "Mendiagnosis semua pembeli", "Menghapus ekonomi", "Memprediksi individu dengan pasti"], 0, "Bidang ini mempelajari perilaku melalui bukti dan beragam lensa."),
    q("p5q2", "Bounded rationality", "Bounded rationality mengakui bahwa keputusan dibuat dengan...", ["Informasi dan kapasitas pemrosesan terbatas", "Informasi sempurna", "Tidak ada pilihan", "Selalu bias yang sama"], 0, "Waktu dan kapasitas informasi/komputasi manusia terbatas."),
    q("p5q3", "Confirmation bias", "Mencari hanya informasi yang mendukung keyakinan disebut...", ["Confirmation bias", "Anchoring", "Framing", "Base rate"], 0, "Confirmation bias menyaring informasi sesuai keyakinan awal."),
    q("p5q4", "Availability", "Menganggap peristiwa lebih sering karena contoh mudah teringat adalah...", ["Availability heuristic", "Loss aversion", "Reappraisal", "Self-efficacy"], 0, "Kemudahan mengingat menjadi petunjuk frekuensi."),
    q("p5q5", "Anchoring", "Harga awal yang tidak relevan tetap memengaruhi perkiraan berikutnya adalah...", ["Anchoring", "Punishment", "Encoding", "Konformitas"], 0, "Informasi awal dapat menjadi jangkar estimasi."),
    q("p5q6", "Framing", "“90% berhasil” dan “10% gagal” memperlihatkan pengaruh...", ["Framing", "Operant conditioning", "Storage", "Stereotip"], 0, "Penyajian setara dengan fokus berbeda dapat memengaruhi penilaian."),
    q("p5q7", "Loss aversion", "Loss aversion berarti...", ["Kerugian dapat terasa lebih berat daripada keuntungan setara dalam konteks tertentu", "Kerugian selalu dua kali pasti", "Tidak ada titik acuan", "Semua orang takut risiko"], 0, "Efeknya bergantung konteks; bukan konstanta universal bagi semua orang."),
    q("p5q8", "Sunk cost", "Biaya masa lalu yang tidak dapat dipulihkan seharusnya...", ["Menjadi alasan tunggal untuk lanjut", "Tidak dijadikan manfaat masa depan; nilai opsi ke depan", "Selalu diabaikan sebagai informasi", "Dihitung sebagai keuntungan"], 1, "Sunk cost tidak dapat dipulihkan, tetapi pengalaman dapat memberi informasi baru."),
  ],
  "psi-bab-6": [
    q("p6q1", "Psikologi sosial", "Psikologi sosial mempelajari...", ["Pengaruh kehadiran nyata atau dibayangkan orang lain pada pikiran dan perilaku", "Hanya gangguan klinis", "Hanya hormon", "Hanya kelompok besar"], 0, "Pengaruh sosial dapat hadir secara langsung maupun dibayangkan."),
    q("p6q2", "Konformitas", "Mengubah respons agar selaras dengan kelompok disebut...", ["Konformitas", "Encoding", "Extinction", "Anchoring"], 0, "Konformitas adalah penyesuaian respons pada norma/kelompok."),
    q("p6q3", "Otoritas", "Apa batas kesimpulan yang tepat dari eksperimen klasik kepatuhan?", ["Semua manusia selalu patuh", "Hasil bergantung konteks, prosedur, sampel, dan batas etika", "Eksperimen berlaku di semua budaya", "Eksperimen menghapus agensi"], 1, "Eksperimen spesifik tidak membuktikan perilaku universal."),
    q("p6q4", "Social proof", "Popularitas suatu produk membuktikan...", ["Produk itu akurat dan aman", "Produk tersebut populer, tetapi mutu tetap perlu diperiksa", "Semua ulasan independen", "Tidak ada risiko"], 1, "Popularitas bukan bukti kualitas atau keamanan."),
    q("p6q5", "Identitas sosial", "Konsep ingroup–outgroup merujuk pada...", ["Kelompok yang dianggap bagian dari diri dan kelompok lain", "Memori jangka panjang", "Pemrosesan sensorik", "Penguatan negatif"], 0, "Identitas kelompok membedakan kelompok sendiri dan kelompok luar."),
    q("p6q6", "Atribusi", "Fundamental attribution error mengingatkan bahwa kita kadang...", ["Terlalu menekankan disposisi dan kurang melihat situasi saat menilai orang lain", "Selalu salah memahami diri", "Tidak pernah melihat konteks", "Mendiagnosis secara akurat"], 0, "Bias atribusi dapat menekankan sifat sambil mengecilkan keadaan."),
    q("p6q7", "Stereotip", "Langkah yang mengurangi generalisasi sosial adalah...", ["Menilai individu dari stereotip", "Menggunakan informasi relevan individu dan memperhatikan variasi kelompok", "Mengabaikan dampak", "Menyamaratakan semua orang"], 1, "Penilaian individu perlu bukti yang relevan dan tidak mengasumsikan homogenitas."),
    q("p6q8", "Lingkungan digital", "Mengapa feed rekomendasi bukan sampel opini masyarakat?", ["Konten dipilih dan diurutkan oleh sistem serta interaksi", "Semua orang memiliki feed identik", "Algoritma tidak memakai sinyal", "Feed selalu acak"], 0, "Sistem rekomendasi membuat paparan seseorang terseleksi."),
  ],
  "psi-bab-7": [
    q("p7q1", "Kepribadian", "Kepribadian paling tepat dipahami sebagai...", ["Pola relatif konsisten, bukan perilaku yang tidak pernah berubah", "Label permanen dari satu kejadian", "Diagnosis otomatis", "Preferensi tunggal"], 0, "Konsistensi relatif tetap memungkinkan variasi konteks."),
    q("p7q2", "Metode", "Mengapa satu metode pengukuran kepribadian perlu ditafsirkan hati-hati?", ["Setiap metode memiliki keterbatasan dan bias", "Semua metode tidak berguna", "Laporan diri selalu bohong", "Observasi membuktikan penyebab"], 0, "Metode berbeda menangkap aspek berbeda dan memiliki sumber bias."),
    q("p7q3", "Big Five", "Manakah kelompok dimensi Big Five?", ["Openness, conscientiousness, extraversion, agreeableness, neuroticism", "IQ, EQ, AQ, CQ, SQ", "Id, ego, superego, trait, mood", "Fokus, memori, emosi, bahasa, tidur"], 0, "Ini lima dimensi luas pada model Big Five."),
    q("p7q4", "Interpretasi skor", "Skor tinggi pada dimensi kepribadian...", ["Menentukan masa depan", "Adalah ukuran relatif terhadap instrumen dan konteks", "Mendiagnosis gangguan", "Membuktikan moralitas"], 1, "Skor perlu ditafsirkan sesuai instrumen dan normanya, bukan sebagai nasib."),
    q("p7q5", "Orang-situasi", "Seseorang dapat berperilaku berbeda dalam konteks berbeda karena...", ["Perilaku dipengaruhi interaksi karakteristik dan situasi", "Kepribadian palsu", "Situasi tidak relevan", "Semua tindakan acak"], 0, "Konteks dapat berinteraksi dengan kecenderungan individu."),
    q("p7q6", "Validitas", "Validitas instrumen berkaitan dengan...", ["Konsistensi saja", "Bukti yang mendukung interpretasi dan penggunaan skor", "Popularitas tes", "Jumlah warna"], 1, "Validitas menilai interpretasi dan penggunaan skor, bukan sekadar konsistensi."),
    q("p7q7", "Reliabilitas", "Tes konsisten tetapi tidak mengukur konstruk yang dimaksud dapat...", ["Reliabel namun tidak valid untuk tujuan itu", "Valid selalu", "Diagnosis pasti", "Tidak perlu diuji"], 0, "Reliabilitas tidak menjamin validitas."),
    q("p7q8", "Penerapan", "Tim memiliki gaya bekerja berbeda. Pendekatan terbaik...", ["Memberi label tipe tetap", "Menanyakan kebutuhan dan mencoba pengaturan kerja yang dapat dievaluasi", "Menganggap satu gaya lebih baik", "Mendiagnosis dari rapat"], 1, "Deskripsikan kebutuhan dan hasil tanpa pelabelan berlebihan."),
  ],
  "psi-bab-8": [
    q("p8q1", "Fakta dan interpretasi", "“Rapat dimulai pukul 10” dan “mereka tidak menghargai saya” masing-masing adalah...", ["Fakta terverifikasi dan interpretasi", "Interpretasi dan fakta", "Asumsi dan perilaku", "Opini dan emosi"], 0, "Waktu dapat diverifikasi; makna tentang penghargaan adalah interpretasi."),
    q("p8q2", "Berpikir kritis", "Berpikir kritis paling tepat berarti...", ["Menolak semua klaim", "Menilai mutu bukti dan menyesuaikan keyakinan", "Mempercayai sumber populer", "Memastikan selalu benar"], 1, "Sikap kritis menilai bukti, bukan otomatis menerima atau menolak."),
    q("p8q3", "Falsifiability", "Klaim yang dapat diuji seharusnya...", ["Memiliki prediksi yang dapat diamati dan berisiko terbukti salah", "Selalu benar untuk semua hasil", "Tidak memiliki definisi", "Bergantung pada satu testimoni"], 0, "Klaim yang dapat diuji menentukan hasil yang dapat melemahkannya."),
    q("p8q4", "Base rate", "Base rate membantu memperkirakan...", ["Frekuensi dasar pada kelompok/konteks relevan", "Kepribadian individu pasti", "Hubungan sebab", "Nilai moral"], 0, "Base rate adalah frekuensi dasar yang perlu dibaca dengan konteks."),
    q("p8q5", "Korelasi", "Dua tren bergerak bersama. Kesimpulan yang tepat...", ["Salah satunya pasti menyebabkan yang lain", "Perlu memeriksa faktor ketiga, arah, dan kualitas data", "Tidak ada hubungan", "Eksperimen sudah dilakukan"], 1, "Korelasi tidak cukup untuk menetapkan sebab."),
    q("p8q6", "Dark patterns", "Desain membuat tombol berlangganan terang tetapi membingungkan pembatalan. Ini dapat disebut...", ["Dark pattern", "Retrieval practice", "Atribusi", "Reinforcement positif"], 0, "Desain yang menghalangi pilihan bebas dapat menjadi pola manipulatif."),
    q("p8q7", "Eksperimen perilaku", "Eksperimen pribadi yang bertanggung jawab sebaiknya...", ["Mengubah banyak hal tanpa catatan", "Menentukan perilaku, hipotesis, ukuran, dan batas etis", "Mendiagnosis teman", "Menganggap satu hasil berlaku universal"], 1, "Desain jelas dan batas etis membantu interpretasi."),
    q("p8q8", "Aplikasi", "Strategi belajar baru tampak gagal. Langkah reflektif yang tepat...", ["Menyalahkan diri", "Periksa pelaksanaan, hambatan, ukuran, dan penjelasan alternatif", "Mengubah hasil agar sesuai", "Menganggap teori palsu"], 1, "Evaluasi proses dan hipotesis sebelum menarik kesimpulan."),
  ],
};

export const PSYCHOLOGY_ESSAYS: Record<string, EssayPrompt[]> = {
  "psi-bab-2": [
    essay("p2e1", "Rancang sesi belajar untuk materi sulit dengan retrieval practice, spaced practice, dan elaboration. Jelaskan bagaimana mengevaluasi pemahaman tanpa menyamakan familiaritas dengan penguasaan."),
    essay("p2e2", "Jelaskan mengapa perhatian dan memori kerja terbatas dapat mengganggu belajar saat ada notifikasi, lalu usulkan satu perubahan lingkungan dan batasnya."),
  ],
  "psi-bab-3": [
    essay("p3e1", "Analisis situasi hipotetis menerima kritik dengan memisahkan pemicu, interpretasi, emosi/sensasi tubuh, dan tindakan. Berikan dua respons alternatif."),
    essay("p3e2", "Bandingkan reappraisal, suppression, dan avoidance. Jelaskan konteks yang mungkin membuat tiap strategi membantu atau memiliki trade-off."),
  ],
  "psi-bab-4": [
    essay("p4e1", "Rancang intervensi sederhana untuk mengurangi kebiasaan membuka media sosial saat belajar dengan memetakan pemicu, tindakan, konsekuensi, dan ukuran hasil."),
    essay("p4e2", "Jelaskan perbedaan reinforcement positif, reinforcement negatif, dan punishment menggunakan contoh yang tepat dan tunjukkan mengapa istilah negatif bukan berarti hukuman."),
  ],
  "psi-bab-5": [
    essay("p5e1", "Analisis keputusan hipotetis mempertahankan aset merugi. Jelaskan sunk cost, loss aversion, confirmation bias, dan informasi masa depan yang relevan tanpa memberi rekomendasi investasi personal."),
    essay("p5e2", "Buat contoh anchoring atau framing, jelaskan bagaimana menguji pengaruhnya secara etis, serta batas interpretasi dari simulasi kecil."),
  ],
  "psi-bab-6": [
    essay("p6e1", "Analisis situasi kelompok yang mengikuti pendapat mayoritas. Bedakan pengaruh normatif dan informasional, lalu usulkan proses agar pendapat independen muncul."),
    essay("p6e2", "Jelaskan fundamental attribution error melalui contoh perilaku dan situasi. Bagaimana menghindari stereotip tanpa menghapus tanggung jawab individu?"),
  ],
  "psi-bab-7": [
    essay("p7e1", "Jelaskan Big Five sebagai dimensi, bukan tipe atau diagnosis. Sebutkan keterbatasan interpretasi satu tes dan penggunaan yang sebaiknya dihindari."),
    essay("p7e2", "Analisis perbedaan gaya kerja dua orang dengan membedakan preferensi, kemampuan, nilai, dan pengaruh situasi."),
  ],
  "psi-bab-8": [
    essay("p8e1", "Rancang eksperimen perilaku pribadi untuk mengurangi distraksi belajar. Nyatakan hipotesis, ukuran, faktor alternatif, durasi tinjauan, dan pertimbangan etis."),
    essay("p8e2", "Evaluasi klaim psikologi populer dengan membedakan fakta, interpretasi, base rate, kualitas sumber, dan informasi yang masih perlu diverifikasi."),
  ],
};

export const PSYCHOLOGY_FINAL_QUESTIONS: AssessmentQuestion[] = [
  q("pfq1", "Metode dan kausalitas", "Tim menemukan peserta yang tidur lebih lama mendapat skor tes lebih tinggi. Apa kesimpulan paling hati-hati?", ["Tidur pasti satu-satunya penyebab", "Ada hubungan; faktor lain dan arah sebab masih perlu diuji", "Skor tes mengukur seluruh kecerdasan", "Data membuktikan treatment"], 1, "Hubungan observasional tidak cukup untuk menetapkan kausalitas."),
  q("pfq2", "Kognisi", "Strategi mana yang paling langsung menguji retrieval, bukan sekadar pengenalan?", ["Membaca ulang sambil melihat teks", "Menjelaskan konsep dari ingatan lalu memeriksa", "Menyorot semua paragraf", "Menyimpan tautan"], 1, "Mengambil informasi tanpa melihat materi melatih retrieval."),
  q("pfq3", "Regulasi emosi", "Seseorang meninjau ulang makna kritik tanpa menyangkal fakta. Strategi ini disebut...", ["Cognitive reappraisal", "Suppression", "Availability", "Punishment"], 0, "Reappraisal mengubah interpretasi, bukan fakta."),
  q("pfq4", "Penguatan", "Perilaku belajar meningkat setelah notifikasi yang mengganggu dimatikan. Contoh paling sesuai...", ["Negative reinforcement", "Positive punishment", "Anchoring", "Encoding"], 0, "Menghilangkan stimulus aversif yang meningkatkan perilaku adalah negative reinforcement."),
  q("pfq5", "Bias keputusan", "Seseorang hanya mengikuti berita yang mendukung pembelian asetnya. Bias yang paling relevan...", ["Confirmation bias", "Working memory", "Conformity", "Sensasi"], 0, "Ia menyaring bukti yang berlawanan dengan keyakinan awal."),
  q("pfq6", "Pengaruh sosial", "Mayoritas komunitas menerima suatu klaim. Apa langkah terbaik?", ["Menerima tanpa verifikasi", "Periksa bukti independen dan sumber klaim", "Menganggap mayoritas selalu salah", "Menghapus ketidakpastian"], 1, "Popularitas tidak menggantikan mutu bukti."),
  q("pfq7", "Kepribadian", "Kuis daring singkat memberi label kepribadian pasti. Respons ilmiah...", ["Gunakan untuk diagnosis", "Tanyakan validitas, reliabilitas, norma, dan tujuan instrumen", "Anggap label menentukan masa depan", "Gunakan untuk memilih teman"], 1, "Interpretasi skor memerlukan bukti dan batas penggunaan."),
  q("pfq8", "Perubahan perilaku", "Strategi baru tidak mengurangi distraksi. Apa langkah evaluasi yang baik?", ["Menyalahkan karakter", "Tinjau ukuran, pelaksanaan, hambatan, dan penjelasan alternatif", "Mengklaim hasil sukses", "Menggeneralisasi pada semua orang"], 1, "Kegagalan memberi informasi untuk memperbaiki hipotesis atau rancangan."),
];

export const PSYCHOLOGY_FINAL_ESSAYS: EssayPrompt[] = [
  essay("pfe1", "Analisis kasus hipotetis siswa yang terdistraksi, merasa frustrasi, lalu mengikuti strategi kelompok yang belum teruji. Gunakan konsep kognitif, emosi, pembelajaran, dan pengaruh sosial."),
  essay("pfe2", "Rancang sistem belajar yang mengurangi distraksi dan mengevaluasi hasilnya. Sertakan hipotesis yang dapat diuji, ukuran, strategi regulasi, konteks sosial, dan batas etis."),
];
