import React from 'react'
import KeybindingsContainer from './KeybindingsContainer'
import InputContainer from './InputContainer'
import LazyPianoContainer from './LazyPianoContainer'

const MainContainer = () => {
    const [lowSlider, setLowSlider] = React.useState('C2')
    const [highSlider, setHighSlider] = React.useState('C3')
    // const [octaveHigher, setOctaveHigher] = useState(false);
    return (
        <div>
            <KeybindingsContainer />
            <InputContainer setLowSlider={setLowSlider} setHighSlider={setHighSlider} />
            <LazyPianoContainer low={lowSlider} high={highSlider} />
        </div>
    )
}

export default MainContainer
