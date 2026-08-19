function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface p-8">
      <div className="absolute inset-0 -z-10 glow opacity-60" />
      {children}
    </div>
  );
}

export function TranscriptionVisual() {
  return (
    <Card>
      <div className="flex w-full max-w-xs flex-col gap-2.5">
        {[95, 100, 85, 92, 70].map((w, i) => (
          <span
            key={i}
            className="h-3 rounded-full bg-white/10"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
    </Card>
  );
}

export function GroupingVisual() {
  const clusters = [
    { color: "from-accent to-accent-2", items: 3, x: "20%", y: "30%" },
    { color: "from-emerald-400 to-emerald-600", items: 2, x: "65%", y: "20%" },
    { color: "from-amber-400 to-amber-600", items: 4, x: "45%", y: "65%" },
  ];
  return (
    <Card>
      <div className="relative h-full w-full">
        {clusters.map((c, ci) =>
          Array.from({ length: c.items }).map((_, i) => (
            <span
              key={`${ci}-${i}`}
              className={`absolute h-3.5 w-3.5 rounded-full bg-gradient-to-br ${c.color} shadow-lg`}
              style={{
                left: `calc(${c.x} + ${i * 14}px)`,
                top: `calc(${c.y} + ${i % 2 === 0 ? -10 : 10}px)`,
              }}
            />
          )),
        )}
      </div>
    </Card>
  );
}

export function RatingVisual() {
  return (
    <Card>
      <div className="flex flex-col items-center gap-3">
        <span className="text-5xl font-extrabold text-gradient">9.2</span>
        <div className="flex gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className={`h-6 w-2 rounded-full ${
                i < 9
                  ? "bg-gradient-to-b from-accent to-accent-2"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-muted">Topic relevance</span>
      </div>
    </Card>
  );
}

export function ExportVisual() {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <div className="flex h-24 w-20 flex-col gap-1.5 rounded-lg border border-border bg-white/5 p-3">
          <span className="h-1.5 w-full rounded-full bg-white/15" />
          <span className="h-1.5 w-4/5 rounded-full bg-white/15" />
          <span className="h-1.5 w-full rounded-full bg-white/15" />
          <span className="h-1.5 w-3/5 rounded-full bg-white/15" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">
            .md
          </span>
          <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-xs font-semibold text-white">
            .docx
          </span>
        </div>
      </div>
    </Card>
  );
}
