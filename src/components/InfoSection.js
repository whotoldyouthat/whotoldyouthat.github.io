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

import Floater from "./Floater";
import { ReactComponent as Logos } from "../assets/img/bb_tua.svg";
import { ReactComponent as Social } from "../assets/img/ig.svg";

function InfoSection({ sectionRef }) {
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
                  Join us for an evening of conversation exploring how
                  storytelling, design, media, music, film, and other creative
                  practices can foster emotional literacy, authentic connection,
                  and more positive expressions of male identity.
                </h6>
              </div>
            </div>

            {infoSections.map((section) => (
              <div className="infoRow" key={section.title}>
                <div className="infoLabel">
                  <h5>{section.title}</h5>
                </div>
                <div className="infoBody">{section.body}</div>
              </div>
            ))}

            <div className="infoRow infoNotesRow">
              <div className="infoLabel" />
              <div className="infoBody notes">
                <p>* Guest speakers to be announced</p>
                <p>
                  * Capacity is limited, please register by April 22 to avoid
                  missing out
                </p>
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
              This event is an original student production created by students
              at Billy Blue College of Design on the lands of the Turrbul &
              Yuggera People. All ideas, concepts, and materials have been
              developed independently by the student team. © 2026. All Rights
              Reserved.
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
