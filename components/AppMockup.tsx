export function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute inset-0 -z-10 scale-90 glow" />
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] text-muted">ForScribe</span>
        </div>

        <div className="grid grid-cols-5 gap-px bg-border">
          <div className="col-span-2 flex flex-col justify-center gap-3 bg-surface p-6">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
              Voice memo
            </span>
            <svg viewBox="0 0 200 60" className="h-14 w-full">
              {Array.from({ length: 36 }).map((_, i) => {
                const h = 6 + Math.abs(Math.sin(i * 0.7)) * 40;
                return (
                  <rect
                    key={i}
                    x={i * 5.5}
                    y={30 - h / 2}
                    width="2.5"
                    height={h}
                    rx="1.25"
                    fill={i % 3 === 0 ? "url(#grad)" : "rgba(245,245,247,0.25)"}
                  />
                );
              })}
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-[11px] text-muted">42:18 · base model</span>
          </div>

          <div className="col-span-3 flex flex-col gap-2.5 bg-surface p-6">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
              Transcript
            </span>
            {[92, 100, 78, 88, 60].map((w, i) => (
              <span
                key={i}
                className="h-2.5 rounded-full bg-white/10"
                style={{ width: `${w}%` }}
              />
            ))}
            <div className="mt-2 flex gap-2">
              <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-1 text-[10px] font-semibold text-white">
                9.2 relevance
              </span>
              <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted">
                Book: Chapter 3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
