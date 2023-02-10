const Footer = () => {
  return (
    <footer id="footer">
      <div className="container mx-auto flex flex-col p-4 md:p-8 lg:flex-row">
        <ul className="space-y-4 self-center py-6 text-center sm:flex sm:justify-around sm:space-y-0 sm:space-x-4 lg:flex-1 lg:justify-start">
          <a href="#offer">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <a href="#guestbook">
            <li>Guestbook</li>
          </a>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
