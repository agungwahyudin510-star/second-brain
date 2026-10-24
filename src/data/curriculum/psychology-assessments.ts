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

export const PSYCHOLOGY_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "psi-bab-1": [
    q("p1q1", "Ruang lingkup", "Pernyataan yang paling sesuai tentang psikologi adalah...", ["Membaca pikiran tanpa data", "Kajian ilmiah perilaku dan proses mental", "Kumpulan tips motivasi", "Diagnosis semua perilaku tidak biasa"], 1, "Psikologi menggunakan metode empiris untuk memahami perilaku dan proses mental."),
    q("p1q2", "Metode empiris", "Peneliti ingin mengukur fokus belajar. Langkah awal yang membantu adalah...", ["Menganggap fokus sama dengan lama duduk", "Menetapkan ukuran operasional seperti ketepatan tugas dan menjelaskan batasnya", "Mewawancarai satu teman lalu menggeneralisasi", "Menyimpulkan fokus dari kepribadian"], 1, "Konstruk abstrak perlu diterjemahkan ke ukuran yang jelas, dengan keterbatasan disebutkan."),
    q("p1q3", "Proses mental", "“Ia membuka ponsel tiga kali” merupakan ___, sedangkan “ia bosan” merupakan ___", ["Interpretasi; observasi", "Observasi; hipotesis/interpretasi", "Diagnosis; fakta", "Emosi; perilaku"], 1, "Tindakan dapat diamati; penjelasan tentang bosan membutuhkan bukti tambahan."),
    q("p1q4", "Nature-nurture", "Kesimpulan yang paling tepat tentang nature dan nurture adalah...", ["Gen menentukan perilaku secara tunggal", "Lingkungan selalu mengalahkan biologi", "Banyak perilaku mencerminkan interaksi faktor biologis dan pengalaman", "Keduanya dapat dipisahkan sempurna"], 2, "Kedua kelompok faktor dapat saling berinteraksi; tidak ada dikotomi sederhana."),
    q("p1q5", "Pendekatan", "Untuk memahami pengaruh notifikasi pada perhatian belajar, peneliti kognitif terutama bertanya tentang...", ["Pemrosesan informasi dan pembagian perhatian", "Bentuk kepribadian permanen", "Kebijakan perpajakan", "Diagnosis klinis"], 0, "Pendekatan kognitif meneliti perhatian dan pemrosesan informasi."),
    q("p1q6", "Eksperimen", "Apa manfaat kelompok pembanding dalam eksperimen?", ["Memastikan semua peserta sama", "Membantu menilai apakah perubahan berkaitan dengan intervensi dibanding kondisi pembanding", "Menghapus seluruh bias", "Menjamin hasil berlaku bagi semua"], 1, "Pembanding memperkuat interpretasi, namun tidak menghapus semua keterbatasan."),
    q("p1q7", "Korelasi dan kausalitas", "Survei menemukan hubungan antara stres dan tidur pendek. Kesimpulan yang aman adalah...", ["Stres pasti menyebabkan tidur pendek", "Tidur pendek pasti menyebabkan stres", "Keduanya berkaitan dalam data; faktor ketiga atau arah sebab belum dipastikan", "Survei membuktikan intervensi"], 2, "Korelasi saja tidak menetapkan arah kausal atau menyingkirkan faktor lain."),
    q("p1q8", "Penerapan", "Dua siswa merespons kritik berbeda. Pendekatan awal yang paling ilmiah adalah...", ["Memberi label sifat tetap", "Mengamati respons dan mengumpulkan konteks serta interpretasi masing-masing", "Menganggap salah satu tidak rasional", "Mendiagnosis berdasarkan satu kejadian"], 1, "Kesimpulan perlu mempertimbangkan beberapa faktor dan menghindari label tanpa bukti."),
  ],
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
  "psi-bab-1": [
    essay("p1e1", "Rancang pertanyaan empiris untuk memahami kebiasaan menunda belajar. Definisikan perilaku yang diamati, satu hipotesis, ukuran, dan setidaknya dua batas kesimpulan."),
    essay("p1e2", "Jelaskan bagaimana nature dan nurture dapat berinteraksi pada satu kemampuan. Berikan analogi, contoh tandingan, serta alasan tidak membuat kesimpulan dari satu orang."),
  ],
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
