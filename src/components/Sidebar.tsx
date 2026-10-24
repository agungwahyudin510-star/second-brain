"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Layers, ClipboardCheck, X, Sparkles, BookOpen, ChartNoAxesColumn, GraduationCap, Library, Brain, Blocks } from "lucide-react";
import { PILLARS } from "@/lib/pillars";
import { cn } from "@/lib/utils";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  const NavLink = ({ href, label, Icon, color }: { href: string; label: string; Icon: typeof Layers; color?: string }) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
          active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
        )}
      >
        <Icon className={cn("h-4 w-4", color)} />
        {label}
      </Link>
    );
  };

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={onClose} />}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-zinc-800 bg-zinc-950 p-4 transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-6 flex shrink-0 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-amber-400" />
            Second Brain
          </Link>
          <button onClick={onClose} className="lg:hidden" aria-label="Tutup menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain">
          <NavLink href="/" label="Dashboard" Icon={LayoutDashboard} />
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">Circle Competency</p>
          {PILLARS.map((p) => (
            <NavLink key={p.slug} href={`/pillar/${p.slug}`} label={p.title} Icon={p.icon} color={p.accent.text} />
          ))}
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">Belajar Ekonomi</p>
          <NavLink href="/pillar/ekonomi/curriculum" label="Kurikulum" Icon={BookOpen} />
          <NavLink href="/pillar/ekonomi/progress" label="Progres & nilai" Icon={ChartNoAxesColumn} />
          <NavLink href="/pillar/ekonomi/exam" label="Ujian akhir" Icon={GraduationCap} />
          <NavLink href="/pillar/ekonomi/glossary" label="Glosarium" Icon={Library} />
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">Psychology &amp; Behavioral</p>
          <NavLink href="/pillar/psikologi/curriculum" label="Kurikulum psikologi" Icon={Brain} color="text-violet-400" />
          <NavLink href="/pillar/psikologi/progress" label="Progres psikologi" Icon={ChartNoAxesColumn} color="text-violet-400" />
          <NavLink href="/pillar/psikologi/exam" label="Final exam psikologi" Icon={GraduationCap} color="text-violet-400" />
          <NavLink href="/pillar/psikologi/glossary" label="Glosarium psikologi" Icon={Library} color="text-violet-400" />
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">English Language Learning</p>
          <NavLink href="/pillar/inggris/curriculum" label="Kurikulum A1–B2" Icon={BookOpen} color="text-sky-400" />
          <NavLink href="/pillar/inggris/placement" label="Tes penempatan" Icon={ClipboardCheck} color="text-sky-400" />
          <NavLink href="/pillar/inggris/progress" label="Progres English" Icon={ChartNoAxesColumn} color="text-sky-400" />
          <NavLink href="/pillar/inggris/vocabulary" label="Vocabulary review" Icon={Library} color="text-sky-400" />
          <NavLink href="/pillar/inggris/exam" label="Final assessment A1" Icon={GraduationCap} color="text-sky-400" />
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">Web3 &amp; Technology</p>
          <NavLink href="/pillar/web3/curriculum" label="Kurikulum 8 fase" Icon={Blocks} color="text-violet-400" />
          <NavLink href="/pillar/web3/progress" label="Progres Web3" Icon={ChartNoAxesColumn} color="text-violet-400" />
          <NavLink href="/pillar/web3/exam" label="Final assessment Fase 1" Icon={GraduationCap} color="text-violet-400" />
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">Interactive Tools</p>
          <NavLink href="/tools/flashcards" label="Flashcards" Icon={Layers} />
          <NavLink href="/tools/mindset-audit" label="Mindset Audit" Icon={ClipboardCheck} />
        </nav>
      </aside>
    </>
  );
}