"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { BookOpen, Plus, Search } from "lucide-react";
import { getPillar } from "@/lib/pillars";
import { useNotes } from "@/context/NotesProvider";
import { Badge, Card, btnCls, inputCls } from "@/components/ui";
import { cn, formatDate } from "@/lib/utils";


export default function PillarPage() {
  const { slug } = useParams<{ slug: string }>();
  const pillar = getPillar(slug);
  const { notes } = useNotes();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return notes.filter(
      (n) =>
        n.pillar === slug &&
        (category === "Semua" || n.category === category) &&
        (!q || n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q) || n.tags.some((t) => t.toLowerCase().includes(q)))
    );
  }, [notes, slug, query, category]);

  if (!pillar) return notFound();
  const Icon = pillar.icon;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={cn("rounded-lg p-2.5", pillar.accent.bg)}>
            <Icon className={cn("h-6 w-6", pillar.accent.text)} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{pillar.title}</h1>
            <p className="text-sm text-zinc-500">{pillar.description}</p>
            {slug !== "ekonomi" && slug !== "psikologi" && slug !== "inggris" && <p className="mt-1 text-xs text-amber-400">Materi terstruktur untuk bidang ini sedang dikembangkan.</p>}
            {slug === "inggris" && <p className="mt-1 text-xs text-sky-300">Jalur A1 aktif • A2–B2 masih berupa peta kurikulum.</p>}
            {slug === "web3" && <p className="mt-1 text-xs text-violet-300">Fase 1 aktif • Fase 2–8 masih berupa roadmap.</p>}
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <Link href={`/pillar/${slug}/curriculum`} className={btnCls("ghost")}>
            <BookOpen className="h-4 w-4" /> Kurikulum
          </Link>
          <Link href={`/pillar/${slug}/new`} className={btnCls("primary")}>
            <Plus className="h-4 w-4" /> Catatan
          </Link>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-600" />
        <input placeholder="Cari judul, isi, atau tag..." value={query} onChange={(e) => setQuery(e.target.value)} className={cn(inputCls, "pl-9")} />
      </div>

      <div className="flex flex-wrap gap-2">
        {["Semua", ...pillar.categories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition",
              category === c ? "border-zinc-100 bg-zinc-100 text-zinc-900" : "border-zinc-800 text-zinc-400 hover:bg-zinc-900"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Card className="text-center text-sm text-zinc-500">Belum ada catatan yang cocok.</Card>
      ) : (
        <div className="grid gap-3">
          {filtered.map((n) => (
            <Link key={n.id} href={`/pillar/${slug}/${n.id}`}>
              <Card className="transition hover:bg-zinc-900">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{n.title}</h3>
                  <Badge className={cn(pillar.accent.text, pillar.accent.border)}>{n.category}</Badge>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                  {n.content.replace(/[#*>`|\-\[\]]/g, " ").replace(/\s+/g, " ").slice(0, 160)}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-600">
                  {n.tags.map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                  <span className="ml-auto">{formatDate(n.updatedAt)}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}