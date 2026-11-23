import {
  AirVent,
  Brush,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Grid3x3,
  Hammer,
  HardHat,
  Layers,
  type LucideIcon,
  PaintRoller,
  Search,
  ShieldCheck,
  Siren,
  Smile,
  Sparkles,
  Wrench,
  Zap,
  Droplets,
  Cog,
  Users,
} from "lucide-react";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "process", label: "How We Work" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
] as const;

export type Feature = { icon: LucideIcon; title: string; text: string };

export const features: Feature[] = [
  {
    icon: HardHat,
    title: "Fully Equipped Technicians",
    text: "Certified specialists arrive with professional-grade tools, spare parts and safety gear — ready to fix it right the first time.",
  },
  {
    icon: CalendarCheck,
    title: "Quick & Easy Booking",
    text: "Book in under 60 seconds by phone, WhatsApp or online. Same-day visits available across Dubai.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Work Quality",
    text: "Every job is inspected and backed by our workmanship warranty, so you enjoy complete peace of mind.",
  },
];

export const benefits = [
  "Friendly & Transparent Service",
  "Time & Energy Saved",
  "Lasting Professional Results",
  "Complete Peace Of Mind",
];

export type Service = { icon: LucideIcon; title: string; text: string; image: string };

export const services: Service[] = [
  {
    icon: AirVent,
    title: "AC Installation & Maintenance",
    text: "Split, ducted & central AC installation, gas top-up, coil cleaning and preventive maintenance contracts.",
    image: "/images/svc-ac.webp",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    text: "Leak detection, pipe repair, water heaters, pumps and complete bathroom & kitchen plumbing.",
    image: "/images/svc-plumbing.webp",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    text: "DB upgrades, wiring, lighting design, fault finding and DEWA-compliant electrical installations.",
    image: "/images/svc-electrical.webp",
  },
  {
    icon: Hammer,
    title: "Carpentry Works",
    text: "Custom wardrobes, kitchen cabinets, doors, wooden flooring and bespoke joinery for villas & offices.",
    image: "/images/svc-carpentry.webp",
  },
  {
    icon: Grid3x3,
    title: "Tiling Works",
    text: "Precision floor & wall tiling, marble, porcelain and mosaic finishes with perfect alignment.",
    image: "/images/svc-tiling.webp",
  },
  {
    icon: Layers,
    title: "False Ceiling Works",
    text: "Gypsum and acoustic ceilings with concealed lighting, cove designs and seamless finishing.",
    image: "/images/svc-ceiling.webp",
  },
  {
    icon: Brush,
    title: "Wallpaper Installation",
    text: "Premium wallpaper supply and fitting, feature walls and flawless surface preparation.",
    image: "/images/svc-wallpaper.webp",
  },
  {
    icon: PaintRoller,
    title: "Plaster Works",
    text: "Interior & exterior plastering, crack repair, skim coating and smooth paint-ready walls.",
    image: "/images/svc-plaster.webp",
  },
  {
    icon: Sparkles,
    title: "Decorative Works",
    text: "Luxury interior finishes, wall cladding, moulding, feature lighting and décor upgrades.",
    image: "/images/svc-decorative.webp",
  },
  {
    icon: Cog,
    title: "MEP Services",
    text: "Integrated mechanical, electrical & plumbing solutions for fit-outs and commercial projects.",
    image: "/images/svc-mep.webp",
  },
];

export const whyUs = [
  {
    icon: Users,
    title: "Multi-Skilled Technical Team",
    text: "One call covers every trade — AC, electrical, plumbing, carpentry and finishing.",
    stat: "25+",
    statLabel: "Specialists",
  },
  {
    icon: Clock,
    title: "Reliable & Timely Service",
    text: "Punctual arrival windows and projects delivered on schedule, every time.",
    stat: "98%",
    statLabel: "On-time rate",
  },
  {
    icon: Smile,
    title: "Friendly Professionals",
    text: "Courteous, uniformed and background-checked technicians who respect your home.",
    stat: "4.9★",
    statLabel: "Avg. rating",
  },
  {
    icon: Siren,
    title: "24/7 Emergency Support",
    text: "Burst pipe or AC breakdown at midnight? Our rapid-response team is always on call.",
    stat: "60min",
    statLabel: "Response",
  },
];

export const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Consultation & Site Visit",
    text: "We listen to your requirements and inspect the site to understand the full scope of work.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Planning & Transparent Quotation",
    text: "You receive a detailed, itemised quotation with clear timelines — no hidden charges.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Professional Execution",
    text: "Our skilled team delivers the work to the highest standards with minimal disruption.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Final Inspection & Handover",
    text: "A thorough quality check and walkthrough before we hand over a spotless finished space.",
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Satisfied Clients" },
  { value: 25, suffix: "+", label: "Expert Staff" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    location: "Emirates Hills, Dubai",
    image: "/images/client-1.webp",
    rating: 5,
    review:
      "Outstanding service from start to finish. They handled the complete AC overhaul and electrical upgrade of our villa — punctual, tidy and genuinely professional.",
  },
  {
    name: "Sarah Johnson",
    location: "Dubai Marina",
    image: "/images/client-2.webp",
    rating: 5,
    review:
      "Booked a plumber on WhatsApp in the morning and the leak was fixed by lunchtime. Transparent pricing and a friendly team. Highly recommended!",
  },
  {
    name: "Marco Rossi",
    location: "Business Bay",
    image: "/images/client-3.webp",
    rating: 5,
    review:
      "They completed the false ceiling, lighting and wallpaper for our office fit-out ahead of schedule. The finish quality is truly premium.",
  },
  {
    name: "Emily Carter",
    location: "Arabian Ranches",
    image: "/images/client-4.webp",
    rating: 5,
    review:
      "Our kitchen carpentry and tiling look absolutely stunning. Excellent attention to detail and they left the house spotless every day.",
  },
  {
    name: "David Thompson",
    location: "Palm Jumeirah",
    image: "/images/client-5.webp",
    rating: 5,
    review:
      "We have an annual maintenance contract with them for three properties. Reliable, responsive and always professional — true peace of mind.",
  },
  {
    name: "Layla Hassan",
    location: "Downtown Dubai",
    image: "/images/client-6.webp",
    rating: 5,
    review:
      "Called for an emergency AC breakdown late at night and a technician arrived within the hour. Exceptional service — customers for life!",
  },
];
