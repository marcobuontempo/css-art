import "./NavBar.css";
import TRAITS from '../ArtworksList/TRAITS'
import ArtworksList from "../ArtworksList/ArtworksList";

export default function NavBar({ traitFilters, setTraitFilters, cssAnimationsOn, setCssAnimationsOn }) {
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

  return (
    <nav className="navbar">
      <h1 className="navbar__title">css art</h1>
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

      <p className="navbar__artwork_count">Displaying {countVisibleArtworks()} of {Object.keys(ArtworksList).length}</p>

      <button onClick={toggleCssAnimations}>CSS Animations {cssAnimationsOn ? "ON" : "OFF"}</button>
    </nav>
  );
}
