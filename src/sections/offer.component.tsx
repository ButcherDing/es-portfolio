const Offer = () => {
  return (
    <section id="offer" className="pt-16">
      <div className="container mx-auto">
        <div className="mx-auto p-4 text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <h2 className="text-2xl  leading-none sm:text-4xl">
            What I can offer
          </h2>
          <p className="my-4 px-8 text-stone-400">
            I may be new, but ultimately what matters is what a person can{" "}
            <strong>do</strong>, the value they can provide, and their
            potential.
          </p>
        </div>
        <div className="grid grid-cols-4 p-4 md:p-8">
          <div className="col-span-full grid gap-12 p-12 sm:grid-cols-2 md:text-left">
            <div className="flex flex-col gap-2">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
              <h5 className="text-xl ">Frontend Focus</h5>
              <p>
                I produce clean, well-architected, organised code and am skilled
                with various state-management solutions in React. Have a look at{" "}
                <a
                  className="dark:text-rose-600"
                  href="https://ines-chuaqui-preview.netlify.app/"
                >
                  this project
                </a>{" "}
                for a fully-functional e-commerce React Redux app using Styled
                Components, including Auth, Stripe, Firebase integration and
                more.
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
              <h5 className="text-xl ">Communication / Project Work</h5>
              <p>
                As a former language teacher and environmental social scientist,
                I have excellent written and verbal communication skills with
                diverse audiences. I also have a proven track record of
                successfully managing, collaborating, and delivering on complex
                projects in my previous careers. Examples at{" "}
                <a
                  className="h-6 w-6 dark:text-rose-600"
                  href="https://www.forestresearch.gov.uk/research/public-perceptions-of-urban-trees/"
                >
                  Forest Research
                </a>{" "}
                and{" "}
                <a
                  className="h-6 w-6 dark:text-rose-600"
                  href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0219607"
                >
                  PLOS One
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon mr-5 h-6 w-6 dark:text-rose-600"
                  viewBox="0 0 512 512"
                >
                  <title>Leaf</title>
                  <path
                    d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 dark:text-rose-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>

              <h5 className="text-xl ">
                Sustainability / Education Background
              </h5>
              <p>
                I care deeply about learning, sharing my knowledge with others,
                and the social and ecological impact of the things we do.
                Demonstrating this, and my love of code, I volunteer teaching
                coding skills to refugees and disadvantaged people at{" "}
                <a
                  className="h-6 w-6 dark:text-rose-600"
                  href="https://codeyourfuture.io/"
                >
                  CodeYourFuture
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 dark:text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                />
              </svg>

              <h5 className="text-xl ">Adaptability</h5>
              <p>
                I am highly motivated, and a self-starter. I taught myself
                everything I know about coding/development in 7 months, and have
                no intention of stopping. Imagine how much I can learn and do
                for your organization in 3, 6, 12 months or more?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
