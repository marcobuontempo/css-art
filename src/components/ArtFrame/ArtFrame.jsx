import "./ArtFrame.css";

export default function ArtFrame({
  artworkComponent,
  frameColour,
  artname,
  traits,
}) {
  return (
    <article
      className="artframe"
      style={{ "--frame-colour": frameColour }}
      role="img"
      aria-label={artname}
    >
      {artworkComponent}

      <div className="artframe__info">
        <span className="artframe__name">{artname}</span>

        <ul className="artframe__traits">
          {traits.map((trait) => (
            <div className="artframe__trait">
              <img className="artframe__trait-icon" key={artname + trait.name} src={trait.icon} />
              <span className="artframe__trait-tooltip">{trait.description}</span>
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
}
