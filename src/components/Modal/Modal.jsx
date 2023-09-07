import "./Modal.css";

export default function Modal({ children, visible, setVisible, isArtwork = false, Artwork }) {
  const closeModal = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  if(isArtwork === true) {
    return (
      <div className="modal modal__artwork" style={{ display: visible ? "flex" : "none" }}>
        <div className="modal__main">
          <h2 className="modal__title">{Artwork.artname}</h2>
          <div className="modal__content">{<Artwork />}</div>
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
