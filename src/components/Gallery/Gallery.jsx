import React from "react";
import "./Gallery.css";
import ArtFrame from "../ArtFrame/ArtFrame";

// Use '../../artworks/Artwork.jsx' to import/export all art
import Art from "../../artworks/Artwork";

export default function Gallery() {
  return (
    <main className="gallery">
      {Object.keys(Art).map((k) => {
        const Artwork = Art[k];
        return (
          <ArtFrame
            key={Artwork.name}
            canvasColour={Artwork.canvasColour}
            frameColour={Artwork.frameColour}
            artworkComponent={<Artwork />}
            artname={Artwork.artname}
          />
        );
      })}
    </main>
  );
}
