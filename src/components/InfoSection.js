import Floater from "./Floater";
import CardCarousel from "./CardCarousel";
import { ReactComponent as Logos } from "../assets/img/bb_tua.svg";
import { ReactComponent as Social } from "../assets/img/ig.svg";
import { useRef } from "react";
import gsap from "gsap";

const infoSections = [
  {
    title: "WHAT IT IS",
    body: (
      <>
        <p>
          This student-led initiative brings together voices from across the
          creative industries, alongside perspectives from education, community,
          and mental wellbeing spaces, to explore how lasting cultural change is
          shaped not only by what we create, but also by the systems and spaces
          that surround us.
        </p>
        <p>
          Whether you're making culture, supporting people, shaping systems, or
          simply interested in the conversation, this is a space to interrogate
          your beliefs, question where they come from, and take responsibility
          for what comes next.
        </p>
      </>
    ),
  },
  {
    title: "WHY IT IS",
    body: (
      <>
      <p>
        Our research this trimester has led us to exploring the cultural impact of harmful gender norms and the influence of toxic masculinity. While modern masculinity appears to be progressing toward a more emotionally intelligent, equality driven ideal, the rapid rise of <i>The Manosphere</i>, with its emphasis
on dominance and rigid gender roles, reveals an
undeniable and unresolved tension between two
very different value systems.
      </p>
      <p>
        This problem has real, measurable, and
intersectional consequences. While women (cis
and trans), nonbinary folk, and other gender-diverse
communities disproportionately experience harm
from toxic masculinity, men themselves also suffer
through poor mental health, damaged relationships,
and fractured senses of identity — stifling social
progression for all. 
      </p>
      <p>
This isn't anything new, but we're
asking why it persists. Where do our current systems
fall short, and what do we need to do differently?
      </p>
      </>
      
    ),
  },
  {
    title: "WHAT IT ISN'T",
    body: (
      <p>
        This is not a lecture, and it is not a finger pointing exercise.{" "}
        <i>Who Told You That?</i> is a space to ask difficult questions,
        challenge inherited ideas, and imagine creative and constructive ways
        forward.
      </p>
    ),
  },
  {
    title: "WHAT TO EXPECT",
    body: (
      <ul>
        <li>Guest speaker Q &amp; A</li>
        <li>Student innovation showcase</li>
        <li>Light nibbles (cheese)</li>
        <li>
          <b>Heavy</b> exchanging of ideas
        </li>
      </ul>
    ),
  },
];

function InfoSection({ sectionRef }) {

  const guestsRef = useRef(null);

const scrollToGuests = () => {
  if (!guestsRef.current) return;

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: guestsRef.current,
      offsetY: 80,
      autoKill: false,
    },
    ease: "power2.out",
  });
};

  return (
    <section ref={sectionRef} className="section info-section">
      <div className="content">
        <div className="contentMain">
          <div className="contentHeader">
            <h4>
              What does healthier masculinity look like, and what role can the
              creative industries play in shaping it?
            </h4>
          </div>


          <div className="infoText">

            <div className="infoRow infoIntroRow">

              <div className="infoLabel" />
              
                <div className="infoBody">
                  <h6>
                    Join us for an evening of candid conversation about masculinity, culture, and the creative power to shape what comes next — featuring guest panel discussion, audience participation, and a student innovation showcase.
                  </h6>
                  <button type="button" className="skipLink cursorTarget" onClick={scrollToGuests}>
                    👉&ensp;Skip the explainer — show me who I'm talking to
                  </button>
                </div>
              </div>

              {infoSections.map((section) => (
                <div className="infoRow" key={section.title}>

                  <div className="infoLabel">
                    <h5>{section.title}</h5>
                  </div>

                  <div className="infoBody">
                    {section.body}
                  </div>

                </div>
              ))}

            <div className="infoRow">

              <div className="infoLabel">
                <h5>THE GUESTS</h5>
              </div>

              <div className="infoBody">
                <div ref={guestsRef} className="guestSection">
                  <CardCarousel />
                </div>
              </div>

            </div>

              <div className="infoRow">
                <div className="infoLabel">
                  <h5>Get Involved</h5>
                </div>
                <div className="infoBody">

                  <p>No one arrives at a conversation empty-handed. Our beliefs, opinions, and ways of thinking are shaped by lived experience — taught, questioned, resisted and carried with us through life — and your perspective is as unique as it is important.</p>

                  <p>
                    This is your opportunity to submit your most relevant, thought-provoking questions for our panel, and we'll ask them on your behalf.

                  </p>

                  <p>We really believe the conversation we are trying to create is stronger when it includes the people it's speaking to. By submitting a question, you're helping to bring more honesty, nuance, and real-world experience into the discussion.</p>

                  <button type="button" className="skipLink cursorTarget" onClick={scrollToGuests}><a href="https://forms.cloud.microsoft/r/8Jn7kf3kYs" target="_blank" className="qSubmit cursorTarget">
   📥&ensp;Submit your question
          
        </a>
</button>
                
                </div>
              </div>

          </div>
        </div>

        <aside className="contentAside">
          <Floater />
        </aside>

        <div className="altFooter">
          <div>
            <p className="aoc">
              This is a student-led project by students at Billy Blue College of Design on the lands of the Turrbul & Yuggera peoples. All views expressed are entirely our own and do not reflect those of the university. © 2026. All Rights Reserved.
            </p>
          </div>
          <div>
            {/* <a
              href="https://www.torrens.edu.au/billy-blue-college-of-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logos className="logosSVG" />
            </a> */}
            <a
              href="https://instagram.com/who_told_you_that_bne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Social className="socialSVG" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
