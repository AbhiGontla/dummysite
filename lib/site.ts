/**
 * Central business configuration — edit these values to rebrand the site.
 */
export const site = {
  name: "Prime Edge Technical Services",
  shortName: "Prime Edge",
  tagline: "Technical Services L.L.C",
  url: "https://www.yourdomain.com",
  description:
    "Dubai's trusted technical maintenance company. Professional AC, plumbing, electrical, carpentry, tiling, false ceiling, wallpaper and MEP services for villas, apartments and businesses. 24/7 support.",
  phone: "+971 50 123 4567",
  phoneHref: "tel:+971501234567",
  whatsapp: "971501234567",
  email: "info@yourdomain.com",
  address: "Business Bay, Dubai, United Arab Emirates",
  mapUrl: "https://maps.google.com/?q=Business+Bay+Dubai",
  hours: "Mon – Sat: 8:00 AM – 8:00 PM",
  hoursNote: "Emergency support 24/7",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
} as const;

export const whatsappLink = (text = "Hello! I'd like a free quote for maintenance services.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
