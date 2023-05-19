import React from "react";
import "./ArtFrame.css";

export default function ArtFrame({ artworkComponent, frameColour, canvasColour, artname }) {
  return (
    <div
      className="artframe"
      style={{
        border: `40px solid ${frameColour}`,
        backgroundColor: canvasColour,
      }}
    >
      {artworkComponent}
      <span>{artname}</span>
    </div>
  );
}
