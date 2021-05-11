import React, { useState } from 'react'
import InputContainer from './InputContainer'
import FullscreenPiano from '../component/piano/FullscreenPiano'
import { LoadingOverlay } from '@mantine/core';
import styled from 'styled-components/macro'
import Overlay from '../component/Overlay'

const Container = styled.div`
    position: relative;
`
const MainContainer = () => {
    const [lowSlider, setLowSlider] = useState('C2')
    const [highSlider, setHighSlider] = useState('C3')
    const [loading, setLoading] = useState(true)
    const [showNotenames, setShowNotenames] = useState(false);
    const [showKeybindings, setShowKeybindings] = useState(false);
    const [clicked, setClicked] = useState(false);
    return (
        <Container>
            {!clicked ? <Overlay setClicked={setClicked} >Click to load Piano</Overlay>
                :
                <>
                    <LoadingOverlay visible={loading} transitionDuration={500} />
                    <FullscreenPiano options={{ low: lowSlider, high: highSlider, showNotenames, showKeybindings }} setLoading={setLoading} />
                    <InputContainer
                        setLowSlider={setLowSlider}
                        setHighSlider={setHighSlider}
                        showNotenames={showNotenames}
                        setShowNotenames={setShowNotenames}
                        showKeybindings={showKeybindings}
                        setShowKeybindings={setShowKeybindings}
                    />
                </>
            }
        </Container>
    )
}

export default MainContainer