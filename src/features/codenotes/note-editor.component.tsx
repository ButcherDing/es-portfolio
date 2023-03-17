import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";

// TODO
// do something with errors when not signed in
// fix sizing
// be creative.

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>(
    "```js \n  // Change 'js' to whatever language you want to code in.   \n```"
  );
  const [title, setTitle] = useState<string>("");

  return (
    <div className="card mt-5 border border-base-300 bg-base-100 shadow-lg">
      <h3 className="pt-2 text-center uppercase text-primary-content">
        Note Editor
      </h3>

      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Note title"
            className="input input-lg w-full border-base-300 font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <CodeMirror
          value={code}
          width="500px"
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          theme={dracula}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => setCode(value)}
          className="border border-gray-300"
        />
      </div>
      <div className="card-actions justify-end">
        {/* <div
          className="tooltip-left tooltip"
          data-tip="sign in and enter a title to save your notes"
        > */}
        <button
          onClick={() => {
            onSave({
              title,
              content: code,
            });
            setCode("");
            setTitle("");
          }}
          className="btn-primary btn"
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NoteEditor;
