import { AppMockup } from "./AppMockup";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-28 sm:pt-48"
    >
      <div className="absolute left-1/2 top-[-10%] -z-10 h-[600px] w-[900px] max-w-[140vw] -translate-x-1/2 glow" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          Turn years of
          <br />
          <span className="text-gradient">voice memos</span> into your
          next book.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl">
          Transcribe, group by topic, and rate relevance — entirely on your
          own machine. No cloud, no subscription, nothing you record ever
          leaves your laptop.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#download"
            className="w-full rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105 sm:w-auto"
          >
            Download for Windows
          </a>
          <a
            href="#how-it-works"
            className="w-full rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface sm:w-auto"
          >
            See how it works
          </a>
        </div>

        <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
          <span>100% offline</span>
          <span className="opacity-40">·</span>
          <span>No subscription</span>
          <span className="opacity-40">·</span>
          <span>Free</span>
        </div>
      </div>

      <div className="mt-20 px-6">
        <AppMockup />
      </div>
    </section>
  );
}
