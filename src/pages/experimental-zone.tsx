import Navbar from "../features/navbar/navbar.component";
import Content from "../features/codenotes/content.component";
import { useState } from "react";
import FruitSearch from "../features/fruit-search/fruit-search";
import Link from "next/link";
import MF from "../features/mf/mf.component";
import DomTree from "../features/dom-tree/dom-tree";
import Paint from "../features/paint/paint";

const ExperimentalZone = () => {
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
            FruitSearch
          </a>
          <a
            onClick={() => tabHandler(3)}
            className={`tab ${curTab === 3 ? "tab-active" : ""}`}
          >
            MF
          </a>
          <a
            onClick={() => tabHandler(4)}
            className={`tab ${curTab === 4 ? "tab-active" : ""}`}
          >
            DomTree
          </a>
          <a
            onClick={() => tabHandler(5)}
            className={`tab ${curTab === 5 ? "tab-active" : ""}`}
          >
            PaintString
          </a>
          <a
            onClick={() => tabHandler(6)}
            className={`tab ${curTab === 6 ? "tab-active" : ""}`}
          >
            About
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
            <FruitSearch />
          </>
        )}
        {curTab === 3 && <MF />}
        {curTab === 4 && <DomTree />}
        {curTab === 5 && <Paint />}
        {curTab === 6 && (
          <div className="prose mx-8 my-5">
            <h1 className="">Wat this?</h1>
            <p>
              The experimental zone is a playground for learning and shenanigans
              using DaisyUI, Tailwind, tRPC, Prisma, PostgresQL, Next, NextAuth,
              React Query, etc etc...
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ExperimentalZone;
