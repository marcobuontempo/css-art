import TRAITS from '../TRAITS'
import './NoSignal.css'

export default function NoSignal() {
  return <div className='nosignal'>NO SIGNAL</div>
}

NoSignal.artname = "No Signal.";
NoSignal.frameColour = "brown";
NoSignal.traits = [TRAITS.ONEDIV];