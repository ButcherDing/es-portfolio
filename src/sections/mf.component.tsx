import { isDisabled } from "@testing-library/user-event/dist/types/utils";
import { useState } from "react";

const MF = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const isDisabled = name.length || email.length || text.length;

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name.length < 64) {
      setName(e.target.value);
    }
  };
  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const textInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name.length < 64) {
      setText(e.target.value);
    }
  };

  return (
    <div className="prose mx-8 my-5 flex flex-col gap-5 self-center">
      <div className="form-control">
        <label className="input-group-lg input-group">
          <span>Your name</span>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input input-lg"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group-lg input-group">
          <span>LG</span>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input input-lg"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group-lg input-group">
          <span>LG</span>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input input-lg w-max"
          />
        </label>
      </div>
    </div>
  );
};

export default MF;
