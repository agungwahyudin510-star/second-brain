import type { CurriculumModule } from "@/lib/types";

export const BAB_10: CurriculumModule = {
  id: "eko2-b10",
  title: "Bab 10 — Perdagangan Internasional, Kurs, dan Neraca Pembayaran",
  summary: "Perdagangan internasional menunjukkan bagaimana negara memperoleh keuntungan dari spesialisasi, sambil menghadapi distribusi biaya dan risiko. Tarif, neraca pembayaran, dan kurs menentukan dampak nyata dari kebijakan terbuka terhadap pendapatan, harga, dan stabilitas makro.",
  lessons: [
    {
      id: "eko2-b10-s1",
      title: "Keuntungan dari perdagangan dan keunggulan komparatif",
      minutes: 40,
      content: `## Tujuan belajar

Menjelaskan posisi ekonomi kecil terbuka, membedakan keunggulan absolut dari komparatif, serta menilai bagaimana harga dunia mengubah surplus konsumen, surplus produsen, dan total surplus.

> **Poin kunci**
> - Keunggulan komparatif berarti biaya peluang produksi lebih rendah, bukan hanya output absolut lebih besar.
> - Negara kecil terbuka menerima harga dunia sebagai parameter eksternal.
> - Barang yang diimpor dan diekspor membagikan surplus dengan distribusi yang berbeda.
> - Keuntungan total dari perdagangan tidak berarti semua pihak menang dengan proporsi yang sama.

## Definisi dan intuisi

Perdagangan internasional muncul karena negara berbedabeda dalam teknologi, sumber daya, iklim, atau preferensi. Keunggulan komparatif (comparative advantage) adalah kemampuan memproduksi satu barang dengan biaya peluang yang lebih rendah dibanding negara lain. Dalam model dasar, istilah ini menekankan spesialisasi sesuai biaya peluang, bukan semata-mata produktivitas absolut. Jika negara dapat menghasilkan satu unit sedikit lebih "murah" dalam istilah kesempatan untuk melepaskan produksi lain, maka perdagangan dapat menguntungkan keduanya meskipun satu negara lebih produktif di semua sektor.

Harga dunia (world price) adalah harga suatu barang di pasar internasional. Ekonomi kecil terbuka adalah negara yang sangat kecil dibanding pasar global sehingga ia dapat membeli atau menjual pada harga dunia tanpa mengubah harga global. Karena itu, negara kecil menerimanya sebagai harga yang tak bisa dikendalikan. Ketika harga dunia berada di bawah harga ekuilibrium domestik, negara menjadi importir. Ketika harga dunia di atas harga ekuilibrium domestik, negara menjadi eksportir.

Dalam model dua sisi pasar, perubahan akibat perdagangan dapat diukur dengan surplus konsumen dan produsen. Surplus konsumen adalah manfaat total bagi pembeli karena mereka membayar di bawah nilai yang mereka sediakan. Surplus produsen adalah manfaat total bagi penjual karena mereka menerima harga di atas biaya marginal. Jika harga dunia turun di bawah harga domestik, konsumen domestik menang karena membeli lebih banyak pada harga lebih rendah; produsen domestik kehilangan sebagian surplus karena harus bersaing dengan barang impor. Tetapi keuntungan untuk konsumen dapat melebihi kerugian produsen, sehingga total surplus naik.

Dalam contoh model yang dibahas, harga domestik tanpa perdagangan adalah 12 dan kuantitas keseimbangan 40. Saat harga dunia 8, kuantitas yang diminta naik menjadi 60 dan kuantitas yang ditawarkan turun menjadi 20; import sebesar 40. Surplus konsumen naik dari 160 menjadi 360, sementara surplus produsen turun dari 160 menjadi 40. Total surplus naik dari 320 menjadi 400, dengan net gain 80. Jika harga dunia 16, negara mengekspor 40 unit. Surplus konsumen turun dari 160 menjadi 40, produsen naik dari 160 menjadi 360, dan total surplus tetap 400 dengan net gain 80. Perbedaan distribusi menekankan bahwa ada pihak yang menang dan pihak yang kalah; perdagangan bukan pemenuhan yang sama untuk semua kelompok.

## Rumus dan contoh hitungan lengkap

Satu bentuk sederhana menggunakan kurva domestic: Qd = 100 − 5P dan Qs = −20 + 5P. Ekuilibrium tanpa perdagangan terjadi ketika Qd = Qs:

- 100 − 5P = −20 + 5P
- 120 = 10P
- P* = 12 dan Q* = 40

Lalu surplus:

- Surplus konsumen = 1/2 × 40 × (20 − 12) = 160
- Surplus produsen = 1/2 × 40 × (12 − 4) = 160
- Total = 320

Bila harga dunia 8 (impor):

- Qd = 100 − 5(8) = 60
- Qs = −20 + 5(8) = 20
- Impor = 60 − 20 = 40
- Surplus konsumen = 1/2 × 60 × (20 − 8) = 360
- Surplus produsen = 1/2 × 20 × (8 − 4) = 40
- Total = 400, naik 80

Bila harga dunia 16 (ekspor):

- Qd = 100 − 5(16) = 20
- Qs = −20 + 5(16) = 60
- Ekspor = 60 − 20 = 40
- Surplus konsumen = 1/2 × 20 × (20 − 16) = 40
- Surplus produsen = 1/2 × 60 × (16 − 4) = 360
- Total = 400, naik 80

| Harga dunia | Status | Surplus konsumen | Surplus produsen | Total | Net gain |
|---:|---|---:|---:|---:|---:|
| 12 | Autarki | 160 | 160 | 320 | 0 |
| 8 | Impor | 360 | 40 | 400 | +80 |
| 16 | Ekspor | 40 | 360 | 400 | +80 |

Contoh Indonesia: industri tekstil yang menghadapi harga bahan baku global lebih murah mungkin memperoleh manfaat dari impor bahan baku, tetapi produsen lokal yang tidak mampu bersaing dapat merugi. Contoh global: semikonduktor, gandum, atau perangkat lunak dapat diperdagangkan lintas negara dengan pola yang sama: ada kelompok yang menikmati harga lebih rendah atau pasar lebih luas, dan kelompok lain menderita penurunan pangsa pasar. Dalam konteks Web3 dan ekonomi digital, peran platform lintas negara membuat distribusi daya tawar dan biaya transfer menjadi pusat perhatian.

[[visual:eko-trade-gains]]

## Kesalahpahaman umum

1. Keuntungan perdagangan bukan berarti semua kelompok dalam negeri memperoleh manfaat.
2. Harga dunia yang lebih rendah tidak selalu buruk secara total; manfaat konsumen dapat melebihi kerugian produsen.
3. Negara kecil tidak menentukan harga global, tetapi tetap dapat memilih membuka atau menutup pasar.

## Kaitan ke investasi dan psikologi

Dalam ekonomi terbuka, kelompok yang kalah dari perdagangan sering merasakan kerugian lebih tajam daripada kelompok yang menang merasakan manfaat. Ini selaras dengan bias status quo dan loss aversion: orang cenderung lebih sensitif terhadap kerugian yang dirasakan daripada manfaat yang setara. Pada tingkat kebijakan, pilihan memasuki perdagangan bebas atau proteksi bukan sekadar soal efisiensi; ia juga menyangkut distribusi dan persepsi mengenai hak atau rasa aman. Dalam dunia Web3, peraturan yang membatasi akses pasar dapat dipandang secara analogi sebagai pembatasan lintas yurisdiksi, bukan semata kontroversi teknis.

## Batas model

Model ini menyederhanakan pasar menjadi dua kurva domestik dan satu harga dunia. Ia mengasumsikan biaya transportasi, hambatan nontarif, dan perbedaan kualitas diabaikan. Dalam realitas, distribusi manfaat atau kerugian dapat berubah dengan skema subsidi, perjanjian perdagangan, atau keputusan perusahaan multinasional. Tetapi pola dasar tetap: perdagangan memungkinkan spesialisasi dan membentuk pertukaran yang dapat meningkat total surplus meski distribusinya tidak merata.
` },
    {
      id: "eko2-b10-s2",
      title: "Hambatan perdagangan: tarif, kuota, dan argumen proteksi",
      minutes: 40,
      content: `## Tujuan belajar

Menjelaskan dampak tarif dan kuota terhadap harga, kuantitas, penerimaan, dan surplus domestik, serta membedakan argumen proteksi dari kritik yang realistis.

> **Poin kunci**
> - Tarif mengubah harga domestik dan menurunkan impor, tetapi membangun penerimaan pemerintah.
> - Deadweight loss muncul karena konsumsi dan produksi bergerak dari titik efisien ke titik yang lebih mahal.
> - Kuota dapat menciptakan rente lisensi yang dapat dikumpulkan pengusaha atau pihak berwenang.
> - Argumen proteksi perlu dinilai atas dampak jangka panjang dan distribusi, bukan hanya sektor yang dilindungi.

## Definisi dan intuisi

Hambatan perdagangan adalah kebijakan yang membatasi arus barang lintas batas. Tarif adalah bea atas setiap unit impor; kuota membatasi volume impor. Kedua instrumen sering meningkatkan harga domestik dan menekan konsumsi, sekaligus melindungi produsen dalam negeri. Perbedaannya terletak pada siapa yang memperoleh bagian dari kebijakan: tarif membayar negara, sedangkan kuota dapat menghasilkan rente lisensi bagi penerima kuota, yang kadang disebut lisensi impor.

Pada model dasar, harga dunia 8 dan tarif t per unit menambah harga domestik menjadi 8 + t untuk t ≤ 4. Impor sama dengan selisih domestik demand dan supply: Qd = 100 − 5P, Qs = −20 + 5P, sehingga pada P = 8 + t:

- Qd = 100 − 5(8 + t) = 60 − 5t
- Qs = −20 + 5(8 + t) = 20 + 5t
- Impor = Qd − Qs = 40 − 10t

Penerimaan tarif = t × (40 − 10t). Deadweight loss = 5t². Ini menunjukkan hubungan kuadratik: efek berkurang impor dan efisiensi lebih besar ketika tarif tinggi. Dengan t=1, harga domestik 9, Qd=55, Qs=25, impor=30, penerimaan=30, dan DWL=5. Dengan t=2, harga domestik 10, Qd=50, Qs=30, impor=20, penerimaan=40, dan DWL=20. Dengan t=4, impor nol dan harga domestik 12 sama dengan ekuilibrium tanpa perdagangan; tarif menjadi prohibitif.

| t | Harga domestik | Qd | Qs | Impor | Penerimaan | Total surplus | DWL |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0 | 8 | 60 | 20 | 40 | 0 | 400 | 0 |
| 1 | 9 | 55 | 25 | 30 | 30 | 395 | 5 |
| 2 | 10 | 50 | 30 | 20 | 40 | 380 | 20 |
| 4 | 12 | 40 | 40 | 0 | 0 | 320 | 80 |

Tarif bisa melindungi industri baru (infant industry argument), menjaga keamanan nasional, atau mempertahankan lapangan kerja. Kritiknya juga berguna: proteksi sering menimbulkan biaya bagi konsumen, mendorong inefisiensi, dan menghambat inovasi. Industri baru mungkin membutuhkan insentif sementara, tetapi fungsi subsidi atau penguatan kemampuan produksi sering lebih tepat daripada membatasi pasar secara permanen. Dalam konteks ekonomi digital, pembatasan akses pasar dapat analog dengan pembatasan regulasi lintas yurisdiksi pada aset kripto: kebijakan dapat bersifat netral atau tidak, tetapi efeknya bergantung pada desain dan seberapa jauh pembatasan itu dibenarkan untuk tujuan keamanan, keadilan, atau stabilitas.

[[visual:eko-tariff-effects]]

## Kesalahpahaman umum

1. Tarif bukan hanya soal menurunkan impor; ia juga memindahkan surplus dari konsumen ke produsen dan pemerintah.
2. Kuota tidak selalu sama dengan tarif, karena kuota dapat menciptakan rente lisensi yang dapat terkonsentrasi.
3. Argumen proteksi dapat benar dalam kasus tertentu, tetapi tidak otomatis membenarkan hambatan permanen.

## Kaitan ke investasi dan Web3

Pembatasan akses pasar sering dibahas dalam konteks regulasi aset digital lintas yurisdiksi. Jika negara membatasi akses terhadap marketplace, token, atau wallet tertentu, dampak ekonomi bukan semata soal kebebasan teknologi. Ia juga memengaruhi biaya transaksi, posisi pasar, dan efisiensi alokasi sumber daya. Analoginya tak perlu meniscayakan klaim hukum spesifik; yang penting adalah menyadari bahwa hambatan masuk dapat memindahkan surplus dari konsumen ke pihak yang dikonservasi atau memperoleh lisensi, dengan biaya yang bisa tersembunyi di luar harga yang terlihat.

## Batas model

Model tarif menganggap negara kecil dan tidak memengaruhi harga dunia. Ia juga mengasumsikan tidak ada kebocoran, biaya administrasi, atau dampak makro yang kompleks. Dalam kenyataan, perdagangan internasional dipengaruhi oleh kebijakan perdagangan, pertimbangan geopolitik, dan rantai pasokan global. Namun pola dasar tetap: hambatan perdagangan menggeser alokasi sumber daya dari titik yang lebih efisien ke titik yang lebih mahal, dengan biaya yang dapat diklasifikasikan sebagai deadweight loss.
` },
    {
      id: "eko2-b10-s3",
      title: "Neraca pembayaran dan identitas aliran modal",
      minutes: 40,
      content: `## Tujuan belajar

Menghitung komponen transaksi berjalan, menjelaskan transaksi finansial, dan menilai identitas neraca pembayaran serta hubungan dengan tabungan nasional dan investasi.

> **Poin kunci**
> - Transaksi berjalan mencakup ekspor, impor, pendapatan faktor, dan transfer neto.
> - Transaksi finansial mencatat arus modal masuk dan keluar.
> - Neraca pembayaran harus berimbang dengan selisih statistik atau perubahan cadangan.
> - Defisit transaksi berjalan tidak otomatis berarti bencana; ia dapat dibiayai oleh modal masuk.

## Definisi dan intuisi

Neraca pembayaran (balance of payments/BOP) memindai semua arus ekonomi antara penduduk sebuah negara dan dunia. Komponen utamanya adalah transaksi berjalan dan transaksi finansial. Transaksi berjalan mencakup ekspor dan impor barang, jasa, pendapatan primer (seperti bunga, dividen, gaji), serta transfer neto. Jika ekspor neto lebih kecil dari impor neto, transaksi berjalan defisit. Transaksi finansial mencatat pembelian dan penjualan aset finansial seperti saham, obligasi, atau investasi langsung.

Identitas dasar BOP pada konvensi tanda yang umum adalah:

- Transaksi berjalan + transaksi finansial + selisih statistik = 0

Artinya, setiap defisit transaksi berjalan harus dibiayai oleh arus modal masuk neto, atau oleh pengurangan cadangan, atau oleh selisih statistik. Karena itu, perdagangan internasional bukan hanya soal ekspor-impor; ia juga soal bagaimana negara membiayai defisit dan menjaga posisi finansial.

Dalam data contoh: ekspor X = 100, impor M = 120, sehingga ekspor neto NX = −20. Pendapatan faktor yang diterima dari luar negeri 30 dan dibayarkan 50 berarti pendapatan primer neto = −20. Transfer neto +10. Maka transaksi berjalan = −20 − 20 + 10 = −30. Bila transaksi finansial neto = +30, total BOP nol. Ini berarti defisit transaksi berjalan dibiayai oleh masuknya modal atau kredit asing.

Hubungan tabungan-investasi mengikuti identitas makro: Y = C + I + G + NX. Dengan Y = 930, C = 600, G = 200, I = 150, maka 930 − 600 − 200 = 130 = S. Jadi S − I = 130 − 150 = −20 = NX. Dengan investasi melebihi tabungan nasional, negara harus membiayai bagian itu dengan modal asing. Menurut pola ini, defisit transaksi berjalan tidak selalu “buruk” secara otomatis; ia bisa menunjukkan bahwa investasi domestik lebih tinggi daripada tabungan nasional, atau bahwa masyarakat sedang dibiayai oleh arus modal yang masuk.

## Rumus dan contoh hitungan lengkap

Transaksi berjalan:

- NX = X − M = 100 − 120 = −20
- Pendapatan primer neto = 30 − 50 = −20
- Transfer neto = +10
- CA = −20 − 20 + 10 = −30

Transaksi finansial:

- Net capital inflow = +30
- CA + KA = 0

Identitas S − I = NX:

- S = Y − C − G = 930 − 600 − 200 = 130
- I = 150
- NX = S − I = 130 − 150 = −20

| Komponen | Nilai |
|---|---:|
| Ekspor neto | −20 |
| Pendapatan primer neto | −20 |
| Transfer neto | +10 |
| Transaksi berjalan | −30 |
| Transaksi finansial neto | +30 |
| Total | 0 |

Contoh Indonesia: defisit transaksi berjalan yang dibiayai oleh arus modal masuk dapat membantu investasi, tetapi juga dapat menambah ketergantungan pada pembiayaan luar negeri. Contoh global: pasar negara berkembang sering bergantung pada arus modal jangka pendek untuk menutup gap pembiayaan, membuat mereka rentan terhadap perubahan sentimen investor. Dalam ekosistem Web3, aliran dana lintas protokol, klaster aset, dan peminjaman lintas blockchain serupa dengan arus modal antarnegara; bila banyak pasokan mengandalkan dana luar, risiko ketergantungan meningkat.

[[visual:eko-bop-identity]]

## Kesalahpahaman umum

1. Defisit transaksi berjalan tidak selalu berarti kemiskinan atau kegagalan; ia bisa mencerminkan investasi tinggi atau pembiayaan luar yang masuk.
2. Transaksi finansial bukan “mengganti” transaksi berjalan; keduanya harus dibaca dalam satu identitas yang sama.
3. Utang luar negeri tidak otomatis buruk jika ia memadai dan dikelola untuk investasi produktif.

## Kaitan ke investasi dan Web3

Arus modal masuk dan keluar dapat dibandingkan dengan aliran dana lintas protokol, stratifikasi jaringan, dan kebutuhan likuiditas antarplatform. Ketika arus modal masuk tinggi, perekonomian dapat mempercepat pembangunan, tetapi terlalu bergantung pada pembiayaan luar berisiko menimbulkan sudden stop jika sentimen berubah. Di sisi lain, aliran modal keluar dapat membatasi ruang fiskal dan menekan aktivitas domestik. Inilah dasar mengapa risiko ketergantungan pembiayaan luar harus dihitung bukan hanya dalam angka, tetapi juga dalam struktur pembiayaan.

## Batas model

Model BOP menyederhanakan transaksi antarnegara menjadi arus bersih yang bisa direpresentasikan dalam satu identitas. Dalam realitas, arus modal masuk dan keluar bisa berubah cepat, menciptakan tekanan pada kurs, koridor kebijakan moneter, atau kepercayaan pasar. Data statistik juga dapat menyertakan kesalahan pengukuran, transfer khusus, atau arus finansial yang sulit diamati. Tetapi identitas dasar tetap berguna: setiap defisit transaksi berjalan harus dibayar dengan inflow modal, pengurangan cadangan, atau perubahan akun statistik.
` },
    {
      id: "eko2-b10-s4",
      title: "Kurs: nominal, riil, PPP, dan pengaruhnya pada ekspor neto",
      minutes: 40,
      content: `## Tujuan belajar

Membedakan kurs nominal dan riil, menjelaskan apresiasi dan depresiasi, serta menghubungkan kurs dengan daya saing ekspor dan ekspor neto.

> **Poin kunci**
> - Kurs nominal e mengukur harga mata uang dalam unit mata uang asing.
> - Kurs riil e_r = e × P*/P menilai daya saing relatif barang domestik dan luar negeri.
> - PPP memberi titik acuan untuk menilai apakah mata uang dinilai terlalu tinggi atau terlalu rendah.
> - Depresiasi dapat memperkuat ekspor neto bila respons pasar cukup besar.

## Definisi dan intuisi

Kurs nominal adalah tingkat di mana satu mata uang ditukar dengan mata uang lain. Dalam definisi umum, jika e = 10 MD per MA, berarti 1 mata uang asing (MA) membeli 10 unit mata uang domestik (MD). Apresiasi mata uang domestik berarti satu unit MD lebih kuat, sehingga membeli lebih banyak barang asing. Depresiasi berarti satu unit MD menukarkan lebih sedikit mata uang asing, sehingga ekspor mungkin lebih kompetitif dan impor lebih mahal.

Kurs riil mengoreksi kurs nominal dengan tingkat harga domestik dan asing:

- e_r = e × P*/P

Di mana P adalah harga domestik, P* harga luar negeri. Jika e = 10, P = 100, dan P* = 12, maka e_r = 10 × 12 / 100 = 1,2. Itu berarti barang luar negeri kira-kira 20% lebih mahal daripada barang domestik dalam satuan yang sama. Paritas daya beli (PPP) mendukung acuan bahwa kurs nominal seharusnya sekitar P/P*. Dalam contoh ini, e_PPP = 100/12 = 8,33. Karena kurs aktual 10 > 8,33, mata uang domestik disebut overvalued relative to PPP, atau setidaknya lebih mahal daripada nilai yang konsisten dengan harga barang yang umum.

Sekalipun kurs nominal jelas, pengaruhnya pada ekspor neto tidak otomatis langsung. Jika nilai tukar domestik terdepresiasi, produk ekspor menjadi lebih kompetitif; sebaliknya, impor menjadi lebih mahal. Kondisi ini dapat memperbaiki ekspor neto jika ekspor dan impor responsif. Tanda ini secara umum dikenal sebagai syarat Marshall-Lerner: bila elastisitas permintaan ekspor dan impor secara agregat cukup besar, depresiasi bisa memperbaiki neraca perdagangan. Namun saat baik ekspor maupun impor inelastis, efeknya dapat lebih lemah atau bahkan berlawanan.

## Rumus dan contoh hitungan lengkap

- e = 10 MD/MA
- P = 100 MD
- P* = 12 MA
- e_r = 10 × 12 / 100 = 1,2
- e_PPP = P/P* = 100/12 = 8,33

Bila kurs nominal naik dari 10 menjadi 12 sementara P dan P* tetap, kurs riil juga naik. Produk domestik menjadi relatif lebih mahal di luar negeri dan lebih murah di dalam negeri. Efeknya pada ekspor neto bervariasi menurut elastisitas permintaan dan persepsi pasar.

| Skema | Rumus | Penjelasan |
|---|---|---|
| Kurs nominal | e | Harga mata uang domestik dalam satuan mata uang asing |
| Kurs riil | e × P*/P | Harga barang relatif | 
| PPP | P/P* | Nilai tukar keseimbangan berdasarkan harga |
| UIP | e_expected = e × (1+i)/(1+i*) | Perbedaan bunga berdampak pada ekspektasi kurs |

Contoh Indonesia: jika rupiah melemah, barang ekspor Indonesia menjadi lebih terjangkau di pasar global, tetapi impor kapital dan bahan baku menjadi mahal. Contoh global: biaya transfer lintas negara dapat menciptakan insentif untuk memakai stablecoin jika pasar kredit bank atau transfer antarnegara terhambat. Dalam konteks Web3, stablecoin berfungsi seperti alat pembayaran antarnegara, tetapi pergerakan kurs tetap relevan bagi investor yang memakai aset berbasis mata uang atau membandingkan imbal hasil dalam berbagai unit akun.

[[visual:eko-exchange-rate]]

## Kesalahpahaman umum

1. Kurs riil bukan hanya kurs nominal dikoreksi tingkat harga; ia mengukur daya saing relatif barang.
2. Depresiasi tidak otomatis memperbaiki ekspor neto tanpa memeriksa elastisitas permintaan.
3. PPP bukan kebenaran absolut yang selalu dipenuhi, tetapi titik pembanding yang berguna.

## Kaitan ke investasi dan Web3

Investor lintas negara menghadapi risiko kurs ketika menilai imbal hasil di mata uang asal atau tujuan. Stablecoin dan mata uang digital dapat mempermudah transfer lintas negara dan mengurangi biaya komparatif, tetapi mereka tidak membasmi selisih kurs atau risiko perubahan nilai bila aset dinilai dalam satuan yang berbeda. Risiko ini penting untuk dipahami, terutama saat investor menggabungkan strategi lintas batas dengan aset berbasis uang elektronik atau token.

## Batas model

Model kurs di sini mengabstraksi berbagai faktor seperti sentimen pasar, intervensi bank sentral, dan risiko politik. Syarat Marshall-Lerner bersifat kualitatif; ia tidak menawarkan angka pasti tanpa estimasi elastisitas. Kurs riil dan PPP juga bergantung pada indeks harga yang dipakai dan definisi bundel barang. Namun model tetap membantu memahami alasan kurs dan daya saing tidak bisa dipisahkan dari harga dan aliran modal.
` },
    {
      id: "eko2-b10-s5",
      title: "Rezim kurs, cadangan devisa, dan trilema kebijakan",
      minutes: 40,
      content: `## Tujuan belajar

Membedakan kurs mengambang, tetap, dan mengambang terkendali; menjelaskan cadangan devisa dan intervensi; serta menilai trilema kebijakan dan risiko sudden stop.

> **Poin kunci**
> - Kurs mengambang membiarkan nilai tukar menyesuaikan melalui pasar.
> - Kurs tetap atau terkendali memerlukan intervensi atau cadangan devisa.
> - Trilema kebijakan menyatakan hanya dua dari tiga tujuan yang dapat dipilih sekaligus.
> - Arus modal yang tiba-tiba keluar dapat menekan kurs dan membatasi ruang kebijakan domestik.

## Definisi dan intuisi

Rezim kurs menentukan seberapa banyak bank sentral atau pasar menentukan nilai mata uang. Dalam kurs mengambang (floating exchange rate), nilai tukar ditentukan lebih banyak oleh permintaan dan penawaran valuta di pasar. Kenaikan permintaan untuk mata uang domestik dapat memperkuat kurs; arus modal keluar atau kelangkaan valuta dapat melemahkannya.

Dalam kurs tetap (fixed exchange rate), bank sentral berjanji menjaga tingkat tertentu. Untuk menegakkannya, bank sentral dapat membeli atau menjual valuta asing dan memakai cadangan devisa. Cadangan devisa adalah aset luar negeri yang dipakai sebagai alat intervensi. Dalam kurs mengambang terkendali (managed float), bank sentral ikut bergerak tanpa menjanjikan tingkat tetap, biasanya untuk mencegah fluktuasi berlebihan atau menekan saham pasar yang tiba-tiba.

Trilema kebijakan (impossible trinity) menyatakan bahwa dengan mobilitas modal yang tinggi, negara biasanya harus memilih hanya dua dari tiga: kurs tetap, kebijakan moneter mandiri, dan mobilitas modal bebas. Jika negara menekan kurs tetap dan menginginkan kebijakan moneter mandiri, ia mengurangi mobilitas modal. Jika mobilitas modal bebas dipertahankan, bank sentral akan menghadapi kendala besar dalam mempertahankan kurs tetap sambil menjaga suku bunga domestik sesuai kebutuhan internal.

Saat arus modal masuk atau keluar tiba-tiba, sistem bisa menghadapi sudden stop: modal keluar dengan cepat, nilai tukar terdepresiasi tajam, dan pembiayaan domestik mengering. Risiko ini lebih terasa pada ekonomi dengan utang dolar, atau ketika banyak proyek bergantung pada pembiayaan luar. Dalam konteks stablecoin, peg stablecoin atau peg mata uang memerlukan cadangan dan kepercayaan yang tinggi. Bila kepercayaan berkurang, pasar bisa melakukan serangan spekulatif terhadap peg, meski itu bukan klaim tentang proyek tertentu. Prinsipnya sama: cadangan, likuiditas, dan keyakinan menentukan kemampuan menjaga peg.

## Rumus dan contoh hitungan lengkap

Trilema tidak menghasilkan satu angka, tetapi menjaga logika kebijakan:

- Jika negara memilih kurs tetap + moneter mandiri, mobilitas modal harus terbatas.
- Jika negara memilih kurs tetap + mobilitas modal, moneter mandiri harus dikorbankan.
- Jika negara memilih mobilitas modal + moneter mandiri, kurs cenderung mengambang.

Cadangan devisa dapat dipandang sebagai buffer terhadap tekanan. Jika bank sentral mempertahankan kurs tetap dan modal keluar, ia dapat menjual cadangan untuk membeli mata uang domestik. Tetapi kapasitas ini terbatas oleh ukuran cadangan. Semakin besar tekanan pasar, semakin besar kemungkinan kebijakan tersebut gagal atau mendorong pengorbanan suku bunga dan likuiditas domestik.

| Rezim | Karakter | Intervensi | Risiko utama |
|---|---|---|---|
| Mengambang | Nilai tukar ditentukan pasar | Rendah | Volatilitas tinggi |
| Tetap | Nilai tukar dijaga | Tinggi | Cadangan terkuras |
| Terkendali | Intervensi selektif | Sedang | Kebijakan bisa kurang jelas |

Contoh Indonesia: ketika arus modal keluar tajam, rupiah dapat terdepresiasi dan menyebabkan tekanan pada harga impor, utang luar negeri, serta daya beli rumah tangga. Contoh global: negara dengan cadangan besar dapat lebih tahan terhadap gegar pasar, tetapi tetap tak kebal terhadap perubahan sentimen. Dalam ekosistem Web3, peg stablecoin yang didukung cadangan dapat menghadapi serangan spekulatif jika pengguna khawatir terhadap risiko penyetoran, likuiditas, atau kepercayaan penerbit.

[[visual:eko-currency-regimes]]

## Kesalahpahaman umum

1. Kurs tetap bukan berarti tidak ada fluktuasi sama sekali; ia hanya berarti ada batas atau intervensi yang lebih besar.
2. Mengambang tidak berarti bank sentral tidak dapat bertindak; ia hanya berarti pasar lebih dominan.
3. Trilema bukan soal pilihan yang salah; ia menyoroti trade-off yang inheren.

## Kaitan ke investasi dan Web3

Dalam perekonomian terbuka, pergeseran kurs dapat memengaruhi profitabilitas investasi lintas negara, biaya transfer, dan relatifnya asetkripto versus aset berbasis fiat. peg stablecoin, meski sering dibahas sebagai solusi lintas batas, tetap bergantung pada cadangan, kepercayaan, dan kemungkinan serangan spekulatif. Prinsipnya mirip dengan cadangan devisa bank sentral: peg yang kuat bukan hanya soal teknologi, tetapi juga tentang kemampuan menjalankan janji berbasis kepercayaan dan likuiditas.

## Batas model

Model ini mengabaikan detail struktur pasar valuta, kebijakan makro yang berubah, dan geometry pergerakan modal jangka pendek. Ia juga tidak memprediksi kurs tertentu atau menjamin keberhasilan intervensi. Rezim kurs adalah instrumen, bukan hukum. Dalam praktik, keputusan bank sentral, sentimen pasar, dan struktur utang nasional saling berinteraksi. Tetapi pemahaman model yang tepat tetap penting untuk membaca risiko, manfaat, dan trade-off secara lebih kritis.
` },
  ],
  chapterResources: {
    summary: [
      "Perdagangan internasional membuat spesialisasi dan ekspansi pasar, tetapi distribusi manfaat tidak merata.",
      "Tarif dan kuota memindahkan surplus, menciptakan penerimaan, dan menimbulkan deadweight loss.",
      "Neraca pembayaran menghubungkan transaksi berjalan dan arus modal.",
      "Tabungan-investasi dan ekspor neto adalah identitas makro yang penting.",
      "Kurs nominal dan riil membedakan nilai tukar dari daya saing relatif.",
      "PPP memberi referensi untuk mengevaluasi valuta terhadap harga barang.",
      "Trilema kebijakan menegaskan bahwa kurs tetap, mobilitas modal, dan moneter mandiri tidak bisa semua dipilih sekaligus.",
      "Arus modal yang tiba-tiba bisa menimbulkan fluktuasi besar dan risiko sistemik."
    ],
    glossary: [
      { term: "Keunggulan komparatif", english: "Comparative advantage", definition: "Kemampuan memproduksi barang dengan biaya peluang paling rendah." },
      { term: "Harga dunia", english: "World price", definition: "Harga suatu barang di pasar internasional yang diterima ekonomi kecil." },
      { term: "Ekonomi kecil terbuka", english: "Small open economy", definition: "Negara yang harga pasarnya tidak memengaruhi harga dunia secara berarti." },
      { term: "Surplus konsumen", english: "Consumer surplus", definition: "Selisih antara nilai yang bersedia dibayar pembeli dan harga pasar." },
      { term: "Surplus produsen", english: "Producer surplus", definition: "Selisih antara harga pasar dan biaya produksi marginal." },
      { term: "Tarif", english: "Tariff", definition: "Pajak atas unit impor yang menaikkan harga domestik." },
      { term: "Kuota", english: "Quota", definition: "Pembatasan kuantitas impor yang diizinkan masuk." },
      { term: "Rente lisensi", english: "Quota rent", definition: "Keuntungan ekstra yang diperoleh karena hak kuota atau lisensi impor." },
      { term: "Deadweight loss", english: "Deadweight loss", definition: "Kerugian efisiensi akibat alokasi yang melenceng dari titik optimal." },
      { term: "Neraca pembayaran", english: "Balance of payments", definition: "Catatan arus ekonomis antarnegara." },
      { term: "Transaksi berjalan", english: "Current account", definition: "Ekspor, impor, pendapatan faktor, dan transfer neto." },
      { term: "Transaksi finansial", english: "Financial account", definition: "Pembelian dan penjualan aset finansial antarnegara." },
      { term: "Arus modal", english: "Capital flow", definition: "Aliran dana antarnegara untuk investasi atau pembiayaan." },
      { term: "Kurs nominal", english: "Nominal exchange rate", definition: "Harga mata uang dalam unit mata uang asing." },
      { term: "Kurs riil", english: "Real exchange rate", definition: "Kurs nominal yang disesuaikan dengan tingkat harga." },
      { term: "PPP", english: "Purchasing power parity", definition: "Nilai tukar yang menyamakan daya beli antarnegara." },
      { term: "Cadangan devisa", english: "Foreign reserves", definition: "Aset luar negeri yang dipakai bank sentral untuk intervensi." },
      { term: "Trilema kebijakan", english: "Trilemma", definition: "Kendala memilih kurs tetap, mobilitas modal, dan moneter mandiri sekaligus." },
      { term: "Sudden stop", english: "Sudden stop", definition: "Penarikan tiba-tiba modal yang mengganggu keuangan domestik." }
    ],
    exercises: [
      {
        prompt: "Dengan Qd = 100 − 5P dan Qs = −20 + 5P, hitung harga ekuilibrium domestik, surplus konsumen, surplus produsen, dan total surplus tanpa perdagangan.",
        solution: "Ekuilibrium terjadi pada P*=12 dan Q*=40. SK=1/2×40×(20−12)=160, SP=1/2×40×(12−4)=160, total=320."
      },
      {
        prompt: "Bila harga dunia 8, hitung Qd, Qs, impor, dan perubahan surplus total dibanding autarki.",
        solution: "Qd=60, Qs=20, impor=40, SK=360, SP=40, total=400, net gain=+80."
      },
      {
        prompt: "Jika X=100, M=120, pendapatan primer neto = −20, transfer neto = +10, dan transaksi finansial neto = +30, hitung transaksi berjalan dan cek identitas BOP.",
        solution: "Transaksi berjalan = −20 − 20 + 10 = −30. Dengan transaksi finansial +30, total BOP = 0."
      },
      {
        prompt: "Pada e=10, P=100, dan P*=12, hitung kurs riil dan tingkat PPP serta jelaskan arti maknanya untuk daya saing ekspor.",
        solution: "e_r=10×12/100=1,2; e_PPP=100/12=8,33. Kurs riil di atas 1 menunjukkan produk luar negeri relatif lebih mahal, tetapi kurs nominal masih lebih tinggi daripada anomaly PPP."
      }
    ],
    furtherReading: [
      { title: "International Economics", authors: "Paul Krugman, Maurice Obstfeld, Marc Melitz" },
      { title: "Macroeconomics", authors: "Olivier Blanchard" },
      { title: "Open Economy Macroeconomics", authors: "Mankiw dan Taylor" },
      { title: "The Economy", authors: "The CORE Econ Team" }
    ]
  }
};
