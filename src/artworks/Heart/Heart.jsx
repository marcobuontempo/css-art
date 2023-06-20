import './Heart.css';
import TRAITS from '../TRAITS';

export default function Heart() {
  return <input type="checkbox" className='heart'></input>;
}

Heart.artname = "Heart.";
Heart.frameColour = "orchid";
Heart.traits = [TRAITS.ONEDIV, TRAITS.PIXELART, TRAITS.ANIMATED, TRAITS.INTERACTIVE];