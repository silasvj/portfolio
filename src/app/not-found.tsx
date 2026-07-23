import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-extrabold text-gradient mb-6">404</div>
        <h1 className="text-2xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
          Essa página não existe ou foi movida. Que tal voltar para o início e explorar os projetos?
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Voltar ao início
          </Link>
          <Link href="/projects" className="btn btn-outline">
            Ver projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
