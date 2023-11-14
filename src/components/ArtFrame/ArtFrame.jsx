import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ArtFrame.css";
import tinycolor from "tinycolor2";

export default function ArtFrame({
  artworkComponent,
  frameColour,
  artname,
  traits,
  expandArtwork = () => null,
  isModal = false
}) {
  const frameIsLight = tinycolor(frameColour).isLight();

  return (
    <article
      className={`artframe ${isModal && "artframe__is_modal"}`}
      style={{ "--frame-colour": frameColour }}
      role="img"
      aria-label={artname}
    >
      {artworkComponent}

      <div className="artframe__info">
        <span
          className="artframe__name"
          style={{ color: frameIsLight ? "black" : "white" }}
          onClick={expandArtwork}
        >
          {artname}
        </span>

        <ul className="artframe__traits">
          {traits.map((trait) => (
            <div className="artframe__trait" key={artname + trait.name}>
              <div className="artframe__trait_icon">
                <FontAwesomeIcon size="xs" icon={trait.icon} color={frameIsLight ? "black" : "white"} />
              </div>
              <span className="artframe__trait_tooltip">
                {trait.description}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
}
