import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import NavBar from './components/NavBar/NavBar'
import ToTopButton from './components/ToTopButton/ToTopButton'
import Modal from './components/Modal/Modal'

function App() {
  const [traitFilters, setTraitFilters] = useState([])
  const [cssAnimationsOn, setCssAnimationsOn] = useState(true);
  const [modalInfo, setModalInfo] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal visible={modalVisible} setVisible={setModalVisible} isArtwork={modalInfo.isArtwork} Artwork={modalInfo.content}></Modal>
      <NavBar traitFilters={traitFilters} setTraitFilters={setTraitFilters} cssAnimationsOn={cssAnimationsOn} setCssAnimationsOn={setCssAnimationsOn} />
      <Gallery traitFilters={traitFilters} cssAnimationsOn={cssAnimationsOn} setModalVisible={setModalVisible} setModalInfo={setModalInfo} />
      <ToTopButton />
    </>
  )
}

export default App
