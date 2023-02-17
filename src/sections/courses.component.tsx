import Image from "next/image";
import harvard from "../images/harvard.png";
import udemy from "../images/udemy.png";
import ztm from "../images/ztm.png";
import princeton from "../images/princeton.png";

const Courses = () => {
  return (
    <section>
      <div id="courses" className="container mx-auto px-6 py-12">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="xl:col-span-1.5 mx-auto my-8 max-w-2xl space-y-4 text-center xl:text-left">
            <h2 className="text-4xl ">Courses</h2>
            <p className=" text-stone-400">My learning stack.</p>
          </div>
          <div className="md:p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <p className="text-center  text-2xl font-bold   leading-none">
                  {" "}
                  Complete
                </p>
                <div className=" bg-stone-900 p-6  shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-1xl font-bold  leading-none">
                        {" "}
                        Harvard
                        <span className=" text-rose-600"> CS50</span>
                      </p>
                      <p className="mb-2 text-sm  text-stone-400">
                        Introduction to Computer Science - EdX
                      </p>
                    </div>
                    <Image
                      src={harvard}
                      alt=""
                      width={150}
                      className="-full ml-3 h-12 w-12 bg-stone-500  bg-cover bg-center"
                    />
                  </div>
                  <p>
                    World-class introductory computer science course. Practical
                    coding exercises in C.
                  </p>
                </div>

                <div className=" bg-stone-900 p-6  shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-1xl font-bold  leading-none">
                        {" "}
                        Complete
                        <span className=" text-rose-600"> Javascript</span> in
                        2023
                      </p>
                      <p className="mb-2 text-sm  text-stone-400">
                        Udemy - Jonas Schmedtmann
                      </p>
                    </div>
                    <Image
                      src={udemy}
                      alt=""
                      width={150}
                      className="-full ml-3 h-12 w-12 bg-stone-500  bg-cover bg-center"
                    />
                  </div>
                  <p>
                    Javascript course covering everything from primitives to
                    async/await, including challenges, projects, and theory /
                    fundamentals.
                  </p>
                </div>
                <div className=" bg-stone-900 p-6  shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-1xl font-bold  leading-none">
                        {" "}
                        Responsive
                        <span className=" text-rose-600"> HTML and CSS</span>
                      </p>
                      <p className="mb-2 text-sm  text-stone-400">
                        Udemy - Jonas Schmedtmann
                      </p>
                    </div>
                    <Image
                      src={udemy}
                      alt=""
                      width={150}
                      className="-full ml-3 h-12 w-12 bg-stone-500  bg-cover bg-center"
                    />
                  </div>
                  <p>
                    Covered grid, flexbox, responsive design, as well as design
                    fundamentals such as color theory and typography.
                  </p>
                </div>
                <div className=" bg-stone-900 p-6  shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className=" text-1xl font-bold leading-none">
                        Complete React
                        <span className=" text-rose-600"> React</span> Developer
                        in 2023
                      </p>
                      <p className="mb-2 text-sm  text-stone-400">
                        Zero To Mastery - Yihua Zhang
                      </p>
                    </div>
                    <Image
                      src={ztm}
                      alt=""
                      width={150}
                      className="  ml-3 h-12 w-12 bg-stone-500  bg-cover bg-center"
                    />
                  </div>
                  <p>
                    React course covering many different state-management
                    solutions in the context of an e-commerce project.
                  </p>
                </div>
              </div>

              <div className="grid content-center gap-4">
                <p className="pb-2 pt-8  text-center text-2xl   font-bold leading-none text-rose-600">
                  {" "}
                  In Progress
                </p>
                <div className=" bg-stone-900 p-6  shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-1xl font-bold  leading-none">
                        {" "}
                        Princeton{" "}
                        <span className=" text-rose-600"> Algorithms</span> I &
                        II
                      </p>
                      <p className="mb-2 text-sm  text-stone-400">
                        Coursera - Kevin Wayne and Robert Sedgewick
                      </p>
                    </div>
                    <Image
                      src={princeton}
                      alt=""
                      width={100}
                      className="mb- -full ml-3 h-12 w-12 bg-stone-500  bg-cover bg-center"
                    />
                  </div>
                  <p>
                    An oldie but a goodie taught by legends. Bone-dry
                    presentation, somehow still utterly gripping. Covers data
                    structures, sorting and searching, graph- and
                    string-processing algorithms.
                  </p>
                </div>
                <div className=" bg-stone-900 p-6  shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-1xl font-bold  leading-none">
                        Testing with{" "}
                        <span className=" text-rose-600"> Jest</span> and{" "}
                        <span className=" text-rose-600">
                          {" "}
                          React Testing Library
                        </span>
                      </p>
                      <p className="mb-2 text-sm  text-stone-400">
                        Udemy - Bonnie Schulkin
                      </p>
                    </div>
                    <Image
                      src={udemy}
                      alt=""
                      width={150}
                      className="-full ml-3 h-12 w-12 bg-stone-500  bg-cover bg-center"
                    />
                  </div>
                  <p>
                    Functional testing of components, state, async page changes,
                    using Mock Service Worker, etc.
                  </p>
                </div>

                <div className=" bg-stone-900 p-6  shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-1xl font-bold  leading-none">
                        <span className=" text-rose-600"> NodeJS</span> The
                        Complete Guide
                      </p>
                      <p className="mb-2 text-sm  text-stone-400">
                        Udemy - Maximilian Schwarzmüller
                      </p>
                    </div>
                    <Image
                      src={udemy}
                      alt=""
                      width={150}
                      className="-full ml-3 h-12 w-12 bg-stone-500  bg-cover bg-center"
                    />
                  </div>
                  <p>
                    {`Backend fundamentals and associated tooling/tech.
                    project-based course. (MVC, REST APIs, GraphQL, Deno).`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
