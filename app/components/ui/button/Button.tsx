import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  variant?: "primary" | "outline" | "ghost";
};

const variants = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "bg-transparent text-foreground hover:bg-surface",
};

export default function Button({
  children,
  icon,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2 font-medium transition-colors",
    variants[variant],
    className,
  ].join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {icon && (
        <span className="inline-flex items-center text-current">{icon}</span>
      )}

      <span className="text-current">{children}</span>
    </button>
  );
}
