import "./NavBar.css";
import TRAITS from '../ArtworksList/TRAITS'
import ArtworksList from "../ArtworksList/ArtworksList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavBar({ traitFilters, setTraitFilters, cssAnimationsOn, setCssAnimationsOn }) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleTrait = (trait) => {
    const updatedFilters = traitFilters.filter(value => value !== trait)
    if (updatedFilters.length === traitFilters.length) updatedFilters.push(trait)
    setTraitFilters(updatedFilters)
  }

  const toggleCssAnimations = () => {
    setCssAnimationsOn(!cssAnimationsOn);
  }

  const countVisibleArtworks = () => {
    return Object.keys(ArtworksList).filter((k) => {
      const Artwork = ArtworksList[k];
      return traitFilters.every((key) => Artwork.traits.includes(TRAITS[key]));
    }).length;
  }

  const expandBurger = () => {
    setBurgerOpen(!burgerOpen);
  }


  return (
    <nav className={`navbar ${burgerOpen && "navbar__open"}`}>
      <h1 className="navbar__title">css art</h1>
      <FontAwesomeIcon icon={faBars} size="3x" className="navbar__burger" onClick={expandBurger} />
      <ul className="navbar__list">
        {Object.keys(TRAITS).map(trait => {
          return (
            <li
              className={`navbar__item ${traitFilters.includes(trait) ? 'selected' : null}`}
              key={trait}
              onClick={() => toggleTrait(trait)}>
              {TRAITS[trait].name.toLowerCase()}
            </li>
          )
        }
        )}
      </ul>

      <button className={`navbar__animation_toggle ${cssAnimationsOn ? "animation_on" : "animation_off"}`} onClick={toggleCssAnimations}>CSS Animations {cssAnimationsOn ? "ON" : "OFF"}</button>
      
      <p className="navbar__artwork_count">Displaying {countVisibleArtworks()} of {Object.keys(ArtworksList).length} artworks</p>

    </nav>
  );
}
