import About from "./components/About";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // new LocomotiveScroll();
  return (
    <main className=" bg-gradient-to-tl from-black to-btn min-h-screen ">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
