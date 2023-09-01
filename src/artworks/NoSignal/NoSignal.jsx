import TRAITS from '../TRAITS'
import './NoSignal.css'

export default function NoSignal() {
  return <div className='nosignal'>FISHEYE TV WITH &quot;NO SIGNAL&quot; PATTERN</div>
}

NoSignal.artname = "No Signal.";
NoSignal.frameColour = "pink";
NoSignal.traits = [TRAITS.ONEDIV];