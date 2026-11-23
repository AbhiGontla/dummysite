import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", dark = false }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-navy"}`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
