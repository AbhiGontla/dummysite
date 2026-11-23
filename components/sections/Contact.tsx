"use client";

import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { services } from "@/lib/data";
import { site, whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Fields = { name: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: "", phone: "", email: "", service: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\+?[\d\s()-]{7,20}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.service) e.service = "Please select a service.";
  if (f.message.trim().length < 10) e.message = "Please describe your requirement (min. 10 characters).";
  return e;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <m.p
          id={id}
          initial={{ opacity: 0, y: -6, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -6, height: 0 }}
          className="mt-1.5 pl-2 text-xs font-medium text-red-500"
        >
          {message}
        </m.p>
      )}
    </AnimatePresence>
  );
}

const contactInfo = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Location", value: site.address, href: site.mapUrl },
  { icon: Clock, label: "Working Hours", value: `${site.hours} · ${site.hoursNote}` },
];

export function Contact() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const next = { ...fields, [e.target.name]: e.target.value };
    setFields(next);
    if (touched[e.target.name as keyof Fields]) setErrors(validate(next));
  };

  const onBlur = (e: { target: { name: string } }) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(fields));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true, service: true, message: true });
    if (Object.keys(errs).length) return;

    // Static hosting has no backend, so the enquiry is delivered via WhatsApp with all details pre-filled.
    const text = `New Quote Request\n\nName: ${fields.name}\nPhone: ${fields.phone}\nEmail: ${fields.email}\nService: ${fields.service}\n\n${fields.message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setFields(initial);
    setTouched({});
  };

  const err = (k: keyof Fields) => (touched[k] ? errors[k] : undefined);
  const fieldClass = (k: keyof Fields) =>
    `input peer ${err(k) ? "!border-red-400 focus:!shadow-[0_0_0_4px_rgba(248,113,113,0.15)]" : ""}`;
  const renderError = (k: keyof Fields) => <FieldError id={`${k}-error`} message={err(k)} />;

  return (
    <section id="contact" className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Let&apos;s Discuss Your <span className="text-gradient">Requirements</span>
            </>
          }
          subtitle="Tell us what you need and our team will get back to you within 30 minutes during working hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-[32px] bg-navy-gradient p-8 text-white shadow-card sm:p-10">
              <div className="grid-pattern absolute inset-0 opacity-60" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-white">Get In Touch</h3>
                <p className="mt-3 text-slate-300">Reach us through any channel — we respond fast.</p>
                <ul className="mt-10 space-y-6">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => {
                    const inner = (
                      <>
                        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-brand ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-navy">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-wider text-slate-400">{label}</span>
                          <span className="mt-1 block font-heading font-semibold text-white">{value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={label}>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="group flex items-center gap-4">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-10 w-full bg-[#25D366] text-white hover:-translate-y-0.5"
                >
                  Chat Instantly on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="lg:col-span-3">
            <div className="relative h-full rounded-[32px] border border-slate-100 bg-white p-6 shadow-card sm:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <m.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <m.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="grid h-20 w-20 place-items-center rounded-full bg-brand-gradient text-navy shadow-glow-lg"
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </m.span>
                    <h3 className="mt-6 text-2xl font-extrabold">Thank you!</h3>
                    <p className="mt-3 max-w-sm text-slate-600">
                      Your request is ready in WhatsApp — just press send and our team will reply shortly.
                    </p>
                    <button type="button" onClick={() => setSent(false)} className="btn-dark mt-8">
                      Send another request
                    </button>
                  </m.div>
                ) : (
                  <m.form
                    key="form"
                    noValidate
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div className="relative">
                      <input id="name" name="name" placeholder="Full Name" autoComplete="name" value={fields.name} onChange={onChange} onBlur={onBlur} className={fieldClass("name")} aria-invalid={!!err("name")} aria-describedby="name-error" />
                      <label htmlFor="name" className="input-label">Full Name *</label>
                      {renderError("name")}
                    </div>
                    <div className="relative">
                      <input id="phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" value={fields.phone} onChange={onChange} onBlur={onBlur} className={fieldClass("phone")} aria-invalid={!!err("phone")} aria-describedby="phone-error" />
                      <label htmlFor="phone" className="input-label">Phone Number *</label>
                      {renderError("phone")}
                    </div>
                    <div className="relative">
                      <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" value={fields.email} onChange={onChange} onBlur={onBlur} className={fieldClass("email")} aria-invalid={!!err("email")} aria-describedby="email-error" />
                      <label htmlFor="email" className="input-label">Email Address *</label>
                      {renderError("email")}
                    </div>
                    <div className="relative">
                      <select id="service" name="service" value={fields.service} onChange={onChange} onBlur={onBlur} className={`${fieldClass("service")} appearance-none ${fields.service ? "" : "text-transparent"}`} aria-invalid={!!err("service")} aria-describedby="service-error">
                        <option value="" disabled hidden />
                        {services.map((s) => (
                          <option key={s.title} value={s.title} className="text-navy">{s.title}</option>
                        ))}
                        <option value="Other" className="text-navy">Other</option>
                      </select>
                      <label htmlFor="service" className={`input-label ${fields.service ? "!top-2 !text-xs" : ""}`}>Service Required *</label>
                      <svg className="pointer-events-none absolute right-5 top-[1.35rem] h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" /></svg>
                      {renderError("service")}
                    </div>
                    <div className="relative sm:col-span-2">
                      <textarea id="message" name="message" rows={5} placeholder="Message" value={fields.message} onChange={onChange} onBlur={onBlur} className={`${fieldClass("message")} resize-none`} aria-invalid={!!err("message")} aria-describedby="message-error" />
                      <label htmlFor="message" className="input-label">Tell us about your project *</label>
                      {renderError("message")}
                    </div>
                    <div className="flex flex-col items-start justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                      <p className="text-xs text-slate-500">We respect your privacy. No spam, ever.</p>
                      <button type="submit" className="btn-primary group w-full !px-9 !py-4 sm:w-auto">
                        Send Request
                        <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </m.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
