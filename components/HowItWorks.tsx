import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Import your recordings",
    copy: "Drop in whatever you've got — voice memos, interviews, dictated notes. Batches of up to five at a time.",
  },
  {
    n: "02",
    title: "Let it transcribe",
    copy: "ForScribe picks a model sized to your hardware, then transcribes locally while you keep working.",
  },
  {
    n: "03",
    title: "Group and rate",
    copy: "See what you've actually been talking about, and how closely each recording matches the topic you're writing about.",
  },
  {
    n: "04",
    title: "Export to your manuscript",
    copy: "Pull the material you need straight into Markdown or Word, ready to paste into your draft.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
          How it works
        </span>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Four steps, start to finish.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 100}>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
              <span className="text-sm font-bold text-gradient">{step.n}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
