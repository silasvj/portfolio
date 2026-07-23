import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScrollAnimate } from "../scroll-animate";

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", vi.fn(function IntersectionObserver() {
    return {
      observe: mockObserve,
      unobserve: mockUnobserve,
      disconnect: mockDisconnect,
    };
  }));
});

describe("ScrollAnimate", () => {
  it("renderiza children corretamente", () => {
    render(
      <ScrollAnimate>
        <p>Hello world</p>
      </ScrollAnimate>
    );
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("aplica className personalizado", () => {
    render(
      <ScrollAnimate className="custom-class">
        <span>test</span>
      </ScrollAnimate>
    );
    const container = screen.getByText("test").parentElement;
    expect(container?.className).toContain("custom-class");
  });

  it("cria IntersectionObserver ao montar", () => {
    render(
      <ScrollAnimate>
        <p>observer test</p>
      </ScrollAnimate>
    );
    expect(IntersectionObserver).toHaveBeenCalled();
  });

  it("renderiza múltiplos children em modo stagger", () => {
    render(
      <ScrollAnimate stagger>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ScrollAnimate>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });
});
