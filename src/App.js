import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Footer from "./components/Footer";
import HeroHeader from "./components/HeroHeader";
import InfoSection from "./components/InfoSection";

import "./styles/main.css";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

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

const appRef = useRef(null);

useGSAP(
  () => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1 });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.6,
      ease: "power3",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const scaleTo = gsap.quickTo(cursor, "scale", {
      duration: 0.2,
      ease: "power2.out",
    });

    const handleMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleOver = (e) => {
      const target = e.target.closest(".cursorTarget");
      if (target) {
        scaleTo(1.8);
        cursor.classList.add("cursor--active");
      }
    };

    const handleOut = (e) => {
      const target = e.target.closest(".cursorTarget");
      if (target) {
        scaleTo(1);
        cursor.classList.remove("cursor--active");
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  },
  { scope: appRef }
);

  

  return (
    <div className="App">
      <div className="cursor" />
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
