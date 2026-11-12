import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";

export const qe = (
  id: string,
  concept: string,
  prompt: string,
  options: string[],
  answerIndex: number,
  correctReason: string,
  distractorReasons: string[],
): AssessmentQuestion => {
  let distractorIndex = 0;
  const distractors = options
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
    explanation: `Jawaban benar: ${options[answerIndex]}. ${correctReason} Pengecoh: ${distractors}`,
  };
};

export const ENGLISH_A1_V2_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "eng-a1-1": [
    qe(
      "eng-a1-1-q01",
      "Pronunciation • Initial sound",
      "Which word begins with the same sound as “cat”?",
      ["city", "ship", "kite", "hour"],
      2,
      "Kite memiliki bunyi awal yang sama dengan cat.",
      [
        "City memiliki bunyi awal yang berbeda.",
        "Ship memiliki bunyi awal yang berbeda.",
        "Hour diawali bunyi vokal karena huruf h tidak diucapkan.",
      ],
    ),
    qe(
      "eng-a1-1-q02",
      "Pronunciation • Syllables",
      "How many syllables are in “banana”?",
      ["3 syllables", "2 syllables", "4 syllables", "1 syllable"],
      0,
      "Banana diucapkan dalam tiga suku kata: ba-na-na.",
      [
        "Dua suku kata menghilangkan satu bagian ucapan banana.",
        "Empat suku kata menghitung satu bagian terlalu banyak.",
        "Satu suku kata menggabungkan ketiga bagian ucapan.",
      ],
    ),
    qe(
      "eng-a1-1-q03",
      "Grammar • Subject pronouns",
      "Budi and Rina are students. ___ are in my class.",
      ["We", "He", "It", "They"],
      3,
      "They menggantikan dua orang yang tidak termasuk pembicara.",
      [
        "We mencakup pembicara, sedangkan Budi dan Rina tidak mencakup pembicara.",
        "He merujuk pada satu laki-laki, bukan dua siswa.",
        "It dipakai untuk satu benda atau hewan, bukan dua orang.",
      ],
    ),
    qe(
      "eng-a1-1-q04",
      "Classroom English • Polite requests",
      "How can you politely ask your teacher to repeat something?",
      ["Say that one more time right now.", "Could you say that again, please?", "You need to say those words again.", "What words did you say just now?"],
      1,
      "Could you say that again, please? adalah permintaan sopan untuk mengulang.",
      [
        "Kalimat ini terdengar seperti perintah langsung, bukan permintaan sopan.",
        "Kalimat ini menyuruh guru dan terdengar terlalu tegas.",
        "Pertanyaan ini tidak memakai bentuk permintaan yang sopan.",
      ],
    ),
    qe(
      "eng-a1-1-q05",
      "Spelling • Names",
      "How do you spell “Rina”?",
      ["R-E-N-A", "R-I-N-E", "R-I-N-A", "A-N-I-R"],
      2,
      "Ejaan Rina terdiri dari huruf R, I, N, dan A, secara berurutan.",
      [
        "Pilihan ini mengganti huruf kedua dari I menjadi E.",
        "Pilihan ini mengganti huruf terakhir dari A menjadi E.",
        "Pilihan ini menempatkan huruf dalam urutan yang salah.",
      ],
    ),
    qe(
      "eng-a1-1-q06",
      "Pronunciation • Final sounds",
      "Which pair differs in its final consonant sound?",
      ["cap / cab", "cat / hat", "big / bag", "sit / seat"],
      0,
      "Cap dan cab berbeda pada bunyi konsonan akhirnya.",
      [
        "Cat dan hat berbeda pada bunyi awal, bukan pada bunyi akhir.",
        "Big dan bag berbeda pada bunyi vokal tengah, bukan pada bunyi akhir.",
        "Sit dan seat berbeda pada bunyi vokal tengah, bukan pada bunyi akhir.",
      ],
    ),
    qe(
      "eng-a1-1-q07",
      "Greetings • Responses",
      "Someone asks, “How are you?” What is a natural answer?",
      ["Nice to meet you. I am a student.", "I'm fine, thank you. And you?", "My name is Ana. I am from Bali.", "I'm from Jakarta. I am a student."],
      1,
      "I'm fine, thank you. And you? menjawab pertanyaan dan menanyakannya kembali dengan sopan.",
      [
        "Ini respons untuk perkenalan, bukan jawaban atas 'How are you?'.",
        "Ini menyebut nama dan asal, bukan kabar atau perasaan.",
        "Ini menyebut asal dan status, bukan kabar atau perasaan.",
      ],
    ),
    qe(
      "eng-a1-1-q08",
      "Classroom English • Instructions",
      "The teacher says, “Open your book to page ten.” What should you do?",
      ["Close your book and go to page ten.", "Write the number ten on your page.", "Say, 'Page ten,' and wait for help.", "Open the book and find page ten."],
      3,
      "Instruksi meminta kamu membuka buku dan mencari halaman sepuluh.",
      [
        "Menutup buku bertentangan dengan instruksi.",
        "Menulis angka tidak mengikuti instruksi tersebut.",
        "Menyebut angka halaman tidak membuka buku ke halaman itu.",
      ],
    ),
    qe(
      "eng-a1-1-q09",
      "Greetings • Time and context",
      "Which greeting is suitable when you meet someone at night?",
      ["Good evening, my friend.", "Good morning, my friend.", "Good night, my friend.", "See you yesterday, friend."],
      0,
      "Good evening adalah sapaan saat bertemu seseorang pada malam hari.",
      [
        "Good morning dipakai sebagai sapaan pada pagi hari.",
        "Good night umumnya dipakai saat berpisah atau sebelum tidur, bukan saat bertemu.",
        "See you yesterday bukan sapaan yang sesuai.",
      ],
    ),
    qe(
      "eng-a1-1-q10",
      "Reading • Personal information",
      "Read: “Hello, I'm Ana. I'm a student. I'm from Bandung.” Where is Ana from?",
      ["Jakarta", "Surabaya", "Bandung", "A student"],
      2,
      "Teks menyatakan, “I'm from Bandung.”",
      [
        "Jakarta tidak disebut sebagai asal Ana dalam teks.",
        "Surabaya tidak disebut sebagai asal Ana dalam teks.",
        "A student menjelaskan status Ana, bukan asalnya.",
      ],
    ),
  ],
  "eng-a1-2": [
    qe(
      "eng-a1-2-q01",
      "Grammar • Be affirmative",
      "My sister ___ a doctor.",
      ["am", "is", "are", "be"],
      1,
      "My sister adalah subjek orang ketiga tunggal, sehingga memakai is.",
      [
        "Am digunakan dengan subjek I.",
        "Are digunakan dengan you, we, they, atau subjek jamak.",
        "Be adalah bentuk dasar, bukan bentuk yang dipakai setelah subjek ini.",
      ],
    ),
    qe(
      "eng-a1-2-q02",
      "Grammar • Be negative",
      "We ___ late today.",
      ["isn't", "am not", "don't be", "aren't"],
      3,
      "We memakai are; bentuk negatifnya adalah are not atau aren't.",
      [
        "Isn't digunakan dengan he, she, it, atau satu nama.",
        "Am not digunakan dengan I.",
        "Don't be memakai do-support, bukan bentuk negatif be yang sesuai dengan we.",
      ],
    ),
    qe(
      "eng-a1-2-q03",
      "Grammar • Questions with be",
      "___ you from Bali?",
      ["Are", "Is", "Am", "Does"],
      0,
      "You memakai are, dan be ditempatkan sebelum subjek dalam pertanyaan.",
      [
        "Is digunakan dengan he, she, it, atau satu nama.",
        "Am digunakan dengan I.",
        "Does memakai pola do-support, bukan bentuk be yang sesuai dengan you.",
      ],
    ),
    qe(
      "eng-a1-2-q04",
      "Grammar • Short answers",
      "Choose the correct short answer to “Is she a student?”",
      ["Yes, she's.", "Yes, she does.", "Yes, she is.", "Yes, is she."],
      2,
      "Jawaban singkat afirmatif memakai subjek dan bentuk lengkap be: Yes, she is.",
      [
        "She’s tidak digunakan sebagai bentuk akhir jawaban singkat afirmatif.",
        "Does tidak menjawab pertanyaan yang memakai is.",
        "Urutan is she adalah bentuk pertanyaan, bukan jawaban.",
      ],
    ),
    qe(
      "eng-a1-2-q05",
      "Grammar • Be affirmative",
      "Choose the correct sentence.",
      ["I are from Medan.", "I am from Medan.", "I is from Medan.", "I be from Medan."],
      1,
      "Subjek I memakai am, sehingga kalimat yang tepat adalah I am from Medan.",
      [
        "Are tidak digunakan dengan subjek I.",
        "Is tidak digunakan dengan subjek I.",
        "Be adalah bentuk dasar, bukan bentuk yang dipakai dalam kalimat ini.",
      ],
    ),
    qe(
      "eng-a1-2-q06",
      "Vocabulary • Possessive adjectives",
      "Rina is my friend. ___ brother is a teacher.",
      ["Her", "She", "Hers", "Their"],
      0,
      "Rina adalah perempuan; her diletakkan sebelum kata benda brother.",
      [
        "She adalah kata ganti subjek dan tidak diletakkan sebelum kata benda untuk menyatakan milik.",
        "Hers tidak digunakan sebelum kata benda dalam pola ini.",
        "Their merujuk pada beberapa pemilik, bukan Rina seorang.",
      ],
    ),
    qe(
      "eng-a1-2-q07",
      "Personal information • Age",
      "Which question asks about a person's age?",
      ["What old are you?", "How many are you?", "Where old are you?", "How old are you?"],
      3,
      "How old are you? adalah pertanyaan untuk menanyakan umur.",
      [
        "What old bukan susunan pertanyaan yang digunakan untuk umur.",
        "How many menanyakan jumlah benda yang dapat dihitung, bukan umur seseorang.",
        "Where menanyakan tempat, bukan umur.",
      ],
    ),
    qe(
      "eng-a1-2-q08",
      "Vocabulary • Possessive adjectives",
      "This is my friend. ___ name is Budi.",
      ["Her", "Their", "His", "Our"],
      2,
      "His menunjukkan kepemilikan oleh teman laki-laki, Budi.",
      [
        "Her digunakan untuk pemilik perempuan.",
        "Their digunakan untuk beberapa pemilik.",
        "Our menunjukkan kepemilikan kelompok yang mencakup pembicara.",
      ],
    ),
    qe(
      "eng-a1-2-q09",
      "Reading • Personal information",
      "Read: “Hello, my name is Dewi. I am twenty. I am a nurse. My sister is a student. Her name is Sari.” What is Sari's job?",
      ["She is a nurse, too.", "She is a student.", "She is twenty.", "She is a teacher."],
      1,
      "Teks menyebutkan bahwa saudara perempuan Dewi adalah seorang pelajar.",
      [
        "Nurse adalah pekerjaan Dewi, bukan pekerjaan Sari.",
        "Twenty menyebut umur Dewi, bukan pekerjaan Sari.",
        "Teks tidak menyebut Sari sebagai guru.",
      ],
    ),
    qe(
      "eng-a1-2-q10",
      "Personal information • Jobs",
      "Which question asks about a person's job?",
      ["Where are you from?", "How old are you?", "How are you?", "What is your job?"],
      3,
      "What is your job? menanyakan pekerjaan seseorang.",
      [
        "Where are you from? menanyakan asal seseorang.",
        "How old are you? menanyakan umur seseorang.",
        "How are you? menanyakan kabar atau keadaan seseorang.",
      ],
    ),
  ],
  "eng-a1-3": [
    qe(
      "eng-a1-3-q01",
      "Numbers • Spelling",
      "How do you spell the number 40?",
      ["fourty", "forthy", "fourthy", "forty"],
      3,
      "Ejaan angka 40 yang benar adalah forty.",
      [
        "Fourty menambahkan huruf u yang tidak ada pada ejaan forty.",
        "Forthy menghilangkan huruf u dan tidak sesuai dengan ejaan baku.",
        "Fourthy menambahkan h yang tidak digunakan pada ejaan angka ini.",
      ],
    ),
    qe(
      "eng-a1-3-q02",
      "Time • Quarter past",
      "It is a quarter past nine. What time is it?",
      ["08:45", "9:15", "09:45", "09:30"],
      1,
      "A quarter past nine berarti lima belas menit setelah pukul sembilan, yaitu 9:15.",
      [
        "8:45 adalah a quarter to nine, bukan seperempat lewat sembilan.",
        "9:45 adalah a quarter to ten.",
        "9:30 adalah half past nine.",
      ],
    ),
    qe(
      "eng-a1-3-q03",
      "Nouns • Plurals",
      "What is the plural form of “box”?",
      ["boxes", "boxs", "boxies", "boxen"],
      0,
      "Bentuk jamak box pada contoh ini adalah boxes.",
      [
        "Boxs tidak memakai akhiran -es pada kata box.",
        "Boxies memakai perubahan y yang tidak terdapat pada kata box.",
        "Boxen bukan bentuk jamak box yang dipelajari.",
      ],
    ),
    qe(
      "eng-a1-3-q04",
      "Grammar • Articles",
      "She has ___ umbrella.",
      ["a", "these", "an", "those"],
      2,
      "Umbrella diawali bunyi vokal, jadi gunakan an.",
      [
        "A dipakai sebelum bunyi konsonan pada pola ini.",
        "These adalah kata tunjuk jamak, bukan artikel untuk satu umbrella.",
        "Those adalah kata tunjuk jamak, bukan artikel untuk satu umbrella.",
      ],
    ),
    qe(
      "eng-a1-3-q05",
      "Grammar • Demonstratives",
      "Look at the shoes in my hands. ___ are my shoes.",
      ["This", "That", "Those", "These"],
      3,
      "These menunjuk beberapa benda yang dekat, sesuai dengan shoes di tangan pembicara.",
      [
        "This menunjuk satu benda dekat, bukan beberapa sepatu.",
        "That menunjuk satu benda yang lebih jauh.",
        "Those menunjuk beberapa benda yang lebih jauh, bukan yang di tangan.",
      ],
    ),
    qe(
      "eng-a1-3-q06",
      "Nouns • Irregular plurals",
      "What is the plural form of “child”?",
      ["childs", "children", "childes", "childrens"],
      1,
      "Child memiliki bentuk jamak tidak beraturan children.",
      [
        "Childs menambahkan -s, tetapi bentuk jamak yang dipakai adalah children.",
        "Childes menambahkan -es, tetapi bentuk jamak yang dipakai adalah children.",
        "Childrens menambahkan -s pada bentuk children yang sudah jamak.",
      ],
    ),
    qe(
      "eng-a1-3-q07",
      "Time • O'clock",
      "What do you say when the time is 7:00?",
      ["It's seven o'clock.", "It's seven clock right now.", "It's seven hours today.", "It is Monday."],
      0,
      "Untuk jam penuh pukul 7:00, ucapkan It's seven o'clock.",
      [
        "Ungkapan jam penuh memakai o'clock, bukan seven clock.",
        "Seven hours menyebut durasi, bukan cara menyebut jam penuh.",
        "Monday menyebut hari, bukan waktu.",
      ],
    ),
    qe(
      "eng-a1-3-q08",
      "Grammar • Adjectives and plurals",
      "Choose the correct sentence.",
      ["I have two reds bags.", "I have two bags red.", "I have two red bags.", "I have two red bag."],
      2,
      "Kata sifat red berada sebelum kata benda bags dan tidak diberi akhiran jamak.",
      [
        "Kata sifat red tidak ditambah -s pada frasa ini.",
        "Dalam pola ini, kata sifat diletakkan sebelum kata benda.",
        "Dua tas memerlukan bentuk jamak bags.",
      ],
    ),
    qe(
      "eng-a1-3-q09",
      "Days • Sequence",
      "Today is Monday. Tomorrow is ___.",
      ["Sunday", "Tuesday", "Wednesday", "Thursday"],
      1,
      "Hari setelah Monday adalah Tuesday.",
      [
        "Sunday adalah hari sebelum Monday dalam urutan pekan.",
        "Wednesday adalah hari setelah Tuesday, bukan setelah Monday.",
        "Thursday datang setelah Wednesday.",
      ],
    ),
    qe(
      "eng-a1-3-q10",
      "Reading • Counting objects",
      "Read: “Rina has a blue bag. In the bag, she has three books and one pen.” How many books does Rina have in the bag?",
      ["one book", "two books", "four books", "three"],
      3,
      "Teks menyebutkan bahwa Rina memiliki three books di dalam tas.",
      [
        "One adalah jumlah pen, bukan jumlah buku.",
        "Two tidak sesuai dengan jumlah buku yang disebut dalam teks.",
        "Four menjumlahkan buku dan pen, bukan menghitung buku saja.",
      ],
    ),
  ],
};

const A1_V2_ESSAY_RUBRIC = "Penilaian mandiri 0–5 per kriteria (maksimal 20): 0 = kosong/tidak relevan; 1 = sulit dipahami; 2 = sebagian sesuai; 3 = cukup tepat dengan beberapa kesalahan; 4 = jelas dan sebagian besar tepat; 5 = lengkap, tepat untuk level A1, dan mudah dipahami.";

export const ENGLISH_A1_V2_ESSAYS: Record<string, EssayPrompt[]> = {
  "eng-a1-1": [
    {
      id: "eng-a1-1-w1",
      prompt: "Write a 3–4 sentence introduction. Include your name, status or job, and where you are from.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Use be accurately in simple sentences.",
        "Use suitable greeting or introduction vocabulary.",
        "Include a name, status or job, and place of origin.",
        "Make the introduction clear and easy to understand.",
      ],
    },
    {
      id: "eng-a1-1-w2",
      prompt: "Write a four-line dialogue between two people who meet for the first time. Include a greeting, names, and where they are from.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Use be accurately in simple sentences.",
        "Use suitable greeting and introduction vocabulary.",
        "Include both names and information about where they are from.",
        "Make the four lines clear and appropriate for a first meeting.",
      ],
    },
  ],
  "eng-a1-2": [
    {
      id: "eng-a1-2-w1",
      prompt: "Write five sentences about yourself. Include your name, age, job or student status, where you are from, and one negative sentence with be.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Gunakan be dengan tepat pada kalimat sederhana.",
        "Sebutkan nama, umur, pekerjaan atau status, dan asal.",
        "Sertakan satu kalimat negatif dengan be dan not.",
        "Susun lima kalimat yang jelas dan mudah dipahami.",
      ],
    },
    {
      id: "eng-a1-2-w2",
      prompt: "Write a four-line dialogue between two friends. Ask and answer about names, ages, and where they are from. Include one short answer.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Gunakan be dengan tepat dalam pertanyaan dan jawaban.",
        "Sertakan pertanyaan dan jawaban tentang nama, umur, dan asal.",
        "Sertakan satu jawaban singkat dengan subjek dan be.",
        "Buat empat baris dialog yang runtut dan mudah dipahami.",
      ],
    },
  ],
  "eng-a1-3": [
    {
      id: "eng-a1-3-w1",
      prompt: "Write four sentences about objects in your bag or room. Include numbers and colors.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Gunakan nama benda dan kata sifat warna dengan urutan yang tepat.",
        "Sertakan angka dan bentuk jamak yang sesuai.",
        "Tulis empat kalimat sederhana dan jelas.",
        "Periksa ejaan kosakata benda, angka, dan warna.",
      ],
    },
    {
      id: "eng-a1-3-w2",
      prompt: "Write today's date, day, and time in words. Then write two numbers using their English word forms.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Tulis nama hari dan bulan dengan huruf kapital.",
        "Gunakan ungkapan waktu yang sesuai untuk jam yang dipilih.",
        "Eja dua angka dengan kata bahasa Inggris secara benar.",
        "Susun informasi dalam kalimat yang mudah dipahami.",
      ],
    },
  ],
};
