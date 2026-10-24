import { Landmark, Languages, Blocks, Brain, type LucideIcon } from "lucide-react";
import type { PillarSlug } from "./types";

export interface Pillar {
  slug: PillarSlug;
  title: string;
  description: string;
  icon: LucideIcon;
  categories: string[];
  accent: { text: string; bg: string; border: string; bar: string };
}

export const PILLARS: Pillar[] = [
  {
    slug: "ekonomi",
    title: "Ekonomi",
    description: "Micro/Macro, siklus pasar, inflasi, kebijakan moneter.",
    icon: Landmark,
    categories: ["Mikroekonomi", "Makroekonomi", "Siklus Pasar", "Inflasi", "Kebijakan Moneter"],
    accent: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", bar: "bg-emerald-500" },
  },
  {
    slug: "inggris",
    title: "Bahasa Inggris",
    description: "Kurikulum bahasa Inggris bertahap berbasis level CEFR dan komunikasi nyata.",
    icon: Languages,
    categories: ["Grammar", "Vocabulary", "Reading", "Listening", "Writing", "Speaking"],
    accent: { text: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30", bar: "bg-sky-500" },
  },
  {
    slug: "web3",
    title: "Web3 & Tech",
    description: "Blockchain, smart contract, DeFi, desentralisasi.",
    icon: Blocks,
    categories: ["Blockchain", "Smart Contract", "DeFi", "Desentralisasi"],
    accent: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", bar: "bg-violet-500" },
  },
  {
    slug: "psikologi",
    title: "Psikologi & Behavioral",
    description: "Fear & greed, bias kognitif, pengambilan keputusan.",
    icon: Brain,
    categories: ["Cognitive Bias", "Fear & Greed", "Decision Making", "Human Behavior"],
    accent: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", bar: "bg-amber-500" },
  },
];

export const getPillar = (slug: string) => PILLARS.find((p) => p.slug === slug);