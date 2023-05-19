import useCursorPosition from "../../hooks/use-cursor-position";
import type { FC } from "react";
import { useState, useRef } from "react";

type PaintBlobProps = {
  coords: [number, number];
  paintString: string;
};

const PaintBlob: FC<PaintBlobProps> = ({ coords, paintString }) => {
  const [y, x] = coords;
  if (y === 0 && x === 0) return <></>;

  if (typeof paintString !== "string") return <></>;

  return (
    <div className="relative">
      <p className="absolute" style={{ top: `${y}px`, left: `${x}px` }}>
        {paintString}
      </p>
    </div>
  );
};

const Paint = () => {
  const [inputString, setInputString] = useState("hello");

  const [coords, setCoords] = useState([[0, 0]]);
  const [paintStrings, setPaintStrings] = useState([""]);
  const canvasRef = useRef(null);
  const { y, x } = useCursorPosition(canvasRef);

  const canvasClickHandler = () => {
    setPaintStrings([...paintStrings, inputString]);
    setCoords([...coords, [y, x]]);
  };
  const clearHandler = () => {
    setCoords([[0, 0]]);
    setPaintStrings([""]);
    setInputString("");
  };

  return (
    <>
      <div className="main-panel">
        <div className="input-controls my-4 flex-row align-center justify-center">
          <button className="btn m-4" onClick={clearHandler}>
            Clear Canvas
          </button>
          <input
            type="text"
            placeholder="Type string to print here"
            className="input-bordered input w-full max-w-xs"
            onChange={(e) => setInputString(e.target.value)}
          />
        </div>
      </div>
      <div className="body-container flex w-full justify-center">
        <div
          onClick={canvasClickHandler}
          className="absolute h-3/4 w-3/4 overflow-clip border-4 m-auto border-rose-300"
          ref={canvasRef}
        >
          {coords.map(([y, x], i) => (
            <>
              <PaintBlob
                coords={y && x ? [y, x] : [0, 0]}
                paintString={paintStrings[i] || "hello"}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Paint;
