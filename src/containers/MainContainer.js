import React from 'react'
import KeybindingsContainer from './KeybindingsContainer'
import InputContainer from './InputContainer'
import LazyPianoContainer from './LazyPianoContainer'
import Piano from '../component/piano'

const MainContainer = () => {
    const [largePiano, setLargePiano] = React.useState(false)
    // const [octaveHigher, setOctaveHigher] = useState(false);
    return (
        <div>
            <Piano low="G3" high="G4"></Piano>
            {/* <LazyPianoContainer largePiano={largePiano} />
            <KeybindingsContainer />
            <InputContainer largePiano={largePiano} setLargePiano={setLargePiano} /> */}
        </div>
    )
}

export default MainContainer
