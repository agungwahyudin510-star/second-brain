"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, NotebookPen } from "lucide-react";
import { getPillar } from "@/lib/pillars";
import { findLesson } from "@/lib/curriculum";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import MarkdownView from "@/components/MarkdownView";
import { Button, btnCls } from "@/components/ui";

export default function LessonPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const pillar = getPillar(slug);
  const [done, setDone] = useLocalStorage<string[]>("sb-lesson-done", []);

  const found = findLesson(slug, lessonId);
  if (!pillar || !found) return notFound();

  const { lesson, prev, next } = found;
  const isDone = done.includes(lesson.id);

  const toggleDone = () =>
    setDone((p) => (p.includes(lesson.id) ? p.filter((x) => x !== lesson.id) : [...p, lesson.id]));

  return (
    <div className="space-y-6">
      <Link
        href={`/pillar/${slug}/curriculum`}
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200"
      >
        <ArrowLeft className="h-4 w-4" /> Kurikulum {pillar.title}
      </Link>

      <div className="flex items-center gap-3 text-xs text-zinc-500">
        <span>{lesson.moduleTitle}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> {lesson.minutes} menit
        </span>
      </div>

      <MarkdownView content={lesson.content} />

      <div className="flex flex-wrap gap-2 border-t border-zinc-800 pt-5">
        <Button variant={isDone ? "ghost" : "primary"} onClick={toggleDone}>
          <CheckCircle2 className="h-4 w-4" /> {isDone ? "Selesai (batalkan)" : "Tandai selesai"}
        </Button>
        <Link href={`/pillar/${slug}/new`} className={btnCls("ghost")}>
          <NotebookPen className="h-4 w-4" /> Buat catatan
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link href={`/pillar/${slug}/learn/${prev.id}`} className={btnCls("ghost", "justify-start")}>
            <ArrowLeft className="h-4 w-4 shrink-0" /> <span className="truncate">{prev.title}</span>
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/pillar/${slug}/learn/${next.id}`} className={btnCls("ghost", "justify-end")}>
            <span className="truncate">{next.title}</span> <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}