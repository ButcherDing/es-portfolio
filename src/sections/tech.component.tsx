const Tech = () => {
  return (
    <section id="tech">
      <div className="mx-auto p-4 text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h2 className="text-2xl  leading-none sm:text-4xl">Tech Stack</h2>
        <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-2xl">
          <p className="w-100 my-10 text-stone-300">
            {" "}
            <strong> HTML | CSS | JavaScript | TypeScript | Node.js</strong>
          </p>
          <p className=" w-80 text-stone-300">
            {" "}
            <strong> React Ecosystem</strong>
          </p>
          <p className="mb-6 w-80 text-stone-300">
            {" "}
            React.js | Redux | Sagas | Redux Toolkit (RTK) Hooks / Context |
            Next.js | React Testing Library{" "}
          </p>
          <p className=" w-80 text-stone-300">
            {" "}
            <strong className=" text-stone-300">Styles</strong>
          </p>
          <p className="mb-6 w-80 text-stone-300">
            {" "}
            Sass | Styled Components | Tailwind{" "}
          </p>
          <p>
            <strong className=" text-stone-300">Testing</strong>
          </p>
          <p className="mb-6 w-80 text-stone-300">
            {" "}
            Jest | React Testing Library
          </p>
          <p>
            <strong className=" text-stone-300">Other Tools</strong>
          </p>
          <p className="mb-6 w-80 text-stone-300">
            {" "}
            Netlify | Firebase | Stripe | Git | GitHub | PostgresQL | GraphQL |
            NextAuth.js | Prisma | tRPC | Jest | React Testing Library
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
