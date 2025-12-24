import type { ReactNode } from "react";

interface CalloutProps {
  title: string;
  children: ReactNode;
  tone?: "info" | "success" | "warning";
}

const toneStyles: Record<NonNullable<CalloutProps["tone"]>, string> = {
  info: "border-primary-500/60 bg-primary-500/5 text-primary-100",
  success: "border-emerald-500/60 bg-emerald-500/5 text-emerald-100",
  warning: "border-amber-400/60 bg-amber-500/5 text-amber-100"
};

const Callout = ({ title, children, tone = "info" }: CalloutProps) => {
  return (
    <section
      className={`rounded-2xl border px-6 py-5 text-sm leading-relaxed shadow-lg shadow-slate-950/50 backdrop-blur ${toneStyles[tone]}`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 text-slate-200/90">{children}</div>
    </section>
  );
};

export default Callout;
