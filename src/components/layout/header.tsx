"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/projects", label: "Projetos" },
  { href: "/#skills", label: "Skills" },
  { href: "/#exp", label: "Experiência" },
  { href: "/contact", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link 
          href="/" 
          className="text-lg font-bold tracking-wider text-gradient"
        >
          SV.
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest transition-colors ${
                pathname === link.href
                  ? "text-[#00e5ff]"
                  : "text-[#7878a0] hover:text-[#00e5ff]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="btn btn-primary text-sm py-2 px-4"
        >
          Vamos conversar
        </Link>
      </div>
    </header>
  );
}