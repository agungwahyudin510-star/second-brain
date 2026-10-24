"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AudioLines, BookOpen, RotateCcw } from "lucide-react";
import { Button, Card, btnCls } from "@/components/ui";
import { ENGLISH_A1_VOCABULARY } from "@/data/curriculum/english/vocabulary";

const STORAGE_KEY = "sb-english-vocabulary-v1";
const INTERVAL_DAYS = [1, 3, 7, 14, 30];

type WordProgress = { box: number; dueAt: string; status: "learned" | "review" };
type WordProgressMap = Record<string, WordProgress>;

function readProgress(value: unknown): WordProgressMap {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error("Format progres kosakata tidak valid.");
  }
  const entries = Object.entries(value);
  for (const [id, item] of entries) {
    if (!ENGLISH_A1_VOCABULARY.some((word) => word.id === id) ||
      typeof item !== "object" || item === null ||
      !("box" in item) || typeof item.box !== "number" || !Number.isInteger(item.box) || item.box < 0 || item.box > 5 ||
      !("dueAt" in item) || typeof item.dueAt !== "string" || Number.isNaN(Date.parse(item.dueAt)) ||
      !("status" in item) || (item.status !== "learned" && item.status !== "review")) {
      throw new Error("Data progres kosakata rusak atau versinya tidak didukung. Data lama tidak ditimpa.");
    }
  }
  return value as WordProgressMap;
}

export default function EnglishVocabularyPage() {
  const [progress, setProgress] = useState<WordProgressMap>({});
  const [hydrated, setHydrated] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [topic, setTopic] = useState("Semua topik");
  const [filter, setFilter] = useState("Semua");
  const [randomReview, setRandomReview] = useState(false);
  const [randomOrder, setRandomOrder] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(readProgress(JSON.parse(raw)));
    } catch (error) {
      setStorageError(error instanceof Error ? error.message : "Progres kosakata tidak dapat dibaca.");
    } finally {
      setHydrated(true);
    }
  }, []);

  const topics = useMemo(() => ["Semua topik", ...Array.from(new Set(ENGLISH_A1_VOCABULARY.map((word) => word.topic)))], []);
  const words = useMemo(() => {
    const now = Date.now();
    const matching = ENGLISH_A1_VOCABULARY.filter((word) => {
      const entry = progress[word.id];
      const matchesTopic = topic === "Semua topik" || word.topic === topic;
      const matchesFilter = filter === "Semua" ||
        (filter === "Baru" && !entry) ||
        (filter === "Perlu diulang" && (!entry || entry.status === "review" || Date.parse(entry.dueAt) <= now)) ||
        (filter === "Sudah dijadwalkan" && entry?.status === "learned" && Date.parse(entry.dueAt) > now);
      return matchesTopic && matchesFilter;
    });
    if (randomReview) return matching.sort((a, b) => randomOrder.indexOf(a.id) - randomOrder.indexOf(b.id));
    return matching;
  }, [filter, progress, randomOrder, randomReview, topic]);

  useEffect(() => {
    setCurrentIndex(0);
    setRevealed(false);
  }, [filter, randomOrder, randomReview, topic]);

  const current = words[currentIndex];
  const dueCount = ENGLISH_A1_VOCABULARY.filter((word) => {
    const entry = progress[word.id];
    return !entry || entry.status === "review" || Date.parse(entry.dueAt) <= Date.now();
  }).length;
  const learnedCount = ENGLISH_A1_VOCABULARY.filter((word) => progress[word.id]?.status === "learned").length;

  function saveWord(id: string, remembered: boolean) {
    if (storageError) return;
    const previous = progress[id];
    const box = remembered ? Math.min(5, (previous?.box ?? 0) + 1) : 0;
    const dueAt = new Date(Date.now() + (remembered ? INTERVAL_DAYS[Math.max(0, box - 1)] * 86400000 : 0)).toISOString();
    const next = {
      ...progress,
      [id]: { box, dueAt, status: remembered ? "learned" as const : "review" as const },
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setProgress(next);
      setStorageError(null);
      setRevealed(false);
      setCurrentIndex((index) => words.length > 1 ? (index + 1) % words.length : 0);
    } catch (error) {
      setStorageError(error instanceof Error ? `Perubahan tidak tersimpan: ${error.message}` : "Perubahan kosakata tidak dapat disimpan.");
    }
  }

  function shuffleReview() {
    const now = Date.now();
    const order = ENGLISH_A1_VOCABULARY
      .filter((word) => {
        const entry = progress[word.id];
        return (topic === "Semua topik" || word.topic === topic) &&
          (!entry || entry.status === "review" || Date.parse(entry.dueAt) <= now);
      })
      .map((word) => word.id);
    for (let index = order.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
    }
    setRandomOrder(order);
    setRandomReview(true);
    setFilter("Perlu diulang");
  }

  function speakWord(word: string) {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      setAudioError("Text-to-speech tidak tersedia di browser ini.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.onerror = (event) => setAudioError(`Pelafalan audio tidak dapat diputar: ${event.error}.`);
    window.speechSynthesis.speak(utterance);
    setAudioError(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-zinc-500">A1 • latihan pengambilan kembali</p>
          <h1 className="mt-1 text-2xl font-bold">Vocabulary review</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">Baca kata, coba ingat artinya sebelum membuka kartu, lalu tandai berdasarkan kemampuan mengingatmu. Membuka kartu tidak dihitung sebagai penguasaan. Jadwal disimpan lokal di browser ini.</p>
        </div>
        <Link href="/pillar/inggris/curriculum" className={btnCls("ghost")}><BookOpen className="h-4 w-4" />Kurikulum</Link>
      </div>

      <Card className="grid gap-4 sm:grid-cols-3">
        <div><p className="text-sm text-zinc-500">Kosakata dalam set</p><p className="mt-1 text-2xl font-semibold">{ENGLISH_A1_VOCABULARY.length}</p></div>
        <div><p className="text-sm text-zinc-500">Ditandai dapat diingat</p><p className="mt-1 text-2xl font-semibold">{learnedCount}</p></div>
        <div><p className="text-sm text-zinc-500">Baru atau perlu diulang</p><p className="mt-1 text-2xl font-semibold">{dueCount}</p></div>
      </Card>

      {storageError && <Card role="alert" className="border-amber-500/30 text-sm text-amber-200">{storageError} Data lama dipertahankan dan perubahan belum tersimpan.</Card>}

      <Card className="flex flex-wrap gap-3">
        <label className="text-sm text-zinc-400">Topik
          <select className="ml-2 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1" value={topic} onChange={(event) => { setRandomReview(false); setTopic(event.target.value); }}>
            {topics.map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <label className="text-sm text-zinc-400">Tampilkan
          <select className="ml-2 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1" value={filter} onChange={(event) => { setRandomReview(false); setFilter(event.target.value); }}>
            {["Semua", "Baru", "Perlu diulang", "Sudah dijadwalkan"].map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <Button type="button" variant="ghost" onClick={shuffleReview}><RotateCcw className="h-4 w-4" />Review perlu diulang</Button>
      </Card>

      {hydrated && !current ? (
        <Card className="text-center">
          <h2 className="font-semibold">Tidak ada kartu pada filter ini</h2>
          <p className="mt-2 text-sm text-zinc-500">Pilih topik/filter lain atau kembali lagi saat jadwal review tiba.</p>
        </Card>
      ) : current ? (
        <Card className="mx-auto max-w-2xl space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div><p className="text-xs text-zinc-500">{current.topic} • part of speech: {current.partOfSpeech}</p><h2 className="mt-2 text-3xl font-bold">{current.word}</h2></div>
            <Button type="button" variant="ghost" onClick={() => speakWord(current.word)} aria-label={`Dengarkan pelafalan ${current.word}`}><AudioLines className="h-4 w-4" />Dengarkan</Button>
          </div>
          <p className="text-sm text-zinc-500">Sebelum membuka: coba ucapkan arti dan buat satu kalimat sendiri.</p>
          {audioError && <p role="alert" className="text-sm text-amber-300">{audioError}</p>}
          {!revealed ? (
            <Button type="button" onClick={() => setRevealed(true)}>Tampilkan arti dan contoh</Button>
          ) : (
            <div className="space-y-4 rounded-lg bg-zinc-950 p-4">
              <div><p className="text-xs uppercase tracking-wide text-zinc-600">Arti</p><p className="mt-1 text-lg">{current.meaning}</p></div>
              <div><p className="text-xs uppercase tracking-wide text-zinc-600">Contoh</p><p className="mt-1 text-sm text-zinc-300">{current.example}</p></div>
              <div><p className="text-xs uppercase tracking-wide text-zinc-600">Collocation</p><p className="mt-1 text-sm text-zinc-300">{current.collocation}</p></div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" onClick={() => saveWord(current.id, true)} disabled={!hydrated || Boolean(storageError)}>Saya ingat</Button>
                <Button type="button" variant="ghost" onClick={() => saveWord(current.id, false)} disabled={!hydrated || Boolean(storageError)}>Perlu diulang</Button>
              </div>
              <p className="text-xs text-zinc-600">Menandai “Saya ingat” menjadwalkan review berikutnya; ini laporan diri, bukan bukti sertifikasi atau skor otomatis.</p>
            </div>
          )}
          <p className="text-xs text-zinc-600">Kartu {currentIndex + 1} dari {words.length}{progress[current.id] ? ` • kotak review ${progress[current.id].box}/5` : " • belum dijadwalkan"}</p>
        </Card>
      ) : null}
    </div>
  );
}
