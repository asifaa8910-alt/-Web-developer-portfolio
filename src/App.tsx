import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Services from './components/Services';
import SoftSkills from './components/SoftSkills';
import Competitions from './components/Competitions';
import Hackathons from './components/Hackathons';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      <Skills />
      <SoftSkills />
      <Competitions />
      <Hackathons />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
