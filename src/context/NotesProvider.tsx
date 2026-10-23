"use client";
import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import type { Note } from "@/lib/types";
import { SEED_NOTES } from "@/data/notes";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { uid } from "@/lib/utils";

type NewNote = Omit<Note, "id" | "createdAt" | "updatedAt">;

interface Ctx {
  notes: Note[];
  hydrated: boolean;
  addNote: (n: NewNote) => string;
  updateNote: (id: string, n: NewNote) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<Ctx | null>(null);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes, hydrated] = useLocalStorage<Note[]>("sb-notes", SEED_NOTES);

  const addNote = useCallback(
    (n: NewNote) => {
      const id = uid();
      const now = new Date().toISOString();
      setNotes((p) => [{ ...n, id, createdAt: now, updatedAt: now }, ...p]);
      return id;
    },
    [setNotes]
  );

  const updateNote = useCallback(
    (id: string, n: NewNote) => {
      const now = new Date().toISOString();
      setNotes((p) => p.map((x) => (x.id === id ? { ...x, ...n, updatedAt: now } : x)));
    },
    [setNotes]
  );

  const deleteNote = useCallback(
    (id: string) => setNotes((p) => p.filter((x) => x.id !== id)),
    [setNotes]
  );

  const value = useMemo(
    () => ({ notes, hydrated, addNote, updateNote, deleteNote }),
    [notes, hydrated, addNote, updateNote, deleteNote]
  );

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes harus dipakai di dalam NotesProvider");
  return ctx;
}