import Link from "next/link";
import { Card } from "@/components/ui";

const TERMS = [
  ["Anggaran", "Rencana pemasukan dan pengeluaran untuk periode tertentu."],
  ["Aset", "Sumber daya bernilai yang dimiliki atau dikendalikan."],
  ["Biaya peluang", "Nilai alternatif terbaik yang dilepas saat memilih."],
  ["Biaya tetap", "Biaya yang tidak berubah langsung oleh jumlah produksi dalam rentang tertentu."],
  ["Biaya marginal", "Biaya tambahan untuk menghasilkan satu unit tambahan."],
  ["Biaya variabel", "Biaya yang berubah mengikuti tingkat aktivitas atau produksi."],
  ["Bunga", "Biaya meminjam atau imbalan atas penggunaan dana sesuai ketentuan."],
  ["Bunga majemuk", "Perhitungan hasil atas pokok dan hasil yang telah ditambahkan."],
  ["Dana darurat", "Cadangan likuid untuk kejadian penting yang tidak direncanakan."],
  ["Defisit", "Pengeluaran melebihi pemasukan selama periode yang diukur."],
  ["Diversifikasi", "Penyebaran eksposur untuk mengurangi ketergantungan pada satu aset/sumber."],
  ["Elastisitas", "Ukuran respons persentase suatu variabel terhadap perubahan variabel lain."],
  ["Eksternalitas", "Dampak transaksi pada pihak ketiga yang tidak sepenuhnya tercermin dalam harga."],
  ["Inflasi", "Kenaikan tingkat harga umum secara berkelanjutan."],
  ["Insentif", "Manfaat atau biaya yang memengaruhi pilihan dan perilaku."],
  ["Keseimbangan pasar", "Keadaan saat jumlah yang ingin dibeli sama dengan jumlah yang ingin dijual."],
  ["Kewajiban", "Utang atau tanggung jawab pembayaran yang harus dipenuhi."],
  ["Kekayaan bersih", "Total aset dikurangi total kewajiban."],
  ["Kelangkaan", "Keterbatasan sumber daya dibandingkan dengan pilihan penggunaannya."],
  ["Likuiditas", "Kemudahan mengakses atau mengubah aset menjadi uang dengan kehilangan nilai rendah."],
  ["Mikroekonomi", "Kajian keputusan konsumen, pekerja, perusahaan, dan pasar tertentu."],
  ["Makroekonomi", "Kajian fenomena agregat seperti inflasi, pengangguran, dan pertumbuhan."],
  ["Opportunity cost", "Istilah Inggris untuk biaya peluang."],
  ["Pendapatan bersih", "Pendapatan setelah potongan yang benar-benar tersedia."],
  ["Pendapatan kotor", "Pendapatan sebelum potongan seperti pajak dan iuran."],
  ["Permintaan", "Hubungan harga dengan jumlah yang bersedia dan mampu dibeli pada periode tertentu."],
  ["Penawaran", "Hubungan harga dengan jumlah yang bersedia dijual produsen pada periode tertentu."],
  ["Suku bunga", "Persentase biaya atau imbalan penggunaan dana per periode."],
  ["Sunk cost", "Biaya masa lalu yang tidak dapat dipulihkan."],
  ["Surplus", "Pemasukan melebihi pengeluaran, atau jumlah penawaran melebihi permintaan pada harga tertentu."],
  ["Trade-off", "Hal yang dikorbankan ketika memilih suatu alternatif."],
  ["Volatilitas", "Besarnya perubahan nilai/harga dari waktu ke waktu."],
];

export default function EconomicsGlossaryPage() {
  return (
    <div className="space-y-6">
      <Link href="/pillar/ekonomi/curriculum" className="text-sm text-zinc-400 hover:text-white">← Kembali ke kurikulum</Link>
      <div><p className="text-sm text-zinc-500">Ekonomi &amp; Literasi Keuangan</p><h1 className="mt-1 text-2xl font-bold">Glosarium</h1></div>
      <div className="grid gap-3 sm:grid-cols-2">
        {TERMS.map(([term, definition]) => <Card key={term}><h2 className="font-semibold">{term}</h2><p className="mt-1 text-sm leading-relaxed text-zinc-400">{definition}</p></Card>)}
      </div>
    </div>
  );
}
