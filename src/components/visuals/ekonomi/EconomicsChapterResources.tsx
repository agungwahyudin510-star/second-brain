import { Card } from "@/components/ui";
import type { CurriculumModule } from "@/lib/types";

export default function EconomicsChapterResources({ module }: { module: CurriculumModule }) {
  const resources = module.chapterResources;
  if (!resources) return null;

  return (
    <section className="space-y-4 border-t border-zinc-800 pt-6">
      <h2 className="text-xl font-semibold">Penutup {module.title}</h2>
      <Card>
        <h3 className="font-semibold">Ringkasan bab</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
          {resources.summary.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </Card>
      <Card>
        <h3 className="font-semibold">Glosarium • Indonesian–English</h3>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {resources.glossary.map(({ term, english, definition }) => (
            <div key={term} className="rounded-lg bg-zinc-950 p-3">
              <dt className="font-medium">{term} <span className="text-sky-300">— {english}</span></dt>
              <dd className="mt-1 text-sm leading-relaxed text-zinc-400">{definition}</dd>
            </div>
          ))}
        </dl>
      </Card>
      <div>
        <h3 className="mb-3 font-semibold">Latihan terbuka dengan pembahasan langkah demi langkah</h3>
        <div className="space-y-3">
          {resources.exercises.map(({ prompt, solution }, index) => (
            <Card key={prompt}>
              <h4 className="font-medium">{index + 1}. {prompt}</h4>
              <details className="mt-3 text-sm">
                <summary className="min-h-10 cursor-pointer py-2 text-emerald-300">Lihat pembahasan</summary>
                <p className="whitespace-pre-line leading-relaxed text-zinc-300">{solution}</p>
              </details>
            </Card>
          ))}
        </div>
      </div>
      <Card>
        <h3 className="font-semibold">Bacaan lanjutan</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          {resources.furtherReading.map(({ title, authors }) => <li key={title}><cite>{title}</cite> — {authors}</li>)}
        </ul>
      </Card>
    </section>
  );
}
