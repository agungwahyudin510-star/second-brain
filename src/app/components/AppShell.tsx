"use client";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen lg:pl-64">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-zinc-800 bg-zinc-950/80 px-4 py-3 backdrop-blur lg:hidden">
        <button onClick={() => setOpen(true)} aria-label="Buka menu">
          <Menu className="h-5 w-5" />
        </button>
        <span className="font-semibold">Second Brain</span>
      </header>
      <main className="mx-auto max-w-5xl p-4 sm:p-8">{children}</main>
    </div>
  );
}