// import { useQuery } from "@tanstack/react-query";
import { api } from "../../utils/api";

const GuestbookEntries = () => {
  const { data: guestbookEntries, isLoading } = api.guestbook.getAll.useQuery();

  if (isLoading)
    return (
      <div className="text-wrap mt-8 flex max-h-80 flex-col gap-3 overflow-x-hidden  border  border-stone-400 p-4">
        Fetching messages...
      </div>
    );

  return (
    <div className="text-wrap my-6 flex max-h-80 flex-col gap-3 overflow-x-hidden  border  border-stone-400 p-4">
      {guestbookEntries?.map((entry, index) => {
        return (
          <div key={index}>
            <p>
              {entry.message}{" "}
              <span className="pl-3 text-stone-400">- {entry.name}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default GuestbookEntries;
