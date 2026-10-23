"use client";
import { useCallback, useEffect, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import Flashcard from "@/components/Flashcard";
import { Button, Card, inputCls } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { SEED_CARDS } from "@/data/flashcards";
import type { CardProgress, Flashcard as FC } from "@/lib/types";
import { addDays, todayStr, uid } from "@/lib/utils";

const INTERVALS = [0, 1, 2, 4, 8, 16]; // hari per box Leitner (1-5)

export default function FlashcardsPage() {
  const [cards, setCards, h1] = useLocalStorage<FC[]>("sb-cards", SEED_CARDS);
  const [progress, setProgress, h2] = useLocalStorage<Record<string, CardProgress>>("sb-card-progress", {});
  const [queue, setQueue] = useState<string[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [built, setBuilt] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [example, setExample] = useState("");
  const hydrated = h1 && h2;

  const buildQueue = useCallback(() => {
    const t = todayStr();
    setQueue(cards.filter((c) => !progress[c.id] || progress[c.id].due <= t).map((c) => c.id));
    setFlipped(false);
  }, [cards, progress]);

  useEffect(() => {
    if (hydrated && !built) {
      buildQueue();
      setBuilt(true);
    }
  }, [hydrated, built, buildQueue]);

  const current = cards.find((c) => c.id === queue[0]);
  const mastered = cards.filter((c) => (progress[c.id]?.box ?? 0) >= 4).length;

  function answer(ok: boolean) {
    if (!current) return;
    const id = current.id;
    setProgress((p) => {
      const box = ok ? Math.min(5, (p[id]?.box ?? 0) + 1) : 1;
      return { ...p, [id]: { box, due: ok ? addDays(INTERVALS[box]) : todayStr() } };
    });
    setQueue((q) => (ok ? q.slice(1) : [...q.slice(1), q[0]]));
    setFlipped(false);
  }

  function addCard(e: React.FormEvent) {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;
    const card: FC = { id: uid(), front: front.trim(), back: back.trim(), example: example.trim() || undefined };
    setCards((p) => [...p, card]);
    setQueue((q) => [...q, card.id]);
    setFront("");
    setBack("");
    setExample("");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Vocabulary Flashcards</h1>
        <p className="text-sm text-zinc-500">
          Spaced repetition (sistem Leitner): kartu yang kamu ingat muncul semakin jarang.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <Card><p className="text-2xl font-bold">{queue.length}</p><p className="text-xs text-zinc-500">Perlu direview</p></Card>
        <Card><p className="text-2xl font-bold">{cards.length}</p><p className="text-xs text-zinc-500">Total kartu</p></Card>
        <Card><p className="text-2xl font-bold">{mastered}</p><p className="text-xs text-zinc-500">Dikuasai</p></Card>
      </div>

      {!hydrated ? (
        <p className="text-zinc-500">Memuat...</p>
      ) : current ? (
        <div className="space-y-4">
          <Flashcard card={current} flipped={flipped} onFlip={() => setFlipped((f) => !f)} />
          {flipped ? (
            <div className="grid grid-cols-2 gap-3">
              <Button variant="danger" onClick={() => answer(false)}><X className="h-4 w-4" /> Lupa</Button>
              <Button onClick={() => answer(true)}><Check className="h-4 w-4" /> Ingat</Button>
            </div>
          ) : (
            <Button variant="ghost" className="w-full" onClick={() => setFlipped(true)}>Tunjukkan jawaban</Button>
          )}
        </div>
      ) : (
        <Card className="space-y-3 text-center">
          <p className="text-lg font-semibold">🎉 Semua kartu hari ini selesai!</p>
          <p className="text-sm text-zinc-500">Kembali lagi besok untuk review berikutnya.</p>
          <Button variant="ghost" onClick={() => setProgress({})}>
            <RotateCcw className="h-4 w-4" /> Reset semua progres
          </Button>
        </Card>
      )}

      <Card>
        <h2 className="mb-3 font-semibold">Tambah Kartu Baru</h2>
        <form onSubmit={addCard} className="grid gap-2 sm:grid-cols-2">
          <input placeholder="Kata/frasa (English)" value={front} onChange={(e) => setFront(e.target.value)} className={inputCls} />
          <input placeholder="Arti" value={back} onChange={(e) => setBack(e.target.value)} className={inputCls} />
          <input placeholder="Contoh kalimat (opsional)" value={example} onChange={(e) => setExample(e.target.value)} className={`${inputCls} sm:col-span-2`} />
          <Button type="submit" className="sm:col-span-2">Tambah</Button>
        </form>
      </Card>
    </div>
  );
}