import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NotesProvider } from "@/context/NotesProvider";
import AppShell from "@/components/AppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Second Brain",
  description: "Personal Learning Hub: Ekonomi, Inggris, Web3, Psikologi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className={inter.className}>
        <NotesProvider>
          <AppShell>{children}</AppShell>
        </NotesProvider>
      </body>
    </html>
  );
}