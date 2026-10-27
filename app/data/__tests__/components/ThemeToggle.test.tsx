import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, afterEach } from "vitest";
import { useTheme } from "next-themes";
import ThemeToggle from "@/app/components/ui/ThemeToggle";

vi.mock("next-themes", () => ({ useTheme: vi.fn() }));

describe("ThemeToggle", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the disabled button before mounting", () => {
    vi.mocked(useTheme).mockReturnValue({
      resolvedTheme: "light",
      setTheme: vi.fn(),
      themes: ["light", "dark"],
      theme: "light",
      systemTheme: "light",
      forcedTheme: undefined,
    } as ReturnType<typeof useTheme>);

    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("switches from light mode to dark mode", async () => {
    const setTheme = vi.fn();

    vi.mocked(useTheme).mockReturnValue({
      resolvedTheme: "light",
      setTheme,
      themes: ["light", "dark"],
      theme: "light",
      systemTheme: "light",
      forcedTheme: undefined,
    } as ReturnType<typeof useTheme>);

    render(<ThemeToggle />);

    const button = await screen.findByRole("button", {
      name: "Switch to dark mode",
    });

    fireEvent.click(button);

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("switches from dark mode to light mode", async () => {
    const setTheme = vi.fn();

    vi.mocked(useTheme).mockReturnValue({
      resolvedTheme: "dark",
      setTheme,
      themes: ["light", "dark"],
      theme: "dark",
      systemTheme: "dark",
      forcedTheme: undefined,
    } as ReturnType<typeof useTheme>);

    render(<ThemeToggle />);

    const button = await screen.findByRole("button", {
      name: "Switch to light mode",
    });

    fireEvent.click(button);

    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
