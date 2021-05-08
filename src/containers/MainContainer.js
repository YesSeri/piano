import React, { useState } from 'react'
import InputContainer from './InputContainer'
import FullscreenPiano from '../component/piano/FullscreenPiano'
import { LoadingOverlay } from '@mantine/core';

const MainContainer = () => {
    const [lowSlider, setLowSlider] = useState('C2')
    const [highSlider, setHighSlider] = useState('C3')
    const [loading, setLoading] = useState(true)
    const [showKeyNames, setShowKeyNames] = useState(false);
    return (
        <div>
            <InputContainer setLowSlider={setLowSlider} setHighSlider={setHighSlider} setShowKeyNames={setShowKeyNames} showKeyNames={showKeyNames} />
            <div style={{ position: 'relative' }}>
                <LoadingOverlay visible={loading} transitionDuration={500} />
                <FullscreenPiano options={{ low: lowSlider, high: highSlider, showKeyNames }} setLoading={setLoading} />
            </div>
        </div>
    )
}

export default MainContainer