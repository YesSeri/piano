import React, { useState } from 'react'
import KeybindingsContainer from './KeybindingsContainer'
import InputContainer from './InputContainer'
import PianoContainer from '../component/piano/PianoContainer'
import Overlay from '../component/Overlay'

const MainContainer = () => {
    const [lowSlider, setLowSlider] = useState('C2')
    const [highSlider, setHighSlider] = useState('C3')
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    }
    return (
        <div>
            <InputContainer setLowSlider={setLowSlider} setHighSlider={setHighSlider} />
            {isClicked ?
                <PianoContainer low={lowSlider} high={highSlider} />
                :
                <Overlay low={lowSlider} high={highSlider} onClick={handleClick}>Click to load Piano</Overlay>
            }
            <KeybindingsContainer />
        </div>
    )
}

export default MainContainer
