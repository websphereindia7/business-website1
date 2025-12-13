// src/components/Home.jsx
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Features from './Features'; // ← add this
import Projects from './Projects';
import Testimonials from './Testimonials'; // <-- import here
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <About />
      <Services />
      <Features /> {/* NEW SECTION HERE */}
      <Testimonials /> {/* Add here */}
      <Projects />
      <Testimonials /> {/* added */}
      <Contact />
    </div>
  );
}
