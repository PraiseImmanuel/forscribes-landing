import { Reveal } from "./Reveal";

export function PrivacySection() {
  return (
    <section id="privacy" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
            Privacy
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Your recordings never leave your machine.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Transcription, grouping, and topic rating all run locally,
            powered by models that live on your laptop. There&apos;s no
            server to upload to, because there isn&apos;t one — the only
            thing ForScribe ever sends over the internet is a check for a
            new version of itself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
