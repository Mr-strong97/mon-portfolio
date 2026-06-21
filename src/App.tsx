
import { Navbar } from './components/organisms/Navbar';
import { Hero } from './components/organisms/Hero';
import { About } from './components/organisms/About';
import { Skills } from './components/organisms/Skills';
import { Experience } from './components/organisms/Experience';
import { Education } from './components/organisms/Education';
import { Projects } from './components/organisms/Projects';
import { Testimonials } from './components/organisms/Testimonials';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <div className="font-poppins ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
