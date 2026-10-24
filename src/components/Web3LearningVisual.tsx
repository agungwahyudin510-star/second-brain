"use client";

import { useState } from "react";
import { Check, Clipboard, RotateCcw } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { Button, Card } from "@/components/ui";

const EVENT_STEPS = [
  { label: "Mulai", stack: "log A", queue: "callback timer", output: "" },
  { label: "Jalankan synchronous", stack: "log C", queue: "callback timer", output: "A" },
  { label: "Call stack kosong", stack: "kosong", queue: "callback timer siap", output: "A · C" },
  { label: "Callback diproses", stack: "callback log B", queue: "kosong", output: "A · C · B" },
];

function Diagram({ visual }: { visual: NonNullable<Lesson["visual"]> }) {
  if (visual === "event-loop") {
    return <EventLoop />;
  }

  const diagrams: Record<Exclude<NonNullable<Lesson["visual"]>, "event-loop">, { title: string; steps: string[]; explanation: string }> = {
    "program-flow": {
      title: "Alur program dan sumber daya",
      steps: ["Source code", "Runtime / engine", "OS dan memory", "CPU menjalankan instruksi", "Output"],
      explanation: "File program memerlukan runtime; OS menyediakan akses ke sumber daya dan CPU memproses instruksi.",
    },
    "data-structures": {
      title: "Bentuk data dalam contoh",
      steps: ["Nilai input", "Array / object", "Function memproses", "Nilai hasil", "Validasi output"],
      explanation: "Pilih representasi berdasarkan kebutuhan: array untuk kumpulan, object untuk record berproperti.",
    },
    scope: {
      title: "Lexical scope dan closure",
      steps: ["Outer function", "Variable lokal", "Inner function", "Akses lexical environment", "Return value"],
      explanation: "Inner function dapat mempertahankan akses ke variable scope saat dibuat; `this` memiliki aturan terpisah.",
    },
    "http-flow": {
      title: "Siklus request dan response",
      steps: ["Client membuat request", "Server menerima", "Validasi dan proses", "Status + body response", "Client cek dan tampilkan"],
      explanation: "Status HTTP, isi response, parsing, dan validasi data adalah tahap berbeda yang perlu diperiksa.",
    },
    "git-branches": {
      title: "Riwayat branch dan merge",
      steps: ["main: commit A", "feature: commit B", "Tinjau perubahan", "Merge + jalankan test", "commit gabungan"],
      explanation: "Branch mengisolasi perubahan; merge otomatis tetap perlu review semantik dan pengujian.",
    },
  };
  const diagram = diagrams[visual];

  return (
    <div>
      <h3 className="font-medium">{diagram.title}</h3>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {diagram.steps.map((step, index) => (
          <li key={step} className="flex min-h-16 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-xs text-sky-300">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">{diagram.explanation}</p>
    </div>
  );
}

function EventLoop() {
  const [step, setStep] = useState(0);
  const current = EVENT_STEPS[step];
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-medium">Simulasi event loop</h3>
          <p className="mt-1 text-xs text-zinc-500">Simulasi konseptual untuk `log A; setTimeout(log B, 0); log C`—bukan pengukur timing runtime.</p>
        </div>
        <Button type="button" variant="ghost" onClick={() => setStep(0)}><RotateCcw className="h-4 w-4" />Ulangi</Button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3" aria-live="polite">
        {[["Call stack", current.stack], ["Task queue", current.queue], ["Output", current.output || "belum ada"]].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-600">{label}</p>
            <p className="mt-2 font-mono text-sm text-zinc-200">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Langkah {step + 1}/4: {current.label}. Urutan output konseptual: A → C → B.</p>
      <Button type="button" className="mt-3" onClick={() => setStep((currentStep) => Math.min(EVENT_STEPS.length - 1, currentStep + 1))} disabled={step === EVENT_STEPS.length - 1}>
        Langkah berikutnya
      </Button>
    </div>
  );
}

function CodeLab({ lab }: { lab: NonNullable<Lesson["codeLab"]> }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(lab.code);
      setCopied(true);
      setCopyError(null);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      setCopyError(error instanceof Error ? `Kode tidak dapat disalin: ${error.message}` : "Kode tidak dapat disalin. Pilih dan salin teks secara manual.");
    }
  }

  return (
    <Card className="space-y-4 border-amber-500/20">
      <div>
        <p className="text-xs uppercase tracking-wide text-amber-300">Code lab • {lab.language}</p>
        <h3 className="mt-1 font-semibold">Salin, jalankan secara lokal, dan verifikasi</h3>
      </div>
      <div className="relative">
        <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-sm leading-relaxed text-zinc-200"><code>{lab.code}</code></pre>
        <Button type="button" variant="ghost" className="absolute right-2 top-2 bg-zinc-950" onClick={copyCode}>
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}{copied ? "Tersalin" : "Salin kode"}
        </Button>
      </div>
      {copyError && <p role="alert" className="text-sm text-amber-300">{copyError}</p>}
      <div><p className="text-sm font-medium">Expected output / behavior</p><pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg bg-zinc-950 p-3 text-xs text-emerald-200">{lab.expectedOutput}</pre></div>
      <div><p className="text-sm font-medium">Cara mencoba</p><p className="mt-1 text-sm text-zinc-400">{lab.runCommand}</p></div>
      <div>
        <p className="text-sm font-medium">Test checklist</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">{lab.testCases.map((testCase) => <li key={testCase}>{testCase}</li>)}</ul>
      </div>
      <details className="rounded-lg border border-zinc-800 p-3">
        <summary className="cursor-pointer text-sm text-zinc-300">Petunjuk</summary>
        <p className="mt-2 text-sm text-zinc-400">{lab.hint}</p>
      </details>
      <p className="text-xs text-zinc-600">Kode tidak dijalankan di website ini. Tidak ada tombol Run karena lingkungan eksekusi terisolasi belum tersedia.</p>
    </Card>
  );
}

export default function Web3LearningVisual({ lesson }: { lesson: Lesson }) {
  if (!lesson.visual && !lesson.codeLab) return null;
  return (
    <div className="space-y-4">
      {lesson.visual && <Card className="border-sky-500/20"><Diagram visual={lesson.visual} /></Card>}
      {lesson.codeLab && <CodeLab lab={lesson.codeLab} />}
    </div>
  );
}
