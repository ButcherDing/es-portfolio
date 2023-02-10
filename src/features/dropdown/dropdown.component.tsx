const Dropdown = () => {
  return (
    <div>
      <ul className="absolute top-12 right-0 flex flex-col items-stretch border-r-2  border-rose-500 bg-stone-800">
        <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#offer"
            className="mb-1 flex items-center border-b-2 px-4 hover:text-rose-500 dark:border-transparent"
          >
            About
          </a>
        </li>
        <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#projects"
            className="mb-1 flex items-center border-b-2 px-4 hover:text-rose-500 dark:border-transparent"
          >
            Projects
          </a>
        </li>
        <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#contact"
            className="mb-1 flex items-center border-b-2 px-4 hover:text-rose-500 dark:border-transparent"
          >
            Contact
          </a>
        </li>
        <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#guestbook"
            className="mb-1 flex items-center border-b-2 px-4 hover:text-rose-500 dark:border-transparent"
          >
            Guestbook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
