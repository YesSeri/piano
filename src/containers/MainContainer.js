import React from 'react'
import KeybindingsContainer from './KeybindingsContainer'
import InputContainer from './InputContainer'
import LazyPianoContainer from './LazyPianoContainer'

const MainContainer = () => {
    const [largePiano, setLargePiano] = React.useState(false)
    // const [octaveHigher, setOctaveHigher] = useState(false);
    return (
        <div>
            <LazyPianoContainer largePiano={largePiano} />
            <KeybindingsContainer />
            <InputContainer largePiano={largePiano} setLargePiano={setLargePiano} />
        </div>
    )
}

export default MainContainer
