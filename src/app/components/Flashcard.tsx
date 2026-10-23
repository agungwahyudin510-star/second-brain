"use client";
import type { Flashcard as FC } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function Flashcard({ card, flipped, onFlip }: { card: FC; flipped: boolean; onFlip: () => void }) {
  const face =
    "absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center [backface-visibility:hidden]";

  return (
    <div className="cursor-pointer [perspective:1200px]" onClick={onFlip}>
      <div
        className={cn(
          "relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div className={face}>
          <p className="text-xs uppercase tracking-widest text-zinc-600">Vocabulary</p>
          <p className="mt-3 text-4xl font-bold">{card.front}</p>
          <p className="mt-6 text-xs text-zinc-600">Klik untuk melihat arti</p>
        </div>
        <div className={cn(face, "[transform:rotateY(180deg)]")}>
          <p className="text-2xl font-semibold text-sky-400">{card.back}</p>
          {card.example && <p className="mt-4 italic text-zinc-400">“{card.example}”</p>}
        </div>
      </div>
    </div>
  );
}
