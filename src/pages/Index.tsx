import { Navbar } from "@/components/lbn/Navbar";
import { Hero } from "@/components/lbn/Hero";
import { Stats } from "@/components/lbn/Stats";
import { About } from "@/components/lbn/About";
import { Services } from "@/components/lbn/Services";
import { Work } from "@/components/lbn/Work";
import { Process } from "@/components/lbn/Process";
import { Stack } from "@/components/lbn/Stack";
import { Testimonials } from "@/components/lbn/Testimonials";
import { Contact } from "@/components/lbn/Contact";
import { Footer } from "@/components/lbn/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Work />
      <Process />
      <Stack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
