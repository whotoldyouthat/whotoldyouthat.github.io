import { ReactComponent as Logos } from "../assets/img/bb_tua.svg";
import { ReactComponent as Social } from "../assets/img/ig.svg";
import Button from "./Button";

import "../styles/footer.css";

function Footer({ activeSection, onHomeClick, onInfoClick }) {
  return (
    <footer className="footer bar">
      <div>
        <p className="aoc">
          This event is an original student production created by students at
          Billy Blue College of Design on the lands of the Turrbul & Yuggera
          People. All ideas, concepts, and materials have been developed
          independently by the student team. © 2026. All Rights Reserved.
        </p>
      </div>

      <div>
        <a
          href="https://www.torrens.edu.au/billy-blue-college-of-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logos className="logosSVG" />
        </a>
      </div>

      <div>
        <a
          href="https://instagram.com/whotoldyouthatbne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Social className="socialSVG" />
        </a>
      </div>

      <div className="menu">
        <Button
          label={activeSection === "info" ? "Top" : "Event Info"}
          onClick={activeSection === "info" ? onHomeClick : onInfoClick}
          isActive={activeSection === "info"}
        />

        <Button
          className="reverse"
          label="Register Now"
          onClick={() =>
            window.open("https://your-registration-link.com", "_blank")
          }
        />
      </div>
    </footer>
  );
}

export default Footer;
