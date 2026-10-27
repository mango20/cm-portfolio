import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "@/app/components/sections/Hero";

describe("Hero", () => {
  it("renders the main introduction", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
