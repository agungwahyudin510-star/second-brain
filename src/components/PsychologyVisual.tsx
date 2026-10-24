"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui";

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-2 text-center text-sm sm:grid-cols-5 sm:items-center">
      {steps.map((step, index) => (
        <div className="contents" key={step}>
          <div className="rounded-lg border border-zinc-700 bg-zinc-950 p-3">{step}</div>
          {index < steps.length - 1 && <span className="text-sky-400 sm:hidden" aria-hidden="true">↓</span>}
          {index < steps.length - 1 && <span className="hidden text-sky-400 sm:block" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}

function Range({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block text-sm text-zinc-400">
      {label}: <span className="text-zinc-200">{value}/10</span>
      <input type="range" min="0" max="10" value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-2 block w-full accent-sky-400" />
    </label>
  );
}

export default function PsychologyVisual({ moduleId }: { moduleId: string }) {
  const [attention, setAttention] = useState(5);
  const [selectedSymbol, setSelectedSymbol] = useState<number | null>(null);
  const [schedule, setSchedule] = useState(4);
  const [trigger, setTrigger] = useState("Tugas terasa sulit");
  const [interpretation, setInterpretation] = useState("Saya butuh memecah tugas");
  const [response, setResponse] = useState("Tuliskan langkah pertama");
  const [cue, setCue] = useState("Mulai sesi belajar");
  const [action, setAction] = useState("Buka catatan dan jawab satu pertanyaan");
  const [reward, setReward] = useState("Tandai kemajuan kecil");
  const [anchor, setAnchor] = useState(100);
  const [frame, setFrame] = useState<"gain" | "loss">("gain");
  const [groupChoice, setGroupChoice] = useState("Periksa bukti sendiri");
  const [traits, setTraits] = useState([5, 5, 5, 5, 5]);
  const [claim, setClaim] = useState("Strategi ini selalu berhasil");
  const [evidence, setEvidence] = useState("Perlu diuji pada konteks dan ukuran yang jelas");

  const spacedBars = useMemo(() => Array.from({ length: 8 }, (_, index) => {
    const x = 20 + index * 28;
    const spaced = 20 + Math.max(5, 72 - Math.abs(index - schedule) * 8);
    const massed = 20 + Math.max(5, 68 - index * 7);
    return { x, spaced, massed };
  }), [schedule]);

  if (moduleId === "psi-bab-1") {
    return (
      <Card className="space-y-5 border-sky-500/20">
        <div><h2 className="font-semibold">Peta ruang lingkup psikologi</h2><p className="text-xs text-zinc-500">Diagram konsep, bukan daftar lengkap cabang.</p></div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Perilaku", "Tindakan yang dapat diamati"],
            ["Proses mental", "Perhatian, ingatan, persepsi, penalaran"],
            ["Konteks", "Biologi, pengalaman, relasi, budaya"],
          ].map(([heading, text]) => <div key={heading} className="rounded-lg border border-zinc-800 bg-zinc-950 p-3"><p className="font-medium">{heading}</p><p className="mt-1 text-xs text-zinc-500">{text}</p></div>)}
        </div>
        <div><p className="mb-2 text-xs text-zinc-500">Nature dan nurture berinteraksi — diagram konseptual, bukan proporsi kuantitatif.</p><div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center"><div className="rounded-lg bg-violet-500/10 p-3 text-center text-sm">Biologi &amp; predisposisi</div><span className="text-center text-sky-400">↔</span><div className="rounded-lg bg-emerald-500/10 p-3 text-center text-sm">Pengalaman &amp; lingkungan</div><span className="text-center text-sky-400">→</span><div className="rounded-lg bg-sky-500/10 p-3 text-center text-sm">Pola berkembang dalam konteks</div></div></div>
        <div><p className="mb-2 text-xs text-zinc-500">Siklus penelitian</p><Flow steps={["Observasi", "Pertanyaan", "Hipotesis", "Uji & ukur", "Evaluasi"]} /></div>
        <p className="text-xs text-zinc-500">Korelasi dapat muncul dari A → B, B → A, atau faktor C yang memengaruhi keduanya; observasi hubungan saja belum memastikan sebab.</p>
      </Card>
    );
  }

  if (moduleId === "psi-bab-2") {
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Alur informasi dan memori</h2><p className="text-xs text-zinc-500">Diagram konseptual; tiap tahap dapat dipengaruhi konteks dan strategi.</p></div>
        <Flow steps={["Informasi indera", "Perhatian & persepsi", "Memori kerja", "Encoding", "Memori jangka panjang"]} />
        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3"><p className="text-sm font-medium">Latihan fokus (simulasi sederhana)</p><p className="mt-1 text-xs text-zinc-500">Atur jumlah sinyal yang perlu dibedakan. Ini aktivitas ilustratif, bukan alat ukur klinis.</p><Range label="Beban visual" value={attention} onChange={(value) => { setAttention(value); setSelectedSymbol(null); }} /><div className="mt-3 flex flex-wrap gap-2" aria-label={`${attention} simbol simulasi`}>{Array.from({ length: attention }, (_, index) => <button type="button" key={index} onClick={() => setSelectedSymbol(index)} aria-label={`Pilih simbol ${index + 1}`} className={`rounded px-2 py-1 text-sm ${selectedSymbol === index ? "ring-2 ring-sky-400" : ""} ${index % 3 === 0 ? "bg-amber-500/20 text-amber-300" : "bg-zinc-800 text-zinc-400"}`}>{index % 3 === 0 ? "★" : ["○", "△", "□"][index % 3]}</button>)}</div><p aria-live="polite" className="mt-2 text-xs text-zinc-400">{selectedSymbol === null ? "Tugas: pilih satu simbol bintang." : selectedSymbol % 3 === 0 ? "Tepat: pilihanmu adalah bintang." : "Itu simbol distraktor. Perhatikan target bintang."}</p><p className="mt-1 text-xs text-zinc-500">Banyak distraktor menambah tuntutan perhatian.</p></div>
        <div><p className="mb-2 text-sm font-medium">Jadwal latihan ilustratif</p><Range label="Jeda antar-sesi (simulasi)" value={schedule} onChange={setSchedule} /><svg viewBox="0 0 240 110" role="img" aria-label="Grafik ilustratif perbandingan retensi latihan tersebar dan latihan sekaligus" className="mt-3 h-36 w-full rounded bg-zinc-950 p-2"><path d="M24 8V82H230" fill="none" stroke="#71717a" /><text x="4" y="12" fill="#a1a1aa" fontSize="8">Ilustrasi</text><text x="95" y="101" fill="#a1a1aa" fontSize="8">Sesi belajar</text><polyline points={spacedBars.map((bar) => `${bar.x},${bar.spaced}`).join(" ")} fill="none" stroke="#38bdf8" strokeWidth="2" /><polyline points={spacedBars.map((bar) => `${bar.x},${bar.massed}`).join(" ")} fill="none" stroke="#fbbf24" strokeWidth="2" /><text x="148" y="18" fill="#38bdf8" fontSize="8">Tersebar</text><text x="148" y="30" fill="#fbbf24" fontSize="8">Sekaligus</text></svg><p className="text-xs text-zinc-500">Skala tidak mewakili data penelitian atau prediksi hasil individu; hasil aktual bergantung tugas dan strategi.</p></div>
      </Card>
    );
  }

  if (moduleId === "psi-bab-3") {
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Simulasi respons emosional</h2><p className="text-xs text-zinc-500">Skenario hipotetis. Tidak menilai emosi atau memberi diagnosis.</p></div>
        <label className="block text-sm text-zinc-400">Pemicu<select value={trigger} onChange={(event) => setTrigger(event.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2"><option>Tugas terasa sulit</option><option>Menerima kritik</option><option>Rencana berubah mendadak</option></select></label>
        <label className="block text-sm text-zinc-400">Interpretasi alternatif<textarea value={interpretation} onChange={(event) => setInterpretation(event.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-sm" /></label>
        <label className="block text-sm text-zinc-400">Respons yang dipilih<textarea value={response} onChange={(event) => setResponse(event.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-sm" /></label>
        <Flow steps={[trigger, "Interpretasi", "Emosi/sensasi", response, "Tinjau hasil"]} />
        <p className="text-xs text-zinc-500">Peta ini alat refleksi; bukan urutan wajib. Jika situasi tidak aman, prioritaskan keselamatan dan dukungan.</p>
      </Card>
    );
  }

  if (moduleId === "psi-bab-4") {
    const habitFields: { label: string; value: string; setValue: (value: string) => void }[] = [
      { label: "Pemicu", value: cue, setValue: setCue },
      { label: "Tindakan", value: action, setValue: setAction },
      { label: "Konsekuensi", value: reward, setValue: setReward },
    ];
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Rancang habit loop belajar</h2><p className="text-xs text-zinc-500">Ubah komponennya untuk merancang percobaan kecil; tidak ada durasi kebiasaan yang universal.</p></div>
        <div className="grid gap-3 sm:grid-cols-3">{habitFields.map(({ label, value, setValue }) => <label key={label} className="text-sm text-zinc-400">{label}<input value={value} onChange={(event) => setValue(event.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100" /></label>)}</div>
        <Flow steps={[cue, action, reward, "Catat hasil", "Sesuaikan lingkungan"]} />
        <div className="rounded-lg bg-zinc-950 p-3 text-sm"><p className="font-medium">Atur friction secara sadar</p><p className="mt-1 text-zinc-400">Contoh: siapkan catatan sebelum sesi dan letakkan ponsel di luar jangkauan. Perubahan lingkungan membantu, tetapi tidak mengontrol semua perilaku.</p></div>
      </Card>
    );
  }

  if (moduleId === "psi-bab-5") {
    const anchorEstimate = Math.round(anchor * 0.72);
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Simulasi anchoring dan framing</h2><p className="text-xs text-zinc-500">Angka dan skenario hipotetis untuk refleksi, bukan eksperimen ilmiah pada pengguna.</p></div>
        <label className="block text-sm text-zinc-400">Angka awal yang ditampilkan: {anchor}<input type="range" min="20" max="200" value={anchor} onChange={(event) => setAnchor(Number(event.target.value))} className="mt-2 block w-full accent-sky-400" /></label>
        <p className="rounded-lg bg-zinc-950 p-3 text-sm">Perkiraan setelah melihat angka awal (contoh model sederhana): <strong>{anchorEstimate}</strong>. Model ini hanya memperlihatkan pengaruh angka awal yang diasumsikan; bukan data perilakumu.</p>
        <div className="flex flex-wrap gap-2"><button type="button" onClick={() => setFrame("gain")} className={`rounded-lg border px-3 py-2 text-sm ${frame === "gain" ? "border-sky-400 text-sky-300" : "border-zinc-700 text-zinc-400"}`}>Framing keberhasilan</button><button type="button" onClick={() => setFrame("loss")} className={`rounded-lg border px-3 py-2 text-sm ${frame === "loss" ? "border-sky-400 text-sky-300" : "border-zinc-700 text-zinc-400"}`}>Framing kegagalan</button></div>
        <div className="rounded-lg bg-zinc-950 p-4 text-sm">Program hipotetis: {frame === "gain" ? "“80 dari 100 peserta menyelesaikan latihan.”" : "“20 dari 100 peserta tidak menyelesaikan latihan.”"}<p className="mt-2 text-xs text-zinc-500">Angka setara; persepsi dapat dipengaruhi cara penyajian, tetapi respons tidak ditentukan secara pasti.</p></div>
        <p className="text-xs text-zinc-500">Untuk keputusan nyata, cari estimasi independen sebelum melihat jangkar dan bandingkan risiko pada format yang sama.</p>
      </Card>
    );
  }

  if (moduleId === "psi-bab-6") {
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Simulasi keputusan kelompok</h2><p className="text-xs text-zinc-500">Skenario hipotetis, bukan alat ukur konformitas.</p></div>
        <p className="rounded-lg bg-zinc-950 p-3 text-sm">Tim memilih strategi karena 8 dari 10 anggota mendukungnya. Bukti pendukung utama belum dibagikan.</p>
        <label className="block text-sm text-zinc-400">Pilih respons<select value={groupChoice} onChange={(event) => setGroupChoice(event.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2"><option>Periksa bukti sendiri</option><option>Ikuti mayoritas sekarang</option><option>Minta pendapat anonim dahulu</option></select></label>
        <div className="rounded-lg border border-zinc-800 p-3 text-sm"><p className="font-medium">Refleksi proses</p><p className="mt-1 text-zinc-400">{groupChoice === "Ikuti mayoritas sekarang" ? "Popularitas adalah informasi tentang pilihan kelompok, bukan bukti cukup atas kualitas strategi." : "Mengumpulkan alasan secara independen dapat mengurangi tekanan untuk segera selaras."}</p></div>
        <Flow steps={["Individu & informasi", "Norma kelompok", "Diskusi/otoritas", "Keputusan", "Evaluasi dampak"]} />
        <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-lg bg-zinc-950 p-3 text-sm"><strong>Atribusi disposisional</strong><p className="mt-1 text-xs text-zinc-500">“Ia terlambat karena tidak peduli.”</p></div><div className="rounded-lg bg-zinc-950 p-3 text-sm"><strong>Atribusi situasional</strong><p className="mt-1 text-xs text-zinc-500">“Perjalanan terganggu; perlu konteks tambahan.”</p></div></div>
      </Card>
    );
  }

  if (moduleId === "psi-bab-7") {
    const labels = ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"];
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Profil dimensi hipotetis Big Five</h2><p className="text-xs text-zinc-500">Bukan asesmen kepribadian pengguna, diagnosis, atau hasil normatif.</p></div>
        {labels.map((label, index) => <Range key={label} label={label} value={traits[index]} onChange={(value) => setTraits((current) => current.map((score, item) => item === index ? value : score))} />)}
        <svg viewBox="0 0 240 150" role="img" aria-label={`Grafik profil ilustratif: ${labels.map((label, index) => `${label} ${traits[index]} dari 10`).join(", ")}`} className="h-48 w-full rounded-lg bg-zinc-950 p-3">
          {labels.map((label, index) => <g key={label}><text x="5" y={22 + index * 25} fill="#a1a1aa" fontSize="9">{label}</text><rect x="105" y={13 + index * 25} width="100" height="10" rx="4" fill="#27272a" /><rect x="105" y={13 + index * 25} width={traits[index] * 10} height="10" rx="4" fill="#38bdf8" /><text x="210" y={22 + index * 25} fill="#d4d4d8" fontSize="9">{traits[index]}</text></g>)}
        </svg>
        <p className="text-xs text-zinc-500">Skala contoh buatan sendiri hanya menunjukkan nilai input. Instrumen formal memerlukan bukti reliabilitas, validitas, dan norma untuk tujuan tertentu.</p>
      </Card>
    );
  }

  if (moduleId === "psi-bab-8") {
    return (
      <Card className="space-y-4 border-sky-500/20">
        <div><h2 className="font-semibold">Worksheet evaluasi klaim &amp; perubahan perilaku</h2><p className="text-xs text-zinc-500">Isi untuk latihan refleksi pribadi. Tidak disimpan.</p></div>
        <label className="block text-sm text-zinc-400">Klaim yang ingin diuji<input value={claim} onChange={(event) => setClaim(event.target.value)} className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-zinc-100" /></label>
        <Flow steps={["Klaim", "Prediksi terukur", "Bukti yang mendukung/menyangkal", "Kesimpulan sementara"]} />
        <label className="block text-sm text-zinc-400">Bukti atau batas informasi<textarea value={evidence} onChange={(event) => setEvidence(event.target.value)} className="mt-1 min-h-20 w-full rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-zinc-100" /></label>
        <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-lg bg-zinc-950 p-3"><p className="text-xs text-zinc-500">Klaim</p><p className="mt-1 text-sm">{claim}</p></div><div className="rounded-lg bg-zinc-950 p-3"><p className="text-xs text-zinc-500">Pemeriksaan</p><p className="mt-1 text-sm">{evidence}</p></div></div>
        <p className="text-xs text-zinc-500">Untuk eksperimen diri: tetapkan perilaku, ukuran, periode tinjau, faktor alternatif, privasi, dan batas aman terlebih dahulu.</p>
      </Card>
    );
  }

  return null;
}
