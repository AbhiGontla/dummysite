"use client";

import Image from "next/image";
import { m, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock3, Phone, ShieldCheck, Star, Zap } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const delay = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

const headline = ["Complete", "Technical", "Solutions", "For", "Homes", "&", "Businesses"];
const trust = [
  { icon: Clock3, label: "24/7 Support" },
  { icon: BadgeCheck, label: "Licensed Technicians" },
  { icon: Zap, label: "Fast Response" },
];
const heroStats = [
  { value: "500+", label: "Projects" },
  { value: "100+", label: "Clients" },
  { value: "10+", label: "Years Experience" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const cardX = useTransform(sx, (v) => v * 30);
  const cardY = useTransform(sy, (v) => v * 30);
  const cardX2 = useTransform(sx, (v) => v * -22);
  const cardY2 = useTransform(sy, (v) => v * -22);
  const orbX = useTransform(sx, (v) => v * 60);
  const orbY = useTransform(sy, (v) => v * 60);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pb-28 pt-32 sm:pb-36 lg:pb-44 lg:pt-36"
    >
      <m.div style={{ y: bgY }} className="absolute inset-x-0 top-0 h-[120%]">
        <div className="hero-zoom relative h-full w-full">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/hero-mobile.webp" type="image/webp" />
            <img
              src="/images/hero.webp"
              alt="Luxury Dubai villa maintained by professional technicians"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
      </m.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      <div className="grid-pattern absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]" />

      <m.div
        style={{ x: orbX, y: orbY }}
        className="pointer-events-none absolute -left-32 top-[22vh] h-96 w-96 rounded-full bg-brand/25 blur-[120px]"
      />
      <m.div
        style={{ x: cardX2, y: cardY2 }}
        className="pointer-events-none absolute right-[8%] top-[16vh] hidden h-24 w-24 rounded-3xl border border-brand/40 lg:block"
      >
        <div className="h-full w-full animate-spin-slow rounded-3xl border border-dashed border-brand/30" />
      </m.div>
      <div className="pointer-events-none absolute top-[70vh] left-[46%] hidden h-3 w-3 animate-float rounded-full bg-brand shadow-glow lg:block" />
      <div className="pointer-events-none absolute right-[30%] top-[30vh] hidden h-2 w-2 animate-float-delayed rounded-full bg-brand-light lg:block" />

      <m.div style={isDesktop ? { y: contentY, opacity: fade } : undefined} className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span style={delay(0.85)} className="hero-in glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-white sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              Reliable Property Maintenance Experts
            </span>

            <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] text-white sm:text-6xl lg:min-h-[calc(4.32em+16px)] lg:text-[4.25rem]">
              {headline.map((word, i) => (
                <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-1 align-top">
                  <span className={`hero-word ${i >= 4 ? "text-gradient" : ""}`} style={delay(0.95 + i * 0.07)}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p style={delay(1.1)} className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Professional air conditioning, plumbing, electrical, carpentry, tiling, ceiling, and maintenance services
              delivered with quality, speed, and reliability.
            </p>

            <div style={delay(1.32)} className="hero-in mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary group !px-8 !py-4">
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={site.phoneHref} className="btn-ghost !px-8 !py-4">
                <Phone className="h-4 w-4" />
                Contact Now
              </a>
            </div>

            <ul style={delay(1.44)} className="hero-in mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div style={delay(1.56)} className="hero-in mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-3xl glass p-5">
              {heroStats.map((s) => (
                <div key={s.label} className="px-3 text-center first:pl-0 last:pr-0">
                  <p className="font-heading text-2xl font-extrabold sm:text-3xl">
                    <span className="text-gradient">{s.value}</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-400 sm:text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[520px] self-start lg:col-span-5 lg:block">
            <m.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease }}
              className="absolute right-0 top-10 w-72"
            >
              <m.div style={{ x: cardX, y: cardY }}>
              <div className="glass animate-float rounded-3xl p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-navy shadow-glow">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-bold text-white">100% Guaranteed</p>
                    <p className="text-sm text-slate-300">Workmanship warranty</p>
                  </div>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <m.div
                    initial={{ width: 0 }}
                    animate={{ width: "96%" }}
                    transition={{ duration: 1.6, delay: 2.2, ease }}
                    className="h-full rounded-full bg-brand-gradient"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-400">96% repeat customers</p>
              </div>
              </m.div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.85, ease }}
              className="absolute bottom-16 left-0 w-64"
            >
              <m.div style={{ x: cardX2, y: cardY2 }}>
              <div className="glass animate-float-delayed rounded-3xl p-5 shadow-card">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((n) => (
                    <Image
                      key={n}
                      src={`/images/client-${n}.webp`}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-navy object-cover"
                    />
                  ))}
                  <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-brand text-xs font-bold text-navy">
                    +99
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1.5 text-sm font-semibold text-white">4.9/5</span>
                </div>
                <p className="mt-1 text-xs text-slate-300">Trusted by Dubai homeowners</p>
              </div>
              </m.div>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.1, ease }}
              className="absolute right-16 bottom-0 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-glow-lg"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <span className="font-heading text-sm font-semibold text-navy">Technicians available now</span>
            </m.div>
          </div>
        </div>
      </m.div>
    </section>
  );
}
