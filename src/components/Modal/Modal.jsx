import tinycolor from "tinycolor2";
import ArtFrame from "../ArtFrame/ArtFrame";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";

export default function Modal({ children, visible, setVisible, isArtwork = false, Artwork }) {
  const closeModal = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  if (isArtwork === true) {
    const mainShade = tinycolor(Artwork.frameColour).isLight() ? "white" : "black";
    const contrastShade = mainShade === "white" ? "black" : "white";
    const formattedArtname = Artwork.artname.replace(/[^a-zA-Z]/g, "");
    const githubLinks = {
      jsx: `https://github.com/marcobuontempo/css-art/tree/main/src/artworks/${formattedArtname}/${formattedArtname}.jsx`,
      css: `https://github.com/marcobuontempo/css-art/tree/main/src/artworks/${formattedArtname}/${formattedArtname}.css`,

    }
    return (
      <div className="modal modal__artwork" style={{ display: visible ? "flex" : "none" }}>
        <div className="modal__main"
          style={{ "--frame-colour": Artwork.frameColour }}>
          <div className="modal__head">
            <h2 className="modal__title" style={{ color: contrastShade }}>{Artwork.artname}</h2>
            <div className="modal__artwork_gh">
              <a target="_blank" rel="noreferrer" href={githubLinks.jsx}>
                <FontAwesomeIcon icon={faFileCode} size="2x" color={contrastShade} />
              </a>
              <a target="_blank" rel="noreferrer" href={githubLinks.css}>
                <FontAwesomeIcon icon={faCss3Alt} size="2x" color={contrastShade} />
              </a>
            </div>
          </div>
          <ArtFrame
            key={Artwork.name}
            canvasColour={Artwork.canvasColour}
            frameColour={Artwork.frameColour}
            artworkComponent={<Artwork />}
            artname={Artwork.artname}
            traits={Artwork.traits}
            isModal={true}
          />
          <button className="modal__close" onClick={closeModal} style={{ color: mainShade, border: `2px solid ${mainShade}`, background: contrastShade }}>Close</button>
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
