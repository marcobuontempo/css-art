import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import NavBar from './components/NavBar/NavBar'
import ToTopButton from './components/ToTopButton/ToTopButton'

function App() {
  const [traitFilters, setTraitFilters] = useState([])
  const [cssAnimationsOn, setCssAnimationsOn] = useState(false);

  return (
    <>
      <NavBar traitFilters={traitFilters} setTraitFilters={setTraitFilters} cssAnimationsOn={cssAnimationsOn} setCssAnimationsOn={setCssAnimationsOn} />
      <Gallery traitFilters={traitFilters} cssAnimationsOn={cssAnimationsOn} />
      <ToTopButton />
    </>
  )
}

export default App
