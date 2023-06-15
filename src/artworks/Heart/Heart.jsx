import './Heart.css';
import TRAITS from '../TRAITS';

function Heart() {
  return <input type="checkbox" className='heart'></input>;
}

Heart.artname = "Heart.";
Heart.frameColour = "orange";
Heart.traits = [TRAITS.ONEDIV, TRAITS.PIXELART, TRAITS.ANIMATED, TRAITS.INTERACTIVE];

export default Heart;