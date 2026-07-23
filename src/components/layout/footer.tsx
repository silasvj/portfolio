"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-[var(--border)] py-12 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Link href="/" className="text-xl font-bold tracking-wider text-gradient">
              Silas Vasques
            </Link>
            <p className="text-sm text-[var(--muted-foreground)]">
              Product Designer | AI Design Engineer · Fortaleza/CE · {currentYear}
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/silasvasques"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.notion.so/silasvj/Silas-Vasques-Meu-Portf-lio-como-Designer-e3513e4b53964d17a461813f30896c5a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Portfolio UX/UI ↗
            </a>
            <a
              href="mailto:silasvj@gmail.com"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
