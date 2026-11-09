import type { ReactNode } from "react";
import { Card } from "@/components/ui";

export default function VisualCard({
  title,
  caption,
  howToRead,
  children,
}: {
  title: string;
  caption: string;
  howToRead: string;
  children: ReactNode;
}) {
  return (
    <Card className="my-6 space-y-3 border-sky-500/20">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-300">Ilustrasi • data hipotetis</p>
        <h2 className="mt-1 text-lg font-semibold">{title}</h2>
      </div>
      {children}
      <p className="text-sm text-zinc-400">{caption}</p>
      <div className="rounded-lg bg-zinc-950 p-3 text-sm text-zinc-300">
        <span className="font-medium text-sky-300">Cara membaca grafik:</span> {howToRead}
      </div>
    </Card>
  );
}
