"use client";
import Hero from "./components/hero-section/Hero";
import Projects from "./components/projects-section/Projects";
import Skills from "./components/skills-section/Skills";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";


export default function Home() {


  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
