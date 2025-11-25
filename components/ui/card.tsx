import clsx from "classnames";

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("card p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg", className)}>
      {children}
    </div>
  );
}
