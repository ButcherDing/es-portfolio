import Content from "../../features/content/content.component";
import Navbar from "../../features/navbar/navbar.component";

const Notetaker = () => {
  return (
    <>
      <div data-theme="cyberpunk" className="">
        <Navbar />
        <Content />
      </div>
    </>
  );
};

export default Notetaker;
