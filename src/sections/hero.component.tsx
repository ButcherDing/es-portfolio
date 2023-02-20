export const Hero = () => {
  return (
    <section className="" id="hero">
      <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-2xl">
        <h1 className="w-64 text-8xl leading-none">
          {" "}
          Evon
          <span className=" text-rose-600"> Scott</span>
        </h1>
        <p className="mt-8 text-stone-300">
          {" "}
          React | TypeScript | JavaScript | HTML | CSS | Node.js
        </p>
        <p className="mt-8 mb-12 px-8 text-lg">
          {`👋 Hi, I'm an endlessly curious frontend web developer. With an unusual backstory. 
          
  `}
        </p>

        <p>
          {`In a hurry? Look at `}
          <a
            href="#projects"
            rel="noopener noreferrer"
            className="text-rose-500"
          >
            <u>this project</u>
          </a>
          {` `}
          for an example of my work.
        </p>
        <div className="mt-10 flex flex-wrap justify-center">
          <a href="#offer" rel="">
            <button className="m-2 w-40  bg-rose-600 px-8 py-3  text-lg  text-stone-900">
              Learn More
            </button>
          </a>

          <a href="#contact">
            <button className="m-2 w-40 border  border-stone-500 px-8 py-3  text-lg  text-stone-50">
              Hire Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
