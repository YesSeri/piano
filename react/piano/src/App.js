import './scss/my.scss'
import React, { useState } from 'react'
import Header from './component/Header.js'
import Title from './component/Title.js'
import Overlay from './component/Overlay.js'
import Keybindings from './component/Keybindings'
const PianoContainer = React.lazy(() => import('./component/PianoContainer'));

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [octaveHigher, setOctaveHigher] = useState(false);
  const [largePiano, setLargePiano] = useState(false)
  const handleClick = () => {
    setIsClicked(true);
  }
  const Input = () => {
    const handlePianoChange = () => {
      setLargePiano(!largePiano)
    }
    const handleOctaveChange = (e) => {
      setOctaveHigher(e.target.checked)
    }
    return (
      <div className="input-container">
        <label htmlFor="largePiano">Larger piano</label>
        <input onChange={handlePianoChange} type="checkbox" id="largePiano" checked={largePiano} />
        <label htmlFor="octaveHigher">One octave higher</label>
        <input onChange={handleOctaveChange} type="checkbox" id="octaveHigher" checked={octaveHigher} />
      </div>)
  }
  const MainContainer = () => (
    isClicked ?
      <React.Suspense fallback={<div>Loading...</div>}>
        <PianoContainer largePiano={largePiano} octaveHigher={octaveHigher} />
      </React.Suspense>
      :
      <Overlay onClick={handleClick}>Click to load Piano</Overlay>
  )

  return (
    <div className="app-container">
      <Title />
      <Header></Header>
      <Input />
      <MainContainer />
      <Keybindings.Title>Keybindings</Keybindings.Title>
      <Keybindings onClick={() => console.log('click')}>
        <Keybindings.Pairs />
      </Keybindings>
    </div>
  );
}



export default App;
