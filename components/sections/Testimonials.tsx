"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "./TestimonialCard";

const TestimonialsCarousel = dynamic(() => import("./TestimonialsCarousel"), { ssr: false });

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [loadCarousel, setLoadCarousel] = useState(false);

  // Swiper is only downloaded when the section approaches the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadCarousel(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section overflow-hidden bg-mist">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Our <span className="text-gradient">Clients Say</span>
            </>
          }
          subtitle="Rated 4.9/5 by homeowners, landlords and businesses across Dubai."
        />

        <Reveal delay={0.2} className="mt-14">
          <div ref={ref} className="min-h-[380px]">
            {loadCarousel ? (
              <TestimonialsCarousel />
            ) : (
              <div className="grid gap-6 pb-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
                {testimonials.slice(0, 3).map((t, i) => (
                  <div key={t.name} className={i === 1 ? "hidden md:block" : i === 2 ? "hidden xl:block" : ""}>
                    <TestimonialCard t={t} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
