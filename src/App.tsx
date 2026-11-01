import { useCallback, useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  return (
    <>
      <Loader onDone={handleIntroDone} />
      <CustomCursor />
      <Header logoVisible={introDone} />
      <Sidebar />

      <main>
        <Hero />
        <hr className="hr-rule" />
        <div className="h-[8vh] md:h-[12vh] lg:h-[20vh]" />

        <Works />
        <div className="h-[25vh]" />
        <hr className="hr-rule" />
        <div className="h-[20vh]" />

        <About />
        <div className="h-[25vh]" />
        <hr className="hr-rule" />
        <div className="h-[20vh]" />

        <Process />
        <div className="h-[25vh]" />
        <hr className="hr-rule" />
        <div className="h-[20vh]" />

        <Contact />
        <div className="h-[20vh]" />
      </main>

      <Footer />
    </>
  );
}
