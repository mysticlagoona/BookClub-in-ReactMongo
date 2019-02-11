import React, { Component } from "react";
import Link from "./NavLink";

import "./NavBar.css";

const links = [
  { path: "/", name: "Home" },
  { path: "/books", name: "Books Review" },
  { path: "/blog", name: "Blog" },
  { path: "/login/becomeupclubmember", name:"Login"},
  { path: "/login/newmember", name:"Register"},

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