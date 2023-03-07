import { useState } from "react";

const About = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <section id="about" className="m-auto w-3/4 max-w-lg pt-24 pb-40">
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M184 112l144 144-144 144"
            />
          </svg>
        </div>
        <h3>short version</h3>
      </div>
      {!isShowing && (
        <p className="mb-5 text-lg">
          Former international teacher, environmental social-scientist, and
          language-enthusiast turned coder. I love learning, making things, and
          doing work that matters. I aim to put my skills to use for education,
          sustainability, and fun.
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M184 112l144 144-144 144"
            />
          </svg>
        </div>
        <h3>longer version</h3>
      </div>
      {isShowing && (
        <>
          <p className="mb-5 text-lg">
            {`I used to travel the world and teach English, in far-flung places like Japan, the UAE, and Central America. I learned a lot about the different ways we work, live, communicate, and think. I've always loved languages, and learned Spanish, French, and Japanese along the way. 
        `}
          </p>
          <p className="mb-5 text-lg">
            {` Later I pursued a longstanding passion for
        sustainability, and became a social scientist looking at environmental
        issues, particularly surrounding people's values. 
        `}
          </p>
          <p className="mb-5 text-lg">
            {` While I loved doing research and teaching, I had an urge to create things that people would use every day. I really fell in love with web development, and now I can hardly go a day without doing some form of coding. I see so much unrealised opportunity to better leverage tech to improve our situation, particularly in the areas of sustainability and education. At this stage I've worked on various complex personal and freelancing projects, and am currently looking for a more permanent role where I can bring value to a team, hopefully one that works towards these aims.
        `}
          </p>
        </>
      )}
    </section>
  );
};

export default About;
