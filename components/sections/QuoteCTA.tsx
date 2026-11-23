"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function QuoteCTA() {
  return (
    <section id="quote" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <Image src="/images/cta-bg.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy-800/80" />

      <m.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full border border-dashed border-brand/25"
      />
      <m.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-40 -left-20 h-[32rem] w-[32rem] rounded-[6rem] border border-white/10"
      />
      <div className="pointer-events-none absolute left-[15%] top-16 hidden h-16 w-16 animate-float rounded-2xl bg-brand-gradient opacity-80 shadow-glow-lg sm:block" />
      <div className="pointer-events-none absolute bottom-16 right-[18%] hidden h-10 w-10 animate-float-delayed rounded-full border-4 border-brand/60 sm:block" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]" />

      <div className="container relative text-center">
        <Reveal>
          <span className="eyebrow">Free Estimate · No Obligation</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Ready To Start Your <span className="text-gradient">Next Project?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">Get a free estimate from our expert team today.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary group !px-9 !py-4 text-base">
              Get Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !px-9 !py-4 bg-[#25D366] text-base text-white shadow-[0_12px_35px_-8px_rgba(37,211,102,.7)] hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
