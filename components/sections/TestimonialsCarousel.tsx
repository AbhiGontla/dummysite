"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/data";
import { TestimonialCard } from "./TestimonialCard";

export default function TestimonialsCarousel() {
  return (
    <Swiper
      className="testimonial-swiper !overflow-visible"
      modules={[Autoplay, Pagination]}
      loop
      speed={900}
      grabCursor
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3, spaceBetween: 28 } }}
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name} className="!h-auto">
          <TestimonialCard t={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
