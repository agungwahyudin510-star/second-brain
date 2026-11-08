import type { CurriculumModule } from "@/lib/types";

export const BAB_09: CurriculumModule = {
  id: "eko2-b09",
  title: "Bab 9 — Permintaan Agregat, Penawaran Agregat, dan Kebijakan Fiskal",
  summary: "Model permintaan dan penawaran agregat menjelaskan keluaran serta tingkat harga dalam jangka pendek; pengganda fiskal, dinamika utang, dan jeda kebijakan membantu menilai pilihan stabilisasi beserta batasnya.",
  lessons: [
    {
      id: "eko2-b09-s1",
      title: "Permintaan agregat dan komponennya",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan kemiringan kurva permintaan agregat, uraikan tiga saluran yang menghubungkan tingkat harga dengan keluaran yang diminta, dan bedakan gerak sepanjang kurva dari pergeseran kurva.

> **Poin kunci**
> - Permintaan agregat (AD) menunjukkan keluaran riil yang direncanakan pada berbagai tingkat harga.
> - AD miring turun karena efek kekayaan, suku bunga, dan nilai tukar.
> - Perubahan tingkat harga menggerakkan titik sepanjang AD; perubahan faktor lain menggeser seluruh kurva.
> - Ekspektasi optimistis atau pesimistis mengubah pengeluaran dan dapat menggeser AD.

## Definisi dan intuisi

Permintaan agregat (aggregate demand/AD) adalah jumlah keluaran riil yang ingin dibeli rumah tangga, perusahaan, pemerintah, dan pembeli luar negeri pada berbagai tingkat harga. Komponennya ditulis **Y = C + I + G + NX**: Y adalah keluaran yang diminta, C konsumsi rumah tangga, I investasi barang modal dan persediaan, G belanja pemerintah untuk barang dan jasa, dan NX ekspor neto. Identitas ini mengelompokkan pengeluaran atas produksi domestik; transfer pemerintah bukan pembelian langsung barang dan jasa.

Kurva AD biasanya miring turun pada grafik yang menempatkan tingkat harga P pada sumbu tegak dan keluaran Y pada sumbu mendatar. Hubungan tersebut bukan kurva permintaan satu barang. Ia merangkum bagaimana tingkat harga umum memengaruhi keseluruhan rencana pengeluaran, dengan kebijakan moneter, fiskal, ekspektasi, dan faktor lain dianggap tetap.

Efek kekayaan (wealth effect) menyatakan bahwa tingkat harga yang lebih rendah meningkatkan daya beli saldo nominal tertentu. Rumah tangga merasa kekayaan riilnya lebih besar dan sebagian menaikkan konsumsi. Efek suku bunga (interest-rate effect) berawal dari kebutuhan transaksi: tingkat harga lebih tinggi membuat kebutuhan uang nominal lebih besar. Jika suplai uang dan kebijakan tetap, permintaan likuiditas menekan suku bunga, sehingga pembelian rumah, barang tahan lama, atau investasi perusahaan berkurang. Efek nilai tukar (exchange-rate effect) terjadi ketika perubahan suku bunga relatif memengaruhi arus dana dan nilai mata uang. Mata uang yang menguat cenderung membuat ekspor lebih mahal bagi pembeli luar dan impor lebih murah, sehingga NX turun. Ketiga saluran menjelaskan kemiringan AD dalam model, tetapi kekuatan masing-masing saluran berbeda antarwaktu.

Pergeseran AD terjadi ketika faktor selain tingkat harga mengubah rencana pengeluaran. Kenaikan pendapatan atau keyakinan rumah tangga dapat menaikkan C. Ekspektasi penjualan yang lebih baik dapat mendorong I; belanja pemerintah G yang lebih tinggi menambah permintaan langsung. Pajak memengaruhi pendapatan siap belanja, sedangkan suku bunga dan kredit memengaruhi konsumsi maupun investasi. Perubahan pendapatan luar negeri atau nilai tukar dapat mengubah NX. Jika faktor ini berubah, seluruh kurva AD bergeser.

Perbedaan gerak dan pergeseran penting untuk membaca data. Jika hanya P berubah, bergerak sepanjang kurva AD yang sama. Jika ekspektasi berubah ketika P tetap, kurva bergeser. Keyakinan perusahaan dan rumah tangga kadang disebut roh hewani (animal spirits): perubahan suasana hati atau harapan memengaruhi belanja meski data saat ini belum banyak berubah. Istilah ini menjelaskan sumber variasi, bukan menyatakan ekspektasi selalu irasional.

## Rumus dan contoh hitungan lengkap

Gunakan **Y = 1.400 + a − 200P**, dengan a sebagai pergeseran permintaan agregat dan P tingkat harga. a dan Y diukur dalam satuan keluaran; P adalah indeks tingkat harga pada skala model.

| Pergeseran a | Tingkat harga P | Perhitungan Y | Keluaran diminta |
|---:|---:|---|---:|
| 0 | 2,0 | 1.400+0−200×2 | **1.000** |
| +100 | 2,0 | 1.400+100−200×2 | **1.100** |
| 0 | 2,5 | 1.400+0−200×2,5 | **900** |

Baris pertama memberi titik dasar. Bila P bergerak dari 2,0 ke 2,5 sementara a tetap nol, Y berubah dari 1.000 menjadi 900: itu gerak sepanjang kurva. Bila a naik dari 0 ke 100 pada P=2,0, Y menjadi 1.100: kurva bergeser dan titik tidak bergerak pada kurva lama.

Contoh Indonesia: penurunan keyakinan belanja dapat membuat rumah tangga menunda pembelian dan perusahaan menunda investasi, menggeser AD ke kiri. Contoh global: perubahan likuiditas pasar aset dapat meningkatkan rasa optimistis dan FOMO, mendorong belanja atau investasi yang menggeser permintaan agregat. Arah dan besaran dampak makro tidak dapat disimpulkan dari satu aset atau satu pengumuman.

[[visual:eko-ad-curve]]

## Kesalahpahaman umum

1. AD bukan permintaan satu produk; ia merangkum pengeluaran atas keluaran agregat.
2. Kenaikan tingkat harga menggerakkan titik sepanjang AD, bukan otomatis menggeser kurva.
3. Perubahan G langsung mengubah permintaan, sedangkan transfer bekerja melalui keputusan penerima.

## Kaitan ke investasi dan psikologi

Likuiditas pasar aset dan ekspektasi investor dapat berubah bersamaan. Kenaikan harga aset kadang mendorong rasa kaya dan belanja; FOMO dapat mempercepat keputusan investasi dan memengaruhi sentimen perusahaan. Saluran ini berpotensi menggeser AD, tetapi hubungan tersebut bukan alat untuk meramalkan harga aset atau arah ekonomi.

## Batas model

Persamaan AD di sini adalah garis ilustratif dengan kemiringan tetap, bukan estimasi negara tertentu. Efek kekayaan, suku bunga, dan nilai tukar saling berinteraksi; kebijakan dapat berubah ketika P berubah. Model tidak menggambarkan distribusi pendapatan atau komposisi setiap pembelian.
`,
    },
    {
      id: "eko2-b09-s2",
      title: "Penawaran agregat dan keseimbangan AD-AS",
      minutes: 40,
      content: `## Tujuan belajar

Bedakan penawaran agregat jangka pendek dan jangka panjang, hitung keseimbangan AD-AS sederhana, serta jelaskan guncangan permintaan, guncangan biaya, stagflasi, dan penyesuaian menuju keluaran potensial.

> **Poin kunci**
> - SRAS miring naik ketika sebagian upah dan harga tidak segera menyesuaikan.
> - LRAS tegak pada PDB potensial dalam model yang memisahkan kapasitas dari tingkat harga.
> - Guncangan permintaan dan penawaran menghasilkan kombinasi perubahan P dan Y yang berbeda.
> - Penyesuaian upah dan harga dapat mengembalikan keluaran ke potensial, tetapi memerlukan waktu.

## Definisi dan intuisi

Penawaran agregat (aggregate supply/AS) menunjukkan keluaran yang bersedia diproduksi perusahaan pada berbagai tingkat harga. Kurva penawaran agregat jangka pendek (short-run aggregate supply/SRAS) miring naik karena upah, kontrak, atau sebagian harga input kaku dalam jangka pendek. Ketika harga produk naik lebih cepat daripada biaya yang belum menyesuaikan, produksi sementara lebih menguntungkan. Perusahaan menaikkan keluaran dan penggunaan tenaga kerja.

Penawaran agregat jangka panjang (long-run aggregate supply/LRAS) tegak pada PDB potensial Y*, yaitu keluaran yang dapat dipertahankan dengan kapasitas, tenaga kerja, teknologi, dan institusi yang tersedia. Dalam jangka panjang, perubahan tingkat harga saja tidak meningkatkan jumlah sumber daya atau produktivitas. LRAS vertikal adalah penyederhanaan untuk memisahkan tingkat harga dari kapasitas produktif; pertumbuhan teknologi atau modal dapat menggeser Y*.

Keseimbangan jangka pendek terjadi saat jumlah keluaran yang diminta sama dengan jumlah yang ditawarkan pada P dan Y yang sama. Guncangan permintaan (demand shock) menggeser AD akibat perubahan konsumsi, investasi, belanja pemerintah, pajak, atau ekspor neto. Guncangan penawaran (supply shock) menggeser SRAS karena biaya input, produktivitas, atau gangguan produksi berubah. Guncangan positif AD menaikkan P dan Y pada model ini; guncangan negatif AD menurunkan keduanya. Guncangan biaya negatif menggeser SRAS ke kiri: P naik sementara Y turun. Kombinasi itu disebut stagflasi (stagflation).

Kesenjangan resesi muncul saat keluaran aktual di bawah potensial; kesenjangan inflasi terjadi saat keluaran berada di atas potensial. Istilah kesenjangan mengukur selisih terhadap Y*, bukan tingkat harga. Jika AD meningkat sementara LRAS tegak, keluaran dapat berada di atas potensi pada jangka pendek. Upah dan biaya yang kemudian naik menggeser SRAS ke kiri/atas sampai keluaran kembali ke Y*, dengan tingkat harga yang lebih tinggi. Setelah AD turun, penyesuaian biaya yang lebih rendah dapat mendorong SRAS ke kanan; proses dapat memerlukan waktu dan tidak selalu mulus.

## Rumus dan contoh hitungan lengkap

Gunakan **AD: Y=1.400+a−200P**, **SRAS: Y=800+s+100P**, dan **LRAS: Y*=1.000**. a menggeser AD; s menggeser SRAS. Samakan AD dan SRAS: 1.400+a−200P=800+s+100P, sehingga **P=(600+a−s)/300**; lalu **Y=800+s+100P**.

| Skenario | a | s | P* | Y* jangka pendek | Tafsir |
|---|---:|---:|---:|---:|---|
| Dasar | 0 | 0 | 2,000 | 1.000 | Pada potensi |
| AD naik | +100 | 0 | 2,333 | 1.033,3 | Kesenjangan inflasi |
| AD turun | −100 | 0 | 1,667 | 966,7 | Kesenjangan resesi |
| SRAS turun karena biaya naik | 0 | −100 | 2,333 | 933,3 | Stagflasi |
| SRAS naik | 0 | +100 | 1,667 | 1.066,7 | Harga turun, keluaran naik |

Sebagai contoh, ketika a=100 dan s=0, P=(600+100)/300=2,333. Y=800+100×2,333=1.033,3, di atas potensi 1.000. Dalam penyesuaian jangka panjang, AD menjadi Y=1.500−200P. Pada Y=1.000, P=(1.500−1.000)/200=**2,5**. Upah menyesuaikan dan SRAS bergeser sehingga keluaran kembali ke potensi, sedangkan P lebih tinggi.

Contoh Indonesia: kenaikan biaya energi bagi pabrik dapat mengurangi produksi pada tingkat harga sebelumnya, menggeser SRAS ke kiri. Contoh global: kenaikan biaya gas untuk operasi pusat data atau biaya energi penambangan dapat menjadi analogi guncangan penawaran bagi layanan yang memakai input tersebut. Analogi ini tidak menyatakan besaran biaya riil atau dampak agregat.

[[visual:eko-adas-equilibrium]]

## Kesalahpahaman umum

1. LRAS tegak bukan berarti keluaran selalu sama; kapasitas produktif dapat berubah.
2. Stagflasi berarti harga naik bersamaan dengan keluaran turun akibat guncangan penawaran negatif dalam contoh.
3. Keluaran di atas potensial adalah kesenjangan inflasi, bukan bukti bahwa tingkat harga sudah pasti turun atau naik.

## Kaitan ke investasi dan Web3

Energi dan komputasi merupakan input bagi layanan digital. Kenaikan biaya energi penambangan atau biaya gas dapat mengurangi aktivitas atau menaikkan harga layanan tertentu, sebagai analogi guncangan penawaran. Perusahaan dan investor perlu membedakan perubahan biaya dari perubahan permintaan; analogi ini tidak memberikan sinyal untuk memperkirakan nilai token.

## Batas model

Garis AD dan SRAS menganggap hubungan linear serta kemiringan tetap. LRAS menganggap kapasitas potensial diketahui, padahal estimasinya tidak pasti. Model tidak memasukkan ekspektasi, rantai pasok, variasi antarindustri, atau respons kebijakan secara terperinci.
`,
    },
    {
      id: "eko2-b09-s3",
      title: "Kebijakan fiskal dan pengganda",
      minutes: 40,
      content: `## Tujuan belajar

Gunakan fungsi konsumsi sederhana untuk menghitung keluaran ekuilibrium dan pengganda belanja serta pajak, lalu jelaskan penstabil otomatis dan efek mengeluarkan.

> **Poin kunci**
> - Belanja pemerintah menjadi komponen permintaan; pajak memengaruhi pendapatan siap belanja.
> - Kecenderungan konsumsi marjinal menentukan besarnya putaran belanja berikutnya.
> - Pengganda belanja adalah 1/(1−MPC); pengganda pajak adalah −MPC/(1−MPC).
> - Penstabil otomatis meredam siklus tanpa undang-undang baru, sementara efek mengeluarkan dapat mengurangi dampak fiskal.

## Definisi dan intuisi

Kebijakan fiskal (fiscal policy) menggunakan belanja pemerintah, pajak, dan transfer untuk memengaruhi permintaan agregat serta layanan publik. Belanja barang dan jasa G masuk langsung ke pengeluaran agregat. Pajak T mengurangi pendapatan siap belanja, sedangkan transfer menambah sumber daya penerima tetapi tidak dihitung sebagai pembelian pemerintah dalam identitas PDB. Dampak transfer bergantung pada bagian penerima yang dibelanjakan.

Fungsi konsumsi sederhana **C=a+b(Y−T)** menyatakan konsumsi C sebagai konsumsi otonom a ditambah kecenderungan konsumsi marjinal b kali pendapatan disposabel Y−T. Y adalah pendapatan atau keluaran, T pajak neto tetap, dan b atau MPC adalah bagian tambahan pendapatan yang digunakan untuk konsumsi. Dalam contoh dasar, **C=100+0,8(Y−T)**, sehingga MPC=0,8. Sisa tambahan pendapatan menjadi tabungan. Jika barang impor, pajak proporsional, dan perubahan harga tidak dimasukkan, putaran belanja domestik dapat ditulis ringkas.

Setiap tambahan belanja pemerintah menjadi pendapatan penerima, yang membelanjakan sebagian untuk konsumsi; belanja itu menjadi pendapatan pihak berikutnya. Jumlah geometri putaran tersebut menghasilkan pengganda belanja **1/(1−b)**. Perubahan pajak bekerja melalui konsumsi yang lebih kecil atau lebih besar: pengganda pajak **−b/(1−b)**. Tanda negatif menunjukkan pajak naik menurunkan keluaran, sementara pajak turun menaikkannya. Bila belanja dan pajak naik dalam jumlah sama, pengganda anggaran berimbang dalam model sederhana adalah satu: perubahan keluaran sama dengan perubahan belanja bersih dalam satuan yang digunakan.

Penstabil otomatis (automatic stabilizer) seperti pajak progresif dan tunjangan pengangguran berubah mengikuti pendapatan atau kondisi kerja tanpa keputusan legislatif baru. Saat pendapatan turun, pajak yang dibayar cenderung turun dan sebagian tunjangan naik, sehingga pendapatan disposabel tidak jatuh sebesar perubahan keluaran. Saat ekonomi menguat, mekanisme yang sama mengurangi dorongan permintaan berlebih.

Efek mengeluarkan (crowding out) terjadi ketika stimulus fiskal meningkatkan permintaan dana atau suku bunga, sehingga sebagian investasi swasta tertunda. Efek ini tidak selalu penuh; ia bergantung pada kondisi kapasitas, kebijakan moneter, respons tabungan, dan keadaan pasar kredit. Pengganda riil juga berkurang jika pendapatan dibelanjakan untuk impor, ditabung, atau tidak menjadi produksi baru karena kapasitas terkendala.

## Rumus dan contoh hitungan lengkap

Dengan **C=100+0,8(Y−T)**, I=100, G=120, T=150, dan NX=0, keseimbangan adalah Y=C+I+G+NX. Susun ulang: **Y=(100−0,8T+I+G+NX)/(1−0,8)**.

| Komponen | Perhitungan | Nilai |
|---|---|---:|
| Konsumsi awal | 100+0,8×(1.000−150) | 780 |
| Keluaran dasar | 780+100+120 | **1.000** |
| Pengganda belanja | 1/(1−0,8) | **5** |
| Pengganda pajak | −0,8/(1−0,8) | **−4** |
| Pengganda anggaran berimbang | 5−4 | **1** |
| G naik 20 menjadi 140 | ΔY=5×20 | **+100; Y=1.100** |
| T naik 20 menjadi 170 | ΔY=−4×20 | **−80; Y=920** |
| G dan T naik 20 | ΔY=20 | **+20; Y=1.020** |

Jika MPC turun menjadi 0,75, pengganda belanja menjadi 1/(1−0,75)=4. Kenaikan G sebesar 20 menaikkan Y sebesar 4×20=**80**, bukan 100. Nilai MPC mengubah jumlah putaran konsumsi yang mengikuti pengeluaran awal.

Contoh Indonesia: pembangunan infrastruktur digital membeli jasa konstruksi, perangkat, dan tenaga kerja; pendapatan yang diterima dapat membiayai belanja berikutnya. Dampak akhirnya tergantung kapasitas, kebocoran impor, dan apakah proyek menghasilkan manfaat jangka panjang. Contoh global: kenaikan pajak atas pendapatan rumah tangga memengaruhi kemampuan belanja melalui pendapatan disposabel. Loss aversion membuat kenaikan pajak yang terlihat terasa lebih berat dibanding manfaat layanan publik yang diterima bertahap.

[[visual:eko-keynesian-multiplier]]

## Kesalahpahaman umum

1. Transfer bukan G dalam identitas pengeluaran, meski dapat menaikkan konsumsi penerima.
2. Pengganda 5 bukan hukum pasti; ia berasal dari asumsi MPC dan kebocoran tertentu.
3. Pengganda pajak negatif; pemotongan pajak menaikkan keluaran dalam model, bukan menurunkannya.

## Kaitan ke investasi dan psikologi

Belanja infrastruktur digital dapat memberi putaran pendapatan kepada pekerja dan pemasok, lalu sebagian dibelanjakan kembali. Namun kapasitas proyek, pengadaan, dan impor menentukan seberapa banyak pengeluaran menjadi produksi lokal. Loss aversion juga dapat membuat publik lebih peka pada kenaikan pajak yang langsung terlihat daripada manfaat layanan atau infrastruktur yang muncul kemudian.

## Batas model

Fungsi konsumsi menganggap MPC tetap, harga tetap, dan tidak ada batas kapasitas atau respons suku bunga. Model tidak menilai mutu proyek, distribusi manfaat, pembiayaan utang, atau perubahan perilaku ketika kebijakan berlangsung lama.
`,
    },
    {
      id: "eko2-b09-s4",
      title: "Defisit, saldo primer, dan dinamika utang",
      minutes: 40,
      content: `## Tujuan belajar

Bedakan defisit total dari defisit primer, hitung perubahan rasio utang terhadap PDB, dan jelaskan bagaimana selisih suku bunga dengan pertumbuhan serta saldo primer memengaruhi keberlanjutan utang.

> **Poin kunci**
> - Defisit anggaran terjadi ketika pengeluaran melebihi penerimaan dalam satu periode.
> - Defisit primer mengecualikan pembayaran bunga dari saldo anggaran.
> - Rasio utang dipengaruhi selisih suku bunga dan pertumbuhan serta saldo primer.
> - Surplus primer dapat menstabilkan rasio utang, tetapi keberlanjutan juga bergantung pada risiko dan kebijakan.

## Definisi dan intuisi

Defisit anggaran (budget deficit) adalah aliran ketika pengeluaran pemerintah melebihi penerimaan selama suatu periode. Utang pemerintah (government debt) adalah stok kewajiban yang terakumulasi dari pembiayaan defisit masa lalu dan transaksi lain. Defisit merupakan besaran per periode; utang merupakan jumlah kewajiban pada suatu tanggal. Defisit primer (primary deficit) mengecualikan pembayaran bunga, atau secara ekuivalen saldo primer mengukur penerimaan dikurangi pengeluaran selain bunga. Dalam pelajaran ini saldo primer positif berarti surplus yang mengurangi rasio utang.

Rasio utang terhadap PDB (debt-to-GDP ratio) membandingkan stok utang dengan ukuran keluaran tahunan. Rasio memberi konteks kemampuan ekonomi menghasilkan sumber daya, tetapi bukan ukuran tunggal kemampuan membayar. Komposisi mata uang, jatuh tempo, tingkat bunga, basis pajak, akses pembiayaan, dan kewajiban kontinjensi juga penting. Membandingkan rasio dua negara tanpa memperhatikan faktor itu dapat menyesatkan.

Dinamika rasio utang sederhana ditulis **d(t+1)=d(t)×(1+r)/(1+g)−pb**, dengan d rasio utang saat ini dalam persen PDB, r suku bunga nominal efektif pada kewajiban, g pertumbuhan nominal PDB, dan pb saldo primer positif sebagai surplus dalam persen PDB. Jika r lebih besar daripada g, faktor pengali melebihi satu sehingga rasio utang cenderung naik tanpa surplus primer. Jika g lebih besar daripada r, basis PDB tumbuh lebih cepat daripada bunga sehingga rasio dapat turun meski saldo primer nol. Definisi konsisten terhadap basis nominal diperlukan dalam rumus ini.

Surplus primer penstabil dalam model adalah **pb*=d×(r−g)/(1+g)**. Rumus diperoleh dengan mensyaratkan d(t+1)=d(t), lalu mengisolasi pb. Jika r>g, surplus positif diperlukan dalam kerangka sederhana. Jika r<g, rumus memberi saldo primer negatif yang tetap konsisten dengan rasio stabil; ini bukan anjuran membuat defisit, melainkan hasil matematis di bawah asumsi. Risiko suku bunga, pertumbuhan, kurs, dan biaya pembiayaan dapat berubah. Keberlanjutan utang menilai kemampuan memenuhi kewajiban tanpa penyesuaian yang tidak realistis atau gangguan ekonomi berat, bukan hanya apakah rasio naik satu tahun.

Pertumbuhan penghasilan pemerintah juga dapat terlalu optimistis dalam proyeksi. Penerimaan pajak dapat berfluktuasi bersama ekonomi, sedangkan suku bunga dapat berubah ketika risiko meningkat. Menyusun beberapa skenario dan menjaga bantalan fiskal membantu menguji ketahanan, tanpa menganggap satu jalur sebagai kepastian.

## Rumus dan contoh hitungan lengkap

Gunakan semua besaran dalam persen PDB, d=60%, r=5%, g=3%, dan saldo primer nol. Faktor pengali =1,05/1,03.

| Perhitungan | Langkah | Hasil |
|---|---|---:|
| Rasio utang tahun berikut | 60×1,05/1,03 | **61,17%** |
| Perubahan tahun pertama | 61,17−60 | **+1,17 poin** |
| Rasio setelah 10 tahun, saldo primer 0 | 60×(1,05/1,03)¹⁰ | **72,72%** |
| Surplus primer penstabil | 60×(0,05−0,03)/1,03 | **1,17% PDB** |
| Bila r=2%, g=4%, tahun berikut | 60×1,02/1,04 | **58,85%** |
| Bila r=2%, g=4%, setelah 10 tahun | 60×(1,02/1,04)¹⁰ | **49,41%** |
| Defisit primer 3% selama 5 tahun, r=5%, g=3% | iterasi d(t+1)=d(t)×1,05/1,03−(−3) | **81,65%** |

Pada kasus r=5% dan g=3%, r lebih besar, sehingga rasio naik tanpa surplus primer. Saldo primer nol berarti pb=0. Surplus 1,17% menahan rasio pada 60% dalam kerangka ini. Bila r=2% dan g=4%, pertumbuhan penyebut lebih cepat dan rasio turun selama contoh sepuluh tahun.

Contoh Indonesia: pemerintah menyusun anggaran dan proyeksi penerimaan untuk menimbang belanja layanan, pembayaran bunga, dan pembiayaan. Contoh global: pemegang obligasi menilai rasio utang bersama struktur jatuh tempo serta mata uang utang. Data negara tertentu perlu diverifikasi sebelum membuat penilaian.

[[visual:eko-debt-dynamics]]

## Kesalahpahaman umum

1. Defisit adalah aliran tahunan, sedangkan utang adalah stok kewajiban.
2. Defisit primer tidak memasukkan bunga; saldo primer positif berarti surplus menurut konvensi materi.
3. Rasio utang yang turun karena g>r tidak menjamin pembiayaan selalu aman pada masa depan.

## Kaitan ke investasi dan Web3

Runway kas treasury protokol atau DAO dapat dibandingkan secara terbatas dengan perencanaan likuiditas: pengeluaran rutin perlu dibandingkan dengan sumber pemasukan dan risiko. Namun treasury protokol bukan negara, tidak memiliki kewenangan pajak yang sama, dan tidak menerbitkan kewajiban berdaulat. Bias terlalu optimistis terhadap pertumbuhan pendapatan token dapat membuat pengelola meremehkan kebutuhan kas; skenario konservatif membantu menguji rencana.

## Batas model

Persamaan menganggap r dan g konstan serta saldo primer dinyatakan konsisten terhadap PDB. Model tidak memasukkan penyesuaian stok-arus, perubahan kurs, aset pemerintah, kewajiban pensiun, atau respons pasar. Rasio sendiri tidak menentukan keberlanjutan tanpa konteks institusi dan kemampuan fiskal.
`,
    },
    {
      id: "eko2-b09-s5",
      title: "Stabilisasi fiskal dan batas kebijakan",
      minutes: 40,
      content: `## Tujuan belajar

Hitung kebutuhan stimulus fiskal untuk menutup kesenjangan keluaran dalam model pengganda, bandingkan belanja dengan pajak, dan jelaskan jeda kebijakan serta faktor yang membuat dampaknya kurang dari penuh.

> **Poin kunci**
> - Kebijakan stabilisasi mencoba mengurangi kesenjangan output, tetapi membutuhkan estimasi potensi yang tidak pasti.
> - Pengganda memberi perkiraan perubahan belanja atau pajak dalam model, bukan hasil yang dijamin.
> - Pengakuan, keputusan, pelaksanaan, dan dampak kebijakan memiliki jeda berbeda.
> - Efek mengeluarkan, ekspektasi, dan kondisi kapasitas membatasi efektivitas stimulus.

## Definisi dan intuisi

Stabilisasi fiskal adalah penggunaan pajak, belanja, atau transfer untuk mengurangi fluktuasi keluaran dan pekerjaan. Jika Y aktual berada di bawah Y potensial, stimulus dapat menaikkan permintaan melalui kenaikan G atau pemotongan pajak. Jika keluaran di atas potensi dan tekanan harga meningkat, pemerintah dapat menahan belanja atau menaikkan pajak. Keputusan bergantung pada sasaran, kondisi ekonomi, serta dampak distribusi dan anggaran. PDB potensial bukan angka yang terlihat langsung; lembaga mengestimasinya dari tren produktivitas, tenaga kerja, modal, dan kapasitas sehingga revisi dapat mengubah ukuran kesenjangan.

Kebutuhan stimulus sederhana menggunakan pengganda. Jika kesenjangan adalah Y*−Y, pengganda belanja kG=1/(1−MPC), dan pengganda pajak kT=−MPC/(1−MPC), maka perubahan belanja yang diperlukan adalah **ΔG=(Y*−Y)/kG**. Untuk menutup kesenjangan melalui pajak, tanda perlu dibaca dengan hati-hati: ketika Y di bawah potensi, pemotongan pajak berarti ΔT negatif dan ΔY=kT×ΔT positif. Besar pemotongan yang dibutuhkan adalah **|ΔT|=(Y*−Y)/|kT|**. Jika efektivitas hanya proporsi e dari dampak model, kebutuhan berubah menjadi ΔG=(Y*−Y)/(kG×e) dan |ΔT|=(Y*−Y)/(|kT|×e).

Kebijakan fiskal berbeda dari kebijakan moneter. Fiskal mengubah belanja, pajak, dan transfer; moneter memengaruhi suku bunga, kondisi kredit, dan likuiditas melalui bank sentral. Keduanya dapat saling melengkapi atau bertentangan. Fiskal memiliki jeda pengakuan ketika data menunjukkan masalah, jeda keputusan ketika otoritas merancang dan menyetujui kebijakan, jeda pelaksanaan saat proyek atau pembayaran dimulai, serta jeda dampak ketika belanja memengaruhi produksi dan pendapatan. Stimulus yang terlambat bisa tiba setelah kondisi berubah.

Aturan kebijakan menetapkan respons yang dapat diperkirakan, sedangkan diskresi memberi ruang menyesuaikan keadaan. Penstabil otomatis merespons tanpa proses kebijakan baru; program diskresioner dapat menargetkan kelompok atau proyek tertentu namun perlu waktu. Efektivitas dapat kurang dari penuh karena sebagian permintaan menjadi impor atau tabungan, suku bunga naik dan mengeluarkan investasi swasta, atau rumah tangga mengubah pengeluaran berdasarkan ekspektasi pajak masa depan. Saat ekonomi mendekati kapasitas, tambahan permintaan lebih banyak mendorong harga daripada keluaran.

## Rumus dan contoh hitungan lengkap

Misalkan Y aktual=960 dan Y*=1.000. Kesenjangan keluaran =1.000−960=**40**. Dengan MPC=0,8, pengganda belanja =5 dan besar pengganda pajak =4.

| Cara menutup kesenjangan | Efektivitas | Perhitungan | Kebutuhan |
|---|---:|---|---:|
| Belanja pemerintah | 100% | 40/5 | **ΔG=8** |
| Pemotongan pajak | 100% | 40/4 | **Pemotongan T=10** |
| Belanja pemerintah | 60% | 40/(5×0,6) | **ΔG=13,33** |
| Pemotongan pajak | 60% | 40/(4×0,6) | **Pemotongan T=16,67** |

Pada efektivitas 60%, hanya 0,6 dari dampak pengganda penuh tercapai. Karena itu stimulus nominal harus lebih besar untuk menutup kesenjangan yang sama. Jika Y aktual di atas potensi, kesenjangan Y*−Y negatif; rumus memberi pengetatan, bukan tambahan stimulus. Kebutuhan hitung tersebut tidak menyertakan biaya fiskal, jeda, atau ketidakpastian estimasi.

Contoh Indonesia: ketika keluaran melemah, belanja pemeliharaan infrastruktur dapat dilaksanakan lebih cepat daripada proyek besar yang membutuhkan pengadaan panjang. Contoh global: pemerintah dapat memadukan transfer sementara dengan perubahan suku bunga bank sentral, tetapi waktu dan respons tiap perekonomian berbeda. Angka aktual dan respons kebijakan memerlukan verifikasi.

[[visual:eko-stabilization-mix]]

## Kesalahpahaman umum

1. Kesenjangan output adalah estimasi selisih terhadap potensi, bukan angka yang diketahui tanpa ketidakpastian.
2. Pemotongan pajak positif bagi permintaan berarti perubahan pajak ΔT bernilai negatif.
3. Stimulus yang diperlukan menurut pengganda bukan jaminan besaran belanja yang harus disahkan.

## Kaitan ke investasi dan psikologi

Pembuat kebijakan dan investor dapat terkena bias kepercayaan diri berlebihan ketika menganggap estimasi potensi atau pengganda pasti tepat. Keputusan yang tampak presisi seperti ΔG tertentu tetap bergantung pada data yang direvisi, jeda, dan respons rumah tangga. Menguji rentang skenario lebih sehat daripada menganggap satu ramalan sebagai kepastian.

## Batas model

Perhitungan menganggap pengganda dan efektivitas dapat diringkas dalam satu angka. Model tidak menilai mutu belanja, distribusi, inflasi, kapasitas implementasi, atau respons moneter. PDB potensial dan efektivitas 60% adalah parameter ilustratif, bukan pengukuran resmi.
`,
    },
  ],
  chapterResources: {
    summary: [
      "AD merangkum pengeluaran agregat dan miring turun melalui beberapa saluran.",
      "SRAS dapat miring naik dalam jangka pendek; LRAS menunjukkan kapasitas potensial.",
      "Guncangan permintaan dan penawaran mengubah harga serta keluaran dengan cara berbeda.",
      "Pengganda fiskal bergantung pada MPC dan kebocoran pengeluaran.",
      "Penstabil otomatis bekerja tanpa keputusan baru.",
      "Rasio utang dipengaruhi pertumbuhan, bunga, dan saldo primer.",
      "Kebijakan stabilisasi menghadapi jeda dan ketidakpastian estimasi output potensial.",
    ],
    glossary: [
      { term: "Permintaan agregat", english: "Aggregate demand", definition: "Jumlah keluaran riil yang ingin dibeli pada berbagai tingkat harga." },
      { term: "Penawaran agregat", english: "Aggregate supply", definition: "Keluaran yang bersedia diproduksi perusahaan pada berbagai tingkat harga." },
      { term: "Penawaran agregat jangka pendek", english: "Short-run aggregate supply (SRAS)", definition: "Hubungan jangka pendek antara tingkat harga dan keluaran saat sebagian biaya kaku." },
      { term: "Penawaran agregat jangka panjang", english: "Long-run aggregate supply (LRAS)", definition: "Kapasitas keluaran potensial dalam jangka panjang." },
      { term: "Efek kekayaan", english: "Wealth effect", definition: "Dampak perubahan tingkat harga terhadap daya beli saldo dan konsumsi." },
      { term: "Efek suku bunga", english: "Interest-rate effect", definition: "Saluran perubahan tingkat harga menuju suku bunga dan pengeluaran." },
      { term: "Efek nilai tukar", english: "Exchange-rate effect", definition: "Saluran perubahan suku bunga relatif dan mata uang menuju ekspor neto." },
      { term: "Guncangan permintaan", english: "Demand shock", definition: "Perubahan faktor yang menggeser permintaan agregat." },
      { term: "Guncangan penawaran", english: "Supply shock", definition: "Perubahan biaya atau kapasitas yang menggeser penawaran agregat." },
      { term: "Stagflasi", english: "Stagflation", definition: "Keadaan harga meningkat sementara keluaran melemah." },
      { term: "Kesenjangan resesi", english: "Recessionary gap", definition: "Keluaran aktual berada di bawah keluaran potensial." },
      { term: "Kesenjangan inflasi", english: "Inflationary gap", definition: "Keluaran aktual berada di atas keluaran potensial dalam model." },
      { term: "Kebijakan fiskal", english: "Fiscal policy", definition: "Penggunaan belanja, pajak, dan transfer oleh pemerintah." },
      { term: "Pengganda", english: "Multiplier", definition: "Rasio perubahan keluaran terhadap perubahan awal pengeluaran otonom." },
      { term: "Kecenderungan konsumsi marjinal", english: "Marginal propensity to consume (MPC)", definition: "Bagian tambahan pendapatan disposabel yang dibelanjakan untuk konsumsi." },
      { term: "Penstabil otomatis", english: "Automatic stabilizer", definition: "Pajak atau transfer yang meredam siklus tanpa keputusan baru." },
      { term: "Efek mengeluarkan", english: "Crowding out", definition: "Berkurangnya pengeluaran swasta akibat perubahan biaya dana atau sumber daya." },
      { term: "Defisit anggaran", english: "Budget deficit", definition: "Pengeluaran pemerintah melebihi penerimaan selama suatu periode." },
      { term: "Saldo primer", english: "Primary balance", definition: "Penerimaan dikurangi pengeluaran selain bunga; surplus bernilai positif." },
      { term: "Utang pemerintah", english: "Government debt", definition: "Stok kewajiban pemerintah pada suatu waktu." },
      { term: "Rasio utang terhadap PDB", english: "Debt-to-GDP ratio", definition: "Stok utang dibandingkan keluaran domestik bruto." },
      { term: "Keberlanjutan utang", english: "Debt sustainability", definition: "Kemampuan memenuhi kewajiban tanpa penyesuaian yang tidak realistis atau gangguan berat." },
      { term: "Jeda kebijakan", english: "Policy lag", definition: "Waktu antara munculnya masalah, keputusan, pelaksanaan, dan dampak kebijakan." },
      { term: "Aturan dan diskresi", english: "Rules and discretion", definition: "Perbedaan kebijakan berbasis pedoman tetap dan keputusan yang disesuaikan kasus." },
      { term: "Roh hewani", english: "Animal spirits", definition: "Perubahan keyakinan dan suasana hati yang memengaruhi keputusan ekonomi." },
    ],
    exercises: [
      {
        prompt: "Hitung keseimbangan AD-AS dasar dan setelah AD naik 100, lalu jelaskan penyesuaian jangka panjang.",
        solution: "1. Dasar a=s=0: P=(600+0−0)/300=2; Y=800+100×2=1.000. 2. AD naik a=100: P=(600+100)/300=2,333; Y=800+100×2,333=1.033,3. 3. Jangka panjang Y kembali ke 1.000; dengan AD baru Y=1.500−200P, P=(1.500−1.000)/200=2,5.",
      },
      {
        prompt: "Dengan MPC=0,8, hitung pengganda belanja, pajak, dan anggaran berimbang serta perubahan keluaran untuk perubahan fiskal pada S3.",
        solution: "1. Pengganda G=1/(1−0,8)=5. 2. Pengganda T=−0,8/(1−0,8)=−4. 3. Pengganda anggaran berimbang=5−4=1. 4. G naik 20 memberi ΔY=+100. 5. T naik 20 memberi ΔY=−80. 6. G dan T naik sama-sama 20 memberi ΔY=+20.",
      },
      {
        prompt: "Dengan d=60%, r=5%, g=3%, dan saldo primer nol, hitung rasio utang tahun depan, setelah 10 tahun, serta surplus primer penstabil.",
        solution: "1. d(1)=60×1,05/1,03=61,17%, naik 1,17 poin. 2. Setelah 10 tahun tanpa saldo primer=60×(1,05/1,03)^10=72,72%. 3. Surplus primer penstabil=60×(0,05−0,03)/(1+0,03)=1,17% PDB.",
      },
      {
        prompt: "Jika Y=960 dan potensi=1.000, hitung kebutuhan belanja dan pemotongan pajak pada MPC=0,8, lalu hitung ulang bila efektivitas 60%.",
        solution: "1. Kesenjangan=1.000−960=40. 2. Pengganda belanja=5, jadi ΔG penuh=40/5=8. 3. Besar pengganda pajak=4, jadi pemotongan pajak=40/4=10. 4. Pada efektivitas 60%, ΔG=40/(5×0,6)=13,33 dan pemotongan pajak=40/(4×0,6)=16,67.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Macroeconomics", authors: "Olivier Blanchard" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
