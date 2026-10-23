import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Pillar } from "@/lib/pillars";
import { cn } from "@/lib/utils";

const TARGET = 20; // target jumlah catatan per bidang

export default function PillarCard({ pillar, count }: { pillar: Pillar; count: number }) {
  const Icon = pillar.icon;
  const pct = Math.min(100, Math.round((count / TARGET) * 100));

  return (
    <Link
      href={`/pillar/${pillar.slug}`}
      className={cn(
        "group rounded-xl border bg-zinc-900/60 p-5 transition hover:bg-zinc-900",
        pillar.accent.border
      )}
    >
      <div className="flex items-start justify-between">
        <div className={cn("rounded-lg p-2.5", pillar.accent.bg)}>
          <Icon className={cn("h-5 w-5", pillar.accent.text)} />
        </div>
        <ArrowRight className="h-4 w-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-zinc-300" />
      </div>
      <h3 className="mt-4 font-semibold">{pillar.title}</h3>
      <p className="mt-1 text-sm text-zinc-500">{pillar.description}</p>
      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-zinc-500">
          <span>{count} catatan</span>
          <span>target {TARGET}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
          <div className={cn("h-full rounded-full transition-all", pillar.accent.bar)} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </Link>
  );
}