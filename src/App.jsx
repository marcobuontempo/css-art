import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [traitFilters, setTraitFilters] = useState([])

  return (
    <>
      <NavBar traitFilters={traitFilters} setTraitFilters={setTraitFilters} />
      <Gallery traitFilters={traitFilters} />
    </>
  )
}

export default App
