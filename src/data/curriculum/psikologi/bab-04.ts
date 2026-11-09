import type { CurriculumModule } from "@/lib/types";

export const BAB_04: CurriculumModule = {
  id: "psi2-b04",
  title: "Bab 4 — Learning, Motivation & Habit Formation",
  summary: "Bab ini menjelaskan pembelajaran melalui asosiasi, konsekuensi, tujuan, dan lingkungan. Kamu akan menyusun kebiasaan yang dapat diamati serta mengevaluasi strategi motivasi dengan memperhatikan konteks dan batas bukti.",
  lessons: [
    {
      id: "psi2-b04-s1",
      title: "Classical dan Operant Conditioning",
      minutes: 35,
      content: `# Classical dan Operant Conditioning

## Tujuan belajar

Setelah bagian ini, kamu dapat membedakan pengondisian klasik dan operan, menjelaskan akuisisi serta ekstingsi secara pengantar, dan mengidentifikasi contoh asosiasi stimulus maupun konsekuensi perilaku.

Belajar adalah perubahan pengetahuan atau perilaku yang berkaitan dengan pengalaman. Dua kerangka yang sering digunakan untuk memahami pembelajaran asosiatif adalah pengondisian klasik (classical conditioning) dan pengondisian operan (operant conditioning). Keduanya menelaah hubungan, tetapi pertanyaan utamanya berbeda. Pengondisian klasik mempelajari bagaimana stimulus yang awalnya netral dapat berasosiasi dengan stimulus lain dan akhirnya memicu respons. Pengondisian operan memeriksa bagaimana konsekuensi setelah suatu tindakan berkaitan dengan kemungkinan tindakan itu muncul lagi.

Dalam contoh klasik, bunyi notifikasi pada awalnya hanya suara. Jika bunyi itu berulang kali muncul bersamaan dengan kabar yang menarik atau penting, seseorang mungkin mulai merasa penasaran atau tegang ketika mendengarnya, bahkan sebelum membuka aplikasi. Bunyi tersebut menjadi isyarat yang dipelajari melalui asosiasi. Respons tidak harus sama pada semua orang; sejarah pengalaman dan konteks berbeda. Contoh ini menjelaskan hubungan yang mungkin, bukan menyatakan semua notifikasi memicu emosi tertentu.

Akuisisi (acquisition) adalah proses terbentuknya asosiasi atau respons yang dipelajari melalui pengalaman berulang. Dalam model sederhana, nilai asosiasi V bergerak menuju batas tertentu dengan aturan ΔV=0,2(1−V), dimulai dari V₀=0. Hasilnya V₁=0,200; V₂=0,360; V₃=0,488; V₅=0,672; dan V₁₀=0,893. Angka ini hanya keluaran rumus ilustratif. Pengalaman nyata tidak harus bertambah dengan laju tetap atau menuju angka tertentu.

[[visual:psi-conditioning]]

Ekstingsi (extinction) terjadi ketika hubungan atau respons yang dipelajari melemah karena kondisi penguat atau pasangan stimulus yang relevan tidak lagi hadir seperti sebelumnya. Dalam ilustrasi, jika V₀=0,672 dan λ=0, tiap percobaan ekstingsi mengalikan nilai dengan 0,8. Setelah tiga percobaan, V=0,672×0,8³=0,344. Ini tidak berarti ingatan awal terhapus; respons dapat muncul lagi dalam konteks berbeda. Kata ekstingsi di sini merujuk pada perubahan respons teramati dalam model, bukan penghapusan permanen seluruh pembelajaran.

Pengondisian operan berfokus pada hubungan tindakan dan konsekuensinya. Misalnya, seseorang membuka aplikasi belajar, menjawab satu pertanyaan, lalu menerima umpan balik langsung. Jika umpan balik membuat kegiatan terasa bernilai, kemungkinan mengulang tindakan dapat berubah. Penguatan (reinforcement) adalah konsekuensi yang meningkatkan kemungkinan perilaku; hukuman (punishment) adalah konsekuensi yang menurunkan kemungkinan perilaku. Istilah ini menggambarkan fungsi konsekuensi, bukan penilaian moral tentang orang atau tindakannya. Suatu hadiah tidak otomatis menjadi penguat jika perilaku tidak meningkat.

Akuisisi dan ekstingsi berlaku pada kerangka operan juga, tetapi detailnya bergantung pada perilaku dan konsekuensi. Jika sebuah aplikasi menampilkan lencana setelah beberapa sesi, pengguna dapat mengaitkan menyelesaikan sesi dengan lencana. Namun, perilaku juga mungkin dipengaruhi tujuan, rasa kompeten, dukungan teman, atau kemudahan aplikasi. Bila lencana berhenti diberikan, perilaku tidak selalu langsung hilang. Ada variasi dan faktor lain yang tidak tertangkap dalam contoh sederhana.

Perbedaan dua kerangka berguna saat menganalisis kebiasaan mengecek notifikasi. Bunyi yang berpasangan dengan pesan menarik dapat menjadi isyarat klasik yang memunculkan antisipasi. Tindakan membuka aplikasi yang sesekali menghasilkan kabar menyenangkan dapat dipertahankan oleh konsekuensi operan. Kedua proses dapat berinteraksi: isyarat mendorong tindakan, lalu hasil tindakan memengaruhi kebiasaan. Mengidentifikasi proses membantu merancang pertanyaan, tetapi tidak membuktikan mekanisme seseorang hanya dari satu observasi.

Hubungan dengan keputusan sehari-hari / investasi / Web3: bunyi notifikasi perdagangan dapat menjadi isyarat yang membuat seseorang mengantisipasi pergerakan harga, sedangkan sesekali menemukan peluang menarik setelah membuka aplikasi dapat memperkuat kebiasaan mengecek. Menonaktifkan sebagian isyarat atau menentukan waktu pemeriksaan adalah eksperimen perilaku yang mungkin dicoba, tetapi perlu dinilai berdasarkan tujuan dan dampaknya, bukan dianggap solusi universal.

> **Poin kunci:** Pengondisian klasik menekankan asosiasi antarstimulus; pengondisian operan menekankan hubungan perilaku dan konsekuensinya.

**Batas bukti:** Model akuisisi dan ekstingsi di visual mengikuti persamaan hipotetis, bukan kurva penelitian atau prediksi perilaku. Pembelajaran dipengaruhi konteks, riwayat pengalaman, dan perbedaan individu; contoh tidak memberi diagnosis atau terapi. Distres yang menetap atau mengganggu sebaiknya dibicarakan dengan tenaga profesional.

**Refleksi:**
1. Dalam kebiasaan yang kamu amati, apakah isyarat, konsekuensi, atau keduanya mungkin berperan?
2. Pengamatan tambahan apa yang diperlukan sebelum menyimpulkan hubungan belajar?`,
    },
    {
      id: "psi2-b04-s2",
      title: "Reinforcement, Punishment, dan Jadwal Penguatan",
      minutes: 35,
      content: `# Reinforcement, Punishment, dan Jadwal Penguatan

## Tujuan belajar

Kamu akan membedakan penguatan positif dan negatif dari hukuman positif dan negatif, menafsirkan jadwal rasio tetap maupun variabel, serta mempertimbangkan keterbatasan dan efek samping konsekuensi.

Dalam pengondisian operan, istilah positif dan negatif merujuk pada penambahan atau penghilangan suatu konsekuensi, bukan baik dan buruk. Penguatan berarti perilaku yang diikuti konsekuensi menjadi lebih mungkin muncul dalam kondisi sebanding; hukuman berarti perilaku menjadi kurang mungkin. Fungsi perlu dilihat dari perubahan perilaku, bukan hanya dari niat pemberi konsekuensi. Hal yang dianggap hadiah oleh satu orang belum tentu menguatkan perilaku orang lain.

Penguatan positif (positive reinforcement) menambahkan sesuatu setelah tindakan dan perilaku meningkat, misalnya pujian spesifik setelah siswa memulai tugas tepat waktu. Penguatan negatif (negative reinforcement) menghilangkan sesuatu yang tidak menyenangkan dan perilaku meningkat. Contohnya, bunyi pengingat berhenti ketika seseorang menyelesaikan langkah yang diminta; jika pemasangan sabuk atau tindakan tersebut makin konsisten, penghentian bunyi dapat berfungsi sebagai penguatan negatif. Ini bukan hukuman: hukuman menurunkan kemungkinan perilaku, sedangkan penguatan—positif maupun negatif—meningkatkannya.

Hukuman positif (positive punishment) menambahkan konsekuensi setelah tindakan dan perilaku menurun; hukuman negatif (negative punishment) menghilangkan sesuatu yang diinginkan setelah tindakan dan perilaku menurun. Misalnya, teguran yang menambahkan pengalaman tidak menyenangkan dapat berfungsi sebagai hukuman positif jika perilaku berkurang; membatasi akses pada suatu fasilitas dapat berfungsi sebagai hukuman negatif. Namun, satu contoh tidak memastikan efek atau keadilan konsekuensi. Hukuman dapat menekan perilaku sesaat tanpa mengajarkan tindakan alternatif, dan dapat menimbulkan penghindaran, konflik, atau dampak yang tidak diinginkan.

[[visual:psi-reinforcement]]

Konsekuensi perlu dirancang dengan mempertimbangkan keselamatan, kejelasan, proporsionalitas, dan konteks. Umpan balik yang spesifik dapat menunjukkan perilaku yang diharapkan, sementara konsekuensi yang tidak konsisten dapat membuat hubungan tindakan-hasil sulit dipahami. Dalam pendidikan atau pengasuhan, hindari mempermalukan atau mengancam; jelaskan aturan dan dukung keterampilan alternatif. Bila tujuan adalah meningkatkan kebiasaan belajar, mengajarkan cara memulai tugas dan memberi umpan balik pada usaha mungkin lebih informatif daripada hanya menghukum keterlambatan.

Jadwal penguatan menjelaskan pola pemberian konsekuensi. Jadwal rasio tetap memberikan penguatan setelah jumlah respons tertentu. Jika rasio 5, setiap lima respons menghasilkan satu penguatan; 100 respons menghasilkan 20 penguatan. Dengan rasio 10, 100 respons menghasilkan 10 penguatan. Jadwal rasio variabel memberi penguatan setelah jumlah respons yang berubah-ubah dengan rata-rata tertentu. Rata-rata rasio 5 juga menghasilkan sekitar 20 penguatan per 100 respons dalam perhitungan sederhana, tetapi waktu penguatan tidak dapat diprediksi. Rata-rata bukan janji penguatan terjadi merata atau tepat pada jumlah respons tertentu.

Jadwal variabel dapat membuat orang terus mencoba karena hasil berikutnya tidak diketahui, tetapi efek aktual bergantung jenis respons, konsekuensi, aturan, dan individu. Tidak tepat menyatakan setiap jadwal variabel selalu menghasilkan perilaku paling kuat. Aplikasi dapat memberi lencana, pesan, atau konten baru dengan pola yang tidak seragam; perilaku mengecek mungkin dipengaruhi pula rasa ingin tahu, hubungan sosial, atau tuntutan kerja. Memahami jadwal dapat membantu pengguna membuat batas, bukan memanipulasi orang lain.

Ketika menilai apakah konsekuensi memperkuat atau menghukum, amati pola sebelum dan sesudah dalam beberapa kesempatan yang relevan. Pertimbangkan apakah perilaku berubah karena konsekuensi, perubahan tugas, perhatian dari orang lain, atau keadaan lain. Jika suatu konsekuensi tidak menghasilkan perubahan yang dimaksud, sebutan “hadiah” atau “hukuman” berdasarkan niat saja tidak cukup. Pengamatan harus menjaga privasi dan tidak mengubah pembelajaran menjadi pelabelan karakter.

Hubungan dengan keputusan sehari-hari / investasi / Web3: aplikasi perdagangan yang menampilkan hasil atau notifikasi dengan waktu tak menentu dapat membuat pengguna memeriksa berulang. Kenali pola respons dan hasilnya, lalu pertimbangkan batas notifikasi atau jadwal pemeriksaan yang sesuai. Dalam belajar, pujian spesifik atas langkah yang bisa dikendalikan berbeda dari hadiah besar yang tidak berkaitan dengan proses.

> **Poin kunci:** Positif berarti menambahkan, negatif berarti menghilangkan; penguatan meningkatkan kemungkinan perilaku, sedangkan hukuman menurunkannya.

**Batas bukti:** Kategori konsekuensi ditentukan oleh perubahan perilaku dalam konteks, bukan niat semata. Efek hukuman dan hadiah bergantung konteks, dan dapat memiliki efek samping; visual jadwal rasio adalah ilustrasi aritmetika. Distres yang menetap atau mengganggu sebaiknya dibicarakan dengan tenaga profesional.

**Refleksi:**
1. Konsekuensi apa yang benar-benar berubah setelah suatu tindakan, dan bagaimana perilaku berikutnya diamati?
2. Perilaku alternatif apa yang sebaiknya diajarkan selain mengurangi perilaku yang tidak diinginkan?`,
    },
    {
      id: "psi2-b04-s3",
      title: "Motivasi Intrinsik dan Ekstrinsik",
      minutes: 35,
      content: `# Motivasi Intrinsik dan Ekstrinsik

## Tujuan belajar

Kamu akan membedakan motivasi intrinsik dan ekstrinsik, mengenali otonomi, kompetensi, dan keterkaitan sebagai kebutuhan dalam teori determinasi diri, serta menilai hadiah eksternal secara kontekstual.

Motivasi adalah proses yang berkaitan dengan arah, usaha, dan ketekunan tindakan. Motivasi intrinsik (intrinsic motivation) berarti melakukan kegiatan karena kegiatan itu sendiri menarik atau memuaskan. Seseorang mungkin membaca tentang astronomi karena ingin memahami langit. Motivasi ekstrinsik (extrinsic motivation) berarti melakukan kegiatan untuk memperoleh hasil terpisah atau memenuhi tuntutan, seperti menyelesaikan latihan untuk memperoleh nilai. Dalam kehidupan nyata, keduanya dapat hadir bersama; seseorang bisa menikmati pelajaran sekaligus ingin lulus ujian.

Teori determinasi diri (self-determination theory) merupakan salah satu kerangka untuk memahami kualitas motivasi. Secara pengantar, teori ini membahas otonomi, kompetensi, dan keterkaitan. Otonomi adalah pengalaman memiliki pilihan atau memahami alasan tindakan, bukan berarti melakukan semuanya sendirian. Kompetensi berkaitan dengan merasa mampu menghadapi tantangan yang sesuai dan melihat kemajuan. Keterkaitan merujuk pada rasa terhubung dan didukung oleh orang lain. Kebutuhan ini membantu mengajukan pertanyaan tentang lingkungan yang mendukung, tetapi tidak menjelaskan setiap perilaku atau membuat semua orang menginginkan pilihan yang sama.

Misalnya, seorang pelajar ingin rutin berlatih bahasa. Otonomi dapat didukung dengan memilih topik yang menarik; kompetensi dengan tugas bertahap dan umpan balik yang jelas; keterkaitan dengan teman untuk berlatih. Jika latihan terlalu mudah, kompetensi mungkin tidak terasa berkembang. Jika terlalu sulit tanpa dukungan, siswa dapat merasa buntu. Jika jadwal sepenuhnya dipaksakan tanpa alasan yang dipahami, otonomi dapat berkurang. Ini kemungkinan yang perlu diperiksa, bukan kepastian bahwa satu perubahan akan membuat semua orang lebih termotivasi.

[[visual:psi-motivation-needs]]

Hadiah eksternal dapat membantu mengawali atau mempertahankan perilaku tertentu, terutama bila tugas kurang menarik atau hasilnya bermakna. Namun, ada kemungkinan overjustification: hadiah yang sangat menonjol dapat mengubah cara seseorang memaknai kegiatan yang sebelumnya dilakukan karena minat. Risiko tersebut bergantung pada konteks, jenis hadiah, cara pemberian, dan apakah hadiah terasa mengendalikan atau memberi informasi. Tidak tepat menyimpulkan bahwa semua hadiah merusak motivasi intrinsik. Umpan balik yang mengakui kemajuan atau menyediakan pilihan dapat berbeda dari hadiah yang dipakai sebagai tekanan.

Motivasi juga berubah karena tujuan dan situasi. Seseorang dapat belajar karena rasa ingin tahu, kewajiban, harapan keluarga, atau kebutuhan pekerjaan pada waktu yang sama. Pertanyaan yang bermanfaat bukan hanya “seberapa termotivasi?”, tetapi “apa alasan saya melakukan ini, seberapa banyak pilihan yang saya miliki, apakah tantangannya dapat dikelola, dan siapa yang mendukung?” Jawaban dapat membantu memperbaiki desain tugas atau meminta dukungan, tanpa memberi label malas atau rajin sebagai sifat tetap.

Pengukuran motivasi perlu hati-hati. Lama duduk tidak selalu menandakan keterlibatan; seseorang dapat bekerja lama karena tugas tidak jelas. Jumlah latihan juga tidak mengungkap apakah seseorang memahami atau merasa terpaksa. Laporan diri memberi akses pada pengalaman, tetapi bisa berubah dan memiliki keterbatasan. Gabungkan indikator yang relevan dengan tujuan, misalnya kemajuan tugas, kualitas hasil, pilihan yang dibuat, dan refleksi singkat, tanpa menganggap skor tunggal sebagai seluruh motivasi.

Saran praktis sebaiknya menghindari janji “temukan passion dan semua akan mudah.” Kegiatan yang bermakna tetap dapat menuntut usaha, dan rasa tertarik dapat berkembang setelah seseorang menjadi lebih kompeten. Pecah tugas menjadi langkah yang dapat dimulai, sediakan pilihan yang nyata, dan cari dukungan bila diperlukan. Jika hadiah digunakan, jelaskan kriterianya dan pastikan tidak menggantikan kebutuhan akan umpan balik yang membantu.

Hubungan dengan keputusan sehari-hari / investasi / Web3: seseorang mungkin mempelajari keamanan dompet karena tertarik teknologi, ingin melindungi aset, atau mengikuti tuntutan pekerjaan. Pilih materi yang relevan, tantangan yang bertahap, dan komunitas yang mendukung pertanyaan. Hadiah token atau lencana dapat menarik perhatian, tetapi tidak membuktikan pemahaman risiko atau menjamin kebiasaan aman.

> **Poin kunci:** Otonomi, kompetensi, dan keterkaitan adalah lensa untuk memahami dukungan motivasi; hadiah eksternal dapat membantu atau mengubah makna kegiatan bergantung konteks.

**Batas bukti:** Teori determinasi diri adalah salah satu kerangka, bukan penjelasan lengkap motivasi. Efek hadiah bersifat kontekstual dan tidak selalu sama; contoh visual merupakan model ilustratif, bukan penilaian psikologis. Distres yang menetap atau mengganggu sebaiknya dibicarakan dengan tenaga profesional.

**Refleksi:**
1. Dalam satu tujuanmu, alasan intrinsik dan ekstrinsik apa yang hadir bersamaan?
2. Dukungan apa yang paling kurang: pilihan, tantangan sesuai kemampuan, atau keterhubungan?`,
    },
    {
      id: "psi2-b04-s4",
      title: "Goal Setting, Feedback, dan Self-efficacy",
      minutes: 35,
      content: `# Goal Setting, Feedback, dan Self-efficacy

## Tujuan belajar

Kamu akan menyusun tujuan yang spesifik dan dapat ditinjau, menggunakan umpan balik untuk menyesuaikan rencana, menjelaskan self-efficacy, serta membuat implementation intention.

Tujuan membantu mengarahkan usaha, tetapi tujuan yang terlalu umum sulit diterjemahkan menjadi tindakan. “Saya akan lebih rajin membaca” belum menyebut apa yang dilakukan atau kapan. Tujuan spesifik dapat berbunyi “Saya membaca sepuluh halaman setelah makan malam pada hari kerja.” Spesifik bukan berarti kaku: rencana perlu disesuaikan jika keadaan berubah. Tujuan juga perlu realistis terhadap waktu, energi, akses bahan, serta prioritas lain.

Goal pace menghubungkan target, waktu, dan kemajuan. Misalkan target 300 halaman dalam 30 hari, sehingga laju rencana 10 halaman per hari. Setelah 12 hari, seseorang baru membaca 96 halaman, yaitu 8 per hari. Sisa 204 halaman harus diselesaikan dalam 18 hari, sehingga laju yang dibutuhkan adalah 204/18=11,33 halaman per hari. Angka ini menunjukkan kebutuhan berdasarkan asumsi bahwa waktu tersisa tetap 18 hari; ia bukan perintah bahwa seseorang harus memaksakan laju tersebut. Rencana dapat dinegosiasi ulang dengan mengubah target, jadwal, atau dukungan.

[[visual:psi-goal-pace]]

Umpan balik (feedback) memberi informasi tentang jarak antara kondisi sekarang dan tujuan. Umpan balik yang berguna cukup cepat untuk memengaruhi langkah berikutnya, spesifik pada tindakan atau hasil, dan dapat ditindaklanjuti. “Kamu buruk dalam membaca” menyerang identitas dan tidak memberi langkah jelas. “Hari ini 8 halaman selesai; untuk bagian berikut, catat istilah yang belum dipahami” lebih terarah. Kecepatan yang dibutuhkan bergantung tugas: latihan keterampilan mungkin memerlukan umpan balik segera, sedangkan pekerjaan kreatif dapat memerlukan ruang sebelum evaluasi.

Self-efficacy adalah keyakinan seseorang bahwa ia dapat melakukan tindakan tertentu dalam situasi tertentu. Ini berbeda dari harga diri umum atau kemampuan objektif. Siswa mungkin yakin mampu menulis ringkasan satu paragraf tetapi belum yakin menyelesaikan laporan panjang. Pengalaman keberhasilan bertahap, model contoh, umpan balik, dan dukungan dapat berkaitan dengan keyakinan; keyakinan saja tidak menjamin hasil. Jika keyakinan rendah, pecah tugas dan kumpulkan bukti kemajuan. Jika keyakinan tinggi, tetap periksa standar dan hasil agar tidak mengabaikan persiapan.

Implementation intention atau niat implementasi menghubungkan situasi dengan tindakan: “Jika selesai makan malam, maka saya membaca sepuluh halaman di meja.” Format jika–maka mengurangi kebutuhan memutuskan ulang kapan memulai. Rencana perlu mencakup hambatan umum: “Jika meja dipakai, saya pindah ke kursi dekat jendela.” Pilih pemicu yang benar-benar terjadi dan tindakan yang berada dalam kendali. Rencana tidak menggantikan sumber daya yang kurang atau kendala kesehatan dan tanggung jawab.

Kemajuan perlu dinilai dengan indikator yang sesuai. Jumlah halaman memberi informasi tentang kuantitas, tetapi belum tentu pemahaman. Tambahkan pemeriksaan, misalnya menuliskan gagasan utama dari ingatan atau menjawab pertanyaan. Evaluasi berkala membantu membedakan apakah target tidak realistis, strategi belajar kurang sesuai, atau jadwal terganggu. Perubahan rencana bukan kegagalan moral; itu penggunaan informasi baru untuk memilih langkah berikut.

Tujuan yang terlalu banyak dapat saling bersaing. Menentukan satu prioritas untuk periode tertentu dan menetapkan batas yang jelas dapat membuat usaha lebih terarah. Namun, seseorang tidak harus mengukur setiap aspek hidup. Catatan sederhana yang membantu keputusan lebih berguna daripada sistem pencatatan yang menghabiskan waktu. Rencana sebaiknya mendukung kehidupan, bukan menjadikan skor harian sebagai ukuran nilai diri.

Hubungan dengan keputusan sehari-hari / investasi / Web3: tujuan belajar keamanan aset dapat dibuat konkret, misalnya memeriksa langkah pencadangan dan pemulihan pada akun uji sebelum menyimpan nilai besar. Umpan balik berupa daftar langkah yang berhasil diverifikasi lebih berguna daripada sekadar merasa percaya diri. Rencana tidak boleh mendorong tindakan berisiko tanpa memahami prosedur dan batasnya.

> **Poin kunci:** Tujuan spesifik, umpan balik yang dapat ditindaklanjuti, self-efficacy, dan rencana jika–maka membantu mengubah niat menjadi tindakan yang dapat dievaluasi.

**Batas bukti:** Perhitungan laju adalah aritmetika berdasarkan target dan waktu yang diasumsikan, bukan jaminan pencapaian. Self-efficacy tidak sama dengan kemampuan dan tidak memastikan hasil. Distres yang menetap atau mengganggu sebaiknya dibicarakan dengan tenaga profesional.

**Refleksi:**
1. Apa satu tujuan yang dapat kamu nyatakan sebagai tindakan, waktu, dan indikator kemajuan?
2. Umpan balik apa yang akan membantumu mengubah langkah berikutnya tanpa menyalahkan diri?`,
    },
    {
      id: "psi2-b04-s5",
      title: "Habit Loop, Friction, dan Lingkungan",
      minutes: 35,
      content: `# Habit Loop, Friction, dan Lingkungan

## Tujuan belajar

Kamu akan menggunakan peta pemicu–tindakan–konsekuensi, menjelaskan friction sebagai usaha atau hambatan untuk memulai, dan merancang perubahan lingkungan yang realistis untuk kebiasaan belajar.

Kebiasaan adalah pola tindakan yang dapat muncul berulang dalam konteks tertentu. Model habit loop sering menggambarkan pemicu, tindakan, dan konsekuensi. Pemicu memberi isyarat untuk bertindak; tindakan adalah perilaku yang dilakukan; konsekuensi adalah hasil yang mengikuti dan dapat memengaruhi apakah pola berulang. Model ini menyederhanakan proses yang lebih luas: tujuan, emosi, kemampuan, norma, dan keadaan lingkungan juga dapat memengaruhi perilaku. Tidak semua tindakan berulang sepenuhnya otomatis.

Misalnya, seorang siswa mendapat notifikasi saat belajar, membuka media sosial, lalu melihat pesan baru dan merasa terhubung dengan teman. Notifikasi dapat menjadi pemicu, membuka aplikasi adalah tindakan, dan pesan baru menjadi konsekuensi yang menarik. Jika ini terjadi berkali-kali, siswa mungkin makin cepat membuka aplikasi saat bunyi muncul. Namun ada hipotesis lain: ia mungkin sedang menunggu pesan penting, tugasnya tidak jelas, atau membutuhkan jeda. Mengamati urutan beberapa kali dapat membantu membedakan kemungkinan tersebut.

Friction atau gesekan adalah usaha, hambatan, atau langkah yang diperlukan sebelum tindakan. Kita dapat mengurangi gesekan untuk perilaku yang ingin dilakukan dan menaikkannya untuk godaan yang ingin dikendalikan. Contohnya, meletakkan buku terbuka di meja menurunkan langkah untuk mulai belajar; menaruh ponsel di ruangan lain menambah langkah sebelum membuka media sosial. Friction bukan hanya kemauan pribadi: akses perangkat, ruang tinggal, koneksi, tanggung jawab, dan kebutuhan sosial ikut membentuk pilihan.

[[visual:psi-habit-friction]]

Model ilustratif kemungkinan selesai = batas(60 + 5×(F_godaan − F_tujuan), 0, 100). Jika friction tujuan 2 dan godaan 6, hasilnya 80; jika friction tujuan 6 dan godaan 2, hasilnya 40; jika keduanya 3, hasilnya 60. Angka menunjukkan keluaran rumus, bukan probabilitas terukur untuk seseorang. Jika kebiasaan terlaksana 14 dari 20 sesi, frekuensi yang diamati adalah 14/20=70%. Itu deskripsi catatan sesi, bukan jaminan sesi berikutnya.

Perubahan lingkungan dapat dibuat kecil dan spesifik. Siapkan buku dan alat tulis sebelum sesi; matikan notifikasi yang tidak penting; gunakan pemblokir aplikasi bila cocok; tetapkan jeda terencana; atau minta teman membantu menjaga waktu. Uji satu perubahan dalam periode yang jelas, lalu lihat apakah tindakan lebih mudah dilakukan dan apakah ada dampak samping. Memindahkan ponsel mungkin tidak sesuai bila seseorang perlu dihubungi untuk tanggung jawab keluarga atau pekerjaan.

Konsekuensi juga perlu dipertimbangkan. Menandai sesi selesai atau menikmati istirahat dapat memberi penutup yang memuaskan, tetapi jangan membuat penghargaan begitu berat sehingga perilaku hanya dilakukan saat imbalan tersedia. Jika konsekuensi yang diharapkan tidak muncul, tanyakan apakah tindakan terlalu sulit, pemicu tidak konsisten, atau manfaat jangka pendek terlalu kecil. Kebiasaan baru dapat membutuhkan penyesuaian, dan tidak ada jumlah hari tetap yang menjamin terbentuknya kebiasaan untuk semua orang.

Rencana jika–maka membantu menghubungkan pemicu dan tindakan: “Jika saya duduk di meja setelah sarapan, saya membuka dokumen dan menjawab satu soal.” Siapkan alternatif jika pemicu tidak hadir: “Jika meja tidak tersedia, saya gunakan catatan di perpustakaan.” Langkah awal kecil dapat mengurangi hambatan. Catat keberhasilan dan hambatan tanpa menilai diri secara moral. Jika rencana tidak berjalan, data itu membantu memperbaiki desain lingkungan.

Kasus media sosial dapat ditangani dengan mengubah kedua sisi: turunkan friction belajar dengan bahan siap dan langkah awal jelas; naikkan friction godaan dengan mematikan pratinjau atau menjauhkan aplikasi dari layar utama. Ukur perilaku yang relevan, seperti sesi yang dimulai atau jumlah gangguan, dan pertimbangkan apakah hasil belajar juga membaik. Perubahan satu variabel tidak membuktikan penyebab tunggal, karena beban tugas dan kondisi lain mungkin berubah.

Hubungan dengan keputusan sehari-hari / investasi / Web3: jika kebiasaan mengecek harga mengganggu pekerjaan, matikan notifikasi yang tidak esensial dan tetapkan jendela pemeriksaan; untuk belajar, siapkan materi serta jauhkan aplikasi godaan bila aman. Sebaliknya, tambahkan langkah verifikasi sebelum transaksi agar keputusan tidak terjadi karena satu klik refleks. Pilih pengaturan yang tetap memungkinkan akses saat benar-benar diperlukan.

> **Poin kunci:** Pemicu–tindakan–konsekuensi membantu memetakan pola; friction dan desain lingkungan dapat memudahkan atau menyulitkan tindakan tanpa menjamin hasil.

**Batas bukti:** Habit loop dan rumus friction adalah model pengajaran sederhana, bukan hukum pembentukan kebiasaan atau probabilitas penelitian. Pengaruh lingkungan bergantung akses, tujuan, dan konteks; tidak ada jangka hari universal untuk membentuk kebiasaan. Distres yang menetap atau mengganggu sebaiknya dibicarakan dengan tenaga profesional.

**Refleksi:**
1. Pemicu apa yang biasanya mendahului kebiasaan yang ingin kamu ubah?
2. Perubahan lingkungan kecil apa yang dapat diuji tanpa mengganggu kebutuhan penting lainnya?`,
    },
  ],
  chapterResources: {
    summary: [
      "Pengondisian klasik menelaah asosiasi ant stimulus, sedangkan pengondisian operan menelaah hubungan perilaku dan konsekuensi.",
      "Akuisisi dan ekstingsi menggambarkan perubahan asosiasi atau respons, tetapi tidak menyatakan ingatan terhapus permanen.",
      "Penguatan meningkatkan kemungkinan perilaku; hukuman menurunkannya, sementara positif dan negatif merujuk pada penambahan atau penghilangan.",
      "Jadwal rasio tetap memiliki jumlah respons tertentu; jadwal variabel memiliki rata-rata namun waktu penguatan tidak dapat diprediksi.",
      "Otonomi, kompetensi, dan keterkaitan adalah lensa untuk memahami dukungan motivasi dalam teori determinasi diri.",
      "Tujuan spesifik, umpan balik, self-efficacy, dan implementation intention membantu merencanakan serta meninjau tindakan.",
      "Pemicu–tindakan–konsekuensi dan friction membantu menganalisis kebiasaan serta pilihan desain lingkungan.",
      "Hadiah, hukuman, dan perubahan lingkungan memiliki efek kontekstual serta dapat membawa konsekuensi yang tidak diinginkan.",
    ],
    glossary: [
      { term: "Pengondisian klasik", english: "Classical conditioning", definition: "Pembelajaran asosiasi antara stimulus yang dapat memunculkan respons." },
      { term: "Pengondisian operan", english: "Operant conditioning", definition: "Pembelajaran tentang hubungan tindakan dan konsekuensi yang mengikutinya." },
      { term: "Stimulus netral", english: "Neutral stimulus", definition: "Stimulus yang pada awalnya belum memunculkan respons terkondisi yang sedang dipelajari." },
      { term: "Stimulus terkondisi", english: "Conditioned stimulus", definition: "Stimulus yang setelah berasosiasi dapat memunculkan respons yang dipelajari." },
      { term: "Akuisisi", english: "Acquisition", definition: "Proses terbentuk atau menguatnya asosiasi maupun respons melalui pengalaman." },
      { term: "Ekstingsi", english: "Extinction", definition: "Melemahnya respons terpelajar ketika kondisi penguatan atau pasangan stimulus berubah." },
      { term: "Penguatan positif", english: "Positive reinforcement", definition: "Penambahan konsekuensi yang diikuti meningkatnya kemungkinan perilaku." },
      { term: "Penguatan negatif", english: "Negative reinforcement", definition: "Penghilangan konsekuensi aversif yang diikuti meningkatnya kemungkinan perilaku." },
      { term: "Hukuman", english: "Punishment", definition: "Konsekuensi yang diikuti penurunan kemungkinan perilaku dalam konteks tertentu." },
      { term: "Jadwal rasio tetap", english: "Fixed-ratio schedule", definition: "Pemberian penguatan setelah jumlah respons tertentu." },
      { term: "Jadwal rasio variabel", english: "Variable-ratio schedule", definition: "Pemberian penguatan setelah jumlah respons berubah-ubah di sekitar rasio rata-rata." },
      { term: "Motivasi intrinsik", english: "Intrinsic motivation", definition: "Dorongan melakukan kegiatan karena kegiatan itu sendiri menarik atau memuaskan." },
      { term: "Motivasi ekstrinsik", english: "Extrinsic motivation", definition: "Dorongan melakukan kegiatan untuk hasil terpisah atau tuntutan tertentu." },
      { term: "Otonomi", english: "Autonomy", definition: "Pengalaman memiliki pilihan atau memahami alasan tindakan." },
      { term: "Kompetensi", english: "Competence", definition: "Pengalaman mampu menghadapi tantangan dan melihat kemajuan." },
      { term: "Keterkaitan", english: "Relatedness", definition: "Pengalaman terhubung dan didukung dalam relasi sosial." },
      { term: "Self-efficacy", english: "Self-efficacy", definition: "Keyakinan mampu melakukan tindakan tertentu dalam situasi tertentu." },
      { term: "Niat implementasi", english: "Implementation intention", definition: "Rencana jika–maka yang menghubungkan situasi dengan tindakan." },
      { term: "Kebiasaan", english: "Habit", definition: "Pola tindakan yang dapat berulang dalam konteks tertentu." },
      { term: "Gesekan", english: "Friction", definition: "Usaha atau hambatan yang diperlukan untuk memulai atau menyelesaikan tindakan." },
      { term: "Pemicu", english: "Cue", definition: "Isyarat yang mendahului tindakan dan dapat memulai suatu pola." },
      { term: "Konsekuensi", english: "Consequence", definition: "Hasil yang mengikuti perilaku dan dapat memengaruhi kemungkinan perilaku berikutnya." },
      { term: "Overjustification", english: "Overjustification", definition: "Kemungkinan perubahan makna atau minat intrinsik ketika imbalan eksternal menjadi sangat menonjol." },
      { term: "Umpan balik", english: "Feedback", definition: "Informasi tentang hasil atau jarak menuju tujuan yang dapat membantu langkah berikut." },
    ],
    exercises: [
      {
        prompt: "Gunakan model akuisisi ΔV=0,2(1−V), V₀=0. Hitung V₁, V₂, V₃, V₅, V₁₀ sesuai nilai ilustrasi. Jika ekstingsi dimulai pada V₀=0,672 dengan λ=0, hitung V setelah tiga percobaan memakai faktor 0,8.",
        solution: "1. Terapkan V berikut = V + 0,2(1−V). 2. Nilai berturut-turut: V₁=0,200; V₂=0,360; V₃=0,488; V₅=0,672; V₁₀=0,893. 3. Ekstingsi: V=0,672×0,8³=0,344064, dibulatkan 0,344. Semua nilai mengikuti model ilustratif.",
      },
      {
        prompt: "Hitung jumlah penguatan dari 100 respons dengan jadwal rasio tetap 5 dan rasio tetap 10. Berapa rata-rata penguatan dalam 100 respons jika jadwal rasio variabel memiliki rata-rata 5, dan apa yang tidak dapat diprediksi?",
        solution: "1. Rasio tetap 5: 100÷5=20 penguatan. 2. Rasio tetap 10: 100÷10=10 penguatan. 3. Rasio variabel rata-rata 5: rata-rata 100÷5=20 penguatan per 100 respons. 4. Waktu atau jumlah respons tepat sebelum penguatan variabel tidak dapat diprediksi dari rata-ratanya.",
      },
      {
        prompt: "Target membaca 300 halaman dalam 30 hari. Setelah 12 hari, seseorang menyelesaikan 96 halaman. Hitung laju rencana, laju aktual, dan laju yang dibutuhkan untuk sisa target dalam 18 hari.",
        solution: "1. Laju rencana=300÷30=10 halaman/hari. 2. Laju aktual=96÷12=8 halaman/hari. 3. Sisa=300−96=204 halaman; waktu=30−12=18 hari. 4. Laju dibutuhkan=204÷18=11,33 halaman/hari. 5. Ini perhitungan berdasarkan target awal; orang dapat menyesuaikan target atau jadwal secara realistis.",
      },
      {
        prompt: "Gunakan model kemungkinan selesai = batas(60+5×(F_godaan−F_tujuan),0,100). Hitung untuk (F_tujuan=2,F_godaan=6), (6,2), dan (3,3). Lalu hitung persentase jika kebiasaan terlaksana 14 dari 20 sesi serta rata-rata kebutuhan motivasi otonomi 6, kompetensi 8, keterkaitan 4.",
        solution: "1. (2,6): 60+5×(6−2)=80. 2. (6,2): 60+5×(2−6)=40. 3. (3,3): 60. 4. Sesi terlaksana=14÷20×100=70%. 5. Rata-rata kebutuhan=(6+8+4)÷3=6,0; kebutuhan terendah adalah keterkaitan (4). Rumus dan skor adalah ilustrasi, bukan probabilitas atau diagnosis.",
      },
    ],
    furtherReading: [
      { title: "Learning and Behavior", authors: "Paul Chance" },
      { title: "Self-Determination Theory", authors: "Richard M. Ryan dan Edward L. Deci" },
      { title: "Don't Shoot the Dog", authors: "Karen Pryor" },
      { title: "Atomic Habits", authors: "James Clear (buku populer, bukan teks ilmiah)" },
      { title: "Psychology", authors: "David G. Myers dan C. Nathan DeWall" },
    ],
  },
};
