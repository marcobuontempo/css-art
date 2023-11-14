import tinycolor from "tinycolor2";
import ArtFrame from "../ArtFrame/ArtFrame";
import "./Modal.css";

export default function Modal({ children, visible, setVisible, isArtwork = false, Artwork }) {
  const closeModal = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  if (isArtwork === true) {
    const frameIsLight = tinycolor(Artwork.frameColour).isLight();
    return (
      <div className="modal modal__artwork" style={{ display: visible ? "flex" : "none" }}>
        <div className="modal__main"
          style={{ "--frame-colour": Artwork.frameColour }}>
          <h2 className="modal__title" style={{ color: frameIsLight ? "black" : "white" }}>{Artwork.artname}</h2>
          <ArtFrame
            key={Artwork.name}
            canvasColour={Artwork.canvasColour}
            frameColour={Artwork.frameColour}
            artworkComponent={<Artwork />}
            artname={Artwork.artname}
            traits={Artwork.traits}
            isModal={true}
          />
          <button className="modal__close" onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal" style={{ display: visible ? "flex" : "none" }}>
        <div className="modal__main">
          <h2 className="modal__title">TITLE</h2>
          <div className="modal__content">{Artwork}</div>
          <button className="modal__close" onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  }

}
