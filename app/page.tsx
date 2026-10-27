import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Stats from "./components/sections/Stats";

const sections = [
  { id: "stats", Component: Stats },
  { id: "about", Component: About },
  { id: "skills", Component: Skills },
  { id: "experience", Component: Experience },
  { id: "projects", Component: Projects },
  { id: "education", Component: Education },
  { id: "achievements", Component: Achievements },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-clip bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      <main id="home" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section
          id="hero"
          className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto w-full">
            <Hero />
          </div>
        </section>

        {sections.map(({ id, Component }) => (
          <section
            key={id}
            id={id}
            className="-scroll-mt-0.75 border-t border-border py-12 sm:py-16 lg:py-20"
          >
            <Component />
          </section>
        ))}
      </main>

      <section
        id="contact"
        className="-scroll-mt-0.75 border-t border-border bg-surface px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <Contact />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
