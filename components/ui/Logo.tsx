import { site } from "@/lib/site";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label={`${site.name} – Home`}>
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient shadow-glow transition-transform duration-500 group-hover:rotate-[8deg]">
        <svg viewBox="0 0 32 32" className="h-6 w-6 text-navy" fill="none" aria-hidden="true">
          <path d="M6 26V9l10-5 10 5v17" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M12 26v-8h8v8" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
          <circle cx="16" cy="12" r="1.8" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-heading text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          PRIME<span className="text-gradient">EDGE</span>
        </span>
        <span className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] ${light ? "text-slate-300" : "text-slate-500"}`}>
          {site.tagline}
        </span>
      </span>
    </a>
  );
}
