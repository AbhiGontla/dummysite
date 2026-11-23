"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { whyUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section overflow-hidden bg-navy">
      <Image
        src="/images/why-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      <div className="grid-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-light/10 blur-[120px]" />

      <div className="container relative">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title={
            <>
              The Trusted Choice for <span className="text-gradient">Dubai Properties</span>
            </>
          }
          subtitle="We combine technical mastery with five-star customer care — that's why homeowners and businesses keep coming back."
        />

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyUs.map(({ icon: Icon, title, text, stat, statLabel }) => (
            <m.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-brand/50 hover:bg-white/[0.08] hover:shadow-glow-lg"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition-all duration-500 group-hover:bg-brand/30" />
              <span className="relative grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-brand/20 to-brand-light/5 text-brand ring-1 ring-brand/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-navy">
                <Icon className="h-9 w-9" strokeWidth={1.5} />
              </span>
              <h3 className="relative mt-8 text-xl font-bold text-white">{title}</h3>
              <p className="relative mt-3 leading-relaxed text-slate-400">{text}</p>
              <div className="relative mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                <span className="font-heading text-3xl font-extrabold text-gradient">{stat}</span>
                <span className="text-xs uppercase tracking-wider text-slate-400">{statLabel}</span>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
