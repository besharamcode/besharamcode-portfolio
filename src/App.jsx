import About from "./components/About";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  new LocomotiveScroll();
  return (
    <main className=" bg-gradient-to-tl from-[#000000] to-[#3F3F3F] min-h-screen ">
      <Header />
      <Hero />
      <About />
    </main>
  );
}

export default App;
