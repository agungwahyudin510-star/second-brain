# Second Brain

Personal learning platform built with Next.js 14 App Router, TypeScript, Tailwind CSS, and React. Structured courses are available for **Ekonomi & Literasi Keuangan** and **Psychology & Behavioral Science**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Learning routes

- `/pillar/ekonomi/curriculum` — eight chapters and 80 learning sections
- `/pillar/ekonomi/learn/[lessonId]` — lesson content and interactive examples
- `/pillar/ekonomi/quiz/[chapterId]` — chapter quizzes and self-assessed written responses
- `/pillar/ekonomi/progress` — lesson completion and assessment history
- `/pillar/ekonomi/exam` — final assessment, available after passing all chapter quizzes
- `/pillar/ekonomi/glossary` — economics glossary
- `/pillar/psikologi/curriculum` — eight psychology chapters and their learning sections
- `/pillar/psikologi/learn/[lessonId]` — psychology lesson content and interactive diagrams
- `/pillar/psikologi/quiz/[chapterId]` — chapter quizzes and self-assessed written responses
- `/pillar/psikologi/progress` — psychology lesson completion and assessment history
- `/pillar/psikologi/exam` — final exam, available after passing all psychology chapter quizzes
- `/pillar/psikologi/glossary` — psychology glossary and verified OpenStax reading links

The chapter quiz has eight multiple-choice questions worth 60 points and two written responses worth 20 points each. Written responses use a visible self-assessment rubric; they are not evaluated by AI. A score of 70/100 passes a chapter and unlocks the next chapter.

Economics and psychology visualizations use local SVG/CSS. Simulations are illustrative, not research data or psychological assessments. The final exams sample one multiple-choice question from each chapter and display a chapter-level review signal.

## Progress storage

Lesson completion and quiz attempts use browser `localStorage`. Progress is local to this browser and device, is not synchronized, and may be lost if browser data is cleared. Written responses are not stored. No backend or account synchronization is configured.

English and Web3 remain available in navigation, but are explicitly marked as under development and are not presented as complete structured courses. Psychology is educational and does not diagnose or replace professional mental-health care. The behavioral-economics overview still needs dedicated scholarly references before it can be treated as a literature review.

## Validation

```bash
npx tsc --noEmit
npm run lint
npm run build
```
