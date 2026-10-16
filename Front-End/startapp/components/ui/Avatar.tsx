import clsx from "clsx";

const palettes = [
  "from-brand-pink to-brand-violet",
  "from-primary to-sky-500",
  "from-amber-500 to-brand-pink",
  "from-emerald-500 to-primary",
  "from-brand-violet to-indigo-500",
];

function hash(value: string) {
  let h = 0;
  for (const char of value) h = (h * 31 + char.charCodeAt(0)) >>> 0;
  return h;
}

export function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      aria-hidden
      className={clsx(
        "inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-bold text-white",
        palettes[hash(name) % palettes.length],
        size === "sm" && "h-8 w-8 text-xs",
        size === "md" && "h-10 w-10 text-sm",
        size === "lg" && "h-14 w-14 text-base",
        className
      )}
    >
      {initials}
    </span>
  );
}
