"use client";
import { notFound, useParams } from "next/navigation";
import { getPillar } from "@/lib/pillars";
import { useNotes } from "@/context/NotesProvider";
import NoteForm from "@/components/NoteForm";

export default function EditNotePage() {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const pillar = getPillar(slug);
  const { notes, hydrated } = useNotes();
  const note = notes.find((n) => n.id === id);

  if (!pillar) return notFound();
  if (!hydrated) return <p className="text-zinc-500">Memuat...</p>;
  if (!note) return <p>Catatan tidak ditemukan.</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Catatan</h1>
      <NoteForm pillar={pillar} note={note} />
    </div>
  );
}