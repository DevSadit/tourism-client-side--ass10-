import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  // console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " border border-[#fff] text-white font-bold " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltouristspot"
          className={({ isActive }) =>
            isActive ? " border border-[#fff] text-white font-bold " : ""
          }
        >
          All Tourists Spot
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addtouristspot"
          className={({ isActive }) =>
            isActive ? " border border-[#fff] text-white font-bold " : ""
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mylist"
          className={({ isActive }) =>
            isActive ? " border border-[#fff] text-white font-bold " : ""
          }
        >
          My List
        </NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? " border border-[#fff] text-white font-bold " : ""
            }
          >
            Register
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#008DDA]">
      <div className="navbar-start">
        <div className="dropdown flex justify-between items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:hidden"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-white"
          >
            {navLinks}
          </ul>

          <div className="lg:hidden md:flex md:w-10 rounded-full ">
            {user && (
              <a id="clickable">
                <img className="mb-2 mr-2 rounded-full" src={user.photoURL} />
              </a>
            )}
          </div>
        </div>
        <Link to="/" className="btn btn-ghost ">
          <span className="text-2xl text-white font-extrabold">
            TrekTide.com
          </span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>

        <div className="w-10 rounded-full">
          {user && (
            <a id="clickable">
              <img className="mb-2 mr-2 rounded-full" src={user.photoURL} />
            </a>
          )}
        </div>
      </div>
      {user && (
        <Tooltip anchorSelect="#clickable" clickable>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button>{user.displayName}</button>
            <button onClick={handleLogOut}>LogOut</button>
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default Nav;
