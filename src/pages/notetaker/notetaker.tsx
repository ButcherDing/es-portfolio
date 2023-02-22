import Navbar from "../../features/navbar/navbar.component";
import Content from "../../features/codenotes/content.component";

const Notetaker = () => {
  return (
    <>
      <div data-theme="cyberpunk" className="h-screen">
        <Navbar />
        <Content />
      </div>
    </>
  );
};

export default Notetaker;
