"use client";
import { notFound, useParams } from "next/navigation";
import { getPillar } from "@/lib/pillars";
import NoteForm from "@/components/NoteForm";

export default function NewNotePage() {
  const { slug } = useParams<{ slug: string }>();
  const pillar = getPillar(slug);
  if (!pillar) return notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Catatan Baru · {pillar.title}</h1>
      <NoteForm pillar={pillar} />
    </div>
  );
}