import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type SharedProps = {
  children: ReactNode;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  iconPosition?: "left" | "right" | "both" | "none";
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

type ButtonWithIconProps = ButtonProps | LinkProps;

const variants = {
  primary: "bg-accent text-accent-foreground! hover:bg-accent-hover",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "bg-transparent text-foreground hover:bg-surface",
};

export default function ButtonWithIcon(props: ButtonWithIconProps) {
  const {
    children,
    icon,
    rightIcon,
    iconPosition = "left",
    variant = "primary",
    className = "",
  } = props;

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

  if ("href" in props && props.href) {
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
