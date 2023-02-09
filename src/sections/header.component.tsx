import Image from "next/image";
import headerLogo from "../images/E.png";
const Header = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex h-16 justify-between">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <Image src={headerLogo} alt="" width={150} className="h-1 w-1" />
        </a>
        <ul className="hidden items-stretch space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent dark:border-rose-600 dark:text-rose-600"
            >
              Projects
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
            >
              Contact
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
            >
              Guestbook
            </a>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
