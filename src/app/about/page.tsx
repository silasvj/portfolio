"use client";

import { useEffect, useState } from "react";
import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";

export default function About() {
  const d = useDictionary();
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#contato") {
      setTimeout(() => {
        setShowGlow(true);
        setTimeout(() => setShowGlow(false), 2000);
      }, 500);
    }
  }, []);

  return (
    <div id="about" className="py-24 bg-[#08080f]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-[260px_1fr] gap-16 items-start">
            <ScrollAnimate className="mb-12 md:mb-0">
              <div className="w-[260px] h-[260px] rounded-2xl bg-[#18182a] border border-[rgba(124,111,255,0.18)] flex items-center justify-center relative">
                <span className="text-6xl font-extrabold text-gradient">SV</span>
              </div>
              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  📍 <span className="text-[#e8e8f4]">{d.about.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  🎓 <span className="text-[#e8e8f4]">{d.about.education}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  🌐 <span className="text-[#e8e8f4]">{d.about.language}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  🎤 <span className="text-[#e8e8f4]">{d.about.speaker}</span>
                </div>
              </div>
            </ScrollAnimate>

            <div>
              <ScrollAnimate delay={200}>
                <p className="section-label mb-2">{d.about.aboutMe}</p>
                <h1 className="section-title text-[#e8e8f4] mb-6">{d.about.name}</h1>
                <div className="section-line mb-8" />
              </ScrollAnimate>

              <ScrollAnimate delay={300}>
                <p className="text-[#7878a0] leading-relaxed mb-6">
                  {d.about.bio}
                </p>
                <p className="text-[#7878a0] leading-relaxed mb-6">
                  {d.about.bio2}
                </p>
                <p className="text-[#7878a0] leading-relaxed mb-8">
                  {d.about.bio3}
                </p>
              </ScrollAnimate>

              <div id="contato" className={showGlow ? "contact-glow" : ""}>
                <ScrollAnimate delay={350}>
                  <p className="section-label mb-6">{d.contact.contact}</p>
                  <div className="flex gap-4 flex-wrap items-center">
                    <a
                      href="mailto:silasvj@gmail.com"
                      className="text-[#00e5ff] hover:text-[#7c6fff] transition-colors text-lg font-semibold"
                    >
                      silasvj@gmail.com
                    </a>
                    <span className="text-[#7878a0]">|</span>
                    <a
                      href="https://linkedin.com/in/silasvasques"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      {d.contact.linkedin}
                    </a>
                  </div>

                </ScrollAnimate>
              </div>

              <ScrollAnimate delay={400} className="mt-16">
                <div className="flex flex-wrap gap-3">
                  {["Product Design", "AI Design Engineer", "Design Systems", "TypeScript · React", "UX Research", "Figma", "Fintech", "HealthTech"].map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                </div>
              </ScrollAnimate>

              <hr className="my-12 border-[rgba(124,111,255,0.18)]" />

              <ScrollAnimate>
                <p className="section-label mb-6">{d.about.formation}</p>
                <div className="space-y-4">
                  <div>
                    <p className="fw-semibold text-[#e8e8f4]">{d.about.degrees.design}</p>
                    <p className="text-[#7878a0]">{d.about.degrees.ufc}</p>
                  </div>
                  <div>
                    <p className="fw-semibold text-[#e8e8f4]">{d.about.degrees.uxCert}</p>
                    <p className="text-[#7878a0]">{d.about.degrees.google}</p>
                  </div>
                  <div>
                    <p className="fw-semibold text-[#e8e8f4]">{d.about.degrees.uxCourse}</p>
                    <p className="text-[#7878a0]">{d.about.degrees.udemy}</p>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<style jsx global>{`
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 0 rgba(124, 111, 255, 0); }
    25%, 75% { box-shadow: 0 0 30px rgba(124, 111, 255, 0.5), 0 0 60px rgba(0, 229, 255, 0.3); }
    50% { box-shadow: 0 0 40px rgba(124, 111, 255, 0.7), 0 0 80px rgba(0, 229, 255, 0.5); }
  }
  .contact-glow {
    animation: glow-pulse 2s ease-in-out;
    padding: 1.5rem;
    border-radius: 1rem;
  }
`}</style>