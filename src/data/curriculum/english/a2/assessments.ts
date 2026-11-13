import type { AssessmentQuestion, EssayPrompt } from "@/lib/types";
import { A1_V2_ESSAY_RUBRIC, qe } from "../a1-v2/assessments";

export { A1_V2_ESSAY_RUBRIC, qe };

export const ENGLISH_A2_V2_QUIZZES: Record<string, AssessmentQuestion[]> = {
  "eng-a2-1": [
    qe("eng-a2-1-q01", "Past be", "We ___ at the market yesterday.", ["was", "were", "are", "is"], 1, "We memakai were untuk menyatakan lokasi pada masa lampau.", ["Was dipakai dengan I/he/she/it.", "Are adalah bentuk sekarang.", "Is dipakai dengan he/she/it pada bentuk sekarang."]),
    qe("eng-a2-1-q02", "Irregular past", "What is the past form of “go”?", ["go", "gone", "going", "went"], 3, "Bentuk simple past dari go adalah went.", ["Go adalah bentuk dasar.", "Gone adalah past participle, bukan simple past mandiri.", "Going adalah bentuk -ing."]),
    qe("eng-a2-1-q03", "Regular past", "She ___ TV last night.", ["watched", "watch", "watches", "watching"], 0, "Last night menunjukkan waktu lampau; watch menjadi watched.", ["Watch adalah bentuk dasar.", "Watches adalah bentuk present untuk he/she/it.", "Watching memerlukan kata bantu be."]),
    qe("eng-a2-1-q04", "Past questions", "Did you ___ breakfast?", ["had", "having", "have", "has"], 2, "Setelah did gunakan kata kerja dasar have.", ["Had adalah bentuk lampau; did sudah membawa penanda lampau.", "Having adalah bentuk -ing.", "Has tidak cocok setelah did."]),
    qe("eng-a2-1-q05", "Past negatives", "I ___ see him yesterday.", ["don't", "wasn't", "haven't", "didn't"], 3, "Untuk menyangkal simple past gunakan didn't + bentuk dasar see.", ["Don't menyatakan present.", "Wasn't adalah bentuk negatif be dan tidak dapat langsung diikuti see.", "Haven't perlu past participle, bukan see."]),
    qe("eng-a2-1-q06", "Irregular past", "What is the past form of “buy”?", ["buy", "bought", "buys", "buying"], 1, "Bentuk simple past dari buy adalah bought.", ["Buy adalah bentuk dasar.", "Buys adalah present untuk he/she/it.", "Buying adalah bentuk -ing."]),
    qe("eng-a2-1-q07", "Pronunciation • -ed", "Which verb ends with the /ɪd/ sound?", ["walked", "played", "wanted", "stopped"], 2, "Wanted berakhir dengan /ɪd/ karena kata dasar want berakhir dengan bunyi /t/.", ["Walked berakhir dengan /t/.", "Played berakhir dengan /d/.", "Stopped berakhir dengan /t/."]),
    qe("eng-a2-1-q08", "Past questions • Wh-words", "___ did you go last weekend?", ["Where", "Who", "Whose", "Which"], 0, "Where menanyakan tempat yang dituju dan dapat langsung diikuti did you go.", ["Who memerlukan pelengkap seperti with untuk menanyakan teman bepergian.", "Whose memerlukan kata benda yang menunjukkan kepemilikan.", "Which memerlukan pilihan atau kata benda yang menjadi rujukan."]),
    qe("eng-a2-1-q09", "Time expressions", "I visited my aunt two days ___.", ["after", "before", "since", "ago"], 3, "Ago diletakkan setelah durasi untuk menghitung mundur dari sekarang.", ["After biasanya memerlukan titik acuan atau klausa.", "Before memerlukan titik acuan yang berbeda.", "Since menandai titik awal, bukan durasi lampau seperti ini."]),
    qe("eng-a2-1-q10", "Sequencing", "First, I woke up. ___, I took a shower.", ["At next", "Then", "Afterly", "Nextly"], 1, "Then adalah penanda umum untuk peristiwa berikutnya.", ["At next bukan ungkapan urutan yang benar dalam konteks ini.", "Afterly bukan kata bahasa Inggris yang digunakan.", "Nextly bukan bentuk adverb standar untuk urutan ini."]),
  ],
  "eng-a2-2": [
    qe("eng-a2-2-q01", "Be going to • Evidence", "Look at the clouds! It ___ rain.", ["will", "are going to", "is going to", "am going to"], 2, "Bukti awan mendukung prediksi it is going to rain.", ["Will dapat menyatakan prediksi, tetapi konteks meminta bentuk going to berdasarkan bukti.", "Are tidak cocok dengan it.", "Am dipakai dengan I."]),
    qe("eng-a2-2-q02", "Be going to • Plans", "I ___ to visit my grandmother next week.", ["am going", "will", "am", "going"], 0, "Pola lengkapnya adalah I am going to visit.", ["Will tidak diikuti to sebelum kata kerja dalam pola ini.", "Am saja belum membentuk going to.", "Going perlu didahului am dan dilengkapi to."]),
    qe("eng-a2-2-q03", "Will • Spontaneous decisions", "The phone is ringing. “I ___ answer it.”", ["am", "is", "are", "'ll"], 3, "I'll adalah bentuk singkat will dan cocok untuk keputusan spontan.", ["Am perlu diikuti going to untuk pola rencana.", "Is tidak cocok dengan subjek I.", "Are tidak cocok dengan subjek I."]),
    qe("eng-a2-2-q04", "Present continuous • Arrangements", "“What are you doing on Saturday?”", ["I met friends last week.", "I'm meeting my friends at six.", "I usually meet friends at six.", "I met my friends last Saturday."], 1, "Present continuous dengan waktu mendatang menyatakan pengaturan yang sudah dibuat.", ["Kalimat ini menyebut waktu lampau.", "Ini kebiasaan, bukan pengaturan khusus Sabtu mendatang.", "Kalimat ini menyebut Sabtu lampau."]),
    qe("eng-a2-2-q05", "Be going to • Negatives", "She ___ going to come.", ["doesn't", "aren't", "isn't", "not"], 2, "She memakai isn't untuk bentuk negatif be going to.", ["Doesn't tidak digunakan untuk menegasikan pola be going to.", "Aren't digunakan dengan you/we/they.", "Not memerlukan am/is/are di depannya."]),
    qe("eng-a2-2-q06", "Will • Promises", "I ___ help you tomorrow. (a promise)", ["will", "am", "do", "did"], 0, "Will umum dipakai untuk menyampaikan janji tentang masa depan.", ["Am memerlukan going to atau pelengkap lain.", "Do tidak membentuk janji masa depan ini.", "Did menyatakan masa lampau."]),
    qe("eng-a2-2-q07", "Invitations • Accepting", "“Would you like to come to the cinema?”", ["No, I did.", "Yes, I'd love to.", "I am going tomorrow.", "Yes, I like."], 1, "I'd love to adalah respons alami untuk menerima ajakan.", ["No, I did tidak menjawab ajakan secara tepat.", "Kalimat ini tidak menyatakan menerima atau menolak ajakan.", "Respons ini tidak sesuai bentuk pertanyaan would you like to."]),
    qe("eng-a2-2-q08", "Future time expressions", "Which phrase refers to a future time?", ["last week", "yesterday", "two days ago", "next week"], 3, "Next week menunjuk minggu yang akan datang.", ["Last week menunjuk masa lampau.", "Yesterday berarti kemarin.", "Two days ago menunjuk masa lampau."]),
    qe("eng-a2-2-q09", "Be going to • Short answers", "“Are you going to study tonight?” — “___”", ["Yes, I am.", "Yes, I do.", "Yes, I will.", "Yes, I going."], 0, "Jawaban singkat untuk pertanyaan Are you…? memakai am.", ["Do menjawab pertanyaan simple present.", "Will tidak mengulang kata bantu pertanyaan.", "Jawaban ini tidak memiliki kata kerja bantu yang lengkap."]),
    qe("eng-a2-2-q10", "Will • Predictions", "I think it ___ be sunny tomorrow.", ["is", "did", "will", "are"], 2, "Will digunakan untuk prediksi yang dinyatakan sebagai pendapat.", ["Is menyatakan present dan tidak membentuk prediksi ini.", "Did menandai masa lampau.", "Are tidak cocok dengan subjek it."]),
  ],
};

export const ENGLISH_A2_V2_ESSAYS: Record<string, EssayPrompt[]> = {
  "eng-a2-1": [
    {
      id: "eng-a2-1-w1",
      prompt: "Write 5–6 sentences about your last weekend. Say when and where you went, what you did first and next, and how the weekend ended.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Pakai simple past dengan kata kerja beraturan atau tidak beraturan.",
        "Gunakan sedikitnya dua ungkapan waktu/urutan, misalnya last weekend, first, then, atau finally.",
        "Tulis 5–6 kalimat yang menjawab bagian-bagian tugas.",
        "Periksa ejaan kata kerja dan bentuk dasar setelah did/didn't jika digunakan.",
      ],
    },
    {
      id: "eng-a2-1-w2",
      prompt: "Write three past-time questions for a friend and add a short answer to each question.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Bentuk pertanyaan dengan Did + subjek + kata kerja dasar atau was/were.",
        "Jawaban singkat memakai did/didn't atau was/were yang sesuai.",
        "Buat tiga pertanyaan berbeda tentang pengalaman lampau.",
        "Periksa tanda tanya, kapitalisasi, dan bentuk kata kerja setelah did.",
      ],
    },
  ],
  "eng-a2-2": [
    {
      id: "eng-a2-2-w1",
      prompt: "Write five sentences about your plans for next weekend. Use be going to and will at least once, and include one time expression.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Gunakan be going to untuk rencana yang sudah dipikirkan.",
        "Gunakan will untuk janji, keputusan, atau prediksi yang sesuai.",
        "Tulis lima kalimat dan sertakan waktu seperti next week atau on Saturday.",
        "Periksa am/is/are, kata kerja dasar, dan urutan rencana.",
      ],
    },
    {
      id: "eng-a2-2-w2",
      prompt: "Write a short invitation message and a reply that politely accepts or declines it. Include a suggested day or time.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Gunakan ungkapan ajakan, misalnya Would you like to…? atau Let's…",
        "Balasan menerima atau menolak ajakan dengan sopan dan jelas.",
        "Cantumkan hari, waktu, atau usulan pengganti yang relevan.",
        "Periksa pola kata kerja, tanda baca, dan keterbacaan pesan.",
      ],
    },
  ],
};
