"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Pillar } from "@/lib/pillars";
import type { Note } from "@/lib/types";
import { useNotes } from "@/context/NotesProvider";
import { Button, Card, inputCls } from "./ui";
import MarkdownView from "./MarkdownView";

export default function NoteForm({ pillar, note }: { pillar: Pillar; note?: Note }) {
  const router = useRouter();
  const { addNote, updateNote } = useNotes();

  const [title, setTitle] = useState(note?.title ?? "");
  const [category, setCategory] = useState(note?.category ?? pillar.categories[0]);
  const [tags, setTags] = useState(note?.tags.join(", ") ?? "");
  const [content, setContent] = useState(note?.content ?? "");
  const [preview, setPreview] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const data = {
      pillar: pillar.slug,
      title: title.trim(),
      category,
      content,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
    };
    if (note) {
      updateNote(note.id, data);
      router.push(`/pillar/${pillar.slug}/${note.id}`);
    } else {
      const id = addNote(data);
      router.push(`/pillar/${pillar.slug}/${id}`);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input placeholder="Judul catatan" value={title} onChange={(e) => setTitle(e.target.value)} className={inputCls} />
      <div className="grid gap-3 sm:grid-cols-2">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls}>
          {pillar.categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input placeholder="Tags (pisahkan dengan koma)" value={tags} onChange={(e) => setTags(e.target.value)} className={inputCls} />
      </div>

      <div className="flex gap-2">
        <Button type="button" variant={preview ? "ghost" : "primary"} onClick={() => setPreview(false)}>Tulis</Button>
        <Button type="button" variant={preview ? "primary" : "ghost"} onClick={() => setPreview(true)}>Preview</Button>
      </div>

      {preview ? (
        <Card className="min-h-[300px]">
          <MarkdownView content={content || "*Belum ada isi*"} />
        </Card>
      ) : (
        <textarea
          rows={14}
          placeholder="Tulis dengan Markdown: # Judul, **tebal**, - list, > kutipan, tabel, dll."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${inputCls} font-mono`}
        />
      )}

      <div className="flex gap-2">
        <Button type="submit">{note ? "Simpan Perubahan" : "Simpan Catatan"}</Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>Batal</Button>
      </div>
    </form>
  );
}