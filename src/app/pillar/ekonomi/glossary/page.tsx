import Link from "next/link";
import { Card } from "@/components/ui";
import { ECONOMICS_GLOSSARY } from "@/data/curriculum/ekonomi/glossary";

export default function EconomicsGlossaryPage() {
  return (
    <div className="space-y-6">
      <Link href="/pillar/ekonomi/curriculum" className="text-sm text-zinc-400 hover:text-white">← Kembali ke kurikulum</Link>
      <div>
        <p className="text-sm text-zinc-500">Bab aktif: fondasi dan pasar</p>
        <h1 className="mt-1 text-2xl font-bold">Glosarium Ekonomi / Financial English</h1>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {ECONOMICS_GLOSSARY.map(({ term, english, definition, chapter }) => (
          <Card key={term}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="font-semibold">{term}</h2>
              <span className="text-xs text-zinc-500">{chapter}</span>
            </div>
            <p className="mt-1 text-sm text-sky-300">{english}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{definition}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
