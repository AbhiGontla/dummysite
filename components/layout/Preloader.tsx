export function Preloader() {
  return (
    <div className="preloader pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-navy" aria-hidden="true">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <span className="absolute inset-0 animate-pulse-ring rounded-3xl bg-brand/30" />
          <span className="relative grid h-20 w-20 place-items-center rounded-3xl bg-brand-gradient shadow-glow-lg">
            <svg viewBox="0 0 32 32" className="h-10 w-10 text-navy" fill="none">
              <path d="M6 26V9l10-5 10 5v17" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
              <path d="M12 26v-8h8v8" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="preloader-bar h-full w-full rounded-full bg-brand-gradient" />
        </div>
      </div>
    </div>
  );
}
