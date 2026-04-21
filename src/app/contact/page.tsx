"use client";

import { useState } from "react";
import { ScrollAnimate } from "@/components/scroll-animate";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="contato" className="py-24 bg-[#10101a] border-t border-[rgba(124,111,255,0.18)]">
      <div className="container mx-auto px-4 max-w-xl">
        <ScrollAnimate className="text-center">
          <p className="section-label mb-2">Contato</p>
          <h1 className="section-title text-[#e8e8f4] mb-6">Vamos criar algo incrível?</h1>
          <div className="section-line mx-auto mb-8" style={{ margin: "1.5rem auto" }} />
          <p className="text-[#7878a0] leading-relaxed mb-8">
            Aberto a projetos freelance, oportunidades de tempo integral e colaborações interessantes em Fintech, HealthTech e SaaS.
          </p>
        </ScrollAnimate>

        <ScrollAnimate className="card p-8" delay={100}>
          <h2 className="text-xl fw-semibold text-[#e8e8f4] mb-2">Enviar mensagem</h2>
          <p className="text-[#7878a0] mb-6">Preencha os dados abaixo que retorno em breve.</p>
          
          {status === "sent" ? (
            <div className="text-center py-8">
              <p className="text-lg fw-semibold text-[#e8e8f4] mb-2">Mensagem enviada!</p>
              <p className="text-[#7878a0] mb-6">Em breve retornarei seu contato.</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setStatus("idle")}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[#e8e8f4]">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(124,111,255,0.18)] bg-[#10101a] text-[#e8e8f4] placeholder:text-[#7878a0] focus:border-[#7c6fff] focus:ring-3 focus:ring-[#7c6fff]/20 transition-colors outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#e8e8f4]">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(124,111,255,0.18)] bg-[#10101a] text-[#e8e8f4] placeholder:text-[#7878a0] focus:border-[#7c6fff] focus:ring-3 focus:ring-[#7c6fff]/20 transition-colors outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#e8e8f4]">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem…"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(124,111,255,0.18)] bg-[#10101a] text-[#e8e8f4] placeholder:text-[#7878a0] focus:border-[#7c6fff] focus:ring-3 focus:ring-[#7c6fff]/20 transition-colors outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando…" : "Enviar mensagem"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Erro ao enviar. Tente novamente ou mande email diretamente.
                </p>
              )}
            </form>
          )}
        </ScrollAnimate>

        <ScrollAnimate className="mt-8 text-center" delay={200}>
          <p className="section-label mb-4">Outras formas de contato</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:silasvj@gmail.com"
              className="text-[#00e5ff] hover:text-[#7c6fff] transition-colors text-lg font-semibold"
            >
              silasvj@gmail.com
            </a>
          </div>
          <div className="flex gap-4 justify-center flex-wrap mt-4">
            <a
              href="https://linkedin.com/in/silasvasques"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </div>
  );
}