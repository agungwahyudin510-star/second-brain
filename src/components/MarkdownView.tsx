import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownView({ content, responsiveTables = false }: { content: string; responsiveTables?: boolean }) {
  const components: Components | undefined = responsiveTables
    ? {
        table: ({ children }) => (
          <div className="my-4 w-full min-w-0 max-w-full overflow-x-auto">
            <table className="min-w-[36rem]">{children}</table>
          </div>
        ),
      }
    : undefined;

  return (
    <div className={`prose prose-invert prose-zinc max-w-none prose-a:text-sky-400 prose-blockquote:border-amber-500/50 prose-code:rounded prose-code:bg-zinc-800 prose-code:px-1 prose-code:before:content-none prose-code:after:content-none ${responsiveTables ? "w-full min-w-0" : ""}`}>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]} skipHtml>{content}</ReactMarkdown>
    </div>
  );
}