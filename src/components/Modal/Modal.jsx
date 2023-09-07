import "./Modal.css";

export default function Modal({ children, visible, setVisible, content, contentType }) {
  const closeModal = (e) => {
    e.preventDefault();
    setVisible(false);
    console.log(visible);
  };

  return (
    <div className="modal" style={{ display: visible ? "flex" : "none" }}>
      <div className="modal__main">
        <h2 className="modal__title">TITLE</h2>
        <div className="modal__content">{content}</div>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
