import React from 'react'
import KeybindingsContainer from './KeybindingsContainer'
import InputContainer from './InputContainer'
import LazyPianoContainer from './LazyPianoContainer'

const MainContainer = () => {
    const [low, setLow] = React.useState('C2')
    const [high, setHigh] = React.useState('C3')
    // const [octaveHigher, setOctaveHigher] = useState(false);
    return (
        <div>
            <LazyPianoContainer high={high} low={low} />
            <KeybindingsContainer />
            <InputContainer setHigh={setHigh} setLow={setLow} />
        </div>
    )
}

export default MainContainer
