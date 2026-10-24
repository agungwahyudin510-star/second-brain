"use client";

import type { ReactNode } from "react";
import MarkdownView from "@/components/MarkdownView";
import { ECONOMICS_VISUALS } from "./index";

export default function EconomicsContent({ content }: { content: string }) {
  const visualMarker = /\[\[visual:([a-z0-9-]+)\]\]/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = visualMarker.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<MarkdownView key={`markdown-${index++}`} content={content.slice(lastIndex, match.index)} responsiveTables />);
    }

    const Visual = ECONOMICS_VISUALS[match[1] as keyof typeof ECONOMICS_VISUALS];
    parts.push(Visual
      ? <Visual key={`visual-${index++}`} />
      : <p key={`unknown-visual-${index++}`} role="alert" className="my-4 rounded-lg border border-rose-500/40 p-3 text-sm text-rose-200">
          Visual ekonomi tidak ditemukan di registry: {match[1]}
        </p>);
    lastIndex = visualMarker.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push(<MarkdownView key={`markdown-${index}`} content={content.slice(lastIndex)} responsiveTables />);
  }

  return <>{parts}</>;
}
