"use client";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { PILLARS } from "@/lib/pillars";
import { QUOTES } from "@/data/quotes";
import { useNotes } from "@/context/NotesProvider";
import PillarCard from "@/components/PillarCard";
import StudyLog from "@/components/StudyLog";
import { Card } from "@/components/ui";

const USER_NAME = "Learner"; // ganti dengan namamu

export default function Dashboard() {
  const { notes } = useNotes();
  const [greeting, setGreeting] = useState("Halo");
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 11 ? "Selamat pagi" : h < 15 ? "Selamat siang" : h < 18 ? "Selamat sore" : "Selamat malam");
    setQuote(QUOTES[new Date().getDate() % QUOTES.length]);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{greeting}, {USER_NAME} 👋</h1>
        <p className="mt-1 text-zinc-500">Investasi terbaik adalah investasi pada otakmu sendiri.</p>
      </div>

      <Card className="flex gap-3 border-amber-500/20 bg-amber-500/5">
        <Quote className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
        <div>
          <p className="italic">“{quote.text}”</p>
          <p className="mt-1 text-sm text-zinc-500">- {quote.author}</p>
        </div>
      </Card>

      <section className="grid gap-4 sm:grid-cols-2">
        {PILLARS.map((p) => (
          <PillarCard key={p.slug} pillar={p} count={notes.filter((n) => n.pillar === p.slug).length} />
        ))}
      </section>

      <StudyLog />
    </div>
  );
}