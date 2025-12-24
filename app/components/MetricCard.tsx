interface MetricCardProps {
  label: string;
  value: string;
  hint: string;
}

const MetricCard = ({ label, value, hint }: MetricCardProps) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 shadow-md shadow-slate-950/40">
    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{label}</span>
    <span className="text-3xl font-semibold text-white">{value}</span>
    <span className="text-sm text-slate-400">{hint}</span>
  </div>
);

export default MetricCard;
