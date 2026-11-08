import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type SharedProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type LinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

const variants = {
  primary: "bg-accent text-accent-foreground! hover:bg-accent-hover",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "bg-transparent text-foreground hover:bg-surface",
};

export default function Button(props: Props) {
  const { children, icon, variant = "primary", className = "" } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2 font-medium transition-colors",
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {icon && (
        <span className="inline-flex items-center text-current">{icon}</span>
      )}
      <span className="text-current">{children}</span>
    </>
  );

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;

    return (
      <a
        {...linkProps}
        href={href}
        className={classes}
        rel={props.target === "_blank" ? "noopener noreferrer" : props.rel}
      >
        {content}
      </a>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonProps;

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? "button"}
      className={classes}
    >
      {content}
    </button>
  );
}
