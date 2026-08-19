import { Reveal } from "./Reveal";

export function DownloadCta() {
  return (
    <section id="download" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 glow" />

      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Start turning memos into manuscript.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          Free to download. Runs fully offline once installed.
        </p>

        <a
          href="https://github.com/PraiseImmanuel/forscribes/releases/latest"
          className="mt-9 inline-flex rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          Download for Windows
        </a>

        <p className="mt-4 text-xs text-muted">
          Windows 10 or later · ~200MB download
        </p>
      </Reveal>
    </section>
  );
}
