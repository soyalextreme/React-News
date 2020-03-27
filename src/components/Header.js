import React from "react";
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <>
      <nav className="nav-wrapper light-blue darken-3">
        <a href="#!" className="brand-logo center">
          {children}
        </a>
      </nav>
    </>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
