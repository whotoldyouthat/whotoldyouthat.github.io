import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Floater() {
  const floaterRef = useRef(null);

  useEffect(() => {
    const el = floaterRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <aside ref={floaterRef} className="floatContainer">
      <h5>5pm&emsp;/&emsp;April 29</h5>
      <details>
        <summary>
          <h5>Torrens University</h5>
        </summary>
        <a href="https://maps.app.goo.gl/8MPbfFYUq8fiqDVD8" target="_blank">
          <h6>Fortitude Valley Campus — Level 2</h6>
        </a>
      </details>

      <h5>rsvp april 22</h5>
      <br />
      <h5>
        <b>!!</b> Registration essential <b>!!</b>
      </h5>
    </aside>
  );
}

export default Floater;
