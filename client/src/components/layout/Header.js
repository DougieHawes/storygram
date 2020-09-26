import React from "react";

import { Link, NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/">
          <i className="fas fa-book-reader"></i> StoryGram
        </Link>
      </h1>
      <div className="header-links">
        <NavLink className="header-link" to="/signin">
          Sign-In
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
