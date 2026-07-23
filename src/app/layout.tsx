import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CursorProvider } from "@/components/cursor-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silas Vasques — AI Design Engineer",
  description: "Product Designer com 8 anos de experiência. Projeto, valido e entrego no código.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CursorProvider />
          <div className="grid-pattern fixed inset-0 pointer-events-none z-0 opacity-[0.25]" />
          <div className="fixed inset-0 overflow-x-hidden">
            <Header />
            <main className="pt-16 relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}