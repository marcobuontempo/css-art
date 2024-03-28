import "./Pokeball.css";
import TRAITS from "../../components/ArtworksList/TRAITS";

export default function Pokeball() {
  return <div className="pokeball"></div>;
}

Pokeball.artname = "Pokeball.";
Pokeball.frameColour = "black";
Pokeball.traits = [TRAITS.ONEDIV];