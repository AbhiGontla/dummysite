"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="section bg-mist">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Complete Technical & <span className="text-gradient">Maintenance Solutions</span>
            </>
          }
          subtitle="Our expert team handles all residential and commercial maintenance requirements."
        />

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          {services.map(({ icon: Icon, title, text, image }) => (
            <m.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="animated-border group rounded-[28px]"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[27px] bg-white shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-20px_rgba(247,148,29,0.35)]">
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${title} in Dubai`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  </div>
                  <span className="absolute bottom-0 left-6 z-10 grid h-16 w-16 translate-y-1/2 place-items-center rounded-2xl bg-brand-gradient text-navy shadow-glow transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-12">
                  <h3 className="text-xl font-bold text-navy transition-colors group-hover:text-brand">{title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">{text}</p>
                  <a
                    href={whatsappLink(`Hello! I'd like to know more about your ${title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 font-heading text-sm font-semibold text-navy transition-all duration-300 hover:border-brand hover:bg-brand hover:text-navy group-hover:border-brand"
                  >
                    Learn More<span className="sr-only"> about {title}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </m.article>
          ))}

          <m.article
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-navy-gradient p-8 text-white shadow-card sm:col-span-2 lg:col-span-2"
          >
            <div className="grid-pattern absolute inset-0 opacity-50" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative">
              <p className="eyebrow">Can&apos;t find your service?</p>
              <h3 className="mt-5 max-w-lg text-2xl font-extrabold text-white sm:text-3xl">
                We handle <span className="text-gradient">any technical job</span> — big or small.
              </h3>
              <p className="mt-3 max-w-lg text-slate-300">
                Annual maintenance contracts, handyman jobs, painting, waterproofing, renovations & more.
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Request a Service <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </m.article>
        </m.div>
      </div>
    </section>
  );
}
