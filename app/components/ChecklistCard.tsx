interface ChecklistItem {
  label: string;
  description: string;
}

interface ChecklistCardProps {
  title: string;
  items: ChecklistItem[];
}

const ChecklistCard = ({ title, items }: ChecklistCardProps) => (
  <div className="flex flex-col gap-4 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 shadow-md shadow-slate-950/40">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <ul className="flex flex-col gap-3 text-sm text-slate-300">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-primary-400 bg-primary-500/15 text-xs text-primary-200">
            ✓
          </span>
          <div>
            <p className="font-medium text-white">{item.label}</p>
            <p className="text-slate-400">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ChecklistCard;
