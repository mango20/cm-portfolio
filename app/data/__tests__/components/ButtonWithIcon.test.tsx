import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ButtonWithIcon from "@/app/components/ui/button/ButtonWithIcon";

afterEach(() => {
  cleanup();
});

describe("ButtonWithIcon", () => {
  it("renders button children", () => {
    render(<ButtonWithIcon>Click me</ButtonWithIcon>);

    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("renders the left icon by default", () => {
    render(
      <ButtonWithIcon icon={<span data-testid="icon">Icon</span>}>
        {" "}
        Submit{" "}
      </ButtonWithIcon>,
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders both icons when iconPosition is both", () => {
    render(
      <ButtonWithIcon
        icon={<span data-testid="left-icon">Left</span>}
        rightIcon={<span data-testid="right-icon">Right</span>}
        iconPosition="both"
      >
        {" "}
        Submit{" "}
      </ButtonWithIcon>,
    );

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("renders only the right icon when iconPosition is right", () => {
    render(
      <ButtonWithIcon
        icon={<span data-testid="left-icon">Left</span>}
        rightIcon={<span data-testid="right-icon">Right</span>}
        iconPosition="right"
      >
        {" "}
        Continue{" "}
      </ButtonWithIcon>,
    );

    expect(screen.queryByTestId("left-icon")).not.toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("does not render an icon when iconPosition is none", () => {
    render(
      <ButtonWithIcon
        icon={<span data-testid="icon">Icon</span>}
        iconPosition="none"
      >
        {" "}
        Click me{" "}
      </ButtonWithIcon>,
    );

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("uses rightIcon when provided with the default left position", () => {
    render(
      <ButtonWithIcon
        icon={<span data-testid="left-icon">Left</span>}
        rightIcon={<span data-testid="right-icon">Right</span>}
      >
        {" "}
        Continue{" "}
      </ButtonWithIcon>,
    );

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("renders a link when href is provided", () => {
    render(<ButtonWithIcon href="/projects">View projects</ButtonWithIcon>);

    expect(screen.getByRole("link", { name: "View projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it("adds secure rel attributes for links opening in a new tab", () => {
    render(
      <ButtonWithIcon href="/projects" target="_blank">
        {" "}
        View projects{" "}
      </ButtonWithIcon>,
    );

    const link = screen.getByRole("link", { name: "View projects" });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not add rel when target is not _blank", () => {
    render(
      <ButtonWithIcon href="/projects" target="_self">
        {" "}
        View projects{" "}
      </ButtonWithIcon>,
    );

    const link = screen.getByRole("link", { name: "View projects" });

    expect(link).toHaveAttribute("target", "_self");
    expect(link).not.toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies the requested variant and custom className", () => {
    render(
      <ButtonWithIcon variant="outline" className="custom-class">
        {" "}
        Submit{" "}
      </ButtonWithIcon>,
    );

    const button = screen.getByRole("button", { name: "Submit" });

    expect(button).toHaveClass("border");
    expect(button).toHaveClass("custom-class");
  });

  it("passes button props and defaults type to button", () => {
    render(<ButtonWithIcon disabled> Submit </ButtonWithIcon>);

    const button = screen.getByRole("button", { name: "Submit" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "button");
  });

  it("uses the supplied button type", () => {
    render(<ButtonWithIcon type="submit"> Submit </ButtonWithIcon>);

    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute(
      "type",
      "submit",
    );
  });

  it("calls onClick when an enabled button is clicked", () => {
    const handleClick = vi.fn();

    render(<ButtonWithIcon onClick={handleClick}>Click me</ButtonWithIcon>);

    fireEvent.click(screen.getByRole("button", { name: "Click me" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when a disabled button is clicked", () => {
    const handleClick = vi.fn();

    render(
      <ButtonWithIcon disabled onClick={handleClick}>
        Click me
      </ButtonWithIcon>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Click me" }));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
