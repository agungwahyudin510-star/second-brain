import type { CurriculumModule } from "@/lib/types";

type LessonDraft = {
  title: string;
  minutes: number;
  content: string;
  audioText?: string;
  listening?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
};

function chapter(number: number, title: string, summary: string, lessons: LessonDraft[]): CurriculumModule {
  return {
    id: `eng-a1-${number}`,
    title: `A1 • Bab ${number}: ${title}`,
    summary,
    lessons: lessons.map(({ audioText, ...lesson }, index) => ({
      id: `eng-a1-${number}-${index + 1}`,
      ...lesson,
      speechText: audioText,
    })),
  };
}

export const ENGLISH_A1: CurriculumModule[] = [
  chapter(1, "English Foundations & Pronunciation", "Mengenali bunyi, ejaan, ungkapan dasar, dan subjek dalam percakapan pertama.", [
    {
      title: "Sounds, spelling, and the alphabet",
      minutes: 15,
      audioText: "Hello. My name is Ana. Nice to meet you.",
      listening: {
        question: "What is the speaker's name?",
        options: ["Ana", "Rina", "Budi"],
        answer: 0,
        explanation: "The speaker says, “My name is Ana.”",
      },
      content: `# Sounds, spelling, and the alphabet

**Tujuan:** mengeja nama, memahami bahwa bunyi bahasa Inggris tidak selalu sama dengan nama huruf, dan mencoba ungkapan pembuka.

Bahasa Inggris memakai 26 huruf, tetapi hubungan ejaan dan bunyinya tidak selalu satu-banding-satu. Nama huruf **A** diucapkan /eɪ/, sedangkan bunyi awal *apple* berbeda. Gunakan contoh kata dan kamus dengan simbol pelafalan atau audio; jangan menebak bunyi hanya dari ejaan.

| Ungkapan | Arti | Kapan dipakai |
|---|---|---|
| Hello. | Halo. | Netral, umum |
| Good morning. | Selamat pagi. | Sapaan pada pagi hari |
| Nice to meet you. | Senang bertemu denganmu. | Biasanya saat pertama berkenalan |

**Dialog:** “Hello, I’m Ana.” — “Hi, Ana. I’m Budi. Nice to meet you.” — “Nice to meet you, too.”

**Latihan terbimbing:** baca dialog perlahan, lalu ucapkan nama sendiri dan eja nama itu satu huruf demi satu huruf.

**Kesalahan umum:** mengucapkan *name* seperti “na-me” dengan dua suku kata. Dengarkan contoh audio model, tirukan, lalu periksa apakah lawan bicara dapat memahami nama yang dieja.

**Cek mandiri:** tutup dialog, lalu sapa seseorang dan perkenalkan nama.`,
    },
    {
      title: "Vowels, consonants, and clear speech",
      minutes: 15,
      audioText: "This is a book. The book is on the desk.",
      listening: {
        question: "Where is the book?",
        options: ["In the bag", "On the desk", "Under the chair"],
        answer: 1,
        explanation: "The second sentence says that the book is on the desk.",
      },
      content: `# Vowels, consonants, and clear speech

**Tujuan:** mengenali bunyi vokal dan konsonan, serta berbicara dengan jelas tanpa mengandalkan ejaan Bahasa Indonesia.

Vokal bahasa Inggris memiliki beberapa bunyi yang tidak selalu dapat dipetakan ke lima huruf vokal Indonesia. Bunyi pada *ship* dan *sheep*, misalnya, berbeda panjang dan kualitasnya. Konsonan akhir juga penting: *cap* dan *cab* berbeda pada bunyi terakhir. Variasi aksen itu wajar; sasaran awal adalah kejelasan, bukan meniru satu aksen secara sempurna.

**Latihan mulut:** ucapkan *ship — sheep*, lalu *cap — cab*. Rasakan perbedaan bunyi, bukan hanya melihat huruf. Rekam suara sendiri hanya jika nyaman dan perangkat mendukung; dengarkan untuk mengecek apakah bunyi akhir terdengar.

**Ungkapan kontekstual:** “This is a book.” (Ini sebuah buku.) Kata *this* menunjuk sesuatu yang dekat. “The book is on the desk.” (Buku itu ada di atas meja.) *On* menunjukkan posisi.

**Kesalahan umum:** menambahkan vokal setelah konsonan akhir, misalnya *desk* menjadi “des-ke”. Cobalah menahan bunyi terakhir tanpa menambah suku kata.

**Latihan mandiri:** ucapkan *book, bag, desk,* dan *pen* dalam kalimat pendek. Nilai diri sendiri berdasarkan kejelasan bunyi akhir.`,
    },
    {
      title: "Greetings, pronouns, and classroom English",
      minutes: 15,
      audioText: "I am a student. You are my friend. We are in class.",
      listening: {
        question: "Where are the speakers?",
        options: ["At home", "In class", "At a cafe"],
        answer: 1,
        explanation: "The speakers say, “We are in class.”",
      },
      content: `# Greetings, pronouns, and classroom English

**Tujuan:** memilih kata ganti subjek dan menggunakan ungkapan sederhana ketika belajar atau meminta bantuan.

Kata ganti subjek menggantikan nama orang atau benda yang melakukan/menjadi topik kalimat: **I** (saya), **you** (kamu/Anda), **he** (dia laki-laki), **she** (dia perempuan), **it** (benda/hewan), **we** (kami/kita), **they** (mereka). Dalam bahasa Inggris, subjek biasanya tetap disebut.

| English | Indonesia |
|---|---|
| I am a student. | Saya seorang pelajar. |
| She is my teacher. | Dia guru saya. |
| They are in class. | Mereka berada di kelas. |

Dalam percakapan, *I am* sering menjadi *I’m*, *she is* menjadi *she’s*, dan *they are* menjadi *they’re*. Bentuk lengkap lebih mudah dipelajari dahulu; bentuk singkat lazim dalam percakapan.

**Classroom English:** “Could you repeat that, please?” (Bisakah Anda mengulanginya?) dan “I don’t understand.” (Saya belum paham.) Meminta pengulangan adalah strategi komunikasi yang baik.

**Latihan terbimbing:** ganti nama dalam “Rina is my friend” dengan *she*: “She is my friend.”

**Cek mandiri:** buat tiga kalimat memakai *I, he/she,* dan *they*.`,
    },
  ]),
  chapter(2, "Introducing Yourself", "Menyampaikan identitas dan informasi pribadi dengan be, possessive adjectives, dan pertanyaan dasar.", [
    {
      title: "Verb to be: affirmative and negative",
      minutes: 15,
      audioText: "I am from Bandung. He is not a teacher. They are students.",
      listening: {
        question: "Where is the speaker from?",
        options: ["Bandung", "Bali", "Jakarta"],
        answer: 0,
        explanation: "The speaker says, “I am from Bandung.”",
      },
      content: `# Verb to be: affirmative and negative

**Tujuan:** menyatakan nama, asal, pekerjaan, dan status secara afirmatif maupun negatif.

Gunakan **am** dengan *I*, **is** dengan *he/she/it* atau satu nama, dan **are** dengan *you/we/they*. Pola dasar: **Subject + be + information**.

| Afirmatif | Negatif |
|---|---|
| I am from Bandung. | I am not from Bandung. |
| He is a teacher. | He is not a teacher. |
| We are ready. | We are not ready. |

Artinya: “Saya dari Bandung”; “Dia bukan guru”; “Kami siap/tidak siap.” *Be* menghubungkan subjek dengan identitas, keadaan, atau lokasi. Dalam percakapan, bentuk kontraksi umum: *isn’t, aren’t,* dan *I’m not*.

**Kesalahan umum:** “I from Bandung” menghilangkan kata kerja. Dalam kalimat bahasa Inggris standar, gunakan *I am from Bandung*. Jangan gunakan *do* untuk menegasikan *be*: “She isn’t tired,” bukan “She doesn’t be tired.”

**Latihan terbimbing:** ubah “They are at home” menjadi negatif: “They are not at home.”

**Latihan mandiri:** tulis satu kalimat tentang asal, pekerjaan/status, dan keadaanmu hari ini.`,
    },
    {
      title: "Questions with be and personal information",
      minutes: 15,
      audioText: "Are you from Indonesia? Yes, I am. What is your job?",
      content: `# Questions with be and personal information

**Tujuan:** menanyakan dan menjawab informasi pribadi dengan sopan.

Untuk pertanyaan ya/tidak, pindahkan *be* ke depan subjek: **Are you ready?** Untuk pertanyaan informasi, gunakan kata tanya + *be*: **What is your name? Where are you from?**

| Tanya | Jawab |
|---|---|
| What is your name? | My name is Rani. / I’m Rani. |
| Where are you from? | I’m from Indonesia. |
| Are you a student? | Yes, I am. / No, I’m not. |

Jawaban singkat mengulang *be* yang sesuai. Hindari *Yes, I do* untuk pertanyaan “Are you…?” karena kata kerja bantu yang digunakan adalah *be*.

**Dialog:** “Where are you from?” — “I’m from Surabaya. How about you?” — “I’m from Bandung.”

**Kesopanan:** pertanyaan nama atau pekerjaan biasanya wajar dalam perkenalan, tetapi sesuaikan dengan situasi dan jangan merasa wajib membagikan informasi pribadi.

**Latihan terbimbing:** susun “you / are / where / from?” menjadi “Where are you from?”

**Cek mandiri:** ajukan dua pertanyaan dan jawab seolah berbicara dengan teman baru.`,
    },
    {
      title: "Possessive adjectives and a short introduction",
      minutes: 15,
      audioText: "My name is Dita. Her brother is a chef. Their home is in Bali.",
      content: `# Possessive adjectives and a short introduction

**Tujuan:** menjelaskan kepemilikan dan menyusun perkenalan singkat.

Possessive adjective diletakkan sebelum kata benda: **my** (milik saya), **your** (milikmu/Anda), **his** (milik dia laki-laki), **her** (milik dia perempuan), **its** (milik benda/hewan), **our** (milik kami/kita), **their** (milik mereka). Bentuk ini tidak berdiri sendiri: katakan *my name*, bukan hanya *my*.

**Contoh:** “My name is Dita.” (Nama saya Dita.) “Her brother is a chef.” (Saudara laki-lakinya seorang koki.) “Their home is in Bali.” (Rumah mereka di Bali.)

**Perhatikan:** *his/her* mengikuti pemilik, bukan benda yang dimiliki. *Your* dapat berarti milik satu atau beberapa orang. Jangan tertukar antara *he* (subjek) dan *his* (kepemilikan).

**Model profil:** “Hi, I’m Dita. I’m from Bali. I’m a student. My hobby is cooking.” Gunakan informasi yang nyaman dibagikan.

**Latihan:** lengkapi “I’m Rudi. ___ sister is a nurse.” Jawaban: *My*.

**Tugas mandiri:** tulis 4–5 kalimat perkenalan menggunakan *I am*, asal/status, satu kesukaan, dan satu possessive adjective. Baca keras-keras untuk latihan berbicara.`,
    },
  ]),
  chapter(3, "Everyday Vocabulary", "Menggunakan angka, waktu, benda, articles, plural, dan demonstratives dalam situasi sehari-hari.", [
    {
      title: "Numbers, dates, days, and time",
      minutes: 15,
      audioText: "It is half past seven. The meeting is on Monday, June tenth.",
      content: `# Numbers, dates, days, and time

**Tujuan:** menyebut angka umum, hari, tanggal, dan jam.

Bedakan *thirteen* dan *thirty*, atau *fourteen* dan *forty*. Tekanan kata membantu: angka belasan umumnya bertekanan pada suku kata kedua (*thirTEEN*), sedangkan puluhan pada suku kata pertama (*THIRty*). Dengarkan audio model dan ulangi dalam pasangan.

Hari ditulis dengan huruf kapital: *Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday*. Gunakan **on** untuk hari/tanggal: *on Monday*, *on June 10th*. Untuk jam, pola umum: **It’s seven o’clock** (jam tujuh tepat), **half past seven** (setengah delapan), atau **seven thirty**.

**Dialog:** “What time is it?” — “It’s half past seven.” — “When is the meeting?” — “On Monday.”

Format tanggal dapat berbeda antarnegara. Sebutkan bulan dengan kata untuk menghindari kebingungan antara format angka British dan American.

**Latihan mandiri:** ucapkan tiga waktu kegiatan harianmu dan satu jadwal dengan hari.`,
    },
    {
      title: "Objects, colors, and singular or plural nouns",
      minutes: 15,
      audioText: "This is a red bag. Those are two blue books.",
      content: `# Objects, colors, and singular or plural nouns

**Tujuan:** mendeskripsikan benda dan membedakan kata benda tunggal dengan jamak.

Kata benda terhitung tunggal biasanya memerlukan penentu: **a bag**, **the book**, atau **my pen**. Bentuk jamak umum menambah **-s** (*book → books*), tetapi beberapa kata berubah (*box → boxes; baby → babies*). Bentuk tidak beraturan termasuk *child → children*. Pelajari pengecualian yang sering ditemui.

Warna dan kata sifat dasar: *red* (merah), *blue* (biru), *small* (kecil), *new* (baru). Kata sifat biasanya mendahului kata benda: **a red bag**, bukan *a bag red*.

**Contoh:** “This is a red bag.” (Ini sebuah tas merah.) “Those are two blue books.” (Itu dua buku biru.) Angka lebih dari satu biasanya diikuti kata benda jamak.

**Kesalahan umum:** menambah *-s* setelah *two*? Justru bentuk jamak dibutuhkan: *two books*. Namun, setelah *one* gunakan tunggal: *one book*.

**Latihan:** deskripsikan benda di sekitarmu dengan satu warna dan satu ukuran. Periksa jumlah bendanya sebelum memilih bentuk tunggal/jamak.`,
    },
    {
      title: "Articles and demonstratives",
      minutes: 15,
      audioText: "This is an apple. That is the door. These are my keys.",
      content: `# Articles and demonstratives

**Tujuan:** memilih *a/an/the* dan menunjuk benda dekat atau jauh.

Gunakan **a/an** untuk satu benda terhitung yang belum spesifik: *a book*, *an apple*. Pilihan *a* atau *an* mengikuti **bunyi awal**, bukan semata-mata huruf: *an hour* tetapi *a university*. Gunakan **the** saat benda tertentu diketahui bersama atau sudah disebut.

**This/these** menunjuk benda dekat; **that/those** benda yang lebih jauh. Pasangkan *this/that* dengan tunggal dan *these/those* dengan jamak.

| Dekat | Jauh |
|---|---|
| This is a key. (Ini sebuah kunci.) | That is the door. (Itu pintunya.) |
| These are my keys. (Ini kunci-kunciku.) | Those are your bags. (Itu tas-tasmu.) |

**Dialog:** “What is this?” — “It’s an orange.” — “And what are those?” — “They’re books.”

**Kesalahan umum:** memakai *these is*; *these* memerlukan kata kerja jamak *are*. Artikel umumnya tidak dipakai sebelum kata benda jamak umum: *Books are useful*.

**Cek mandiri:** pilih tiga benda dekat dan jauh, lalu sebutkan dengan demonstrative, artikel, dan bentuk jumlah yang benar.`,
    },
  ]),
  chapter(4, "Daily Routines", "Menceritakan kebiasaan menggunakan simple present, do/does, dan adverbs of frequency.", [
    {
      title: "Simple present for routines",
      minutes: 15,
      audioText: "I wake up at six. My sister works at a hospital.",
      content: `# Simple present for routines

**Tujuan:** menceritakan rutinitas dan kebiasaan yang berulang.

Simple present digunakan untuk kebiasaan, fakta umum, dan jadwal, bukan khusus untuk sesuatu yang sedang terjadi saat ini. Pola afirmatif: **I/you/we/they + base verb**; **he/she/it + verb-s/-es**.

| Subjek | Contoh |
|---|---|
| I/We | I wake up at six. (Saya bangun pukul enam.) |
| He/She | She works at a hospital. (Dia bekerja di rumah sakit.) |

Umumnya tambahkan *-s* (*read → reads*), *-es* setelah bunyi tertentu (*watch → watches*), dan *y → ies* setelah konsonan (*study → studies*). Ada bentuk khusus seperti *have → has*.

**Kesalahan umum:** “She work every day.” Untuk *she*, gunakan *works*. Jangan gunakan present continuous hanya karena kalimat menyebut “today”; pilih berdasarkan apakah itu rutinitas atau kegiatan yang sedang berlangsung.

**Latihan terbimbing:** perbaiki “My brother go to school.” → “My brother goes to school.”

**Latihan mandiri:** tulis empat kegiatan rutin, dua dengan *I* dan dua dengan *he/she*.`,
    },
    {
      title: "Do/does, negatives, and questions",
      minutes: 15,
      audioText: "Do you have breakfast at home? She does not drink coffee.",
      content: `# Do/does, negatives, and questions

**Tujuan:** menanyakan rutinitas dan menyatakan tidak melakukan sesuatu.

Untuk kata kerja biasa, bentuk negatif memakai **do not/don’t** dengan *I/you/we/they* dan **does not/doesn’t** dengan *he/she/it*. Setelah *does*, kata kerja kembali ke bentuk dasar: *doesn’t work*, bukan *doesn’t works*.

Pertanyaan ya/tidak: **Do + I/you/we/they + base verb?** atau **Does + he/she/it + base verb?** Contoh: “Do you have breakfast at home?” “Does she drink coffee?”

**Jawaban singkat:** “Yes, I do.” / “No, I don’t.”; “Yes, she does.” / “No, she doesn’t.” Kata bantu cocok dengan subjek.

**Dialog:** “Do you walk to work?” — “No, I don’t. I take the bus.” — “Does your sister take the bus too?” — “Yes, she does.”

**Kesalahan umum:** “Does he likes tea?” Bentuk tepat: “Does he like tea?” *Does* sudah membawa penanda orang ketiga.

**Latihan:** ubah “They study at night” menjadi negatif dan pertanyaan.`,
    },
    {
      title: "Frequency, time, and a routine paragraph",
      minutes: 15,
      audioText: "I usually have lunch at noon, but I sometimes eat later.",
      content: `# Frequency, time, and a routine paragraph

**Tujuan:** menjelaskan seberapa sering kegiatan dilakukan dan menghubungkan rutinitas dalam paragraf.

Adverbs of frequency antara lain **always, usually, often, sometimes, rarely, never**. Letakkan biasanya sebelum kata kerja utama: *I usually walk*. Dengan *be*, letakkan sesudahnya: *She is often busy*. Kata-kata ini menunjukkan kebiasaan secara umum, bukan persentase pasti.

**Konteks:** “I usually have lunch at noon, but I sometimes eat later.” Artinya, biasanya makan siang tengah hari, tetapi kadang lebih lambat. *But* menunjukkan kontras.

Gunakan jam: *at six o’clock*, *at noon*. Kata *every* memberi frekuensi: *every day*, *every weekend*. Jangan tambahkan preposisi sebelum *every*: bukan *at every day*.

**Model paragraf:** “I usually wake up at six. I have breakfast at home. I take the bus to work. In the evening, I sometimes read.”

**Latihan mandiri:** tulis lima kalimat rutinitas dengan sedikitnya dua adverbia frekuensi dan satu waktu. Baca keras-keras dan cek posisi adverbia.`,
    },
  ]),
  chapter(5, "Places & Directions", "Menanyakan lokasi, menyatakan keberadaan, dan memahami arah sederhana di sekitar kota.", [
    {
      title: "There is/are and places around town",
      minutes: 15,
      audioText: "There is a bank next to the station. There are two cafes on this street.",
      listening: {
        question: "Where is the bank?",
        options: ["Next to the station", "Across from the library", "Behind the cafe"],
        answer: 0,
        explanation: "The sentence says the bank is next to the station.",
      },
      content: `# There is/are and places around town

**Tujuan:** menyatakan bahwa sesuatu ada dan menyebut tempat umum.

Gunakan **there is** untuk satu benda atau kata benda tak terhitung, dan **there are** untuk jamak: *There is a bank.* *There are two cafes.* Bentuk negatifnya *there isn’t/there aren’t*; pertanyaannya *Is there…? / Are there…?*

Tempat umum: *bank* (bank), *station* (stasiun), *pharmacy* (apotek), *library* (perpustakaan), *market* (pasar), *cafe* (kafe).

**Dialog:** “Is there a pharmacy near here?” — “Yes, there is. It’s on Green Street.” Jawaban singkat mengulang bentuk *be*.

**Kesalahan umum:** “There have a bank” untuk menyatakan keberadaan. Gunakan *there is*. Sesuaikan *is/are* dengan kata benda setelahnya, bukan dengan lokasi.

**Latihan terbimbing:** “___ two bus stops near my home.” → “There are two bus stops near my home.”

**Latihan mandiri:** jelaskan tiga tempat di sekitar rumahmu dengan *there is/are*.`,
    },
    {
      title: "Prepositions of place",
      minutes: 15,
      audioText: "The cafe is across from the bank. The bus stop is in front of the library.",
      content: `# Prepositions of place

**Tujuan:** menjelaskan posisi benda dan tempat secara sederhana.

Preposisi tempat menghubungkan lokasi dengan benda: **in** (di dalam), **on** (di atas/menempel permukaan), **under** (di bawah), **next to** (di sebelah), **between** (di antara dua hal), **in front of** (di depan), **behind** (di belakang), dan **across from** (di seberang).

**Contoh:** “The keys are on the table.” (Kuncinya di atas meja.) “The cafe is across from the bank.” (Kafe itu di seberang bank.) “The bus stop is in front of the library.”

Makna dapat bergantung konteks dan kebiasaan lokal. Gunakan diagram peta kecil atau benda nyata untuk memastikan posisi, bukan menghafalkan terjemahan saja.

**Latihan terbimbing:** bayangkan buku di dalam tas dan tas di bawah meja: “The book is in the bag. The bag is under the table.”

**Kesalahan umum:** memakai *in* untuk semua lokasi. Pilih preposisi yang menggambarkan hubungan ruang yang dimaksud.

**Cek mandiri:** gambarkan tiga benda di meja, lalu tulis tiga kalimat dengan preposisi berbeda.`,
    },
    {
      title: "Asking for and giving directions",
      minutes: 15,
      audioText: "Go straight. Turn left at the traffic light. The museum is on your right.",
      content: `# Asking for and giving directions

**Tujuan:** meminta petunjuk dengan sopan dan mengikuti instruksi dasar.

Ungkapan sopan: **Excuse me, how do I get to the museum?** (Permisi, bagaimana cara menuju museum?) atau **Is it far from here?** (Apakah jauh dari sini?) Instruksi sering memakai imperative, yaitu kata kerja dasar tanpa subjek: *Go straight. Turn left. Cross the street.*

**Dialog:** “Excuse me, where is the station?” — “Go straight and turn right at the bank. It’s next to the hotel.” — “Thank you.” — “You’re welcome.”

Kosakata: *turn left/right* (belok kiri/kanan), *go straight* (terus lurus), *cross* (menyeberang), *traffic light* (lampu lalu lintas), *corner* (sudut).

**Keselamatan:** petunjuk pada latihan hanyalah contoh. Saat bepergian, cocokkan dengan peta dan kondisi nyata.

**Latihan terbimbing:** jelaskan rute dari pintu ke meja memakai *go straight* dan satu preposisi.

**Latihan mandiri:** tulis tiga instruksi dari halte ke tempat umum imajiner. Periksa urutan langkahnya.`,
    },
  ]),
  chapter(6, "Food, Shopping & Money", "Memesan makanan dan membeli barang dengan jumlah, harga, dan permintaan sopan.", [
    {
      title: "Food words and countable or uncountable nouns",
      minutes: 15,
      audioText: "We need two apples and some rice. Is there any milk?",
      listening: {
        question: "What food do they need?",
        options: ["Two apples and some rice", "Three oranges and bread", "Some milk and two eggs"],
        answer: 0,
        explanation: "The speaker says they need two apples and some rice.",
      },
      content: `# Food words and countable or uncountable nouns

**Tujuan:** menyebut makanan dan membedakan kata benda terhitung dari tak terhitung.

Kata benda terhitung punya bentuk tunggal/jamak: *an apple, two apples, an egg*. Kata benda tak terhitung biasanya tidak memakai angka langsung atau bentuk jamak: *rice, water, bread, milk*. Untuk menghitungnya gunakan wadah/satuan: *a glass of water*, *two slices of bread*.

**Some** lazim untuk jumlah tidak spesifik dalam kalimat afirmatif: *We need some rice.* **Any** umum dalam pertanyaan/negatif: *Is there any milk?* *We don’t have any eggs.* Pemakaian bisa bervariasi pada tawaran/permintaan, jadi konteks tetap penting.

**Dialog:** “What do we need?” — “Two apples and some rice.” — “Do we have any milk?” — “No, we don’t.”

**Kesalahan umum:** *two breads* untuk dua potong roti. Lebih alami: *two slices of bread*.

**Latihan:** buat daftar belanja dengan dua benda terhitung dan dua tak terhitung.`,
    },
    {
      title: "Some, any, much, and many",
      minutes: 15,
      audioText: "How many oranges do we need? How much water is in the bottle?",
      content: `# Some, any, much, and many

**Tujuan:** bertanya dan berbicara tentang jumlah makanan.

Gunakan **many** dengan kata benda jamak terhitung (*many apples*) dan **much** dengan kata benda tak terhitung (*much water*). Dalam pertanyaan sehari-hari, **How much…?** menanyakan jumlah tak terhitung atau harga; **How many…?** menanyakan hitungan.

**Contoh:** “How many oranges do we need?” — “We need three.” “How much water is in the bottle?” — “A little.” Untuk bentuk afirmatif kasual, *a lot of* dapat digunakan dengan keduanya: *a lot of apples/water*.

Gunakan **some** untuk jumlah tidak spesifik afirmatif; **any** sering muncul pada pertanyaan/negatif. *A few* berarti beberapa (terhitung), sedangkan *a little* berarti sedikit (tak terhitung).

**Kesalahan umum:** “How many water?” Katakan “How much water?” karena *water* tak terhitung.

**Latihan terbimbing:** pilih *much/many*: “How ___ cups of tea?” → *many*.

**Mandiri:** tulis tiga pertanyaan tentang jumlah barang di dapur dan jawab dengan jumlah wajar.`,
    },
    {
      title: "Prices and polite requests",
      minutes: 15,
      audioText: "How much is this sandwich? Could I have a bottle of water, please?",
      content: `# Prices and polite requests

**Tujuan:** menanyakan harga dan memesan barang dengan sopan.

Tanyakan harga tunggal: **How much is this sandwich?** Untuk beberapa barang: **How much are these apples?** Jawab dengan mata uang yang jelas, misalnya *It’s fifty thousand rupiah*. Harga dan cara menyebut desimal bergantung mata uang.

**Can I have…?** dan **Could I have…?** dipakai untuk meminta sesuatu. *Could* terdengar lebih sopan/formal dalam banyak konteks, tetapi *can* juga wajar dalam percakapan. Tambahkan *please* untuk kesopanan.

**Dialog:** “Could I have a bottle of water, please?” — “Sure. Anything else?” — “No, thank you. How much is it?” — “Ten thousand rupiah.”

**Kesalahan umum:** memakai *How many is it?* untuk harga. Tanyakan *How much is it?*

**Simulasi:** pilih dua barang dari menu buatanmu, tanyakan harga, lalu hitung total dengan teliti. Ini latihan bahasa, bukan panduan harga aktual.

**Tugas mandiri:** tulis dialog 4 baris antara pembeli dan penjual dengan satu permintaan, satu pertanyaan harga, dan ucapan terima kasih.`,
    },
  ]),
  chapter(7, "Present Activities", "Membedakan kegiatan yang berlangsung sekarang dengan rutinitas serta mendeskripsikan tindakan.", [
    {
      title: "Present continuous for actions now",
      minutes: 15,
      audioText: "Look. The children are playing football now.",
      listening: {
        question: "What are the children doing?",
        options: ["Reading a book", "Playing football", "Taking the bus"],
        answer: 1,
        explanation: "The speaker says the children are playing football.",
      },
      content: `# Present continuous for actions now

**Tujuan:** menjelaskan kegiatan yang sedang terjadi atau berlangsung sementara.

Pola: **subject + am/is/are + verb-ing**. Contoh: “I am reading now.” (Saya sedang membaca sekarang.) “They are playing football in the park.” (Mereka sedang bermain sepak bola di taman.)

Tambahkan *-ing* umumnya (*read → reading*); hilangkan *e* akhir (*write → writing*); beberapa kata pendek menggandakan konsonan akhir (*run → running*). Ejaan memiliki pengecualian.

Negatif: *She isn’t sleeping.* Pertanyaan: *Are they waiting?* Jangan hilangkan *be*: “He is working,” bukan “He working.”

Keterangan *now, at the moment,* dan *today* dapat membantu, tetapi makna konteks yang menentukan. *Today* juga bisa menyatakan rutinitas khusus hari ini.

**Latihan:** ubah “We watch a film” menjadi kegiatan saat ini: “We are watching a film.”

**Mandiri:** amati gambar atau bayangkan suasana kelas; tulis tiga kalimat tentang tindakan yang sedang berlangsung.`,
    },
    {
      title: "Simple present or present continuous?",
      minutes: 15,
      audioText: "She usually walks to work, but today she is taking the bus.",
      content: `# Simple present or present continuous?

**Tujuan:** memilih tense berdasarkan apakah informasi berupa kebiasaan atau tindakan sementara/saat ini.

**Simple present** umumnya menyatakan kebiasaan atau fakta: *She walks to work every day.* **Present continuous** umumnya menyatakan tindakan sekarang atau situasi sementara: *She is taking the bus today.*

Kata waktu memberi petunjuk, bukan aturan mekanis. “I work from home this week” dapat berarti situasi sementara, sedangkan “I work from home every Friday” adalah rutinitas.

**Dialog:** “Why are you walking?” — “My bike isn’t working today. I usually ride it.”

**Common mistake:** “I am go to school every day.” Untuk rutinitas, katakan “I go to school every day.” Jangan gunakan *am* sebelum kata kerja bentuk dasar.

**Latihan terbimbing:** pilih bentuk: “Listen! The baby (cries/is crying).” → *is crying*, karena sedang berlangsung sekarang.

**Latihan mandiri:** tulis dua rutinitas dan dua hal yang sedang kamu lakukan/terjadi minggu ini. Jelaskan alasan pilihan tense.`,
    },
    {
      title: "Clothes, appearance, and describing a scene",
      minutes: 15,
      audioText: "The woman is wearing a blue jacket. She is talking to her friend.",
      content: `# Clothes, appearance, and describing a scene

**Tujuan:** memakai kosakata pakaian dan membangun deskripsi singkat.

Kosakata: *shirt* (kemeja/kaus), *jacket* (jaket), *shoes* (sepatu), *dress* (gaun), *trousers/pants* (celana; variasi British/American), *wear* (mengenakan). “She is wearing a blue jacket” berarti dia sedang mengenakan jaket biru.

Gunakan present continuous untuk aksi pada gambar: “A man is carrying a bag.” Gunakan *be + adjective* untuk keadaan: “The jacket is blue.” Kedua pola punya fungsi berbeda.

**Bandingkan:** “He wears glasses” dapat menyatakan ciri/kebiasaan umum; “He is wearing a hat” menggambarkan pakaian yang dikenakan sekarang.

**Kesopanan:** deskripsikan ciri yang relevan dan netral. Hindari membuat asumsi tentang identitas atau karakter dari penampilan.

**Latihan:** lihat ilustrasi, foto milik sendiri, atau bayangkan adegan; buat tiga kalimat tentang pakaian dan tindakan.

**Review:** tandai mana kalimat rutinitas dan mana aksi sekarang. Periksa subjek *he/she* serta bentuk *be*.`,
    },
  ]),
  chapter(8, "A1 Practical Communication", "Mengintegrasikan ungkapan dasar dalam perkenalan, bantuan, membaca pesan, dan menulis profil.", [
    {
      title: "Introductions and asking for help",
      minutes: 15,
      audioText: "Hi, I am Sari. Could you help me, please? I do not understand this question.",
      content: `# Introductions and asking for help

**Tujuan:** menggabungkan perkenalan dengan ungkapan meminta bantuan.

**Dialog:** “Hello, I’m Sari. I’m from Jakarta. I’m a student.” — “Nice to meet you, Sari.” — “Nice to meet you, too.”

Jika tidak memahami: **Could you help me, please?** (Bisakah Anda membantu saya?) **Could you repeat that, please?** (Bisakah Anda mengulanginya?) **What does ___ mean?** (Apa arti ___?) Ungkapan ini memberi cara memperbaiki percakapan tanpa harus mengetahui semua kata.

**Perhatikan:** gunakan *I am* untuk identitas/keadaan, *I have* untuk kepemilikan, dan *I like* untuk kesukaan: *I am a student. I have a sister. I like music.*

**Latihan terbimbing:** lengkapi perkenalan dengan nama, kota, dan satu kesukaan. Jangan bagikan detail sensitif.

**Role-play mandiri:** perankan bertemu teman baru lalu tanyakan arti satu kata. Nilai apakah lawan bicara dapat mengikuti pesanmu; tidak perlu aksen tertentu.`,
    },
    {
      title: "Reading short messages for meaning",
      minutes: 15,
      audioText: "Hi Rina. The English club meets at four on Friday in Room 2. Bring your notebook. See you there!",
      listening: {
        question: "When does the English club meet?",
        options: ["At four on Friday", "At two on Monday", "At four on Tuesday"],
        answer: 0,
        explanation: "The message says the club meets at four on Friday.",
      },
      content: `# Reading short messages for meaning

**Tujuan:** menemukan topik, waktu, tempat, dan instruksi sederhana dalam pesan.

**Pesan:** “Hi Rina. The English club meets at four on Friday in Room 2. Bring your notebook. See you there!”

**Strategi:** (1) baca sekali untuk memahami topik; (2) cari kata kunci untuk detail; (3) cocokkan kata ganti seperti *there* dengan tempat yang telah disebut. *Meets* berarti berkumpul; *bring* adalah instruksi “bawa”.

**Pertanyaan:** Apa acaranya? (English club.) Kapan? (Friday at four.) Di mana? (Room 2.) Apa yang dibawa? (A notebook.) Jawaban ditemukan langsung dalam pesan; jangan menebak detail yang tidak tertulis.

Vocabulary: *meet* (bertemu/berkumpul), *room* (ruangan), *bring* (membawa), *see you* (sampai bertemu).

**Latihan terbimbing:** tutup paragraf, sebutkan empat detail dari ingatan, lalu buka lagi dan cek.

**Mandiri:** minta teman membuat pesan 2–3 kalimat, atau buat pesan sendiri tentang jadwal; tandai waktu, tempat, dan tindakan.`,
    },
    {
      title: "Write and say a personal profile",
      minutes: 15,
      audioText: "Hello, my name is Arif. I live in Yogyakarta. I study English and enjoy cooking.",
      content: `# Write and say a personal profile

**Tujuan:** menulis dan menyampaikan profil pendek dengan kalimat yang mudah dipahami.

Gunakan urutan sederhana: salam dan nama; kota/asal bila nyaman; pekerjaan atau kegiatan; kesukaan; penutup. Model: “Hello, my name is Arif. I live in Yogyakarta. I study English and enjoy cooking. Nice to meet you.”

**Checklist menulis:** setiap kalimat punya subjek dan kata kerja; *be* cocok dengan subjek; kata benda tunggal terhitung memakai penentu; ejaan nama dan kota benar. Tulis 4–6 kalimat pendek sebelum mencoba menggabungkannya.

**Checklist berbicara:** bicara dalam frasa pendek; berhenti sejenak antaride; ulangi atau eja nama jika diminta. Fluency pemula berarti pesan tersampaikan, bukan bicara cepat.

**Latihan mandiri:** buat profil sendiri. Baca keras-keras, lalu edit satu hal: kata kerja, artikel, plural, atau pengucapan bunyi akhir.

**Refleksi:** tulis satu hal yang sudah bisa kamu ungkapkan, satu ungkapan bantuan yang bisa digunakan, dan satu topik A1 yang perlu diulang.`,
    },
  ]),
];
