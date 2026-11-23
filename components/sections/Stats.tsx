"use client";

import CountUp from "react-countup";
import { m } from "framer-motion";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section aria-label="Company statistics" className="relative overflow-hidden bg-brand-gradient py-16 sm:py-20">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#0F172A_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
      <div className="container relative grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <m.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`text-center ${i > 0 ? "lg:border-l lg:border-navy/15" : ""} ${i % 2 === 1 ? "border-l border-navy/15" : ""}`}
          >
            <p className="font-heading text-5xl font-extrabold text-navy sm:text-6xl">
              <CountUp end={s.value} duration={2.5} enableScrollSpy scrollSpyOnce suffix={s.suffix} />
            </p>
            <p className="mt-2 font-heading text-sm font-semibold uppercase tracking-wider text-navy/75">{s.label}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
}
