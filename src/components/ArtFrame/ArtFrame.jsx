import "./ArtFrame.css";

export default function ArtFrame({ artworkComponent, frameColour, artname, traits }) {
  return (
    <article
      className="artframe"
      style={{
        border: `30px solid ${frameColour}`
      }}
      role='img'
      aria-label={artname}
    >
      {artworkComponent}
      <span className="artframe__name" style={{ color: frameColour }}>{artname}</span>
      <ul className="artframe__traits">
        {traits.map(trait => <li className="artframe__trait" key={artname + trait}>{trait}</li>)}
      </ul>
    </article>
  );
}
