import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "@/app/components/ui/button/Button";

describe("Button", () => {
  it("renders its label", () => {
    render(<Button>View Projects</Button>);

    expect(
      screen.getByRole("button", { name: "View Projects" }),
    ).toBeInTheDocument();
  });

  it("handles clicks", () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Contact Me</Button>);

    screen.getByRole("button", { name: "Contact Me" }).click();

    expect(handleClick).toHaveBeenCalledOnce();
  });
});
