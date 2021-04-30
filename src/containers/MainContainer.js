import React, { useState } from 'react'
import KeybindingsContainer from './KeybindingsContainer'
import InputContainer from './InputContainer'
import LazyPianoContainer from '../component/piano/LazyPiano'
import Overlay from '../component/Overlay'

const MainContainer = () => {
    const [lowSlider, setLowSlider] = useState('C2')
    const [highSlider, setHighSlider] = useState('C3')
    // const [octaveHigher, setOctaveHigher] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    }
    return (
        <div>
            <KeybindingsContainer />
            <InputContainer setLowSlider={setLowSlider} setHighSlider={setHighSlider} />
            {isClicked ?
                <LazyPianoContainer low={lowSlider} high={highSlider} />
                :
                <Overlay low={lowSlider} high={highSlider} onClick={handleClick}>Click to load Piano</Overlay>
            }
        </div>
    )
}

export default MainContainer
