"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative z-20 -mt-10 pb-8 sm:-mt-16 lg:-mt-24">
      <h2 id="features-title" className="sr-only">Why homeowners book with us</h2>
      <div className="container">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, text }, i) => (
            <m.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative overflow-hidden rounded-[28px] glass-light p-8 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-glow-lg"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-navy text-brand shadow-soft transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-brand-gradient group-hover:text-navy">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <span className="font-heading text-5xl font-extrabold text-slate-100 transition-colors duration-500 group-hover:text-brand/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-navy transition-colors group-hover:text-brand"
              >
                Book now <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
