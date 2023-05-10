import type { FC } from "react";
import {useState } from "react";

type RandomComponentProps = {
  clicks: number;
};

const RandomComponent: FC<RandomComponentProps> = ({ clicks }) => {
  const array = new Array(clicks).fill(0);

  return (
    <>
      {array.map((el, i) => (
        <p key={i}>It is random!</p>
      ))}
    </>
  );
};

const DomTree = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      {/* <p onClick={() => setShowing(!showing)}>hellow</p> */}
      <p onClick={() => setClicks(clicks + 1)}>Under Construction</p>
      (<RandomComponent clicks={clicks} />)
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DomTree;
