import type { CurriculumModule } from "@/lib/types";

export const BAB_04: CurriculumModule = {
  id: "eko2-b04",
  title: "Bab 4 — Biaya, Struktur Pasar & Kegagalan Pasar",
  summary: "Biaya memengaruhi keputusan produksi dan shutdown; struktur pasar menentukan harga, laba, dan kesejahteraan; kegagalan pasar muncul ketika pasar tidak menangkap biaya sosial atau manfaat sosial yang relevan.",
  lessons: [
    {
      id: "eko2-b04-s1",
      title: "Biaya produksi dan keputusan operasional",
      minutes: 40,
      content: `## Tujuan belajar bab

Pada akhir bab, kamu dapat membedakan biaya tetap, biaya variabel, total, rata-rata, dan marjinal; menjelaskan hukum hasil yang menurun; menghitung titik minimum AVC dan ATC; serta menerapkan aturan shutdown dan entry-exit dalam pasar kompetitif. Kamu juga dapat membedakan biaya ekonomi dan akuntansi, dan menilai peran sunk cost dalam keputusan sekarang.

> **Poin kunci**
> - Biaya total adalah biaya tetap ditambah biaya variabel, sementara biaya rata-rata dan marjinal menjelaskan biaya unit dan biaya tambahan.
> - Hasil yang menurun menandai titik di mana tambahan input variabel mulai menambah output dengan tingkat yang lebih rendah.
> - Kurva MC memotong AVC dan ATC di titik minimum masing-masing, jadi biaya marjinal menjadi indikator arah perubahan biaya rata-rata.
> - Biaya ekonomi mencakup biaya peluang; biaya akuntansi hanya mencatat pengeluaran kas dan tidak mengukur nilai alternatif yang dilepas.

## Definisi dan intuisi

Dalam jangka pendek, perusahaan memiliki biaya tetap (fixed cost) yang tak berubah saat output berubah, biaya variabel (variable cost) yang naik dengan tingkat produksi, dan biaya total (total cost) yaitu FC + VC. Yang penting bagi keputusan produksi bukan hanya total biaya, tetapi biaya per unit. **AFC = FC/Q**, **AVC = VC/Q**, **ATC = TC/Q**, dan **MC = ΔTC/ΔQ**. Saat Q meningkat, AFC turun karena biaya tetap dibagi lebih banyak unit, sedangkan AVC dan ATC bisa turun dulu lalu naik sesuai efisiensi dan kemudian hasil yang semakin menurun.

Biaya marjinal menggambarkan biaya tambahan untuk memproduksi satu unit berikutnya. Jika MC di bawah AVC, rata-rata variabel turun; jika MC di atas AVC, rata-rata variabel naik. Karena itu kurva MC memotong AVC di titik minimumnya. Prinsip yang sama berlaku untuk ATC: ketika MC lebih kecil dari ATC, ATC turun; ketika MC lebih besar, ATC naik. Titik temu ini bukan kebetulan, melainkan konsekuensi aritmetika dari rata-rata yang bergerak.

Hasil yang menurun (diminishing marginal returns) muncul ketika menambah input variabel pada kapasitas tetap mulai memberi tambahan output yang lebih kecil per unit tambahan. Dalam praktik, satu mesin lebih banyak pekerja mungkin meningkatkan output besar pada awalnya, tetapi setelah titik tertentu penambahan pekerja menghasilkan output tambahan yang semakin kecil karena ruang, koordinasi, atau mesin menjadi bottleneck. Hasil yang menurun adalah alasan kurva MC naik di tahap tertentu.

Biaya ekonomi berbeda dari biaya akuntansi karena biaya ekonomi memasukkan biaya peluang: nilai alternatif terbaik yang dikorbankan. Jika seorang founder memakai waktu untuk bisnis, biaya peluang itu adalah manfaat yang hilang dari pekerjaan lain atau investasi lain. Inilah hubungan ke Bab 1: biaya peluang bukan “uang yang keluar”, tetapi nilai dari pilihan terbaik yang ditinggalkan. Sunk cost adalah biaya masa lalu yang tidak dapat dipulihkan lagi; keputusan saat ini harus didasarkan pada manfaat dan biaya yang masih dapat dipengaruhi.

## Rumus, mekanisme, dan contoh hitungan

Untuk perusahaan fiktif dengan FC=20, data produksi berikut berlaku:

| Q | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---:|---:|---:|---:|---:|---:|---:|
| VC | 0 | 10 | 18 | 24 | 33 | 47 | 65 |
| TC = 20 + VC | 20 | 30 | 38 | 44 | 53 | 67 | 85 |
| MC | — | 10 | 8 | 6 | 9 | 14 | 18 |
| AVC | — | 10 | 9 | 8 | 8,25 | 9,4 | 10,83 |
| ATC | — | 30 | 19 | 14,67 | 13,25 | 13,4 | 14,17 |
| AFC | — | 20 | 10 | 6,67 | 5 | 4 | 3,33 |

MC dihitung sebagai perubahan TC saat output naik satu unit. Dari Q=0 ke 1, MC=10; dari 1 ke 2, MC=8; dari 2 ke 3, MC=6; lalu naik menjadi 9, 14, dan 18. Artinya hasil yang menurun mulai muncul setelah tahap awal: sampai Q=3, MC turun; setelah itu MC naik. Ini menjelaskan mengapa AVC minimum terjadi pada Q=3, yaitu 8, dan ATC minimum pada Q=4, yaitu 13,25.

Poin penting: **minimum AVC = 8 pada Q=3** karena MC di bawah AVC sebelum titik itu dan di atas AVC setelahnya. **Minimum ATC = 13,25 pada Q=4** sebab MC4=9 lebih kecil daripada ATC3=14,67, sehingga ATC turun; MC5=14 lebih besar daripada ATC4=13,25, sehingga ATC naik.

Laba ekonomi = P×Q − TC. Jika harga pasar P=15, laba untuk tiap kuantitas adalah:

- Q=0: −20
- Q=1: −15
- Q=2: −8
- Q=3: 1
- Q=4: 7
- Q=5: 8
- Q=6: 5

Laba maksimum terjadi pada Q=5 dengan laba 8. Cek: (15−13,4)×5=8. Di pasar kompetitif, profit positif menarik usaha baru; ketika banyak pemain masuk, harga cenderung turun menuju ATC minimum. Pada P=10, laba maksimum terjadi pada Q=4, tetapi masih rugi 13. Perusahaan tetap beroperasi karena penerimaan 40 menutup VC 33 dan masih menyumbang 7 untuk FC. Artinya perusahaan menutup sebagian biaya tetap sambil menanggung kerugian lebih kecil daripada jika tutup total.

Pada P=7, di bawah minimum AVC=8, laba paling baik adalah Q=0 dengan rugi 20 = FC. Menutup operasi merupakan keputusan yang rasional, karena tetap berproduksi hanya akan menambah kerugian. Jika perusahaan tetap produksi Q=3, penerimaan 21, TC 44, rugi 23 > 20. Pada P=8, laba Q=0 = −20 dan Q=3 = −20; titik ini adalah impas tutup/produksi. Ini adalah aturan shutdown yang umum dipelajari: **berhenti berproduksi bila P < AVC** dalam jangka pendek.

[[visual:eko-cost-curves]]

## Kesalahpahaman umum

1. Biaya total tinggi tidak berarti perusahaan pasti rugi; yang relevan adalah hubungan harga dengan biaya rata-rata dan biaya marjinal.
2. Menutup usaha bukan selalu kesalahan; tutup adalah keputusan saat harga tidak menutup biaya variabel.
3. Biaya akuntansi dan biaya ekonomi bukan sinonim; biaya peluang bisa besar walaupun arus kasnya kecil.

Dalam investasi dan Web3, penambang PoW membandingkan pendapatan dari blok atau fees dengan biaya variabel utama, terutama listrik. Ketika penerimaan tidak menutup biaya variabel, penambang berhenti beroperasi dalam jangka pendek. Ini bukan hanya cerita teknis: keputusan shutdown mengikuti aturan yang sama dengan bisnis tradisional, meski inputnya adalah energi dan perangkat keras. Sunk cost sering muncul pada pembelian perangkat atau kontrak kWh; keputusan sekarang harus memeriksa biaya yang akan datang, bukan harga yang sudah dibayar.

## Batas model

Model ini memakai jangka pendek, teknologi tetap, dan biaya tetap yang berarti tidak bisa diubah dalam periode tertentu. Biaya peluang dan nilai waktu uang dapat berubah dengan kebijakan, suku bunga, dan ketersediaan modal. Titik minimum AVC dan ATC bergantung pada fungsi biaya yang digambarkan; data nyata bisa berbeda dari kurva linear atau tabel hipotetis yang digunakan untuk ilustrasi.
`},
    {
      id: "eko2-b04-s2",
      title: "Persaingan sempurna: harga taker dan aturan produksi",
      minutes: 40,
      content: `## Tujuan belajar

Pada akhir sub-bab, kamu dapat menjelaskan alasan perusahaan di pasar persaingan sempurna bersifat price taker, menetapkan kondisi laba, rugi, break-even, dan shutdown, serta menggambarkan kurva penawaran perusahaan dan efek masuk-keluar pasar di jangka panjang.

> **Poin kunci**
> - Dalam persaingan sempurna, perusahaan menghadapi kurva permintaan horizontal dan tidak dapat memengaruhi harga pasar.
> - Perusahaan memproduksi sampai P = MC, tetapi keputusan jarak pendek tetap mempertimbangkan AVC.
> - Laba ekonomi positif menarik masuknya perusahaan baru; laba negatif mendorong keluar; jangka panjang mengarah ke laba nol.
> - Kurva penawaran perusahaan adalah bagian dari MC di atas AVC, bukan seluruh MC.

## Definisi, intuisi, dan mekanisme

Dalam pasar persaingan sempurna, banyak pembeli dan penjual, produk homogen, informasi luas, dan masuk-keluar pasar relatif mudah. Akibatnya, setiap firm adalah **price taker**: ia dapat menjual semua unit pada harga pasar yang berlaku, tetapi tidak dapat menaikkan harga tanpa kehilangan semua penjualan. Kurva permintaan yang dihadapi perusahaan horizontal pada harga pasar. Pendapatan marginal (MR) sama dengan harga P, karena setiap unit ekstra yang dijual menambah penerimaan sebesar P.

Aturan produksi dasar adalah **memproduksi sampai P = MC** untuk unit terakhir yang masih menguntungkan. Jika P > MC, menambah unit menambah laba; jika P < MC, unit terakhir mengurangi laba. Jadi, output optimal di pasar persaingan terjadi pada titik di mana harga sama dengan biaya marjinal, asalkan harga tidak berada di bawah AVC. Dalam jangka pendek, perusahaan tetap beroperasi untuk menutup bagian biaya tetap bila P ≥ AVC meskipun masih rugi total.

Laba ekonomi (economic profit) = total revenue − total cost. Saat P lebih besar dari ATC minimum, perusahaan memperoleh laba ekonomi positif. Saat P di antara AVC minimum dan ATC minimum, perusahaan masih beroperasi tetapi menderita rugi ekonomi. Saat P < AVC minimum, shutdown. Selama perusahaan memperoleh laba ekonomi positif, insentif masuk meningkat dan penawaran pasar bergeser ke kanan; sebaliknya, kerugian ekonomi mendorong perusahaan keluar dan penawaran berkurang. Pada titik jangka panjang, dengan masuk-keluar yang bebas, laba ekonomi nol karena tidak ada insentif bersih untuk masuk atau keluar. Dalam keseimbangan jangka panjang, **P = MC = ATC minimum** untuk perusahaan representatif.

## Rumus dan contoh angka

Gunakan contoh biaya sama seperti Bab 4 sub-bab 1. Perusahaan jangka pendek memiliki struktur biaya yang sama, dengan minimum AVC=8 dan minimum ATC=13,25. Laba = P×Q − TC, dengan data berikut:

- P=15: laba Q0..Q6 = −20, −15, −8, 1, 7, 8, 5. Maksimum di Q=5, laba 8. Ini sama dengan (15−13,4)×5.
- P=10: laba = −20, −20, −18, −14, −13, −17, −25. Maksimum di Q=4, rugi 13.
- P=7: laba = −20, −23, −24, −23, −25, −32, −43. Terbaik Q=0 dengan rugi 20 = FC. Tutup.
- P=8: laba Q0 = −20 dan Q3 = −20. Ini adalah titik impas shutdown/operasional.

Interpretasi: perusahaan tetap beroperasi saat P=10 karena penerimaan 40 menutup VC 33 dan menyisakan 7 untuk menutupi biaya tetap. Jika P turun di bawah 8, kerugian paling kecil adalah menutup usaha. Pada harga di atas 13,25, perusahaan menikmati laba ekonomi positif; ketika harga turun ke 13,25, laba ekonomi nol dan tidak ada dorongan masuk yang kuat. Dengan penurunan harga lanjut, kerugian mulai mendorong keluarnya perusahaan.

Dalam peta pasar, kurva penawaran perusahaan adalah **bagian dari MC yang berada di atas AVC minimum**. Di bawah titik shutdown, perusahaan tidak menawarkan output. Di atasnya, jumlah yang ditawarkan berubah mengikuti MC yang relevan dengan syarat operasional. Karena semua perusahaan menghadapi biaya marginal yang sama dalam model sederhana, agregasi penawaran pasar adalah jumlah output setiap perusahaan pada setiap harga.

[[visual:eko-market-structures]]

## Kesalahpahaman umum

1. P = MC bukan berarti perusahaan selalu untung; itu hanya syarat optimal untuk unit terakhir yang diproduksi.
2. Laba ekonomi nol bukan berarti perusahaan bangkrut; itu berarti laba normal atau pengembalian setara alternatif yang dikorbankan.
3. Kurva penawaran perusahaan di jangka pendek tidak sama dengan kurva MC seluruhnya, karena bagian di bawah AVC ditutup.

Dalam Web3, model ini membantu menjelaskan penambang PoW: ketika reward dan fees tidak cukup menutup biaya variabel utama (listrik, pemeliharaan perangkat, dan biaya kelistrikan), mereka berhenti beroperasi. Ini adalah contoh nyata dari aturan shutdown. Jika biaya energi naik tajam, output hashing turun sampai penambang yang paling efisien bertahan. Di sisi pasar, masuk-keluar penambang dapat memengaruhi keamanan jaringan, seberapa cepat transaksi diproses, dan distribusi reward.

## Batas model

Model persaingan sempurna menganggap produk homogen, informasi lengkap, dan tidak ada kesenjangan modal besar. Dalam banyak pasar nyata, perusahaan menghadapi diferensiasi produk, biaya pencarian, atau hambatan masuk. Jangka panjang dalam industri digital dan platform berbasis jaringan sering lebih kompleks karena efek jaringan, skala ekonomi, dan regulasi mengubah keseimbangan harga dan output.
`},
    {
      id: "eko2-b04-s3",
      title: "Monopoli: kekuatan pasar dan deadweight loss",
      minutes: 40,
      content: `## Tujuan belajar

Pada akhir sub-bab, kamu dapat memahami mengapa monopoli punya daya pasar, bagaimana MR menentukan output, serta menghitung perubahan surplus, laba, dan deadweight loss ketika harga lebih tinggi daripada biaya marginal.

> **Poin kunci**
> - Monopoli menjual seluruh output pada harga yang dibentuk oleh permintaan pasar; ia bukan price taker.
> - Untuk menaikkan penjualan, monopolis perlu menurunkan harga pada semua unit, sehingga MR < P.
> - Aturan keputusan monopoli adalah MR = MC, bukan P = MC.
> - Monopoli menghasilkan harga yang lebih tinggi dan kuantitas lebih rendah daripada kompetisi, menciptakan deadweight loss.

## Definisi dan intuisi

Monopoli muncul ketika satu perusahaan menjadi satu-satunya penjual produk atau jasa yang tidak punya pengganti dekat. Karena permintaan pasar turun pada harga yang lebih tinggi, monopolis menghadapi kurva permintaan pasar yang menurun. Ia memilih output untuk memaksimalkan laba, tetapi tidak bisa memisahkan “menjual satu unit tambahan” dari “mengurangi harga semua unit yang sudah dijual.” Karena itu **MR < P** untuk semua unit kecuali unit pertama. Keputusan optimal ditemukan di titik di mana tambahan pendapatan marginal sama dengan tambahan biaya marginal: **MR = MC**.

Setelah output optimal ditentukan, harga ditarik dari kurva permintaan pada kuantitas itu. Karena harga di atas MC, konsumen membayar lebih daripada biaya sosial produksi satu unit terakhir. Kesenjangan antara harga dan biaya marginal adalah sumber kelebihan laba monopoli dan deadweight loss: banyak transaksi yang bila terjadi akan memberi manfaat bagi konsumen dan produsen tetapi tidak tercapai karena penjual menahan output agar harga tetap tinggi.

## Rumus dan contoh hitungan

Gunakan permintaan pasar linear **P = 50 − Q** dan biaya marjinal konstant **MC = 10**. Pendapatan total **TR = P×Q = (50−Q)Q = 50Q − Q²**. Maka **MR = dTR/dQ = 50 − 2Q**. Menyamakan MR dengan MC:

**50 − 2Q = 10 → Q = 20; P = 50 − 20 = 30.**

Comparasi dengan persaingan sempurna di mana **P = MC = 10** menghasilkan **Q = 40**. Dalam tabel:

| Ukuran | Persaingan sempurna (P=MC) | Monopoli (MR=MC) |
|---|---:|---:|
| Q | 40 | 20 |
| P | 10 | 30 |
| SK | ½×40×(50−10)=800 | ½×20×(50−30)=200 |
| Laba (SP) | 0 | (30−10)×20=400 |
| Total surplus | 800 | 600 |
| DWL | 0 | ½×(40−20)×(30−10)=200 |

Monopoli menghasilkan laba 400, tetapi total surplus turun 200 dibanding kompetisi karena 20 unit transaksi yang mungkin terjadi tidak terjadi. Surplus konsumen juga turun karena konsumen membayar lebih tinggi dan membeli lebih sedikit. Keluaran ini secara langsung menggambarkan efisiensi sosial yang turun.

Diskriminasi harga sempurna adalah batas teoretis ketika monopolist dapat mengenakan setiap konsumen sesuai willingness to pay. Pada kasus ini, Q=40, laba = ½×40×40=800, surplus konsumen = 0, DWL=0. Ini sangat efisien secara alokasi, tetapi seluruh surplus berpindah ke produsen. Diskriminasi harga sempurna jarang terjadi karena membutuhkan informasi, kemampuan mengukur permintaan, dan pencegahan arbitrase.

Monopoli alamiah terjadi ketika satu perusahaan memiliki biaya produksi yang lebih rendah karena skala ekonomi, sehingga dua atau lebih perusahaan justru lebih mahal. Misal FC=300, MC=10, kurva permintaan sama. Monopoli tanpa regulasi tetap memilih Q=20, P=30, laba = 400 − 300 = 100. Jika pemerintah menetapkan **harga = MC**, output mencapai Q=40, P=10, tetapi perusahaan rugi 300 karena penerimaan 400 tidak menutup biaya tetap 300 + biaya variabel 400. Jika pemerintah menetapkan **harga = biaya rata-rata** (ATC), maka P = 300/Q + 10 dan kuantitas yang ditentukan dengan soal sama dapat menghasilkan Q=30, P=20, laba 0. Regulasi sering menyeimbangkan efisiensi, akses, dan kelangsungan operasi.

## Kesalahpahaman umum

1. Monopoli tidak berarti “semua harga ditentukan tanpa batas”; ia tetap dibatasi oleh permintaan dan biaya.
2. MR = MC bukan berarti P = MC; perbedaan itu menciptakan wedge antara harga dan biaya marginal.
3. Tidak semua monopoli adalah ilegal; beberapa adalah hasil dari skala ekonomi atau hak legal tertentu.

Dalam Web3, konsentrasi validator atau mining pool dapat diukur dengan HHI. Semakin tinggi HHI, semakin terkonsentrasi pasar, dan semakin besar kekuatan untuk memengaruhi biaya, throughput, atau distribusi reward. Regulasi dapat membatasi manfaat eksternal dan mendorong desentralisasi. Demikian pula, lapisan validator dengan kuasa terbatas dapat membawa risiko kontrol terpusat, meski komunitas menilai itu sebagai trade-off antara keamanan dan skalabilitas.

## Batas model

Model ini mengasumsikan satu produsen, kurva permintaan stabil, dan biaya yang mudah diprediksi. Dalam pasar nyata, monopoli sering berhadapan dengan potensi entry atau substitusi, peraturan antitrust, dan strategi diferensiasi. Efek jaringan dan biaya adaptasi digital sering membuat struktur pasar lebih kompleks daripada model satu perusahaan tunggal.
`},
    {
      id: "eko2-b04-s4",
      title: "Oligopoli dan persaingan monopolistik",
      minutes: 40,
      content: `## Tujuan belajar

Pada akhir sub-bab, kamu dapat menghitung konsentrasi pasar menggunakan CR dan HHI, mengenali ekuilibrium Nash dalam permainan sederhana, dan membedakan oligopoli dari persaingan monopolistik serta konsekuensi terhadap harga, inovasi, dan laba.

> **Poin kunci**
> - Konsentrasi pasar diukur dengan CR (konsentrasi rasio) dan HHI (Herfindahl-Hirschman Index), yang bertambah ketika pasar dikuasai segelintir perusahaan.
> - Dalam permainan sederhana, strategi dominan dan ekuilibrium Nash membantu menjelaskan pengambilan keputusan yang mungkin mengarah pada hasil suboptimal bersama.
> - Kartel menarik karena dapat menaikkan laba bersama, tetapi ada godaan curang untuk memotong harga atau menaikkan output.
> - Persaingan monopolistik membedakan produk tetapi tetap ada masuk dan keluar, sehingga laba ekonomi jangka panjang cenderung mendekati nol.

## Definisi, intuisi, dan mekanisme

Oligopoli adalah pasar dengan sejumlah kecil penjual yang masing-masing memiliki kekuatan strategis. Karena keputusan satu perusahaan memengaruhi usaha lain, oligopolis menghadapi game theory. Dalam pasar seperti itu, konsentrasi sering tinggi. **CR2** adalah pangsa dua perusahaan terbesar; **HHI** adalah jumlah kuadrat pangsa pasar dalam persentase: HHI = Σ(sᵢ²). Contoh: pangsa 40, 30, 20, 10 memberi HHI = 1.600 + 900 + 400 + 100 = 3.000; CR2 = 70. Empat perusahaan sama (25 masing-masing) menghasilkan HHI = 2.500. Sepuluh perusahaan sama (10 masing-masing) menghasilkan HHI = 1.000. Monopoli sempurna memberi HHI = 10.000.

Teori permainan paling sederhana menggambarkan dorongan keluar dari kolusi. Dilema tahanan (prisoner's dilemma) menyajikan payoff yang sama untuk dua pemain. Dalam laba, matriks berikut berlaku:

| | B Tinggi | B Rendah |
|---|---:|---:|
| A Tinggi | (50, 50) | (20, 70) |
| A Rendah | (70, 20) | (30, 30) |

Strategi dominan untuk A dan B adalah **Rendah**. Jika B memilih Tinggi, A lebih baik memilih Rendah karena 70 > 50. Jika B memilih Rendah, A tetap lebih baik memilih Rendah karena 30 > 20. Simetris untuk B. Ekuilibrium Nash adalah (Rendah, Rendah) = (30, 30), dibanding hasil kolusif (Tinggi, Tinggi) = (50, 50). Jadi, meskipun kerja sama membuat keduanya lebih baik, godaan curang mendorong setiap pihak menarik diri. Dalam kartel, setiap anggota ingin meningkatkan output atau menurunkan harga agar mendapat bagian lebih besar; hasilnya memecah kolusi.

Persaingan monopolistik muncul ketika banyak perusahaan menjual produk yang terdiferensiasi, bukan homogen. Produk bisa dibedakan oleh merek, fitur, lokasi, atau kualitas. Masuk ke pasar relatif mudah, sehingga dalam jangka panjang laba ekonomi cenderung mendekati nol. Kurva permintaan perusahaan turun karena ada substitusi dekat, tetapi differensiasi memungkinkan perusahaan bertahan meski P > MC. Bagi konsumen, solusi ini memberi variasi produk, tapi juga bisa mendorong biaya pemasaran, iklan, dan daya tarik merek yang lebih besar dari yang dibutuhkan secara sosial.

[[visual:eko-market-structures]]

## Kesalahpahaman umum

1. Tingginya HHI tidak otomatis berarti pasar tidak adil; itu hanya indikator konsentrasi.
2. Kolusi bukan selalu “mimpi” yang nyata; itu sering ditekan oleh insentif curang di setiap periode.
3. Produknya berbeda bukan berarti pasar itu bersaing sempurna; pasar bisa sangat terkonsentrasi sekaligus beragam.

Dalam Web3, konsentrasi validator atau mining pool, likuiditas, dan kontrol protokol dapat dianalisis dengan HHI untuk mengidentifikasi keterpusatan. Indikator ini membantu memeriksa apakah pasar didominasi beberapa pihak, meski tidak memberikan angka pasti tanpa data spesifik. Kinerja protokol juga sering dipengaruhi oleh diferensiasi token, reputasi merek, dan promosi, mirip dengan persaingan monopolistik. Dalam investasi, sentimen pasar dan persepsi kualitas dapat menimbulkan premium yang tidak sepenuhnya ditopang oleh biaya sosial.

## Batas model

Teori permainan yang sederhana mengabaikan berulangnya interaksi, informasi yang tidak simetris, dan kepentingan politik. Dalam pasar nyata, kolusi bisa dibatasi oleh hukum, reputasi, pengawasan, atau teknologi. Persaingan monopolistik sering menimbulkan biaya iklan dan variabilitas kualitas yang tidak ditangkap dalam model dasar.
`},
    {
      id: "eko2-b04-s5",
      title: "Kegagalan pasar: eksternalitas, barang publik, dan informasi asimetris",
      minutes: 40,
      content: `## Tujuan belajar

Pada akhir sub-bab, kamu dapat membedakan eksternalitas negatif dan positif, menghitung optimum sosial, mendeskripsikan pajak Pigouvian dan subsidi, serta menjelaskan mengapa barang publik, sumber daya bersama, dan informasi asimetris memerlukan kebijakan atau tata kelola tambahan.

> **Poin kunci**
> - Eksternalitas muncul ketika keputusan satu pihak memengaruhi pihak lain yang tidak ikut menentukan keputusan tersebut.
> - Optimum sosial terjadi ketika biaya sosial marginal sama dengan manfaat sosial marginal, bukan ketika fungsi pasar privat seimbang.
> - Pajak Pigouvian dapat menyesuaikan insentif; subsidi dapat mendorong aktivitas yang memberi manfaat eksternal positif.
> - Barang publik, sumber daya bersama, dan asimetri informasi memicu gagal bayar, overuse, dan keputusan yang buruk.

## Definisi dan intuisi

Eksternalitas terjadi ketika keputusan individu memengaruhi kesejahteraan pihak lain di luar transaksi yang langsung. **Eksternalitas negatif** seperti polusi menambah biaya sosial yang tidak dibayar oleh pembeli atau penjual. **Eksternalitas positif** seperti vaksinasi atau penelitian ilmiah menambah manfaat sosial yang tidak seluruhnya dibayar oleh pihak yang mengambil keputusan. Dalam model, kurva permintaan mewakili manfaat privat, sementara kurva penawaran mewakili biaya privat. Ketika ada eksternalitas, biaya sosial atau manfaat sosial berbeda dari biaya atau manfaat privat.

Gunakan kurva berikut: **P = 20 − Q/5** untuk permintaan; **P = 4 + Q/5** untuk biaya marjinal privat. Ini setara dengan Qd = 100 − 5P dan Qs = −20 + 5P. Dengan eksternalitas negatif konstan 4 per unit, biaya marjinal sosial menjadi **P = 8 + Q/5**. Pasar bebas menghasilkan Q=40, P=12. Optimum sosial tercapai saat **20 − Q/5 = 8 + Q/5**, sehingga **Q=30, P=14**. Kelebihan produksi = 10 unit. Deadweight loss eksternalitas = **½×(40−30)×4 = 20**. Ini terjadi karena pada Q=40, pembeli masih bersedia membayar 12, tetapi biaya sosial yang relevan adalah 16; selisih 4 per unit mencerminkan biaya eksternal yang tidak dihitung saat keputusan dibuat.

Pajak Pigouvian adalah pajak per unit sebesar eksternalitas marginal, yaitu t=4. Dengan pajak pada penjual, keseimbangan baru adalah Q=30, P_b=14, P_s=10, penerimaan pajak = 4×30 = 120, dan DWL eksternalitas = 0. Pajak menutup “celah” antara biaya privat dan sosial. Dalam general case, rumus dasar menunjukkan **Q = 40 − 2,5t**; deadweight loss dari pajak berlebih mengikuti **DWL = (Q−30)²/5**. Tabel berikut menegaskan bahwa t=0 memberi Q=40, DWL=20; t=2 memberi Q=35, DWL=5; t=4 memberi Q=30, DWL=0; t=6 memberi Q=25, DWL=5; t=8 memberi Q=20, DWL=20. Ini mengingatkan bahwa pajak yang terlalu rendah tidak cukup memperbaiki eksternalitas, sedangkan pajak yang terlalu tinggi juga menciptakan distorsi baru.

Untuk eksternalitas positif, subsidi dapat digunakan untuk mendorong aktivitas yang menghasilkan manfaat sosial di luar manfaat privat. Teori Coase menekankan bahwa bila hak properti jelas dan biaya transaksi rendah, pihak yang terpengaruh dapat bernegosiasi untuk mencapai alokasi yang efisien tanpa campur tangan pemerintah. Namun dalam praktik, koordinasi, informasi, dan distribusi hak sering membuat penyelesaian pasar tidak mudah.

Barang publik tidak dapat dibatasi secara efektif dan konsumsi satu orang tidak mengurangi konsumsi orang lain. Lampu jalan adalah contoh sederhana. Tiga warga masing-masing menilai lampu jalan 30; biaya pembangunan 60. Sendiri tidak ada yang mau membeli karena 30 < 60. Tetapi total manfaat 90 > 60, surplus sosial 30. Patungan 20 per orang memberi manfaat bersih 10 per orang. Problem free rider muncul karena setiap orang berharap pihak lain membayar, sehingga investasi publik bisa kurang dari tingkat optimal.

Sumber daya bersama (common resources) adalah barang yang rival but can be difficult to exclude, seperti perikanan atau lahan umum. Overuse dapat terjadi karena setiap pengguna menerima manfaat privat dari tambahan unit eksploitasi, sementara biaya dampak umum dibagi seluruh komunitas. Dalam contoh sederhana, total tangkapan per jumlah perahu 1..6 adalah 10, 18, 24, 28, 30, 30; biaya per perahu =5; rata-rata per perahu =10, 9, 8, 7, 6, 5; serta tangkapan marjinal =10, 8, 6, 4, 2, 0. Banyak kapal masuk sampai hasil rata-rata turun ke biaya per perahu, menjelaskan overfishing atau overgrazing: individu tidak menanggung seluruh biaya sosial dari tambahan penggunaan.

Asimetri informasi muncul ketika satu pihak tahu lebih banyak daripada pihak lain. **Adverse selection** terjadi sebelum transaksi, seperti pasar mobil bekas yang mengandung “lemons” karena pembeli tidak tahu kualitas yang benar-benar dimiliki mobil. **Moral hazard** terjadi setelah transaksi, ketika pihak yang terlindungi dari konsekuensi berubah perilaku. Dalam proyek token atau protokol Web3, informasi asimetris muncul ketika pengguna lemah memahami risiko, tokenomics, atau celah audit; audit independen, transparansi, dan desain smart contract yang terbaca membantu mengurangi masalah ini.

[[visual:eko-market-structures]]

## Kesalahpahaman umum

1. Pajak Pigouvian bukan “pajak untuk semua kasus”; ia tepat ketika eksternalitas marginal benar-benar diketahui dan relevan.
2. Barang publik tidak dihasilkan karena masyarakat “egois”; ia gagal muncul karena free rider dan biaya eksklusi.
3. “Asimetri informasi” tidak selalu berarti penipuan; ia sering berarti distribusi pengetahuan yang tidak setara di antara pihak yang bertransaksi.

Dalam Web3, pengembangan protokol open-source memiliki ciri barang publik: manfaat code dapat diakses banyak orang tanpa mengurangi penggunaan orang lain, tetapi biaya pengembangan, audit, dan maintenance sering dibagi secara tidak merata. Ruang blok yang terbatas bersifat rival; biaya gas berfungsi seperti harga yang membatasi penggunaan kapasitas jaringan. Di saat yang sama, proyek token dapat menyembunyikan risiko atau memakai asimetri informasi yang besar; audit dan transparansi adalah mekanisme penting untuk mengurangi keputusan yang dibawa oleh informasi yang tidak setara.

## Batas model

Model dasar menganggap eksternalitas dan asimetri informasi dapat diukur dengan fungsi sederhana, padahal dalam kenyataan dampak sosial sering tidak linear, tidak terukur, atau bahkan belum terkatalog. Coase memberikan intuisi penting, tetapi proses negosiasi bisa gagal bila hak properti tidak jelas, biaya transaksi tinggi, atau pihak berkepentingan tidak terorganisir. Karena itu kebijakan yang efektif sering memadukan harga, regulasi, insentif, dan tata kelola yang memperhitungkan informasi yang tidak lengkap.
`},
  ],
  chapterResources: {
    summary: [
      "Biaya tetap, variabel, total, rata-rata, dan marjinal menentukan keputusan jangka pendek perusahaan.",
      "MC memotong AVC dan ATC pada titik minimum karena biaya rata-rata bergerak sesuai biaya tambahan.",
      "Persaingan sempurna mendorong P = MC, tetapi shutdown terjadi bila P < AVC.",
      "Monopoli menghadapi MR < P dan menghasilkan harga lebih tinggi serta kuantitas lebih rendah daripada pasar kompetitif.",
      "Oligopoli dan persaingan monopolistik menegaskan bahwa konsentrasi, strategi, dan diferensiasi mengubah hasil pasar.",
      "Eksternalitas, barang publik, dan asimetri informasi mendorong kegagalan pasar yang memerlukan kebijakan.",
    ],
    glossary: [
      { term: "Biaya tetap", english: "Fixed cost", definition: "Biaya yang tidak berubah dalam jangka pendek walau output berubah." },
      { term: "Biaya variabel", english: "Variable cost", definition: "Biaya yang berubah seiring jumlah output yang diproduksi." },
      { term: "Biaya marjinal", english: "Marginal cost", definition: "Tambahan biaya untuk memproduksi satu unit tambahan." },
      { term: "Shutdown", english: "Shutdown", definition: "Keputusan menghentikan produksi sementara bila harga tidak menutup AVC." },
      { term: "MR = MC", english: "Marginal revenue equals marginal cost", definition: "Kondisi laba maksimum untuk perusahaan dengan kendali pasar yang signifikan." },
      { term: "HHI", english: "Herfindahl-Hirschman Index", definition: "Ukuran konsentrasi pasar yang menjumlah kuadrat pangsa pasar semua perusahaan." },
      { term: "Eksternalitas", english: "Externality", definition: "Dampak biaya atau manfaat dari keputusan satu pihak terhadap pihak lain yang tidak ikut menilai keputusan itu." },
      { term: "Barang publik", english: "Public good", definition: "Barang yang tidak mudah dibatasi dan konsumsi satu orang tidak mengurangi konsumsi orang lain." },
    ],
    exercises: [
      { prompt: "Hitung AVC, ATC, dan MC dari data biaya tetap 20 dan VC 0, 10, 18, 24, 33, 47, 65. Identifikasi titik minimum AVC dan ATC.", solution: "AVC: 10, 9, 8, 8,25, 9,4, 10,83; ATC: 30, 19, 14,67, 13,25, 13,4, 14,17; MC: 10, 8, 6, 9, 14, 18. Minimum AVC = 8 pada Q=3; minimum ATC = 13,25 pada Q=4." },
      { prompt: "Dengan P = 50 − Q dan MC = 10, hitung output monopoli, harga, dan DWL dibanding persaingan sempurna.", solution: "Monopoli: Q=20, P=30, laba=(30−10)×20=400, DWL=200. Persaingan sempurna: Q=40, P=10, DWL=0." },
      { prompt: "Jelaskan bagaimana pajak Pigouvian t=4 mengubah kuantitas dan harga bila eksternalitas negatif sama dengan 4 per unit.", solution: "Pajak membuat biaya sosial memasuki keputusan penjual. Dengan t=4, Q turun dari 40 ke 30, buyer price 14, seller price 10, dan DWL eksternalitas hilang." },
    ],
    furtherReading: [
      { title: "Microeconomics", authors: "Pindyck & Rubinfeld" },
      { title: "Principles of Economics", authors: "Mankiw" },
      { title: "Industrial Organization", authors: "Cabral" },
    ],
  },
};
