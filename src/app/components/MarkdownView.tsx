import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownView({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-zinc max-w-none prose-a:text-sky-400 prose-blockquote:border-amber-500/50 prose-code:rounded prose-code:bg-zinc-800 prose-code:px-1 prose-code:before:content-none prose-code:after:content-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}