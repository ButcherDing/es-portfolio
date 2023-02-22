import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <Image
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ) : (
            <button
              className="btn-ghost rounded-btn btn border"
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
