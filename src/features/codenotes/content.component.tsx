import { useSession } from "next-auth/react";
import { useState } from "react";
import { api, type RouterOutputs } from "../../utils/api";
import NoteCard from "./note-card.component";
import NoteEditor from "./note-editor.component";

type Topic = RouterOutputs["topic"]["getAll"][0];

const Content = () => {
  const { data: sessionData } = useSession();
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [topicInput, setTopicInput] = useState("");

  // want selected codenotes feature to go back and edit your notes!
  // useState for selectedCodenotes
  // feed the text back into our input template... unfortunately this is now getting to be a bit of a silly component and needs to be split up. Really topics and notes are seperate features and this should be architected accordingly. BAD JACK :)

  ////// TOPICS
  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined, // means no input
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => {
        setSelectedTopic(selectedTopic ?? data[0] ?? null);
      },
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  const deleteTopic = api.topic.delete.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  //////// NOTES
  const { data: notes, refetch: refetchNotes } = api.note.getAll.useQuery(
    {
      topicId: selectedTopic?.id ?? "",
    },
    { enabled: sessionData?.user !== undefined && selectedTopic !== null }
  );

  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });
  const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });
  //////// HELPERS
  const createTopicHandler = () => {
    if (topicInput.trim() === "") return;

    createTopic.mutate({
      title: topicInput,
    });
    setTopicInput("");
  };

  return (
    <div className="mx-5 mt-5 grid grid-cols-4 gap-2 pb-5">
      <div className="flex flex-col px-2">
        <h3 className="uppercase text-inherit">My Topics</h3>
        <ul className="menu rounded-box w-56 bg-base-100 p-2">
          {topics?.map((topic) => (
            <li key={topic.id}>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  setSelectedTopic(topic);
                }}
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <input
          type="text"
          placeholder="New Topic"
          className="input-bordered input input-sm w-full"
          onChange={(e) => {
            setTopicInput(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createTopicHandler();
            }
          }}
          value={topicInput}
        />
        <div className="btn-group mt-5 flex h-min w-full flex-col gap-5">
          <button
            className="btn-primary btn-sm btn "
            onClick={createTopicHandler}
          >
            create topic
          </button>
          <button
            className="warning btn-accent btn-sm h-min"
            onClick={() =>
              selectedTopic !== null &&
              void deleteTopic.mutate({ id: selectedTopic?.id })
            }
          >
            delete topic
          </button>
        </div>
      </div>
      <div className="col-span-3">
        <div>
          <h3 className="uppercase text-inherit">My Notes</h3>
          {notes?.map((note) => (
            <div key={note.id} className="mt-5">
              <NoteCard
                note={note}
                onDelete={() => void deleteNote.mutate({ id: note.id })}
              />
            </div>
          ))}
        </div>
        <NoteEditor
          onSave={({ title, content }) => {
            void createNote.mutate({
              title,
              content,
              topicId: selectedTopic?.id ?? "",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Content;
