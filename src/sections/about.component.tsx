import { useState } from "react";

const About = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <section className="m-auto w-3/4 max-w-lg pt-24 pb-40">
      <h2 className="pb-5 text-3xl">About Me</h2>
      <div
        onClick={handleClick}
        className=" flex items-center hover:cursor-pointer"
      >
        <div
          className={
            `relative right-3 flex h-8 w-8 text-rose-600 transition-all  active:rotate-90 ` +
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
        <h3>short version</h3>
      </div>
      {!isShowing && (
        <p className="mb-5 text-lg">
          Former international teacher, environmental social-scientist, and
          language-guy turned coder. I love learning, coding, building. I aim to
          put my coding skills to use for sustainability, education, and fun.
        </p>
      )}
      <div
        onClick={handleClick}
        className="flex items-center hover:cursor-pointer"
      >
        <div
          onClick={handleClick}
          className={
            `relative right-3 flex h-8 w-8 text-rose-600 transition-all  active:rotate-90 ` +
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
        <>
          <p className="mb-5 text-lg">
            {`I used to travel the world and teach English, in far-flung places like Japan, the UAE, and Central America. I learned a lot about different cultures, different people's ways of working, living, and communicating. I've always loved languages, and learned Spanish, French, and Japanese along the way. 
        `}
          </p>
          <p className="mb-5 text-lg">
            {` Later I pursued a longstanding passion for
        sustainability, and became a social scientist looking at environmental
        issues, particularly surrounding people's values. 
        `}
          </p>
          <p className="mb-5 text-lg">
            {` While I loved doing research, I had an urge to create. I really fell in love with coding. I think I can make a bigger impact in tech leveraging my sustainability and education background. At this stage I've worked on many different projects as well as freelancing, and am currently looking for a more permanent role.
        `}
          </p>
        </>
      )}
    </section>
  );
};

export default About;
