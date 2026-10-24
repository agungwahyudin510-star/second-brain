import type { CurriculumModule } from "@/lib/types";

export const BAB_02: CurriculumModule = {
  id: "eko2-b02",
  title: "Bab 2 — Permintaan, Penawaran & Ekuilibrium",
  summary: "Perilaku pembeli dan penjual, pergerakan dan pergeseran kurva, harga ekuilibrium, serta surplus dan kekurangan.",
  lessons: [
    {
      id: "eko2-b02-s1",
      title: "Permintaan: pilihan pembeli dan perubahan kurva",
      minutes: 40,
      content: `## Tujuan belajar dan peta konsep

Pada akhir bagian ini, kamu dapat (1) mendefinisikan permintaan sebagai hubungan harga-jumlah dalam periode tertentu, (2) membedakan permintaan dari jumlah yang diminta, (3) menjelaskan hukum permintaan dengan substitusi dan daya beli, (4) menganalisis faktor yang menggeser kurva, dan (5) memperkirakan arah perubahan dengan asumsi lain tetap. Peta bab menghubungkan pilihan individu di Bab 1 dengan interaksi pasar: pembeli menyusun rencana pembelian, penjual menyusun rencana produksi, keduanya dibandingkan pada setiap harga, dan ekuilibrium merangkum harga-jumlah yang konsisten.

> **Poin kunci**
> - Permintaan adalah jadwal rencana pembelian pada berbagai harga, bukan satu angka transaksi.
> - Harga barang itu sendiri mengubah jumlah yang diminta sepanjang kurva.
> - Pendapatan, preferensi, harga barang terkait, ekspektasi, jumlah pembeli, dan musim dapat menggeser kurva.

## Definisi formal dan intuisi

Permintaan (demand) adalah hubungan antara berbagai harga dan jumlah barang atau jasa yang bersedia serta mampu dibeli pembeli selama periode tertentu, dengan faktor lain yang memengaruhi pilihan dinyatakan. “Bersedia dan mampu” penting: keinginan tanpa kemampuan membayar belum tentu menjadi permintaan efektif di pasar. Satu angka transaksi bukan seluruh permintaan. Jadwal permintaan memuat beberapa pasangan harga-kuantitas; kurva permintaan menggambarkan hubungan tersebut.

Hukum permintaan menyatakan bahwa, dengan faktor lain tetap (ceteris paribus), harga barang itu sendiri yang lebih tinggi biasanya berhubungan dengan jumlah diminta yang lebih rendah. Ketika harga naik, pembeli dapat beralih ke substitusi; harga relatif juga mengubah daya beli riil, sehingga sebagian konsumen mengurangi pembelian. Untuk barang tertentu, dampak pendapatan bisa kompleks, namun model pengantar memusatkan perhatian pada kecenderungan umum. Hukum permintaan bukan klaim bahwa setiap orang selalu membeli lebih sedikit di setiap keadaan.

Kurva pasar menggabungkan rencana banyak pembeli, bukan memotret satu orang. Kuantitas biasanya ditempatkan di sumbu horizontal dan harga di sumbu vertikal. Setiap titik menampilkan jumlah yang direncanakan pada satu harga. Jika harga barang itu sendiri berubah, kita bergerak sepanjang kurva dan menyebutnya perubahan jumlah yang diminta. Jika faktor lain berubah, seluruh jadwal dapat berubah sehingga kurva bergeser; istilahnya perubahan permintaan. Pembedaan ini penting agar penyebab dan akibat tidak tertukar.

## Faktor penggeser dan rantai sebab-akibat

Pendapatan memengaruhi kemampuan membeli. Untuk barang normal, kenaikan pendapatan cenderung menaikkan permintaan; untuk barang inferior, kenaikan pendapatan dapat mengurangi permintaan karena pembeli beralih ke alternatif yang lebih disukai. “Inferior” adalah kategori respons terhadap pendapatan, bukan penilaian mutu atau martabat. Harga barang terkait juga penting: bila dua barang substitusi, kenaikan harga salah satunya dapat menaikkan permintaan barang lainnya; bila barang komplementer digunakan bersama, kenaikan harga salah satunya dapat menurunkan permintaan pasangannya.

Selera dan preferensi, ekspektasi harga atau pendapatan mendatang, jumlah pembeli, serta musim dapat menggeser permintaan. Mekanismenya: suatu faktor berubah; pembeli menilai ulang manfaat relatif serta kendala anggaran; pada setiap harga, jumlah yang dipilih berubah; hubungan harga-jumlah baru membentuk kurva baru. Kabar bahwa harga akan naik bulan depan mungkin mempercepat pembelian sekarang, tetapi ekspektasi dapat salah dan responsnya berbeda antar kelompok.

Misalkan jadwal awal hipotetis untuk satu minggu: pada harga Rp10.000, 100 unit diminta; pada Rp12.000, 80; pada Rp14.000, 60. Jika harga barang naik dari Rp10.000 menjadi Rp12.000 dan faktor lain tetap, jumlah yang diminta turun 20 unit sepanjang kurva. Jika jumlah pembeli bertambah dan pada setiap harga 15 unit tambahan diminta, jadwal baru adalah 115, 95, 75 unit. Pada Rp12.000, jumlah baru 95, bukan 80; kenaikan itu adalah pergeseran permintaan. Angka hanya ilustrasi.

Kurva pasar biasanya dibentuk dengan menjumlahkan jumlah yang diminta oleh banyak pembeli pada setiap harga, bukan dengan menjumlahkan harga mereka. Jika pada harga tertentu Sari ingin membeli dua tiket dan Budi tiga tiket, permintaan pasar pada harga itu lima tiket, dengan asumsi mereka berada di pasar dan periode yang sama. Pergeseran preferensi satu konsumen dapat berdampak kecil bila pasar besar, tetapi menjadi besar jika banyak pembeli berubah serentak. Karena itu data agregat dapat menutupi variasi kelompok: harga yang sama mungkin mengubah keputusan rumah tangga berpendapatan berbeda dengan cara berbeda.

Di Indonesia, permintaan pakaian tertentu naik menjelang hari raya karena musim, preferensi, atau ekspektasi; itu tidak membuktikan bahwa semua harga pada semua pasar bergerak sama. Contoh global ialah permintaan payung yang berubah saat pola cuaca diperkirakan berubah; pengaruh harga payung sendiri tetap dibedakan dari faktor cuaca.

[[visual:eko-move-vs-shift]]

## Kesalahpahaman umum

1. Harga naik biasanya mengurangi jumlah yang diminta, bukan menggeser kurva permintaan barang itu sendiri.
2. “Permintaan naik” berarti pada setiap harga kuantitas yang direncanakan lebih tinggi; bukan sekadar lebih banyak dibeli karena harga turun.
3. Barang inferior bukan berarti barang buruk; istilahnya menjelaskan respons permintaan terhadap pendapatan.

Investor dapat menggunakan pembedaan ini saat menilai perusahaan: harga produk yang berubah tidak sama dengan perubahan preferensi atau ukuran pasar. Pada Web3, kenaikan harga token dapat mengubah jumlah yang ingin dibeli sepanjang kurva, sedangkan perubahan utilitas, aturan, atau kepercayaan dapat menggeser permintaan; keduanya tidak boleh disimpulkan hanya dari grafik harga. Psikologi keputusan seperti herd behavior dapat membuat perubahan perhatian tampak seperti perubahan fundamental, sehingga data dan rentang waktu perlu diperiksa.

## Batas model

Hukum permintaan membandingkan faktor lain tetap dan merangkum banyak pembeli; perubahan mutu, batas pasar, serta perbedaan kelompok dapat memerlukan kurva atau analisis terpisah.
`,
    },
    {
      id: "eko2-b02-s2",
      title: "Penawaran: keputusan produksi dan jadwal pasar",
      minutes: 40,
      content: `## Tujuan belajar

Definisikan penawaran, bedakan perubahan jumlah yang ditawarkan dari pergeseran kurva, hitung nilai dari fungsi penawaran linear, dan jelaskan pengaruh biaya, teknologi, waktu, serta jumlah produsen.

> **Poin kunci**
> - Penawaran menghubungkan harga dengan jumlah yang bersedia dan mampu dijual dalam periode tertentu.
> - Perubahan harga barang sendiri menggerakkan titik sepanjang kurva; faktor lain menggeser kurva.
> - Biaya input, teknologi, ekspektasi, kapasitas, dan jumlah produsen membentuk jadwal penawaran.

## Definisi, intuisi, dan mekanisme

Penawaran (supply) adalah hubungan antara berbagai harga dan jumlah barang atau jasa yang bersedia serta mampu dijual produsen selama periode tertentu. Rencana penjual bergantung pada biaya produksi, kapasitas, teknologi, ekspektasi, dan alternatif penggunaan sumber daya. Sebuah produk yang terlihat di toko menunjukkan transaksi atau stok, bukan seluruh jadwal penawaran. Jadwal penawaran memasangkan beberapa harga dengan jumlah yang ingin dijual.

Hukum penawaran menyatakan bahwa, dengan faktor lain tetap, harga jual yang lebih tinggi biasanya berkaitan dengan jumlah yang ditawarkan lebih besar. Harga yang lebih tinggi dapat membuat produksi unit tambahan yang lebih mahal menjadi layak, mendorong perusahaan memakai kapasitas tambahan, atau menarik produsen masuk. Namun, kapasitas tidak berubah seketika, kontrak membatasi penyesuaian, dan beberapa produk memiliki waktu produksi panjang. Hukum penawaran adalah kecenderungan model, bukan jaminan bahwa semua perusahaan langsung meningkatkan output.

Jika harga barang itu sendiri berubah dan produsen bergerak ke titik lain pada kurva penawaran yang sama, itu disebut perubahan jumlah yang ditawarkan. Faktor selain harga yang mengubah rencana pada setiap harga menyebabkan perubahan penawaran atau pergeseran kurva. Harga bahan baku dan upah memengaruhi biaya; teknologi dan produktivitas mengubah jumlah output yang dapat dibuat dari input; pajak atau subsidi mengubah biaya atau penerimaan per unit; cuaca, gangguan logistik, ekspektasi harga mendatang, dan jumlah penjual dapat mengubah jadwal. Arah perubahan harus diturunkan dari mekanisme, bukan dihafalkan tanpa konteks.

## Rumus dan hitungan lengkap

Dalam bentuk linear, penawaran dapat ditulis Qs = c + dP, dengan Qs jumlah yang ditawarkan per periode, P harga per unit, c intersep yang mencerminkan faktor lain dalam model, dan d kemiringan positif ketika hukum penawaran berlaku. Persamaan tidak menyatakan bahwa semua harga atau jumlah mungkin; batas kapasitas dan harga nonnegatif dapat membuat rentang relevan terbatas. Jika biaya input naik, untuk harga jual yang sama produsen memperoleh margin lebih kecil sehingga c dapat turun atau kurva bergeser ke kiri.

Contoh: penjual hipotetis menawarkan 20 kotak pada harga Rp10.000 dan 30 kotak pada Rp12.000 per kotak. Kemiringan d = perubahan Qs/perubahan P = (30 − 20)/(12.000 − 10.000) = 10/2.000 = 0,005 kotak per rupiah, atau 5 kotak untuk setiap kenaikan harga Rp1.000. Bentuk persamaan pada satuan ribuan rupiah adalah Qs = a + 5P, dengan P diukur dalam ribuan rupiah. Masukkan titik (P=10,Q=20): 20 = a + 5×10, maka a = −30. Jadi Qs = −30 + 5P. Pada harga Rp14.000, Qs = −30 + 5×14 = 40 kotak. Jika biaya bahan naik dan pada setiap harga jumlah ditawarkan turun 8 kotak, jadwal baru menjadi Qs = −38 + 5P; pada harga 14, jumlahnya 32. Seluruh angka ilustratif, dan model linear hanya dipakai pada rentang yang masuk akal.

Cara membacanya langkah demi langkah: tetapkan periode dan unit; tentukan harga yang dibandingkan; hitung produsen yang bersedia menjual; pisahkan perubahan harga dari perubahan input atau teknologi; kemudian periksa kapasitas serta jeda waktu. Perubahan biaya dapat mengurangi penawaran tanpa mengubah kemampuan fisik seketika. Produktivitas yang membaik bisa memperbesar output pada biaya sama, tetapi investasi teknologi juga memerlukan biaya awal.

Jangka waktu memengaruhi respons penjual. Dalam beberapa hari, jumlah alat, kontrak, dan pekerja mungkin sulit diubah; dalam beberapa tahun, perusahaan dapat membeli mesin, melatih tenaga kerja, atau keluar dari pasar. Jadi kurva penawaran jangka pendek dan jangka panjang dapat memiliki respons berbeda. Ini bukan alasan untuk mengasumsikan penawaran jangka panjang selalu elastis tanpa batas: lahan, keterampilan khusus, izin, dan waktu tetap membatasi produksi.

Penawaran pasar juga merupakan gabungan rencana banyak produsen. Jika harga naik, produsen dengan biaya rendah mungkin meningkatkan output lebih dahulu; produsen berbiaya lebih tinggi baru masuk pada harga yang cukup menutup biaya tambahan. Ini menjelaskan mengapa kurva dapat menanjak. Namun jika kapasitas mendekati maksimum atau bahan baku langka, biaya marginal bisa meningkat tajam. Rencana produksi tidak sama dengan output aktual jika terjadi kerusakan atau pembatalan pesanan.

Dalam konteks Indonesia, hujan ekstrem yang menghambat pengiriman hasil kebun dapat mengurangi jumlah yang sampai ke pasar pada harga tertentu; cuaca adalah faktor penawaran, sedangkan perubahan harga pasar adalah respons yang mungkin menyusul. Contoh global ialah produsen elektronik yang memakai proses lebih efisien: biaya per unit dapat turun dan kapasitas penawaran meningkat, dengan asumsi pemasok serta permintaan input mendukung.

[[visual:eko-schedule-to-curve]]

## Kesalahpahaman umum

1. Kenaikan harga barang sendiri mengubah jumlah yang ditawarkan, bukan otomatis menggeser kurva penawaran.
2. Teknologi yang lebih baik cenderung menaikkan penawaran pada harga tertentu; kurva tidak “bergerak karena harga” dalam cerita ini.
3. Stok saat ini berbeda dari aliran produksi per periode. Barang dapat disimpan atau dipindahkan dari periode lain.

Perusahaan dan investor membedakan kenaikan harga sementara dari penurunan biaya berkelanjutan sebelum menilai kapasitas laba. Pada Web3, kenaikan biaya gas atau perubahan imbalan validator menggeser insentif pasokan layanan, sementara output aktual dipengaruhi kapasitas jaringan. Supply optimism membuat pelaku menganggap kapasitas segera bertambah tanpa menghitung waktu, keterampilan, atau input pelengkap.

## Batas model

Fungsi linear hanya mendekati perilaku penawaran pada rentang yang ditentukan; kapasitas, jeda produksi, kontrak, dan kondisi input membatasi penerapannya.
`,
    },
    {
      id: "eko2-b02-s3",
      title: "Ekuilibrium pasar dan perubahan harga-jumlah",
      minutes: 45,
      content: `## Tujuan belajar

Hitung harga dan kuantitas ekuilibrium dari fungsi linear, tafsirkan surplus atau kekurangan saat harga berbeda, serta prediksi dampak pergeseran satu atau dua kurva.

> **Poin kunci**
> - Ekuilibrium memenuhi Qd=Qs untuk pasar, periode, dan unit yang sama.
> - Pergeseran satu kurva mengubah harga dan/atau kuantitas sesuai persamaan baru.
> - Jika dua kurva bergeser bersama, satu hasil sering ambigu tanpa mengetahui besar pergeseran.

## Definisi formal dan intuisi

Ekuilibrium pasar adalah harga dan kuantitas ketika jumlah yang ingin dibeli sama dengan jumlah yang ingin dijual pada periode dan pasar yang didefinisikan. Harga ekuilibrium P* memenuhi Qd(P*) = Qs(P*); kuantitas ekuilibrium Q* adalah jumlah transaksi yang konsisten dengan kedua rencana itu. Ekuilibrium bukan berarti semua konsumen puas, setiap orang mampu membeli, atau hasilnya adil. Ia adalah titik keseimbangan rencana dalam model pasar tertentu.

Ketika harga berada di atas ekuilibrium, model dasar memprediksi Qs>Qd dan surplus. Penjual menurunkan harga, menunda produksi, atau menawarkan diskon. Harga lebih rendah menaikkan Qd dan menurunkan Qs, ceteris paribus. Ketika harga berada di bawah ekuilibrium, Qd>Qs dan muncul kekurangan; sebagian pembeli tidak memperoleh barang, sementara tekanan kenaikan harga atau antrean muncul. Penyesuaian tidak selalu cepat: kontrak, regulasi, daya tawar, pencarian, dan biaya menu memperlambatnya.

## Menyelesaikan ekuilibrium dengan aljabar

Gunakan persamaan contoh ilustratif: Qd = 100 − 5P dan Qs = 20 + 5P. Qd berarti jumlah yang ingin dibeli per periode; Qs jumlah yang ingin dijual; P harga per unit dalam satuan harga model. Kemiringan −5 menyatakan Qd turun lima unit untuk kenaikan P satu unit; +5 menyatakan Qs naik lima unit. Konstanta 100 dan 20 adalah intersep dalam rentang model, bukan statistik.

| Skenario | Persamaan yang disamakan | P* | Pemeriksaan Q* |
|---|---|---:|---|
| Awal: Qd=100−5P, Qs=20+5P | 100−5P=20+5P → 80=10P | 8 | Qd=100−5×8=60; Qs=20+5×8=60 |
| Permintaan naik: Qd=120−5P | 120−5P=20+5P → 100=10P | 10 | Qd=120−5×10=70; Qs=20+5×10=70 |
| Penawaran naik: Qs=40+5P | 100−5P=40+5P → 60=10P | 6 | Qd=100−5×6=70; Qs=40+5×6=70 |

Perhitungan mengikuti langkah yang sama: samakan Qd dan Qs; pindahkan konstanta; kumpulkan suku harga; bagi untuk memperoleh P*; substitusikan harga ke kedua fungsi untuk memastikan kuantitas sama. P adalah harga per unit, Qd jumlah yang ingin dibeli, dan Qs jumlah yang ingin dijual dalam periode model. Angka adalah ilustrasi, bukan statistik.

| Pergeseran permintaan | Penawaran naik | Penawaran turun |
|---|---|---|
| Permintaan naik | Harga ambigu; kuantitas naik | Harga naik; kuantitas ambigu |
| Permintaan turun | Harga turun; kuantitas ambigu | Harga ambigu; kuantitas turun |

Grafik menyajikan solusi yang sama sebagai perpotongan. Harga pada sumbu vertikal, kuantitas di sumbu horizontal. Menyebut “permintaan bertambah” saja tidak cukup untuk menyimpulkan harga bila penawaran juga berubah. Selalu nyatakan kurva yang berubah, arah pergeseran, asumsi yang tetap, lalu hitung atau jelaskan titik potong baru.

Aljabar dan grafik saling memeriksa. Jika Qd dan Qs adalah persamaan linear, solusi persamaan memberi pasangan titik potong; jika angka pada grafik tampak tidak sejalan dengan hasil hitung, periksa skala sumbu, tanda kemiringan, atau salah substitusi. Dalam contoh, di P=6, Qd=70 sedangkan Qs=50; selisih itu memberi tekanan penyesuaian ke atas. Di P=10, Qd=50 dan Qs=70 sehingga tekanan surplus berlawanan. Di P=8 keduanya 60. Menjelaskan tekanan bukan berarti mengetahui seberapa cepat harga benar-benar berubah.

Satu pasar juga perlu didefinisikan secara konsisten. “Beras” dapat merujuk pada mutu, lokasi, dan periode berbeda; barang yang tidak mudah dipertukarkan tidak selalu termasuk pasar yang sama. Ketika batas pasar berubah, fungsi permintaan, penawaran, dan parameter model mungkin perlu disusun ulang. Kuantitas dalam ton per bulan tidak boleh dicampur dengan harga per kilogram tanpa konversi yang benar.

Di pasar Indonesia, gangguan pasokan musiman dan perubahan preferensi berlangsung bersamaan sehingga model perlu memeriksa kedua pergeseran. Pada Web3, biaya transaksi jaringan naik saat permintaan ruang blok melebihi kapasitas per blok. Contoh global berupa jasa transportasi: pada jam puncak permintaan perjalanan meningkat, sementara kapasitas pengemudi dalam jangka pendek terbatas; harga atau waktu tunggu menyesuaikan menurut aturan platform.

[[visual:eko-supply-demand]]

## Kesalahpahaman umum

1. Ekuilibrium bukan ukuran keadilan, keamanan, mutu, ataupun kesejahteraan lengkap.
2. Pergeseran permintaan ke kanan tidak selalu menaikkan jumlah saja; bersama kurva penawaran, harga juga berubah.
3. Satu persamaan ekuilibrium hanya berlaku untuk definisi pasar, unit, periode, dan asumsi yang dipakai. Jangan menganggap parameter ilustratif sebagai data nyata.

Investor menggunakan ekuilibrium sebagai kerangka, bukan harga target: pasokan, substitusi, ekspektasi, serta aturan berubah. Pada Web3, harga token yang menghapus ketidakseimbangan order tidak mengungkap nilai fundamental; likuiditas dan desain pasar juga berpengaruh. Psikologi membuat kita terpaku pada harga “normal” lama meski kurva bergeser; analisis skenario memisahkan perubahan sementara dari perubahan struktur.

## Batas model

Ekuilibrium statis menganggap fungsi dan pasar terdefinisi serta mengabaikan waktu penyesuaian, strategi, dan kendala institusional; hasil aljabar bukan ramalan harga nyata.
`,
    },
    {
      id: "eko2-b02-s4",
      title: "Surplus, kekurangan, dan penyesuaian pasar",
      minutes: 45,
      content: `## Tujuan belajar

Hitung surplus atau kekurangan dari Qd dan Qs pada harga tertentu, jelaskan mekanisme penyesuaian, dan bedakan kuantitas yang direncanakan dari transaksi yang benar-benar terjadi.

> **Poin kunci**
> - Qs>Qd berarti surplus sebesar Qs−Qd; Qd>Qs berarti kekurangan sebesar Qd−Qs.
> - Selisih jumlah menunjukkan tekanan penyesuaian, bukan kecepatan atau hasil yang pasti.
> - Harga, antrean, kuota, stok, dan aturan dapat menentukan alokasi ketika rencana tidak seimbang.

## Membaca ketidakseimbangan

Surplus pasar (excess supply) terjadi pada harga tertentu ketika jumlah yang ditawarkan melebihi jumlah yang diminta. Kekurangan (shortage atau excess demand) terjadi ketika jumlah yang diminta melebihi jumlah yang ditawarkan. Kuantitas surplus = Qs − Qd jika Qs > Qd; kuantitas kekurangan = Qd − Qs jika Qd > Qs. Perbandingan ini berlaku pada harga, waktu, dan pasar yang sama. Surplus konsumen dan surplus produsen adalah konsep berbeda yang akan dibahas pada bab lanjutan; surplus di sini berarti kelebihan jumlah penawaran.

Model harga fleksibel menerangkan tekanan penyesuaian. Pada harga terlalu tinggi, sebagian unit tidak terjual; penjual mungkin menurunkan harga atau mengurangi produksi berikutnya. Harga lebih rendah menarik sebagian pembeli dan membuat sebagian produksi tidak lagi menguntungkan. Pada harga terlalu rendah, pembeli bersaing atas jumlah terbatas, sehingga harga, antrean, pembagian, atau hubungan nonharga dapat menyesuaikan. Pasar tidak selalu kembali cepat ke titik ekuilibrium: informasi tidak sempurna, kontrak, batas kapasitas, biaya pencarian, dan kebijakan dapat mengubah proses.

## Contoh hitungan yang diperiksa

Gunakan kembali persamaan ilustratif Qd = 100 − 5P dan Qs = 20 + 5P. Variabel P adalah harga per unit model, Qd kuantitas yang ingin dibeli dan Qs kuantitas yang ingin dijual dalam periode sama. Ekuilibrium sebelumnya P*=8 dan Q*=60.

| Harga P | Qd=100−5P | Qs=20+5P | Selisih | Status |
|---:|---:|---:|---:|---|
| 6 | 100−5×6=70 | 20+5×6=50 | 70−50=20 | Kekurangan 20 unit |
| 8 | 100−5×8=60 | 20+5×8=60 | 0 | Ekuilibrium |
| 10 | 100−5×10=50 | 20+5×10=70 | 70−50=20 | Surplus 20 unit |

P adalah harga per unit; Qd dan Qs adalah unit per periode yang sama. Selisih mengurangkan jumlah yang direncanakan pada periode tersebut, bukan transaksi dari periode berbeda.

Dalam praktik, jumlah yang terealisasi dapat berbeda dari jumlah yang diinginkan. Jika harga terkendali di bawah keseimbangan, data penjualan mungkin hanya menunjukkan stok yang tersedia, bukan seluruh permintaan. Antrean, pembelian berulang, mutu, pasar informal, dan mekanisme alokasi ikut memengaruhi siapa memperoleh barang. Analisis kuantitas yang “diminta” berbeda dari jumlah transaksi yang tercatat.

Telusuri penyesuaian ilustratif dari P=6. Pada harga itu, 70 unit diminta tetapi hanya 50 ditawarkan, sehingga 20 pembeli tidak dapat dipenuhi jika setiap unit transaksi hanya melayani satu unit permintaan. Penjual dapat menaikkan harga atau pembeli menawarkan lebih banyak; pada P yang lebih tinggi, Qd turun dan Qs naik. Jika harga bergerak ke P=8, selisih hilang dalam model. Dari P=10, surplus 20 unit dapat menekan harga ke bawah; harga lebih rendah menaikkan Qd dan menurunkan Qs. Perubahan kurva di tengah proses akan mengubah tujuan penyesuaian, sehingga angka keseimbangan lama tidak selalu tepat.

Antrean dan pembagian kuota dapat membuat barang terbagi berdasarkan waktu, informasi, hubungan, atau kemampuan menunggu, bukan kemampuan membayar saja. Setiap mekanisme punya biaya: waktu antre, biaya administrasi, salah sasaran, atau risiko pasar informal. Karena itu analisis positif (“apa yang mungkin terjadi”) perlu dipisahkan dari penilaian normatif (“hasil apa yang dianggap adil”). Bab berikutnya membahas surplus konsumen/produsen dan kebijakan harga dengan alat analisis tersendiri.

Contoh Indonesia yang bersifat ilustratif: jika harga suatu komoditas ditetapkan atau tertahan sementara permintaan lokal naik dan kiriman berkurang, toko dapat mengalami stok habis; pengamatan stok kosong saja tidak memberitahu apakah penyebab utamanya permintaan, penawaran, atau keduanya. Contoh global: tiket acara dengan jumlah kursi tetap dapat habis terjual pada harga yang ditetapkan; pasar merespons melalui antrean, pasar sekunder, atau aturan alokasi, bukan selalu penyesuaian harga resmi.

[[visual:eko-surplus-shortage]]

## Kebijakan dan batas penalaran

Harga yang terlihat bukan satu-satunya mekanisme penyesuaian. Penjual dapat menambah jam buka, pembeli dapat mengubah waktu pembelian, penyelenggara dapat membatasi kuantitas per orang, dan pemerintah dapat memakai stok atau subsidi. Setiap respons mempunyai biaya dan dampak distribusi. Jika kebijakan mengubah harga atau kuantitas, analisis perlu membedakan tujuan kebijakan dari konsekuensi yang diprediksi model. Bagian mendalam tentang price ceiling, price floor, pajak, dan deadweight loss ada pada Bab 3, bukan diasumsikan selesai di sini.

Ketika kurva bergeser, surplus atau kekurangan awal memicu perubahan harga, tetapi hasil akhir ditentukan oleh respons kedua sisi. Penawaran yang sangat tidak elastis dalam jangka pendek membuat produsen sulit menaikkan output segera; permintaan yang sulit berubah juga membatasi penyesuaian pembeli. Ramalan angka memerlukan fungsi dan data yang cukup.

## Kesalahpahaman umum

1. Kekurangan bukan berarti barang tidak diproduksi; artinya Qd lebih besar daripada Qs pada harga yang dianalisis.
2. Surplus jumlah di satu pasar bukan sinonim surplus konsumen/produsen atau anggaran surplus.
3. Harga naik setelah stok langka tidak membuktikan satu pihak sengaja menciptakan kekurangan; penyebab dan struktur pasar perlu diperiksa.

Dalam investasi, surplus atau kekurangan sementara dapat mendorong volatilitas dan mengundang respons kapasitas, tetapi kenaikan harga bukan jaminan bahwa pasokan akan cepat mengejar. Di Web3, antrean transaksi dan biaya jaringan dapat menjadi tanda kapasitas terbatas relatif terhadap permintaan, namun arsitektur, prioritas transaksi, dan biaya validator juga memengaruhi hasil. Psikologi scarcity effect membuat barang yang sulit diperoleh tampak lebih bernilai; bedakan manfaat nyata dari urgensi yang diciptakan.

## Batas model

Selisih Qd dan Qs memakai harga serta periode yang sama dan menganggap satuan barang sebanding. Harga fleksibel, informasi, serta respons penjual dan pembeli tidak selalu berlaku dalam praktik.

`,
    },
  ],
  chapterResources: {
    summary: [
      "Permintaan dan penawaran adalah hubungan harga-jumlah yang dibatasi periode dan pasar tertentu.",
      "Harga barang itu sendiri mengubah jumlah sepanjang kurva; faktor lain dapat menggeser seluruh kurva.",
      "Pendapatan, preferensi, ekspektasi, dan harga barang terkait dapat menggeser permintaan.",
      "Biaya input, teknologi, pajak, cuaca, dan jumlah penjual dapat menggeser penawaran.",
      "Ekuilibrium memenuhi Qd = Qs pada harga dan kuantitas yang konsisten.",
      "Harga di atas ekuilibrium menghasilkan surplus penawaran; harga di bawahnya menghasilkan kekurangan dalam model dasar.",
      "Bila dua kurva bergeser bersamaan, arah perubahan harga atau jumlah mungkin ambigu.",
      "Harga, antrean, stok, dan aturan alokasi adalah cara berbeda pasar menyesuaikan; hasilnya perlu dinilai terpisah.",
    ],
    glossary: [
      { term: "Permintaan", english: "Demand", definition: "Hubungan harga dengan jumlah yang bersedia dan mampu dibeli per periode." },
      { term: "Jumlah yang diminta", english: "Quantity demanded", definition: "Jumlah pembelian yang direncanakan pada satu harga tertentu." },
      { term: "Penawaran", english: "Supply", definition: "Hubungan harga dengan jumlah yang bersedia dan mampu dijual per periode." },
      { term: "Jumlah yang ditawarkan", english: "Quantity supplied", definition: "Jumlah penjualan yang direncanakan produsen pada satu harga tertentu." },
      { term: "Jadwal permintaan", english: "Demand schedule", definition: "Tabel beberapa pasangan harga dan jumlah yang diminta." },
      { term: "Jadwal penawaran", english: "Supply schedule", definition: "Tabel beberapa pasangan harga dan jumlah yang ditawarkan." },
      { term: "Kurva permintaan", english: "Demand curve", definition: "Grafik hubungan harga dan jumlah yang diminta." },
      { term: "Kurva penawaran", english: "Supply curve", definition: "Grafik hubungan harga dan jumlah yang ditawarkan." },
      { term: "Ekuilibrium pasar", english: "Market equilibrium", definition: "Keadaan ketika Qd sama dengan Qs dalam model pasar." },
      { term: "Harga ekuilibrium", english: "Equilibrium price", definition: "Harga yang membuat jumlah diminta sama dengan jumlah ditawarkan." },
      { term: "Kuantitas ekuilibrium", english: "Equilibrium quantity", definition: "Jumlah yang diminta dan ditawarkan pada harga ekuilibrium." },
      { term: "Surplus penawaran", english: "Excess supply", definition: "Keadaan ketika Qs lebih besar daripada Qd pada harga tertentu." },
      { term: "Kekurangan", english: "Shortage / excess demand", definition: "Keadaan ketika Qd lebih besar daripada Qs pada harga tertentu." },
      { term: "Faktor lain tetap", english: "Ceteris paribus", definition: "Asumsi faktor relevan lain tidak berubah saat satu hubungan dianalisis." },
    ],
    exercises: [
      {
        prompt: "Qd = 90 − 3P dan Qs = 18 + 3P. Hitung harga dan kuantitas ekuilibrium.",
        solution: "1. Samakan jumlah: 90−3P=18+3P. 2. Kurangi 18 dan tambahkan 3P: 72=6P. 3. P*=12. 4. Substitusikan ke permintaan: Qd=90−3×12=54. 5. Cek penawaran: Qs=18+3×12=54. Jadi P*=12 dan Q*=54 unit.",
      },
      {
        prompt: "Dengan fungsi soal pertama, hitung surplus atau kekurangan pada P=10.",
        solution: "1. Qd=90−3×10=60. 2. Qs=18+3×10=48. 3. Qd>Qs, jadi kekurangan=60−48=12 unit per periode.",
      },
      {
        prompt: "Harga input produksi naik. Jelaskan urutan dampak yang mungkin pada penawaran dan ekuilibrium jika permintaan tetap.",
        solution: "1. Input lebih mahal menaikkan biaya produksi. 2. Pada setiap harga jual, sebagian output kurang menguntungkan. 3. Kurva penawaran bergeser ke kiri. 4. Dengan permintaan tetap, harga ekuilibrium cenderung naik dan kuantitas cenderung turun. Besarnya perubahan perlu fungsi/data respons pasar.",
      },
      {
        prompt: "Harga kopi naik. Jika teh substitusi bagi sebagian pembeli, bedakan perubahan permintaan teh dari perubahan jumlah teh yang diminta akibat harga teh sendiri turun.",
        solution: "1. Harga kopi naik dapat mengalihkan pembeli ke teh. 2. Pada setiap harga teh, rencana pembelian teh bertambah; permintaan teh bergeser ke kanan. 3. Jika harga teh sendiri turun, pembeli bergerak sepanjang kurva teh yang sama dan jumlah yang diminta meningkat. 4. Respons aktual tergantung preferensi dan substitusi, bukan otomatis seragam.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
