"use client";

import { useEffect, useRef, useState } from "react";
import { AudioLines, Pause, Play, RotateCcw } from "lucide-react";
import { Button, Card } from "@/components/ui";

type ListeningCheck = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export default function EnglishSpeechPractice({
  text,
  listening,
}: {
  text: string;
  listening?: ListeningCheck;
}) {
  const [rate, setRate] = useState(0.85);
  const [repeatCount, setRepeatCount] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackCount, setPlaybackCount] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const playbackRef = useRef(0);

  useEffect(() => () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  function play() {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      setAudioError("Text-to-speech tidak tersedia di browser ini. Coba browser lain yang mendukung Web Speech API.");
      return;
    }
    window.speechSynthesis.cancel();
    setAudioError(null);
    setPlaybackCount(0);
    setProgress(0);
    playbackRef.current = 0;

    const speakNext = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = rate;
      utteranceRef.current = utterance;
      utterance.onboundary = (event) => {
        if (event.charIndex >= 0) setProgress(Math.min(95, Math.round((event.charIndex / text.length) * 100)));
      };
      utterance.onend = () => {
        playbackRef.current += 1;
        setPlaybackCount(playbackRef.current);
        if (playbackRef.current < repeatCount) {
          speakNext();
        } else {
          setPlaying(false);
          setPaused(false);
          setProgress(100);
        }
      };
      utterance.onerror = (event) => {
        setPlaying(false);
        setPaused(false);
        if (event.error !== "canceled" && event.error !== "interrupted") {
          setAudioError(`Audio tidak dapat diputar: ${event.error}.`);
        }
      };
      window.speechSynthesis.speak(utterance);
    };

    setPlaying(true);
    setPaused(false);
    speakNext();
  }

  function togglePause() {
    if (!("speechSynthesis" in window)) return;
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
      setPlaying(true);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
      setPlaying(false);
    }
  }

  function stop() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
  }

  return (
    <Card className="space-y-4 border-sky-500/20">
      <div className="flex items-start gap-3">
        <AudioLines className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
        <div>
          <h2 className="font-semibold">Listening &amp; speaking practice</h2>
          <p className="mt-1 text-sm text-zinc-400">Dengarkan tanpa membaca, tirukan dengan suara keras, lalu buka transkrip untuk memeriksa. Audio dibuat oleh text-to-speech browser; ini bukan rekaman penutur atau penilaian pelafalan.</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" onClick={play} disabled={playing}>
          <Play className="h-4 w-4" /> Putar
        </Button>
        <Button type="button" variant="ghost" onClick={togglePause} disabled={!playing && !paused}>
          <Pause className="h-4 w-4" /> {paused ? "Lanjutkan" : "Jeda"}
        </Button>
        <Button type="button" variant="ghost" onClick={stop} disabled={!playing && !paused}>
          <RotateCcw className="h-4 w-4" /> Hentikan
        </Button>
        <label className="ml-0 text-sm text-zinc-400 sm:ml-auto">
          Kecepatan
          <select aria-label="Kecepatan audio" className="ml-2 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1" value={rate} onChange={(event) => setRate(Number(event.target.value))}>
            <option value={0.7}>0.7×</option>
            <option value={0.85}>0.85×</option>
            <option value={1}>1×</option>
          </select>
        </label>
        <label className="text-sm text-zinc-400">
          Ulangi
          <select aria-label="Jumlah pengulangan audio" className="ml-2 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1" value={repeatCount} onChange={(event) => setRepeatCount(Number(event.target.value))}>
            {[1, 2, 3].map((count) => <option key={count} value={count}>{count}×</option>)}
          </select>
        </label>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800" role="progressbar" aria-label="Progres pemutaran audio" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <div className="h-full bg-sky-500 transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-xs text-zinc-500">{playbackCount ? `Selesai diputar ${playbackCount} dari ${repeatCount} kali.` : "Coba dengarkan sekali sebelum membuka teks."}</p>
      {audioError && <p role="alert" className="text-sm text-amber-300">{audioError}</p>}

      <details className="rounded-lg border border-zinc-800 p-3">
        <summary className="cursor-pointer text-sm text-zinc-300">Tampilkan transkrip</summary>
        <p className="mt-3 text-sm leading-relaxed text-zinc-200">{text}</p>
      </details>

      {listening && (
        <div className="space-y-3 border-t border-zinc-800 pt-4">
          <h3 className="font-medium">Cek pemahaman</h3>
          <p className="text-sm text-zinc-300">{listening.question}</p>
          <div className="space-y-2">
            {listening.options.map((option, index) => (
              <label key={option} className="flex cursor-pointer items-start gap-2 text-sm text-zinc-400">
                <input type="radio" name={`listening-${text.slice(0, 12)}`} checked={selected === index} onChange={() => { setSelected(index); setChecked(false); }} className="mt-1 accent-sky-400" />
                {option}
              </label>
            ))}
          </div>
          <Button type="button" variant="ghost" disabled={selected === null} onClick={() => setChecked(true)}>Periksa jawaban</Button>
          {checked && selected !== null && (
            <p role="status" className={`text-sm ${selected === listening.answer ? "text-emerald-300" : "text-amber-300"}`}>
              {selected === listening.answer ? "Benar." : "Belum tepat."} {listening.explanation}
            </p>
          )}
        </div>
      )}

      <p className="text-xs text-zinc-500">Untuk speaking, tirukan kalimat lalu nilai sendiri: apakah setiap kata terdengar jelas, apakah bunyi akhir tetap terdengar, dan apakah pesan mudah dipahami? Browser tidak merekam atau memberi skor pronunciation.</p>
    </Card>
  );
}
