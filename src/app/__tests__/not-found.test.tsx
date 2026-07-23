import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "../not-found";

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

describe("NotFound (PT)", () => {
  it("renderiza o título 404", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renderiza o texto de página não encontrada", () => {
    render(<NotFound />);
    expect(screen.getByText("Página não encontrada")).toBeInTheDocument();
  });

  it("renderiza link para voltar ao início", () => {
    render(<NotFound />);
    const link = screen.getByText("Voltar ao início");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renderiza link para ver projetos", () => {
    render(<NotFound />);
    const link = screen.getByText("Ver projetos");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/projects");
  });
});
