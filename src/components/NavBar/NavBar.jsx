import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">css art</h1>
      <ul className="navbar__list">
        <li className="navbar__item">one div</li>
        <li className="navbar__item">pure css</li>
        <li className="navbar__item">pixel</li>
      </ul>
    </nav>
  );
}
