"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="section overflow-hidden">
      <div className="dot-pattern pointer-events-none absolute right-0 top-20 h-80 w-80 opacity-60 [mask-image:radial-gradient(black,transparent_70%)]" />
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A Simple, <span className="text-gradient">Transparent Process</span>
            </>
          }
          subtitle="From first call to final handover, every project follows our proven four-step approach."
        />

        <div ref={ref} className="relative mt-20">
          {/* Desktop horizontal connector */}
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-1 rounded-full bg-slate-100 lg:block">
            <m.div style={{ scaleX: lineScale }} className="h-full origin-left rounded-full bg-brand-gradient" />
          </div>
          {/* Mobile vertical connector */}
          <div className="absolute bottom-10 left-10 top-10 w-1 rounded-full bg-slate-100 lg:hidden">
            <m.div style={{ scaleY: lineScale }} className="h-full origin-top rounded-full bg-brand-gradient" />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map(({ icon: Icon, step, title, text }, i) => (
              <m.li
                key={step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-6 lg:flex-col lg:items-center lg:text-center"
              >
                <div className="relative shrink-0">
                  <span className="absolute inset-0 rounded-full bg-brand/30 opacity-0 transition-opacity duration-500 group-hover:animate-pulse-ring group-hover:opacity-100" />
                  <span className="relative grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-navy text-brand shadow-card transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-navy">
                    <Icon className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                  <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-brand-gradient font-heading text-xs font-bold text-navy shadow-glow">
                    {step}
                  </span>
                </div>
                <div className="flex-1 rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand/30 group-hover:shadow-card lg:mt-8 lg:w-full">
                  <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand">Step {step}</p>
                  <h3 className="mt-2 text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{text}</p>
                </div>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
