"use client";

import { skills } from "@/data/projects";
import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";

export default function Skills() {
  const d = useDictionary();

  const skillData = [
    { name: "Figma", pct: "Expert", level: 97, cat: "Design Systems · Prototyping" },
    { name: "TypeScript · React", pct: "Advanced", level: 80, cat: "UI implementation in code" },
    { name: "Tailwind CSS", pct: "Expert", level: 92, cat: "Design Systems with compliance" },
    { name: "AI Orchestration", pct: "Advanced", level: 85, cat: "Claude Code · LLMs" },
    { name: "UX Research", pct: "Expert", level: 93, cat: "JTBD · Interviews · Usability testing" },
    { name: "AI Agent Design", pct: "Advanced", level: 82, cat: "UX for AI products" },
  ];

  return (
    <div id="skills" className="py-24 bg-[#08080f]">
      <div className="container mx-auto px-4">
        <ScrollAnimate className="mb-12">
          <p className="section-label mb-2">{d.skills.title}</p>
          <h1 className="section-title text-[#e8e8f4] mb-6">Skills</h1>
          <div className="section-line mb-12" />
        </ScrollAnimate>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillData.map((skill, idx) => (
            <ScrollAnimate key={skill.name} delay={idx * 50}>
              <div className="card p-5">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-[#e8e8f4]">{skill.name}</span>
                  <span className="text-sm text-[#00e5ff]">{skill.pct}</span>
                </div>
                <div className="skill-bar mb-3">
                  <div className="skill-fill" style={{ width: skill.level + "%" }} />
                </div>
                <div className="text-xs text-[#7878a0]">{skill.cat}</div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        <hr className="my-12 border-[rgba(124,111,255,0.18)]" />

        <ScrollAnimate>
          <p className="section-label mb-6">Soft Skills</p>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </ScrollAnimate>
      </div>
    </div>
  );
}