import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../layout/header";

// Mock next/navigation
const mockPathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

// Mock next-themes (usado pelo ThemeToggle dentro do Header)
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: vi.fn(),
  }),
}));

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

beforeEach(() => {
  mockPathname.mockReturnValue("/");
});

describe("Header", () => {
  it("renderiza o nome do portfolio", () => {
    render(<Header />);
    expect(screen.getByText("Silas Vasques")).toBeInTheDocument();
  });

  it("mostra links de navegação em português na rota /", () => {
    mockPathname.mockReturnValue("/");
    render(<Header />);
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Experiência")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
  });

  it("mostra links de navegação em inglês na rota /en", () => {
    mockPathname.mockReturnValue("/en/projects");
    render(<Header />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("destaca link ativo com aria-current", () => {
    mockPathname.mockReturnValue("/projects");
    render(<Header />);
    const projectsLink = screen.getByText("Projetos");
    expect(projectsLink).toHaveAttribute("aria-current", "page");
  });

  it("renderiza language switcher", () => {
    mockPathname.mockReturnValue("/");
    render(<Header />);
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("mostra 'PT' no language switcher quando está em inglês", () => {
    mockPathname.mockReturnValue("/en");
    render(<Header />);
    expect(screen.getByText("PT")).toBeInTheDocument();
  });

  it("renderiza botão 'Fale comigo' em português", () => {
    mockPathname.mockReturnValue("/");
    render(<Header />);
    expect(screen.getByText("Fale comigo")).toBeInTheDocument();
  });

  it("renderiza 'Let\\'s talk' em inglês", () => {
    mockPathname.mockReturnValue("/en");
    render(<Header />);
    expect(screen.getByText("Let's talk")).toBeInTheDocument();
  });
});
