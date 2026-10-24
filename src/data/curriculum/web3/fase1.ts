import type { CurriculumModule, Lesson } from "@/lib/types";
import { WEB3_PHASES } from "./phases";

type LessonDraft = Omit<Lesson, "id">;
type ChapterDraft = {
  summary: string;
  lessons: LessonDraft[];
};

const CHAPTERS: ChapterDraft[] = [
  {
    summary: "Membangun model mental hardware, software, source code, runtime, file system, terminal, dan jenis kegagalan program.",
    lessons: [
      {
        title: "Hardware, software, and the program lifecycle",
        minutes: 18,
        visual: "program-flow",
        content: `# Hardware, software, and the program lifecycle

**Tujuan belajar:** membedakan CPU, RAM, storage, operating system, program, dan runtime; menjelaskan perjalanan kode dari file hingga dieksekusi.

Komputer menerima data, menjalankan instruksi, dan menghasilkan keluaran. **CPU** mengeksekusi instruksi; **RAM** menampung data kerja sementara; **storage** menyimpan file lebih lama; **operating system (OS)** mengatur akses program terhadap hardware, file, dan perangkat. Aplikasi adalah software yang meminta OS dan runtime melakukan pekerjaan.

**Analogi:** CPU seperti koki yang mengikuti langkah resep, RAM seperti meja kerja yang bisa digunakan sementara, storage seperti lemari arsip, dan OS seperti pengelola dapur yang mengatur siapa boleh memakai alat.

Alur sederhana: programmer menulis **source code** → runtime/compiler menerjemahkan atau menjalankan instruksi → OS menyediakan sumber daya → CPU memproses → hasil ditampilkan/disimpan. JavaScript di browser dijalankan oleh engine JavaScript di dalam browser; JavaScript dengan Node.js dijalankan oleh runtime Node. Detail optimasi engine berbeda, tetapi model ini membantu memahami alur.

\`\`\`text
source.js → JavaScript runtime → OS / memory → CPU executes → output
\`\`\`

**Kesalahan umum:** mengira file program “berjalan sendiri” tanpa runtime, atau menyamakan RAM dengan storage. RAM biasanya hilang saat daya mati; file di storage tetap ada.

**Cek pemahaman:** ketika halaman browser ditutup, data yang hanya ada di RAM biasanya hilang. Sebutkan komponen yang menyimpan file halaman di disk dan komponen yang mengeksekusi instruksi saat halaman aktif.`,
      },
      {
        title: "Source code, compiler, interpreter, and runtime",
        minutes: 15,
        visual: "program-flow",
        content: `# Source code, compiler, interpreter, and runtime

**Tujuan:** mengetahui peran source code, compiler, interpreter, dan runtime tanpa menganggap satu bahasa selalu memakai satu cara eksekusi.

**Source code** adalah instruksi yang ditulis developer. **Compiler** menerjemahkan program atau bagian program ke bentuk lain sebelum/selama eksekusi. **Interpreter/runtime** menyediakan lingkungan untuk membaca, menjalankan, dan menghubungkan kode dengan sistem. Implementasi modern dapat menggabungkan strategi tersebut; hindari aturan mutlak seperti “JavaScript tidak pernah dikompilasi.”

Contoh: browser memberi halaman HTML, membangun DOM, lalu JavaScript engine menjalankan script dan berinteraksi dengan browser APIs. Node.js menyediakan runtime JavaScript di luar browser dengan APIs berbeda. Karena itu, \`document.querySelector\` tersedia di halaman browser tetapi tidak otomatis tersedia pada skrip Node.js.

**Debugging walkthrough:** pesan \`ReferenceError: document is not defined\` pada Node memberi petunjuk bahwa kode memakai browser API di runtime yang tidak menyediakan DOM. Solusi bukan menambah variabel acak; pindahkan kode ke konteks browser atau gunakan API yang sesuai runtime.

**Benar:** kenali target runtime sebelum memakai API.
**Keliru:** menganggap semua JavaScript punya \`window\`, \`document\`, dan akses DOM.

**Latihan:** sebutkan runtime yang kemungkinan dibutuhkan untuk (a) manipulasi tombol halaman, (b) skrip terminal untuk membaca file. Jelaskan alasanmu.`,
      },
      {
        title: "Files, paths, terminal, and environment",
        minutes: 15,
        visual: "program-flow",
        content: `# Files, paths, terminal, and environment

**Tujuan:** memahami file/folder, path, terminal, dan variabel lingkungan untuk menjalankan proyek secara konsisten.

Path menunjukkan lokasi file. **Absolute path** dimulai dari lokasi akar sistem/drive; **relative path** dihitung dari working directory. Terminal menerima perintah teks dan menjalankannya melalui shell. Perintah seperti \`pwd\` (PowerShell: \`Get-Location\`), \`cd\`, dan \`ls\` (PowerShell: \`Get-ChildItem\`) membantu memeriksa konteks kerja.

**Environment variable** adalah konfigurasi yang diberikan pada proses dari luar source code, misalnya mode aplikasi atau URL layanan. Nilai rahasia tidak boleh ditulis langsung ke repo, dibagikan lewat screenshot, atau di-commit. Gunakan \`.env.example\` hanya untuk nama variabel dan placeholder; rahasia nyata disimpan pada konfigurasi lokal/secret manager.

**Kesalahan umum:** menjalankan perintah dari folder yang salah, memakai relative path tanpa tahu working directory, dan memasukkan token rahasia ke file yang terlacak Git.

**Latihan terminal:** dari root proyek, cari \`package.json\`, lihat script yang tersedia, lalu catat folder kerja. Jangan menjalankan perintah yang menghapus file jika belum memahami dampaknya.

**Cek pemahaman:** apa beda path relatif \`src/app\` dan absolute path? Mengapa \`.env.example\` tidak boleh berisi API key sungguhan?`,
      },
    ],
  },
  {
    summary: "Menerapkan logika JavaScript menggunakan variabel, tipe dasar, operator, kondisi, loop, fungsi, dan debugging.",
    lessons: [
      {
        title: "Variables, primitive values, and expressions",
        minutes: 18,
        visual: "data-structures",
        codeLab: {
          language: "javascript",
          code: `const price = 12000;\nconst quantity = 3;\nconst total = price * quantity;\nconsole.log(total);`,
          expectedOutput: "36000",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["price 12000 dan quantity 3 menghasilkan total 36000.", "Mengubah quantity menjadi 2 menghasilkan 24000."],
          hint: "Periksa operator perkalian dan pastikan kedua nilai adalah number, bukan string.",
        },
        content: `# Variables, primitive values, and expressions

**Tujuan:** menyimpan nilai dan menghitung ekspresi sederhana.

Variable menghubungkan nama dengan nilai. Pilih \`const\` jika binding tidak perlu diganti; pilih \`let\` jika perlu reassignment. Primitive yang sering ditemui ialah \`string\`, \`number\`, \`boolean\`, \`undefined\`, \`null\`, \`bigint\`, dan \`symbol\`. Gunakan number untuk jumlah kecil/simulasi; perhitungan uang sungguhan memerlukan perhatian khusus pada presisi.

\`\`\`js
const price = 12000;
const quantity = 3;
const total = price * quantity;
console.log(total); // 36000
\`\`\`

\`const\` tidak berarti seluruh isi object/array tidak dapat berubah; ia berarti nama binding tidak dapat ditugaskan ulang. Ekspresi menggabungkan nilai dan operator untuk menghasilkan nilai baru.

**Kesalahan umum:** memakai \`=\` (assignment) saat bermaksud membandingkan, menggabungkan angka sebagai teks (\`"12" + "3"\` menjadi \`"123"\`), dan menamai variable \`x\` saat \`price\` lebih jelas.

**Challenge:** ubah jumlah menjadi 2. Prediksi output sebelum menjalankan contoh secara lokal. Tombol Run tidak disediakan; kode tidak dieksekusi di server pembelajaran.`,
      },
      {
        title: "Conditions, loops, and branching logic",
        minutes: 17,
        visual: "data-structures",
        codeLab: {
          language: "javascript",
          code: `const scores = [42, 75, 90];\nfor (const score of scores) {\n  if (score >= 70) console.log("pass");\n  else console.log("retry");\n}`,
          expectedOutput: "retry\\npass\\npass",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["42 menghasilkan retry.", "75 dan 90 menghasilkan pass.", "Setiap nilai menghasilkan tepat satu output."],
          hint: "Loop memproses setiap skor; kondisi memilih tepat satu cabang untuk setiap iterasi.",
        },
        content: `# Conditions, loops, and branching logic

**Tujuan:** memilih jalur program dengan kondisi dan mengulang pekerjaan untuk banyak nilai.

\`if/else\` menjalankan cabang berdasarkan ekspresi boolean. Operator perbandingan seperti \`>=\`, \`===\`, dan \`!==\` menghasilkan boolean. Gunakan equality ketat \`===\` agar perbandingan tidak melakukan konversi tipe secara diam-diam.

\`\`\`js
const score = 75;
if (score >= 70) {
  console.log("pass");
} else {
  console.log("retry");
}
\`\`\`

Loop seperti \`for...of\` menjalankan instruksi untuk tiap item. Setiap putaran disebut **iteration**. Perhatikan kondisi berhenti pada loop berbasis indeks agar tidak terjadi infinite loop atau akses di luar batas.

**Simulasi:** untuk \`[42, 75, 90]\`, putaran pertama memilih \`retry\`; dua berikutnya memilih \`pass\`. Prediksi urutan output, baru jalankan snippet latihan.

**Kesalahan umum:** memakai \`=\` dalam kondisi, tidak memperbarui indeks loop, atau membuat cabang yang tidak mencakup kasus batas.

**Latihan:** tambahkan skor \`70\`. Apakah masuk \`pass\`? Jelaskan bagaimana operator \`>=\` menentukan hasil batas.`,
      },
      {
        title: "Functions, scope, and step-by-step debugging",
        minutes: 18,
        visual: "scope",
        codeLab: {
          language: "javascript",
          code: `function addTax(price, rate) {\n  return price + price * rate;\n}\nconsole.log(addTax(100, 0.1));`,
          expectedOutput: "110",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["addTax(100, 0.1) menghasilkan 110.", "addTax(50, 0) menghasilkan 50.", "Fungsi mengembalikan nilai, tidak hanya mencetaknya."],
          hint: "Bedakan parameter saat fungsi didefinisikan dengan argument saat fungsi dipanggil.",
        },
        content: `# Functions, scope, and step-by-step debugging

**Tujuan:** membagi solusi ke fungsi yang dapat diuji dan menggunakan scope untuk memahami akses variable.

Fungsi menerima **parameters**, menjalankan tugas, dan dapat mengembalikan nilai dengan \`return\`. **Argument** adalah nilai yang diberikan saat pemanggilan. Scope menentukan bagian kode yang dapat mengakses suatu nama.

\`\`\`js
function addTax(price, rate) {
  return price + price * rate;
}
console.log(addTax(100, 0.1)); // 110
\`\`\`

Debugging yang teratur: (1) baca pesan error lengkap; (2) temukan baris terkait; (3) cek nilai input; (4) prediksi nilai antara; (5) ubah satu hal; (6) jalankan ulang test. \`console.log\` berguna untuk inspeksi lokal, tetapi jangan log token, password, atau data pribadi.

**Common mistake:** fungsi mencetak hasil tetapi pemanggil mengharapkan return value; hasil \`console.log\` bukan nilai yang dikembalikan.

**Latihan:** uji \`addTax(50, 0)\`. Tulis input, perhitungan antara, dan output yang diharapkan sebelum menjalankan.`,
      },
    ],
  },
  {
    summary: "Memodelkan informasi dengan string, array, object, metode array, dan pemecahan masalah.",
    lessons: [
      {
        title: "Strings, arrays, and indexed data",
        minutes: 16,
        visual: "data-structures",
        codeLab: {
          language: "javascript",
          code: `const names = ["Ari", "Bima", "Cici"];\nconsole.log(names[0]);\nconsole.log(names.length);`,
          expectedOutput: "Ari\\n3",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["Indeks pertama adalah 0.", "Array memiliki tiga item.", "Indeks di luar array menghasilkan undefined."],
          hint: "Array memakai zero-based indexing: item pertama berada di indeks 0.",
        },
        content: `# Strings, arrays, and indexed data

**Tujuan:** memilih representasi untuk teks, angka, boolean, dan kumpulan berurutan.

String menyimpan teks, number nilai numerik, boolean kondisi benar/salah. **Array** menyimpan daftar berurutan. Indeks dimulai dari 0, sehingga item pertama berada pada \`items[0]\`; \`.length\` adalah jumlah item, bukan indeks terakhir.

\`\`\`js
const names = ["Ari", "Bima", "Cici"];
console.log(names[0]); // Ari
console.log(names.length); // 3
\`\`\`

Data yang hilang perlu diperiksa sebelum digunakan. \`names[5]\` adalah \`undefined\`; akses properti lebih lanjut dari nilai kosong dapat menyebabkan runtime error.

**Analogi:** array seperti daftar bernomor dari nol untuk komputer. Manusia sering mulai menghitung dari satu, sehingga kesalahan satu langkah (off-by-one) umum terjadi.

**Latihan:** prediksi \`names[2]\`, \`names[3]\`, dan \`names.length\`. Jelaskan bedanya indeks valid dan jumlah item.`,
      },
      {
        title: "Objects, properties, and structured records",
        minutes: 16,
        visual: "data-structures",
        codeLab: {
          language: "javascript",
          code: `const lesson = { title: "JavaScript", minutes: 30 };\nconsole.log(lesson.title);\nconsole.log(lesson.minutes);`,
          expectedOutput: "JavaScript\\n30",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["lesson.title menghasilkan JavaScript.", "lesson.minutes bernilai number 30.", "Properti yang tidak ada menghasilkan undefined."],
          hint: "Object menghubungkan nama properti dengan nilai; gunakan nama yang menggambarkan data.",
        },
        content: `# Objects, properties, and structured records

**Tujuan:** mengelompokkan nilai terkait dalam object dan memilih akses properti yang sesuai.

Object menyimpan pasangan **key-value**. Gunakan object untuk satu entitas dengan atribut bernama; array cocok untuk daftar beberapa entitas.

\`\`\`js
const lesson = { title: "JavaScript", minutes: 30 };
console.log(lesson.title); // JavaScript
console.log(lesson.minutes); // 30
\`\`\`

Dot notation mudah dibaca untuk key tetap. Bracket notation berguna bila key disimpan dalam variable, misalnya \`lesson[fieldName]\`. Nama properti yang tidak ada menghasilkan \`undefined\`.

**Counterexample:** simpan \`minutes: "30 minutes"\` bila perhitungan numerik akan dilakukan; tipe string mengharuskan parsing dan membuka ruang nilai tidak valid. Lebih baik simpan \`minutes: 30\` dan format saat ditampilkan.

**Latihan:** modelkan satu task dengan \`title\`, \`done\`, dan \`priority\`. Tentukan tipe setiap properti dan contoh nilai yang sah.`,
      },
      {
        title: "Array methods and problem decomposition",
        minutes: 18,
        visual: "data-structures",
        codeLab: {
          language: "javascript",
          code: `const expenses = [12000, 8000, 5000];\nconst total = expenses.reduce((sum, amount) => sum + amount, 0);\nconsole.log(total);`,
          expectedOutput: "25000",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["Jumlah 12000, 8000, 5000 adalah 25000.", "Array kosong dengan initial value 0 menghasilkan 0.", "Input tidak diubah oleh reduce."],
          hint: "reduce membawa akumulator dari satu item ke item berikutnya; initial value mencegah kasus array kosong.",
        },
        content: `# Array methods and problem decomposition

**Tujuan:** memakai \`map\`, \`filter\`, dan \`reduce\` serta memecah persoalan sebelum menulis kode.

Pilih metode berdasarkan hasil yang dibutuhkan: \`map\` membentuk daftar baru; \`filter\` memilih item; \`reduce\` menggabungkan banyak item menjadi satu hasil. Nama callback seperti \`amount\` lebih jelas dibanding \`x\`.

\`\`\`js
const expenses = [12000, 8000, 5000];
const total = expenses.reduce((sum, amount) => sum + amount, 0);
console.log(total); // 25000
\`\`\`

**Decomposition:** (1) tulis input, (2) tentukan output, (3) pecah menjadi langkah kecil, (4) coba contoh mini, (5) tulis pseudocode, (6) implementasikan, (7) uji kasus normal, kosong, dan batas. Complexity membantu membandingkan pertumbuhan kerja; tidak selalu perlu optimasi dini.

**Common mistakes:** lupa initial value pada \`reduce\`, mengubah array asal tanpa sengaja, dan menulis satu fungsi besar dengan terlalu banyak tanggung jawab.

**Challenge:** buat pseudocode untuk memilih biaya di atas 10.000 lalu menghitung jumlahnya. Belum perlu menulis kode.`,
      },
    ],
  },
  {
    summary: "Memahami callback, higher-order functions, closure, lexical scope, this, prototype, modules, dan exceptions.",
    lessons: [
      {
        title: "Callbacks and higher-order functions",
        minutes: 16,
        visual: "scope",
        codeLab: {
          language: "javascript",
          code: `function applyDiscount(price, discount) {\n  return price - discount(price);\n}\nconst tenPercent = (price) => price * 0.1;\nconsole.log(applyDiscount(200, tenPercent));`,
          expectedOutput: "180",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["tenPercent menerima harga dan mengembalikan 10% dari harga.", "Harga akhir untuk 200 adalah 180.", "applyDiscount menerima fungsi callback."],
          hint: "Fungsi dapat diberikan sebagai argument, lalu dipanggil dari fungsi penerima.",
        },
        content: `# Callbacks and higher-order functions

**Tujuan:** memahami fungsi sebagai nilai dan mengenali higher-order function.

JavaScript memperlakukan fungsi sebagai value: fungsi dapat disimpan pada variable, diberikan sebagai argument, atau dikembalikan. Fungsi yang menerima/mengembalikan fungsi disebut **higher-order function**. Fungsi yang dikirim sebagai argument sering disebut **callback**.

\`\`\`js
const doubled = [1, 2, 3].map((number) => number * 2);
console.log(doubled); // [2, 4, 6]
\`\`\`

\`map\` menerima callback untuk setiap item dan menghasilkan array baru. Callback seharusnya memiliki satu tugas yang jelas.

**Kesalahan umum:** menulis \`map(double())\` ketika maksudnya memberi fungsi; tanda kurung langsung memanggilnya. Bandingkan \`map(double)\` dengan \`map(double())\`.

**Debugging:** periksa argument callback dan nilai yang dikembalikan. Jika hasil array berisi \`undefined\`, callback mungkin tidak memiliki \`return\`.

**Latihan:** jelaskan berapa kali callback dipanggil oleh \`map\` untuk array berisi tiga item.`,
      },
      {
        title: "Lexical scope, closures, and this",
        minutes: 18,
        visual: "scope",
        codeLab: {
          language: "javascript",
          code: `function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nconsole.log(next(), next());`,
          expectedOutput: "1 2",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["Pemanggilan pertama menghasilkan 1.", "Pemanggilan kedua menghasilkan 2.", "Nilai count tetap tersedia bagi fungsi yang dikembalikan."],
          hint: "Closure mempertahankan akses ke lexical environment tempat fungsi dibuat.",
        },
        content: `# Lexical scope, closures, and this

**Tujuan:** menerangkan bagaimana fungsi melihat variable dan apa yang dipertahankan closure.

Lexical scope ditentukan oleh struktur kode. Inner function dapat mengakses nama pada outer scope. **Closure** adalah fungsi bersama akses ke lexical environment saat fungsi tersebut dibuat—meskipun fungsi luar sudah selesai berjalan.

\`\`\`js
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
console.log(next(), next()); // 1 2
\`\`\`

\`this\` bukan sinonim closure; nilainya bergantung cara pemanggilan dan jenis fungsi. Arrow function tidak membuat \`this\` sendiri dan mengambilnya dari lexical context. Hindari menggunakan \`this\` sampai memahami konteks pemanggilannya.

**Analogi:** closure seperti fungsi yang membawa catatan kecil berisi referensi ke nilai luar yang masih diperlukan.

**Kesalahan umum:** menganggap variable lokal hilang begitu fungsi luar selesai, atau menganggap semua fungsi memiliki perilaku \`this\` yang sama.

**Latihan:** buat dua counter dari \`makeCounter\`. Apakah keduanya berbagi \`count\`? Jelaskan berdasarkan pemanggilan fungsi luar.`,
      },
      {
        title: "Prototypes, modules, and error handling",
        minutes: 17,
        visual: "scope",
        content: `# Prototypes, modules, and error handling

**Tujuan:** memahami pewarisan prototype secara konseptual, membagi program ke modul, dan menangani kesalahan tanpa menyembunyikannya.

Object JavaScript dapat memiliki **prototype** sebagai sumber properti/metode yang diwarisi. Class syntax menyediakan bentuk deklaratif untuk pola object tertentu, tetapi tidak mengganti model prototype di bawahnya. Pilih composition dan fungsi sederhana bila lebih mudah dirawat; class bukan keharusan untuk setiap data.

**Modules** memisahkan kode: \`export\` mengekspos fungsi/nilai, \`import\` menggunakannya. Modul kecil dengan tanggung jawab jelas lebih mudah diuji daripada satu file besar.

Gunakan \`try/catch\` hanya ketika program dapat mengambil tindakan bermakna. Contoh: menampilkan pesan yang jelas untuk parsing data gagal. Jangan menelan error dengan \`catch {}\` atau mengganti hasil gagal dengan nilai palsu.

\`\`\`js
try {
  const record = JSON.parse(input);
  console.log(record.title);
} catch (error) {
  console.error("Input JSON tidak valid.", error);
}
\`\`\`

**Debugging walkthrough:** cek apakah input memang JSON valid; periksa pesan exception; tampilkan konteks yang aman; jangan log data sensitif.

**Latihan:** kapan lebih baik memecah fungsi ke modul terpisah? Sebutkan satu alasan terkait pengujian atau pemeliharaan.`,
      },
    ],
  },
  {
    summary: "Menjelaskan call stack, event loop, Promise, async/await, fetch, dan penanganan kegagalan asynchronous.",
    lessons: [
      {
        title: "Call stack, tasks, and the event loop",
        minutes: 18,
        visual: "event-loop",
        content: `# Call stack, tasks, and the event loop

**Tujuan:** memprediksi urutan kode synchronous dan callback asynchronous pada contoh dasar.

JavaScript menjalankan satu potongan synchronous pada call stack. Browser/Node menyediakan APIs untuk operasi tertentu. Penyelesaian operasi menjadwalkan callback; event loop mengizinkan tugas berjalan ketika stack siap. Rincian microtask/macrotask bergantung host, tetapi urutan synchronous sebelum callback timer sederhana dapat diprediksi.

\`\`\`js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// A, C, lalu B
\`\`\`

\`setTimeout(..., 0)\` bukan berarti callback berjalan seketika; ia baru dapat diproses setelah synchronous stack kosong dan scheduler mengizinkan.

**Simulasi visual:** tekan langkah berikut di panel untuk memindahkan callback dari antrean ke stack. Simulasi menjelaskan konsep, bukan timing presisi sistem operasi.

**Kesalahan umum:** menunggu network request secara synchronous sehingga UI terblokir, atau menganggap timer 0 langsung berjalan.

**Cek pemahaman:** prediksi output sebelum melihat panel. Jelaskan mengapa \`C\` tercetak sebelum \`B\`.`,
      },
      {
        title: "Promises and async/await",
        minutes: 18,
        visual: "event-loop",
        codeLab: {
          language: "javascript",
          code: `async function getLabel() {\n  return "ready";\n}\ngetLabel().then((value) => console.log(value));\nconsole.log("scheduled");`,
          expectedOutput: "scheduled\\nready",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["Pemanggilan async function menghasilkan Promise.", "Output synchronous scheduled muncul lebih dulu.", "Nilai return menjadi hasil Promise."],
          hint: "Bahkan async function yang return string mengembalikan Promise.",
        },
        content: `# Promises and async/await

**Tujuan:** membaca Promise dan menggunakan async/await untuk alur asynchronous yang lebih jelas.

Promise merepresentasikan hasil yang tersedia sekarang atau nanti: **pending**, **fulfilled**, atau **rejected**. \`async\` function selalu mengembalikan Promise. \`await\` menunggu hasil Promise di dalam async function tanpa menghentikan seluruh aplikasi.

\`\`\`js
async function loadProfile() {
  const response = await fetch("/api/profile");
  if (!response.ok) throw new Error("Request gagal");
  return response.json();
}
\`\`\`

**Penting:** Promise yang reject harus ditangani. Gunakan \`try/catch\` di sekitar langkah yang bisa gagal dan tampilkan error yang bisa ditindaklanjuti. Jangan mengasumsikan setiap HTTP status menghasilkan rejection; \`fetch\` umumnya tetap resolve untuk response HTTP seperti 404, jadi periksa \`response.ok\`.

**Common mistakes:** melupakan \`await\`, lupa return hasil, dan tidak memeriksa status response.

**Latihan:** tandai operasi yang asynchronous dalam contoh. Apa yang terjadi jika \`response.ok\` false?`,
      },
      {
        title: "Fetch, async errors, and reliable interfaces",
        minutes: 18,
        visual: "event-loop",
        codeLab: {
          language: "javascript",
          code: `async function readJson(url) {\n  const response = await fetch(url);\n  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);\n  return response.json();\n}`,
          expectedOutput: "Mengembalikan data JSON jika response berhasil; melempar error berisi HTTP status jika response tidak OK.",
          runCommand: "Tambahkan fungsi pada skrip JavaScript lokal. Panggil hanya dengan URL API yang diizinkan dan tangani rejection.",
          testCases: ["Response sukses dibaca sebagai JSON.", "Response 404 menghasilkan error yang tertangani.", "JSON rusak tetap menghasilkan error, bukan objek palsu."],
          hint: "Pisahkan network error, HTTP error, dan parsing error; semuanya dapat terjadi pada tahap berbeda.",
        },
        content: `# Fetch, async errors, and reliable interfaces

**Tujuan:** mengonsumsi API dan membedakan kegagalan jaringan, HTTP, serta parsing.

Siklus request: client mengirim HTTP request → server memproses → client menerima status/header/body → aplikasi memeriksa status → body diparse. Jangan menampilkan data contoh sebagai hasil sukses jika request gagal.

\`\`\`js
async function readJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
  return response.json();
}
\`\`\`

Di UI, tampilkan loading, data, dan error sebagai state berbeda. Beri pengguna tindakan seperti retry jika sesuai. Hindari retry tanpa batas; layanan dapat membatasi rate atau sementara tidak tersedia.

**Debugging walkthrough:** periksa URL; lihat status; cek format body; tangani abort/timeout sesuai kebutuhan; pastikan data memenuhi bentuk yang diharapkan sebelum digunakan.

**Privasi:** jangan mengirim data pribadi ke endpoint yang tidak dipercaya. Jangan meletakkan token rahasia di client-side bundle.

**Latihan:** tulis tiga kemungkinan gagal pada request ini dan bagaimana pesan yang aman dan informatif dapat membantu pengguna.`,
      },
    ],
  },
  {
    summary: "Membaca dan memvalidasi JSON serta memahami request-response HTTP dan desain API.",
    lessons: [
      {
        title: "JSON, serialization, and validation",
        minutes: 16,
        visual: "http-flow",
        codeLab: {
          language: "javascript",
          code: `const source = '{"title":"Study","done":false}';\nconst task = JSON.parse(source);\nconsole.log(task.title, task.done);`,
          expectedOutput: "Study false",
          runCommand: "Simpan sebagai app.js, lalu jalankan `node app.js` pada instalasi Node.js lokal.",
          testCases: ["JSON.parse menghasilkan object JavaScript.", "title berupa string.", "done berupa boolean, bukan teks."],
          hint: "JSON memakai double quotes untuk nama properti dan string; JSON bukan sintaks JavaScript penuh.",
        },
        content: `# JSON, serialization, and validation

**Tujuan:** mengubah data antara representasi JavaScript dan format JSON serta memvalidasi bentuknya.

JSON adalah format teks pertukaran data. \`JSON.stringify(value)\` menserialisasi nilai yang didukung; \`JSON.parse(text)\` membuat nilai JavaScript. JSON tidak mendukung function, \`undefined\`, atau comment. Parsing hanya memastikan sintaks; ia tidak memastikan field wajib, tipe, atau aturan bisnis benar.

\`\`\`js
const source = '{"title":"Study","done":false}';
const task = JSON.parse(source);
console.log(task.title, task.done); // Study false
\`\`\`

Validasi isi setelah parsing: pastikan \`title\` string dan \`done\` boolean sebelum memakai data. Data eksternal selalu dianggap tidak tepercaya, walaupun JSON valid.

**Kesalahan umum:** memanggil \`JSON.parse\` tanpa menangani input rusak; mempercayai data hanya karena dapat diparse.

**Challenge:** sebutkan pemeriksaan minimum untuk menerima task baru yang memiliki judul dan status selesai.`,
      },
      {
        title: "HTTP requests, responses, and status codes",
        minutes: 16,
        visual: "http-flow",
        content: `# HTTP requests, responses, and status codes

**Tujuan:** membaca bagian utama HTTP request/response dan menggunakan method/status secara tepat.

Request memuat method, URL, headers, dan kadang body. Response memuat status, headers, dan body. **GET** umumnya membaca; **POST** mengirim/membuat; **PATCH** mengubah sebagian; **PUT** mengganti representasi; **DELETE** meminta penghapusan. Arti tepat bergantung kontrak API.

Kelompok status: **2xx** sukses; **3xx** redirect; **4xx** masalah request/akses; **5xx** kegagalan server. Contoh: 200 sukses, 201 dibuat, 400 input tidak valid, 401 belum terautentikasi, 403 tidak diizinkan, 404 tidak ditemukan, 429 terlalu banyak request.

**Diagram:** browser/client → request → API → validasi dan logika → response status/body → UI.

**Kesalahan umum:** menyimpulkan sukses hanya karena koneksi berhasil; menampilkan 401 seolah sukses; mengirim rahasia dalam URL query.

**Latihan:** untuk mengambil daftar tugas, pilih method dan jelaskan response apa yang ditampilkan jika data belum tersedia.`,
      },
      {
        title: "REST concepts, authentication, and rate limits",
        minutes: 17,
        visual: "http-flow",
        content: `# REST concepts, authentication, and rate limits

**Tujuan:** memahami resource API, autentikasi dasar, dan batas penggunaan layanan.

REST adalah pendekatan desain API yang mengorganisasi resource dan interaksi HTTP secara konsisten; tidak setiap endpoint berlabel REST mengikuti satu bentuk wajib. Contoh resource: \`/tasks\`, \`/tasks/42\`.

**Authentication** menjawab “siapa kamu?”; **authorization** menjawab “apa yang boleh kamu lakukan?”. API key atau access token adalah credential. Simpan rahasia hanya di sisi server/configuration yang sesuai, jangan di kode frontend atau Git. Gunakan HTTPS dan kebijakan least privilege.

**Rate limit** membatasi frekuensi request. Status 429 dapat meminta client menunggu. Retry dengan backoff dan batas percobaan; jangan membuat loop request yang membebani layanan.

**Counterexample:** menanam API secret pada source JavaScript browser; setiap pengunjung dapat melihat bundle.

**Praktik:** gunakan placeholder \`API_KEY=replace_me\` di \`.env.example\`, dan pastikan file \`.env\` nyata masuk \`.gitignore\`.

**Cek pemahaman:** mengapa API key yang disembunyikan hanya dengan nama variable tetap dapat ditemukan pada bundle client?`,
      },
    ],
  },
  {
    summary: "Menggunakan Git untuk menyimpan riwayat perubahan, branch, kolaborasi, dan dokumentasi.",
    lessons: [
      {
        title: "Repository, working tree, and commits",
        minutes: 16,
        visual: "git-branches",
        content: `# Repository, working tree, and commits

**Tujuan:** membedakan working tree, staging area, dan commit serta membuat perubahan yang mudah ditinjau.

Git menyimpan riwayat perubahan. **Working tree** adalah file saat ini; **staging area** memilih perubahan untuk commit berikutnya; **commit** adalah snapshot berpesan pada riwayat lokal. Perintah umum: \`git status\`, \`git diff\`, \`git add <file>\`, \`git commit -m "..."\`.

Commit yang baik berisi perubahan terkait dengan pesan spesifik. Sebelum commit, tinjau diff untuk memastikan tidak ada file rahasia, output build, atau perubahan yang tidak diniatkan.

**Analogi:** staging seperti menaruh dokumen terpilih ke map sebelum mengarsipkan snapshot.

**Kesalahan umum:** commit semua file tanpa memeriksa status; pesan “update” tanpa menjelaskan maksud; mengira commit otomatis mengunggah ke remote.

**Latihan:** pada repo latihan, ubah satu file, lihat \`git diff\`, stage hanya file itu, lalu periksa status. Jangan push ke remote jika belum memahami isi commit.`,
      },
      {
        title: "Branches, merges, and conflict resolution",
        minutes: 17,
        visual: "git-branches",
        content: `# Branches, merges, and conflict resolution

**Tujuan:** mengisolasi pekerjaan dengan branch dan memahami conflict sebagai kebutuhan memilih maksud perubahan.

Branch adalah nama yang menunjuk jalur commit. Buat branch fitur agar perubahan dapat dikembangkan dan ditinjau tanpa langsung mengubah branch utama. Saat dua jalur mengubah baris yang sama, Git dapat meminta penyelesaian conflict.

Langkah aman: periksa file conflict; baca kedua perubahan dan konteks; gabungkan maksud yang benar; hapus marker conflict; jalankan test; periksa \`git diff\`; commit hasil merge.

**Kesalahan umum:** menghapus salah satu sisi tanpa membaca, atau menandai selesai sebelum compile/test. Conflict bukan sekadar gangguan teks; bisa ada konflik semantik walaupun Git berhasil merge otomatis.

**Simulasi:** panel branch memperlihatkan fitur dan main bercabang lalu bertemu. Diagram ini abstraksi; repository nyata memiliki graph commit.

**Latihan:** jelaskan bagaimana kamu memastikan perubahan hasil merge tidak menghilangkan perilaku yang sudah ada.`,
      },
      {
        title: "GitHub workflow, .gitignore, and README",
        minutes: 17,
        visual: "git-branches",
        content: `# GitHub workflow, .gitignore, and README

**Tujuan:** memahami remote, pull request, ignore rules, konfigurasi aman, dan dokumentasi.

Remote seperti GitHub menyimpan salinan repository untuk kolaborasi; \`push\` mengirim commit, \`pull\` mengambil perubahan. **Pull request** mengusulkan perubahan untuk ditinjau sebelum digabung. Review memeriksa tujuan, diff, test, risiko, serta dokumentasi.

\`.gitignore\` mengecualikan file yang tidak seharusnya dilacak seperti \`.env\`, \`node_modules\`, dan output build. Ia tidak menghapus rahasia yang sudah pernah di-commit; secret yang bocor perlu dianggap kompromi dan dirotasi.

README yang bermanfaat mencakup tujuan, prasyarat, cara instalasi/jalankan, konfigurasi placeholder, cara test, expected behavior, dan batasan. Jangan klaim test berhasil jika belum dijalankan.

**Keamanan:** jangan pernah menyimpan private key, seed phrase, password, atau token nyata di source control. Gunakan local chain/testnet untuk latihan Web3 nanti.

**Latihan:** tinjau \`.gitignore\` repo latihan dan tulis outline README enam butir.`,
      },
    ],
  },
  {
    summary: "Menyatukan fungsi, struktur data, asynchronous operation, konsumsi API, validasi, tests, Git, dan dokumentasi.",
    lessons: [
      {
        title: "Project brief and acceptance criteria",
        minutes: 18,
        content: `# Project brief and acceptance criteria

**Proyek Fase 1: Personal Study/Expense Tracker simulasi (JavaScript lokal).** Tujuan: membangun program kecil yang memproses daftar item tanpa meminta akun, API key, private key, atau data finansial nyata.

## Milestones
1. Definisikan record item: \`id\`, \`title\`, \`amount\`, \`category\`, \`createdAt\`.
2. Tulis fungsi tambah item dengan validasi title dan amount.
3. Hitung total dan filter berdasarkan category.
4. Serialisasi/parse JSON dengan error handling.
5. (Opsional) konsumsi endpoint publik non-sensitif atau mock async lokal; jelaskan bila tidak menggunakan API.
6. Buat test checklist, jalankan di Node lokal, dan dokumentasikan.

## Acceptance criteria
- Input tidak valid ditolak dengan pesan yang dapat dipahami.
- Menambah item tidak mengubah record lain.
- Total benar untuk daftar kosong dan beberapa item.
- JSON rusak menghasilkan error eksplisit, bukan data sukses palsu.
- Tidak ada credentials atau data finansial nyata.
- README menjelaskan setup, perintah run, expected output, dan keterbatasan.

**Definition of done:** tiap acceptance criterion sudah diperiksa; perubahan ditinjau lewat \`git diff\`; tidak ada tombol Run palsu di platform ini.

**Latihan desain:** tulis tipe dan satu contoh record simulasi. Tentukan tiga kasus batas sebelum implementasi.`,
      },
      {
        title: "Implementation, manual tests, and debugging",
        minutes: 18,
        codeLab: {
          language: "javascript",
          code: `function addExpense(items, title, amount) {\n  if (!title.trim()) throw new Error("Title is required");\n  if (!Number.isFinite(amount) || amount <= 0) throw new Error("Amount must be positive");\n  return [...items, { title: title.trim(), amount }];\n}`,
          expectedOutput: "Valid input returns a new array with one added item; blank title, non-finite amount, or amount <= 0 throws an explicit error.",
          runCommand: "Salin ke app.js, tambahkan test lokal dengan input valid dan tidak valid, lalu jalankan `node app.js`.",
          testCases: ["Input items array tetap tidak berubah.", "Title whitespace-only ditolak.", "NaN, Infinity, nol, dan nilai negatif ditolak.", "Nilai positif dan title nonempty menghasilkan satu item baru."],
          hint: "Pastikan fungsi mengembalikan array baru dan validasi dilakukan sebelum membuat record.",
        },
        content: `# Implementation, manual tests, and debugging

**Tujuan:** menerapkan acceptance criteria dalam fungsi yang memiliki input/output jelas dan dapat diperiksa.

Contoh demonstrasi berikut memvalidasi dua syarat dasar. Ini bukan aplikasi produksi lengkap; belum mencakup persistence, UI, audit keamanan, atau concurrency.

\`\`\`js
function addExpense(items, title, amount) {
  if (!title.trim()) throw new Error("Title is required");
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Amount must be positive");
  }
  return [...items, { title: title.trim(), amount }];
}
\`\`\`

\`trim\` menghapus whitespace di tepi; \`Number.isFinite\` menolak \`NaN\` dan infinity; spread menghasilkan array baru. Dalam aplikasi nyata, validasi juga perlu memeriksa tipe dan batas domain.

**Test checklist:** normal item; judul kosong; judul hanya spasi; jumlah nol/negatif; \`NaN\`; input daftar kosong; memastikan input awal tidak berubah. Catat actual vs expected.

**Debugging walkthrough:** reproduksi error dengan input minimal → baca stack trace → cek invariant → perbaiki akar masalah → ulang semua regression tests.

**Latihan:** mengapa validasi \`amount > 0\` saja belum cukup untuk menolak \`NaN\`?`,
      },
      {
        title: "Project review, README, and security checklist",
        minutes: 18,
        content: `# Project review, README, and security checklist

**Tujuan:** meninjau proyek dengan checklist yang dapat diulang dan mendokumentasikan hasil secara jujur.

## Test dan review
- Fungsi perhitungan diuji pada nol item, satu item, dan beberapa item.
- Fungsi mutasi tidak mengubah input jika kontrak mengharuskan data immutable.
- JSON malformed ditangani eksplisit.
- Error tidak ditelan atau diganti output sukses.
- Semua nilai eksternal divalidasi.
- \`git diff\` tidak memuat file rahasia atau dependency output.

## README outline
1. Tujuan dan batasan proyek.
2. Prasyarat dan versi runtime yang dipakai.
3. Instalasi dan perintah run.
4. Contoh input dan expected output.
5. Test checklist dan hasil aktual.
6. Keamanan, data simulasi, dan hal yang belum diimplementasikan.

**Rubrik self-review:** ketepatan fungsi (0–5), validasi/error (0–5), test edge case (0–5), dokumentasi dan security (0–5). Nilai ini refleksi mandiri, bukan skor otomatis atau sertifikasi kompetensi.

**Security reminder:** untuk latihan Web3 berikutnya gunakan local chain atau testnet. Jangan tempel private key/seed phrase ke website, repository, log, issue, maupun AI. Automated tooling dan checklist tidak membuktikan sistem aman.

**Definition of done:** jalankan seluruh checklist pada lingkungan lokal, catat hasil nyata, perbaiki kegagalan, lalu tinjau ulang dokumentasi dan diff.`,
      },
    ],
  },
];

export const WEB3_FOUNDATIONS: CurriculumModule[] = CHAPTERS.map((chapter, chapterIndex) => {
  const phase = WEB3_PHASES[0];
  const chapterNumber = chapterIndex + 1;
  const chapterInfo = phase.chapters[chapterIndex];
  return {
    id: `web-f1-b${chapterNumber}`,
    title: `Fase 1 • Bab ${chapterNumber}: ${chapterInfo.title}`,
    summary: chapter.summary,
    phaseNumber: 1,
    phaseTitle: phase.title,
    lessons: chapter.lessons.map((lesson, lessonIndex) => ({
      id: `web-f1-b${chapterNumber}-l${lessonIndex + 1}`,
      ...lesson,
    })),
  };
});
