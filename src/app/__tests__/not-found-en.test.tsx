import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFoundEn from "../en/not-found";

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

describe("NotFound (EN)", () => {
  it("renderiza o título 404", () => {
    render(<NotFoundEn />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renderiza o texto 'Page not found'", () => {
    render(<NotFoundEn />);
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("renderiza link para voltar ao início em inglês", () => {
    render(<NotFoundEn />);
    const link = screen.getByText("Back to home");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/en");
  });

  it("renderiza link para ver projetos em inglês", () => {
    render(<NotFoundEn />);
    const link = screen.getByText("View projects");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/en/projects");
  });
});
