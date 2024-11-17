import { PiGraduationCapFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
          <div className="flex items-center">
            <PiGraduationCapFill className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-blue-600">
              Lingo Bingo
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal   px-3 py-3">
            {/* {
            user?<></> :<></>
           } */}
            {/* TODO: */}
            <NavLink className="mr-3" to="/">
              Home
            </NavLink>

            <NavLink className="mr-3" to="/about">
              Start Learning
            </NavLink>
            <NavLink className="mr-3" to="/contact">
              Tutorial
            </NavLink>
            <NavLink className="mr-3" to="/faq">
              About Us
            </NavLink>
          </ul>
        </div>
        <div className="    navbar-end">
          <Link to="/login">
            {" "}
            <button className="btn">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
