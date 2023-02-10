import Image from "next/image";
import { useState } from "react";
import Dropdown from "../features/dropdown/dropdown.component";
import esLogo from "../images/es-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="sticky top-0 bg-stone-800 p-4 opacity-80">
      <div className="container mx-auto flex h-8 items-center justify-between">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <Image src={esLogo} alt="" width={400} className=" h-16 w-16" />
        </a>
        <ul className="hidden items-stretch space-x-3 md:flex  ">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#offer"
              className="flex items-center border-b-2 px-4 py-1  hover:border-rose-600 hover:text-rose-600  dark:border-transparent"
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#projects"
              className="flex items-center border-b-2 px-4 py-1 hover:border-rose-600 hover:text-rose-600 dark:border-transparent"
            >
              Projects
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#courses"
              className="flex items-center border-b-2 px-4 py-1 hover:border-rose-600 hover:text-rose-600 dark:border-transparent"
            >
              Courses
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#contact"
              className="flex items-center border-b-2 px-4 py-1 hover:border-rose-600 hover:text-rose-600 dark:border-transparent "
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          onMouseEnter={() => setIsOpen(!isOpen)}
          onMouseLeave={() => setIsOpen(!isOpen)}
          className="relative flex justify-end p-4 md:hidden"
        >
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
          {isOpen && <Dropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;
