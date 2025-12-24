import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actionSlot?: ReactNode;
}

const SectionHeading = ({ eyebrow, title, description, actionSlot }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
          {eyebrow}
        </span>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {actionSlot}
      </div>
      {description && <p className="max-w-3xl text-lg text-slate-300">{description}</p>}
    </div>
  );
};

export default SectionHeading;
