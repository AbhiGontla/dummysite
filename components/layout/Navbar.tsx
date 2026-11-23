"use client";

import { AnimatePresence, m } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { site, whatsappLink } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`nav-in fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow,border-color] duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-navy/75 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between gap-6" aria-label="Main navigation">
        <Logo />

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium ring-1 transition-all duration-300 ${
                  active === link.id
                    ? "bg-white/10 text-white ring-white/15"
                    : "text-slate-300 ring-transparent hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_-6px_rgba(37,211,102,.7)] transition-transform hover:-translate-y-0.5 sm:grid"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a href={site.phoneHref} className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 -z-10 overflow-hidden bg-navy xl:hidden"
          >
            <m.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              className="container flex flex-col gap-1 pt-28"
            >
              {navLinks.map((link) => (
                <m.li
                  key={link.id}
                  variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-heading text-2xl font-bold ${
                      active === link.id ? "text-brand" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </m.li>
              ))}
              <m.li
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href={site.phoneHref} className="btn-primary">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
              </m.li>
            </m.ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
