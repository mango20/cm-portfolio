import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryBadgeProps {
  children: string;
  variant?: "success" | "accent" | "default" | "internal" | "danger";
  className?: string;
}

const variants = {
  success: "border-success/20 bg-success/10 text-success",
  accent: "border-border bg-accent-soft text-accent",
  default: "border-border bg-surface text-muted",
  internal:
    "border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  danger: "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function CategoryBadge({
  children,
  variant = "accent",
  className = "",
}: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide ${variants[variant]} ${className}`}
    >
      <FontAwesomeIcon
        icon={faCircle}
        aria-hidden="true"
        className="text-[5px] opacity-80"
      />
      {children}
    </span>
  );
}
