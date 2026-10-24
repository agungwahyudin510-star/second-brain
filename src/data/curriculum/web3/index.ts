import type { CurriculumModule } from "@/lib/types";
import { WEB3_FOUNDATIONS } from "./fase1";
import { WEB3_PHASES } from "./phases";

const ROADMAP: CurriculumModule[] = WEB3_PHASES.slice(1).flatMap((phase) =>
  phase.chapters.map((chapter, chapterIndex) => ({
    id: `web-f${phase.number}-b${chapterIndex + 1}`,
    title: `Fase ${phase.number} • Bab ${chapterIndex + 1}: ${chapter.title}`,
    summary: chapter.focus,
    phaseNumber: phase.number,
    phaseTitle: phase.title,
    roadmapOnly: true,
    lessons: [{
      id: `web-f${phase.number}-b${chapterIndex + 1}-roadmap`,
      title: `Peta belajar: ${chapter.title}`,
      minutes: 8,
      content: `# ${chapter.title}

**Tujuan fase:** ${phase.goal}

## Cakupan bab
${chapter.focus}

## Proyek fase
${phase.project}

## Rencana latihan
1. Pelajari prasyarat fase sebelumnya dan tulis pertanyaan yang ingin dijawab.
2. Buat diagram konsep utama dan jelaskan alur dengan kata-katamu sendiri.
3. Kerjakan contoh di lingkungan lokal/testnet setelah materi teknis lengkap tersedia.
4. Tulis test checklist, expected result, dan catat batasan.
5. Tinjau kembali keamanan dan dokumentasikan risiko yang tersisa.

**Status kurikulum:** bab ini adalah roadmap, bukan pelajaran lengkap. Belum ada contoh runnable, asesmen, atau klaim kompetensi untuk fase ini. Akses pembelajaran fase ini dibuka setelah prasyarat fase terdahulu terpenuhi dan kontennya dikembangkan. Jangan gunakan dana nyata, private key, atau seed phrase untuk latihan.`,
    }],
  }))
);

export const WEB3: CurriculumModule[] = [...WEB3_FOUNDATIONS, ...ROADMAP];
