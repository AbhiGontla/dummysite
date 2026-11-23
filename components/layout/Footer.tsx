import { ArrowUpRight, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { navLinks, services } from "@/lib/data";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

const socials = [
  { href: site.social.facebook, label: "Facebook", Icon: Facebook },
  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
  { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.social.youtube, label: "YouTube", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-slate-400">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="container relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Dubai&apos;s trusted partner for complete technical and property maintenance — delivering quality,
            speed and reliability to homes and businesses across the UAE.
          </p>
          <div className="mt-7 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-navy hover:shadow-glow"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-heading text-base font-bold text-white">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="group inline-flex items-center gap-1.5 transition-colors hover:text-brand">
                  <span className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-3" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-heading text-base font-bold text-white">Our Services</h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.title}>
                <a href="#services" className="group inline-flex items-center gap-1.5 transition-colors hover:text-brand">
                  <span className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-3" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-heading text-base font-bold text-white">Contact Us</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                {site.hours}
                <br />
                <span className="text-brand">{site.hoursNote}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href="#home" className="inline-flex items-center gap-1 transition-colors hover:text-brand">
            Back to top <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
