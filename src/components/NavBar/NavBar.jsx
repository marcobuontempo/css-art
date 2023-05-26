import React from "react";
import "./NavBar.css";
import TRAITS from '../../artworks/TRAITS'

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">css art</h1>
      <ul className="navbar__list">
        {Object.values(TRAITS).map(trait => <li className="navbar__item" key={trait}>{trait.toLowerCase()}</li>)}
      </ul>
    </nav>
  );
}
