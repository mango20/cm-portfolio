import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Navbar from "@/app/components/layout/Navbar";

afterEach(() => {
  cleanup();
});

describe("Navbar", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
  });

  it("renders the developer identity and desktop navigation", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("link", { name: /charmaine lilan manga - home/i }),
    ).toHaveAttribute("href", "#home");

    for (const label of [
      "About",
      "Skills",
      "Experience",
      "Projects",
      "Education",
      "Achievements",
    ]) {
      expect(
        screen.getAllByRole("link", { name: label }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("opens and closes the mobile navigation", () => {
    render(<Navbar />);

    const openButton = screen.getByRole("button", {
      name: "Open navigation menu",
    });

    expect(openButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(openButton);

    expect(
      screen.getByRole("button", { name: "Close navigation menu" }),
    ).toHaveAttribute("aria-expanded", "true");

    expect(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: "Close navigation menu" }),
    );

    expect(
      screen.getByRole("button", { name: "Open navigation menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu when a navigation link is clicked", () => {
    render(<Navbar />);

    fireEvent.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    );

    const mobileProjectsLink = screen
      .getAllByRole("link", { name: "Projects" })
      .find((link) => link.closest("#mobile-navigation"));

    expect(mobileProjectsLink).toBeDefined();

    fireEvent.click(mobileProjectsLink!);

    expect(
      screen.getByRole("button", { name: "Open navigation menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("scrolls to the contact section when Let's Talk is clicked", () => {
    const scrollIntoView = vi.fn();

    document.body.innerHTML = '<div id="contact"></div>';

    const contact = document.getElementById("contact")!;

    contact.scrollIntoView = scrollIntoView;

    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: /let's talk/i }));

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });
});
