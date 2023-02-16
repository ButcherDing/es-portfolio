const Caret = () => {
  return (
    <div className="absolute left-10 ml-10 h-24 w-24 rotate-0 transition-all active:rotate-90">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Chevron Forward</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M184 112l144 144-144 144"
        />
      </svg>
    </div>
  );
};

export default Caret;
