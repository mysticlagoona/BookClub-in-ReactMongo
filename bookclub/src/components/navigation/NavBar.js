import React, { Component } from "react";
import Link from "./NavLink";

import "./NavBar.css";

const links = [
  { path: "/", name: "Home" },
  { path: "/books", name: "Books" },
  { path: "/blog", name: "Blog" },
];

class NavBar extends Component {
  render() {
    return (
      <ul className="Navbar">
        {links.map((link, i) => {
          return (
            <li className="Navbar-item" key={i}>
              <Link
                className="Navbar-link"
                to={link.path}
                activeClass="Navbar-linkActive"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavBar;