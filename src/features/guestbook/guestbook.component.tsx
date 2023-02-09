import { render } from "@headlessui/react/dist/utils/render";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import GuestbookForm from "./guestbook-form/guestbook-form.component";
import GuestbookEntries from "./guestbook-entries/guestbook-entries.component";

const Guestbook = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main className="flex flex-col items-center pt-4">Loading...</main>;
  }

  return (
    <main className="flex flex-col items-center">
      <ul>
        <li>
          <Link href="/projects/main-projects">To Projects</Link>
        </li>
      </ul>
      <p>
        Tutorial for <code>create-t3-app</code>
      </p>
      <div className="pt-4 text-3xl">
        <div>
          {session ? (
            <>
              <p className="mb-4 text-center">hi {session.user?.name}</p>
              <button
                type="button"
                className="mx-auto block rounded-md bg-neutral-800 py-3"
                onClick={() => {
                  signOut().catch(console.log);
                }}
              >
                Logout
              </button>
              <h1 className="pt-4 text-2xl">Guestbook</h1>
              <div className="pt-6">
                <GuestbookForm />
              </div>
            </>
          ) : (
            <button
              className="mx-auto block rounded-md bg-neutral-800 py-3"
              onClick={() => {
                signIn("discord").catch(console.log);
              }}
            >
              Login with Discord
            </button>
          )}
          <div className="pt-10">
            <GuestbookEntries />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Guestbook;
