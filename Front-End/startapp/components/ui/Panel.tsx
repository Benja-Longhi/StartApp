import clsx from "clsx";

export function Panel({
  className,
  children,
  as: Tag = "section",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div" | "article" | "aside";
}) {
  return (
    <Tag className={clsx("rounded-3xl border border-line/60 bg-surface p-6", className)}>
      {children}
    </Tag>
  );
}
