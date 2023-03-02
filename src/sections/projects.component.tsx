import Image from "next/image";

import ic_gallery from "../images/ic_snip.jpg";
// import omnifood from "../images/omnifood.jpg";
// import forkify from "../images/forkify.jpg";
// import crown from "../images/crown-clothing.jpg";

const Projects = () => {
  return (
    <section className="pt-10" id="projects">
      <div className="container m-auto mb-8 mt-4 max-w-6xl space-y-6 p-6 align-middle sm:space-y-12">
        <h1 className="text-center  text-4xl leading-none lg:text-5xl">
          {" "}
          Featured
          <span className=" text-rose-600"> Project</span>
        </h1>
        <div className="group mx-auto block max-w-sm gap-3  bg-stone-900 hover:no-underline  focus:no-underline sm:max-w-full lg:grid lg:grid-cols-12">
          <Image
            src={ic_gallery}
            width={1472}
            height={835}
            alt="Website Design System"
            className="h-50  bg-stone-700  object-contain sm:h-96 lg:col-span-6"
          />
          <div className="flex flex-col justify-between gap-5 space-y-2 p-6 lg:col-span-6 ">
            <div>
              <h3 className="text-2xl sm:text-3xl">{`Ines Chuaqui`}</h3>
              <span className="text-xs  text-stone-400">
                Freelance e-commerce/portfolio app
              </span>
              <p>
                Freelance project for a Vancouver artist to facilitate sale of
                prints and present her work. Main features: lightbox gallery,
                login/auth, cart, custom payment (Stripe). Backend with Firebase
                / Netlify serverless functions. Components from scratch with
                Styled Components, minimalist-yet-robust state management with
                React Redux Toolkit (RTK).
              </p>
            </div>

            <div className="flex justify-around gap-5 lg:justify-between ">
              <button className="flex w-40 items-center justify-around border border-stone-700  py-3  text-stone-50">
                Source
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  href="https://ines-chuaqui-preview.netlify.app/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-7"
                    viewBox="0 0 512 512"
                  >
                    <title>Code Slash</title>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
                    />
                  </svg>
                </a>
              </button>
              <button className=" flex w-40 items-center justify-around border border-stone-700  py-3  text-stone-50">
                {" "}
                Live
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ines-chuaqui-preview.netlify.app/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-7"
                    viewBox="0 0 512 512"
                  >
                    <title>Globe</title>
                    <path
                      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <path
                      d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <path
                      d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M256 48v416M464 256H48"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* <h1 className="pt-8 text-center  text-3xl leading-none lg:text-5xl">
          <span className=" text-rose-600"> Personal</span> Projects
        </h1>
        <div className="grid grid-cols-1 justify-center gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://crown-clothing-v2-ev.netlify.app/"
            className="group mx-auto flex max-w-sm flex-auto flex-col bg-stone-900 hover:no-underline  focus:no-underline"
          >
            <Image
              role="presentation"
              src={crown}
              width={480}
              height={360}
              alt="Recipe Website"
              className="h-44 w-full  bg-stone-700  object-contain"
            />

            <div className="flex flex-auto flex-col justify-between gap-16 p-6">
              <div>
                <h3 className="text-2xl  group-hover:underline group-focus:underline">
                  Crown Clothing
                </h3>
                <span className="text-xs  text-stone-400">
                  Single Page E-commerce React App
                </span>
                <p>
                  E-commerce app I created as part of Zero-To-Mastery course on
                  React. I explored hooks, state-management options, and
                  Typescript in React. Used Firebase and Stripe (minimally).
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  React
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Context / Hooks
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Thunks
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Sagas
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Microservices
                </span>
              </div>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://omnifood-ev.netlify.app/"
            target="_blank"
            className="group mx-auto flex max-w-sm flex-auto flex-col bg-stone-900 hover:no-underline  focus:no-underline"
          >
            <Image
              role="presentation"
              src={omnifood}
              width={480}
              height={360}
              alt="Food Website"
              className="h-44 w-full  bg-stone-700  object-contain"
            />
            <div className="flex flex-auto flex-col justify-between gap-16 p-6">
              <div>
                <h3 className="text-2xl  group-hover:underline group-focus:underline">
                  Omnifood
                </h3>
                <span className="text-xs  text-stone-400">Landing Page</span>
                <p>
                  Fully responsive static landing page I built as part of a
                  Udemy course on CSS/HTML. Custom styles using CSS flex, grid.
                  On the course I created and followed a design system, applied
                  design fundamentals including typography, color theory, and
                  accessibility.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  HTML
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  CSS
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Design
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Accessibility
                </span>
              </div>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://forkify-cejed.netlify.app/"
            className="group mx-auto flex max-w-sm flex-auto flex-col bg-stone-900 hover:no-underline  focus:no-underline"
          >
            <Image
              role="presentation"
              src={forkify}
              width={480}
              height={360}
              alt="Recipe Website"
              className="h-44 w-full  bg-stone-700  object-contain"
            />

            <div className="flex flex-auto flex-col justify-between gap-16 p-6">
              <div>
                <h3 className="text-2xl  group-hover:underline group-focus:underline">
                  Forkify
                </h3>
                <span className="text-xs  text-stone-400">
                  Recipe Search App
                </span>
                <p>
                  Recipe searching/bookmarking app as part of Udemy course on
                  Advanced JS, using vanilla JS and MVC architecture.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Vanilla JS
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  MVC Architecture
                </span>
                <span className="inline-block whitespace-nowrap  bg-stone-700 py-1 px-2.5 text-center align-baseline text-xs font-bold  leading-none text-white">
                  Rest API
                </span>
              </div>
            </div>
          </a>
        </div> */}
        <div className="flex justify-center"></div>
      </div>
    </section>
  );
};

export default Projects;
