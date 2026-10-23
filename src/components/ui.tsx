import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...p }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-xl border border-zinc-800 bg-zinc-900/60 p-5", className)} {...p} />;
}

type Variant = "primary" | "ghost" | "danger";

export const btnCls = (variant: Variant = "primary", extra?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition disabled:opacity-50",
    variant === "primary" && "bg-zinc-100 text-zinc-900 hover:bg-white",
    variant === "ghost" && "border border-zinc-800 text-zinc-300 hover:bg-zinc-800/60",
    variant === "danger" && "border border-red-500/30 text-red-400 hover:bg-red-500/10",
    extra
  );

export function Button({
  variant = "primary",
  className,
  ...p
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={btnCls(variant, className)} {...p} />;
}

export function Badge({ className, ...p }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400", className)}
      {...p}
    />
  );
}

export const inputCls =
  "w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none placeholder:text-zinc-600 focus:border-zinc-600";