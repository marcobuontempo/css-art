import TRAITS from '../../components/ArtworksList/TRAITS'
import './Trapped.css'

export default function Trapped() {
  return <div className='trapped'>PERSON INSIDE BOX, TOP PART MOVES DOWN LIKE A CEILING, BACKGROUND SAME AS FRAME COLOUR</div>
}

Trapped.artname = "Trapped.";
Trapped.frameColour = "white";
Trapped.traits = [TRAITS.ONEDIV];