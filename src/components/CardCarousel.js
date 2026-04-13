import { useRef, useState } from "react";
import gsap from "gsap";
import "../styles/cards.css";

const cards = [
  {
    name: "Joel Dana",
    role: "Junior Graphic Designer and host of The Design Kids Brisbane",
    headshot:
      "https://raw.githubusercontent.com/whotoldyouthat/whotoldyouthat.github.io/refs/heads/main/public/joel.png",
    bio: "",
  },
  {
    name: "Joshua Power",
    role: "GoodGood West End Entrepreneur, Singer/Songwriter/Producer",
    headshot:
      "https://raw.githubusercontent.com/whotoldyouthat/whotoldyouthat.github.io/refs/heads/main/public/joshua.png",
    bio: "",
  },
  {
    name: "Zac Callaghan",
    role: "Trans-masc Writer and Theatre Performer, Holistic Therapist and Co-founder of The Joy Dispensary",
    headshot:
      "https://raw.githubusercontent.com/whotoldyouthat/whotoldyouthat.github.io/refs/heads/main/public/zac.png",
    bio: "",
  },
  {
    name: "Daniel Bruschweiler",
    role: "Trans-masc Stand-up Comedian Performing at The Brisbane Comedy Festival",
    headshot:
      "https://raw.githubusercontent.com/whotoldyouthat/whotoldyouthat.github.io/refs/heads/main/public/daniel.png",
    bio: "",
  },
  {
    name: "Professor Kate Ames",
    role: "Pro Vice Chancellor of Engagement and Access, Torrens University",
    headshot:
      "https://raw.githubusercontent.com/whotoldyouthat/whotoldyouthat.github.io/refs/heads/main/public/kate.png",
    bio: "",
  },
  {
    name: "Join the conversation",
    role: "Submit a question for our panel and we'll ask it for you. No scary public speaking necessary.",
    headshot:
      "https://raw.githubusercontent.com/whotoldyouthat/whotoldyouthat.github.io/refs/heads/main/public/and-you-carousel.jpg",
    bio: "",
  },
];

function CardCarousel() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goTo = (nextIndex) => {
    const track = trackRef.current;
    if (!track) return;

    const maxIndex = cards.length - 1;
    const clamped = Math.max(0, Math.min(nextIndex, maxIndex));
    setIndex(clamped);

    const targetCard = track.children[clamped];
    if (!targetCard) return;

    const x = -targetCard.offsetLeft;

    gsap.to(track, {
      x,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const isAtStart = index === 0;
  const isAtEnd = index === cards.length - 1;

  return (
    <div className="carouselSection">
      <div className="carouselViewport">
        <div ref={trackRef} className="carouselTrack">
          {cards.map((card) => (
            <article className="eventCard" key={card.name}>
              <div className="eventCardMedia">
                <img src={card.headshot} alt={card.name} />
              </div>

              <div className="eventCardContent">
                <div>
                  <h5 className="accent">&#9205;&ensp;</h5>
                  <h5>{card.name}</h5>
                </div>
                <p className="eventCardRole">{card.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carouselHeader">
        <div className="carouselActions">
          <button
            className="carouselButton cursorTarget"
            onClick={() => goTo(index - 1)}
            disabled={isAtStart}
            aria-label="Previous speaker"
          >
            &lsaquo;
          </button>

          <button
            className="carouselButton cursorTarget"
            onClick={() => goTo(index + 1)}
            disabled={isAtEnd}
            aria-label="Next speaker"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;