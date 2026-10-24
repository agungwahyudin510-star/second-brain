import type { CurriculumModule } from "@/lib/types";

type Topic = { title: string; content: string; minutes?: number };

function chapter(number: number, title: string, summary: string, topics: Topic[]): CurriculumModule {
  return {
    id: `eko-bab-${number}`,
    title: `Bab ${number} — ${title}`,
    summary,
    lessons: topics.map((topic, index) => ({
      id: `eko-${number}-${index + 1}`,
      title: topic.title,
      minutes: topic.minutes ?? 6,
      content: topic.content,
    })),
  };
}

export const EKONOMI: CurriculumModule[] = [
  chapter(1, "Fondasi Ekonomi dan Cara Berpikir Finansial", "Kelangkaan, pilihan, biaya peluang, insentif, dan keputusan yang lebih rasional.", [
    {
      title: "Pengertian Ekonomi dan Ruang Lingkupnya",
      minutes: 8,
      content: `# Pengertian Ekonomi dan Ruang Lingkupnya

**Tujuan:** menjelaskan apa yang dipelajari ilmu ekonomi dan mengapa konsepnya relevan untuk keputusan sehari-hari.

Ekonomi mempelajari bagaimana orang dan masyarakat **memilih menggunakan sumber daya yang terbatas** untuk memenuhi kebutuhan dan keinginan. Sumber daya bukan hanya uang: waktu, tenaga, keterampilan, lahan, bahan baku, dan perhatian juga terbatas. Karena sumber daya tidak cukup untuk semua kemungkinan, setiap pilihan mempunyai konsekuensi.

Ekonomi bukan sekadar belajar menjadi kaya atau menghafal harga. Ia membantu kita mengajukan pertanyaan: siapa yang membuat keputusan, pilihan apa yang tersedia, apa yang dikorbankan, insentif apa yang bekerja, dan bagaimana hasilnya dibagi? Rumah tangga memilih anggaran; perusahaan memilih produk dan tenaga kerja; pemerintah memilih pajak dan layanan publik.

**Contoh hipotetis:** sebuah keluarga mendapat tambahan Rp500.000. Uang itu dapat dipakai untuk dana darurat, membayar utang, atau kebutuhan sekolah. Analisis ekonomi tidak menentukan satu jawaban untuk semua keluarga; ia membuat tujuan, risiko, dan biaya alternatif terlihat.

**Batasan:** model ekonomi menyederhanakan kenyataan. Manusia tidak selalu memiliki informasi lengkap atau membuat keputusan sempurna. Nilai, keadilan, dan dampak lingkungan juga penting meskipun tidak seluruhnya tercermin dalam harga.

**Refleksi:** keputusan apa minggu ini yang menggunakan sumber daya terbatas selain uang?`,
    },
    {
      title: "Ekonomi Mikro dan Ekonomi Makro",
      content: `# Ekonomi Mikro dan Ekonomi Makro

**Mikroekonomi** mengamati keputusan unit tertentu: konsumen, pekerja, perusahaan, dan pasar suatu barang. Pertanyaan mikro misalnya: bagaimana diskon mengubah jumlah kopi yang dibeli, atau bagaimana biaya bahan baku memengaruhi harga jual.

**Makroekonomi** melihat perekonomian secara agregat: inflasi, pengangguran, pertumbuhan, suku bunga, dan nilai tukar. Keduanya berhubungan. Kenaikan suku bunga adalah fenomena makro, tetapi dampaknya dirasakan mikro melalui cicilan, keputusan menabung, dan investasi perusahaan.

**Contoh:** ketika harga cabai di satu pasar naik karena panen lokal terganggu, itu analisis mikro. Ketika harga banyak kelompok barang naik terus dan mengurangi daya beli secara luas, itu isu makro. Jangan menyimpulkan inflasi nasional dari satu harga yang naik.

**Cek pemahaman:** kelompokkan “perusahaan mengurangi produksi setelah biaya listrik naik” dan “tingkat pengangguran nasional meningkat”.`,
    },
    {
      title: "Kelangkaan Sumber Daya",
      content: `# Kelangkaan Sumber Daya

Kelangkaan berarti sumber daya yang tersedia terbatas dibandingkan pilihan penggunaannya. Kelangkaan tidak sama dengan “barang langka” atau kemiskinan: waktu luang orang kaya pun terbatas. Karena itu masyarakat perlu menentukan prioritas dan cara mengalokasikan sumber daya.

Rantai berpikirnya: **kelangkaan → pilihan → trade-off → biaya peluang**. Jika empat jam digunakan untuk belajar, waktu itu tidak dapat digunakan untuk bekerja atau beristirahat. Menambah satu penggunaan berarti mengurangi kemungkinan penggunaan lain.

**Analogi:** satu baterai hanya dapat menyalakan satu perangkat selama perjalanan. Memilih ponsel berarti mengorbankan tablet. Baterainya adalah sumber daya; aturan pengisian adalah mekanisme alokasi.

Kelangkaan dapat berubah. Teknologi, keterampilan, perdagangan, dan investasi bisa menambah kapasitas, tetapi biasanya memerlukan waktu dan sumber daya lain. Mengatakan suatu hal “gratis” juga tidak selalu berarti tanpa biaya: mungkin ada waktu, pajak, atau biaya lingkungan yang ditanggung pihak lain.

**Latihan:** tulis tiga sumber daya terbatas yang kamu gunakan hari ini dan dua pilihan untuk masing-masing.`,
    },
    {
      title: "Kebutuhan, Keinginan, dan Prioritas",
      content: `# Kebutuhan, Keinginan, dan Prioritas

Kebutuhan adalah hal yang diperlukan untuk menjaga fungsi dasar atau mencapai kewajiban penting; keinginan memberi kenyamanan atau kepuasan tambahan. Batasnya bergantung konteks. Paket internet mungkin kebutuhan untuk bekerja jarak jauh tetapi sekadar keinginan untuk hiburan.

Klasifikasi bukan penilaian moral. Tujuannya membantu menyusun prioritas saat dana terbatas. Urutkan pengeluaran menurut akibat jika ditunda, urgensi, nilai jangka panjang, dan alternatif yang tersedia. Biaya tetap seperti sewa perlu dibedakan dari pengeluaran yang dapat diubah.

**Contoh hipotetis:** seseorang memiliki Rp1 juta setelah kebutuhan rutin. Ia membandingkan memperbaiki laptop kerja (mengurangi risiko kehilangan pendapatan), membeli aksesori, dan menyimpan sebagian untuk keadaan darurat. Tidak ada persentase universal yang cocok untuk semua keadaan.

**Kesalahan umum:** menganggap semua pengeluaran yang menyenangkan otomatis tidak bertanggung jawab, atau menganggap setiap pembelian yang diberi label “kebutuhan” tidak perlu dievaluasi.

**Aksi:** klasifikasikan lima transaksi terakhir dan tandai mana yang paling mudah dikurangi bila pendapatan turun.`,
    },
    {
      title: "Biaya Peluang (Opportunity Cost)",
      minutes: 8,
      content: `# Biaya Peluang

**Biaya peluang** adalah nilai alternatif terbaik yang dilepas ketika memilih suatu opsi. Biaya sebenarnya bukan selalu seluruh alternatif yang tidak dipilih—hanya pilihan terbaik berikutnya yang relevan untuk perbandingan.

**Langkah menghitung:** (1) tentukan pilihan yang diambil, (2) sebutkan alternatif yang realistis, (3) pilih alternatif terbaik yang dikorbankan, (4) ukur manfaat bersih yang hilang. Biaya yang sudah terjadi dan tidak dapat dipulihkan biasanya bukan biaya peluang untuk keputusan ke depan.

**Contoh hipotetis:** kamu bisa mengambil shift freelance dua jam dengan upah bersih Rp150.000 per jam, atau menonton film. Jika memilih film, pendapatan Rp300.000 yang benar-benar dapat diperoleh adalah salah satu biaya peluangnya. Namun, bila waktu itu diperlukan untuk tidur setelah sakit, nilai kesehatan juga perlu dipertimbangkan; bukan semua keputusan bisa direduksi menjadi rupiah.

**Kesalahan umum:** menyebut harga barang sebagai biaya peluang tanpa membandingkan alternatif, atau menghitung beberapa alternatif sekaligus seolah semuanya bisa dipilih.

**Refleksi:** apa alternatif terbaik yang kamu korbankan untuk aktivitas belajar hari ini?`,
    },
    {
      title: "Insentif dan Perilaku Ekonomi",
      content: `# Insentif dan Perilaku Ekonomi

Insentif adalah manfaat atau biaya yang memengaruhi pilihan. Insentif dapat berupa uang (upah, diskon, pajak), aturan (denda, batas), maupun sosial (pengakuan, kebiasaan). Ketika insentif berubah, perilaku sering ikut berubah, tetapi respons orang tidak selalu sama.

**Contoh:** ongkos kirim gratis dapat mendorong pelanggan menambah barang ke keranjang. Perusahaan mungkin menetapkan ambang belanja minimum karena biaya pengiriman tetap harus ditanggung. Kebijakan yang baik memeriksa perilaku sampingan, bukan hanya niat awal.

Insentif bisa menghasilkan akibat tak terduga. Bila pekerja dinilai hanya dari jumlah tiket yang ditutup, mereka dapat memilih tiket mudah dan mengabaikan masalah kompleks. Ukuran yang dijadikan target dapat mengubah cara orang bekerja.

**Cara mengevaluasi:** siapa yang menerima manfaat, siapa yang membayar biaya, tindakan apa yang menjadi lebih mudah, dan apakah ada cara mengakali aturan? Insentif menjelaskan kecenderungan, bukan memastikan tindakan setiap individu.

**Latihan:** pilih satu promo yang pernah kamu gunakan. Apa perilaku yang ingin didorong penjual dan apa biaya yang mungkin tersembunyi?`,
    },
    {
      title: "Manfaat, Biaya, Risiko, dan Alternatif",
      content: `# Kerangka Keputusan Finansial

Sebelum memutuskan, bandingkan manfaat, biaya, risiko, dan alternatif. Pisahkan biaya satu kali dari biaya berulang, serta bedakan fakta yang diketahui dari asumsi. Gunakan nilai bersih: manfaat relevan dikurangi biaya relevan, tanpa menganggap hasil masa depan pasti.

**Contoh hipotetis:** kursus Rp600.000 mungkin memberi keterampilan yang meningkatkan peluang kerja, tetapi hasilnya tidak dijamin. Pertimbangkan waktu belajar, mutu materi, biaya kesempatan, pilihan gratis, dan kemungkinan menyelesaikan kursus. Tanyakan juga “apa yang terjadi jika perkiraan saya salah?”

Risiko adalah kemungkinan hasil berbeda dari harapan; ketidakpastian berarti peluangnya mungkin tidak diketahui dengan baik. Uji skenario dasar, optimistis, dan buruk. Hindari angka proyeksi palsu yang tampak presisi.

**Checklist:** tujuan jelas? alternatif realistis? biaya penuh? siapa menanggung risiko? dapat dibatalkan? keputusan ini sesuai kemampuan dan nilai pribadi?

**Refleksi:** tulis satu keputusan yang akan kamu buat dan satu informasi yang masih perlu diverifikasi.`,
    },
    {
      title: "Sunk Cost Fallacy dan Keputusan ke Depan",
      content: `# Sunk Cost Fallacy

**Sunk cost** adalah biaya yang sudah terjadi dan tidak dapat dipulihkan. Kesalahan sunk cost terjadi ketika seseorang terus mengeluarkan sumber daya hanya karena sudah telanjur mengeluarkan banyak, bukan karena opsi ke depan masih layak.

**Contoh:** tiket konser sudah dibeli dan tidak dapat dikembalikan. Pada hari acara kamu sakit. Harga tiket tetap hilang apa pun pilihanmu. Pertanyaan yang relevan sekarang adalah apakah manfaat menghadiri konser melebihi biaya dan risiko tambahan hari ini.

Ini tidak berarti pengalaman masa lalu tidak berguna. Pengalaman dapat memberi informasi baru untuk memperkirakan manfaat ke depan. Yang diabaikan adalah uang atau usaha yang tidak bisa dipulihkan sebagai alasan tunggal.

**Tes praktis:** “Jika belum mengeluarkan biaya itu, apakah saya tetap memilih opsi ini sekarang?” Jawaban “tidak” adalah sinyal untuk mengevaluasi ulang, bukan perintah otomatis untuk berhenti.

**Aksi:** gunakan tes ini untuk satu langganan atau proyek yang sedang kamu pertimbangkan.`,
    },
    {
      title: "Studi Kasus: Mengatur Uang Bulanan",
      content: `# Studi Kasus Hipotetis: Mengatur Uang Bulanan

Rani menerima pendapatan bersih Rp5.000.000 per bulan. Pengeluaran wajibnya Rp3.600.000, pembayaran utang Rp500.000, dan ia ingin membeli ponsel Rp1.800.000 bulan ini. Angka ini contoh hipotetis, bukan rekomendasi anggaran.

Hitung sisa sebelum pembelian: Rp5.000.000 − Rp3.600.000 − Rp500.000 = **Rp900.000**. Jika ponsel dibeli sekaligus, kebutuhan bulan berjalan tidak tertutup. Alternatifnya: menunda, mencari perangkat lebih murah, atau menabung beberapa bulan. Masing-masing punya biaya peluang: waktu menunggu, fungsi yang hilang, atau tujuan tabungan tertunda.

Rani juga memeriksa apakah utangnya memiliki bunga tinggi dan apakah ia punya cadangan untuk kejadian tak terduga. Ia tidak menyamakan “mampu membayar cicilan” dengan “pembelian murah”; total pembayaran dan risiko pendapatan turun tetap dihitung.

**Pertanyaan:** asumsi apa yang perlu ditanyakan sebelum memberi saran? Bagaimana jawaban berubah jika ponsel lama rusak dan diperlukan untuk bekerja?`,
    },
    {
      title: "Rangkuman dan Glosarium Bab 1",
      content: `# Rangkuman Bab 1

- Sumber daya terbatas memaksa orang memilih; pilihan menghasilkan trade-off.
- Biaya peluang adalah nilai alternatif terbaik yang dilepas.
- Insentif memengaruhi perilaku, tetapi hasilnya dapat berbeda dari niat.
- Keputusan ke depan mempertimbangkan biaya dan manfaat yang masih bisa berubah.
- Sunk cost tidak boleh menjadi satu-satunya alasan untuk melanjutkan.

## Glosarium
- **Kelangkaan:** keterbatasan sumber daya dibanding pilihan penggunaan.
- **Trade-off:** hal yang dikorbankan ketika memilih.
- **Biaya peluang:** nilai alternatif terbaik yang dilepas.
- **Insentif:** manfaat atau biaya yang memengaruhi perilaku.
- **Sunk cost:** biaya masa lalu yang tidak dapat dipulihkan.
- **Marginal:** tambahan satu unit atau perubahan kecil dalam keputusan.

## Cek diri
Jelaskan dengan contohmu sendiri mengapa keputusan “harga sudah dibayar” belum tentu alasan yang baik untuk melanjutkan. Bab berikutnya membahas bagaimana pilihan jutaan orang berinteraksi di pasar.`,
    },
  ]),
  chapter(2, "Sistem Ekonomi, Pasar, dan Harga", "Bagaimana pilihan pembeli dan penjual membentuk harga, kuantitas, dan peran kebijakan.", [
    { title: "Sistem Ekonomi dan Alokasi Sumber Daya", content: `# Sistem Ekonomi dan Alokasi\n\nSetiap masyarakat menentukan apa yang diproduksi, bagaimana memproduksinya, dan siapa yang memperoleh hasilnya. Pasar menggunakan harga dan kepemilikan; sistem komando menggunakan keputusan terpusat; praktik nyata biasanya mencampur mekanisme pasar dan kebijakan publik.\n\nTidak ada satu sistem yang otomatis menyelesaikan semua persoalan. Evaluasi efisiensi, kebebasan memilih, pemerataan, stabilitas, dan dampak eksternal. Aturan kelembagaan—kontrak, persaingan, dan perlindungan konsumen—membentuk hasil pasar.` },
    { title: "Permintaan dan Hukum Permintaan", content: `# Permintaan\n\nPermintaan adalah hubungan antara harga dan jumlah yang bersedia serta mampu dibeli selama periode tertentu. Dengan faktor lain tetap, harga lebih tinggi biasanya mengurangi jumlah yang diminta. Ini bukan pernyataan bahwa semua orang bereaksi sama.\n\nPendapatan, selera, jumlah pembeli, ekspektasi, dan harga barang terkait dapat menggeser seluruh kurva. Bedakan perubahan jumlah diminta akibat harga barang itu sendiri dari perubahan permintaan akibat faktor lain.` },
    { title: "Penawaran dan Hukum Penawaran", content: `# Penawaran\n\nPenawaran menghubungkan harga dengan jumlah yang bersedia dijual produsen. Harga lebih tinggi sering mendorong produksi tambahan karena unit yang biayanya lebih tinggi menjadi layak dijual.\n\nBiaya input, teknologi, pajak, cuaca, dan jumlah penjual dapat menggeser kurva. Gangguan panen cabai, misalnya, dapat mengurangi penawaran tanpa perubahan harga sebagai penyebab awal. Hasil akhirnya bergantung pada respons pembeli dan penjual.` },
    { title: "Kurva Permintaan dan Penawaran", content: `# Membaca Kurva\n\nGrafik pasar menempatkan kuantitas pada sumbu horizontal dan harga per unit pada sumbu vertikal. Kurva permintaan biasanya menurun; kurva penawaran biasanya menaik. Kurva adalah model hubungan, bukan foto lengkap semua transaksi.\n\nLabel sumbu, satuan, dan periode penting. Perubahan harga barang itu sendiri menggerakkan titik sepanjang kurva; perubahan faktor lain dapat menggeser kurva. Lihat simulasi kurva pada halaman materi untuk mengubah posisi kedua kurva.` },
    { title: "Keseimbangan Pasar", content: `# Keseimbangan Pasar\n\nKeseimbangan adalah harga dan kuantitas saat jumlah yang ingin dibeli sama dengan jumlah yang ingin dijual. Harga di atas titik itu dapat menciptakan surplus; harga di bawahnya dapat menciptakan kekurangan, dengan asumsi harga bisa menyesuaikan.\n\nKeseimbangan bukan berarti adil atau ideal. Ia juga dapat berubah karena kondisi pasokan, pendapatan, selera, atau kebijakan berubah. Model membantu memahami tekanan penyesuaian, bukan memprediksi angka persis tanpa data.` },
    { title: "Pergeseran Kurva dan Perubahan Kuantitas", content: `# Pergeseran dan Gerak\n\nJika harga kopi berubah, jumlah kopi yang diminta bergerak sepanjang kurva permintaan kopi. Jika pendapatan konsumen naik dan kopi adalah barang normal, kurva permintaan dapat bergeser.\n\nGunakan urutan: tentukan peristiwa; tentukan kurva; arah pergeseran; bandingkan keseimbangan baru. Jangan menyebut semua perubahan sebagai “permintaan naik”: harga dan kuantitas ekuilibrium dapat bergerak ke arah berbeda tergantung kurva yang bergeser.` },
    { title: "Elastisitas Harga", content: `# Elastisitas\n\nElastisitas mengukur respons persentase kuantitas terhadap perubahan persentase harga. Nilai absolut di atas satu sering disebut elastis; di bawah satu inelastis; mendekati satu unit elastis. Tanda hubungan permintaan biasanya negatif, tetapi klasifikasi memakai nilai absolut.\n\nBarang dengan banyak substitusi atau porsi besar dari anggaran cenderung lebih elastis. Dalam jangka panjang orang punya lebih banyak waktu beradaptasi. Jangan menyimpulkan elastisitas hanya dari kategori barang; konteks dan data dibutuhkan.` },
    { title: "Biaya Produksi dan Struktur Pasar", content: `# Biaya dan Persaingan\n\nBiaya tetap tidak berubah langsung dengan jumlah produksi dalam rentang tertentu; biaya variabel berubah mengikuti produksi. Biaya marginal adalah biaya tambahan untuk satu unit lagi. Keputusan produksi membandingkan manfaat pendapatan tambahan dengan biaya marginal.\n\nPersaingan sempurna, monopoli, oligopoli, dan persaingan monopolistik adalah model struktur pasar. Jumlah perusahaan, hambatan masuk, dan daya tawar memengaruhi harga dan pilihan. Pasar nyata dapat berada di antara model ideal.` },
    { title: "Peran Pemerintah dan Kegagalan Pasar", content: `# Pemerintah dan Kegagalan Pasar\n\nEksternalitas terjadi ketika dampak transaksi memengaruhi pihak ketiga, misalnya polusi. Barang publik sulit mengecualikan pengguna dan dapat dipakai bersama. Informasi tidak seimbang juga dapat menghasilkan keputusan yang buruk.\n\nPajak, subsidi, regulasi, dan penyediaan layanan dapat memperbaiki sebagian masalah, tetapi memiliki biaya dan konsekuensi. Evaluasi tujuan, biaya administrasi, siapa yang terdampak, serta kemungkinan kebijakan menciptakan distorsi baru.` },
    { title: "Studi Kasus Harga Barang Sehari-hari", content: `# Studi Kasus Hipotetis: Harga Telur\n\nBayangkan biaya pakan naik sementara permintaan telur tetap. Kenaikan biaya dapat menggeser penawaran ke kiri; harga keseimbangan cenderung naik dan kuantitas turun. Ini analisis arah, bukan ramalan harga.\n\nJika pada saat yang sama pendapatan rumah tangga naik, permintaan bisa bergeser ke kanan. Harga kemungkinan mendapat tekanan naik lebih kuat, sedangkan perubahan kuantitas bergantung besar relatif kedua pergeseran. Catat data lokal dan pisahkan observasi dari penjelasan.` },
  ]),
  chapter(3, "Keuangan Pribadi dan Arus Kas", "Mengukur pendapatan, mengatur pengeluaran, membangun tabungan, dan menilai kondisi keuangan.", [
    { title: "Pendapatan Kotor dan Bersih", content: `# Pendapatan Kotor dan Bersih\n\nPendapatan kotor adalah jumlah sebelum potongan; pendapatan bersih adalah yang tersedia setelah pajak, iuran, dan potongan lain. Untuk membuat anggaran, gunakan arus yang benar-benar diterima dan catat potongan secara terpisah bila membantu perencanaan.\n\nPendapatan tidak selalu bulanan atau tetap. Pekerja lepas dapat memakai rata-rata konservatif dan memisahkan rekening pajak atau biaya usaha. Jangan menganggap pendapatan satu bulan yang tinggi akan berulang.` },
    { title: "Arus Kas Masuk dan Keluar", content: `# Arus Kas\n\nArus kas mencatat kapan uang diterima dan dibayar. Surplus periode = pemasukan − pengeluaran; defisit berarti pengeluaran melebihi pemasukan pada periode itu. Seseorang dapat memiliki aset tetapi tetap mengalami masalah kas jika uang tidak tersedia saat tagihan jatuh tempo.\n\nCatat transaksi dengan tanggal, kategori, dan nilai. Perkiraan membantu memulai, tetapi cocokkan dengan mutasi aktual. Lihat visual arus kas interaktif untuk mengubah pemasukan dan pengeluaran contoh.` },
    { title: "Klasifikasi Pengeluaran", content: `# Klasifikasi Pengeluaran\n\nPisahkan pengeluaran tetap, variabel, berkala, dan tidak terduga. Tagihan tahunan dapat dibagi menjadi alokasi bulanan agar tidak mengejutkan. Kategori kebutuhan/keinginan adalah lapisan lain yang membantu menentukan prioritas.\n\nGunakan data beberapa bulan agar pola musiman terlihat. Kategori terlalu banyak membuat pencatatan melelahkan; kategori terlalu sedikit menyembunyikan kebocoran. Pilih tingkat detail yang akan kamu pertahankan.` },
    { title: "Kebutuhan, Keinginan, dan Prioritas Finansial", content: `# Menetapkan Prioritas\n\nPrioritas bergantung pada kewajiban, tujuan, tanggungan, dan risiko. Dahulukan kebutuhan dasar dan kewajiban yang berdampak besar jika terlewat, lalu tetapkan batas untuk pengeluaran pilihan.\n\nRasio populer hanyalah titik awal, bukan aturan universal. Biaya hidup, lokasi, pendapatan, dan keadaan keluarga berbeda. Evaluasi anggaran sebagai alat untuk memilih, bukan hukuman atas pengeluaran.` },
    { title: "Menyusun Anggaran Bulanan", content: `# Anggaran Bulanan\n\nMulai dari pendapatan bersih konservatif, daftar tagihan wajib, kebutuhan variabel, tabungan/tujuan, lalu pengeluaran diskresioner. Pastikan jumlah rencana tidak melampaui uang yang tersedia dan tanggal penerimaan cocok dengan tanggal tagihan.\n\nTinjau rencana di tengah bulan dan akhir bulan. Anggaran adalah perkiraan yang diperbarui dengan informasi baru, bukan janji bahwa setiap bulan akan sama. Sisakan ruang untuk biaya tidak rutin.` },
    { title: "Tabungan dan Tujuan Finansial", content: `# Tujuan Tabungan\n\nTujuan yang berguna memiliki nominal, tenggat, dan prioritas. Dana pernikahan satu tahun lagi berbeda dari tabungan pensiun puluhan tahun lagi; horizon dan risiko instrumen perlu disesuaikan.\n\nOtomatisasi transfer dapat membantu konsistensi, tetapi pastikan saldo cukup dan biaya/aturan rekening dipahami. Jangan menginvestasikan dana yang segera diperlukan pada aset yang nilainya mudah turun.` },
    { title: "Dana Darurat", content: `# Dana Darurat\n\nDana darurat menyediakan likuiditas untuk kejadian yang tidak direncanakan, seperti kehilangan pendapatan atau perbaikan penting. Besarnya bergantung pada kestabilan kerja, tanggungan, perlindungan yang tersedia, dan biaya hidup.\n\nBangun bertahap dan tempatkan pada akses yang relatif mudah serta risiko rendah sesuai kebutuhan. Dana ini bukan dana untuk setiap diskon, tetapi definisi “darurat” perlu realistis bagi keadaan pribadi.` },
    { title: "Kekayaan Bersih (Net Worth)", content: `# Kekayaan Bersih\n\nKekayaan bersih = total aset − total kewajiban pada satu tanggal. Aset dapat berupa kas, investasi, atau barang bernilai; kewajiban mencakup saldo utang. Nilai rumah atau kendaraan perlu diperkirakan secara hati-hati.\n\nAngka ini gambaran posisi, bukan ukuran harga diri dan bukan ukuran likuiditas. Catat berkala dengan metode konsisten. Perubahan bisa berasal dari tabungan, pelunasan utang, maupun perubahan nilai pasar.` },
    { title: "Evaluasi Kesehatan Keuangan", content: `# Menilai Kesehatan Keuangan\n\nPeriksa arus kas, kecukupan likuiditas, beban utang, perlindungan risiko, dan kemajuan menuju tujuan. Satu indikator tidak cukup: surplus kas yang besar tidak menghapus risiko utang berbunga tinggi.\n\nGunakan indikator untuk bertanya, bukan memberi diagnosis pasti. Data yang tidak lengkap dan kondisi mendatang membatasi kesimpulan. Jika keputusan hukum atau pajak rumit, cari bantuan profesional yang sesuai.` },
    { title: "Simulasi Anggaran Bulanan", content: `# Simulasi Hipotetis\n\nPendapatan bersih contoh Rp6.000.000; kebutuhan dan tagihan Rp3.800.000; transportasi dan kebutuhan fleksibel Rp900.000; cicilan Rp500.000. Sisa rencana Rp800.000 dapat dibagi ke tujuan, cadangan, dan hiburan sesuai prioritas.\n\nJika pendapatan turun Rp600.000, defisit tidak otomatis diselesaikan dengan memotong semua tabungan. Tinjau kategori yang dapat berubah, negosiasikan kewajiban bila memungkinkan, dan hindari menambah utang mahal. Gunakan simulasi di halaman belajar untuk mengubah angka contoh.` },
  ]),
  chapter(4, "Utang, Bunga, dan Kredit", "Memahami biaya pinjaman secara menyeluruh dan membandingkan pilihan dengan hati-hati.", [
    { title: "Pengertian dan Jenis Utang", content: `# Jenis Utang\n\nUtang adalah kewajiban membayar di masa depan sesuai perjanjian. Kredit konsumtif, kredit kendaraan, KPR, dan pinjaman usaha memiliki tujuan, jaminan, tenor, dan risiko berbeda.\n\nSebelum menyetujui, baca siapa pemberi pinjaman, total kewajiban, jadwal, denda, jaminan, dan mekanisme pengaduan. Pinjaman yang mudah diakses belum tentu aman atau terjangkau.` },
    { title: "Pokok Pinjaman dan Bunga", content: `# Pokok dan Bunga\n\nPokok adalah jumlah yang dipinjam. Bunga adalah biaya penggunaan dana yang dihitung sesuai metode perjanjian. Pembayaran cicilan dapat terdiri dari pokok, bunga, biaya administrasi, asuransi, dan denda.\n\nPastikan angka suku bunga menyebut periode dan metode. “2%” per bulan berbeda dari 2% per tahun; jangan membandingkan persentase tanpa satuan dan basis yang sama.` },
    { title: "Bunga Sederhana dan Majemuk", content: `# Bunga Sederhana dan Majemuk\n\nBunga sederhana dihitung atas pokok awal: bunga = pokok × suku bunga per periode × jumlah periode. Bunga majemuk menambahkan bunga ke saldo sehingga periode berikutnya dapat menghasilkan bunga atas bunga.\n\nContoh hipotetis Rp1.000.000 pada 10% setahun selama dua tahun: sederhana menghasilkan bunga Rp200.000; majemuk tahunan menghasilkan saldo Rp1.210.000, atau bunga Rp210.000, sebelum biaya dan pajak.` },
    { title: "Bunga Nominal dan Biaya Efektif", content: `# Membandingkan Biaya Kredit\n\nSuku bunga nominal belum tentu mencakup seluruh biaya. Biaya efektif mempertimbangkan pola arus pembayaran dan biaya yang diwajibkan. Metode flat dan saldo menurun juga membuat cicilan dengan angka bunga sama menghasilkan total biaya berbeda.\n\nMinta simulasi tertulis yang menunjukkan jumlah diterima, cicilan, total bayar, biaya tambahan, dan konsekuensi pelunasan awal. Gunakan asumsi yang sama saat membandingkan penawaran.` },
    { title: "Perhitungan Cicilan dan Total Pembayaran", content: `# Cicilan dan Total\n\nTotal pembayaran sederhana = jumlah cicilan × jumlah periode + biaya di luar cicilan. Rumus ini tidak menggantikan perhitungan amortisasi, tetapi cepat menunjukkan mengapa cicilan kecil dengan tenor panjang dapat menambah total biaya.\n\nPeriksa apakah cicilan tetap, berubah, atau memiliki pembayaran akhir besar. Lakukan stress test: apakah anggaran masih mampu jika pendapatan turun atau biaya hidup naik?` },
    { title: "Tenor, Denda, dan Biaya Administrasi", content: `# Ketentuan Pinjaman\n\nTenor panjang biasanya menurunkan cicilan bulanan tetapi dapat meningkatkan total bunga. Tenor pendek dapat menghemat biaya tetapi membebani arus kas. Denda keterlambatan dan biaya administrasi harus dibaca sebelum menandatangani.\n\nCari tabel biaya dan tanggal jatuh tempo. Jangan mengandalkan penjelasan lisan jika dokumen resmi menyatakan hal lain. Simpan salinan kontrak dan bukti pembayaran.` },
    { title: "Rasio Beban Utang", content: `# Beban Utang\n\nRasio beban utang membandingkan pembayaran utang dengan pendapatan. Definisi pembilang dan penyebut harus konsisten—pendapatan kotor atau bersih, dan utang apa saja yang dihitung.\n\nRasio adalah alat peringatan, bukan persetujuan otomatis. Stabilitas kerja, tanggungan, biaya dasar, dan bunga variabel juga menentukan kemampuan bayar. Hindari mengambil utang baru hanya karena rasio terlihat rendah.` },
    { title: "Strategi Pelunasan Utang", content: `# Strategi Pelunasan\n\nMetode avalanche memprioritaskan bunga tertinggi untuk menekan biaya total; metode snowball memprioritaskan saldo terkecil untuk memberi kemajuan psikologis. Keduanya perlu membayar minimum semua kewajiban dan memastikan tidak ada penalti yang mengubah perhitungan.\n\nBuat daftar saldo, bunga, minimum bayar, dan jatuh tempo. Jika kesulitan, hubungi pemberi pinjaman melalui kanal resmi lebih awal dan hindari tawaran “hapus utang” yang meminta biaya di muka tanpa kejelasan.` },
    { title: "Risiko Pinjaman Konsumtif dan Ilegal", content: `# Risiko Kredit\n\nPinjaman konsumtif dapat membantu meratakan pengeluaran tetapi menambah kewajiban masa depan. Pinjaman ilegal berisiko pada biaya tak transparan, penyalahgunaan data, intimidasi, dan tidak adanya perlindungan yang memadai.\n\nVerifikasi penyelenggara pada sumber regulator resmi sebelum berbagi data. Jangan memberikan PIN, OTP, atau akses akun. Jika ada ancaman atau penyalahgunaan, dokumentasikan bukti dan gunakan kanal bantuan resmi.` },
    { title: "Simulasi Membandingkan Pinjaman", content: `# Simulasi Hipotetis\n\nPenawaran A: cicilan Rp1.100.000 selama 12 bulan; penawaran B: Rp720.000 selama 20 bulan. Total angsuran A Rp13.200.000, B Rp14.400.000, sebelum biaya tambahan. Cicilan B lebih rendah tetapi totalnya lebih tinggi pada angka contoh ini.\n\nBandingkan jumlah dana bersih yang diterima, biaya wajib, denda, bunga variabel, dan kemampuan bayar. Angka ini ilustrasi, bukan penawaran kredit nyata.` },
  ]),
  chapter(5, "Inflasi, Suku Bunga, dan Ekonomi Makro", "Menghubungkan indikator makro dengan daya beli, pekerjaan, kebijakan, dan keputusan rumah tangga.", [
    { title: "Inflasi dan Deflasi", content: `# Inflasi dan Deflasi\n\nInflasi adalah kenaikan tingkat harga umum yang berkelanjutan; bukan setiap harga barang naik. Deflasi adalah penurunan tingkat harga umum. Perubahan harga individu bisa berbeda dari tren indeks agregat.\n\nInflasi mengurangi daya beli jika pendapatan nominal tidak menyesuaikan secepat harga. Namun dampak tiap rumah tangga berbeda sesuai keranjang belanja, utang, aset, dan sumber pendapatan.` },
    { title: "Indeks Harga Konsumen", content: `# Indeks Harga Konsumen\n\nIndeks harga konsumen (IHK) mengukur perubahan biaya keranjang barang dan jasa representatif dari waktu ke waktu. Keranjang dan bobot adalah pendekatan; pola belanja keluarga tertentu mungkin berbeda.\n\nTingkat perubahan indeks mengukur inflasi untuk periode yang dipilih. Perhatikan perbandingan tahunan atau bulanan, cakupan wilayah, revisi, dan sumber resmi. Jangan menganggap angka indeks sebagai perubahan harga setiap barang.` },
    { title: "Inflasi dan Daya Beli", content: `# Daya Beli\n\nDaya beli menunjukkan barang/jasa yang dapat dibeli dengan pendapatan. Jika pendapatan naik 4% sementara harga keranjang pribadi naik 6%, daya beli keranjang itu secara kasar menurun, meskipun gaji nominal bertambah.\n\nHitung dengan kategori belanja pribadi untuk keputusan rumah tangga; gunakan indeks resmi untuk tren agregat. Inflasi tinggi tidak berarti seluruh barang naik dengan laju sama.` },
    { title: "Suku Bunga dan Kebijakan Moneter", content: `# Transmisi Suku Bunga\n\nPerubahan suku bunga kebijakan dapat memengaruhi biaya pendanaan bank, suku bunga pinjaman/tabungan, nilai tukar, permintaan, dan ekspektasi. Dampak merambat dengan jeda dan tidak selalu sama besar.\n\nSuku bunga lebih tinggi dapat menekan permintaan dan inflasi, tetapi juga meningkatkan biaya peminjam. Keputusan bank sentral mempertimbangkan banyak indikator dan trade-off, bukan satu tombol yang langsung mengubah harga.` },
    { title: "Bank Sentral dan Kebijakan Moneter", content: `# Bank Sentral\n\nBank sentral menjalankan mandat yang ditetapkan hukum, mengelola kebijakan moneter, dan menjaga stabilitas sistem sesuai kewenangannya. Instrumen dan mandat berbeda antarnegara.\n\nPahami pengumuman melalui dokumen resmi dan bedakan suku bunga kebijakan dari suku bunga pinjaman konsumen. Perubahan pasar juga dipengaruhi ekspektasi, risiko, dan kondisi global.` },
    { title: "Nilai Tukar dan Perdagangan", content: `# Nilai Tukar\n\nNilai tukar menyatakan harga satu mata uang dalam mata uang lain. Perubahan kurs dapat memengaruhi biaya impor, penerimaan eksportir, perjalanan, dan nilai kewajiban valuta asing.\n\nDampaknya beragam: pelemahan mata uang bisa membantu sebagian eksportir tetapi menaikkan biaya bahan baku impor. Hindari menyebut perubahan kurs selalu baik atau buruk tanpa melihat siapa yang bertransaksi dan dalam mata uang apa.` },
    { title: "PDB dan Pertumbuhan Ekonomi", content: `# PDB\n\nProduk domestik bruto mengukur nilai barang dan jasa akhir yang diproduksi dalam batas wilayah pada periode tertentu. Pertumbuhan PDB riil menyesuaikan perubahan harga; PDB nominal tidak.\n\nPDB berguna untuk melihat aktivitas ekonomi agregat, tetapi bukan ukuran lengkap kesejahteraan, distribusi, kualitas lingkungan, atau pekerjaan rumah tangga. Periksa definisi dan periode data.` },
    { title: "Pengangguran dan Pasar Tenaga Kerja", content: `# Pasar Tenaga Kerja\n\nTingkat pengangguran dihitung dari bagian angkatan kerja yang tidak bekerja dan mencari pekerjaan sesuai definisi statistik. Orang yang berhenti mencari dapat tidak tercakup dengan cara yang sama.\n\nPerhatikan partisipasi angkatan kerja, jam kerja, kualitas pekerjaan, dan upah. Satu angka pengangguran tidak menjelaskan seluruh kondisi rumah tangga atau peluang tiap sektor.` },
    { title: "Kebijakan Fiskal dan Pajak", content: `# Kebijakan Fiskal\n\nKebijakan fiskal menggunakan belanja dan pajak pemerintah untuk membiayai layanan publik dan memengaruhi aktivitas ekonomi. Defisit terjadi ketika belanja melampaui penerimaan dalam periode tertentu; pembiayaannya menambah kebutuhan pendanaan.\n\nEvaluasi manfaat program, sumber dana, distribusi beban, dan keberlanjutan. Pajak memiliki tujuan penerimaan dan dapat memengaruhi insentif. Dampak akhir tergantung desain serta respons warga dan perusahaan.` },
    { title: "Studi Kasus: Membaca Perubahan Ekonomi", content: `# Studi Kasus Hipotetis\n\nMisalkan harga bahan pangan naik, sementara upah nominal keluarga tetap. Rumah tangga dapat mengganti pilihan barang, mengurangi tabungan, atau mencari tambahan pendapatan. Pemerintah dapat mempertimbangkan bantuan terarah; setiap pilihan memiliki biaya dan dampak distribusi.\n\nUntuk menganalisis berita, catat indikator, periode, sumber, kelompok terdampak, dan fakta yang belum diketahui. Jangan mencampur korelasi dengan sebab-akibat.` },
  ]),
  chapter(6, "Risiko, Asuransi, dan Ketahanan Finansial", "Mengantisipasi kejadian yang merugikan, menjaga likuiditas, dan memahami perlindungan.", [
    { title: "Risiko Finansial dan Ketidakpastian", content: `# Risiko dan Ketidakpastian\n\nRisiko adalah kemungkinan hasil merugikan; beberapa risiko dapat diperkirakan dengan data, sementara ketidakpastian sulit diberi probabilitas yang andal. Kehilangan pekerjaan, sakit, bencana, dan perubahan suku bunga memiliki dampak berbeda.\n\nBuat daftar kejadian, peluang kasar bila diketahui, dampak, dan tindakan pencegahan. Jangan memberi angka presisi pada peluang yang tidak memiliki dasar.` },
    { title: "Dana Darurat dan Likuiditas", content: `# Likuiditas\n\nLikuiditas adalah kemudahan mengubah aset menjadi uang yang dapat dipakai tanpa kehilangan nilai besar. Dana darurat dan rekening transaksi perlu mudah diakses; investasi jangka panjang dapat lebih sulit dicairkan atau fluktuatif.\n\nPisahkan tujuan dana berdasarkan kapan dibutuhkan. Likuiditas memiliki trade-off dengan potensi imbal hasil, jadi jangan mengejar return sambil mengabaikan kebutuhan kas.` },
    { title: "Risiko Kehilangan Pendapatan", content: `# Kehilangan Pendapatan\n\nSumber pendapatan yang bergantung pada satu pekerjaan atau klien dapat rentan terhadap gangguan. Petakan pengeluaran wajib, perlindungan yang ada, keterampilan yang dapat dialihkan, dan jaringan dukungan.\n\nRencana kontingensi mencakup pengeluaran yang dapat ditunda, dokumen penting, serta langkah mencari bantuan. Diversifikasi pendapatan tidak selalu layak atau bebas biaya; fokus pada opsi realistis.` },
    { title: "Prinsip Dasar Asuransi", content: `# Asuransi\n\nAsuransi mengalihkan sebagian risiko keuangan dengan membayar premi sesuai kontrak. Perlindungan berlaku pada kejadian dan batas tertentu; tidak semua kerugian otomatis ditanggung.\n\nBandingkan kebutuhan, risiko yang ditanggung, premi, pengecualian, batas manfaat, masa tunggu, dan kemampuan membayar premi berkelanjutan. Jangan membeli hanya karena tekanan atau janji lisan.` },
    { title: "Premi, Manfaat, Pengecualian, dan Klaim", content: `# Membaca Polis\n\nPremi adalah pembayaran untuk perlindungan; manfaat adalah pembayaran/layanan jika syarat terpenuhi. Pengecualian, masa tunggu, deductible, batas tahunan, dan dokumen klaim menentukan perlindungan nyata.\n\nSimpan polis dan bukti. Sebelum tanda tangan, minta penjelasan tertulis atas istilah yang tidak dipahami dan periksa prosedur pengaduan. Produk tidak bisa dinilai dari premi murah saja.` },
    { title: "Perlindungan Konsumen Keuangan", content: `# Perlindungan Konsumen\n\nPeriksa identitas lembaga, izin sesuai produk, ketentuan, biaya, dan saluran pengaduan melalui sumber regulator resmi. Jangan mengirim data sensitif melalui tautan atau nomor yang belum diverifikasi.\n\nBaca kontrak dan simpan bukti komunikasi. Jika ada sengketa, catat kronologi, hubungi kanal resmi penyedia, lalu ikuti mekanisme pengaduan regulator yang berlaku.` },
    { title: "Penipuan Investasi dan Rekayasa Sosial", content: `# Waspada Penipuan\n\nTanda bahaya meliputi keuntungan pasti tinggi, tekanan untuk segera transfer, bonus rekrut anggota, bukti testimoni tanpa verifikasi, dan permintaan OTP atau seed phrase. Tampilan profesional tidak membuktikan legalitas.\n\nHentikan komunikasi saat diminta data rahasia. Verifikasi secara independen, jangan lewat tautan dari pengirim, dan laporkan melalui kanal resmi. Keuntungan tinggi tanpa risiko yang dijelaskan adalah klaim yang perlu dicurigai.` },
    { title: "Diversifikasi Sumber Pendapatan", content: `# Diversifikasi\n\nDiversifikasi dapat mengurangi ketergantungan pada satu sumber, tetapi memerlukan waktu, biaya, keterampilan, dan dapat menambah kompleksitas pajak. Pendapatan tambahan juga bisa berkorelasi dengan pekerjaan utama.\n\nMulai dengan menilai kapasitas dan risiko sebelum menjalankan usaha sampingan. Jangan mengorbankan kesehatan atau pekerjaan utama demi proyeksi pemasukan yang belum terbukti.` },
    { title: "Perencanaan Keadaan Darurat", content: `# Rencana Darurat\n\nSiapkan daftar kontak, dokumen, akses rekening, kewajiban otomatis, dan langkah jika ponsel atau kartu hilang. Pastikan anggota keluarga mengetahui prosedur dasar yang aman tanpa membagikan kata sandi.\n\nRencana harus diperbarui ketika pekerjaan, alamat, tanggungan, atau produk keuangan berubah. Simpan salinan dokumen dengan perlindungan akses yang layak.` },
    { title: "Studi Kasus Ketahanan Rumah Tangga", content: `# Studi Kasus Hipotetis\n\nPendapatan rumah tangga turun sementara selama dua bulan. Mereka mencatat kas yang tersedia, tagihan jatuh tempo, kebutuhan dasar, dan bantuan/perlindungan yang memenuhi syarat. Mereka menunda belanja diskresioner dan menghubungi pemberi pinjaman sebelum menunggak.\n\nTidak ada satu urutan yang cocok bagi semua keluarga. Tujuan latihan adalah mengidentifikasi pilihan lebih awal dan mencegah keputusan panik berbiaya tinggi.` },
  ]),
  chapter(7, "Investasi dan Pertumbuhan Aset", "Membedakan instrumen dan risiko serta menyelaraskan investasi dengan tujuan.", [
    { title: "Menabung, Investasi, dan Spekulasi", content: `# Menabung vs Investasi\n\nMenabung menjaga dana untuk kebutuhan dekat dengan akses yang relatif mudah; investasi menempatkan modal pada aset dengan risiko perubahan nilai demi kemungkinan pertumbuhan atau pendapatan. Spekulasi mengandalkan perubahan harga jangka pendek dengan ketidakpastian tinggi.\n\nTujuan dan horizon menentukan pilihan. Dana yang diperlukan segera tidak seharusnya bergantung pada hasil pasar yang tidak pasti.` },
    { title: "Risiko dan Imbal Hasil", content: `# Risiko dan Imbal Hasil\n\nImbal hasil adalah perubahan nilai dan/atau pendapatan investasi selama periode tertentu. Risiko mencakup kemungkinan rugi, volatilitas, gagal bayar, likuiditas rendah, dan inflasi.\n\nPotensi return tinggi bukan jaminan hasil tinggi. Bandingkan rentang kemungkinan, biaya, horizon, dan kemampuan menanggung kerugian. Data historis bukan ramalan masa depan.` },
    { title: "Bunga Majemuk dan Pertumbuhan Modal", content: `# Pertumbuhan Majemuk\n\nJika hasil diinvestasikan kembali, pertumbuhan dapat berbunga majemuk: nilai masa depan = modal awal × (1 + tingkat per periode)^jumlah periode, dengan asumsi tingkat tetap. Dunia nyata berfluktuasi dan biaya/pajak memengaruhi hasil.\n\nLihat simulasi interaktif yang memperlihatkan asumsi hipotetis. Jangan menampilkan angka contoh sebagai janji atau prediksi.` },
    { title: "Saham dan Kepemilikan Perusahaan", content: `# Saham\n\nSaham mewakili kepemilikan pada perusahaan sesuai hak yang melekat. Nilainya dapat berubah karena kinerja, ekspektasi, kondisi pasar, dan faktor lain. Dividen tidak dijamin.\n\nPelajari risiko bisnis, konsentrasi, biaya, dan keterbukaan informasi. Membeli saham individual berarti menanggung risiko perusahaan tertentu; harga rendah tidak otomatis berarti murah.` },
    { title: "Obligasi dan Pendapatan Tetap", content: `# Obligasi\n\nObligasi adalah surat utang: penerbit meminjam dana dan berjanji membayar sesuai ketentuan. Risiko meliputi gagal bayar, perubahan suku bunga, inflasi, dan likuiditas.\n\nHarga obligasi yang diperdagangkan dapat berubah sebelum jatuh tempo. Baca penerbit, kupon, jatuh tempo, peringkat beserta keterbatasannya, dan biaya transaksi.` },
    { title: "Reksa Dana dan Diversifikasi", content: `# Reksa Dana\n\nReksa dana mengumpulkan dana investor untuk dikelola sesuai kebijakan produk. Diversifikasi dapat menyebar eksposur, tetapi tidak menghapus risiko pasar atau menjamin keuntungan.\n\nPeriksa prospektus, biaya, aset dasar, likuiditas, dan kesesuaian tujuan. Nama produk atau kinerja masa lalu tidak menggantikan pemahaman risiko.` },
    { title: "Emas dan Aset Komoditas", content: `# Emas dan Komoditas\n\nKomoditas memiliki harga yang dipengaruhi pasokan, permintaan, kurs, dan faktor global. Emas tidak menghasilkan arus kas seperti kupon atau dividen; return bergantung pada harga jual setelah biaya.\n\nPertimbangkan spread jual-beli, penyimpanan, keaslian, pajak, dan horizon. Sifat “safe haven” tidak berarti nilainya tidak pernah turun.` },
    { title: "Aset Kripto dan Volatilitas", content: `# Aset Kripto\n\nAset kripto dapat mengalami perubahan harga ekstrem, risiko teknologi, tata kelola, kustodian, regulasi, dan penipuan. Mekanisme blockchain tidak menghilangkan risiko kehilangan kunci atau kesalahan transaksi.\n\nJangan menaruh dana kebutuhan pokok pada aset berisiko tinggi. Verifikasi layanan dan pahami bahwa transaksi dapat sulit dibatalkan. Tidak ada return yang pasti.` },
    { title: "Alokasi Aset dan Toleransi Risiko", content: `# Alokasi Aset\n\nAlokasi aset membagi portofolio ke kelas aset sesuai tujuan, horizon, kebutuhan likuiditas, dan kemampuan menerima penurunan. Toleransi psikologis berbeda dari kemampuan finansial menanggung rugi.\n\nDiversifikasi lintas aset dan waktu dapat mengurangi sebagian risiko, bukan menghapusnya. Tinjau perubahan tujuan dan biaya rebalancing sebelum mengubah portofolio.` },
    { title: "Biaya, Pajak, Likuiditas, dan Evaluasi", content: `# Mengevaluasi Portofolio\n\nReturn bersih memperhitungkan biaya transaksi, biaya pengelolaan, pajak, dan inflasi yang relevan. Bandingkan periode dan risiko yang sejenis; angka tanpa konteks dapat menyesatkan.\n\nTetapkan jadwal tinjauan agar tidak bereaksi berlebihan pada gejolak harian. Catat alasan keputusan, asumsi, dan perubahan tujuan. Untuk pajak atau produk kompleks, periksa aturan resmi dan minta nasihat berizin.` },
  ]),
  chapter(8, "Psikologi Uang dan Pengambilan Keputusan", "Mengenali bias, mengelola emosi, dan menilai klaim finansial dengan lebih baik.", [
    { title: "Perilaku Manusia dan Uang", content: `# Psikologi Uang\n\nKeputusan uang dipengaruhi pengalaman, kebiasaan, emosi, keluarga, dan konteks sosial. Dua orang dengan pendapatan sama dapat memiliki rasa aman dan prioritas berbeda.\n\nCatat pemicu belanja dan tujuan personal tanpa menghakimi. Pemahaman pola membantu merancang lingkungan: batas otomatis, jeda, dan rencana tertulis.` },
    { title: "Bias Kognitif dalam Keputusan Finansial", content: `# Bias Kognitif\n\nBias adalah pola penilaian yang dapat menyimpang secara sistematis. Anchoring membuat angka awal memengaruhi perkiraan; confirmation bias membuat kita mencari informasi yang mendukung keyakinan.\n\nPenangkalnya: cari bukti yang dapat membantah hipotesis, catat rentang kemungkinan, dan minta perspektif independen. Mengetahui nama bias saja tidak otomatis menghilangkannya.` },
    { title: "Loss Aversion dan FOMO", content: `# Loss Aversion dan FOMO\n\nKerugian sering terasa lebih berat daripada keuntungan setara. FOMO mendorong tindakan karena takut tertinggal, terutama saat harga atau cerita sukses ramai.\n\nGunakan aturan jeda dan keputusan yang ditulis sebelum tekanan muncul. Tidak membeli juga sebuah pilihan. Hindari mengukur keputusan hanya dari hasil yang kebetulan baik atau buruk.` },
    { title: "Sunk Cost dan Confirmation Bias", content: `# Menguji Keyakinan\n\nSunk cost mendorong kita bertahan karena investasi masa lalu; confirmation bias menyaring informasi yang menantang pilihan. Keduanya dapat mengunci keputusan yang tidak lagi sesuai.\n\nTanyakan: jika mulai dari nol hari ini, apakah pilihan ini masih layak? Apa bukti terkuat yang membuat saya berubah pikiran? Tinjau biaya dan manfaat yang masih dapat berubah.` },
    { title: "Pengaruh Kelompok dan Tekanan Sosial", content: `# Tekanan Sosial\n\nPerilaku kelompok dapat menormalkan risiko dan belanja yang tidak sesuai kemampuan. Testimoni teman juga bukan bukti bahwa hasil akan sama untuk orang lain.\n\nTetapkan batas pribadi sebelum berdiskusi, hindari berbagi data keuangan sensitif, dan ambil waktu untuk memeriksa fakta. Keputusan yang baik tidak harus populer.` },
    { title: "Belanja Impulsif dan Gratifikasi Tertunda", content: `# Belanja Impulsif\n\nDiskon berbatas waktu, kemudahan satu klik, dan emosi dapat memperpendek proses berpikir. Jeda 24 jam, daftar belanja, dan menghapus metode pembayaran tersimpan dapat menambah friksi yang membantu.\n\nGratifikasi tertunda bukan berarti menolak semua kesenangan; ia menyeimbangkan kepuasan kini dan tujuan mendatang. Pilih aturan yang realistis agar dapat dipertahankan.` },
    { title: "Mengevaluasi Informasi dan Klaim Finansial", content: `# Memeriksa Klaim\n\nPeriksa siapa sumbernya, apa insentifnya, data apa yang disajikan, periode, pembanding, biaya, serta risiko yang dihilangkan. Klaim korelasi tidak membuktikan sebab-akibat.\n\nCari sumber primer atau regulator, periksa tanggal, dan verifikasi di kanal terpisah. Screenshot, grafik tanpa skala, dan testimoni bukan pengganti bukti yang dapat diuji.` },
    { title: "Penipuan dan Janji Keuntungan Tidak Realistis", content: `# Janji Keuntungan\n\nTidak ada investasi sah yang dapat menjamin return tinggi tanpa risiko. Tekanan transfer cepat, rahasia “orang dalam”, dan permintaan kode akses adalah sinyal bahaya.\n\nJangan mengirim uang untuk membuka “pencairan” tanpa verifikasi; jangan membagikan OTP atau seed phrase. Hentikan kontak, simpan bukti, dan gunakan jalur pelaporan resmi.` },
    { title: "Rencana Keuangan Jangka Panjang", content: `# Rencana Jangka Panjang\n\nRencana menghubungkan tujuan dengan tindakan, tenggat, risiko, dan peninjauan. Pecah tujuan besar menjadi langkah rutin yang bisa diukur, tetapi revisi asumsi saat keadaan berubah.\n\nTuliskan rencana dasar dan skenario buruk. Jangan memakai proyeksi imbal hasil sebagai kepastian. Utamakan keputusan yang dapat dipahami dan sesuai kapasitas risiko.` },
    { title: "Studi Kasus Pengambilan Keputusan", content: `# Studi Kasus Hipotetis\n\nSebuah grup menawarkan aset yang katanya “pasti naik minggu ini”. Anggota memposting tangkapan layar keuntungan. Sebelum bertindak, peserta mengidentifikasi klaim yang belum diverifikasi, konflik insentif, risiko kehilangan modal, dan tekanan sosial.\n\nLangkah aman: tidak terburu-buru transfer, cek legalitas melalui sumber resmi, cari bukti yang menyangkal, dan jangan gunakan dana penting. Jelaskan alasan keputusanmu meski kelompok memilih sebaliknya.` },
  ]),
];
