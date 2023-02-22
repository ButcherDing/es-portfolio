import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <div>
        {session ? (
          <>
            <p>hi {session.user?.name}</p>
            <button
              className="btn"
              onClick={() => {
                signOut().catch(console.log);
              }}
            >
              logout
            </button>
          </>
        ) : (
          <div className="btn-group-horizontal">
            <button
              className="btn"
              onClick={() => {
                signIn("github").catch(console.log);
              }}
            >
              Login with Github
            </button>
            <button
              className="btn"
              onClick={() => {
                signIn("discord").catch(console.log);
              }}
            >
              Login with Discord
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Auth;
