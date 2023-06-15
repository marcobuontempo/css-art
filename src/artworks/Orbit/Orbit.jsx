import React from "react";
import "./Orbit.css";
import TRAITS from "../TRAITS";

function Orbit() {
  return <div className="orbit"></div>;
}

Orbit.artname = "Orbit.";
Orbit.frameColour = "whitesmoke";
Orbit.canvasColour = "black"
Orbit.traits = [TRAITS.ONEDIV, TRAITS.ANIMATED];

export default Orbit;
