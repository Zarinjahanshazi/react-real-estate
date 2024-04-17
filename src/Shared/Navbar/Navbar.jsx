import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const { user, logOut, profilePicture } = useContext(AuthContext);
  // const profilePic = user.photoURL;
  // const profilePic = loading(user.photoURL);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const photo = () => {
    profilePicture().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/property">Property</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/updateProfile">Update Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Ocean Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end mr-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {/* <img alt="Tailwind CSS Navbar component" src={profilePic} /> */}
              {/* <img alt="Tailwind CSS Navbar component" src={userDefaultPic} /> */}
              {/* <img alt="Tailwind CSS Navbar component" src={profilePic} /> */}

              {/* <div className="lg:tooltip" data-tip="hello">
  
              </div>

<button className="btn">Hover me</button> */}

              {user ? (
                <div className="flex justify-center items-center h-full">
                  {user?.photoURL ? (
                    <img  alt="avatar" src={user?.photoURL} />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* <img src="" alt="" /> */}
        {/* handleSignOut */}
        {/* {user ? (
          <button onClick={} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn">Log In</button>
          </Link>
        )} */}

            <button className="">
                <Link to="/login">
                  {user && user ? (
                    <span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-[#A62F03] md:bg-[#A62F03] md:text-white md:hover:bg-[#A62F03]" onClick={handleSignOut}>Logout</span>
                  ) : (
                    <span className="md:btn text-white rounded btn-sm py-2 md:px-6 bg-[#A62F03] md:bg-[#A62F03] md:text-white md:hover:bg-[#A62F03]">Login</span>
                  )}
                </Link>
              </button>
      </div>
    </div>
  );
};

export default Navbar;
