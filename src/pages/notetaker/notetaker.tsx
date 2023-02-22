import Auth from "../../features/auth/auth.component";
import Content from "../../features/content/content.component";
import Navbar from "../../features/navbar/navbar.component";
import NoteCard from "../../features/note/note-card.component";

const Notetaker = () => {
  return (
    <>
      <div data-theme="cyberpunk" className="">
        <Navbar />

        {/* <Auth /> */}
        <Content />
        {/* <NoteCard/> */}
      </div>
    </>
  );
};

export default Notetaker;
