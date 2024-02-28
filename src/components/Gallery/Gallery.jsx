import "./Gallery.css";
import ArtFrame from "../ArtFrame/ArtFrame";

// Use '../ArtworksList/ArtworksList.jsx' to import/export all art
import ArtworksList from "../ArtworksList/ArtworksList";
import TRAITS from "../ArtworksList/TRAITS";

export default function Gallery({
  traitFilters,
  cssAnimationsOn,
  setModalInfo,
  setModalVisible,
}) {
  const expandArtwork = (Artwork) => {
    setModalInfo({
      content: Artwork,
      isArtwork: true,
    });
    setModalVisible(true);
  };

  const isArtworkInFilter = (artworkTraits) => {
    return traitFilters.every((key) => artworkTraits.includes(TRAITS[key]));
  };

  return (
    <main
      className={"gallery" + (cssAnimationsOn ? "" : " disable-animations")}
    >
      {Object.keys(ArtworksList).map((k, i) => {
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
              expandArtwork={() => expandArtwork(Artwork)}
            />
          );
        }
      })}
    </main>
  );
}
