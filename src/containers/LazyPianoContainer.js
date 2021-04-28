import React, { useState } from 'react'
import Overlay from '../component/Overlay.js'
const PianoContainer = React.lazy(() => import('./PianoContainer'));

const LazyPianoContainer = ({ largePiano }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    }
    return (
        isClicked ?
            <React.Suspense fallback={<div>Loading...</div>}>
                <PianoContainer largePiano={largePiano} />
            </React.Suspense>
            :
            <Overlay onClick={handleClick}>Click to load Piano</Overlay>
    )
}

export default LazyPianoContainer
