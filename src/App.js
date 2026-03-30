import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "./components/Footer";
import HeroHeader from "./components/HeroHeader";
import InfoSection from "./components/InfoSection";

import "./styles/main.css";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function App() {
  const homeRef = useRef(null);
  const infoRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = useCallback((section) => {
    const target = section === "home" ? homeRef.current : infoRef.current;
    if (!target) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 80,
        autoKill: false,
      },
      ease: "power2.out",
    });
  }, []);

  const handleHomeClick = useCallback(() => {
    scrollToSection("home");
  }, [scrollToSection]);

  const handleInfoClick = useCallback(() => {
    scrollToSection("info");
  }, [scrollToSection]);

  useEffect(() => {
    const homeTrigger = ScrollTrigger.create({
      trigger: homeRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActiveSection("home"),
      onEnterBack: () => setActiveSection("home"),
    });

    const infoTrigger = ScrollTrigger.create({
      trigger: infoRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActiveSection("info"),
      onEnterBack: () => setActiveSection("info"),
    });

    return () => {
      homeTrigger.kill();
      infoTrigger.kill();
      gsap.killTweensOf(window);
    };

  }, []);

  return (
    <div className="App">
      <section ref={homeRef} className="section hero-section">
        <HeroHeader />
        <div className="peak" />
      </section>

      <InfoSection sectionRef={infoRef} />

      <Footer
        activeSection={activeSection}
        onHomeClick={handleHomeClick}
        onInfoClick={handleInfoClick}
      />
    </div>
  );
}
