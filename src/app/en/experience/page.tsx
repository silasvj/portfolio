"use client";

import { ScrollAnimate } from "@/components/scroll-animate";
import { useDictionary } from "@/i18n/use-dictionary";

const experienceData = [
  {
    role: "Design Engineer",
    company: "YampaFin",
    period: "01/2026 - 04/2026",
    description: "I worked as a Design Engineer in a SaaS Financial Software (Fintech) focused on business management, cash flow, and bank reconciliation for small and medium businesses.",
    bullets: [
      "I implemented interfaces directly in code (TypeScript, React, Tailwind), eliminating visual review stages and reducing friction in design-engineering handoff.",
      "I orchestrated AI agents (Claude Code, Lovable) for production-ready code delivery.",
      "I automated the Discovery process with clustering and sentiment analysis in client and stakeholder interviews.",
    ],
    results: "75% reduction in front-end delivery time from ~5 days to 1-2 days per average feature.",
  },
  {
    role: "Product Designer",
    company: "Yampa",
    period: "06/2023 - 12/2025",
    description: "I designed and conceived AI Agents integrated into the platform: operational assistant for technical support and analytical financial consultant for business decision-making.",
    bullets: [
      "I created two AI agents integrated into the platform (Yago and Yana) with distinct personalities: operational assistant and strategic consultant.",
      "I implemented a financial diagnostic system (ISF 2.0) contextualized for each user.",
      "I led the complete legacy system migration to Mobile First architecture, focusing on scalability and responsiveness.",
      "I managed and evolved the Design System in Figma with strict compliance to Tailwind standards and accessibility.",
      "I transformed complex financial flows into intuitive experiences for non-technical users.",
      "I instrumented tracking events via Mixpanel across critical flows: onboarding, bank integration, and account setup.",
      "I built conversion funnels to identify drop-off points and extracted Activation and Retention metrics (DAU/WAU/MAU).",
    ],
    results: "Successful legacy system migration with increased adoption by veteran clients and new client retention.",
  },
  {
    role: "Product Designer",
    company: "Meetz",
    period: "06/2022 - 04/2023",
    description: "MarTech / SaaS Software focused on active prospecting and B2B lead qualification.",
    bullets: [
      "I conducted Continuous Discovery process and requirements gathering for creating a unified platform.",
      "I elaborated and conducted qualitative user interviews, data collection/organization, and strategic research reports.",
      "I defined the MVP, mapped User Flows, and structured the platform's Information Architecture.",
      "I created high-fidelity prototypes and moderated usability tests in Figma.",
    ],
    results: "MVP delivery of the unified platform, resulting in reduced operational costs.",
  },
  {
    role: "Design and UX Assistant",
    company: "SiMCo - Healthcare",
    period: "03/2021 - 08/2021",
    description: "HealthTech / Network of medical clinics focused on democratizing health access.",
    bullets: [
      "Executed online and offline marketing campaigns, producing visual and audiovisual content.",
      "Participated in strategic and campaign decision-making, collaborating with multidisciplinary teams.",
      "Monitored usability feedback using Hotjar and Google Analytics.",
      "Conducted heuristic analysis of interfaces and checkout to identify improvement opportunities.",
    ],
    results: "",
  },
  {
    role: "Product Designer",
    company: "SiMCo - Healthcare",
    period: "09/2021 - 02/2022",
    description: "HealthTech / Network of medical clinics focused on democratizing health access and digital health services.",
    bullets: [
      "Worked in two simultaneous squads: new digital health product development (mobile app) and call center service system improvement (appointment scheduling module).",
      "Conducted Discovery, stakeholder and operator interviews, defining technical and business requirements.",
      "Performed UI Design, prototyping in Adobe XD, and moderated usability testing with end users.",
      "Monitored usability feedback using Hotjar and Google Analytics, performing heuristic analysis for continuous remodeling.",
      "Redesigned the internal quote flow: simplified procedure catalog, automatic 'Consolidated Quote' generation comparing standard vs. benefits card pricing.",
      "Implemented a strategic sales argument — 'discount equivalent to X months of membership' — turning cost into perceived value.",
    ],
    results: "+22% increase in quote handling | 15k monthly appointments | Significant growth in benefits card subscriptions | Mental health digital product launch.",
  },
];

export default function Experience() {
  const d = useDictionary();

  return (
    <div id="exp" className="py-24 bg-[#08080f]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <ScrollAnimate className="mb-12">
            <p className="section-label mb-2">{d.about.experience}</p>
            <h1 className="section-title text-[#e8e8f4] mb-6">Experience</h1>
            <div className="section-line mb-12" />
          </ScrollAnimate>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg fw-semibold text-[#e8e8f4]">{exp.role}</h3>
                      <p className="text-[#00e5ff]">{exp.company}</p>
                    </div>
                    <span className="text-sm text-[#7878a0] text-right">{exp.period}</span>
                  </div>
                  <p className="text-[#7878a0] mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-[#7878a0] leading-relaxed flex gap-2">
                        <span className="text-[#00e5ff]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.results && (
                    <div className="exp-accent">
                      ⚡ <span className="text-[#e8e8f4]">{exp.results}</span>
                    </div>
                  )}
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}