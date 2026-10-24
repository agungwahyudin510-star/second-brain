import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";
import { WEB3_PHASES } from "./phases";

type QuestionDraft = [string, string, string[], number, string];

const CHAPTER_QUESTIONS: QuestionDraft[][] = [
  [
    ["Hardware roles", "Komponen mana yang umumnya mengeksekusi instruksi program?", ["CPU", "Storage", "Keyboard", "Monitor"], 0, "CPU menjalankan instruksi; perangkat lain memiliki fungsi yang berbeda."],
    ["RAM and storage", "Perbedaan umum RAM dan storage adalah...", ["RAM menyimpan semua data permanen; storage hanya sementara.", "RAM dipakai untuk data kerja sementara; storage menyimpan file lebih lama.", "Keduanya selalu sama.", "Storage menjalankan semua instruksi sendiri."], 1, "RAM bersifat working memory; storage mempertahankan file saat program tidak berjalan."],
    ["Operating system", "Peran operating system yang paling tepat adalah...", ["Mengatur sumber daya dan menyediakan layanan bagi program.", "Mengubah semua bug menjadi fitur.", "Menggantikan seluruh hardware.", "Menjamin aplikasi bebas error."], 0, "OS mengelola sumber daya dan menjadi perantara aplikasi dengan sistem."],
    ["Runtime", "Mengapa JavaScript yang memakai document.querySelector umumnya perlu dijalankan pada konteks browser?", ["Node selalu menyediakan DOM secara otomatis.", "document adalah Browser API dan tidak tersedia pada semua runtime.", "JavaScript tidak dapat berjalan di Node.", "CSS membuat document variable."], 1, "API berbeda antar runtime; Node tidak otomatis menyediakan DOM browser."],
    ["Program lifecycle", "Urutan konseptual yang paling tepat adalah...", ["Source code → runtime → instruksi dieksekusi → output.", "Output → CPU dimatikan → source code.", "RAM → keyboard → compiler → internet.", "Storage → monitor → source code diabaikan."], 0, "Kode dijalankan oleh runtime/engine dan menghasilkan efek/keluaran."],
    ["Terminal and paths", "Path relatif biasanya ditafsirkan berdasarkan...", ["Working directory saat perintah dijalankan.", "Warna terminal.", "Alamat email pengguna.", "Ukuran monitor."], 0, "Path relatif dihitung terhadap working directory atau konteks yang ditentukan."],
    ["Environment variables", "Praktik aman untuk API secret adalah...", ["Menaruhnya pada source frontend agar mudah diakses.", "Menyimpannya di konfigurasi rahasia yang sesuai dan tidak di-commit.", "Mengirimnya lewat issue publik.", "Menyembunyikannya dengan nama variable pendek."], 1, "Secret harus berada di luar source control dan tidak dibundel ke client."],
    ["Error types", "Program menghitung diskon dengan rumus yang keliru tetapi tetap berjalan. Ini terutama...", ["Syntax error.", "Logic error.", "Compiler guarantee.", "Network status."], 1, "Logic error menghasilkan perilaku yang salah meskipun sintaks dan runtime berjalan."],
  ],
  [
    ["Constants", "Kapan const menjadi pilihan yang sesuai?", ["Saat nama binding tidak perlu ditugaskan ulang.", "Saat nilai selalu berupa teks.", "Hanya untuk object.", "Untuk menghentikan semua object mutation."], 0, "const mencegah reassignment binding, bukan membuat isi object selalu immutable."],
    ["Types", "Apa hasil dari ekspresi string \"12\" + \"3\" di JavaScript?", ["15", "\"123\"", "NaN selalu.", "Error sintaks."], 1, "Operator + menggabungkan dua string."],
    ["Strict equality", "Mengapa === sering lebih jelas daripada ==?", ["Ia membandingkan tanpa coercion longgar.", "Ia selalu membandingkan hanya huruf besar.", "Ia membuat nilai menjadi angka.", "Ia meniadakan validasi."], 0, "Strict equality tidak melakukan coercion tipe seperti equality longgar."],
    ["Conditionals", "Apa tipe hasil ekspresi `score >= 70`?", ["boolean", "object", "function", "undefined selalu"], 0, "Operator perbandingan menghasilkan boolean."],
    ["Loops", "Berapa kali loop `for (const item of [a, b, c])` berjalan?", ["Satu kali", "Dua kali", "Tiga kali", "Tak pernah"], 2, "Loop for...of menjalankan body satu kali per elemen iterable."],
    ["Functions", "Apa peran `return` dalam fungsi?", ["Mengakhiri fungsi dan mengembalikan nilai kepada pemanggil.", "Selalu mencetak nilai ke terminal.", "Mengulang fungsi.", "Menangani seluruh error otomatis."], 0, "return mengirim hasil; console.log hanya menampilkan informasi."],
    ["Debugging", "Urutan debugging yang paling membantu adalah...", ["Mengubah banyak baris sekaligus.", "Reproduksi error, baca konteks, periksa nilai, ubah akar masalah, uji lagi.", "Hapus semua error message.", "Menyalahkan runtime tanpa memeriksa input."], 1, "Proses bertahap menjaga hubungan antara penyebab dan perubahan."],
    ["Scope", "Variable yang dideklarasikan dengan const di dalam function block umumnya...", ["Hanya tersedia pada lexical scope yang sesuai.", "Global otomatis.", "Tersedia di internet.", "Tidak pernah dapat dibaca."], 0, "Scope membatasi tempat sebuah nama dapat diakses."],
  ],
  [
    ["Arrays", "Indeks elemen pertama array JavaScript adalah...", ["0", "1", "-1", "length"], 0, "Array JavaScript menggunakan zero-based indexing."],
    ["Objects", "Struktur yang sesuai untuk satu task dengan title dan done adalah...", ["Object dengan properti bernama.", "String gabungan tanpa separator.", "Angka tunggal.", "Setiap properti sebagai file terpisah."], 0, "Object mengelompokkan properti bernama dalam satu record."],
    ["Array methods", "Metode mana yang lazim mengubah setiap elemen menjadi elemen hasil baru?", ["map", "filter", "reduce", "findIndex"], 0, "map memetakan setiap item ke nilai hasil dan membentuk array baru."],
    ["Filtering", "Metode yang memilih item sesuai kondisi adalah...", ["filter", "map", "join", "push"], 0, "filter mempertahankan item yang memenuhi predicate."],
    ["Reduction", "Mengapa reduce sering diberi initial value?", ["Agar akumulator punya nilai awal dan kasus array kosong jelas.", "Agar array selalu terurut.", "Untuk menghapus semua item.", "Untuk mengubah function menjadi object."], 0, "Nilai awal membuat agregasi dan input kosong lebih terdefinisi."],
    ["Problem decomposition", "Langkah awal yang membantu saat memecahkan problem coding adalah...", ["Tulis input, output, dan batasan yang diminta.", "Langsung menambah dependency.", "Menghapus contoh input.", "Mengoptimalkan sebelum tahu masalah."], 0, "Memahami input-output dan batasan membantu memilih algoritma."],
    ["Complexity", "Big O terutama membantu membicarakan...", ["Bagaimana kebutuhan kerja tumbuh saat ukuran input bertambah.", "Warna code editor.", "Jumlah baris komentar.", "Harga perangkat komputer."], 0, "Big O menggambarkan pertumbuhan asimptotik, bukan waktu pasti pada mesin tertentu."],
    ["Data validation", "Data JSON dari pengguna sebaiknya...", ["Langsung dipercaya karena valid JSON.", "Divalidasi bentuk, tipe, dan batas sebelum digunakan.", "Diubah menjadi private key.", "Disimpan sebagai HTML tanpa pemeriksaan."], 1, "Valid syntax tidak menjamin data memenuhi aturan aplikasi."],
  ],
  [
    ["Callbacks", "Higher-order function dapat...", ["Menerima fungsi sebagai argumen atau mengembalikan fungsi.", "Hanya bekerja pada angka.", "Menghapus lexical scope.", "Menggantikan semua module."], 0, "Fungsi adalah nilai dan dapat diterima/dikembalikan oleh fungsi lain."],
    ["map callback", "Jika callback map tidak mengembalikan nilai, elemen hasil biasanya...", ["undefined", "selalu angka 0", "dihapus dari array", "menjadi Promise otomatis"], 0, "Tanpa return, hasil callback adalah undefined."],
    ["Lexical scope", "Lexical scope terutama ditentukan oleh...", ["Struktur tempat kode ditulis.", "Kecepatan CPU.", "Urutan alfabet nama function.", "Status GitHub."], 0, "Akses nama mengikuti struktur lexical kode."],
    ["Closure", "Closure mempertahankan...", ["Akses ke lexical environment yang diperlukan fungsi.", "Salinan seluruh komputer.", "Koneksi jaringan selamanya.", "Semua module global."], 0, "Fungsi closure tetap dapat mengakses environment saat ia dibentuk."],
    ["this", "Arrow function berbeda dari function biasa terkait `this` karena arrow function...", ["Tidak membentuk `this` sendiri.", "Selalu memakai global `this`.", "Menghapus `this` dari semua object.", "Tidak dapat menerima argument."], 0, "Arrow function mewarisi `this` lexical dari konteks luar."],
    ["Prototype", "Prototype di JavaScript terutama terkait dengan...", ["Delegasi/pewarisan property antar object.", "HTTP status.", "Storage perangkat.", "Git commits."], 0, "Object dapat mewarisi akses property melalui prototype chain."],
    ["Modules", "Manfaat module yang terpisah dan berfokus adalah...", ["Mengurangi coupling dan membantu pengujian/pemeliharaan.", "Membuat semua variable global.", "Menjamin tidak ada bug.", "Menyembunyikan source code dari runtime."], 0, "Batas tanggung jawab yang jelas memudahkan pemahaman dan pengujian."],
    ["Errors", "Kapan try/catch paling tepat digunakan?", ["Saat aplikasi dapat menangani error dengan tindakan/pesan yang bermakna.", "Mengelilingi seluruh program agar error tidak diketahui.", "Untuk mengganti semua data invalid dengan data sukses.", "Tidak pernah."], 0, "Tangani error di batas yang dapat memberi pemulihan atau konteks yang berguna."],
  ],
  [
    ["Call stack", "Pada contoh `log A; setTimeout(log B, 0); log C`, urutan sederhana yang diharapkan adalah...", ["A, C, B", "A, B, C selalu", "B, A, C", "C, B, A"], 0, "Callback timer berjalan setelah synchronous call stack selesai."],
    ["Event loop", "Delay setTimeout 0 berarti...", ["Callback berjalan setelah stack kosong dan scheduler memprosesnya.", "Callback selalu langsung dijalankan.", "Kode synchronous dihentikan.", "Tidak ada callback."], 0, "Timer mengantrekan callback; bukan eksekusi seketika."],
    ["Promises", "Keadaan Promise yang menunggu hasil disebut...", ["pending", "fulfilled", "resolved-only", "static"], 0, "Promise dimulai pada state pending sebelum settle."],
    ["Async", "Nilai return dari async function selalu...", ["Promise.", "Array.", "String.", "Undefined."], 0, "async function membungkus nilai return dalam Promise."],
    ["Fetch status", "Apa yang perlu dicek setelah fetch untuk mengetahui HTTP 404?", ["response.ok atau response.status.", "Hanya apakah Promise resolve.", "Warna tombol.", "Nama file JS."], 0, "fetch dapat resolve pada HTTP error; periksa status/ok."],
    ["Error handling", "Apa praktik yang baik saat network request gagal?", ["Tampilkan state error yang jelas dan tindakan sesuai konteks.", "Tampilkan data palsu seolah berhasil.", "Tangkap lalu abaikan.", "Ulang tanpa batas."], 0, "Error perlu disampaikan secara eksplisit tanpa success-shaped fallback."],
    ["Async debugging", "Jika data belum tersedia sebelum render, strategi UI yang tepat adalah...", ["Modelkan state loading, data, dan error secara terpisah.", "Asumsikan object data selalu ada.", "Sembunyikan error.", "Memblokir seluruh browser."], 0, "State eksplisit membantu menangani operasi asynchronous dengan benar."],
    ["Task queues", "Mengapa callback async tidak menyela synchronous function yang sedang berjalan?", ["JavaScript menjalankan callback saat stack dapat memproses tugas berikut.", "Callback selalu berjalan di CPU berbeda.", "Callback bukan kode.", "OS melarang semua fungsi."], 0, "Event loop menjadwalkan callback ketika eksekusi synchronous memberi kesempatan."],
  ],
  [
    ["JSON", "Apakah JSON mendukung function dan comment?", ["Ya, keduanya wajib.", "Tidak.", "Hanya function.", "Hanya comment."], 1, "JSON adalah format data, bukan sintaks JavaScript penuh."],
    ["Parsing", "JSON.parse memastikan...", ["Sintaks JSON dapat dibaca, bukan aturan bisnis seluruhnya.", "Semua properti aman dan benar.", "Data sudah terautentikasi.", "Server selalu aktif."], 0, "Parsing memeriksa sintaks; aplikasi tetap perlu validasi schema/domain."],
    ["HTTP methods", "Method yang umumnya dipakai untuk membaca resource adalah...", ["GET", "POST", "PATCH", "DELETE"], 0, "GET umumnya digunakan untuk membaca resource."],
    ["Status codes", "Status 429 umumnya menunjukkan...", ["Rate limit terlampaui.", "Resource selalu dibuat.", "Request berhasil dihapus.", "TLS aktif."], 0, "429 Too Many Requests menunjukkan pembatasan frekuensi request."],
    ["HTTP errors", "Mengapa fetch perlu memeriksa response.ok?", ["HTTP 4xx/5xx tidak selalu membuat fetch Promise reject.", "Agar JSON berubah menjadi XML.", "Untuk menyimpan password.", "Supaya CORS diabaikan."], 0, "fetch umumnya resolve dengan Response untuk HTTP error status."],
    ["Authentication", "Authentication menjawab pertanyaan...", ["Siapa pengguna/klien ini?", "Apa warna UI?", "Kapan server dibuat?", "Berapa panjang array?"], 0, "Authentication memverifikasi identitas; authorization menentukan hak."],
    ["Secrets", "Mengapa API secret tidak boleh dimasukkan ke client bundle?", ["Pengguna dapat menginspeksi bundle dan mengambil credential.", "JavaScript tidak mendukung teks.", "Browser menolak semua variable.", "Itu memperlambat monitor."], 0, "Client-side code tersedia bagi pengguna; rahasia tidak dapat disembunyikan di sana."],
    ["Rate limit", "Client menerima 429. Respons yang lebih aman adalah...", ["Menerapkan retry terbatas/backoff sesuai kebijakan layanan.", "Mengulang request secepat mungkin selamanya.", "Mengganti hasil menjadi sukses.", "Mencoba credential acak."], 0, "Backoff terbatas menghindari beban berlebih dan menghormati limit."],
  ],
  [
    ["Git working tree", "Area Git yang berisi file yang sedang diedit disebut...", ["Working tree.", "Remote only.", "Tag list.", "Package registry."], 0, "Working tree berisi keadaan file saat ini."],
    ["Staging", "Apa fungsi git add?", ["Memilih perubahan ke staging area untuk commit.", "Mengunggah secret secara aman.", "Menghapus branch remote.", "Menjalankan tests."], 0, "git add menyiapkan perubahan untuk commit berikutnya."],
    ["Commits", "Apa yang sebaiknya dilakukan sebelum commit?", ["Tinjau status dan diff.", "Commit semua file tanpa melihat.", "Hapus semua test.", "Menaruh key rahasia."], 0, "Review diff membantu menangkap perubahan tak sengaja dan secrets."],
    ["Branches", "Branch umumnya bermanfaat untuk...", ["Mengisolasi jalur perubahan agar dapat dikembangkan/ditinjau.", "Menyimpan data RAM.", "Mengganti authentication.", "Menjalankan runtime."], 0, "Branch memberi jalur perubahan terpisah dalam sejarah Git."],
    ["Conflicts", "Git conflict sebaiknya diselesaikan dengan...", ["Membaca maksud kedua perubahan, menggabungkan, lalu menguji.", "Menghapus file tanpa melihat.", "Mengabaikan marker.", "Menganggap otomatis benar."], 0, "Conflict resolution perlu mempertahankan maksud dan memverifikasi hasil."],
    [".gitignore", "Jika secret pernah di-commit lalu ditambahkan ke .gitignore, maka...", ["Secret historis otomatis hilang dari semua riwayat.", "Secret masih mungkin ada di riwayat dan harus dianggap bocor.", "Git mengubah secret menjadi hash aman.", "Remote terhapus otomatis."], 1, ".gitignore tidak menghapus data yang sudah dilacak/di-commit."],
    ["Pull requests", "Pull request umumnya digunakan untuk...", ["Mengusulkan perubahan agar dapat ditinjau sebelum digabung.", "Mengirim seed phrase.", "Menghindari test.", "Menghapus semua commits."], 0, "PR mendukung review kolaboratif dan pemeriksaan perubahan."],
    ["Documentation", "README yang berguna sebaiknya memuat...", ["Tujuan, setup, konfigurasi aman, test, dan batasan.", "Private keys.", "Klaim test tanpa menjalankannya.", "Hanya logo."], 0, "Dokumentasi membantu menjalankan dan mengevaluasi proyek secara jujur."],
  ],
  [
    ["Requirements", "Acceptance criteria yang baik bersifat...", ["Dapat diperiksa dengan hasil yang jelas.", "Samar dan tidak bisa diuji.", "Rahasia.", "Tidak terkait kebutuhan."], 0, "Acceptance criteria mendeskripsikan perilaku yang dapat diverifikasi."],
    ["Input validation", "Fungsi menerima amount. Validasi yang paling tepat untuk nominal positif finite adalah...", ["Number.isFinite(amount) && amount > 0.", "Boolean(amount).", "amount !== null saja.", "String(amount).length > 0 saja."], 0, "Pemeriksaan finite dan batas domain menolak NaN/infinity/nilai nonpositif."],
    ["Immutability", "Jika fungsi menjanjikan tidak mengubah input array, test perlu memeriksa...", ["Array input tetap sama setelah fungsi dipanggil.", "Warna terminal.", "Nama file.", "Jumlah komentar."], 0, "Periksa side effect terhadap input, bukan hanya hasil output."],
    ["Edge cases", "Test mana yang melengkapi happy path untuk agregasi daftar?", ["Daftar kosong dan nilai batas.", "Hanya nilai yang sama.", "Tidak ada test.", "Mengubah nama variable."], 0, "Input kosong dan batas sering mengungkap asumsi yang keliru."],
    ["API integration", "Jika API tidak tersedia saat demo, tindakan yang jujur adalah...", ["Tampilkan error atau gunakan mock yang jelas diberi label.", "Menampilkan data mock sebagai data live.", "Menghapus status gagal.", "Menganggap API berhasil."], 0, "Bedakan data simulasi dari hasil API nyata."],
    ["Error handling", "JSON rusak sebaiknya...", ["Menghasilkan error yang eksplisit dan ditangani.", "Diubah menjadi sukses kosong tanpa penjelasan.", "Dianggap aman.", "Menyimpan token."], 0, "Kegagalan parsing perlu terlihat dan tidak menjadi hasil sukses palsu."],
    ["Security", "Untuk latihan Web3, lingkungan yang sesuai adalah...", ["Local chain atau testnet dengan akun simulasi.", "Dana sungguhan wajib.", "Seed phrase di frontend.", "Mainnet approval tanpa review."], 0, "Lingkungan lokal/testnet mengurangi risiko kehilangan dana saat belajar."],
    ["Definition of done", "Kapan proyek layak disebut selesai menurut checklist?", ["Kriteria diuji, diff ditinjau, hasil didokumentasikan jujur.", "Saat halaman muncul.", "Saat tombol belum diimplementasikan.", "Saat tidak ada README."], 0, "Definition of done menghubungkan implementasi dengan test dan dokumentasi."],
  ],
];

const CHAPTER_RUBRIC = "Nilai mandiri 0–5 untuk setiap kriteria: 0 = kosong/tidak relevan; 1 = konsep keliru; 2 = sebagian benar tetapi belum diterapkan; 3 = cukup tepat dengan kekurangan; 4 = tepat dan diterapkan; 5 = akurat, beralasan, dan jelas. Empat kriteria: ketepatan konsep, kualitas penalaran, penerapan, dan kejelasan; maksimum 20 per jawaban. Penilaian tidak otomatis.";

export const WEB3_QUIZZES: Record<string, AssessmentQuestion[]> = Object.fromEntries(
  CHAPTER_QUESTIONS.map((questions, chapterIndex) => {
    const chapterId = `web-f1-b${chapterIndex + 1}`;
    return [chapterId, questions.map(([concept, prompt, options, answer, explanation], questionIndex) => ({
      id: `${chapterId}-q${questionIndex + 1}`,
      concept,
      prompt,
      options,
      answer,
      explanation,
    }))];
  })
);

export const WEB3_ESSAYS: Record<string, EssayPrompt[]> = Object.fromEntries(
  WEB3_PHASES[0].chapters.map((chapter, chapterIndex) => {
    const chapterId = `web-f1-b${chapterIndex + 1}`;
    return [chapterId, [
      {
        id: `${chapterId}-e1`,
        prompt: `Jelaskan dengan kata-katamu sendiri satu konsep inti bab “${chapter.title}”, masalah yang dipecahkannya, dan analogi yang membantu pemula.`,
        rubric: CHAPTER_RUBRIC,
        reviewPoints: ["Definisi akurat.", "Masalah atau tujuan dijelaskan.", "Analogi tidak menyesatkan.", "Sebutkan satu batasan atau kesalahan umum."],
      },
      {
        id: `${chapterId}-e2`,
        prompt: `Terapkan satu konsep bab “${chapter.title}” pada contoh teknis kecil. Jelaskan input, langkah, expected result, dan cara memeriksanya.`,
        rubric: CHAPTER_RUBRIC,
        reviewPoints: ["Contoh relevan dan aman.", "Urutan langkah dapat diikuti.", "Expected result dapat diperiksa.", "Sebutkan edge case atau risiko."],
      },
    ]];
  })
);
