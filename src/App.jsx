import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">Studio Arc</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="scroll-smooth">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Studio Arc. All rights reserved.</p>
          <p className="text-neutral-500">Modern architecture — timeless impact.</p>
        </div>
      </footer>
    </div>
  );
}
