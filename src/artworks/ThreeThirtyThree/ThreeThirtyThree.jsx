import TRAITS from '../TRAITS'
import './ThreeThirtyThree.css'

export default function ThreeThirtyThree() {
  return <input type='checkbox' className='threethirtythree'></input>
}

ThreeThirtyThree.artname = "ThreeThirtyThree.";
ThreeThirtyThree.frameColour = "green";
ThreeThirtyThree.traits = [TRAITS.ONEDIV, TRAITS.INTERACTIVE, TRAITS.ANIMATED];