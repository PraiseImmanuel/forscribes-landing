export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-xs text-muted sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-accent to-accent-2 text-[9px] font-bold text-white">
            FS
          </span>
          <span>ForScribe</span>
        </div>
        <span>Runs fully offline. Nothing here ever leaves your machine.</span>
        <a
          href="https://github.com/PraiseImmanuel/forscribes"
          className="transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
