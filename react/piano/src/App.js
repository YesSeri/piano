import './scss/my.scss'
import React, { useState } from 'react'
import Header from './component/Header.js'
import Title from './component/Title.js'
const PianoContainer = React.lazy(() => import('./component/piano/PianoContainer'));

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (evt) => {
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
        <button onClick={(evt) => handleClick()}>Load Piano</button>
      }
    </div>
  );
}

export default App;
