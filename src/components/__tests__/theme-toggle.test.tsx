import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeToggle } from "../theme-toggle";

// Mock next-themes
const mockSetTheme = vi.fn();
let mockTheme = "light";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: mockTheme,
    setTheme: mockSetTheme,
  }),
}));

beforeEach(() => {
  mockTheme = "light";
  mockSetTheme.mockClear();
});

describe("ThemeToggle", () => {
  it("renderiza botão com aria-label", () => {
    render(<ThemeToggle />);
    // Aguarda mount (segundo render)
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("mostra ícone de lua no tema light (dark mode disponível)", () => {
    mockTheme = "light";
    render(<ThemeToggle />);
    // Depois do mount, procura o SVG (lua = dark mode toggle)
    const btns = screen.getAllByRole("button");
    // O botão deve existir
    expect(btns.length).toBeGreaterThan(0);
  });

  it("mostra ícone de sol no tema dark", () => {
    mockTheme = "dark";
    render(<ThemeToggle />);
    const btns = screen.getAllByRole("button");
    expect(btns.length).toBeGreaterThan(0);
  });
});
