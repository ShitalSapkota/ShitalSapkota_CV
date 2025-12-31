import About from "@/components/Pages/About";
import Skills from "@/components/Pages/Skills";
import Hero from "@/components/Pages/Hero";
import Resume from "@/components/Pages/Resume";
import Portfolio from "@/components/Pages/Portfolio";
import Contact from "@/components/Pages/Contact";

export default function HomePage() {
  return (
    <>
      {/* Other sections */}
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />

    </>
  );
}
