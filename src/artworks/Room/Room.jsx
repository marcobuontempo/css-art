import './Room.css';
import TRAITS from '../TRAITS'

export default function Room() {
  return <div className='room'></div>;
}

Room.artname = "Room.";
Room.frameColour = "brown";
Room.traits = [TRAITS.ONEDIV, TRAITS.ANIMATED, TRAITS.INTERACTIVE];