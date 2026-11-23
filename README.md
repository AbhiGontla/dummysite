# Prime Edge Technical Services — Premium One-Page Website

A luxury, highly animated one-page website for a Dubai technical maintenance company.
Built with **Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide · Swiper · React CountUp**,
exported as a **static site**, so it runs on any GoDaddy hosting plan (cPanel / Web Hosting). No Node.js server is required.

---

## 🚀 Deploy to GoDaddy (cPanel) — 5 minutes

The ready-to-upload site is in **`godaddy-upload.zip`** (same contents as the `out/` folder).

1. Log in to **GoDaddy → My Products → Web Hosting → Manage → cPanel Admin**.
2. Open **File Manager** → go to **`public_html`** (the root of your domain).
   - Delete or back up any default files there (e.g. `default.html`, an old `index.html`).
3. Click **Upload** → select `godaddy-upload.zip` → wait for 100%.
4. Back in File Manager, right-click the zip → **Extract** → extract into `/public_html`.
   - Make sure `index.html`, `.htaccess`, `_next/` and `images/` sit **directly** inside `public_html` (not inside a sub-folder).
   - `.htaccess` is a hidden file: use **Settings → Show Hidden Files (dotfiles)** to see it.
5. Delete the zip from the server, then visit your domain. ✅

**SSL:** `.htaccess` forces HTTPS. Activate the free SSL certificate in GoDaddy first. If your domain has no SSL yet,
comment out the two `RewriteCond %{HTTPS} off` / `RewriteRule` lines in `.htaccess`.

> Uploading via FTP (FileZilla) works too: upload the **contents** of `out/` into `public_html`.

---

## ✏️ Customise your business details

| What | Where |
| --- | --- |
| Company name, phone, WhatsApp, email, address, hours, social links, **domain URL** | `lib/site.ts` |
| Services, features, process steps, stats, testimonials, nav links | `lib/data.ts` |
| Colours, shadows, animations | `tailwind.config.ts`, `app/globals.css` |
| Logo (SVG mark + wordmark) | `components/ui/Logo.tsx`, `public/favicon.svg` |
| Images | `public/images/*.webp` (keep the same file names, or update paths in `lib/data.ts`) |
| SEO title / description / Open Graph | `app/layout.tsx` |

⚠️ Set `url` in `lib/site.ts` to your real domain (e.g. `https://www.primeedge.ae`) so the canonical URL, sitemap and
social-share image are correct. Then rebuild.

### Rebuild after changes
```bash
npm install
npm run build        # outputs the static site to /out
```
Then re-upload the contents of `out/` (or zip it) to `public_html`.

Local preview: `npm run dev` → http://localhost:3000

---

## 📩 Contact form
GoDaddy shared hosting serves static files, so there is no backend. The form validates every field and then opens
**WhatsApp** with the full enquiry (name, phone, email, service, message) pre-filled to your business number.
This gives you instant, high-converting lead delivery with zero server setup.
To send by email instead, point the form at a service such as Formspree, Web3Forms or EmailJS in
`components/sections/Contact.tsx` (`onSubmit`).

---

## 📁 Project structure
```
app/
  layout.tsx          Fonts (Poppins/Inter, self-hosted), SEO metadata, JSON-LD LocalBusiness schema
  page.tsx            Page composition
  globals.css         Design system utilities, glass, glow, CSS hero/preloader animations
  sitemap.ts / robots.ts / not-found.tsx
components/
  layout/             Navbar (glass on scroll, active section), Footer, Preloader, FloatingActions (WhatsApp, progress bar, back-to-top)
  sections/           Hero, Features, About, Services, WhyChooseUs, Process, Stats, Testimonials (+Carousel, Card), QuoteCTA, Contact
  ui/                 Reveal (scroll animations), SectionHeading, Logo, WhatsAppIcon, MotionProvider (LazyMotion)
lib/
  site.ts             Business config
  data.ts             All content
public/
  images/             Optimised WebP images
  .htaccess           GoDaddy/Apache: HTTPS, gzip, long-term caching, security headers, 404
```

## ⚡ Performance (Lighthouse, measured locally with gzip)
| | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Desktop | 99 | 100 | 100 | 100 |
| Mobile (slow-4G simulation) | 93 | 100 | 100 | 100 |

Techniques used: static export, inlined CSS, CSS-driven hero/preloader (no JS needed for first paint), responsive hero
image with preload, lazy-loaded images, Swiper loaded only near the testimonials section, LazyMotion for Framer Motion,
self-hosted fonts, zero layout shift on mobile.

## 🖼 Images
Photos are royalty-free from [Unsplash](https://unsplash.com/license), free for commercial use. They have been resized
and converted to WebP. For the strongest brand trust, replace them with real photos of your team and projects.
