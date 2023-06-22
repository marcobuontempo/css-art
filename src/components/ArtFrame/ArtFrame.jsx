import "./ArtFrame.css";

export default function ArtFrame({ artworkComponent, frameColour, artname, traits }) {
  return (
    <article
      className="artframe"
      style={{ "--frame-colour": frameColour }}
      role='img'
      aria-label={artname}
    >
      {artworkComponent}

    <div className="artframe__info">
      <span className="artframe__name" >{artname}</span>

      <ul className="artframe__traits">
        {traits.map(trait => <img className="artframe__trait" key={artname + trait.name} src={trait.icon} />)}
      </ul>
    </div>

    </article>
  );
}
