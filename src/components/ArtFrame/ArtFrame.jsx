import React from "react";
import "./ArtFrame.css";

export default function ArtFrame({ artworkComponent, frameColour, canvasColour, artname, traits }) {
  return (
    <article
      className="artframe"
      style={{
        border: `30px solid ${frameColour}`,
        backgroundColor: canvasColour,
      }}
      role='img'
      aria-label={artname}
    >
      {artworkComponent}
      <span className="artframe__name" style={{ color: frameColour }}>{artname}</span>
      <ul className="artframe__traits">
        {traits.map(trait => <li className="artframe__trait">{trait}</li>)}
      </ul>
    </article>
  );
}
