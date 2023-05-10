import Navbar from "../features/navbar/navbar.component";
import Content from "../features/codenotes/content.component";
import { useState } from "react";
import ExerciseOne from "../features/fruit-search/fruit-search";
import Link from "next/link";
import MF from "../sections/mf.component";

const ExperimentalZone = () => {
  const [curTab, setCurTab] = useState(1);

  const tabHandler = (tabNum: number) => {
    setCurTab(tabNum);
  };

  return (
    <>
      <div data-theme="cyberpunk" className=" h-screen ">
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
            FruitSearch
          </a>
          <a
            onClick={() => tabHandler(3)}
            className={`tab ${curTab === 3 ? "tab-active" : ""}`}
          >
            About
          </a>
          <a
            onClick={() => tabHandler(4)}
            className={`tab ${curTab === 4 ? "tab-active" : ""}`}
          >
            MF
          </a>
          <Link className="link ml-auto px-3" href="/">
            Back to Normie World
          </Link>
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
          <div className="prose mx-8 my-5">
            <h1 className="">Wat this?</h1>
            <p>
              The experimental zone is a playground for learning and shenanigans
              using DaisyUI, Tailwind, tRPC, Prisma, PostgresQL, Next, NextAuth,
              React Query, etc etc...
            </p>
          </div>
        )}
        {curTab === 4 && <MF />}
      </div>
    </>
  );
};

export default ExperimentalZone;
