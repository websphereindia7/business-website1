import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import ProcessHorizontal from "./components/ProcessHorizontal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Section id="about" variant="subtle">
          <About />
        </Section>

        <Section id="services">
          <Services />
        </Section>

        <Section id="process" variant="subtle">
          <ProcessHorizontal />
        </Section>

        <Section id="skills" variant="subtle">
          <Skills />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        {/* 🔹 Insights Section (New) */}
        <Section id="insights" variant="subtle">
          <Insights />
        </Section>

        <Section id="contact" variant="divider">
          <Contact />
        </Section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
