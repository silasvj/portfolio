"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/projects", label: "Projetos" },
  { href: "/experience", label: "Experiência" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "Sobre" },
];

const navLinksEn = [
  { href: "/en/projects", label: "Projects" },
  { href: "/en/experience", label: "Experience" },
  { href: "/en/skills", label: "Skills" },
  { href: "/en/about", label: "About" },
];

function LanguageSwitcher() {
  const pathname = usePathname();
  
  const isEn = pathname.startsWith("/en");
  
  const targetLang = isEn ? "PT" : "EN";
  const targetPath = isEn 
    ? pathname.replace("/en", "") || "/" 
    : `/en${pathname}`;
  
  return (
    <Link
      href={targetPath}
      className="text-xs uppercase tracking-widest text-[#7878a0] hover:text-[#00e5ff] transition-colors"
    >
      {targetLang}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const links = isEn ? navLinksEn : navLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link 
          href={isEn ? "/en" : "/"}
          className="text-lg font-bold tracking-wider text-gradient"
        >
          Silas Vasques
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
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
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href={isEn ? "/en/about#contact" : "/about#contato"}
            className="btn btn-primary text-sm py-2 px-4"
          >
            {isEn ? "Let's talk" : "Fale comigo"}
          </Link>
        </div>
      </div>
    </header>
  );
}