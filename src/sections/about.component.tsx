import { useState } from "react";
import Caret from "../component/caret.component";

const About = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <section className=" container mx-auto w-96 pt-24 pb-48">
      <h2 className="pb-5 text-3xl">About Me</h2>
      <div className="flex items-center">
        <div
          onClick={handleClick}
          className={
            `relative right-5 flex h-16 w-16 transition-all hover:cursor-pointer active:rotate-90 ` +
            (!isShowing ? "rotate-90" : "rotate-0")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Chevron Forward</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M184 112l144 144-144 144"
            />
          </svg>
        </div>
        <h3 className="mb-5">short version</h3>
      </div>
      {!isShowing && (
        <p className="mb-5 text-lg">
          Former international teacher, environmental social-scientist, and
          language-guy turned coder. I love learning, coding, building. I aim to
          put my coding skills to use for sustainability, education, and fun.
        </p>
      )}
      <div className="flex items-center">
        <div
          onClick={handleClick}
          className={
            `relative right-5 flex h-16 w-16 transition-all hover:cursor-pointer active:rotate-90 ` +
            (isShowing ? "rotate-90" : "rotate-0")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Chevron Forward</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M184 112l144 144-144 144"
            />
          </svg>
        </div>
        <h3>longer version</h3>
      </div>
      {isShowing && (
        <p className="mb-5 text-lg">
          {`I used to travel the world and teach English, in far-flung places like Japan, the UAE, and Central America. I've always loved languages, and learned Spanish, French, and Japanese along the way. Later I decided to pursue a longstanding passion for
        sustainability, and became a social scientist looking at environmental
        issues, particularly surrounding people's values. As much as I loved my work, I had an urge to create. I really fell in love with coding and I think I can make a bigger impact in tech leveraging my sustainability and education background.
        `}
        </p>
      )}
    </section>
  );
};

export default About;
