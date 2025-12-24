interface Step {
  id: string;
  title: string;
  summary: string;
  details: string;
  artifacts?: string[];
}

interface StepTimelineProps {
  steps: Step[];
}

const StepTimeline = ({ steps }: StepTimelineProps) => {
  return (
    <ol className="relative border-l border-slate-700 pl-6">
      {steps.map((step) => (
        <li key={step.id} className="mb-10 ml-6">
          <div className="absolute -left-[13px] mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-primary-400 bg-slate-900">
            <span className="text-xs font-semibold text-primary-200">{step.id}</span>
          </div>
          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
          <p className="mt-2 text-base text-slate-300">{step.summary}</p>
          <p className="mt-3 text-sm text-slate-400">{step.details}</p>
          {step.artifacts && (
            <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-primary-200">
              {step.artifacts.map((artifact) => (
                <span
                  key={artifact}
                  className="rounded-full border border-primary-700/60 bg-primary-700/10 px-3 py-1 text-primary-200"
                >
                  {artifact}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default StepTimeline;
