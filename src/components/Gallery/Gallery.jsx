import "./Gallery.css";
import ArtFrame from "../ArtFrame/ArtFrame";

// Use '../../artworks/ArtworksList.jsx' to import/export all art
import ArtworksList from "../../artworks/ArtworksList";
import TRAITS from "../../artworks/TRAITS";

export default function Gallery({ traitFilters, cssAnimationsOn }) {

  const isArtworkInFilter = (artworkTraits) => {
    return traitFilters.every(key => artworkTraits.includes(TRAITS[key]))
  } 

  return (
    <main className={"gallery" + (cssAnimationsOn ? "" : " disable-animations")}>
      {Object.keys(ArtworksList).map((k) => {
        const Artwork = ArtworksList[k];

        if (isArtworkInFilter(Artwork.traits)) {
          return (
            <ArtFrame
              key={Artwork.name}
              canvasColour={Artwork.canvasColour}
              frameColour={Artwork.frameColour}
              artworkComponent={<Artwork />}
              artname={Artwork.artname}
              traits={Artwork.traits}
            />
          )
        }
      })}
    </main>
  );
}
