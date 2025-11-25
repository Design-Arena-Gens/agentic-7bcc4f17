import clsx from "classnames";

export default function Progress({ value, className }: { value: number; className?: string }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={clsx("w-full h-3 rounded-full bg-muted overflow-hidden", className)}>
      <div className="h-full bg-primary transition-all" style={{ width: `${clamped}%` }} />
    </div>
  );
}
