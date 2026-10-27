import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type ButtonWithIconProps = {
  children: ReactNode;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  iconPosition?: "left" | "right" | "both" | "none";
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const variants = {
  primary: "bg-accent text-accent-foreground! hover:bg-accent-hover",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "bg-transparent text-foreground hover:bg-surface",
};

export default function ButtonWithIcon({
  children,
  icon,
  rightIcon,
  iconPosition = "left",
  variant = "primary",
  href,
  target,
  className = "",
  type = "button",
  ...props
}: ButtonWithIconProps) {
  const showLeft = iconPosition === "left" || iconPosition === "both";
  const showRight =
    iconPosition === "right" || iconPosition === "both" || !!rightIcon;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2 font-medium transition-colors",
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {showLeft && icon && (
        <span className="inline-flex items-center">{icon}</span>
      )}

      <span>{children}</span>

      {showRight && (rightIcon ?? icon) && (
        <span className="inline-flex items-center">{rightIcon ?? icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
