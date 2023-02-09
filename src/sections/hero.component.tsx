export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-2xl">
        <h1 className="text-8xl  leading-none">
          {" "}
          Evon
          <span className="dark:text-rose-600"> Scott</span>
        </h1>
        <p className="mt-8 mb-12 px-8 text-lg">
          {`👋 Hi, I'm an eternally curious web-developer based in London. With a mysterious backstory.`}
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="m-2 rounded px-8 py-3 text-lg  dark:bg-rose-600 dark:text-stone-900">
            Hire me
          </button>
          <button className="m-2 rounded border px-8 py-3 text-lg dark:border-stone-700 dark:text-stone-50">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
