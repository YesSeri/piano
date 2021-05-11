import React, { useState } from 'react'
import InputContainer from './InputContainer'
import FullscreenPiano from '../component/piano/FullscreenPiano'
import { LoadingOverlay } from '@mantine/core';
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
`
const MainContainer = () => {
    const [lowSlider, setLowSlider] = useState('C2')
    const [highSlider, setHighSlider] = useState('C3')
    const [loading, setLoading] = useState(true)
    const [showNotenames, setShowNotenames] = useState(false);
    const [showKeybindings, setShowKeybindings] = useState(false);
    return (
        <div>
            <Container>
                <LoadingOverlay visible={loading} transitionDuration={500} />
                <FullscreenPiano options={{ low: lowSlider, high: highSlider, showNotenames, showKeybindings }} setLoading={setLoading} />
            </Container>
            <InputContainer
                setLowSlider={setLowSlider}
                setHighSlider={setHighSlider}
                showNotenames={showNotenames}
                setShowNotenames={setShowNotenames}
                showKeybindings={showKeybindings}
                setShowKeybindings={setShowKeybindings}
            />
        </div>
    )
}

export default MainContainer