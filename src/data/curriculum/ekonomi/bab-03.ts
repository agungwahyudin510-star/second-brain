import type { CurriculumModule } from "@/lib/types";

export const BAB_03: CurriculumModule = {
  id: "eko2-b03",
  title: "Bab 3 — Elastisitas, Surplus & Intervensi Pasar",
  summary: "Elastisitas mengukur respons pasar; surplus mengukur manfaat transaksi; intervensi mengubah harga, kuantitas, dan distribusi manfaat.",
  lessons: [
    {
      id: "eko2-b03-s1",
      title: "Elastisitas harga permintaan",
      minutes: 40,
      content: `## Tujuan belajar bab

Pada akhir bab, kamu dapat menghitung elastisitas dengan metode titik tengah, membedakan elastis, inelastis, dan unitari, menjelaskan faktor penentunya, serta menghubungkan perubahan harga dengan total penerimaan. Kamu juga dapat menghitung surplus dan dampak batas harga, pajak, serta subsidi dengan fungsi linear; membedakan prediksi positif dari penilaian normatif; dan menyebut asumsi yang membatasi setiap kesimpulan.

> **Poin kunci**
> - Elastisitas harga permintaan mengukur persentase respons jumlah diminta terhadap persentase perubahan harga.
> - Metode titik tengah memakai rata-rata nilai awal dan akhir sehingga hasil persentase tidak bergantung pada arah perbandingan.
> - Jika permintaan elastis, perubahan harga dan total penerimaan bergerak berlawanan; jika inelastis, keduanya searah.
> - Pada kurva permintaan linear, kemiringan tetap tetapi elastisitas berubah menurut titik yang diamati.

## Definisi dan intuisi

Elastisitas harga permintaan (price elasticity of demand) mengukur seberapa kuat kuantitas yang diminta merespons perubahan harga, dalam persentase. Nilainya biasanya dilaporkan sebagai nilai absolut untuk klasifikasi; tanda negatif menunjukkan arah hubungan berlawanan: harga naik, jumlah diminta turun. Elastisitas bukan kemiringan kurva. Kemiringan memakai perubahan unit, sedangkan elastisitas membandingkan perubahan relatif, sehingga berguna membandingkan pasar dengan satuan dan skala berbeda.

Bayangkan harga naik dengan persentase yang sama pada dua barang. Konsumen mungkin cepat mengurangi pembelian barang yang punya banyak pengganti, tetapi tetap membeli hampir sama banyak barang penting dalam jangka pendek. Perbedaan kekuatan respons itu adalah perbedaan elastisitas. Ketersediaan substitusi, proporsi anggaran, kebutuhan atau kebiasaan, definisi pasar, dan waktu penyesuaian menentukan besarnya respons. Semakin sempit definisi pasar, biasanya semakin mudah menemukan pengganti dekat.

## Rumus, mekanisme, dan contoh hitungan

Metode titik tengah (midpoint method) menghitung perubahan persentase terhadap rata-rata nilai awal dan akhir:

**%ΔQ = (Q₂ − Q₁) ÷ [(Q₁ + Q₂) ÷ 2] × 100%; %ΔP = (P₂ − P₁) ÷ [(P₁ + P₂) ÷ 2] × 100%. Elastisitas = |%ΔQ ÷ %ΔP|.**

Q₁ dan Q₂ adalah kuantitas awal dan akhir; P₁ dan P₂ adalah harga awal dan akhir. Tanda nilai %ΔP dan %ΔQ tetap ditampilkan untuk menjelaskan arah, lalu nilai absolut rasio digunakan untuk klasifikasi. Elastisitas lebih besar dari 1 berarti elastis, kurang dari 1 berarti inelastis, dan sama dengan 1 berarti unitari.

| Langkah | Perhitungan untuk P 10→12 dan Q 100→80 | Hasil |
|---|---|---:|
| Rata-rata Q dan P | (100+80)/2 = 90; (10+12)/2 = 11 | — |
| Persentase perubahan Q | (80−100)/90 × 100% | −22,22% |
| Persentase perubahan P | (12−10)/11 × 100% | +18,18% |
| Elastisitas | \|−22,22/18,18\| | 1,22; elastis |
| TR sebelum | 10×100 | 1.000 |
| TR sesudah | 12×80 | 960; turun |

TR (total revenue/total penerimaan) adalah harga per unit dikalikan jumlah terjual. Mekanismenya: perubahan harga mengubah penerimaan tiap unit sekaligus jumlah unit; elastisitas menentukan efek mana yang lebih kuat. Pada contoh elastis, penurunan jumlah relatif lebih besar daripada kenaikan harga, sehingga TR turun.

| Respons inelastis | Perhitungan | Hasil |
|---|---|---:|
| %ΔQ dengan midpoint | (95−100)/97,5 × 100% | −5,13% |
| %ΔP dengan midpoint | (12−10)/11 × 100% | +18,18% |
| Elastisitas | \|−5,13/18,18\| | 0,28; inelastis |
| TR sebelum → sesudah | 10×100 → 12×95 | 1.000 → 1.140 |

Untuk permintaan unitari, kenaikan harga 10% yang diimbangi penurunan kuantitas 10% mempertahankan TR secara pendekatan lokal. Contoh Indonesia: kenaikan harga kopi kemasan mendorong sebagian pembeli beralih merek; respons satu merek bergantung pada pengganti yang tersedia dan periode pengamatan. Contoh global: konsumen layanan streaming dapat membatalkan atau mengganti langganan setelah harga berubah; angka elastisitas aktual harus memakai data yang terverifikasi.

[[visual:eko-elasticity]]

## Kurva linear, kesalahpahaman, dan aplikasi

Pada kurva linear menurun, kemiringan dQ/dP tetap, tetapi elastisitas titik adalah |(dQ/dP)×(P/Q)|. Di dekat intersep harga, P/Q besar sehingga permintaan relatif elastis; di dekat intersep kuantitas, P/Q kecil sehingga relatif inelastis. Karena itu satu kurva lurus tidak memiliki satu elastisitas konstan. Perubahan TR sepanjang kurva konsisten: bagian elastis berhubungan dengan TR yang meningkat saat harga turun; bagian inelastis berhubungan dengan TR yang menurun saat harga turun.

## Kesalahpahaman umum

1. Elastisitas 1,22 bukan berarti harga berubah 1,22%; nilainya adalah rasio dua perubahan persentase.
2. Elastisitas 0,28 tetap menunjukkan jumlah berubah; “inelastis” berarti respons persentasenya lebih kecil daripada perubahan harga.
3. Kemiringan kurva yang sama tidak berarti elastisitas sama di semua titik.

Dalam investasi, pendapatan penjual tidak bisa diproyeksikan dari kenaikan harga saja: investor perlu menilai elastisitas permintaan produk dan substitusinya. Dalam Web3, biaya transaksi jaringan bertindak sebagai pajak implisit bagi pengguna; permintaan aplikasi yang elastis lebih mudah turun ketika biaya naik. Loss aversion juga membuat pengguna merasakan kenaikan harga sebagai kehilangan lebih kuat daripada diskon nominal setara.

## Batas model

Contoh mengisolasi perubahan harga dan jumlah, menjaga faktor lain tetap, serta menganggap kualitas, pasar, dan periode tidak berubah. Elastisitas empiris perlu data dan rancangan identifikasi; perubahan pendapatan, promosi, kualitas, atau musim yang bersamaan dapat mengacaukan rasio. TR mengukur penerimaan kotor, bukan laba, biaya, atau kesejahteraan.
`,
    },
    {
      id: "eko2-b03-s2",
      title: "Elastisitas pendapatan, silang, dan penawaran",
      minutes: 40,
      content: `## Tujuan belajar

Hitung elastisitas pendapatan, elastisitas silang, dan elastisitas harga penawaran; klasifikasikan hubungan barang dan jelaskan mengapa waktu mengubah kemampuan pembeli maupun penjual untuk merespons.

> **Poin kunci**
> - Tanda elastisitas pendapatan membedakan barang normal dari inferior; besarnya membedakan barang kebutuhan dan mewah dalam klasifikasi pengantar.
> - Tanda elastisitas silang positif menandai substitusi, sedangkan tanda negatif menandai komplementer.
> - Elastisitas penawaran mengukur respons persentase kuantitas yang dijual terhadap persentase harga.
> - Respons jangka panjang biasanya lebih besar karena pembeli dan produsen memperoleh lebih banyak pilihan penyesuaian.

## Definisi, intuisi, dan rumus

Elastisitas pendapatan permintaan (income elasticity of demand) membandingkan persentase perubahan kuantitas yang diminta dengan persentase perubahan pendapatan. **Eᵧ = %ΔQ ÷ %ΔY**, dengan Q sebagai kuantitas dan Y sebagai pendapatan. Nilai positif menunjukkan barang normal: pembelian naik ketika pendapatan naik. Nilai negatif menunjukkan barang inferior: pembelian turun ketika pendapatan naik. Untuk barang normal, nilai di atas 1 sering disebut barang mewah (luxury) dalam konteks respons permintaan, sedangkan nilai antara 0 dan 1 sering disebut kebutuhan. “Mewah” adalah klasifikasi respons, bukan penilaian moral.

Metodenya dapat memakai persentase biasa atau midpoint secara konsisten. Ketika pendapatan bertambah, rumah tangga mengubah komposisi belanja. Jika barang tertentu menyerap bagian lebih besar dari tambahan anggaran, elastisitas pendapatannya tinggi; jika pembelian bertambah lebih lambat, nilainya rendah. Klasifikasi bergantung pada kelompok, waktu, dan definisi barang. Barang yang inferior bagi satu kelompok bukan inferior untuk semua konsumen.

Elastisitas silang (cross-price elasticity) mengukur respons permintaan barang X terhadap perubahan harga barang Y: **Eₓᵧ = %ΔQₓ ÷ %ΔPᵧ**. Qₓ adalah kuantitas barang X dan Pᵧ harga barang Y. Nilai positif menunjukkan substitusi: kenaikan harga Y mendorong pembeli ke X. Nilai negatif menunjukkan komplementer: kenaikan harga Y mengurangi penggunaan bersama X. Nilai mendekati nol menunjukkan hubungan silang yang lemah dalam rentang pengamatan, bukan bukti bahwa barang sama sekali tak berkaitan.

Elastisitas harga penawaran (price elasticity of supply) adalah **Eₛ = %ΔQₛ ÷ %ΔP**, dengan Qₛ jumlah yang ditawarkan. Tanda biasanya positif karena harga yang lebih tinggi memberi insentif produksi; klasifikasi elastis/inelastis memakai besar absolut. Kapasitas menganggur, persediaan, akses input, teknologi, dan kemampuan masuk pasar menentukan seberapa banyak output dapat berubah.

## Contoh hitungan lengkap

| Ukuran | Data dan pembagian persentase | Hasil dan klasifikasi |
|---|---|---|
| Pendapatan: barang mewah | Pendapatan +20%; jumlah +30%; 30%÷20% | Eᵧ=1,5; barang normal dengan respons mewah |
| Pendapatan: barang inferior | Pendapatan +20%; jumlah −10%; −10%÷20% | Eᵧ=−0,5; inferior |
| Silang: kopi dan teh | Harga kopi +10%; jumlah teh +6%; 6%÷10% | Eₓᵧ=+0,6; substitusi |
| Silang: printer dan tinta | Harga printer +10%; jumlah tinta −8%; −8%÷10% | Eₓᵧ=−0,8; komplementer |

Langkah membaca baris pertama: pertahankan persentase dalam satuan yang sama, bagi perubahan jumlah dengan perubahan pendapatan, lalu baca tanda dan besar hasil. Pada baris printer, harga printer yang naik mengurangi pembelian perangkat dan kebutuhan tinta bersama; tanda negatif menangkap hubungan komplementer. Contoh ini menyatakan pola ilustratif, bukan pengukuran pasar aktual.

Contoh Indonesia: kenaikan pendapatan rumah tangga dapat menggeser belanja dari satu jenis pangan ke pilihan yang dianggap lebih disukai; untuk menyebut barang tertentu inferior, diperlukan pengamatan kuantitas dan pendapatan pada kelompok dan periode yang relevan. Contoh global: kenaikan harga kopi dapat mendorong sebagian konsumen memilih teh sebagai substitusi, tetapi besarnya peralihan memerlukan data terverifikasi. Jangan menafsirkan cerita sebagai estimasi statistik.

## Mekanisme dan pengaruh waktu

Dalam jangka pendek, rumah tangga belum tentu mengganti kebiasaan atau peralatan; perusahaan terkendala kapasitas, jadwal, dan kontrak input. Seiring waktu, pembeli mencari merek atau teknologi pengganti, sementara produsen menambah shift, memperluas fasilitas, atau masuk pasar. Maka elastisitas sering lebih besar dalam jangka panjang, tetapi arah dan ukuran harus diuji pada pasar tertentu. Barang tahan lama, kapasitas tidak dapat dipindah, atau kontrak jangka panjang dapat membuat respons tetap kecil.

[[visual:eko-elasticity-types]]

## Kesalahpahaman umum

1. Barang inferior bukan sinonim barang berkualitas buruk; istilah itu hanya menjelaskan respons kuantitas terhadap pendapatan.
2. Harga barang X yang naik tidak menentukan tanda elastisitas silang X terhadap Y; rumusnya memakai perubahan harga Y.
3. Penawaran elastis bukan klaim bahwa produsen selalu langsung menaikkan output; kapasitas dan waktu membatasi respons.

Investor yang memperkirakan pertumbuhan konsumsi perlu menguji elastisitas pendapatan produk pada segmen pelanggan, bukan menyamakan kenaikan pendapatan agregat dengan penjualan pasti. Dalam Web3, staking mengunci token selama periode tertentu: pasokan likuid jangka pendek menjadi kurang elastis, sedangkan pelepasan atau penerbitan baru mengubah respons jangka panjang. Psikologi kebiasaan memperlambat perpindahan pengguna meski substitusi tersedia; biaya pencarian juga memengaruhi pilihan.

## Batas model

Rasio menganggap perubahan harga, pendapatan, dan kuantitas terukur pada pasar serta periode yang cocok. Korelasi tidak mengidentifikasi sebab apabila kualitas, preferensi, promosi, atau faktor lain ikut berubah. Kategori normal, inferior, substitusi, dan komplementer dapat berbeda antar kelompok dan berubah sepanjang waktu.
`,
    },
    {
      id: "eko2-b03-s3",
      title: "Surplus konsumen, produsen, dan efisiensi",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan willingness to pay dan biaya minimum penjual, hitung surplus konsumen dan produsen dari kurva linear, lalu gunakan total surplus untuk menilai efisiensi ekuilibrium dalam model pasar kompetitif.

> **Poin kunci**
> - Surplus konsumen adalah selisih willingness to pay dengan harga yang dibayar.
> - Surplus produsen adalah selisih harga yang diterima dengan biaya minimum untuk unit yang dijual.
> - Pada kurva linear, surplus adalah luas segitiga antara kurva dan harga pasar.
> - Ekuilibrium memaksimalkan total surplus dalam model dasar bila transaksi sukarela, informasi dan biaya relevan tercakup, dan tak ada eksternalitas.

## Definisi dan intuisi

Willingness to pay (kesediaan membayar) adalah harga maksimum yang bersedia dibayar konsumen untuk unit tertentu. Untuk unit inframarginal, konsumen membayar harga pasar di bawah nilai maksimum pribadinya; selisih itu surplus konsumen (consumer surplus/SK). Kurva permintaan dapat dibaca sebagai willingness to pay marginal bila mewakili preferensi pembeli dan informasi yang sesuai.

Biaya minimum penjual adalah harga terendah yang membuat penjual bersedia memasok unit tertentu, sering ditafsirkan sebagai biaya marginal. Jika harga yang diterima lebih tinggi daripada biaya unit, selisihnya surplus produsen (producer surplus/SP). Kurva penawaran merangkum biaya marginal dalam model kompetitif sederhana. Surplus bukan sama dengan laba bersih: laba juga mengurangkan biaya tetap dan biaya lain yang tidak tercermin pada kurva.

Total surplus (TS) adalah SK+SP dalam model tanpa eksternalitas. Pembeli dan penjual yang memperoleh manfaat transaksi menciptakan surplus; unit yang nilai pembelinya melebihi biaya penjual menambah surplus. Unit ketika biaya melebihi nilai pembeli mengurangi surplus. Pada ekuilibrium kompetitif, semua unit yang saling menguntungkan dipertukarkan. Maka total surplus mencapai maksimum di model jika asumsi terpenuhi. Efisiensi ini tidak mengukur keadilan distribusi: pembagian manfaat dapat sangat timpang.

## Rumus dan contoh hitungan lengkap

Kurva yang digunakan pada bagian ini dan bagian 4–5 adalah **Qd = 100 − 5P** dan **Qs = −20 + 5P**. P adalah harga per unit dan Q adalah jumlah per periode. Ekuilibrium diperoleh dengan menyamakan Qd dan Qs. Harga maksimum pada kurva permintaan berasal dari Qd=0; harga minimum penjual pada kurva penawaran berasal dari Qs=0.

| Langkah | Perhitungan | Hasil |
|---|---|---:|
| Ekuilibrium | 100−5P = −20+5P; 120=10P | P*=12 |
| Kuantitas ekuilibrium | Q*=100−5×12 | 40 unit |
| Intersep permintaan | 0=100−5P; P=20 | 20 |
| Intersep penawaran | 0=−20+5P; P=4 | 4 |
| Surplus konsumen | ½×40×(20−12) | SK=160 |
| Surplus produsen | ½×40×(12−4) | SP=160 |
| Total surplus | 160+160 | TS=320 |

Faktor ½ muncul karena area di antara kurva linear dan harga membentuk segitiga: alasnya jumlah transaksi dan tingginya jarak harga vertikal. Harga maksimum konsumen P=20 adalah intersep permintaan, bukan harga yang dibayar semua pembeli. Harga minimum penjual P=4 adalah intersep penawaran yang relevan pada kurva baru ini. Semua titik yang dihitung berada pada P≥0.

Proses sebab-akibat: harga pasar memberi sinyal yang sama kepada pembeli dan penjual; pembeli dengan nilai di atas harga membeli, dan penjual dengan biaya di bawah harga menjual; unit-unit yang menghasilkan manfaat bersih diperdagangkan. Jika transaksi dihentikan sebelum Q=40, masih ada unit dengan willingness to pay lebih tinggi daripada biaya yang tidak dipertukarkan, sehingga surplus hilang. Jika transaksi dipaksa melebihi titik itu, unit tambahan punya biaya lebih besar daripada nilai pembeli.

Contoh Indonesia: pada pasar sederhana produk panen lokal, pembeli yang menghargai satu keranjang di atas harga dan penjual yang biayanya di bawah harga sama-sama memperoleh surplus dari transaksi; nilai dan biaya harus diukur untuk kelompok serta mutu yang sama. Contoh global: lelang tiket atau barang koleksi mengurutkan tawaran dan penawaran, tetapi harga akhir saja tidak mengungkap seluruh willingness to pay maupun biaya tiap peserta. Tak ada angka empiris yang diasumsikan.

[[visual:eko-consumer-producer-surplus]]

## Kesalahpahaman umum dan kegunaan

1. Surplus konsumen bukan laba konsumen atau uang tunai yang pasti diterima; ia ukuran manfaat relatif terhadap kesediaan membayar.
2. Surplus produsen berbeda dari laba akuntansi karena biaya tetap mungkin belum dikurangkan.
3. Ekuilibrium efisien menurut model tidak membuktikan distribusi adil atau dampak sosial lengkap.

Investor dapat memakai surplus sebagai kerangka untuk memahami nilai pelanggan di atas harga dan biaya pemasok, tetapi perusahaan tidak menangkap seluruh surplus sebagai pendapatan. Pada Web3, biaya gas mengurangi surplus pengguna; aplikasi yang mengurangi biaya verifikasi dapat meningkatkan surplus dari transaksi yang tetap terjadi. Psikologi juga membuat willingness to pay berubah oleh framing, titik acuan, dan loss aversion; survei jawaban bukan nilai tetap.

## Batas model

Model menganggap kurva mencerminkan manfaat dan biaya sosial, transaksi sukarela, serta tidak ada eksternalitas, daya pasar, atau informasi tersembunyi. Jika polusi, risiko sistemik, atau manfaat publik tidak tercermin dalam harga, SK+SP privat bukan ukuran surplus sosial lengkap. Segitiga juga mengandaikan garis lurus dan nilai marginal yang terukur.
`,
    },
    {
      id: "eko2-b03-s4",
      title: "Batas harga: ceiling, floor, dan distribusi",
      minutes: 40,
      content: `## Tujuan belajar

Bedakan price ceiling dan price floor, tentukan apakah kebijakan mengikat, hitung kekurangan atau surplus, dan uraikan bagaimana alokasi mengubah surplus serta distribusinya.

> **Poin kunci**
> - Price ceiling di bawah harga ekuilibrium mengikat dan menghasilkan Qd>Qs pada model dasar.
> - Price floor di atas harga ekuilibrium mengikat dan menghasilkan Qs>Qd.
> - Batas yang tidak mengikat tidak mengubah harga dan kuantitas ekuilibrium pada model.
> - Dampak kesejahteraan bergantung pada jumlah yang ditransaksikan dan cara unit dialokasikan, bukan hanya harga yang diumumkan.

## Definisi, intuisi, dan mekanisme

Price ceiling (batas harga maksimum) melarang harga transaksi melewati batas atas; contoh kebijakan umum adalah harga eceran tertinggi. Price floor (batas harga minimum) melarang harga di bawah batas bawah; contoh umum ialah upah minimum. Istilah ini menerangkan bentuk aturan, bukan menyatakan dampaknya pasti baik atau buruk. Harga ekuilibrium pembanding untuk kurva bab ini adalah P*=12 dan Q*=40.

Ceiling mengikat (binding) bila ditetapkan di bawah P*. Harga yang diwajibkan lebih rendah meningkatkan jumlah diminta dan mengurangi jumlah ditawarkan, sehingga timbul kekurangan. Bila ceiling ditetapkan di atas P*, pelaku masih dapat bertransaksi pada P*; batas itu tidak mengikat. Floor mengikat bila berada di atas P*: jumlah yang ditawarkan bertambah, jumlah yang diminta turun, dan terbentuk surplus penawaran. Floor di bawah P* tidak memengaruhi ekuilibrium model. Kata “mengikat” selalu dibandingkan dengan harga keseimbangan tanpa kebijakan pada pasar, tempat, dan periode yang dianalisis.

Kurva dan rumus tetap **Qd=100−5P**, **Qs=−20+5P**, dengan P*=12, Q*=40, harga maksimum pembeli 20, dan biaya minimum penjual 4. Kuantitas transaksi saat batas mengikat adalah sisi pendek pasar: min(Qd, Qs). Kekurangan atau surplus adalah selisih rencana, bukan jumlah barang yang benar-benar berpindah tangan.

## Ceiling: hitungan dan distribusi surplus

Ceiling P=8 berada di bawah P*=12. Pada harga itu Qd=100−5×8=60 dan Qs=−20+5×8=20, sehingga hanya 20 unit dapat terjual dan kekurangan sebesar 60−20=40 unit. Untuk menghitung surplus, gunakan asumsi unit jatuh kepada 20 pembeli dengan willingness to pay tertinggi. Pembeli marginal ke-20 memiliki nilai P=16 karena 20=100−5P.

| Langkah | Perhitungan | Hasil |
|---|---|---:|
| SK: tinggi di ujung Q=0 dan Q=20 | 20−8=12; 16−8=8 | — |
| SK pada 20 transaksi | ½×(12+8)×20 | 200 |
| SP pada 20 transaksi | ½×20×(8−4) | 40 |
| Total surplus dan DWL | 200+40=240; 320−240 | TS=240; DWL=80 |

SK berbentuk trapesium karena kurva permintaan pada rentang transaksi tidak selalu berjarak sama dari harga ceiling. Jika barang dibagikan acak, sebagian pembeli bernilai rendah dapat memperoleh unit sementara pembeli bernilai tinggi kehilangan kesempatan; SK aktual lebih rendah daripada asumsi pembeli bernilai tertinggi. Antrean, undian, kuota, hubungan, dan pasar informal mengubah distribusi serta menimbulkan biaya tambahan yang belum dihitung.

## Floor: hitungan dan penilaian

Floor P=16 di atas P*=12. Qd=100−5×16=20, sedangkan Qs=−20+5×16=60. Hanya 20 unit terjual jika pembeli menentukan sisi pendek; surplus penawaran yang tidak terjual sebesar 60−20=40 unit.

| Langkah | Perhitungan | Hasil |
|---|---|---:|
| SK | ½×20×(20−16) | 40 |
| SP: tinggi di awal dan unit ke-20 | 16−4=12; 16−8=8 | — |
| SP pada 20 unit | ½×(12+8)×20 | 200 |
| Total surplus dan DWL | 40+200=240; 320−240 | TS=240; DWL=80 |

Floor dapat menaikkan pembayaran per unit bagi penjual yang tetap bekerja, tetapi jumlah transaksi turun dan sebagian penjual tidak memperoleh pembeli. Dalam pasar tenaga kerja, upah minimum yang mengikat dapat menaikkan upah bagi pekerja yang dipekerjakan dan mengurangi peluang kerja bagi sebagian pencari kerja dalam model standar. Dampak aktual memerlukan bukti tentang pasar tenaga kerja, produktivitas, kepatuhan, dan kemungkinan penyesuaian lain.

Contoh Indonesia: harga eceran tertinggi untuk barang kebutuhan pokok adalah contoh ceiling; analisis perlu mengukur apakah batas di bawah harga pasar relevan dan bagaimana stok dialokasikan. Contoh global: kebijakan kontrol sewa merupakan contoh ceiling; dampaknya pada penyewa lama, calon penyewa, mutu, dan pasokan berbeda antar kota. Angka khusus kebijakan tidak diasumsikan.

[[visual:eko-price-controls]]

## Kesalahpahaman umum dan batas model

Analisis positif menyatakan prediksi sebab-akibat, misalnya batas yang mengikat menurunkan transaksi dalam model; analisis normatif menilai tujuan dan trade-off, misalnya perlindungan daya beli lebih penting daripada biaya alokasi. Pisahkan keduanya agar nilai tidak disamarkan sebagai fakta.

1. Batas harga tidak selalu mengikat; bandingkan dengan P*.
2. Kekurangan 40 unit bukan berarti 40 unit diperdagangkan; pada ceiling contoh, transaksi hanya 20.
3. Transfer surplus antar kelompok bukan otomatis deadweight loss; kehilangan efisiensi dihitung dari transaksi yang hilang atau unit yang salah dialokasikan.

Investor yang menilai perusahaan ritel perlu memperhatikan kontrol harga terhadap margin, stok, dan mekanisme penjatahan; harga resmi tidak selalu sama dengan biaya konsumen total. Dalam Web3, protokol menetapkan batas biaya dapat mengalihkan transaksi ke antrean atau jalur lain, sehingga waktu tunggu menjadi biaya nonharga. Psikologi kelangkaan membuat konsumen menilai barang yang dibatasi lebih tinggi; ini tidak menghapus biaya antre atau salah alokasi.

## Batas model

Hitungan menganggap kurva linear tetap, tiada biaya antre atau pasar informal, dan unit ceiling jatuh ke pembeli bernilai tertinggi. Hasil distribusi berubah jika aturan alokasi berbeda. Kebijakan nyata juga dapat mengubah kualitas, investasi, kepatuhan, dan kurva masa depan; tabel tidak memprediksi semua perubahan itu.
`,
    },
    {
      id: "eko2-b03-s5",
      title: "Pajak, subsidi, insiden, dan deadweight loss",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan wedge akibat pajak, hitung siapa yang menanggung beban menurut elastisitas, hitung penerimaan pajak dan deadweight loss pada kurva linear, lalu terangkan subsidi sebagai kebalikan fiskal dengan konsekuensi kuantitas.

> **Poin kunci**
> - Pajak per unit menciptakan selisih antara harga yang dibayar pembeli dan harga bersih yang diterima penjual.
> - Insiden ekonomi ditentukan oleh perubahan harga dan respons elastisitas, bukan semata-mata siapa yang menyetor pajak.
> - Pajak mengurangi jumlah transaksi; penerimaan pemerintah adalah transfer, sedangkan transaksi yang hilang membentuk deadweight loss.
> - Subsidi membalik wedge harga tetapi memerlukan belanja publik dan dapat mendorong unit yang manfaatnya lebih kecil daripada biaya sosialnya.

## Definisi, intuisi, dan mekanisme

Pajak per unit (unit tax) membuat pembeli membayar harga bruto P_b, sementara penjual menerima harga neto P_s. Selisih **P_b−P_s=t** adalah wedge pajak dengan t sebagai pajak per unit. Pajak membuat keputusan pembeli dan penjual menghadapi harga berbeda; ketika pembeli membayar lebih dan penjual menerima lebih sedikit, jumlah transaksi turun dalam model.

Insiden pajak (tax incidence) adalah pembagian beban ekonomi, yakni seberapa jauh harga pembeli naik dan harga bersih penjual turun relatif terhadap kondisi tanpa pajak. Pihak yang secara hukum mengirim pembayaran kepada pemerintah belum tentu menanggung seluruh beban. Sisi yang lebih tidak elastis memiliki pilihan respons lebih sedikit dan biasanya menanggung bagian beban lebih besar. Bila elastisitas kedua sisi setara dalam kurva linear simetris, beban dapat terbagi sama.

Pajak juga menghasilkan penerimaan pemerintah sebesar pajak per unit dikalikan unit yang masih terjual. Deadweight loss (DWL/kehilangan bobot mati) adalah surplus transaksi saling menguntungkan yang hilang karena jumlah turun. Penerimaan pajak sendiri adalah transfer dari pembeli dan penjual kepada pemerintah, bukan seluruhnya kehilangan sosial; total surplus sosial dalam kerangka ini menjumlah SK, SP, dan penerimaan pajak.

## Rumus dan hitungan pajak lengkap

Pakai kurva dasar bab: **Qd=100−5P_b** dan **Qs=−20+5P_s**. Sebelum pajak, P*=12 dan Q*=40. Pajak t=4 dibayar penjual, sehingga penawaran dalam harga yang dibayar pembeli menjadi **Qs=−20+5(P_b−4)=−40+5P_b**. Menyamakan permintaan dan penawaran setelah pajak menghasilkan:

| Langkah | Perhitungan | Hasil |
|---|---|---:|
| Harga pembeli dan jumlah | 100−5P_b=−40+5P_b; 140=10P_b | P_b=14; Q=30 |
| Harga diterima penjual | P_s=P_b−t=14−4 | P_s=10 |
| Beban pembeli | P_b−P*=14−12 | 2 per unit |
| Beban penjual | P*−P_s=12−10 | 2 per unit |
| Penerimaan pajak | t×Q=4×30 | 120 |
| DWL | ½×t×(Q*−Q)=½×4×(40−30) | 20 |

Pemeriksaan surplus: SK baru = ½×30×(20−14)=90. SP baru = ½×30×(10−4)=90. Jumlahkan 90+90+120=300; dibanding TS awal 320, kehilangan bersihnya 320−300=20. Rumus segitiga DWL berasal dari alas kuantitas yang hilang (40−30) dan tinggi wedge pajak (4). SK dan SP memakai intersep kurva serta harga yang relevan bagi masing-masing sisi.

Elastisitas menentukan pergeseran beban. Jika permintaan lebih tidak elastis daripada penawaran, pembeli lebih sulit menghindari transaksi sehingga P_b naik lebih banyak relatif terhadap P_s. Jika penawaran lebih tidak elastis, penjual lebih sulit mengubah jumlah sehingga harga bersihnya turun lebih banyak. Elastisitas yang sama memberi pembagian setara hanya pada contoh kurva yang simetris; insiden aktual perlu membandingkan respons marginal di pasar yang dianalisis.

## Subsidi dan contoh konteks

Subsidi per unit menciptakan kebalikan wedge: penjual menerima lebih banyak daripada yang dibayar pembeli, dengan selisih ditanggung anggaran pemerintah. Subsidi menurunkan harga yang dihadapi pembeli, menaikkan harga bersih penjual, dan memperluas kuantitas transaksi. Belanja subsidi adalah subsidi per unit dikalikan unit penerima; nilai sosialnya perlu dibandingkan manfaat eksternal atau tujuan distribusi dengan biaya fiskal dan distorsi keputusan. Subsidi tidak otomatis menaikkan total surplus sosial.

Contoh Indonesia: subsidi transportasi publik dapat menurunkan biaya yang dibayar penumpang; evaluasi perlu mengukur perubahan jumlah perjalanan, mutu layanan, dan biaya anggaran, bukan menganggap seluruh pengeluaran sebagai manfaat bersih. Contoh global: pajak atas emisi atau bahan bakar dapat mengubah harga relatif agar pengguna memperhitungkan sebagian biaya polusi; tingkat pajak dan dampak spesifik memerlukan verifikasi kebijakan dan estimasi eksternalitas. Contoh tersebut menjelaskan mekanisme, bukan mengklaim besaran dampak.

[[visual:eko-tax-incidence]]

## Kesalahpahaman umum

1. Penjual yang secara hukum menyetor pajak tidak otomatis menanggung seluruh beban; harga bruto dan neto menyesuaikan.
2. Penerimaan pajak bukan DWL; DWL adalah surplus yang hilang dari transaksi yang tidak terjadi.
3. Subsidi bukan uang tanpa biaya; pembiayaan dan pilihan unit yang terdorong perlu dihitung.

Investor perlu memasukkan sensitivitas pelanggan dan pemasok terhadap harga saat menghitung dampak pajak pada margin dan volume. Dalam Web3, biaya gas atau biaya protokol bertindak seperti wedge: pengguna menghadapi biaya total lebih besar daripada nilai bersih yang diterima validator atau penyedia. Staking dapat membuat penawaran token jangka pendek kurang elastis, sehingga perubahan insentif mengubah beban pengguna dan pemegang token secara berbeda. Loss aversion mendorong orang lebih memperhatikan pajak atau biaya yang terlihat daripada subsidi atau manfaat yang tersebar.

## Batas model

Perhitungan mengasumsikan pajak per unit, kurva linear, kepatuhan sempurna, pasar kompetitif, dan tidak ada biaya administrasi atau eksternalitas tambahan. Segitiga DWL membandingkan alokasi privat pada kurva yang ditentukan; jika pajak memperbaiki eksternalitas, perubahan surplus sosial harus memasukkan manfaat eksternal yang dihindari. Kurva dan elastisitas dunia nyata perlu estimasi.
`,
    },
  ],
  chapterResources: {
    summary: [
      "Elastisitas mengukur respons persentase kuantitas terhadap perubahan persentase harga, pendapatan, atau harga barang lain.",
      "Metode midpoint memakai nilai rata-rata awal-akhir; pada permintaan, nilai absolut di atas satu disebut elastis.",
      "Elastisitas permintaan menentukan arah perubahan total penerimaan setelah harga berubah.",
      "Surplus konsumen dan produsen mengukur manfaat transaksi di atas harga dan biaya marginal.",
      "Ekuilibrium kompetitif memaksimalkan total surplus hanya dengan asumsi model terpenuhi.",
      "Ceiling mengikat di bawah ekuilibrium; floor mengikat di atasnya, dan keduanya mengurangi transaksi dalam contoh linear.",
      "Pajak menciptakan wedge; elastisitas memengaruhi insiden dan penurunan kuantitas menciptakan DWL.",
      "Subsidi membalik wedge harga, tetapi biaya fiskal dan perubahan alokasi tetap harus dihitung.",
    ],
    glossary: [
      { term: "Elastisitas", english: "Elasticity", definition: "Rasio perubahan persentase suatu variabel terhadap perubahan persentase variabel lain." },
      { term: "Permintaan elastis", english: "Price elastic", definition: "Permintaan dengan nilai absolut elastisitas harga lebih besar dari satu." },
      { term: "Permintaan inelastis", english: "Price inelastic", definition: "Permintaan dengan nilai absolut elastisitas harga kurang dari satu." },
      { term: "Metode titik tengah", english: "Midpoint method", definition: "Metode persentase perubahan dengan penyebut rata-rata nilai awal dan akhir." },
      { term: "Total penerimaan", english: "Total revenue", definition: "Harga per unit dikalikan jumlah unit terjual." },
      { term: "Elastisitas pendapatan", english: "Income elasticity", definition: "Respons persentase jumlah diminta terhadap perubahan persentase pendapatan." },
      { term: "Elastisitas silang", english: "Cross-price elasticity", definition: "Respons persentase permintaan suatu barang terhadap perubahan persentase harga barang lain." },
      { term: "Surplus konsumen", english: "Consumer surplus", definition: "Selisih agregat willingness to pay konsumen dengan pembayaran aktual." },
      { term: "Surplus produsen", english: "Producer surplus", definition: "Selisih agregat penerimaan penjual dengan biaya minimum unit yang dijual." },
      { term: "Batas harga maksimum", english: "Price ceiling", definition: "Aturan yang melarang harga di atas tingkat tertentu." },
      { term: "Batas harga minimum", english: "Price floor", definition: "Aturan yang melarang harga di bawah tingkat tertentu." },
      { term: "Mengikat", english: "Binding", definition: "Batas kebijakan yang mengubah hasil karena berada pada sisi yang membatasi harga ekuilibrium." },
      { term: "Kehilangan bobot mati", english: "Deadweight loss", definition: "Surplus total yang hilang karena transaksi bernilai bersih positif tidak terjadi." },
      { term: "Insiden pajak", english: "Tax incidence", definition: "Pembagian beban ekonomi pajak antara pembeli dan penjual." },
      { term: "Wedge", english: "Wedge", definition: "Selisih harga yang dihadapi pembeli dan harga bersih yang diterima penjual." },
      { term: "Subsidi", english: "Subsidy", definition: "Pembayaran pemerintah per unit yang mendorong transaksi dan membentuk wedge berlawanan dengan pajak." },
      { term: "Kesediaan membayar", english: "Willingness to pay", definition: "Harga maksimum yang bersedia dibayar konsumen untuk unit tertentu." },
      { term: "Elastisitas penawaran", english: "Price elasticity of supply", definition: "Respons persentase kuantitas yang ditawarkan terhadap perubahan persentase harga." },
    ],
    exercises: [
      {
        prompt: "Harga naik dari 10 menjadi 12 dan jumlah turun dari 100 menjadi 80. Hitung elastisitas midpoint dan perubahan TR.",
        solution: "1. Rata-rata Q=(100+80)/2=90 dan rata-rata P=(10+12)/2=11. 2. %ΔQ=(80−100)/90=−22,22%; %ΔP=(12−10)/11=+18,18%. 3. Elastisitas absolut=22,22/18,18=1,22, jadi elastis. 4. TR awal=10×100=1.000 dan TR akhir=12×80=960; penerimaan turun.",
      },
      {
        prompt: "Dengan Qd=100−5P dan Qs=−20+5P, hitung SK, SP, serta total surplus pada ekuilibrium.",
        solution: "1. Samakan: 100−5P=−20+5P, sehingga P*=12 dan Q*=40. 2. Intersep permintaan: Qd=0 memberi P=20; intersep penawaran: Qs=0 memberi P=4. 3. SK=½×40×(20−12)=160. 4. SP=½×40×(12−4)=160. 5. Total surplus=160+160=320.",
      },
      {
        prompt: "Terapkan ceiling P=8 pada kurva Qd=100−5P dan Qs=−20+5P. Hitung kekurangan, transaksi, dan surplus dengan asumsi pembeli bernilai tertinggi memperoleh unit.",
        solution: "1. Qd=100−5×8=60; Qs=−20+5×8=20. 2. Kekurangan=60−20=40 dan transaksi=20. 3. Pembeli ke-20 memiliki nilai P=16, sehingga SK=½×[(20−8)+(16−8)]×20=½×(12+8)×20=200. 4. SP=½×20×(8−4)=40. 5. Total=240; dibanding 320, DWL=80.",
      },
      {
        prompt: "Pajak t=4 per unit dibayar penjual pada kurva dasar. Hitung harga pembeli, harga penjual, penerimaan pajak, dan DWL.",
        solution: "1. Penawaran baru Qs=−20+5(P_beli−4)=−40+5P_beli. 2. Samakan 100−5P_beli=−40+5P_beli, sehingga P_beli=14 dan Q=30. 3. P_penjual=14−4=10; beban masing-masing 14−12=2 dan 12−10=2. 4. Penerimaan=4×30=120. 5. DWL=½×4×(40−30)=20.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
