const Dropdown = () => {
  return (
    <div>
      <ul className="absolute top-12 right-0 flex flex-col items-stretch border-r-2  border-rose-500 bg-stone-800">
        <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#about"
            className="mb-1 flex items-center border-b-2 border-transparent px-4  hover:text-rose-500"
          >
            About
          </a>
        </li>
        <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#projects"
            className="mb-1 flex items-center border-b-2 border-transparent px-4  hover:text-rose-500"
          >
            Projects
          </a>
        </li>
        {/* <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#courses"
            className="mb-1 flex items-center border-b-2 border-transparent px-4  hover:text-rose-500"
          >
            Courses
          </a>
        </li> */}
        <li className="flex">
          <a
            rel="noopener noreferrer"
            href="#contact"
            className="mb-1 flex items-center border-b-2 border-transparent px-4  hover:text-rose-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
