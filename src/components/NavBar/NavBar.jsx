import "./NavBar.css";
import TRAITS from '../ArtworksList/TRAITS'

export default function NavBar({ traitFilters, setTraitFilters, cssAnimationsOn, setCssAnimationsOn }) {
  const toggleTrait = (trait) => {
    const updatedFilters = traitFilters.filter(value => value !== trait)
    if (updatedFilters.length === traitFilters.length) updatedFilters.push(trait)
    setTraitFilters(updatedFilters)
  }

  const toggleCssAnimations = () => {
    setCssAnimationsOn(!cssAnimationsOn);
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
      
      <p className="navbar__artwork_count">Displaying TBC of TBC</p>

      <button onClick={toggleCssAnimations}>CSS Animations {cssAnimationsOn ? "ON" : "OFF"}</button>
    </nav>
  );
}
