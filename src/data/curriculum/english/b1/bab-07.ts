import type { CurriculumModule } from "@/lib/types";

export const ENGLISH_B1_BAB_07: CurriculumModule = {
  id: "eng-b1-7",
  title: "B1 • Bab 7: Communication & Problem Solving",
  summary: "Bab ini melatih klarifikasi, reported speech, negosiasi, penanganan keluhan, dan instruksi bertahap agar peserta didik dapat menyelesaikan masalah dengan bahasa yang jelas dan santun.",
  lessons: [
    {
      id: "eng-b1-7-1",
      title: "Clarifying and Checking Understanding",
      minutes: 25,
      speechText: "Let me check I've understood. You would like the room changed to the smaller one, and you need it before Friday.",
      listening: {
        question: "Which phrase checks the speaker's meaning?",
        options: ["Do you mean the room should change before Friday?", "I changed the room last Friday.", "The smaller room is always better."],
        answer: 0,
        explanation: "Do you mean...? mengulang inti pesan untuk memastikan pemahaman.",
      },
      content: `# Clarifying and Checking Understanding

**Tujuan:** meminta penjelasan, memeriksa pemahaman, dan memparafrasekan informasi tanpa membuat lawan bicara merasa disalahkan.

Dalam percakapan, informasi dapat terdengar tidak lengkap karena suara bising, instruksi yang panjang, atau kata yang belum dikenal. Daripada menebak, minta klarifikasi dengan ungkapan yang tenang. **Could you explain what you mean by...?** cocok ketika satu kata atau gagasan belum jelas. **Could you give me an example?** meminta contoh konkret. Pertanyaan yang spesifik membantu pembicara menjawab bagian yang belum dipahami, sedangkan pertanyaan umum seperti “What?” mungkin membuatnya harus mengulang semuanya.

Untuk memeriksa pemahaman, ulangi inti informasi menggunakan kata-katamu sendiri. **Do you mean the meeting starts at nine?** mengubah informasi yang didengar menjadi pertanyaan konfirmasi. **Let me check I've understood: we need to bring the forms tomorrow, right?** menunjukkan bahwa kamu berusaha mengikuti pembicaraan. Jika pemahamanmu kurang tepat, pembicara dapat membetulkannya. Parafrase bukan menyalin seluruh kalimat; pilih detail penting, seperti siapa melakukan apa, kapan, atau di mana.

Gunakan intonasi yang ramah dan hindari nada yang terdengar seperti menguji atau menyalahkan. **I'm not sure I follow** menyampaikan kebingungan tanpa mengatakan bahwa pembicara menjelaskan dengan buruk. Kamu juga dapat menyebut bagian yang sudah jelas sebelum bertanya: “I understand that the room is booked, but I'm not sure which entrance we should use.” Cara ini mempersempit masalah dan membuat respons lebih mudah. Dalam email atau pesan, tanda tanya dan kalimat pembuka yang sopan membantu menjaga nada.

Pilih strategi sesuai kebutuhan. Jika kamu kehilangan seluruh pesan, minta pembicara mengulanginya. Jika hanya satu detail yang kabur, tanyakan detail tersebut. Jika kamu memahami sebagian besar isi tetapi ingin memastikan kesimpulan, parafrase dan minta konfirmasi. Jangan menambahkan informasi yang belum disebutkan ketika mengulang pesan. Misalnya, jika pembicara berkata “late afternoon,” jangan mengubahnya menjadi “five o'clock” tanpa bertanya.

Kebiasaan memeriksa pemahaman berguna untuk tugas kelompok, layanan pelanggan, jadwal, dan percakapan sehari-hari. Setelah mendapat jawaban, rangkum tindakan berikutnya: “So I'll send the draft today, and you'll review it tomorrow.” Ringkasan akhir menghubungkan percakapan dengan langkah yang dapat dilakukan. Jika masih ada dua kemungkinan, nyatakan keduanya secara jelas dan minta pembicara memilih. Klarifikasi yang baik bukan tanda kurang mampu; itu cara mencegah kesalahan yang lebih sulit diperbaiki.

| English | Arti | Kapan dipakai |
|---|---|---|
| Do you mean the earlier meeting? | Maksud Anda rapat yang lebih awal? | Memastikan maksud atau pilihan |
| Let me check I've understood. | Biar saya pastikan pemahaman saya. | Membuka parafrase |
| Could you give me an example? | Bisakah Anda memberi contoh? | Meminta penjelasan konkret |
| I'm not sure I follow. | Saya belum yakin memahami. | Menyampaikan kebingungan dengan sopan |
| So, we send it by Friday, right? | Jadi, kita mengirimnya sebelum Jumat, benar? | Memastikan detail dan tindakan |

**Dialog:**
Lina: The room may need to change before the visitors arrive.
Bima: Sorry, do you mean the room is not available?
Lina: The large room is booked, but the small one is free.
Bima: Let me check I've understood: we should use the small room.
Lina: Yes, and please move the chairs before Friday.
Bima: Could you give me an example of the layout you want?
Lina: Put four chairs around each table.
Bima: So the room should be ready on Thursday afternoon, right?
Lina: Exactly. Please tell me if anything is unclear.
Bima: Understood. I'll confirm the arrangement after lunch.

[[visual:eng-b1-7-clarify]]

**Key phrases:**
- Do you mean...?
- Let me check I've understood.
- Could you give me an example?
- I'm not sure I follow.
- So, the plan is...?
- Did I get that right?

**Kesalahan umum:** mengulang seluruh pesan dengan kata-kata yang sama tanpa menunjukkan bagian yang belum jelas. Parafrasekan inti, lalu tanyakan detail tertentu. Hindari menyisipkan asumsi waktu atau tempat yang tidak disebutkan.

**Latihan singkat + jawaban:**
1. Ungkapan apa yang meminta contoh? **Jawaban: Could you give me an example?**
2. Buat konfirmasi untuk pesan “The room changes to Room 2.” **Jawaban contoh: Do you mean we should use Room 2?**
3. Apa yang dapat dilakukan jika hanya waktu yang tidak jelas? **Jawaban: tanyakan waktu secara spesifik, bukan meminta seluruh pesan diulang.**`,
    },
    {
      id: "eng-b1-7-2",
      title: "Reporting What People Said",
      minutes: 25,
      speechText: "Maya said that the shop was closing early. She told us the new time, and she asked whether we could return the next day.",
      listening: {
        question: "Which verb often introduces the person who receives information?",
        options: ["tell, as in tell us", "say, as in say us", "speak, as in speak us"],
        answer: 0,
        explanation: "Tell biasanya diikuti objek orang, seperti told us.",
      },
      content: `# Reporting What People Said

**Tujuan:** melaporkan pernyataan dan pertanyaan orang lain dengan say, tell, dan ask serta menggunakan backshift dasar dan urutan kata reported question.

Reported speech menyampaikan isi perkataan tanpa mengutip kata demi kata. Dalam direct speech, kata-kata pembicara ditulis di antara tanda kutip: “I am tired,” she said. Dalam reported speech, kita dapat menulis **She said (that) she was tired.** Kata that dapat dipakai atau dihilangkan dalam pernyataan. Perubahan pronoun bergantung pada siapa yang berbicara dan siapa yang menceritakan kembali, jadi tentukan dulu rujukannya sebelum mengubah I, you, atau we.

**Say** biasanya tidak langsung diikuti orang yang menerima pesan: “He said that the room was ready.” Jika penerima disebutkan, gunakan **say something to someone**: “He said to us that the room was ready.” **Tell** umumnya diikuti objek orang tanpa to: “He told us that the room was ready.” **Ask** digunakan untuk melaporkan pertanyaan atau permintaan: “She asked me to wait.” Jangan memakai *said me* atau *told that me*; periksa pola kata kerja dan letak objek.

Ketika reporting verb berada di masa lampau, bentuk present sering bergeser satu langkah ke masa lampau. **I am busy** menjadi **she was busy**, dan **I will call** menjadi **he would call**. Bentuk ini disebut backshift. Perubahan itu umum dalam laporan, tetapi bukan aturan mekanis untuk setiap konteks. Jika informasi masih benar atau berlaku saat ini, pembicara dapat mempertahankan present sesuai konteks. Untuk materi dasar, gunakan backshift saat melaporkan percakapan lampau dan pastikan makna waktunya tetap jelas.

Keterangan waktu dan tempat juga dapat berubah karena sudut pandang laporan berpindah. **Tomorrow** dapat menjadi **the next day**, **today** menjadi **that day**, dan **here** menjadi **there** bila lokasi pelapor berbeda. Perubahan tersebut bergantung pada kapan dan di mana laporan dibuat. Jika melaporkan pada hari dan tempat yang sama, bentuk asli mungkin tetap masuk akal. Jangan mengganti semua kata waktu secara otomatis; tanyakan apakah kata tersebut masih menunjuk pada waktu atau tempat yang sama.

Reported question memakai urutan pernyataan, bukan inversi pertanyaan langsung. “Where do you live?” menjadi **She asked me where I lived**, bukan *where did I live*. Untuk pertanyaan yes/no, gunakan **if** atau **whether**: “Are you free?” menjadi **He asked if I was free.** Hilangkan do/does/did sebagai auxiliary pertanyaan ketika backshift sudah membentuk klausa. Dalam permintaan, **ask + object + to-infinitive** sering digunakan: “Please wait” menjadi “She asked me to wait.”

| English | Arti | Kapan dipakai |
|---|---|---|
| She said that she was tired. | Dia mengatakan bahwa dia lelah. | Melaporkan pernyataan |
| He told us the shop was closed. | Dia memberi tahu kami bahwa toko tutup. | Tell diikuti penerima |
| They asked me to wait. | Mereka meminta saya menunggu. | Melaporkan permintaan |
| She asked where I lived. | Dia bertanya di mana saya tinggal. | Reported question dengan urutan pernyataan |
| He said he would call the next day. | Dia mengatakan akan menelepon keesokan harinya. | Backshift dan perubahan waktu |

**Dialog:**
Rani: Did you speak to the coordinator yesterday?
Fajar: Yes. She said the class was starting later.
Rani: What time did she say it would start?
Fajar: She told me it would begin at ten.
Rani: Did she say why the time had changed?
Fajar: She said the instructor was travelling that morning.
Rani: Did you ask whether we needed to bring anything?
Fajar: I asked if we should bring our course books.
Rani: And what did she say?
Fajar: She told us to bring them the next day.

[[visual:eng-b1-7-reported]]

**Key phrases:**
- She said that...
- He told me that...
- They asked whether...
- She asked me to...
- the next day
- he would call

**Kesalahan umum:** mempertahankan inversi pertanyaan langsung, misalnya *She asked where did I live*. Gunakan urutan subjek lalu kata kerja: **She asked where I lived.** Bedakan juga **said something** dengan **told someone something**.

**Latihan singkat + jawaban:**
1. Ubah “I am ready,” he said. **Jawaban: He said (that) he was ready.**
2. Lengkapi: “She ___ me that the bus was late.” **Jawaban: told.**
3. Ubah “Where do you work?” menjadi reported question. **Jawaban: He asked where I worked.**`,
    },
    {
      id: "eng-b1-7-3",
      title: "Suggestions and Negotiating",
      minutes: 25,
      speechText: "How about meeting after lunch? I'd suggest using the smaller room, and would you be willing to finish the notes tomorrow?",
      listening: {
        question: "Which phrase introduces a suggestion?",
        options: ["How about meeting after lunch?", "You missed the meeting yesterday.", "The room has two windows."],
        answer: 0,
        explanation: "How about + gerund digunakan untuk mengajukan saran.",
      },
      content: `# Suggestions and Negotiating

**Tujuan:** mengajukan saran, menanggapi usulan, dan merundingkan kompromi dengan ungkapan yang sopan dan jelas.

Saran dapat disampaikan langsung atau dengan bahasa yang memberi ruang bagi orang lain untuk memilih. **How about meeting after lunch?** diikuti gerund, sedangkan **Why don't we meet after lunch?** diikuti subject dan verb dasar. **We could use the smaller room** menawarkan kemungkinan, bukan perintah. Pilih bentuk sesuai hubungan dan situasi; kepada teman dekat, ungkapan ringkas mungkin wajar, sedangkan dalam rapat formal, kalimat bersyarat atau pertanyaan sopan dapat terasa lebih sesuai.

**I'd suggest + gerund** atau **I'd suggest that we + verb** memperkenalkan rekomendasi. Contohnya, **I'd suggest sending the draft today** dan **I'd suggest that we ask the coordinator first.** Jangan mencampur pola menjadi *I'd suggest to send*. Saat memberikan saran, jelaskan alasan singkat agar orang lain memahami tujuan usulan. Namun, hindari menyajikan preferensi pribadi seolah-olah satu-satunya pilihan yang masuk akal.

Negosiasi adalah proses mencari susunan yang dapat diterima pihak-pihak yang terlibat. Dengarkan kebutuhan utama sebelum menawarkan perubahan. Jika satu orang membutuhkan waktu dan yang lain membutuhkan ruang, pertimbangkan pilihan yang memenuhi sebagian kebutuhan keduanya. **Would you be willing to start earlier if we finish sooner?** membuka ruang untuk tawar-menawar. Pertanyaan itu tidak menjamin pihak lain setuju, jadi beri waktu untuk menjawab dan tanyakan batas yang penting bagi mereka.

Kompromi tidak selalu berarti setiap pihak mendapat hal yang sama. Kadang satu pihak mengubah waktu sementara pihak lain membantu tugas tambahan. Rangkum usulan dengan rinci: siapa melakukan apa dan kapan. **If I prepare the slides, could you check the examples?** menghubungkan kontribusi dan permintaan. Hindari tekanan seperti “You have to agree” atau menerima sesuatu sebelum memahami konsekuensinya. Jika belum ada kesepakatan, tawarkan dua pilihan realistis atau sepakati untuk membahasnya kembali.

Respons terhadap saran juga perlu jelas. Kamu dapat menerima dengan **That works for me**, menolak secara sopan dengan **I'm afraid that won't work because...**, atau mengusulkan perubahan dengan **Could we move it to Thursday instead?** Berikan alasan yang relevan dan jangan menyerang orang yang mengajukan ide. Dalam kelompok, periksa apakah semua pihak memahami keputusan yang sama. Kesepakatan akhir sebaiknya merangkum waktu, tugas, dan langkah berikutnya, bukan hanya mengatakan “Okay.”

| English | Arti | Kapan dipakai |
|---|---|---|
| How about meeting after lunch? | Bagaimana kalau bertemu setelah makan siang? | Mengajukan ide dengan gerund |
| Why don't we share the task? | Bagaimana kalau kita membagi tugas? | Mengusulkan tindakan bersama |
| I'd suggest asking the manager first. | Saya menyarankan bertanya kepada manajer dahulu. | Memberi rekomendasi |
| Would you be willing to change the date? | Apakah Anda bersedia mengubah tanggalnya? | Menawarkan negosiasi secara sopan |
| Could we meet halfway? | Bisakah kita mencari jalan tengah? | Mencari kompromi |

**Dialog:**
Sari: We need to prepare the room, but I have class until four.
Deni: How about meeting at four thirty?
Sari: I can do that, but we may not finish the signs.
Deni: I'd suggest asking Niko to prepare them before lunch.
Sari: Would you be willing to check the chairs while I print them?
Deni: Yes, if you can send me the room plan this morning.
Sari: That works for me. I'll send it before eleven.
Deni: Could we also ask the others to arrive a little earlier?
Sari: I think so. Let's message them with the updated plan.
Deni: Great. We can review everything together at four thirty.

[[visual:eng-b1-7-suggest]]

**Key phrases:**
- How about...?
- Why don't we...?
- I'd suggest...
- Would you be willing to...?
- That works for me.
- Could we meet halfway?

**Kesalahan umum:** memakai *suggest to do* atau mengubah saran menjadi perintah. Gunakan **suggest + gerund** atau **suggest that + subject + verb**. Dalam negosiasi, jelaskan kebutuhan dan pilihan tanpa memaksa persetujuan.

**Latihan singkat + jawaban:**
1. Lengkapi: “How about ___ (meet) at six?” **Jawaban: meeting.**
2. Beri saran dengan “I'd suggest” dan kata “check.” **Jawaban: I'd suggest checking the room first.**
3. Sebutkan ungkapan untuk mencari kompromi. **Jawaban: Could we meet halfway?**`,
    },
    {
      id: "eng-b1-7-4",
      title: "Complaints and Resolving Problems",
      minutes: 25,
      speechText: "I'm sorry to mention this, but the printer has stopped working. Could you help us find another one before the meeting?",
      listening: {
        question: "Which opening makes a complaint more polite?",
        options: ["I'm sorry to mention this, but...", "You always do this wrong.", "Fix it immediately."],
        answer: 0,
        explanation: "Pembuka tersebut menyampaikan masalah tanpa langsung menyalahkan lawan bicara.",
      },
      content: `# Complaints and Resolving Problems

**Tujuan:** menyampaikan keluhan dengan sopan, menjelaskan dampaknya, meminta solusi, dan menanggapi tawaran penyelesaian secara jelas.

Keluhan yang efektif berfokus pada masalah dan hasil yang dibutuhkan, bukan menyerang orang. Mulai dengan konteks singkat, lalu jelaskan apa yang terjadi secara spesifik. **I'm sorry to trouble you, but the room is still locked** lebih membantu daripada **You never do your job**. Jika memungkinkan, sebutkan waktu atau bagian yang terpengaruh, tetapi jangan menambahkan tuduhan yang tidak dapat dipastikan. Nada tenang membuat pembicaraan tetap terarah pada penyelesaian.

Setelah menjelaskan masalah, nyatakan permintaan yang masuk akal. **Could you check the booking for me?** meminta tindakan yang jelas. **Would it be possible to move us to another room?** membuka pilihan tanpa memerintah. Jika dampak masalah perlu diketahui, jelaskan secara singkat: “We have a presentation in twenty minutes, so we need a working screen.” Hindari tuntutan yang tidak terkait atau ancaman; jika solusi pertama tidak tersedia, tanyakan pilihan lain yang dapat dilakukan.

Pihak yang menerima keluhan dapat meminta maaf, mengakui masalah, atau mengajukan pertanyaan untuk memahami situasi. **I'm sorry about the delay** menunjukkan empati, tetapi permintaan maaf sebaiknya diikuti langkah praktis bila diperlukan. **Let me check what happened** tidak berarti masalah sudah selesai; jelaskan apa yang akan diperiksa dan kapan akan kembali memberi kabar. Jika kamu yang mengeluh, dengarkan penjelasan sebelum menyimpulkan bahwa pihak lain mengabaikan masalah.

Saat menawarkan solusi, sebutkan batas dan tindak lanjut dengan jelas. **We can replace the damaged item today, or arrange a repair tomorrow** memberi dua pilihan berbeda. Periksa apakah solusi itu menjawab masalah utama, kapan dilakukan, dan apakah ada langkah yang harus diambil oleh kedua pihak. Jangan menjanjikan sesuatu yang tidak berada dalam kendalimu. Jika ada informasi yang belum diketahui, katakan bahwa kamu akan memeriksanya lalu menetapkan waktu untuk memberi kabar.

Kamu dapat menerima solusi dengan **That would be helpful, thank you**, atau menolak dengan sopan sambil menjelaskan alasannya: **I appreciate the offer, but tomorrow is too late for our event. Is there another option?** Penolakan yang jelas mencegah kesalahpahaman dan tetap membuka diskusi. Akhiri dengan mengulang kesepakatan: “So, you'll bring a replacement by three, and I'll leave the item at reception.” Catatan singkat tentang tindakan dan waktu berguna ketika masalah melibatkan beberapa orang.

| English | Arti | Kapan dipakai |
|---|---|---|
| I'm sorry to trouble you, but... | Maaf mengganggu, tetapi... | Membuka keluhan dengan sopan |
| The screen isn't working properly. | Layar tidak berfungsi dengan baik. | Menjelaskan masalah spesifik |
| Could you check it for me? | Bisakah Anda memeriksanya untuk saya? | Meminta tindakan |
| We can offer a replacement today. | Kami dapat menawarkan pengganti hari ini. | Menawarkan penyelesaian |
| I appreciate that, but... | Saya menghargainya, tetapi... | Menolak tawaran dengan sopan |

**Dialog:**
Nina: I'm sorry to trouble you, but our projector isn't working.
Staff: I'm sorry about that. When did the problem begin?
Nina: It stopped showing the slides a few minutes ago.
Staff: Could you check whether the cable is connected?
Nina: I checked it, but the screen is still blank.
Staff: I can bring a replacement projector in ten minutes.
Nina: That would help, but our talk begins in five minutes.
Staff: I can bring a monitor now and the projector after the talk.
Nina: The monitor will work for the first part. Thank you.
Staff: I'll set it up and check that the slides are visible.

[[visual:eng-b1-7-complaint]]

**Key phrases:**
- I'm sorry to trouble you, but...
- The problem is...
- Could you check...?
- What can we do about it?
- I appreciate the offer, but...
- That would be helpful, thank you.

**Kesalahan umum:** menyampaikan keluhan sebagai serangan pribadi atau menganggap permintaan maaf saja sudah menyelesaikan masalah. Jelaskan kejadian, dampak, dan tindakan yang dibutuhkan. Konfirmasikan solusi dan waktunya.

**Latihan singkat + jawaban:**
1. Ubah “Fix the printer now!” menjadi permintaan sopan. **Jawaban contoh: Could you check the printer for me, please?**
2. Apa tiga hal yang sebaiknya jelas dalam solusi? **Jawaban: tindakan, pihak yang bertanggung jawab, dan waktu.**
3. Berikan penolakan sopan untuk solusi yang terlambat. **Jawaban contoh: I appreciate the offer, but tomorrow is too late. Is there another option?**`,
    },
    {
      id: "eng-b1-7-5",
      title: "Instructions and Branching Conversations",
      minutes: 25,
      speechText: "Once you receive the form, check the name. After that, if the address is correct, send it to the office; otherwise, ask the visitor to update it.",
      listening: {
        question: "What should happen if the address is not correct?",
        options: ["Ask the visitor to update it", "Send the form immediately", "Put the form in storage"],
        answer: 0,
        explanation: "Instruksi menggunakan cabang otherwise untuk tindakan saat alamat salah.",
      },
      content: `# Instructions and Branching Conversations

**Tujuan:** memberi dan mengikuti instruksi berurutan serta memilih respons berdasarkan kondisi dengan penanda if, otherwise, once, dan after that.

Instruksi yang baik menyebut langkah dalam urutan yang dapat diikuti. **First**, **next**, **after that**, dan **finally** menandai tahapan. Dalam situasi yang urutannya penting, **Once you receive the form, check the name** berarti pemeriksaan dimulai setelah formulir diterima. **After that, send it to the office** menunjukkan langkah berikutnya. Gunakan kata kerja yang jelas dan sebutkan objeknya; instruksi “check it” mungkin tidak jelas jika beberapa dokumen sedang dibicarakan.

Tidak semua percakapan mengikuti satu jalur. **If the address is correct, send the form. If it isn't, ask the visitor to update it.** memberi dua kemungkinan berdasarkan kondisi. Kamu juga dapat memakai **otherwise** untuk cabang alternatif: “Save the file with the new name; otherwise, the old copy may be replaced.” Pastikan setiap kondisi memiliki tindakan yang sesuai dan pendengar mengetahui hal yang sedang diperiksa. Jika ada lebih dari dua kemungkinan, buat langkah terpisah agar pilihan tidak membingungkan.

Dalam prosedur sederhana, **if** biasanya diikuti present simple untuk kondisi yang mungkin terjadi, dan klausa utama dapat memakai imperative atau will sesuai tujuan: **If the door is locked, call the desk** atau **If the door is locked, the staff will open it.** Jangan memakai will di klausa if untuk pola dasar ini. Gunakan **unless** dengan hati-hati karena artinya “jika tidak”; dalam instruksi, if/otherwise sering lebih mudah dipahami.

Percakapan bercabang membutuhkan pertanyaan lanjutan. Tanyakan kondisi yang menentukan keputusan: **Is the form complete?** Lalu pilih respons. Jika jawaban tidak diketahui, jangan langsung melakukan tindakan yang sulit dibatalkan. **Let me check the number first** memberi waktu untuk memeriksa. Dalam layanan atau kerja tim, jelaskan alasan cabang dengan kalimat singkat agar pihak lain mengerti mengapa prosedur berbeda, bukan mengira kamu mengabaikan instruksi awal.

Saat memberi instruksi lisan, pecah proses panjang menjadi beberapa bagian dan minta konfirmasi pada titik penting. Pendengar dapat mengulang langkah: **So first I check the name, then I compare the address, and if it is correct I send the form.** Jika urutan tersebut salah, pembicara dapat membetulkannya sebelum pekerjaan dilanjutkan. Untuk keputusan kelompok, nyatakan siapa yang bertindak, apa yang dilakukan, dan kapan langkah berikut dimulai. Catatan singkat dapat membantu, tetapi gunakan kalimat sederhana dan hindari terlalu banyak kondisi dalam satu kalimat.

| English | Arti | Kapan dipakai |
|---|---|---|
| Once you receive the form, check the date. | Setelah menerima formulir, periksa tanggalnya. | Memulai langkah setelah suatu kejadian |
| After that, save a new copy. | Setelah itu, simpan salinan baru. | Menyatakan urutan |
| If the code works, continue. | Jika kodenya berfungsi, lanjutkan. | Menentukan tindakan berdasarkan kondisi |
| Otherwise, contact the support desk. | Jika tidak, hubungi meja bantuan. | Memberi cabang alternatif |
| Let me check the next step. | Biar saya periksa langkah berikutnya. | Memastikan instruksi sebelum bertindak |

**Dialog:**
Ari: What should I do when a visitor gives me this form?
Mira: First, check that the name is written clearly.
Ari: What if I can't read the name?
Mira: Ask the visitor to confirm the spelling.
Ari: And after that?
Mira: Compare the address with the booking record.
Ari: If they match, should I send the form?
Mira: Yes. Otherwise, ask the visitor to update the address.
Ari: Let me check I've understood: name first, address next.
Mira: Exactly. Then send it only if the details match.

[[visual:eng-b1-7-solving]]

**Key phrases:**
- Once you...
- After that,...
- If that happens,...
- Otherwise,...
- First..., then...
- Let me check the next step.

**Kesalahan umum:** menyampaikan beberapa cabang dalam satu kalimat panjang tanpa menjelaskan kondisi. Pisahkan kondisi dan tindakan, lalu gunakan otherwise untuk alternatif yang jelas. Pastikan pronoun seperti it merujuk pada benda yang tepat.

**Latihan singkat + jawaban:**
1. Lengkapi: “After you sign the form, ___ it to the desk.” **Jawaban: take.**
2. Apa arti otherwise pada instruksi? **Jawaban: lakukan tindakan alternatif jika kondisi sebelumnya tidak terpenuhi.**
3. Buat cabang untuk kode yang tidak berfungsi. **Jawaban contoh: If the code doesn't work, ask the manager for help.**`,
    },
  ],
  chapterResources: {
    summary: [
      "Klarifikasi dan parafrase membantu memastikan detail tanpa menyalahkan lawan bicara.",
      "Reported speech memakai say, tell, dan ask dengan pola yang berbeda; reported questions menggunakan urutan pernyataan.",
      "Suggestions dan negosiasi memberi pilihan serta ruang untuk mencari kompromi.",
      "Keluhan yang efektif menjelaskan masalah, dampak, permintaan, dan tindak lanjut secara sopan.",
      "Instruksi berurutan dan cabang if/otherwise membuat keputusan lebih mudah diikuti.",
    ],
    glossary: [
      { term: "klarifikasi", english: "clarification", definition: "Pertanyaan atau penjelasan untuk membuat informasi lebih jelas." },
      { term: "parafrase", english: "paraphrase", definition: "Penyampaian ulang gagasan dengan kata-kata sendiri." },
      { term: "konfirmasi", english: "confirmation", definition: "Pemeriksaan bahwa informasi atau pemahaman sudah benar." },
      { term: "reported speech", english: "reported speech", definition: "Pelaporan isi perkataan tanpa mengutip kata-katanya secara langsung." },
      { term: "direct speech", english: "direct speech", definition: "Kutipan langsung dari kata-kata pembicara." },
      { term: "reporting verb", english: "reporting verb", definition: "Kata kerja seperti say, tell, atau ask untuk melaporkan ucapan." },
      { term: "backshift", english: "backshift", definition: "Perubahan tense ke bentuk lampau saat melaporkan ucapan lampau." },
      { term: "reported question", english: "reported question", definition: "Pertanyaan yang dilaporkan dengan susunan klausa pernyataan." },
      { term: "permintaan", english: "request", definition: "Ungkapan untuk meminta seseorang melakukan sesuatu." },
      { term: "saran", english: "suggestion", definition: "Usulan tindakan yang dapat dipertimbangkan." },
      { term: "negosiasi", english: "negotiation", definition: "Pembicaraan untuk mencapai kesepakatan yang dapat diterima." },
      { term: "kompromi", english: "compromise", definition: "Kesepakatan ketika pihak-pihak menyesuaikan sebagian keinginannya." },
      { term: "tawaran", english: "offer", definition: "Usulan bantuan atau tindakan yang dapat diterima atau ditolak." },
      { term: "keluhan", english: "complaint", definition: "Pernyataan masalah yang biasanya disertai permintaan penanganan." },
      { term: "penyelesaian", english: "resolution", definition: "Tindakan atau hasil untuk menangani masalah." },
      { term: "dampak", english: "impact", definition: "Pengaruh suatu masalah terhadap orang atau kegiatan." },
      { term: "tindak lanjut", english: "follow-up", definition: "Langkah berikut untuk memastikan urusan ditangani." },
      { term: "instruksi", english: "instruction", definition: "Arahan tentang tindakan atau urutan yang perlu dilakukan." },
      { term: "urutan", english: "sequence", definition: "Susunan langkah atau kejadian menurut keteraturannya." },
      { term: "kondisi", english: "condition", definition: "Keadaan yang menentukan apakah suatu tindakan dilakukan." },
      { term: "cabang", english: "branch", definition: "Jalur tindakan alternatif dalam prosedur atau percakapan." },
      { term: "otherwise", english: "otherwise", definition: "Penanda untuk tindakan alternatif jika kondisi sebelumnya tidak terpenuhi." },
    ],
    exercises: [
      { prompt: "Ubah “I will call tomorrow,” Nita said menjadi reported speech.", solution: "Nita said that she would call the next day." },
      { prompt: "Buat satu saran dengan How about.", solution: "Contoh: How about meeting after lunch?" },
      { prompt: "Tuliskan pembuka keluhan yang sopan dan satu permintaan.", solution: "Contoh: I'm sorry to trouble you, but the screen is not working. Could you check it, please?" },
      { prompt: "Buat instruksi bercabang jika formulir lengkap atau belum lengkap.", solution: "Contoh: If the form is complete, send it. Otherwise, ask the visitor to finish it." },
    ],
    furtherReading: [
      { title: "English Grammar in Use", authors: "Raymond Murphy" },
      { title: "English Vocabulary in Use Pre-intermediate & Intermediate", authors: "Stuart Redman" },
      { title: "Practical English Usage", authors: "Michael Swan" },
    ],
  },
};
