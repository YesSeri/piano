import './scss/my.scss'
import React, { useState } from 'react'
import Header from './component/Header.js'
import Title from './component/Title.js'
import Overlay from './component/Overlay.js'
const PianoContainer = React.lazy(() => import('./component/piano/PianoContainer'));

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  }
  return (
    <div className="app-container">
      <Title />
      <Header></Header>
      {isClicked ?
        <React.Suspense fallback={<div>Loading...</div>}>
          <PianoContainer />
        </React.Suspense>
        :
        <Overlay onClick={handleClick}>Load Piano</Overlay>
      }
    </div>
  );
}

export default App;
