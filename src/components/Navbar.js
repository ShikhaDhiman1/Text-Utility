import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <div className="container-fluid">
      <nav className={`navbar sticky-top navbar-expand-lg bg-${props.mode}`}>
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
                <Link
                  className={`nav-link active text-${
                    props.mode === "light" ? "dark" : "white"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.mode === "light" ? "dark" : "white"
                  }`}
                  to ="/about"
                >
                  {props.head1}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.mode === "light" ? "dark" : "white"
                  }`}
                  to="/"
                >
                  {props.head2}
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className={`nav-link dropdown-toggle text-${
                    props.mode === "light" ? "dark" : "white"
                  }`}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dropdown}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "black" : "white"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.handleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.alert === null ? "Enable Mode" : props.alert.mssg}
              </label>
            </div>
          </div>
        </div>
      </nav>
    // </div>
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
