import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectContent } from "../project-content";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
  }) => <img src={src} alt={alt} {...props} />,
}));

// Mock IntersectionObserver (usado pelo AnimateIn via useScrollReveal)
beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(function IntersectionObserver() {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    })
  );
});

const mockProject = {
  id: "1",
  slug: "test-project",
  title: "Projeto Teste",
  titleEn: "Test Project",
  company: "Empresa XYZ",
  year: "2024",
  role: ["Designer"],
  category: "Web",
  description: "Descrição do projeto.",
  descriptionEn: "Project description.",
  challenge: "1. Desafio principal\n\n---\n\n2. Segundo desafio",
  challengeEn: "1. Main challenge\n\n---\n\n2. Second challenge",
  solution: "1. Primeira solução\n\n2. Segunda solução",
  solutionEn: "1. First solution\n\n2. Second solution",
  process: "1. Primeiro passo\n\n2. Segundo passo",
  processEn: "1. First step\n\n2. Second step",
  results: "Resultados impressionantes",
  resultsEn: "Amazing results",
  metrics: ["+50%", "10x"],
  metricsEn: ["+50%", "10x"],
  thumbnail: "/images/test.jpg",
  images: ["/images/test.jpg"],
  content: [
    { type: "text" as const, content: "Conteúdo narrativo" },
  ],
  contentEn: [
    { type: "text" as const, content: "Narrative content" },
  ],
};

describe("ProjectContent", () => {
  it("renderiza o título do projeto em português", () => {
    render(<ProjectContent project={mockProject} lang="pt" />);
    expect(screen.getByText("Projeto Teste")).toBeInTheDocument();
  });

  it("renderiza o título em inglês quando lang=en", () => {
    render(<ProjectContent project={mockProject} lang="en" />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renderiza o nome da empresa", () => {
    render(<ProjectContent project={mockProject} lang="pt" />);
    expect(screen.getAllByText("Empresa XYZ").length).toBeGreaterThan(0);
  });

  it("renderiza seções de navegação em português", () => {
    render(<ProjectContent project={mockProject} lang="pt" />);
    expect(screen.getAllByText("Visão Geral").length).toBeGreaterThan(0);
  });

  it("renderiza seções de navegação em inglês", () => {
    render(<ProjectContent project={mockProject} lang="en" />);
    expect(screen.getAllByText("Overview").length).toBeGreaterThan(0);
  });

  it("renderiza o link de voltar em português", () => {
    render(<ProjectContent project={mockProject} lang="pt" />);
    expect(screen.getByText("← Voltar para projetos")).toBeInTheDocument();
  });

  it("renderiza o link de voltar em inglês", () => {
    render(<ProjectContent project={mockProject} lang="en" />);
    expect(screen.getByText("← Back to projects")).toBeInTheDocument();
  });

  it("renderiza a imagem hero", () => {
    render(<ProjectContent project={mockProject} lang="pt" />);
    const img = screen.getByAltText("Projeto Teste");
    expect(img).toBeInTheDocument();
  });
});
