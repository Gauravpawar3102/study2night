import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar-container flex justify-between items-center h-16 shadow-sm">
      <div className="link grow">
        <NavLink
          to="/"
          className="Navbar-left-container grow text-2xl font-semibold font-mono pl-4"
        >
          Study-Tonight
        </NavLink>
      </div>
      <div className="Navbar-right-container text-l grow">
        <ul className="navlinks flex justify-evenly items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/courses">Courses</Link>
          </li> */}
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <Link
            to="/signin"
            className="nav-login-btn bg-blue-500 px-4 py-1 shadow-lg rounded-md text-white font-semibold "
          >
            Sign Up / Login
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
