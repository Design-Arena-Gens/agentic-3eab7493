import Link from "next/link";
import SectionHeading from "./components/SectionHeading";
import StepTimeline from "./components/StepTimeline";
import Callout from "./components/Callout";
import MetricCard from "./components/MetricCard";
import ChecklistCard from "./components/ChecklistCard";

const deliverySteps = [
  {
    id: "01",
    title: "Frame the mission",
    summary: "Translate business intent into a crisp, outcome-driven brief for the agent.",
    details:
      "Capture the success criteria, constraints, key stakeholders, deadlines, and any domain specifics up front. This brief lives with the agent so every decision is contextualized.",
    artifacts: ["Intent Canvas", "Guardrails", "Success Metrics"]
  },
  {
    id: "02",
    title: "Bootstrap the workspace",
    summary: "Prepare tools, data sources, and integrations the agent needs before execution begins.",
    details:
      "Validate credentials, seed reference materials, and connect monitoring. The agent should never stall because an environment variable or API key was missing.",
    artifacts: ["Connection Audit", "Seed Knowledge Base"]
  },
  {
    id: "03",
    title: "Run iterative sprints",
    summary: "Structure the work into tight loops with measurable outputs, reviews, and escalations.",
    details:
      "Each sprint has a hypothesis, execution log, diff review, and go/no-go. Keep loops small enough that you can intervene quickly if the agent drifts.",
    artifacts: ["Sprint Log", "Diff Review", "Checkpoint Demo"]
  },
  {
    id: "04",
    title: "Ship & learn",
    summary: "Close the loop with deployment, validation, and a feedback injection into the brief.",
    details:
      "Run automated checks, gather user signals, and update the agent brief with new heuristics or anti-patterns so future runs start smarter.",
    artifacts: ["Release Checklist", "Retro Notes", "Updated Brief"]
  }
];

const readinessChecklist = [
  {
    title: "Pre-flight discipline",
    items: [
      {
        label: "Intent is documented",
        description: "Mission, constraints, risk appetite, and definition of done captured in the brief."
      },
      {
        label: "Guardrails configured",
        description: "Safety filters, rate limits, and human escalation path verified in non-production."
      },
      {
        label: "Telemetry wired",
        description: "Tracing, logging, and audit artifacts streaming to a dashboard with alerts."
      }
    ]
  },
  {
    title: "Operational hygiene",
    items: [
      {
        label: "Review cadence defined",
        description: "Touchpoints scheduled for human-in-the-loop review, sign-off, and retro."
      },
      {
        label: "Rollback play ready",
        description: "Automated revert strategy validated; hotfix path rehearsed for critical workflows."
      },
      {
        label: "Feedback loop closed",
        description: "Structured channel for user signals and production incidents feeding back into the brief."
      }
    ]
  }
];

const metrics = [
  {
    label: "Cycle time",
    value: "< 15 min",
    hint: "Target time from prompt to reviewed deliverable in steady state."
  },
  {
    label: "Escalation rate",
    value: "< 5%",
    hint: "Only the highest-risk deviations should require human takeover."
  },
  {
    label: "Retained learnings",
    value: "+100%",
    hint: "Each mission updates the brief so your next run starts twice as smart."
  }
];

const FAQ = [
  {
    question: "What does \"working the agent\" actually mean?",
    answer:
      "It means treating the agent like a high-leverage teammate: you set focus, keep scope tight, review outputs rigorously, and continuously feed it sharper context."
  },
  {
    question: "How do I trust the outputs?",
    answer:
      "Pair automated validation (tests, lint, diff checks) with human spot reviews on risky changes. Over time, tighten guardrails wherever trust breaks."
  },
  {
    question: "When should I intervene?",
    answer:
      "If the agent stalls, diverges from the brief, or repeats low-value loops twice in a row, pause the run, clarify intent, and restart with a tighter prompt."
  }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden pb-24">
      <div className="absolute left-1/2 top-[-30%] z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/40 blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pt-24">
        <header className="flex flex-col gap-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/50">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
              Operator playbook
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              How to work this agent like an elite operator
            </h1>
            <p className="max-w-3xl text-lg text-slate-300">
              Turn chaotic prompts into disciplined delivery loops. This guide distills the
              patterns top agent wranglers use to keep quality high, risk low, and velocity
              compounding.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-primary-200">
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-primary-500/80 bg-primary-500/20 px-5 py-2 font-semibold transition hover:border-primary-300 hover:bg-primary-500/30"
              href="#timeline"
            >
              See the operating loop →
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-5 py-2 font-semibold text-slate-100 transition hover:border-primary-400 hover:text-primary-100"
              href="#checklists"
            >
              Run the readiness checks
            </Link>
          </div>
        </header>

        <section id="timeline" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Lifecycle"
            title="The operating loop"
            description="Four deliberate phases that keep the agent aligned, resourced, and shipping value."
          />
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl shadow-slate-950/40">
            <StepTimeline steps={deliverySteps} />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Control Tower"
              title="Your daily command rhythm"
              description={'Anchor each run with structured checkpoints so the agent always knows what "good" looks like.'}
            />
            <div className="flex flex-col gap-6 text-sm leading-relaxed text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40">
                <h3 className="text-xl font-semibold text-white">1. Kickoff pulse</h3>
                <p className="mt-3 text-slate-300">
                  Begin every mission with a 5-minute sync: restate the intent, recap yesterday&apos;s
                  learnings, surface blockers, and set a single measurable target for the next loop.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40">
                <h3 className="text-xl font-semibold text-white">2. Mid-loop inspection</h3>
                <p className="mt-3 text-slate-300">
                  Sample work-in-progress artifacts. If the agent is drifting, inject clarifying
                  snippets directly into the brief instead of rewriting prompts from scratch.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40">
                <h3 className="text-xl font-semibold text-white">3. Review & ship</h3>
                <p className="mt-3 text-slate-300">
                  Validate outputs against the definition of done. Approve, request edits, or roll
                  back fast. Push successful patterns into the knowledge base the moment you ship.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Callout title="Operator mindset" tone="success">
              Think of the agent as a force multiplier, not an autopilot. Your job is to shape the
              mission, orchestrate feedback, and keep incentives aligned. The tighter your loops, the
              more leverage you get.
            </Callout>
            <Callout title="Anti-patterns to avoid" tone="warning">
              <ul className="list-disc space-y-2 pl-5">
                <li>Prompt dumping without sharing evaluation criteria.</li>
                <li>Letting the agent thrash on missing context for more than one loop.</li>
                <li>Skipping retros—every failure is a data point to harden your guardrails.</li>
              </ul>
            </Callout>
          </div>
        </section>

        <section id="checklists" className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Readiness"
            title="Mission control checklists"
            description="Run these before every major deployment or high-risk task."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {readinessChecklist.map((card) => (
              <ChecklistCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Signals"
            title="Tuning your success metrics"
            description="Keep the KPIs operational—less vanity dashboard, more actionable guardrails."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/40">
              <h3 className="text-xl font-semibold text-white">Instrument the feedback loop</h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-white">Execution trace:</span> Capture every
                  major decision with timestamps, prompts, and diffs so you can replay and debug.
                </li>
                <li>
                  <span className="font-semibold text-white">Human satisfaction:</span> Short NPS-
                  style surveys post-shipment reveal if outputs actually solved the user&apos;s problem.
                </li>
                <li>
                  <span className="font-semibold text-white">Cost to value ratio:</span> Track
                  compute minutes, API spend, and reviewer hours against shipped value to optimize
                  ROI.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary-500/50 bg-primary-500/10 p-8 text-slate-100 shadow-xl shadow-primary-900/40">
              <h3 className="text-xl font-semibold">Signal thresholds</h3>
              <p className="text-sm text-primary-100/90">
                Configure alerts when metrics drift. Use automation to nudge reviewers or roll back
                proactively before users feel the impact.
              </p>
              <ul className="space-y-3 text-sm text-primary-100/90">
                <li>⚠️ Escalation spikes above 10% for two consecutive loops.</li>
                <li>⚠️ Cycle time doubles, indicating thrash or missing context.</li>
                <li>⚠️ Defect density creeps above historical median.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Coach the agent, coach yourself"
            description="Common questions operators ask when they step into agentic workflows."
          />
          <div className="space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-200 shadow-lg shadow-slate-950/40"
              >
                <summary className="cursor-pointer text-lg font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 text-sm text-slate-400 shadow-xl shadow-slate-950/40">
          <div className="flex flex-col gap-2 text-slate-200">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
              Continuous improvement
            </span>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Next loop starts now</h2>
          </div>
          <p>
            Archive every run, annotate what worked, and promote the winning patterns into your
            templates. Working the agent is a craft—document relentlessly so your future self (and
            teammates) can spin up faster.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-primary-200">
            <Link className="underline-offset-4 transition hover:text-primary-100 hover:underline" href="mailto:ops@agent.run">
              Share a new play
            </Link>
            <span className="hidden sm:block">•</span>
            <Link className="underline-offset-4 transition hover:text-primary-100 hover:underline" href="https://operator.handbook" target="_blank" rel="noreferrer">
              Operator handbook
            </Link>
            <span className="hidden sm:block">•</span>
            <Link className="underline-offset-4 transition hover:text-primary-100 hover:underline" href="#timeline">
              Revisit the operating loop
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
