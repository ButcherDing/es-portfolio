import useCursorPosition from "../../hooks/use-cursor-position";
import type { FC } from "react";
import { useState } from "react";

type PaintBlobProps = {
  coords: [number, number];
  inputString: string;
};

const PaintBlob: FC<PaintBlobProps> = ({ coords, inputString }) => {
  const [x, y] = coords;
    if (x === 0 && y === 0) return <></>;
    if (typeof inputString !== 'string') return <></>;
  


  return (
    <>
      <p className="absolute" style={{ top: `${y}px`, left: `${x}px` }}>
        {inputString}
      </p>
    </>
  );
};

const Paint = () => {
  const [coords, setCoords] = useState([[0, 0]]);
  const [inputString, setInputString] = useState("hello")
  const { x, y } = useCursorPosition();

  return (
    <>
      <button className="btn m-4" onClick={() => setCoords([[0, 0]])}>
        Clear Canvas
      </button>
      <input type="text" placeholder="Type string to print here" className="input input-bordered w-full max-w-xs" onChange={(e)=> setInputString(e.target.value)} />
      <div
        onClick={() => setCoords([...coords, [x, y]])}
        className="canvas h-full w-full"
      >
        {coords.map(([y, x]) => (
          <>
            <PaintBlob inputString={inputString || "hello"} coords={y && x ? [y, x] : [0, 0]} />
          </>
        ))}
      </div>
    </>
  );
};

export default Paint;
