import type { CurriculumModule } from "@/lib/types";

export const BAB_07: CurriculumModule = {
  id: "eko2-b07",
  title: "Bab 7 — Pertumbuhan Ekonomi dan Produktivitas",
  summary: "Pertumbuhan majemuk memperbesar keluaran per kapita; fungsi produksi, akumulasi modal, produktivitas, institusi, dan kebijakan menjelaskan sumber serta batas pertumbuhan jangka panjang.",
  lessons: [
    {
      id: "eko2-b07-s1",
      title: "Pertumbuhan ekonomi dan efek majemuk",
      minutes: 40,
      content: `## Tujuan belajar

Hitung laju pertumbuhan keluaran riil dan keluaran riil per kapita, bedakan pertumbuhan majemuk dari penjumlahan linear, gunakan aturan 70, dan jelaskan mengapa selisih kecil laju pertumbuhan mengubah tingkat pendapatan dalam jangka panjang.

> **Poin kunci**
> - Pertumbuhan ekonomi mengukur perubahan keluaran riil, sedangkan pertumbuhan per kapita membagi keluaran riil dengan jumlah penduduk.
> - Pertumbuhan majemuk menerapkan laju pertumbuhan pada tingkat keluaran yang telah meningkat.
> - Selisih kecil laju tahunan menjadi besar setelah berulang banyak tahun.
> - Aturan 70 memperkirakan waktu pelipatan dua, bukan memberikan ramalan yang tepat.

## Definisi dan intuisi

Pertumbuhan ekonomi adalah peningkatan produksi barang dan jasa riil dari waktu ke waktu. Untuk membandingkan kapasitas rata-rata masyarakat, ekonom juga mengamati produk domestik bruto riil per kapita, yaitu PDB riil dibagi jumlah penduduk. Ukuran total dapat meningkat hanya karena penduduk bertambah; keluaran per kapita membantu memisahkan perubahan skala penduduk dari perubahan rata-rata produksi per orang. Rata-rata tersebut tidak mengungkap distribusi hasil, mutu hidup, atau siapa yang memperoleh tambahan pendapatan.

Laju pertumbuhan menyatakan perubahan relatif terhadap nilai awal. **g = (Y_t/Y_(t−1) − 1)×100%**, dengan Y sebagai keluaran riil atau keluaran riil per kapita dan t sebagai periode baru. Bila g tetap setiap periode, nilai masa depan mengikuti **Y_n = Y_0(1+g)^n**. Y_0 adalah nilai awal, g laju pertumbuhan per periode dalam bentuk desimal, dan n jumlah periode. Pangkat muncul karena hasil setiap periode menjadi dasar pertumbuhan periode berikutnya.

Pertumbuhan linear menambahkan jumlah tetap pada setiap periode; pertumbuhan majemuk memperbesar basis yang terus berubah. Pada awalnya selisih mungkin tampak kecil, tetapi tambahan keluaran juga ikut tumbuh pada periode berikut. Karena itu menggandakan g tidak sekadar menggandakan hasil setelah puluhan tahun. Perbandingan harus menjaga satuan, harga konstan, dan rentang waktu yang sama. Pertumbuhan tahunan juga dapat berfluktuasi; memakai satu laju tetap adalah cara memahami mekanisme, bukan klaim bahwa ekonomi tumbuh mulus.

Aturan 70 memperkirakan jumlah tahun agar keluaran berlipat dua: **n ≈ 70/g**, dengan g ditulis sebagai angka persen per tahun. Untuk laju kecil dan tetap, pendekatan ini mudah dihitung. Waktu eksak dari pertumbuhan majemuk adalah **n = ln(2)/ln(1+g)**, dengan g dalam desimal. Perbedaan aturan sederhana dan rumus eksak kecil pada contoh, tetapi meningkat jika laju besar atau asumsi berubah.

## Rumus dan contoh hitungan lengkap

| Skenario | Perhitungan | Hasil |
|---|---|---:|
| Nilai awal PDB riil per kapita | Y₀ | 1.000 |
| Pertumbuhan 2% selama 30 tahun | 1.000×1,02³⁰ | 1.811,36 |
| Pertumbuhan 4% selama 30 tahun | 1.000×1,04³⁰ | 3.243,40 |
| Perbandingan hasil | 3.243,40÷1.811,36 | 1,79 kali |
| Pelipatan pada 2%, aturan 70 | 70÷2 | 35 tahun |
| Pelipatan pada 2%, eksak | ln(2)÷ln(1,02) | 35,00 tahun |
| Pelipatan pada 4%, aturan 70 | 70÷4 | 17,5 tahun |
| Pelipatan pada 4%, eksak | ln(2)÷ln(1,04) | 17,67 tahun |

Pendapatan awal yang sama menghasilkan keluaran per kapita 1.811,36 pada laju 2%, tetapi 3.243,40 pada laju 4% setelah 30 tahun. Hasil kedua sekitar 1,79 kali hasil pertama. Perhitungan tidak menyatakan masyarakat tertentu akan mencapai laju tersebut; angka memperlihatkan akumulasi matematis.

Contoh Indonesia: rumah tangga membandingkan kenaikan pendapatan riil beberapa tahun, bukan hanya pertambahan nominal satu tahun, ketika menilai kemampuan membeli. Contoh global: dua perekonomian dengan tingkat awal serupa dapat memiliki tingkat keluaran per kapita berbeda setelah beberapa dasawarsa jika produktivitas tumbuh pada laju berbeda. Perbandingan historis khusus memerlukan data terverifikasi.

[[visual:eko-compound-growth]]

## Kesalahpahaman umum

1. Pertumbuhan PDB total tidak sama dengan pertumbuhan PDB riil per kapita.
2. Laju 4% selama 30 tahun tidak sama dengan menambah 4% dari nilai awal setiap tahun; basisnya terus berubah.
3. Aturan 70 mengandaikan laju yang tetap dan hanya memberi pendekatan.

## Kaitan ke investasi dan psikologi

Bunga majemuk pada investasi jangka panjang mengikuti mekanisme yang sama: hasil yang tetap diinvestasikan ikut memperoleh hasil berikutnya. Biaya, pajak, risiko, dan perubahan imbal hasil membuat jalur nyata berbeda dari contoh pertumbuhan konstan. Bias linear membuat orang cenderung memproyeksikan tambahan tahunan yang sama dan meremehkan efek eksponensial; menuliskan rumus tahun demi tahun membantu mengoreksi intuisi tersebut.

## Batas model

Perhitungan menganggap laju konstan, mutu keluaran terukur konsisten, dan tidak ada perubahan komposisi penduduk. Pertumbuhan rata-rata tidak menjamin semua kelompok menikmati manfaat. Pertumbuhan majemuk menggambarkan aritmetika, bukan kepastian bahwa laju historis akan berlanjut.
`,
    },
    {
      id: "eko2-b07-s2",
      title: "Fungsi produksi, modal, tenaga kerja, dan teknologi",
      minutes: 40,
      content: `## Tujuan belajar

Gunakan fungsi produksi agregat untuk menghitung keluaran, keluaran per pekerja, dan produk marjinal modal; jelaskan hasil menurun terhadap satu faktor serta skala konstan ketika semua faktor meningkat bersama.

> **Poin kunci**
> - Fungsi produksi menghubungkan modal fisik, tenaga kerja, dan produktivitas dengan keluaran.
> - Modal tambahan menaikkan produksi, tetapi produk marjinalnya menurun bila faktor lain tetap dalam fungsi Cobb-Douglas.
> - Menggandakan modal dan tenaga kerja bersama menghasilkan skala keluaran dua kali pada bentuk fungsi ini.
> - Teknologi atau produktivitas mengalikan keluaran untuk jumlah faktor produksi yang sama.

## Definisi dan intuisi

Fungsi produksi agregat merangkum cara perekonomian menggabungkan faktor produksi untuk menghasilkan barang dan jasa. Bentuk sederhana **Y = A×K^0,5×L^0,5** memakai Y sebagai keluaran riil, K sebagai modal fisik seperti mesin dan bangunan, L sebagai tenaga kerja, dan A sebagai teknologi atau produktivitas yang membuat faktor lebih efektif. Pangkat 0,5 menyatakan elastisitas keluaran terhadap masing-masing faktor pada model ini. A bukan sekadar perangkat digital; ia juga mencakup pengetahuan, organisasi, proses, dan mutu yang meningkatkan hasil dari input.

Produk per pekerja diperoleh dengan membagi Y dengan L. Secara aljabar, **Y/L = A×(K/L)^0,5**. K/L adalah modal per pekerja. Kenaikan modal per pekerja meningkatkan keluaran per pekerja, tetapi tambahan mesin berikutnya memberi kenaikan yang makin kecil jika jumlah pekerja dan produktivitas tidak berubah. Inilah hasil menurun terhadap satu faktor: produk marjinal faktor menurun saat faktor itu ditambah sementara faktor lain tetap. Hasil menurun bukan berarti total keluaran turun.

Produk marjinal modal adalah tambahan keluaran ketika K bertambah satu unit dengan A dan L tetap: **MPK = Y(K+1,L,A)−Y(K,L,A)**. Untuk fungsi halus, turunan setaranya adalah 0,5×A×(L/K)^0,5. Ketika K makin besar, produk marjinal modal turun. Namun bila A meningkat, mesin yang sama dapat diatur lebih baik dan menghasilkan lebih banyak keluaran.

Skala konstan muncul karena pangkat modal dan tenaga kerja berjumlah satu. Jika K dan L sama-sama dikalikan λ, maka Y baru = A×(λK)^0,5×(λL)^0,5 = λY. Menggandakan kedua faktor menggandakan keluaran; menggandakan satu faktor saja tidak. Sifat skala ini berbeda dari hasil menurun terhadap satu faktor, karena yang pertama mengubah semua input bersama dan yang kedua hanya satu input.

## Rumus dan contoh hitungan

| Kondisi | Perhitungan | Keluaran |
|---|---|---:|
| Dasar A=1, K=100, L=100 | 1×√100×√100 | Y=100; Y/L=1,00 |
| Modal K=200, L=100 | √(200×100)=√20.000 | Y=141,42 |
| Pertumbuhan dari dasar ke K=200 | (141,42/100−1)×100% | 41,42% |
| Modal K=150, L=100 | √(150×100)=√15.000 | Y=122,47 |
| Modal dan tenaga kerja jadi 200 | √(200×200) | Y=200 |
| Produktivitas A=1,1; K=L=100 | 1,1×√100×√100 | Y=110 |
| Produk marjinal modal K=100→101 | √(101×100)−100 | 0,499 |
| Produk marjinal modal K=200→201 | √(201×100)−√20.000 | 0,353 |

Ketika modal naik dari 100 menjadi 200 sementara L=100, keluaran naik 41,42%, bukan 100%. Modal tambahan tetap meningkatkan produksi, tetapi hasil marjinal lebih rendah karena pekerja dan teknologi yang sama harus dipadankan dengan modal yang bertambah. Jika K dan L keduanya dua kali lipat, keluaran tepat dua kali lipat menurut sifat skala konstan. Kenaikan A sebesar 10% juga menaikkan Y 10% dengan faktor lain tetap.

Contoh Indonesia: sebuah usaha menambah mesin pengemasan; mesin tambahan meningkatkan kapasitas, tetapi tanpa pekerja terampil, bahan, dan tata letak yang sesuai hasilnya terbatas. Contoh global: pusat komputasi dapat menambah perangkat, tetapi daya, pendinginan, jaringan, dan tenaga operator ikut menentukan keluaran layanan. Tidak ada angka produktivitas nyata yang diasumsikan.

[[visual:eko-production-function]]

## Kesalahpahaman umum

1. Hasil menurun berarti tambahan keluaran makin kecil, bukan bahwa total keluaran langsung berkurang.
2. Skala konstan mengharuskan semua faktor dalam fungsi meningkat dengan proporsi sama.
3. Teknologi A bukan hanya perangkat keras; praktik organisasi dan pengetahuan juga memengaruhi produktivitas.

## Kaitan ke investasi dan Web3

Penambahan kapasitas komputasi atau validator dapat meningkatkan kemampuan jaringan, tetapi hasil tambahan per unit modal dapat menurun ketika tenaga, energi, konektivitas, koordinasi, atau permintaan menjadi kendala. Investor perlu melihat produktivitas seluruh sistem, bukan menghitung perangkat atau validator semata. Analogi fungsi produksi membantu mengajukan pertanyaan tanpa mengklaim angka keluaran protokol tertentu.

## Batas model

Fungsi Cobb-Douglas menyederhanakan faktor produksi menjadi tiga ukuran agregat dan menganggap pangkat serta teknologi tertentu. Kualitas tenaga kerja, modal manusia, kapasitas yang menganggur, lingkungan, dan struktur pasar tidak ditampilkan terpisah. Hasil hitungan berlaku pada bentuk fungsi ilustratif, bukan pengukuran universal.
`,
    },
    {
      id: "eko2-b07-s3",
      title: "Akumulasi modal dan model Solow sederhana",
      minutes: 40,
      content: `## Tujuan belajar

Gunakan persamaan akumulasi modal per pekerja untuk menghitung lintasan dan keadaan mapan, bandingkan konsumsi mapan pada tingkat tabungan berbeda, dan jelaskan kaidah emas serta pertukaran antara konsumsi sekarang dan mendatang.

> **Poin kunci**
> - Tabungan membiayai investasi yang menambah modal per pekerja; penyusutan mengurangi stok modal.
> - Keadaan mapan terjadi ketika investasi baru menutup penyusutan.
> - Tabungan lebih tinggi dapat menaikkan keluaran mapan, tetapi konsumsi mapan akhirnya turun jika tabungan melampaui kaidah emas.
> - Kaidah emas memilih stok modal yang memaksimalkan konsumsi mapan, bukan stok modal terbesar.

## Definisi dan intuisi

Model Solow sederhana menelaah bagaimana tabungan dan penyusutan memengaruhi modal serta keluaran per pekerja. Misalkan **y=√k**, dengan k modal per pekerja dan y keluaran per pekerja. Tabungan s adalah bagian keluaran yang dialokasikan untuk investasi; penyusutan δ adalah bagian modal yang aus atau usang dalam satu periode. Persamaan diskret yang digunakan di sini ialah **k(t+1)=k(t)+s×√k(t)−δ×k(t)**. Modal berikutnya sama dengan modal saat ini ditambah investasi per pekerja dan dikurangi penyusutan.

Pada k rendah, investasi s√k dapat melebihi penyusutan δk sehingga modal tumbuh. Saat k meningkat, keluaran dan tabungan bertambah, tetapi kebutuhan mengganti modal yang aus juga membesar. Keadaan mapan (steady state) memenuhi investasi sama dengan penyusutan: s√k*=δk*. Untuk k*>0, bagi kedua sisi dengan √k* sehingga **k*=(s/δ)^2**. Keluaran mapan y*=√k*=s/δ; konsumsi mapan **c*=(1−s)y*** karena bagian 1−s dari keluaran dipakai untuk konsumsi.

Tabungan yang lebih besar mendorong stok modal dan keluaran mapan lebih tinggi. Namun masyarakat mengonsumsi lebih sedikit saat menabung lebih banyak, dan pembangunan modal memerlukan waktu. Kaidah emas (golden rule) memilih s atau k yang memaksimalkan konsumsi mapan. Dalam model ini **k_emas=(1/(2δ))^2** karena produk marjinal modal pada y=√k sama dengan 1/(2√k) dan konsumsi maksimum tercapai ketika produk marjinal bersih penyusutan seimbang dengan biaya peluang konsumsi.

Untuk δ=0,1, k_emas=25 dan s emas=0,5. Tabungan s=0,7 menghasilkan modal lebih tinggi daripada s=0,5, tetapi konsumsi mapan lebih rendah. Ini menunjukkan bahwa investasi bukan tujuan akhir: modal produktif bermanfaat melalui keluaran dan konsumsi yang didukungnya.

## Rumus dan contoh hitungan

| Tabungan s | k*=(s/0,1)² | y*=√k* | c*=(1−s)y* |
|---:|---:|---:|---:|
| 0,2 | 4 | 2 | 1,6 |
| 0,3 | 9 | 3 | 2,1 |
| 0,5 | 25 | 5 | 2,5 |
| 0,7 | 49 | 7 | 2,1 |

Pada lintasan s=0,2, δ=0,1, dan k(0)=1, investasi pada periode pertama adalah 0,2√1=0,2 dan penyusutan 0,1×1=0,1; maka k(1)=1+0,2−0,1=1,1. Iterasi memberi lintasan berikut:

| Periode | Modal per pekerja k | Perubahan keluaran y pada lima periode pertama |
|---|---:|---:|
| 0 | 1,000 | — |
| 1 | 1,100 | 4,88% |
| 2 | 1,200 | 4,44% |
| 3 | 1,299 | 4,05% |
| 4 | 1,397 | 3,71% |
| 5 | 1,494 | 3,40% |
| 10 | 1,949 | — |
| 20 | 2,679 | — |
| 40 | 3,494 | — |

Modal mendekati keadaan mapan k*=4, sementara laju pertumbuhan keluaran melambat karena tambahan investasi bersih makin kecil. Pada s=0,3, k*=9, y*=3, dan c*=2,1; kenaikan tabungan dari 0,2 menaikkan konsumsi mapan, walau selama transisi porsi keluaran yang dikonsumsi lebih kecil. Perbandingan lintasan memisahkan biaya jangka pendek dari manfaat keadaan mapan.

Contoh Indonesia: keluarga yang menyisihkan sebagian pendapatan untuk pelatihan atau alat usaha menunda konsumsi saat ini demi kapasitas produktif masa depan; hasilnya bergantung pada mutu investasi dan kesempatan kerja. Contoh global: perekonomian yang membangun infrastruktur dan mesin menukar sumber daya sekarang dengan kapasitas produksi mendatang. Tidak ada tingkat tabungan aktual negara yang diasumsikan.

[[visual:eko-solow]]

## Kesalahpahaman umum

1. Keadaan mapan bukan berarti tidak ada investasi; investasi bruto mengganti penyusutan.
2. Tabungan lebih tinggi meningkatkan modal mapan, tetapi tidak selalu memaksimalkan konsumsi mapan.
3. Kaidah emas adalah pilihan konsumsi jangka panjang, bukan aturan bahwa semua orang harus menabung pada satu tingkat yang sama.

## Kaitan ke investasi dan psikologi

Akumulasi modal menunjukkan pertukaran antara konsumsi sekarang dan kapasitas mendatang. Kesabaran dan penundaan kepuasan (delayed gratification) secara umum dapat membantu seseorang mempertahankan rencana menabung, tetapi pilihan tetap perlu menimbang kebutuhan, risiko, dan akses pada manfaat masa depan. Dalam investasi, menahan laba untuk membangun kapasitas hanya masuk akal bila penggunaan modal menambah keluaran atau manfaat yang bernilai.

## Batas model

Model menganggap penduduk dan teknologi tetap, tabungan sebagai bagian tetap dari keluaran, serta satu jenis modal homogen. Persamaan waktu diskret adalah ilustrasi; transisi nyata dipengaruhi demografi, modal manusia, risiko, kebijakan, dan perubahan teknologi. Keadaan mapan tidak menjamin distribusi atau konsumsi aktual sama bagi semua rumah tangga.
`,
    },
    {
      id: "eko2-b07-s4",
      title: "Akuntansi pertumbuhan, modal manusia, dan teknologi",
      minutes: 40,
      content: `## Tujuan belajar

Hitung kontribusi pertumbuhan modal, tenaga kerja, dan produktivitas dalam akuntansi pertumbuhan; tafsirkan residu Solow; serta jelaskan peran modal manusia, inovasi, dan gagasan tidak rival secara kualitatif.

> **Poin kunci**
> - Akuntansi pertumbuhan memecah pertumbuhan keluaran menjadi kontribusi faktor dan produktivitas.
> - Residu Solow adalah bagian pertumbuhan yang tidak dijelaskan oleh pertumbuhan modal dan tenaga kerja dalam model.
> - Modal manusia mencakup kemampuan dan kesehatan yang meningkatkan produktivitas tenaga kerja.
> - Gagasan dan perangkat lunak tidak rival; pemakaian oleh satu pihak tidak selalu menghalangi pemakaian pihak lain.

## Definisi dan intuisi

Akuntansi pertumbuhan (growth accounting) menguraikan sumber pertumbuhan agregat menggunakan fungsi produksi dan data faktor. Dengan pangsa modal α, perubahan keluaran diperkirakan **g_Y = g_A + α×g_K + (1−α)×g_L**. g_Y adalah laju pertumbuhan keluaran, g_A pertumbuhan produktivitas total, g_K pertumbuhan modal, dan g_L pertumbuhan tenaga kerja. α merupakan bobot kontribusi modal; 1−α menjadi bobot tenaga kerja. Laju dalam rumus ditulis dalam persen, sehingga hasil juga dalam persen. Rumus ini adalah pendekatan ketika perubahan kecil dan pangsa relatif stabil.

Residu Solow (Solow residual) adalah bagian pertumbuhan keluaran yang tersisa setelah kontribusi faktor dihitung: **g_A = g_Y−αg_K−(1−α)g_L**. Ia sering ditafsirkan sebagai produktivitas faktor total (total factor productivity/TFP), tetapi bukan pengukuran teknologi murni. Kesalahan pengukuran, mutu modal dan tenaga kerja, pemanfaatan kapasitas, perubahan harga, dan faktor yang tidak dicatat ikut masuk ke residu.

Modal manusia (human capital) adalah keterampilan, pengetahuan, pengalaman, dan kesehatan yang melekat pada pekerja. Pendidikan, pelatihan, kesehatan, dan pembelajaran saat bekerja dapat menaikkan keluaran per pekerja. Pengaruhnya membutuhkan waktu dan mutu; lama sekolah saja tidak memastikan kemampuan yang relevan. Modal manusia juga dapat meningkatkan kemampuan menyerap teknologi baru, sehingga investasi pada orang dan perangkat saling melengkapi.

Inovasi mengubah cara produksi, produk, dan organisasi. Gagasan sering tidak rival (nonrival): seseorang dapat menggunakan rumus atau perangkat lunak tanpa menghabiskan gagasan bagi pengguna lain. Hak kekayaan intelektual dan mekanisme pendanaan memberi insentif penciptaan, sementara penyebaran pengetahuan memberi manfaat luas. Dalam teori pertumbuhan endogen, keputusan riset, pembelajaran, dan insentif dapat memengaruhi pertumbuhan produktivitas dari dalam perekonomian, bukan hanya diterima sebagai faktor luar. Efek jaringan membuat suatu gagasan lebih berguna ketika lebih banyak pihak mengadopsinya.

## Rumus dan contoh hitungan

Gunakan α=0,4, pertumbuhan modal 5%, tenaga kerja 1%, dan produktivitas 1%.

| Komponen | Perhitungan | Kontribusi |
|---|---:|---:|
| Modal | 0,4×5% | 2,0 poin persentase |
| Tenaga kerja | (1−0,4)×1% = 0,6×1% | 0,6 poin persentase |
| Produktivitas | g_A | 1,0 poin persentase |
| Pertumbuhan keluaran | 2,0+0,6+1,0 | **3,6%** |
| Pertumbuhan per pekerja | g_Y−g_L=3,6−1 | **2,6%** |
| Residu bila g_Y=3,6% | 3,6−2,0−0,6 | **1,0%** |

Pemeriksaan menunjukkan pertumbuhan keluaran 3,6% terdiri dari 2,0 poin kontribusi modal, 0,6 poin tenaga kerja, dan 1,0 poin produktivitas. Pertumbuhan per pekerja dikurangi pertumbuhan pekerja karena keluaran total juga bertambah dengan jumlah tenaga kerja. Residu 1,0% konsisten dengan g_A yang diberikan; bila produktivitas tidak diketahui, residu dihitung dari tiga data lainnya.

Contoh Indonesia: perangkat lunak pencatatan produksi yang dapat dipakai ulang membantu beberapa usaha mengurangi pekerjaan berulang; manfaat bergantung pada keterampilan pekerja dan proses organisasi. Contoh global: proyek sumber terbuka memungkinkan kode yang sama digunakan lintas tim, dan efek jaringan dapat membuat alat lebih bernilai saat lebih banyak pengembang saling melengkapi. Tidak diasumsikan angka dampak.

[[visual:eko-growth-accounting]]

## Kesalahpahaman umum

1. Residu Solow tidak membuktikan teknologi saja tumbuh sebesar residu; ia juga memuat galat dan faktor yang tidak terukur.
2. Pertumbuhan modal menambah keluaran, tetapi bobot α mengatur kontribusinya dalam pendekatan.
3. Modal manusia bukan hanya lama pendidikan; mutu keterampilan dan kesehatan turut menentukan produktivitas.

## Kaitan ke investasi dan Web3

Perangkat lunak sumber terbuka dapat memberi produktivitas kepada banyak pengguna sekaligus karena salinan kode tidak menghabiskan gagasan. Efek jaringan pada pustaka, standar, atau alat pengembangan dapat memperkuat manfaat ketika proyek lain membangun di atasnya. Namun pemeliharaan, keamanan, komputasi, dan tenaga kerja tetap langka; sifat gagasan yang tidak rival tidak membuat seluruh layanan tanpa biaya.

## Batas model

Persamaan menganggap kontribusi faktor dapat diwakili bobot yang stabil dan data pertumbuhan dapat dibandingkan. Residu menggabungkan teknologi dengan kesalahan serta perubahan kualitas. Fungsi produksi agregat tidak menunjukkan siapa yang menangkap manfaat inovasi atau biaya sosial yang timbul.
`,
    },
    {
      id: "eko2-b07-s5",
      title: "Konvergensi, institusi, dan kebijakan pertumbuhan",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan konvergensi bersyarat menggunakan model Solow, bandingkan hasil negara dengan tingkat tabungan berbeda, dan uraikan bagaimana institusi, hak milik, perdagangan, stabilitas makro, serta tata kelola memengaruhi insentif pertumbuhan.

> **Poin kunci**
> - Negara berpendapatan rendah dapat tumbuh lebih cepat menuju keadaan mapan yang sama, tetapi hanya jika faktor dasarnya sebanding.
> - Perbedaan tabungan dan penyusutan mengubah keadaan mapan sehingga negara miskin tidak otomatis menyusul negara kaya.
> - Institusi yang menegakkan aturan dan hak milik membentuk insentif investasi, inovasi, dan pertukaran.
> - Kebijakan pertumbuhan menghadapi pertukaran konsumsi sekarang dengan investasi untuk masa depan.

## Definisi dan intuisi

Konvergensi berarti negara atau wilayah berpendapatan rendah tumbuh lebih cepat sehingga jarak keluaran per kapita terhadap kelompok berpendapatan tinggi mengecil. Model Solow memprediksi konvergensi bersyarat, bukan otomatis. Perekonomian menyusul keadaan mapan yang sama jika tingkat tabungan, penyusutan, pertumbuhan penduduk, teknologi, dan kondisi institusional cukup mirip. Negara dengan tabungan atau produktivitas berbeda dapat menuju tingkat mapan berbeda, sehingga pertumbuhan awal cepat tidak menjamin kesenjangan menghilang.

Dalam model y=√k dan penyusutan δ=0,1, keadaan mapan adalah k*=(s/δ)^2. Negara miskin yang memulai dengan modal per pekerja rendah dapat tumbuh cepat ketika tabungannya sama dengan negara kaya, sebab produk marjinal modalnya lebih tinggi pada awal lintasan. Namun bila tabungan negara miskin lebih rendah, keadaan mapannya pun lebih rendah. Contoh ini memperlihatkan mengapa tingkat pendapatan awal saja tidak cukup untuk meramalkan arah kesenjangan.

Institusi adalah aturan formal dan kebiasaan yang menentukan bagaimana hak, kontrak, dan kewenangan dilaksanakan. Hak milik yang jelas, peradilan dan aturan yang dapat ditegakkan, tata kelola yang dapat dipertanggungjawabkan, akses perdagangan, stabilitas makroekonomi, serta layanan publik membentuk insentif. Ketidakpastian hak atau kontrak dapat membuat rumah tangga dan perusahaan menunda investasi produktif. Perdagangan memberi akses pada pasar dan pengetahuan, tetapi manfaatnya bergantung pada kemampuan beradaptasi dan pembagian hasil.

Kebijakan pertumbuhan mengatur pertukaran antara konsumsi hari ini dan pembentukan modal untuk masa depan. Pajak, pendidikan, infrastruktur, penelitian, stabilitas harga, dan perlindungan hak dapat memengaruhi keputusan, tetapi tiap intervensi memiliki biaya, efek samping, dan kelompok terdampak. Tidak ada satu resep yang cocok untuk semua tempat. Pemeriksaan kebijakan perlu mempertimbangkan apakah aturan konsisten, dapat ditegakkan, dan mendukung kesempatan produktif tanpa mengabaikan distribusi maupun dampak lingkungan.

## Rumus dan contoh hitungan lengkap

| Perekonomian | Tabungan s | Keadaan mapan k*=(s/δ)² | y*=√k* |
|---|---:|---:|---:|
| Negara kaya | 0,2 | (0,2/0,1)²=4 | 2 |
| Negara miskin, tabungan sama | 0,2 | (0,2/0,1)²=4 | 2 |
| Negara miskin awal, tabungan sama | 0,2; k(0)=1 | k bergerak menuju 4 | y dari 1 menuju 2 |
| Negara miskin, tabungan lebih rendah | 0,1 | (0,1/0,1)²=1 | 1 |

Saat negara miskin dan kaya sama-sama memiliki s=0,2 serta δ=0,1, keduanya menuju k*=4. Negara miskin mulai pada k=1, jadi keluaran per pekerjanya y=1 dan pertumbuhannya lebih cepat pada awal lintasan menuju y=2. Bila tabungannya hanya 0,1, keadaan mapannya k*=1 dan y*=1; ia tidak menyusul negara kaya yang y*=2. Ini adalah konvergensi bersyarat: parameter yang menentukan tujuan jangka panjang ikut menentukan apakah kesenjangan menutup.

Contoh Indonesia: kepastian aturan lahan, kontrak, dan izin usaha dapat memengaruhi keputusan pelaku untuk membangun kapasitas jangka panjang; evaluasi memerlukan konteks hukum dan data setempat. Contoh global: perdagangan dan penegakan kontrak lintas batas membantu perusahaan merencanakan rantai pasok, tetapi manfaatnya berbeda menurut institusi dan kemampuan pekerja. Tidak ada prediksi negara tertentu.

[[visual:eko-convergence]]

## Kesalahpahaman umum

1. Negara yang lebih miskin tidak otomatis tumbuh lebih cepat tanpa syarat lain yang sebanding.
2. Tingkat tabungan tinggi tidak selalu memaksimalkan konsumsi mapan; terlalu banyak modal dapat melampaui kaidah emas.
3. Institusi bukan hanya hukum tertulis; pelaksanaan dan kepercayaan pada aturan turut membentuk insentif.

## Kaitan ke investasi, Web3, dan tata kelola

Hak milik dan aturan yang dapat ditegakkan membuat pihak bersedia berinvestasi dan bertukar dalam jangka panjang. Tata kelola protokol menghadapi pertanyaan sejenis: siapa dapat mengubah aturan, bagaimana sengketa ditangani, dan apakah kontrak pintar berperilaku sesuai komitmen. Kepercayaan pada kode tetap memerlukan pengujian, tata kelola, dan proses pemulihan yang jelas. Analogi ini membantu menilai institusi tanpa meramalkan keberhasilan atau kegagalan protokol.

## Batas model

Model Solow sederhana menganggap fungsi produksi, tabungan, dan penyusutan tertentu serta tidak memodelkan konflik, institusi, distribusi, atau kejutan secara rinci. Konvergensi hasil hitungan hanya mengikuti asumsi tersebut. Institusi dan kebijakan bersifat kompleks; hubungan sebab-akibat perlu bukti, konteks, dan evaluasi yang dapat diperbarui.
`,
    },
  ],
  chapterResources: {
    summary: [
      "Pertumbuhan majemuk membuat perbedaan kecil laju pertumbuhan membesar sepanjang waktu.",
      "Fungsi produksi menghubungkan modal, tenaga kerja, dan produktivitas dengan keluaran.",
      "Modal memiliki hasil menurun bila tenaga kerja dan faktor lain tetap; penggandaan seluruh input memberi skala konstan pada fungsi contoh.",
      "Tabungan membangun modal, sedangkan penyusutan menguranginya; keduanya menentukan keadaan mapan Solow.",
      "Kaidah emas memaksimalkan konsumsi mapan, bukan jumlah modal.",
      "Akuntansi pertumbuhan membagi pertumbuhan menjadi kontribusi faktor dan residu produktivitas.",
      "Modal manusia, inovasi, dan gagasan tidak rival mendukung produktivitas serta pertumbuhan endogen.",
      "Konvergensi bersyarat bergantung pada tabungan, institusi, dan parameter lain; kebijakan menghadapi pertukaran masa kini dan masa depan.",
    ],
    glossary: [
      { term: "Pertumbuhan ekonomi", english: "Economic growth", definition: "Peningkatan keluaran riil dalam suatu perekonomian dari waktu ke waktu." },
      { term: "Pertumbuhan majemuk", english: "Compound growth", definition: "Pertumbuhan berulang yang menerapkan laju pada nilai periode sebelumnya." },
      { term: "Aturan 70", english: "Rule of 70", definition: "Perkiraan waktu pelipatan dua, dihitung 70 dibagi laju pertumbuhan persen." },
      { term: "Fungsi produksi", english: "Production function", definition: "Hubungan antara faktor produksi yang digunakan dan keluaran yang dihasilkan." },
      { term: "Modal fisik", english: "Physical capital", definition: "Peralatan, bangunan, mesin, dan aset produksi berwujud." },
      { term: "Modal manusia", english: "Human capital", definition: "Keterampilan, pengetahuan, pengalaman, dan kesehatan yang meningkatkan produktivitas." },
      { term: "Teknologi atau produktivitas", english: "Technology / productivity", definition: "Pengetahuan dan proses yang meningkatkan keluaran dari faktor produksi tertentu." },
      { term: "Produk marjinal", english: "Marginal product", definition: "Tambahan keluaran akibat tambahan satu unit faktor dengan faktor lain tetap." },
      { term: "Hasil menurun", english: "Diminishing returns", definition: "Tambahan keluaran yang makin kecil saat satu faktor bertambah dan faktor lain tetap." },
      { term: "Skala konstan", english: "Constant returns to scale", definition: "Keluaran berubah sebanding ketika seluruh faktor produksi berubah dengan proporsi sama." },
      { term: "Produk per pekerja", english: "Output per worker", definition: "Keluaran agregat dibagi jumlah pekerja." },
      { term: "Tabungan", english: "Saving", definition: "Bagian pendapatan atau keluaran yang tidak dikonsumsi pada periode berjalan." },
      { term: "Penyusutan", english: "Depreciation", definition: "Berkurangnya nilai atau kapasitas modal karena aus atau usang." },
      { term: "Keadaan mapan", english: "Steady state", definition: "Keadaan ketika investasi bersih tidak lagi mengubah modal per pekerja." },
      { term: "Kaidah emas", english: "Golden rule", definition: "Tingkat modal yang memaksimalkan konsumsi mapan dalam model pertumbuhan." },
      { term: "Akuntansi pertumbuhan", english: "Growth accounting", definition: "Penguraian pertumbuhan keluaran menjadi kontribusi faktor dan produktivitas." },
      { term: "Residu Solow", english: "Solow residual", definition: "Bagian pertumbuhan keluaran yang tersisa setelah kontribusi modal dan tenaga kerja dihitung." },
      { term: "Produktivitas faktor total", english: "Total factor productivity (TFP)", definition: "Ukuran produktivitas agregat yang tidak dijelaskan oleh jumlah faktor terukur." },
      { term: "Konvergensi", english: "Convergence", definition: "Proses mengecilnya kesenjangan keluaran per kapita antarwilayah atau negara." },
      { term: "Konvergensi bersyarat", english: "Conditional convergence", definition: "Konvergensi menuju tingkat mapan serupa bila parameter dasarnya sebanding." },
      { term: "Institusi", english: "Institutions", definition: "Aturan formal dan kebiasaan yang membentuk hak, kontrak, serta insentif." },
      { term: "Pertumbuhan endogen", english: "Endogenous growth", definition: "Kerangka yang menjelaskan pertumbuhan melalui insentif, inovasi, dan keputusan di dalam perekonomian." },
      { term: "Barang tidak rival", english: "Nonrival good", definition: "Barang atau gagasan yang dapat digunakan seseorang tanpa mengurangi ketersediaan bagi pengguna lain." },
    ],
    exercises: [
      {
        prompt: "Bandingkan keluaran per kapita awal 1.000 yang tumbuh 2% dan 4% selama 30 tahun. Hitung juga waktu pelipatan menurut aturan 70.",
        solution: "1. Untuk 2%: 1.000×1,02³⁰=1.811,36. 2. Untuk 4%: 1.000×1,04³⁰=3.243,40. 3. Rasio hasil=3.243,40/1.811,36≈1,79. 4. Aturan 70 memberi 70/2=35 tahun pada 2%, dan 70/4=17,5 tahun pada 4%.",
      },
      {
        prompt: "Gunakan Y=A×K^0,5×L^0,5, A=1 dan L=100. Bandingkan Y saat K=100 dan K=200, lalu jelaskan mengapa keluaran tidak berlipat dua.",
        solution: "1. K=100: Y=√(100×100)=100. 2. K=200: Y=√(200×100)=√20.000=141,42. 3. Keluaran naik 41,42%, bukan 100%, karena hasil marjinal modal menurun saat L tetap. 4. Jika K dan L keduanya digandakan menjadi 200, Y=√(200×200)=200, tepat dua kali keluaran awal.",
      },
      {
        prompt: "Dalam model Solow sederhana dengan δ=0,1, hitung k*, y*, dan c* bila s=0,3.",
        solution: "1. k*=(s/δ)²=(0,3/0,1)²=3²=9. 2. y*=√9=3. 3. c*=(1−s)y*=(1−0,3)×3=0,7×3=2,1.",
      },
      {
        prompt: "Dengan α=0,4, g_K=5%, g_L=1%, dan g_A=1%, hitung pertumbuhan keluaran, pertumbuhan per pekerja, serta residu Solow.",
        solution: "1. Kontribusi modal=0,4×5=2,0 poin. 2. Kontribusi tenaga kerja=(1−0,4)×1=0,6 poin. 3. g_Y=1+2,0+0,6=3,6%. 4. Pertumbuhan per pekerja=3,6−1=2,6%. 5. Jika g_Y diketahui, residu=3,6−2,0−0,6=1,0%.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
