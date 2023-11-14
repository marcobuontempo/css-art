import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ArtFrame.css";
import tinycolor from "tinycolor2";
import { useEffect, useState } from "react";

export default function ArtFrame({
  artworkComponent,
  frameColour = "white",
  artname,
  traits,
  scaleFactor = 1,
  isModal = false,
  expandArtwork = () => null,
}) {

  const [scaleAmount, setScaleAmount] = useState(scaleFactor);
  const artSize = 400;
  const frameWidth = 25;
  const mainShade = tinycolor(frameColour).isLight() ? "black" : "white";
  const contrastShade = mainShade === "white" ? "black" : "white";


  const handleArtworkScale = () => {
    const w = window.innerWidth;
    const currentW = scaleAmount * artSize;
    if (currentW > w) {
      setScaleAmount((w / currentW) * scaleFactor);
    } else {
      setScaleAmount(scaleFactor);
    }
  }

  useEffect(() => {
    handleArtworkScale();
    const resizeListener = window.addEventListener('resize', handleArtworkScale);

    return () => {
      resizeListener;
    }
  }, [])

  return (
    <article
      className={`artframe ${isModal && "artframe__is_modal"}`}
      style={{
        "--frame-colour": frameColour,
        "--art-size": `${artSize}px`,
        "--frame-width": `${frameWidth}px`,
        "--art-scale": `${scaleAmount}`,
      }}
      role="img"
      aria-label={artname}
    >
      <div className="artframe__artwork_container">
        {artworkComponent}
      </div>

      <div className="artframe__info">
        <span
          className="artframe__name"
          style={{
            color: mainShade,
            "--shiny-shade": contrastShade,
            "--shiny-shade-50a": (contrastShade === "white") ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"
          }}
          onClick={expandArtwork}
        >
          {artname}
        </span>

        <ul className="artframe__traits">
          {traits.map((trait) => (
            <div className="artframe__trait" key={artname + trait.name}>
              <div className="artframe__trait_icon">
                <FontAwesomeIcon size="xs" icon={trait.icon} color={mainShade} />
              </div>
              <span className="artframe__trait_tooltip">
                {trait.description}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
}
