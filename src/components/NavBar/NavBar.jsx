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


      <br/>
      TODO: <br/>
      - MOVE ANIMATIONSLIST TO COMPONENTS SECTION <br/>
      - FIX TRAIT BADGES TO ALL BE CIRCULAR (AND TRANSPARENT WHERE REQUIRED) <br/>
      - HAVE EACH TRAIT BADGE DISPLAY INFO ON HOVER <br/>
      - VIEW SOURCE FOR EACH ARTWORK .. OPENS GITHUB CSS SOURCE CODE <br/>
      - WORDART STYLE &quot;COOL&quot; &quot;WOW&QUOT; IN BANNER <br/>
      - ABOUT / LICENSE / ETC OPTIONS IN TOP RIGHT .. OPENS A POPUP MODAL WINDOW <br/>
      - EXPAND ARTWORK SELECTOR .. OPENS ARTWORK IN POPUP MODAL WINDOW <br/>
      - FIX ARTWORK NAME: GOING OVER 2 LINES, AND COLOUR READABILITY <br/>
      - DISPLAY NUMBER OF ARTWORKS AT TOP .. UPDATES BASED ON NUMBER FILTERED TO <br/>
      - ADD ATTRIBUTIONS (USING COMMENTS) IN ALL CSS FILES (I.E &quot;CSS CUSTOM MADE BY MARCO BUONTEMPO [MARCOBUONTEMPO.COM]&quot;)<br/>
      - BACK TO TOP BUTTON <br/>
    </nav>
  );
}
