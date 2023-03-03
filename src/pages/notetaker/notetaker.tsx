import Navbar from "../../features/navbar/navbar.component";
import Content from "../../features/codenotes/content.component";
import { useState } from "react";
import ExerciseOne from "../../features/exercises/exercise-one/exercise-one.component";

const Notetaker = () => {
  const [curTab, setCurTab] = useState(1);

  const tabHandler = (tabNum: number) => {
    setCurTab(tabNum);
  };

  return (
    <>
      <div data-theme="cyberpunk" className="h-screen">
        <div className="tabs tabs-boxed">
          <a
            onClick={() => tabHandler(1)}
            className={`tab ${curTab === 1 ? "tab-active" : ""}`}
          >
            CodeNotes
          </a>
          <a
            onClick={() => tabHandler(2)}
            className={`tab ${curTab === 2 ? "tab-active" : ""}`}
          >
            Exercises
          </a>
          <a
            onClick={() => tabHandler(3)}
            className={`tab ${curTab === 3 ? "tab-active" : ""}`}
          >
            Creative
          </a>
        </div>
        {curTab === 1 && (
          <>
            <Navbar />
            <Content />
          </>
        )}
        {curTab === 2 && (
          <>
            <ExerciseOne />
          </>
        )}
        {curTab === 3 && (
          <>
            <h1>Creative</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Notetaker;
