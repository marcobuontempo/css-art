import "./ArtFrame.css";
import tinycolor from "tinycolor2";

export default function ArtFrame({
  artworkComponent,
  frameColour,
  artname,
  traits,
  expandArtwork
}) {
  const frameIsLight = tinycolor(frameColour).isLight();

  return (
    <article
      className="artframe"
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
              <img
                className="artframe__trait-icon"
                src={trait.icon}
              />
              <span className="artframe__trait-tooltip">
                {trait.description}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
}
