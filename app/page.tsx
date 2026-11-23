import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Contact } from "@/components/sections/Contact";
import { MotionProvider } from "@/components/ui/MotionProvider";

export default function HomePage() {
  return (
    <MotionProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Stats />
        <Testimonials />
        <QuoteCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </MotionProvider>
  );
}
