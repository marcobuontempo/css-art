import TRAITS from '../../components/ArtworksList/TRAITS'
import './GreatWave.css'

export default function GreatWave() {
  return <div className='greatwave'></div>
}

GreatWave.artname = "Great Wave.";
GreatWave.frameColour = "darkblue";
GreatWave.traits = [TRAITS.ONEDIV, TRAITS.PIXELART, TRAITS.ANIMATED];