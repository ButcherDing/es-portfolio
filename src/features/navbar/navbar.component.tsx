import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name
          ? `Codenotes for ${sessionData.user.name}`
          : "Sign in for codenotes"}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <>
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <picture>
                    <img
                      src={sessionData?.user?.image ?? ""}
                      alt={sessionData?.user?.name ?? ""}
                    />
                  </picture>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
              >
                <li className="btn" onClick={() => void signOut()}>
                  logout
                </li>
                <li className="btn">do nothing</li>
              </ul>
            </>
          ) : (
            <button
              className="btn-ghost rounded-btn btn border bg-warning"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
