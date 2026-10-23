"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Layers, ClipboardCheck, X, Sparkles } from "lucide-react";
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
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-amber-400" />
            Second Brain
          </Link>
          <button onClick={onClose} className="lg:hidden" aria-label="Tutup menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-1">
          <NavLink href="/" label="Dashboard" Icon={LayoutDashboard} />
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">Circle Competency</p>
          {PILLARS.map((p) => (
            <NavLink key={p.slug} href={`/pillar/${p.slug}`} label={p.title} Icon={p.icon} color={p.accent.text} />
          ))}
          <p className="px-3 pb-1 pt-5 text-xs uppercase tracking-wider text-zinc-600">Interactive Tools</p>
          <NavLink href="/tools/flashcards" label="Flashcards" Icon={Layers} />
          <NavLink href="/tools/mindset-audit" label="Mindset Audit" Icon={ClipboardCheck} />
        </nav>
      </aside>
    </>
  );
}