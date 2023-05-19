import React from "react";
import "./Smiley.css";
import TRAITS from "../TRAITS";

function Smiley() {
  return <div className="smiley"></div>;
}

Smiley.artname = "Smiley.";
Smiley.canvasColour = "lightgrey";
Smiley.frameColour = "green";
Smiley.traits = [TRAITS.PURECSS];

export default Smiley;
