import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a
          className={`navbar-brand text-${
            props.mode === "light" ? "dark" : "white"
          }`}
          href="/"
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active text-${
                  props.mode === "light" ? "dark" : "white"
                }`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "white"
                }`}
                href="/"
              >
                {props.head1}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "white"
                }`}
                href="/"
              >
                {props.head2}
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className={`nav-link dropdown-toggle text-${
                  props.mode === "light" ? "dark" : "white"
                }`}
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.dropdown}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.Prototypes = {
  title: PropTypes.string.isRequired,
  head1: PropTypes.string.isRequired,
  head2: PropTypes.string.isRequired,
  dropdown: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title Here",
  head1: "Heading1",
  head2: "Heading2",
  dropdown: "Dropdown",
};
