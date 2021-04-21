import './scss/my.scss'
import React, { useState } from 'react'
import Header from './component/Header.js'
import Title from './component/Title.js'
import Overlay from './component/Overlay.js'
const PianoContainer = React.lazy(() => import('./component/PianoContainer'));

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [largePiano, setLargePiano] = useState(false)
  const handleClick = () => {
    setIsClicked(true);
  }
  return (
    <div className="app-container">
      <Title />
      <Header></Header>
      {isClicked ?
        <React.Suspense fallback={<div>Loading...</div>}>
          <PianoContainer largePiano={largePiano} />
        </React.Suspense>
        :
        <Overlay onClick={handleClick}>Click to load Piano</Overlay>
      }
      <Input setLargePiano={setLargePiano} />
    </div>
  );
}

const Input = ({ setLargePiano }) => {

  const handleChange = (e) => {
    setLargePiano(e.target.checked)
  }
  return (<>
    <label htmlFor="largePiano">Larger piano</label>
    <input onChange={(handleChange)} type="checkbox" id="largePiano" />
  </>)
}
export default App;
