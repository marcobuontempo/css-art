import React from 'react'
import TRAITS from '../TRAITS'
import './Rook.css'

export default function Rook() {
  return <div className='rook'></div>
}

Rook.artname = "Rook.";
Rook.frameColour = "darkgrey";
Rook.traits = [TRAITS.ONEDIV];
