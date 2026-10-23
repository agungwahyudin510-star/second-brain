"use client";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { getPillar } from "@/lib/pillars";
import { useNotes } from "@/context/NotesProvider";
import MarkdownView from "@/components/MarkdownView";
import { Badge, Button, btnCls } from "@/components/ui";
import { cn, formatDate } from "@/lib/utils";

export default function NoteReaderPage() {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const router = useRouter();
  const pillar = getPillar(slug);
  const { notes, hydrated, deleteNote } = useNotes();
  const note = notes.find((n) => n.id === id);

  if (!pillar) return notFound();
  if (!hydrated) return <p className="text-zinc-500">Memuat...</p>;
  if (!note)
    return (
      <div className="space-y-3">
        <p>Catatan tidak ditemukan.</p>
        <Link href={`/pillar/${slug}`} className={btnCls("ghost")}>Kembali</Link>
      </div>
    );

  return (
    <div className="space-y-6">
      <Link href={`/pillar/${slug}`} className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200">
        <ArrowLeft className="h-4 w-4" /> {pillar.title}
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Badge className={cn(pillar.accent.text, pillar.accent.border)}>{note.category}</Badge>
          <span>Diperbarui {formatDate(note.updatedAt)}</span>
        </div>
        <div className="flex gap-2">
          <Link href={`/pillar/${slug}/${id}/edit`} className={btnCls("ghost")}>
            <Pencil className="h-4 w-4" /> Edit
          </Link>
          <Button
            variant="danger"
            onClick={() => {
              if (confirm("Hapus catatan ini?")) {
                deleteNote(id);
                router.push(`/pillar/${slug}`);
              }
            }}
          >
            <Trash2 className="h-4 w-4" /> Hapus
          </Button>
        </div>
      </div>

      <MarkdownView content={note.content} />

      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-zinc-800 pt-4 text-sm text-zinc-500">
          {note.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}