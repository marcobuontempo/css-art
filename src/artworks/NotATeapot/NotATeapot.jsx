import TRAITS from '../TRAITS'
import './NotATeapot.css'

export default function NotATeapot() {
  return <div className='notateapot'>418</div>
}

NotATeapot.artname = "Not A Teapot.";
NotATeapot.frameColour = "pink";
NotATeapot.traits = [TRAITS.ONEDIV];