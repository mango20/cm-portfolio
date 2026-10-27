interface TagListProps {
  items: string[];
  variant?: "default" | "subtle";
}

export default function TagList({ items, variant = "default" }: TagListProps) {
  if (items.length === 0) return null;

  const tagStyles = {
    default: "border-border bg-surface text-foreground",
    subtle: "border-border bg-background text-muted",
  };

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-md border px-3 py-1.5 text-xs font-medium ${tagStyles[variant]}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
