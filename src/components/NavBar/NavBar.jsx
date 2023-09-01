import "./NavBar.css";
import TRAITS from '../../artworks/TRAITS'

export default function NavBar({ traitFilters, setTraitFilters }) {
  const toggleTrait = (trait) => {
    const updatedFilters = traitFilters.filter(value => value !== trait)
    if (updatedFilters.length === traitFilters.length) updatedFilters.push(trait)
    setTraitFilters(updatedFilters)
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
      TODO: <br/>
      - CSS ANIMATION TOGGLE <br/>
      - FIX TRAIT BADGES TO ALL BE CIRCULAR (AND TRANSPARENT WHERE REQUIRED) <br/>
      - HAVE EACH TRAIT BADGE DISPLAY INFO ON HOVER <br/>
      - VIEW SOURCE FOR EACH ARTWORK .. OPENS GITHUB CSS SOURCE CODE <br/>
      - WORDART STYLE &quot;COOL&quot; &quot;WOW&QUOT; IN BANNER <br/>
    </nav>
  );
}
