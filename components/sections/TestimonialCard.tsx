import Image from "next/image";
import { Quote, Star } from "lucide-react";
import type { testimonials } from "@/lib/data";

export type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="group relative flex h-full flex-col rounded-[28px] border border-slate-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 hover:shadow-card">
      <Quote className="absolute right-7 top-7 h-12 w-12 text-brand/15 transition-colors duration-500 group-hover:text-brand/30" />
      <div className="flex gap-1 text-brand" role="img" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        &ldquo;{t.review}&rdquo;
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
        <span className="relative h-14 w-14 shrink-0 rounded-full bg-brand-gradient p-[2px]">
          <Image
            src={t.image}
            alt={t.name}
            width={56}
            height={56}
            className="h-full w-full rounded-full border-2 border-white object-cover"
          />
        </span>
        <span>
          <span className="block font-heading font-bold text-navy">{t.name}</span>
          <span className="block text-sm text-slate-500">{t.location}</span>
        </span>
      </figcaption>
    </figure>
  );
}
