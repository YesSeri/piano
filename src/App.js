import './scss/my.scss'
import React, { useState } from 'react'
import Header from './component/Header.js'
import Title from './component/Title.js'
import KeybindingsContainer from './containers/KeybindingsContainer'
import InputContainer from './containers/InputContainer'
import FooterContainer from './containers/FooterContainer'
import LazyPianoContainer from './containers/LazyPianoContainer'

function App() {
  // const [octaveHigher, setOctaveHigher] = useState(false);
  const [largePiano, setLargePiano] = useState(false)

  return (
    <div className="app-container">
      <div>
        <Title />
        <Header />
        <LazyPianoContainer largePiano={largePiano} />
        <KeybindingsContainer />
        <InputContainer largePiano={largePiano} setLargePiano={setLargePiano} />
      </div>
      <div>
        <FooterContainer />
      </div>
    </div>
  );
}



export default App;
