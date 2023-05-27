import React from "react";
import "./Grimmace.css";
import TRAITS from "../TRAITS";

function Grimmace() {
  return <div className="grimmace"></div>;
}

Grimmace.artname = "Grimmace.";
Grimmace.frameColour = "orange";
Grimmace.canvasColour = "lightblue"
Grimmace.traits = [TRAITS.ONEDIV, TRAITS.ANIMATED];

export default Grimmace;
