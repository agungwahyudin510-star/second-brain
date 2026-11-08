import type { CurriculumModule } from "@/lib/types";

export const BAB_08: CurriculumModule = {
  id: "eko2-b08",
  title: "Bab 8 — Uang, Perbankan, dan Bank Sentral",
  summary: "Uang memudahkan pertukaran dan penilaian, bank menghubungkan penabung dengan peminjam, penciptaan uang dipengaruhi cadangan dan perilaku publik, sedangkan bank sentral memengaruhi kondisi moneter melalui kebijakan yang transmisi dan hasilnya memiliki batas.",
  lessons: [
    {
      id: "eko2-b08-s1",
      title: "Fungsi uang dan kemudahan pertukaran",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan tiga fungsi uang, bedakan uang komoditas dari uang fiat, dan tunjukkan bagaimana satuan hitung mengurangi jumlah harga yang perlu dibandingkan dalam barter.

> **Poin kunci**
> - Uang menjadi alat tukar, satuan hitung, dan penyimpan nilai.
> - Uang mengatasi kebetulan keinginan ganda yang menyulitkan barter.
> - Satuan hitung bersama mengurangi banyaknya harga relatif yang perlu diketahui.
> - Uang yang likuid mudah dipakai untuk pembayaran, tetapi daya belinya tetap bisa berubah.

## Definisi dan intuisi

Uang (money) adalah aset yang diterima luas untuk pembayaran barang, jasa, dan kewajiban. Tiga fungsinya ialah alat tukar (medium of exchange), satuan hitung (unit of account), dan penyimpan nilai (store of value). Sebagai alat tukar, uang memisahkan penjualan dari pembelian: penjual tidak harus menginginkan barang yang ditawarkan pembeli pada saat yang sama. Sebagai satuan hitung, uang memberi ukuran bersama untuk menyatakan harga, upah, utang, dan biaya. Sebagai penyimpan nilai, uang memindahkan daya beli dari sekarang ke masa depan. Inflasi mengurangi daya beli uang, sehingga fungsi terakhir tidak berarti nilai riilnya selalu tetap.

Barter adalah pertukaran langsung barang dengan barang. Barter memerlukan kebetulan keinginan ganda (double coincidence of wants): kedua pihak harus saling menginginkan barang yang ditawarkan pihak lain, pada waktu dan jumlah yang cocok. Seorang pembuat roti yang memerlukan perbaikan atap harus menemukan tukang yang ingin menerima roti. Uang menjadi perantara sehingga pembuat roti bisa menjual roti kepada siapa pun yang membayar, lalu membayar tukang dengan uang. Pasar menjadi lebih luas karena rangkaian transaksi tidak bergantung pada pasangan barter tertentu.

Tanpa satuan hitung, setiap pasangan barang memerlukan harga relatif tersendiri. Untuk n barang, banyak pasangan harga adalah **n(n−1)/2**. Dengan uang sebagai satuan bersama, cukup **n−1** harga untuk menyatakan harga masing-masing barang terhadap uang, jika satu barang atau unit uang dipakai sebagai pembanding. Rumus pertama menghitung pasangan unik; rumus kedua menghitung barang yang perlu diberi harga dalam satu satuan bersama. Penghematan menjadi besar saat jumlah barang bertambah.

Uang komoditas (commodity money) memiliki nilai guna di luar fungsi pembayaran, seperti komoditas yang diterima karena kegunaan atau kelangkaannya. Uang fiat (fiat money) tidak dapat ditukar dengan komoditas tertentu berdasarkan janji tetap; penerimaannya bertumpu pada aturan, kepercayaan, dan kebiasaan pembayaran. Uang modern berupa kertas, saldo rekening, atau bentuk elektronik dapat menjadi alat pembayaran karena orang dan lembaga bersedia menerimanya. Bentuk fisik bukan satu-satunya penentu sifat uang.

Likuiditas (liquidity) adalah kemudahan mengubah aset menjadi alat pembayaran dengan biaya dan keterlambatan rendah. Uang tunai sangat likuid. Simpanan transaksi juga mudah dipakai, sementara rumah atau aset khusus memerlukan waktu untuk dijual. Likuiditas berbeda dari nilai: aset yang likuid tetap bisa kehilangan daya beli. Agregat moneter seperti M1 dan M2 mengelompokkan bentuk uang atau aset yang dekat dengan uang menurut definisi statistik; batas kelompoknya mengikuti metodologi, bukan hukum alam yang tidak berubah.

## Rumus dan contoh hitungan lengkap

| Banyak barang (n) | Harga relatif barter n(n−1)/2 | Harga dengan uang n−1 |
|---:|---:|---:|
| 10 | 10×9/2 = **45** | 10−1 = **9** |
| 100 | 100×99/2 = **4.950** | 100−1 = **99** |

Untuk 10 barang, sistem barter memerlukan 45 harga pasangan, sedangkan satuan uang memerlukan 9 harga. Untuk 100 barang, jumlah pasangan naik menjadi 4.950, sementara harga dalam satuan uang hanya 99. Setiap harga tersebut tetap perlu diperbarui ketika keadaan pasar berubah, tetapi jumlah pembanding yang harus diingat jauh lebih sedikit.

Contoh Indonesia: pedagang di pasar dapat mencantumkan harga beras, sayur, dan jasa angkut dalam rupiah, sehingga pembeli dapat membandingkan biaya tanpa menukar barang langsung. Contoh global: perdagangan lintas negara menggunakan satuan pembayaran dan pencatatan yang disepakati agar eksportir, perusahaan logistik, dan pembeli dapat menghitung tagihan. Contoh ini menjelaskan fungsi uang, bukan klaim tentang pangsa penggunaan mata uang tertentu.

[[visual:eko-barter-money]]

## Kesalahpahaman umum

1. Uang bukan hanya uang kertas; simpanan yang diterima untuk transaksi juga dapat menjadi bagian agregat moneter.
2. Penyimpan nilai tidak berarti daya beli uang selalu stabil.
3. Banyaknya harga relatif bukan berarti jumlah barang yang tersedia; itu jumlah pasangan harga yang perlu dibedakan.

## Kaitan ke investasi dan Web3

Aset kripto dan stablecoin dapat dipindahkan secara digital, tetapi sifatnya sebagai uang perlu dinilai menurut fungsi. Volatilitas harga aset kripto mengganggu satuan hitung dan penyimpan nilai karena harga barang atau daya beli saldo berubah. Stablecoin dirancang mengikuti nilai acuan, tetapi kestabilan dan kemudahan penukarannya bergantung pada mekanisme penerbitan, cadangan, penebusan, dan kepercayaan. Membandingkan fungsi-fungsi ini lebih tepat daripada menganggap setiap token otomatis setara uang.

## Batas model

Rumus jumlah harga menganggap semua barang dapat dipertukarkan dan hanya menghitung pasangan unik; mutu, lokasi, waktu, dan biaya transaksi tidak dimasukkan. Batas M1 dan M2 berbeda antarnegara dan dapat berubah. Fungsi uang bergantung pada penerimaan dan institusi, bukan semata-mata pada bentuk teknologinya.
`,
    },
    {
      id: "eko2-b08-s2",
      title: "Neraca bank, intermediasi, dan risiko",
      minutes: 40,
      content: `## Tujuan belajar

Baca neraca bank sederhana, hitung rasio modal dan dampak kerugian kredit, serta bedakan masalah likuiditas dari masalah solvabilitas.

> **Poin kunci**
> - Bank menghubungkan simpanan dan sumber dana lain dengan kredit serta aset keuangan.
> - Aset harus sama dengan liabilitas ditambah modal.
> - Kerugian aset mengurangi modal; modal yang habis berarti bank tak solven.
> - Bank dapat mengalami kekurangan kas meski nilai asetnya melebihi kewajiban.

## Definisi dan intuisi

Bank komersial (commercial bank) menerima simpanan, menyediakan layanan pembayaran, dan menyalurkan kredit. Kegiatan ini disebut intermediasi keuangan (financial intermediation): lembaga menghubungkan pemilik dana dengan peminjam, menilai risiko, mengelola pembayaran, dan mengubah klaim jangka waktu. Bank membiayai aset jangka panjang seperti kredit dengan liabilitas yang sebagian dapat ditarik lebih cepat, termasuk simpanan. Perbedaan jatuh tempo memberi layanan penting, tetapi menimbulkan risiko bila banyak penabung meminta dana sekaligus.

Neraca (balance sheet) mencatat aset di satu sisi serta liabilitas dan modal di sisi lain. Aset bank dapat berupa cadangan, pinjaman, dan surat berharga. Liabilitas utamanya termasuk simpanan dan pinjaman bank; modal bank (bank capital) adalah selisih aset dan kewajiban yang menjadi penyangga kerugian. Identitasnya **Aset = Liabilitas + Modal**. Jika peminjam gagal membayar, nilai kredit turun dan kerugian pertama mengurangi modal. Rasio modal terhadap aset mengukur bantalan relatif. Leverage menyatakan besarnya aset dibanding modal; leverage 10 kali berarti aset sepuluh kali modal, sehingga kerugian kecil terhadap aset dapat mengurangi bagian modal yang lebih besar.

Rasio modal bukan ukuran yang cukup untuk semua risiko. Bank perlu modal memadai terhadap risiko, tata kelola kredit, dan sumber dana yang stabil. Rasio cadangan adalah bagian aset likuid yang tersedia untuk pembayaran segera; cadangan bukan modal, dan kedua pos memiliki fungsi berbeda. Aset yang berharga jangka panjang belum tentu dapat dijual segera tanpa potongan harga. Karena itu likuiditas dan solvabilitas harus dibedakan.

Likuiditas (liquidity) adalah kemampuan memenuhi kewajiban yang jatuh tempo. Solvabilitas (solvency) berarti nilai aset memadai untuk menutup kewajiban, sehingga modal tidak negatif. Bank dapat solvent namun illiquid jika asetnya bernilai cukup tetapi tidak cepat dicairkan. Sebaliknya, bank yang punya kas sementara belum tentu solvent bila kerugian kredit telah menghabiskan modal. Bank run (penarikan massal) terjadi ketika banyak penyimpan meminta dananya sekaligus. Penarikan dapat memaksa bank menjual aset dalam keadaan buruk; potongan harga lalu memperbesar kerugian. Asuransi simpanan secara umum melindungi simpanan yang memenuhi aturan sampai batas tertentu dan dapat mengurangi dorongan panik, tetapi tidak menghapus semua risiko atau menjamin setiap klaim.

## Rumus dan contoh hitungan lengkap

| Neraca | Aset | Liabilitas dan modal | Nilai |
|---|---:|---|---:|
| Cadangan | 100 | Simpanan | 900 |
| Kredit | 800 | Modal | 100 |
| Surat berharga | 100 |  |  |
| **Jumlah aset** | **1.000** | **Jumlah kewajiban dan modal** | **1.000** |

Rasio modal = 100/1.000 = **10%**. Leverage = 1.000/100 = **10 kali**. Jika kredit rugi 5%, kerugian = 0,05×800 = **40**, sehingga modal tersisa 100−40 = **60**. Kerugian 100 menghabiskan modal; itu setara dengan 100/800 = **12,5%** dari nilai kredit awal.

Penarikan 10% simpanan = 0,10×900 = **90**, masih tertutup oleh cadangan 100. Penarikan 20% = **180**: cadangan 100 ditambah penjualan surat berharga senilai 80 menutup kebutuhan. Penarikan 30% = **270**, lebih besar daripada cadangan dan surat berharga yang berjumlah 200; bank menghadapi kekurangan likuiditas dan mungkin menjual kredit dengan harga rendah. Kerugian penjualan dapat mengubah masalah likuiditas menjadi masalah solvabilitas.

Contoh Indonesia: bank menilai kemampuan bayar usaha sebelum memberi kredit dan menjaga kas untuk transaksi penarikan serta pembayaran. Contoh global: lembaga lintas negara mengelola jatuh tempo aset dan sumber dana dengan aturan pengawasan yang dapat berbeda. Angka neraca di atas hipotetis, bukan gambaran bank tertentu.

[[visual:eko-bank-balance]]

## Kesalahpahaman umum

1. Simpanan adalah liabilitas bank kepada nasabah, bukan aset bank.
2. Cadangan membayar kebutuhan segera; modal menyerap kerugian dan keduanya tidak dapat dipertukarkan.
3. Kekurangan kas tidak selalu berarti bank tak solven, tetapi penjualan paksa dapat memperbesar kerugian.

## Kaitan ke investasi dan Web3

Pinjaman DeFi sering memakai agunan berlebih dan ambang likuidasi yang dapat dieksekusi otomatis; kredit bank lebih banyak bergantung pada penilaian kemampuan bayar, hubungan peminjam, modal, dan pengawasan. Misalnya pinjaman 100 dengan agunan 150 memiliki LTV 100/150=66,7%. Pada batas likuidasi 80%, agunan minimum 100/0,8=125. Jika agunan turun ke 120, LTV=100/120=83,3% dan posisi dilikuidasi. Penurunan harga agunan dapat memicu penjualan beruntun; mekanisme ini berbeda dari penarikan simpanan bank, tetapi keduanya memperlihatkan bagaimana tekanan likuiditas menyebar.

## Batas model

Neraca menganggap nilai buku aset diketahui dan mengabaikan biaya pendanaan, risiko pasar, jaminan, serta aturan modal berbobot risiko. Ambang likuiditas pada hitungan hanya memakai cadangan dan surat berharga tanpa memperhitungkan pinjaman darurat atau aset lain. Perlindungan simpanan dan pengawasan berbeda menurut yurisdiksi.
`,
    },
    {
      id: "eko2-b08-s3",
      title: "Cadangan sebagian dan penciptaan uang",
      minutes: 40,
      content: `## Tujuan belajar

Hitung pengganda uang sederhana, telusuri rantai simpanan dan pinjaman, lalu jelaskan bagaimana uang tunai yang ditahan publik dan cadangan berlebih mengurangi pengganda.

> **Poin kunci**
> - Bank dalam sistem cadangan sebagian menyimpan sebagian simpanan dan menyalurkan sisanya sebagai kredit.
> - Kredit yang dibelanjakan dapat menjadi simpanan baru di bank lain.
> - Pengganda 1/r adalah batas model sederhana, bukan kepastian jumlah uang aktual.
> - Uang tunai yang ditahan dan cadangan berlebih memperkecil penciptaan simpanan berantai.

## Definisi dan intuisi

Sistem cadangan sebagian (fractional reserve banking) berarti bank memegang sebagian dana sebagai cadangan dan menggunakan sisanya untuk aset seperti kredit. Rasio cadangan wajib r adalah proporsi simpanan yang diwajibkan disimpan sebagai cadangan menurut aturan yang berlaku. Dalam model buku teks, dana pinjaman dibelanjakan penuh dan penerimanya menyimpan seluruh pembayaran di bank. Bank berikutnya mempertahankan bagian r dan meminjamkan sisanya. Dengan demikian satu simpanan awal mendukung beberapa putaran simpanan dan pinjaman.

Jika r=0,1, bank menahan 10% simpanan dan menyalurkan 90%. Rantai simpanan dari 1.000 dimulai dengan 1.000, lalu simpanan baru 900, 810, 729, dan seterusnya. Jumlah geometri tanpa akhir adalah simpanan awal dibagi r, yaitu 1.000/0,1=10.000. Pengganda uang sederhana **m=1/r**, dengan m pengganda dan r rasio cadangan dalam bentuk desimal. Hubungan ini berlaku hanya jika tidak ada uang tunai yang disimpan di luar bank, tidak ada cadangan tambahan, semua pinjaman kembali sebagai simpanan, dan bank memenuhi permintaan kredit. Bank tidak meminjamkan cadangan kepada publik secara langsung; kredit menciptakan simpanan ketika dicatat dan pembayaran memindahkan simpanan antarbank.

Dalam kenyataan, rumah tangga dapat menarik sebagian dana menjadi uang tunai. Bank juga bisa memegang cadangan berlebih di atas kewajiban. Kedua kebocoran mengurangi jumlah simpanan yang berputar kembali. Bila c adalah rasio uang tunai terhadap simpanan, dan r adalah rasio cadangan, pengganda model yang memasukkan uang tunai adalah **m=(1+c)/(c+r)**. c dan r harus memakai basis yang konsisten, umumnya sebagai rasio terhadap simpanan. Jika c meningkat, sebagian uang keluar dari rantai simpanan bank. Jika cadangan berlebih meningkat, penciptaan kredit yang menyusul juga mengecil.

Uang primer (monetary base) terdiri dari uang tunai yang beredar dan cadangan bank pada bank sentral, sesuai definisi statistik yang digunakan. Uang beredar M dalam pendekatan sederhana adalah pengganda dikali uang primer: **M=m×B**, dengan B uang primer. Persamaan ini membantu menghubungkan sistem perbankan dengan jumlah uang yang lebih luas, tetapi perilaku pemberi pinjaman, peminjam, dan bank memengaruhi m. Rasio cadangan wajib juga bukan satu-satunya batas kredit; modal, risiko, permintaan kredit, dan kebijakan pengawasan penting.

## Rumus dan contoh hitungan lengkap

| Putaran | Simpanan | Perhitungan |
|---:|---:|---|
| 1 | 1.000 | Simpanan awal |
| 2 | 900 | 1.000×(1−0,1) |
| 3 | 810 | 900×(1−0,1) |
| 4 | 729 | 810×(1−0,1) |
| 5 | 656,1 | 729×(1−0,1) |
| **Jumlah lima putaran** | **4.095,1** | 1.000+900+810+729+656,1 |

Dengan r=0,1, pengganda sederhana 1/0,1=**10** dan simpanan total model 1.000×10=**10.000**. Jika uang tunai c=0,2, pengganda menjadi (1+0,2)/(0,2+0,1)=1,2/0,3=**4,0**. Untuk uang primer 1.000, jumlah uang beredar pada model ini M=4×1.000=**4.000**.

Contoh Indonesia: simpanan yang diterima suatu bank menjadi sumber pembayaran dan pendanaan kredit kepada usaha; penerima kredit dapat menyimpan pendapatannya di bank lain. Contoh global: perusahaan yang menerima pembayaran digital dapat menyimpan hasil penjualan di rekening dan menggunakan dana untuk membayar pemasok. Urutan transaksi menjelaskan mekanisme, bukan jaminan bahwa setiap pinjaman menjadi simpanan domestik.

[[visual:eko-money-multiplier]]

## Kesalahpahaman umum

1. Pengganda 10 tidak berarti bank tertentu otomatis memberi kredit tepat sepuluh kali simpanan.
2. Penciptaan simpanan melalui kredit tidak sama dengan mencetak uang tunai oleh bank.
3. Rantai berhenti lebih cepat bila uang ditarik, bank menahan cadangan, atau peminjam tidak menginginkan kredit.

## Kaitan ke investasi dan Web3

Penerbitan suplai token dapat dibandingkan secara terbatas dengan perubahan jumlah unit dalam suatu sistem, tetapi suplai token bukan uang primer dan tidak otomatis menimbulkan simpanan, kredit, atau kewajiban pembayaran yang sama seperti sistem perbankan. Analogi itu berguna untuk membedakan pencatatan unit dari proses intermediasi; keduanya tidak boleh disamakan.

## Batas model

Pengganda mengasumsikan rasio tetap, perbankan dan pembayaran berjalan tanpa gangguan, serta tidak ada kendala modal atau risiko. Perbankan modern memiliki banyak sumber pendanaan dan aturan yang tidak tertangkap dalam rantai sederhana. M uang beredar bergantung pada definisi statistik dan tidak selalu bergerak sebanding dengan uang primer.
`,
    },
    {
      id: "eko2-b08-s4",
      title: "Bank sentral dan teori kuantitas uang",
      minutes: 40,
      content: `## Tujuan belajar

Jelaskan tujuan dan alat umum bank sentral, gunakan persamaan kuantitas uang untuk menghitung tingkat harga, serta terangkan mengapa hasilnya bergantung pada asumsi tentang kecepatan uang dan keluaran.

> **Poin kunci**
> - Bank sentral memengaruhi kondisi moneter dan sistem pembayaran melalui beberapa instrumen.
> - Operasi pembelian obligasi menambah uang primer dalam mekanisme sederhana.
> - Persamaan MV=PY menghubungkan uang, kecepatan peredaran, tingkat harga, dan keluaran riil.
> - Kecepatan uang dan keluaran tidak selalu tetap sehingga perubahan uang tidak langsung menentukan inflasi.

## Definisi dan intuisi

Bank sentral (central bank) adalah lembaga publik yang menjalankan kebijakan moneter, mendukung kestabilan sistem pembayaran, dan menjalankan fungsi lain sesuai mandat negara. Mandatnya dapat menekankan kestabilan harga, kegiatan ekonomi, atau stabilitas keuangan dengan susunan berbeda. Instrumen umum mencakup suku bunga acuan (policy rate), persyaratan cadangan, fasilitas pinjaman, dan operasi pasar terbuka (open market operation). Suku bunga acuan memengaruhi biaya pendanaan jangka pendek dan sinyal arah kebijakan; rasio cadangan mengubah persyaratan tertentu bagi bank; operasi pasar terbuka mengubah kepemilikan aset dan cadangan sistem.

Dalam contoh sederhana, bank sentral membeli obligasi dari sektor keuangan dan membayar dengan menambah saldo cadangan. Uang primer meningkat. Jika pengganda uang bekerja penuh, perubahan basis dapat diikuti perubahan uang beredar yang lebih besar. Penjualan obligasi bergerak sebaliknya dalam mekanisme tersebut. Implementasi aktual dipengaruhi pilihan bank, sistem cadangan, fasilitas bank sentral, dan kondisi pasar; tidak setiap pembelian obligasi menghasilkan kenaikan kredit dengan pengganda tetap.

Teori kuantitas uang memakai identitas **MV=PY**. M adalah jumlah uang, V kecepatan peredaran uang yaitu rata-rata berapa kali satu unit uang digunakan untuk transaksi akhir dalam periode, P tingkat harga, dan Y keluaran riil. PY adalah nilai nominal keluaran. Persamaan ini merupakan identitas bila variabel diukur konsisten. Untuk menafsirkan hubungan kausal, analisis perlu menambahkan asumsi tentang perilaku V dan Y. Jika V serta Y tetap, kenaikan M sebesar 10% mengharuskan P naik 10% agar identitas tetap seimbang. Jika Y berubah, dampak pada P berbeda.

Kecepatan uang tidak selalu stabil. Perubahan cara membayar, kehati-hatian menabung, teknologi, sistem keuangan, dan ketidakpastian dapat mengubah seberapa sering saldo berpindah. Keluaran riil juga dapat merespons permintaan, kapasitas, dan kebijakan. Dalam jangka panjang, teori kuantitas membantu memahami bahwa pertumbuhan uang yang jauh melampaui pertumbuhan keluaran dapat berkaitan dengan kenaikan tingkat harga, tetapi hubungan periode pendek lebih kompleks. Harga dan upah menyesuaikan dengan jeda, sementara ekspektasi turut membentuk keputusan.

Bank sentral mengomunikasikan kebijakan agar rumah tangga, perusahaan, dan investor dapat membentuk ekspektasi. Pengumuman yang kredibel dapat memengaruhi suku bunga pasar dan keputusan bahkan sebelum transaksi bank sentral berubah. Namun respons berbeda karena kontrak, risiko, dan situasi tiap sektor tidak sama. Analisis harus memisahkan perubahan uang primer, uang beredar, kredit, dan tingkat harga.

## Rumus dan contoh hitungan lengkap

| Kondisi | Perhitungan | Hasil |
|---|---|---:|
| Uang primer awal | — | 1.000 |
| Pembelian obligasi bank sentral | ΔB | +100 |
| Kenaikan uang beredar, pengganda 4 | 4×100 | +400 |
| Kuantitas awal: M=400, V=5, Y=1.000 | P=MV/Y=400×5/1.000 | **2,0** |
| M naik menjadi 440, V=5, Y=1.000 | 440×5/1.000 | **2,2** |
| M=440, V=5, Y=1.040 | 440×5/1.040 | **2,115** |

Pada kasus kedua, P naik dari 2,0 menjadi 2,2, atau (2,2/2,0−1)×100=**10%**. Jika Y meningkat 4% ke 1.040 sementara M naik 10% dan V tetap, P=2,115; kenaikannya dari 2,0 sekitar (2,115/2−1)×100=**5,77%**. Keluaran yang tumbuh menyerap sebagian kenaikan nilai nominal.

Contoh Indonesia: keputusan suku bunga acuan dapat memengaruhi penawaran kredit, simpanan, dan nilai tukar melalui kondisi pasar. Contoh global: ketika bank sentral mengumumkan perubahan sikap, investor menilai kembali arus kas dan risiko berdasarkan ekspektasi suku bunga. Reaksi tersebut bukan kepastian arah harga aset atau inflasi.

[[visual:eko-quantity-theory]]

## Kesalahpahaman umum

1. MV=PY selalu seimbang sebagai identitas; identitas saja tidak membuktikan arah sebab-akibat.
2. Uang primer dan uang beredar luas adalah ukuran yang berbeda.
3. Pembelian obligasi tidak menjamin pengganda kredit bekerja penuh atau inflasi naik seketika.

## Kaitan ke investasi dan psikologi

Investor membentuk ekspektasi ketika membaca pengumuman kebijakan; perubahan ekspektasi bisa memengaruhi keputusan sebelum suku bunga aktual berubah. Reaksi pasar mencerminkan informasi dan posisi yang beragam, bukan ramalan pasti tentang hasil kebijakan. Memisahkan perubahan uang, suku bunga, kredit, dan harga membantu mencegah penyederhanaan sebab-akibat.

## Batas model

Perhitungan menganggap besaran uang, kecepatan, dan keluaran diukur konsisten, sedangkan contoh skenario menahan sebagian variabel tetap. V dapat berubah dan keluaran memiliki kapasitas serta jeda penyesuaian. Persamaan ini bukan model lengkap untuk inflasi atau petunjuk investasi.
`,
    },
    {
      id: "eko2-b08-s5",
      title: "Transmisi kebijakan dan aturan Taylor",
      minutes: 40,
      content: `## Tujuan belajar

Hitung suku bunga acuan ilustratif menurut aturan Taylor, jelaskan jalur transmisi kebijakan moneter, dan kenali batas bawah nol serta peran independensi, kredibilitas, dan stabilitas keuangan.

> **Poin kunci**
> - Kebijakan moneter memengaruhi ekonomi melalui kredit, nilai tukar, harga aset, dan ekspektasi.
> - Aturan Taylor merangkum respons suku bunga terhadap inflasi dan kesenjangan output.
> - Batas bawah nol membatasi pemangkasan suku bunga nominal, tetapi tidak menghapus semua pilihan kebijakan.
> - Kredibilitas dan stabilitas keuangan memengaruhi transmisi, tanpa menjamin hasil tertentu.

## Definisi dan intuisi

Transmisi kebijakan moneter adalah proses ketika keputusan bank sentral memengaruhi suku bunga dan kondisi ekonomi. Perubahan suku bunga acuan mengalir ke biaya pinjaman dan imbal hasil simpanan, meski besar serta waktunya berbeda antarproduk. Kredit yang lebih mahal dapat mengurangi pembelian barang tahan lama dan investasi usaha; suku bunga yang lebih rendah dapat mendorong sebagian pinjaman bila peminjam dan bank bersedia mengambil risiko. Kebijakan juga memengaruhi nilai tukar, harga aset, dan ekspektasi inflasi. Nilai tukar mengubah harga barang impor serta daya saing eksportir. Harga aset memengaruhi kekayaan, agunan, dan biaya pendanaan. Ekspektasi memengaruhi upah, harga, kontrak, dan keputusan menabung.

Aturan Taylor (Taylor rule) adalah pedoman ilustratif untuk mengaitkan suku bunga nominal dengan inflasi dan kesenjangan output. Bentuk yang digunakan di sini: **i = π + r* + 0,5(π−π*) + 0,5x**. i adalah suku bunga nominal yang disarankan, π inflasi aktual, r* suku bunga riil netral, π* sasaran inflasi, dan x kesenjangan output dalam poin persentase. Bila inflasi melampaui sasaran, suku bunga meningkat lebih dari satu banding satu terhadap inflasi dalam formula ini; bila output di bawah potensial, x negatif dan menurunkan rekomendasi. Koefisien 0,5 adalah parameter aturan, bukan konstanta universal.

Aturan ini mengorganisasi diskusi, bukan menetapkan keputusan otomatis. Bank sentral menimbang perkiraan, risiko, data yang direvisi, stabilitas sistem, dan mandatnya. Suku bunga riil ex ante sering dihitung sebagai suku bunga nominal dikurangi inflasi yang diharapkan; selisih terhadap inflasi aktual memberi pendekatan ex post. Dalam contoh sederhana, i=6% dan π=4% berarti suku bunga riil sekitar 2%. Perubahan ekspektasi inflasi dapat mengubah suku bunga riil walau i tetap.

Batas bawah nol (zero lower bound) menggambarkan kendala ketika suku bunga nominal tidak mudah dipangkas jauh di bawah nol karena uang tunai dan struktur pasar memberi alternatif. Dalam keadaan tersebut, bank sentral dapat menggunakan komunikasi, pembelian aset, atau instrumen lain sesuai mandat dan kondisi. Instrumen itu memiliki biaya, ketidakpastian, dan keterbatasan; batas bawah bukan berarti kebijakan berhenti sepenuhnya.

Independensi bank sentral (central bank independence) memberi ruang mengambil keputusan operasional tanpa tekanan jangka pendek yang merusak mandat. Kredibilitas terbentuk ketika publik percaya sasaran dan komunikasi akan dijalankan secara konsisten. Ekspektasi yang lebih tertambat membantu kontrak dan penetapan harga, tetapi kepercayaan bukan jaminan inflasi selalu tepat sasaran. Bank sentral juga memperhatikan stabilitas keuangan: suku bunga dan kredit yang terlalu longgar atau terlalu ketat dapat berinteraksi dengan leverage dan harga aset. Kebijakan perlu menjelaskan pertukaran antara kestabilan harga, kegiatan ekonomi, dan risiko sistemik.

## Rumus dan contoh hitungan lengkap

Ambil π*=2% dan r*=2%, sehingga **i=π+2+0,5(π−2)+0,5x**.

| Inflasi π | Kesenjangan x | Perhitungan | i |
|---:|---:|---|---:|
| 4% | −2% | 4+2+0,5(4−2)+0,5(−2)=4+2+1−1 | **6,0%** |
| 2% | 0% | 2+2+0,5(2−2)+0,5(0)=2+2 | **4,0%** |
| 6% | +2% | 6+2+0,5(6−2)+0,5(2)=6+2+2+1 | **11,0%** |

Pada skenario pertama, suku bunga riil sederhana = i−π = 6−4 = **2%**. Pada skenario kedua hasilnya 4−2=2%. Perhitungan ini memakai pendekatan selisih, bukan formula Fisher eksak. Tanda kesenjangan penting: output di bawah potensial memberi x negatif.

Contoh Indonesia: rumah tangga yang memilih bunga tetap atau mengambang perlu memahami bahwa perubahan kebijakan diteruskan ke produk pinjaman dengan jeda dan aturan berbeda. Contoh global: perusahaan dengan utang mata uang berbeda menghadapi saluran nilai tukar sekaligus biaya kredit. Contoh tersebut menjelaskan jalur, bukan memprediksi arah kebijakan atau imbal hasil.

[[visual:eko-taylor-rule]]

## Kesalahpahaman umum

1. Aturan Taylor bukan janji bank sentral atau aturan wajib yang cocok untuk semua negara.
2. Suku bunga acuan tidak langsung mengubah semua bunga kredit dan harga aset dalam besaran yang sama.
3. Batas bawah nol membatasi sebagian tindakan, tetapi tidak berarti bank sentral kehilangan semua instrumen.

## Kaitan ke investasi dan psikologi

Kredibilitas menjadi jangkar ekspektasi: investor, perusahaan, dan rumah tangga memakai sasaran yang dipercaya ketika menyusun kontrak dan rencana. Namun bias terlalu percaya diri membuat pelaku merasa mampu meramal waktu perubahan suku bunga hanya dari satu pengumuman. Memperlakukan skenario Taylor sebagai alat pembanding, bukan sinyal transaksi pasti, membantu membatasi keyakinan berlebihan.

## Batas model

Aturan Taylor menyederhanakan keputusan menjadi satu suku bunga dan dua kesenjangan, sementara data output potensial dan inflasi dapat direvisi. Koefisien, suku bunga netral, sasaran, serta transmisi berbeda menurut konteks. Stabilitas harga dan sistem keuangan memerlukan penilaian yang melampaui persamaan ini.
`,
    },
  ],
  chapterResources: {
    summary: [
      "Uang menjalankan fungsi alat tukar, satuan hitung, dan penyimpan nilai.",
      "Satuan hitung mengurangi jumlah harga pasangan yang diperlukan dalam barter.",
      "Neraca bank menyeimbangkan aset dengan liabilitas dan modal.",
      "Likuiditas menyangkut pembayaran segera; solvabilitas menyangkut kecukupan nilai aset.",
      "Kredit dan simpanan bank berinteraksi dalam penciptaan uang sistem cadangan sebagian.",
      "MV=PY menghubungkan uang, kecepatan, harga, dan keluaran dengan asumsi tertentu.",
      "Aturan Taylor merangkum respons suku bunga terhadap inflasi dan kesenjangan output.",
    ],
    glossary: [
      { term: "Uang", english: "Money", definition: "Aset yang diterima luas untuk pembayaran dan pencatatan kewajiban." },
      { term: "Alat tukar", english: "Medium of exchange", definition: "Fungsi uang sebagai perantara transaksi." },
      { term: "Satuan hitung", english: "Unit of account", definition: "Ukuran bersama untuk menyatakan harga, biaya, dan kewajiban." },
      { term: "Penyimpan nilai", english: "Store of value", definition: "Fungsi memindahkan daya beli dari waktu sekarang ke masa depan." },
      { term: "Uang komoditas", english: "Commodity money", definition: "Uang yang memiliki nilai guna di luar fungsi pembayarannya." },
      { term: "Uang fiat", english: "Fiat money", definition: "Uang yang penerimaannya bersandar pada aturan, kepercayaan, dan kebiasaan, bukan penebusan komoditas tertentu." },
      { term: "Likuiditas", english: "Liquidity", definition: "Kemudahan mengubah aset menjadi alat pembayaran dengan biaya dan jeda rendah." },
      { term: "Barter", english: "Barter", definition: "Pertukaran langsung barang atau jasa tanpa perantara uang." },
      { term: "Kebetulan keinginan ganda", english: "Double coincidence of wants", definition: "Keadaan ketika kedua pihak barter saling menginginkan barang pihak lain pada saat yang sama." },
      { term: "Bank komersial", english: "Commercial bank", definition: "Lembaga yang menyediakan layanan simpanan, pembayaran, dan kredit." },
      { term: "Intermediasi keuangan", english: "Financial intermediation", definition: "Penghubungan pemilik dana dengan peminjam melalui lembaga keuangan." },
      { term: "Neraca", english: "Balance sheet", definition: "Catatan aset serta liabilitas dan modal suatu lembaga." },
      { term: "Modal bank", english: "Bank capital", definition: "Selisih aset dan kewajiban yang menjadi penyangga kerugian." },
      { term: "Leverage", english: "Leverage", definition: "Perbandingan aset atau eksposur terhadap modal." },
      { term: "Likuiditas dan solvabilitas", english: "Liquidity and solvency", definition: "Kemampuan membayar kewajiban tepat waktu dan kecukupan nilai aset terhadap kewajiban." },
      { term: "Penarikan massal", english: "Bank run", definition: "Penarikan simpanan secara serentak dalam jumlah besar." },
      { term: "Cadangan wajib", english: "Reserve requirement", definition: "Cadangan minimum yang diwajibkan terhadap basis simpanan tertentu." },
      { term: "Cadangan sebagian", english: "Fractional reserve banking", definition: "Sistem perbankan yang memegang sebagian simpanan sebagai cadangan dan menempatkan sisanya pada aset lain." },
      { term: "Pengganda uang", english: "Money multiplier", definition: "Rasio model antara uang beredar luas dan uang primer." },
      { term: "Uang primer", english: "Monetary base", definition: "Uang tunai beredar dan cadangan bank sentral menurut definisi statistik." },
      { term: "Uang beredar", english: "Money supply", definition: "Ukuran agregat alat pembayaran dan aset dekat uang." },
      { term: "Bank sentral", english: "Central bank", definition: "Lembaga publik yang menjalankan kebijakan moneter dan fungsi sistem pembayaran." },
      { term: "Suku bunga acuan", english: "Policy rate", definition: "Suku bunga kebijakan yang menjadi acuan kondisi moneter jangka pendek." },
      { term: "Operasi pasar terbuka", english: "Open market operation", definition: "Pembelian atau penjualan aset oleh bank sentral di pasar." },
      { term: "Teori kuantitas", english: "Quantity theory", definition: "Kerangka yang menghubungkan uang, kecepatan, harga, dan keluaran melalui MV=PY." },
      { term: "Kecepatan uang", english: "Velocity of money", definition: "Rata-rata frekuensi suatu unit uang digunakan untuk transaksi akhir dalam periode." },
      { term: "Aturan Taylor", english: "Taylor rule", definition: "Pedoman yang mengaitkan suku bunga kebijakan dengan inflasi dan kesenjangan output." },
      { term: "Batas bawah nol", english: "Zero lower bound", definition: "Kendala ketika pemangkasan suku bunga nominal dibatasi oleh alternatif uang tunai dan struktur pasar." },
      { term: "Independensi bank sentral", english: "Central bank independence", definition: "Ruang pengambilan keputusan operasional tanpa tekanan jangka pendek yang merusak mandat." },
    ],
    exercises: [
      {
        prompt: "Hitung jumlah harga relatif barter dan harga dengan uang untuk 10 barang dan 100 barang.",
        solution: "1. Untuk 10 barang: n(n−1)/2=10×9/2=45 harga barter; n−1=9 harga dengan uang. 2. Untuk 100 barang: 100×99/2=4.950 harga barter; 100−1=99 harga dengan uang. 3. Satuan hitung bersama mengurangi jumlah pasangan yang harus dibandingkan.",
      },
      {
        prompt: "Gunakan neraca bank pada Bab 8 untuk menghitung rasio modal, kerugian kredit 5%, ambang tak solven, dan dampak penarikan 10%, 20%, serta 30% simpanan.",
        solution: "1. Rasio modal=100/1.000=10%; leverage=1.000/100=10 kali. 2. Rugi kredit 5%×800=40, sehingga modal tersisa 100−40=60. 3. Rugi 100 menghabiskan modal; 100/800=12,5% kredit. 4. Penarikan 10%×900=90 tertutup cadangan 100. 5. Penarikan 20%=180 memerlukan cadangan 100 dan penjualan surat berharga 80. 6. Penarikan 30%=270 melebihi 200 cadangan dan surat berharga; bank mengalami kekurangan likuiditas.",
      },
      {
        prompt: "Dengan simpanan awal 1.000 dan r=10%, hitung lima putaran rantai simpanan, pengganda sederhana, serta pengganda dan uang beredar bila c=0,2 dan uang primer 1.000.",
        solution: "1. Rantai awal: 1.000; 900; 810; 729; 656,1. 2. Jumlah lima putaran=1.000+900+810+729+656,1=4.095,1. 3. Pengganda sederhana=1/0,1=10; jumlah akhir model=1.000×10=10.000. 4. Dengan c=0,2, pengganda kebocoran=(1+0,2)/(0,2+0,1)=1,2/0,3=4,0. 5. M=4×1.000=4.000.",
      },
      {
        prompt: "Gunakan teori kuantitas untuk M=400, V=5, Y=1.000, lalu hitung rekomendasi aturan Taylor untuk π=4%, kesenjangan −2%, π*=2%, dan r*=2%.",
        solution: "1. P=MV/Y=400×5/1.000=2,0. 2. Aturan Taylor: i=π+r*+0,5(π−π*)+0,5x. 3. i=4+2+0,5(4−2)+0,5(−2)=4+2+1−1=6,0%. 4. Suku bunga riil sederhana=i−π=6−4=2%.",
      },
    ],
    furtherReading: [
      { title: "Principles of Economics", authors: "N. Gregory Mankiw" },
      { title: "The Economics of Money, Banking, and Financial Markets", authors: "Frederic S. Mishkin" },
      { title: "Economics", authors: "Paul Krugman dan Robin Wells" },
      { title: "The Economy", authors: "The CORE Econ Team" },
    ],
  },
};
