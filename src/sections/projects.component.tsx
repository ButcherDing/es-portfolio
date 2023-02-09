import Image from "next/image";

import ic_gallery from "../images/ic_snip.jpg";
import omnifood from "../images/omnifood.jpg";
import forkify from "../images/forkify.jpg";
import crown from "../images/crown-clothing.jpg";

const Projects = () => {
  return (
    <section>
      <div className="container m-auto mb-8 mt-4 max-w-6xl space-y-6 p-6 align-middle sm:space-y-12">
        <h1 className="text-center  leading-none sm:text-3xl">
          {" "}
          Main
          <span className="dark:text-rose-600"> Projects</span>
        </h1>
        <a
          rel="noopener noreferrer"
          href="https://ines-chuaqui-preview.netlify.app/"
          className="group mx-auto block max-w-sm gap-3 hover:no-underline focus:no-underline dark:bg-stone-900 sm:max-w-full lg:grid lg:grid-cols-12"
        >
          <Image
            src={ic_gallery}
            width={1472}
            height={835}
            alt="Website Design System"
            className="h-64 w-full rounded object-contain dark:bg-slate-700 sm:h-96 lg:col-span-7"
          />
          <div className="flex flex-col justify-between space-y-2 p-6 lg:col-span-5">
            <div>
              <h3 className="text-2xl  group-hover:underline group-focus:underline sm:text-3xl">
                Artist e-commerce & portfolio website
              </h3>
              <span className="text-xs dark:text-stone-400">
                Freelance Project - Preview
              </span>
              <p>
                I designed and built this single page app for a Vancouver
                artist, to facilitate the sale of prints and present her work.
                Custom-built components with Styled Components,
                minimalist-yet-robust state-management with React redux Toolkit.
                Custom Stripe integration for payments.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                React redux Toolkit
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                Typescript
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                Styled Components
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                Firebase
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                Netlify
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                Serverless
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                Jest / React Testing Library
              </span>
            </div>
          </div>
        </a>

        <h1 className="text-center   leading-none sm:text-3xl">
          <span className="dark:text-rose-600"> Personal</span> Projects
        </h1>
        <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            rel="noopener noreferrer"
            href="https://omnifood-ev.netlify.app/"
            className="group max-w-sm hover:no-underline focus:no-underline dark:bg-stone-900"
          >
            <Image
              role="presentation"
              src={omnifood}
              width={480}
              height={360}
              alt="Food Website"
              className="h-44 w-full rounded object-contain dark:bg-slate-700"
            />
            <div className="flex flex-col justify-between gap-x-4 gap-y-2 space-y-2 p-6">
              <div>
                <h3 className="text-2xl  group-hover:underline group-focus:underline">
                  Omnifood
                </h3>
                <span className="text-xs dark:text-stone-400">
                  Udemy Course Project
                </span>
                <p>
                  Fully responsive static landing page as part of a Udemy course
                  on CSS/HTML. Custom styles using CSS flex, grid. On the course
                  I created and followed a design system, applied design
                  fundamentals including typography, color theory, and
                  accessibility.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  HTML
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  CSS
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Design System
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Accessibility
                </span>
              </div>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="group mx-auto flex max-w-sm flex-auto flex-col hover:no-underline focus:no-underline dark:bg-stone-900"
          >
            <Image
              role="presentation"
              src={forkify}
              width={480}
              height={360}
              alt="Recipe Website"
              className="h-44 w-full rounded object-contain dark:bg-slate-700"
            />

            <div className="flex flex-auto flex-col justify-between gap-16 p-6">
              <div>
                <h3 className="text-2xl  group-hover:underline group-focus:underline">
                  Forkify
                </h3>
                <span className="text-xs dark:text-stone-400">
                  Udemy Course Project
                </span>
                <p>
                  Recipe searching/bookmarking app as part of Udemy course on
                  Advanced JS, using vanilla JS and MVC architecture.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Vanilla JS
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  MVC Architecture
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Rest API
                </span>

                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Async
                </span>
              </div>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="group mx-auto flex max-w-sm flex-auto flex-col hover:no-underline focus:no-underline dark:bg-stone-900"
          >
            <Image
              role="presentation"
              src={crown}
              width={480}
              height={360}
              alt="Recipe Website"
              className="h-44 w-full rounded object-contain dark:bg-slate-700"
            />

            <div className="flex flex-auto flex-col justify-between gap-16 p-6">
              <div>
                <h3 className="text-2xl  group-hover:underline group-focus:underline">
                  Crown Clothing
                </h3>
                <span className="text-xs dark:text-stone-400">
                  Zero-to-Mastery Course
                </span>
                <p>
                  E-commerce app exploring hooks, state-management options, and
                  Typescript in React. Used Firebase and Stripe (albeit in
                  minimal fashion).
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  React Hooks
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Context / Hooks
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Thunks
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Sagas
                </span>
                <span className="inline-block whitespace-nowrap rounded bg-rose-600 py-1 px-2.5 text-center align-baseline text-xs  leading-none text-white">
                  Microservices
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          {/* <button className="rounded-md px-6 py-3 text-sm hover:underline dark:bg-stone-900 dark:text-stone-400">
            Load more posts...
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
