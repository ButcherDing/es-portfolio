import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";

const GuestbookForm = () => {
  const [message, setMessage] = useState("");
  const [formName, setFormName] = useState("");
  const { data: session } = useSession();
  const utils = api.useContext();

  const postMessage = api.guestbook.postMessage.useMutation({
    onMutate: async (newEntry) => {
      await utils.guestbook.getAll.cancel();
      utils.guestbook.getAll.setData(undefined, (prevEntries) => {
        if (prevEntries) {
          return [newEntry, ...prevEntries];
        } else {
          return [newEntry];
        }
      });
    },
    onSettled: async () => {
      await utils.guestbook.getAll.invalidate();
    },
  });

  useEffect(() => {
    if (session) setFormName(session.user?.name as string);
  }, []);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        postMessage.mutate({
          name: formName,
          message,
        });
        setMessage("");
      }}
    >
      <input
        type="text"
        className="-md border-2 border-stone-800 bg-stone-700 px-4 py-3 focus:outline-none"
        placeholder="Nickname"
        minLength={2}
        maxLength={30}
        value={formName}
        onChange={(event) => setFormName(event.target.value)}
      />

      <input
        type="text"
        className="-md border-2 border-stone-800 bg-stone-700 px-4 py-3 focus:outline-none"
        placeholder="Message"
        minLength={2}
        maxLength={100}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button
        type="submit"
        className="text-s w-3/4 self-center bg-rose-600 p-3 uppercase  tracking-wide  text-stone-900 md:w-1/2"
      >
        Sign Guestbook
      </button>
    </form>
  );
};

export default GuestbookForm;
