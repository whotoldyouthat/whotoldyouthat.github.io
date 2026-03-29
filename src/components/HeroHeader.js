import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

import "../styles/header.css";

function HeroHeader() {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray(".heroWord");
      const splits = [];

      words.forEach((word, index) => {
        const heading = word.querySelector("h1");
        const subheading = word.querySelector("h2");

        if (!heading && !subheading) return;

        if (heading) {
          const headingSplit = new SplitText(heading, {
            type: "chars",
            charsClass: "char",
          });

          splits.push(headingSplit);

          gsap.from(headingSplit.chars, {
            opacity: 0,
            y: 20,
            duration: 0.9,
            ease: "power4.out",
            stagger: {
              each: 0.25,
              from: "random",
            },
            delay: index * 0.15,
          });
        }

        if (subheading) {
          const subheadingSplit = new SplitText(subheading, {
            type: "words",
            wordsClass: "word",
          });

          splits.push(subheadingSplit);

          gsap.from(subheadingSplit.words, {
            opacity: 0,
            y: 16,
            duration: 1.2,
            ease: "power4.out",
            delay: index * 0.2 + 0.2,
          });
        }

        const speed = parseFloat(word.dataset.speed || "1");
        const moveY = (speed - 1) * 60;

        gsap.to(word, {
          y: moveY,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      return () => {
        splits.forEach((split) => split.revert());
      };
    },
    { scope: headerRef }
  );

  return (
    <div ref={headerRef} className="graphicHeader">
      <div className="heroWord" data-speed="1.1">
        <h1>who</h1>
      </div>
      <div className="heroWord" data-speed="1.2">
        <h1>told</h1>
      </div>
      <div className="heroWord" data-speed="1.4">
        <h1>you</h1>
      </div>
      <div className="heroWord" data-speed="1.8">
        <h1>that?</h1>
      </div>
      <div className="heroWord" data-speed="1.8">
        <h2>Creativity, Masculinity & the way forward</h2>
      </div>
    </div>
  );
}

export default HeroHeader;
