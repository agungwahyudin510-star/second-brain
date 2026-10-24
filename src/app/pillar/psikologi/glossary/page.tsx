import Link from "next/link";
import { Card } from "@/components/ui";

const TERMS = [
  ["Atribusi", "Penjelasan yang diberikan untuk penyebab perilaku atau kejadian."],
  ["Availability heuristic", "Jalan pintas yang memakai kemudahan contoh diingat sebagai petunjuk frekuensi."],
  ["Base rate", "Frekuensi dasar kejadian pada kelompok atau konteks yang relevan."],
  ["Behavioral conditioning", "Pembelajaran asosiasi atau konsekuensi yang memengaruhi respons."],
  ["Bias kognitif", "Kecenderungan berpikir yang dapat menghasilkan penyimpangan sistematis pada kondisi tertentu."],
  ["Bounded rationality", "Pengambilan keputusan dengan keterbatasan informasi, waktu, dan kapasitas pemrosesan."],
  ["Cognitive reappraisal", "Meninjau ulang interpretasi situasi tanpa menyangkal fakta."],
  ["Conformity", "Penyesuaian respons atau perilaku agar selaras dengan kelompok/norma."],
  ["Encoding", "Pengubahan informasi menjadi representasi yang dapat disimpan."],
  ["Emosi", "Respons yang dapat mencakup pengalaman subjektif, tubuh, perhatian, dan tindakan."],
  ["Falsifiability", "Sifat klaim yang memungkinkan prediksi diuji dan berpotensi dibantah bukti."],
  ["Fundamental attribution error", "Kecenderungan dalam konteks tertentu terlalu menekankan sifat saat menjelaskan perilaku orang lain dan mengecilkan situasi."],
  ["Habit", "Pola respons yang menjadi lebih otomatis melalui pengulangan dalam konteks."],
  ["Heuristik", "Jalan pintas penilaian yang mengurangi beban berpikir."],
  ["Hypothesis", "Prediksi atau penjelasan sementara yang dapat diuji."],
  ["Interpretasi", "Makna atau penjelasan yang diberikan terhadap informasi/situasi."],
  ["Korelasi", "Hubungan statistik ketika perubahan dua ukuran terjadi bersama."],
  ["Long-term memory", "Sistem penyimpanan pengetahuan/pengalaman dalam rentang lebih lama."],
  ["Memori kerja", "Sistem terbatas untuk mempertahankan dan mengolah informasi yang sedang digunakan."],
  ["Negative reinforcement", "Penghilangan stimulus yang tidak menyenangkan yang meningkatkan perilaku."],
  ["Operant conditioning", "Pembelajaran tentang hubungan tindakan dan konsekuensi."],
  ["Persepsi", "Organisasi dan pemaknaan informasi inderawi."],
  ["Positive reinforcement", "Penambahan konsekuensi yang meningkatkan kemungkinan perilaku."],
  ["Prospect theory", "Kerangka deskriptif tentang penilaian pilihan berisiko relatif terhadap titik acuan."],
  ["Reliabilitas", "Konsistensi suatu pengukuran dalam kondisi yang relevan."],
  ["Retrieval practice", "Latihan mengambil kembali informasi dari ingatan tanpa melihat sumber."],
  ["Self-efficacy", "Keyakinan spesifik bahwa seseorang mampu melakukan tindakan tertentu."],
  ["Social proof", "Penggunaan perilaku orang lain sebagai petunjuk, terutama pada situasi ambigu."],
  ["Spaced practice", "Penyebaran latihan ke beberapa sesi melintasi waktu."],
  ["Validitas", "Bukti yang mendukung interpretasi dan penggunaan skor/ukuran untuk tujuan tertentu."],
  ["Working memory", "Istilah Inggris untuk memori kerja."],
];

export default function PsychologyGlossaryPage() {
  return (
    <div className="space-y-6">
      <Link href="/pillar/psikologi/curriculum" className="text-sm text-zinc-400 hover:text-white">← Kembali ke kurikulum</Link>
      <div><p className="text-sm text-zinc-500">Psychology &amp; Behavioral Science</p><h1 className="mt-1 text-2xl font-bold">Glosarium</h1></div>
      <Card>
        <h2 className="font-semibold">Bacaan pengantar yang dapat diverifikasi</h2>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">Materi ini merupakan pengantar edukatif dan parafrasa, bukan pengganti buku ajar atau bantuan profesional. Untuk metode penelitian, kognisi, persepsi, memori, belajar, emosi, kepribadian, dan psikologi sosial, lihat buku teks terbuka <em>Psychology 2e</em> dari OpenStax. Bagian behavioral economics di kurikulum ini adalah pengantar dan masih memerlukan daftar sumber akademik khusus sebelum digunakan sebagai tinjauan literatur.</p>
        <ul className="mt-3 grid gap-2 text-sm text-sky-300 sm:grid-cols-2">
          {[
            ["Bab 1: Introduction", "1-introduction"],
            ["Bab 2: Psychological Research", "2-introduction"],
            ["Bab 5: Sensation and Perception", "5-introduction"],
            ["Bab 6: Learning", "6-introduction"],
            ["Bab 7: Thinking and Intelligence", "7-introduction"],
            ["Bab 8: Memory", "8-introduction"],
            ["Bab 10: Emotion and Motivation", "10-introduction"],
            ["Bab 11: Personality", "11-introduction"],
            ["Bab 12: Social Psychology", "12-introduction"],
          ].map(([label, chapter]) => (
            <li key={chapter}><a href={`https://openstax.org/books/psychology-2e/pages/${chapter}`} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-sky-200">{label} — OpenStax</a></li>
          ))}
        </ul>
      </Card>
      <div className="grid gap-3 sm:grid-cols-2">{TERMS.map(([term, definition]) => <Card key={term}><h2 className="font-semibold">{term}</h2><p className="mt-1 text-sm leading-relaxed text-zinc-400">{definition}</p></Card>)}</div>
    </div>
  );
}
