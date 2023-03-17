const Footer = () => {
  return (
    <footer id="footer">
      <div className="container mx-auto flex flex-col p-4 md:p-8">
        <ul className="flex flex-row gap-5 self-center py-6 text-center sm:flex sm:justify-around sm:space-y-0 sm:space-x-4 lg:flex-1 lg:justify-start">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          {/* <a href="#courses">
            <li>Courses</li>
          </a> */}
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
        <div className="mt-5 flex flex-col justify-center pt-6 lg:pt-0">
          <div className="space-x-4 text-center text-lg text-stone-500">
            <p>
              Built with &nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-stone-400 underline  hover:text-blue-800"
                href="https://nextjs.org/"
              >
                NextJS
              </a>
              &nbsp;and&nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-stone-400 underline  hover:text-blue-800"
                href="https://create.t3.gg/"
              >
                create-t3-app
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
