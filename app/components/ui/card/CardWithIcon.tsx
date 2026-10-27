import type { ReactNode, MouseEventHandler } from "react";

type CardWithIconProps = {
  icon?: ReactNode;
  rightIcon?: ReactNode;
  title: string;
  description: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "outline" | "primary" | "ghost";
  layout?: "horizontal" | "vertical";
  hover?: boolean;
  background?: "surface" | "transparent" | "accent-soft";
  className?: string;
};

const variants = {
  outline: "border-border",
  primary: "border-accent",
  ghost: "border-transparent",
};

const backgrounds = {
  surface: "bg-surface",
  transparent: "bg-transparent",
  "accent-soft": "bg-accent-soft",
};

export default function CardWithIcon({
  icon,
  rightIcon,
  title,
  description,
  href,
  onClick,
  variant = "outline",
  layout = "horizontal",
  hover = true,
  background = "transparent",
  className = "",
}: CardWithIconProps) {
  const isVertical = layout === "vertical";

  const classes = [
    "flex w-full rounded-lg border p-5 text-left transition-colors",
    isVertical ? "flex-col items-start gap-3" : "flex-row items-center gap-4",
    variants[variant],
    backgrounds[background],
    hover && "hover:border-accent",
    hover ? "!cursor-pointer" : "!cursor-default",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-soft text-xl text-accent">
          {icon}
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="font-semibold text-foreground">{title}</span>
        <span className="wrap-break-word text-sm text-muted">
          {description}
        </span>
      </div>

      {rightIcon && (
        <div className={`shrink-0 text-muted ${isVertical ? "" : "ml-auto"}`}>
          {rightIcon}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
