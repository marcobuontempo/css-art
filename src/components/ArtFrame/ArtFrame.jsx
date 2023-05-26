import React from "react";
import "./ArtFrame.css";

export default function ArtFrame({ artworkComponent, frameColour, canvasColour, artname }) {
  return (
    <article
      className="artframe"
      style={{
        border: `40px solid ${frameColour}`,
        backgroundColor: canvasColour,
      }}
      role='img'
      aria-label={artname}
    >
      {artworkComponent}
      <span className="artframe__name" style={{color:frameColour}}>{artname}</span>
    </article>
  );
}
