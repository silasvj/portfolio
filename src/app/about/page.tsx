import { experience } from "@/data/projects";
import { ScrollAnimate } from "@/components/scroll-animate";

export const metadata = {
  title: "Sobre | Silas Vasques",
  description: "Sobre Silas Vasques - Product Designer com 8 anos de experiência",
};

export default function About() {
  return (
    <div id="sobre" className="py-24 bg-[#08080f]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-[260px_1fr] gap-16 items-start">
            <ScrollAnimate className="mb-12 md:mb-0">
              <div className="w-[260px] h-[260px] rounded-2xl bg-[#18182a] border border-[rgba(124,111,255,0.18)] flex items-center justify-center relative">
                <span className="text-6xl font-extrabold text-gradient">SV</span>
              </div>
              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  📍 <span className="text-[#e8e8f4]">Fortaleza/CE — Brasil</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  🎓 <span className="text-[#e8e8f4]">Design — UFC</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  🌐 <span className="text-[#e8e8f4]">Inglês B2</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#7878a0]">
                  🎤 <span className="text-[#e8e8f4]">Palestrante TDC Recife 2023</span>
                </div>
              </div>
            </ScrollAnimate>

            <div>
              <ScrollAnimate delay={100}>
                <div className="flex gap-8 justify-center flex-wrap mb-8">
                  <div className="text-center">
                    <div className="text-3xl fw-bold text-gradient">8+</div>
                    <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">Anos de experiência</div>
                  </div>
                  <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                  <div className="text-center">
                    <div className="text-3xl fw-bold text-gradient">75%</div>
                    <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">De redução do tempo de processo</div>
                  </div>
                  <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                  <div className="text-center">
                    <div className="text-3xl fw-bold text-gradient">15k</div>
                    <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">Agendamentos/mês impactados</div>
                  </div>
                  <div className="w-px bg-[rgba(124,111,255,0.18)]" />
                  <div className="text-center">
                    <div className="text-3xl fw-bold text-gradient">28k</div>
                    <div className="text-xs text-[#7878a0] uppercase tracking-wider mt-1">Empresários impactados</div>
                  </div>
                </div>
              </ScrollAnimate>

              <ScrollAnimate delay={200}>
                <p className="section-label mb-2">Sobre mim</p>
                <h1 className="section-title text-[#e8e8f4] mb-6">Silas Vasques</h1>
                <div className="section-line mb-8" />
              </ScrollAnimate>

              <ScrollAnimate delay={300}>
                <p className="text-[#7878a0] leading-relaxed mb-6">
                  Sou <strong className="text-[#e8e8f4]">Product Designer com 8+ anos de experiência</strong>, atuando em design de produto digital — projeto, valido e entrego no código.
                </p>
                <p className="text-[#7878a0] leading-relaxed mb-6">
                  Atuo na <strong className="text-[#e8e8f4]">interseção entre design e engenharia</strong>: projeto experiências, valido com usuários e entrego no código — eliminando gargalos de handoff e acelerando o time-to-market.
                </p>
                <p className="text-[#7878a0] leading-relaxed mb-8">
                  No Yampa, reduzi o tempo de entrega de front-end em <strong className="text-[#00e5ff]">75%</strong> implementando interfaces diretamente em TypeScript, React e Tailwind, com orquestração de agentes de IA.
                </p>
              </ScrollAnimate>

              <ScrollAnimate delay={400} className="mb-12">
                <div className="flex flex-wrap gap-3">
                  {["Product Design", "AI Design Engineer", "Design Systems", "TypeScript · React", "UX Research", "Figma", "Fintech", "HealthTech"].map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                </div>
              </ScrollAnimate>

              <hr className="my-12 border-[rgba(124,111,255,0.18)]" />

              <ScrollAnimate>
                <p className="section-label mb-6">Experiência</p>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="card p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-lg fw-semibold text-[#e8e8f4]">{exp.role}</h3>
                          <p className="text-[#00e5ff]">{exp.company}</p>
                        </div>
                        <span className="text-sm text-[#7878a0] text-right">{exp.period}</span>
                      </div>
                      <p className="text-[#7878a0] mb-3">{exp.description}</p>
                      {exp.results && (
                        <div className="exp-accent">
                          ⚡ <span className="text-[#e8e8f4]">{exp.results}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollAnimate>

              <hr className="my-12 border-[rgba(124,111,255,0.18)]" />

              <ScrollAnimate>
                <p className="section-label mb-6">Formação</p>
                <div className="space-y-4">
                  <div>
                    <p className="fw-semibold text-[#e8e8f4]">Graduação em Design</p>
                    <p className="text-[#7878a0]">Universidade Federal do Ceará — 2014 a 2019</p>
                  </div>
                  <div>
                    <p className="fw-semibold text-[#e8e8f4]">Certificado Profissional Design de UX</p>
                    <p className="text-[#7878a0]">Google/Coursera — 2023</p>
                  </div>
                  <div>
                    <p className="fw-semibold text-[#e8e8f4]">Certificado em UX (120h)</p>
                    <p className="text-[#7878a0]">Udemy — 2021-2022</p>
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