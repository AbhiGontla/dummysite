"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { benefits } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="dot-pattern pointer-events-none absolute left-0 top-24 h-72 w-72 opacity-60 [mask-image:radial-gradient(black,transparent_70%)]" />
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <m.div
            variants={{
              hidden: { clipPath: "inset(0 100% 0 0 round 32px)" },
              show: { clipPath: "inset(0 0% 0 0 round 32px)", transition: { duration: 1.4, ease } },
            }}
            className="relative aspect-[5/6] overflow-hidden rounded-[32px] shadow-card"
          >
            <m.div
              variants={{ hidden: { scale: 1.3 }, show: { scale: 1, transition: { duration: 1.8, ease } } }}
              className="absolute inset-0"
            >
              <Image
                src="/images/about.webp"
                alt="Prime Edge engineers reviewing project plans"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </m.div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          </m.div>

          <Reveal
            direction="up"
            delay={0.5}
            className="absolute -bottom-10 -right-2 w-48 sm:-right-8 sm:w-60"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-[6px] border-white shadow-card">
              <Image src="/images/about-2.webp" alt="Carpenters working inside a home" fill sizes="240px" className="object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.7} className="absolute -left-3 top-10 sm:-left-8">
            <div className="animate-float rounded-3xl bg-navy p-5 text-white shadow-glow-lg sm:p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-navy">
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading text-3xl font-extrabold leading-none text-white sm:text-4xl">
                    10<span className="text-brand">+</span>
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">Years of Excellence</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-[32px] bg-brand-gradient opacity-90" />
        </m.div>

        <div className="pt-8 lg:pt-0">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> About Us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl">
              Experts You Can <span className="text-gradient">Rely On</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              For over a decade, Prime Edge has kept Dubai&apos;s finest villas, apartments and commercial spaces running
              flawlessly. Our multi-skilled team brings together AC, electrical, plumbing, carpentry and interior
              finishing experts under one roof.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our mission is simple: deliver premium-quality workmanship with honest pricing, punctual service and
              lasting results — so you can enjoy your property without the stress.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={0.35 + i * 0.08}>
                <div className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-mist p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-soft">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-brand transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-heading text-[15px] font-semibold text-navy">{b}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.7}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#services" className="btn-dark group">
                Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-3">
                <span className="font-heading text-4xl font-extrabold text-gradient">98%</span>
                <span className="text-sm leading-tight text-slate-500">
                  Customer
                  <br />
                  satisfaction
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
