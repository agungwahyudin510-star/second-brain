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
  "eng-a2-3": [
    qe("eng-a2-3-q01", "Comparatives", "My house is ___ than your house.", ["big", "more big", "biggest", "bigger"], 3, "Big menggandakan konsonan akhir sebelum -er: bigger.", ["Big adalah bentuk dasar, bukan comparative.", "More big bukan bentuk comparative standar untuk big.", "Biggest adalah superlative, bukan perbandingan dua rumah."]),
    qe("eng-a2-3-q02", "Superlatives • Irregular forms", "This is the ___ book I have ever read.", ["good", "best", "better", "well"], 1, "Bentuk superlative tidak beraturan dari good adalah best.", ["Good adalah bentuk dasar dan tidak melengkapi pola superlative setelah the.", "Better adalah comparative, bukan superlative.", "Well biasanya adverb dan tidak cocok sebagai superlative book."]),
    qe("eng-a2-3-q03", "Equality", "Rina is as tall ___ Dewi.", ["as", "than", "more", "like"], 0, "Pola kesetaraan adalah as + adjective + as.", ["Than digunakan untuk comparative, bukan pola as…as.", "More tidak melengkapi pola kesetaraan ini.", "Like tidak digunakan sebagai pasangan kedua as pada pola ini."]),
    qe("eng-a2-3-q04", "Comparatives • Longer adjectives", "Jakarta is ___ than Bandung.", ["crowdeder", "most crowded", "more crowded", "the crowded"], 2, "Crowded memakai more untuk comparative: more crowded than.", ["Crowdeder bukan bentuk comparative standar.", "Most crowded adalah superlative dan tidak cocok dengan than.", "The crowded tidak membentuk comparative."]),
    qe("eng-a2-3-q05", "Adjective order", "Choose the natural adjective order.", ["a leather red small bag", "a small red leather bag", "a red leather small bag", "a bag small red leather"], 1, "Urutan panduan ini adalah ukuran, warna, bahan, lalu noun.", ["Bahan dan warna diletakkan sebelum ukuran dalam urutan ini.", "Ukuran biasanya mendahului warna dan bahan.", "Adjective dalam frasa ini harus mendahului noun bag."]),
    qe("eng-a2-3-q06", "Superlatives • Spelling", "What is the superlative form of “happy”?", ["the happyest", "happyest", "the most happily", "the happiest"], 3, "Happy berubah menjadi happiest: y berubah menjadi i sebelum -est.", ["Bentuk tersebut mempertahankan y, bukan mengubahnya menjadi i.", "Bentuk tersebut tidak mengubah y menjadi i dan tidak memakai artikel.", "Happily adalah adverb, bukan adjective yang melengkapi pola ini."]),
    qe("eng-a2-3-q07", "Comparatives • Longer adjectives", "Choose the comparative form of “beautiful.”", ["more beautiful", "beautifuller", "the most beautiful", "beautiful"], 0, "Adjective panjang memakai more untuk comparative: more beautiful.", ["Beautifuller bukan bentuk comparative standar.", "The most beautiful adalah superlative.", "Beautiful adalah bentuk dasar, bukan comparative."]),
    qe("eng-a2-3-q08", "Comparatives • Irregular forms", "This phone is ___ than that one. (good)", ["best", "good", "better", "well"], 2, "Bentuk comparative tidak beraturan dari good adalah better.", ["Best adalah superlative.", "Good adalah bentuk dasar, bukan comparative.", "Well umumnya adverb dan tidak melengkapi comparative ini."]),
    qe("eng-a2-3-q09", "Superlatives • -est", "Mount Everest is the ___ mountain in the world.", ["high", "higher", "most high", "highest"], 3, "Superlative dari high adalah highest.", ["High adalah bentuk dasar dan tidak memenuhi superlative.", "Higher adalah comparative untuk membandingkan dua hal.", "Most high bukan bentuk standar untuk adjective ini."]),
    qe("eng-a2-3-q10", "Describing appearance", "Which sentence describes someone's appearance?", ["He is friendly and helpful.", "He is tall and has short black hair.", "He is the most interesting person.", "He is happier than yesterday."], 1, "Kalimat ini menyebut ciri penampilan yang terlihat: tinggi dan rambut.", ["Friendly and helpful menggambarkan sifat.", "Interesting person menilai karakter, bukan penampilan.", "Happier than yesterday membandingkan keadaan perasaan."]),
  ],
  "eng-a2-4": [
    qe("eng-a2-4-q01", "Advice • Should", "Which form gives positive advice? “You ___ rest.”", ["should", "should to", "shoulds", "shouldn't"], 0, "Should + kata kerja dasar memberi saran positif.", ["Setelah should tidak digunakan to.", "Modal should tidak berubah menjadi shoulds.", "Shouldn't memberi saran untuk tidak beristirahat, berlawanan dengan maksud soal."]),
    qe("eng-a2-4-q02", "Obligation • Mustn't", "You ___ drive without a license.", ["don't have to", "should", "mustn't", "have"], 2, "Mustn't menyatakan larangan mengemudi tanpa lisensi.", ["Don't have to berarti tidak wajib, bukan dilarang.", "Should memberi saran, bukan larangan tegas pada konteks ini.", "Have tidak membentuk larangan."]),
    qe("eng-a2-4-q03", "Obligation • Have to", "I ___ go to work tomorrow; it's my job.", ["mustn't", "don't have to", "has to", "have to"], 3, "Have to menyatakan kewajiban dan cocok dengan subjek I.", ["Mustn't berarti dilarang pergi bekerja.", "Don't have to berarti tidak wajib pergi.", "Has to digunakan dengan he/she/it, bukan I."]),
    qe("eng-a2-4-q04", "Health vocabulary", "Which sentence reports a sore throat?", ["I have a cough.", "I have a sore throat.", "I feel tired.", "I have a headache."], 1, "I have a sore throat menyebut keluhan yang diminta.", ["Cough berarti batuk, bukan sakit tenggorokan.", "Tired menjelaskan rasa lelah, bukan keluhan tenggorokan.", "Headache berarti sakit kepala."]),
    qe("eng-a2-4-q05", "Body vocabulary", "You use your ___ to see.", ["eyes", "ears", "hands", "feet"], 0, "Eyes digunakan untuk melihat.", ["Ears digunakan untuk mendengar.", "Hands digunakan untuk memegang atau meraba.", "Feet digunakan untuk berdiri dan berjalan."]),
    qe("eng-a2-4-q06", "Advice • Base verb", "“Why don't you ___ some water?”", ["drinks", "drank", "drinking", "drink"], 3, "Why don't you diikuti kata kerja dasar drink.", ["Drinks adalah bentuk present untuk he/she/it.", "Drank adalah bentuk lampau.", "Drinking memerlukan pola berbeda, bukan langsung setelah you."]),
    qe("eng-a2-4-q07", "Past obligation", "She ___ see a doctor yesterday.", ["has to", "must", "had to", "have to"], 2, "Had to menyatakan kewajiban pada masa lampau.", ["Has to adalah present untuk he/she/it.", "Must tidak menunjukkan past time pada pola ini.", "Have to tidak cocok dengan she dan yesterday."]),
    qe("eng-a2-4-q08", "Advice • Meaning", "Which sentence gives advice?", ["You mustn't sleep early.", "You should sleep early.", "You don't have to sleep early.", "You should to sleep early."], 1, "Should + kata kerja dasar menyampaikan saran.", ["Mustn't menyatakan larangan, bukan saran tidur.", "Don't have to berarti tidur tidak wajib.", "Setelah should tidak digunakan to."]),
    qe("eng-a2-4-q09", "Places • Pharmacy", "Where can you buy medicine?", ["At a library", "At a station", "At a pharmacy", "At a park"], 2, "Pharmacy adalah tempat untuk layanan dan produk farmasi.", ["Library adalah tempat membaca atau meminjam buku.", "Station adalah tempat naik atau turun transportasi.", "Park adalah area untuk rekreasi luar ruang."]),
    qe("eng-a2-4-q10", "Have to • Short answers", "“Do I have to wear a helmet?” — “Yes, you ___.”", ["do", "are", "did", "does"], 0, "Jawaban singkat untuk pertanyaan Do I have to…? memakai do.", ["Are menjawab pertanyaan be, bukan do.", "Did menyatakan waktu lampau, sedangkan pertanyaannya present.", "Does digunakan dengan he/she/it, bukan you."]),
  ],
  "eng-a2-5": [
    qe("eng-a2-5-q01", "Present perfect • Been", "I have ___ to Bali twice and returned home after each trip.", ["went", "been", "gone", "being"], 1, "Have been to menyatakan pengalaman berkunjung dan telah kembali.", ["Went adalah simple past dan tidak mengikuti have.", "Gone biasanya menyatakan orang pergi dan belum kembali.", "Being bukan past participle yang cocok pada pola ini."]),
    qe("eng-a2-5-q02", "Present perfect • Past participles", "She has never ___ sushi.", ["eat", "ate", "eaten", "eating"], 2, "Past participle dari eat adalah eaten.", ["Eat adalah bentuk dasar.", "Ate adalah simple past, bukan past participle.", "Eating adalah bentuk -ing."]),
    qe("eng-a2-5-q03", "Present perfect • Ever", "Have you ___ visited Japan in your life?", ["ever", "never", "already", "since"], 0, "Ever digunakan untuk menanyakan apakah pengalaman pernah terjadi.", ["Never berarti tidak pernah dan tidak cocok dengan pertanyaan pengalaman netral ini.", "Already berarti sudah dan tidak menanyakan pengalaman kapan pun.", "Since memerlukan titik awal waktu, bukan pola ini."]),
    qe("eng-a2-5-q04", "Past simple • Finished time", "I ___ to Paris in 2019.", ["have been", "have gone", "go", "went"], 3, "In 2019 adalah waktu lampau selesai, sehingga gunakan past simple went.", ["Present perfect tidak dipakai dengan waktu selesai spesifik ini.", "Have gone juga present perfect dan tidak cocok dengan in 2019.", "Go adalah bentuk dasar/present."]),
    qe("eng-a2-5-q05", "Travel vocabulary", "Where can you buy a train ticket from a staff member at a station?", ["At the station café", "At the ticket office", "On the platform", "In the luggage room"], 1, "Ticket office adalah loket untuk membeli tiket dari petugas.", ["Cafe adalah tempat membeli makanan atau minuman.", "Platform adalah area naik atau turun kereta.", "Luggage room berkaitan dengan barang bawaan, bukan loket tiket."]),
    qe("eng-a2-5-q06", "Indirect questions", "Could you tell me where the station ___?", ["does", "are", "do", "is"], 3, "Setelah where pada indirect question gunakan urutan pernyataan: the station is.", ["Does tidak membentuk klausa lokasi ini.", "Are tidak sesuai dengan subjek tunggal the station.", "Do tidak membentuk klausa lokasi ini."]),
    qe("eng-a2-5-q07", "Past participles", "What is the past participle of “see”?", ["see", "saw", "seen", "seeing"], 2, "Past participle dari see adalah seen.", ["See adalah bentuk dasar.", "Saw adalah simple past.", "Seeing adalah bentuk -ing."]),
    qe("eng-a2-5-q08", "Present perfect • Yet", "I haven't finished my homework ___.", ["yet", "already", "ever", "just"], 0, "Yet umum diletakkan di akhir kalimat negatif present perfect untuk menyatakan belum.", ["Already berarti sudah.", "Ever lazim untuk menanyakan pengalaman.", "Just berarti baru saja dan biasanya berada setelah have/has."]),
    qe("eng-a2-5-q09", "Present perfect • Has", "He ___ just arrived at the hotel; his room is ready now.", ["have", "has", "having", "will"], 1, "He menggunakan has dalam present perfect.", ["Have digunakan dengan I/you/we/they.", "Having adalah bentuk -ing.", "Will harus diikuti bentuk dasar, bukan past participle arrived."]),
    qe("eng-a2-5-q10", "Been and gone", "Choose the present perfect form that means she is away now: Dewi ___ to the market.", ["has been", "have gone", "went", "has gone"], 3, "Has gone menunjukkan Dewi pergi dan belum kembali atau sedang di sana.", ["Has been to biasanya menyatakan pengalaman berkunjung dan telah kembali.", "Have tidak cocok dengan subjek Dewi/she.", "Went adalah past simple, bukan bentuk present perfect yang diminta."]),
  ],
  "eng-a2-6": [
    qe("eng-a2-6-q01", "Reason • Because", "I stayed home ___ it was raining.", ["because", "so", "but", "although"], 0, "Because memperkenalkan alasan tetap di rumah.", ["So memperkenalkan akibat, bukan alasan setelah keputusan ini.", "But menunjukkan kontras.", "Although memperkenalkan kontras, bukan alasan langsung pada pola ini."]),
    qe("eng-a2-6-q02", "Result • So", "It was raining, ___ I took an umbrella.", ["because", "but", "although", "so"], 3, "So memperkenalkan akibat dari hujan.", ["Because memperkenalkan alasan dan akan membalik hubungan makna.", "But menunjukkan kontras, bukan akibat.", "Although memperkenalkan kontras dan tidak cocok dalam susunan ini."]),
    qe("eng-a2-6-q03", "Contrast • But", "I like tea, ___ my sister likes coffee.", ["because", "but", "however", "despite"], 1, "But menghubungkan dua klausa lengkap dalam satu kalimat.", ["Because menyatakan alasan, bukan preferensi yang kontras.", "However biasanya memerlukan tanda baca sebagai penghubung antarkalimat.", "Despite diikuti noun atau verb-ing, bukan klausa lengkap seperti ini."]),
    qe("eng-a2-6-q04", "Contrast • Although", "___ it was cold, we went swimming.", ["But", "However", "Although", "So"], 2, "Although memperkenalkan klausa kontras di awal kalimat.", ["But tidak digunakan sebagai pengantar klausa subordinat pada posisi ini.", "However biasanya menghubungkan kalimat dan memerlukan tanda baca.", "So menyatakan akibat, bukan kontras."]),
    qe("eng-a2-6-q05", "Adverbs • Well", "She speaks English ___. (good)", ["well", "good", "goodly", "gooder"], 0, "Well adalah adverb yang lazim menjadi bentuk untuk good.", ["Good biasanya adjective untuk menerangkan noun.", "Goodly bukan adverb standar untuk menerangkan speaks.", "Gooder bukan bentuk comparative standar."]),
    qe("eng-a2-6-q06", "Adverbs • Carefully", "He drives very ___. (careful)", ["careful", "carefulness", "carefully", "carefuler"], 2, "Carefully adalah adverb cara yang dibentuk dari careful.", ["Careful adalah adjective.", "Carefulness adalah noun.", "Carefuler bukan bentuk adverb yang benar."]),
    qe("eng-a2-6-q07", "Intensifiers • Too", "Choose the intensifier meaning “more than I can manage”: The bag is ___ heavy for me to carry.", ["very", "quite", "enough", "too"], 3, "Too heavy menunjukkan tingkat yang berlebihan untuk dapat dibawa.", ["Very berarti sangat, tetapi tidak menyatakan batas kemampuan secara khusus.", "Quite berarti cukup/lumayan dan tidak menandai kelebihan dengan sendirinya.", "Enough berarti cukup dan posisinya tidak cocok sebelum heavy."]),
    qe("eng-a2-6-q08", "Time linkers • When", "I was sleeping ___ the phone rang.", ["before", "when", "after", "until"], 1, "When menghubungkan kegiatan yang sedang berlangsung dengan kejadian yang terjadi saat itu.", ["Before berarti sebelum dan mengubah urutan waktu.", "After berarti sesudah, bukan saat dering terjadi.", "Until berarti sampai suatu waktu, bukan penghubung peristiwa ini."]),
    qe("eng-a2-6-q09", "Sequencing • Finally", "Which linker clearly marks the last step?", ["Finally", "First", "Next", "Before"], 0, "Finally menandai langkah atau kejadian terakhir.", ["First menandai langkah awal.", "Next menandai langkah berikutnya, bukan secara khusus langkah terakhir.", "Before menunjukkan urutan lebih awal."]),
    qe("eng-a2-6-q10", "Adverbs • Hard", "Choose the adverb meaning “with a lot of effort”: She works ___.", ["hardly", "hardy", "harder", "hard"], 3, "Hard berarti bekerja dengan usaha besar.", ["Hardly biasanya berarti hampir tidak.", "Hardy adalah adjective yang berarti kuat/tahan.", "Harder adalah bentuk comparative, bukan makna dasar yang diminta."]),
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
  "eng-a2-3": [
    {
      id: "eng-a2-3-w1",
      prompt: "Write five sentences comparing two cities or two phones. Include at least two comparative forms and one reason with because, but, or however.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Bandingkan dua kota atau dua ponsel pada sifat yang relevan.",
        "Gunakan sedikitnya dua comparative dengan ejaan yang tepat.",
        "Sertakan alasan atau kontras dengan because, but, atau however.",
        "Tulis lima kalimat yang runtut dan mudah dipahami.",
      ],
    },
    {
      id: "eng-a2-3-w2",
      prompt: "Write five sentences describing a person or a place. Use adjectives in a natural order and include relevant details.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Tulis lima kalimat tentang satu orang atau tempat.",
        "Tempatkan adjective sebelum noun dan gunakan urutan yang alami.",
        "Pilih deskripsi yang relevan dan hormat; jangan menyimpulkan sifat dari penampilan.",
        "Periksa artikel, ejaan, tanda baca, dan keterbacaan.",
      ],
    },
  ],
  "eng-a2-4": [
    {
      id: "eng-a2-4-w1",
      prompt: "Give simple advice for three everyday situations. Write one sentence for each situation and use should in every sentence.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Berikan saran untuk tiga situasi yang berbeda.",
        "Gunakan should + kata kerja dasar pada setiap kalimat.",
        "Pilih saran umum yang relevan dan aman; untuk masalah kesehatan nyata, sarankan mencari bantuan yang tepat.",
        "Periksa subjek, kata kerja, dan tanda baca.",
      ],
    },
    {
      id: "eng-a2-4-w2",
      prompt: "Write a six-line dialogue at a doctor's office or pharmacy. Include a polite opening, a simple concern, and a request for clarification.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Tulis enam baris percakapan dengan giliran yang jelas.",
        "Gunakan ungkapan sopan untuk membuka percakapan dan meminta bantuan.",
        "Sampaikan keluhan sederhana atau pertanyaan tanpa memberi diagnosis atau dosis.",
        "Gunakan tanda baca dan bahasa yang jelas; ini latihan bahasa, bukan saran medis.",
      ],
    },
  ],
  "eng-a2-5": [
    {
      id: "eng-a2-5-w1",
      prompt: "Write six sentences about a trip. Use present perfect for an experience without a specific finished time and past simple for one event with a finished time.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Tulis enam kalimat yang menceritakan sebuah perjalanan.",
        "Gunakan present perfect untuk pengalaman tanpa waktu selesai yang disebutkan.",
        "Gunakan past simple untuk satu kejadian dengan waktu lampau yang jelas.",
        "Periksa have/has, past participle, penanda waktu, dan urutan cerita.",
      ],
    },
    {
      id: "eng-a2-5-w2",
      prompt: "Write a short five-sentence email to a hotel. Ask politely for information using “Could you tell me…?” and include a greeting and closing.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Tulis lima kalimat dalam format email singkat dengan salam dan penutup.",
        "Gunakan Could you tell me…? untuk meminta informasi dengan sopan.",
        "Gunakan susunan pernyataan setelah kata tanya tidak langsung.",
        "Periksa kapitalisasi, tanda baca, dan kejelasan permintaan.",
      ],
    },
  ],
  "eng-a2-6": [
    {
      id: "eng-a2-6-w1",
      prompt: "Write a six-sentence paragraph about a day or an activity. Use because, but, and so to connect reasons, contrasts, and results.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Tulis enam kalimat yang berfokus pada satu topik.",
        "Gunakan because untuk alasan, but untuk kontras, dan so untuk akibat.",
        "Periksa tanda baca di sekitar linker dan pastikan hubungan idenya logis.",
        "Baca ulang untuk memeriksa urutan, tense, ejaan, dan kejelasan.",
      ],
    },
    {
      id: "eng-a2-6-w2",
      prompt: "Write a short story using first, then, and finally. Include when and while to connect events in time.",
      rubric: A1_V2_ESSAY_RUBRIC,
      reviewPoints: [
        "Susun cerita dalam urutan yang jelas dengan first, then, dan finally.",
        "Gunakan when dan while untuk menunjukkan hubungan waktu.",
        "Pastikan tense dan urutan kejadian mudah diikuti.",
        "Periksa tanda baca, ejaan, dan keterbacaan cerita.",
      ],
    },
  ],
};
