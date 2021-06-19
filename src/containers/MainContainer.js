import React, { Suspense, useState } from 'react'
import InputContainer from './InputContainer'
import { LoadingOverlay } from '@mantine/core';
import styled from 'styled-components/macro'
import WaitScreen from '../component/WaitScreen/index'
const FullscreenPiano = React.lazy(() => import('../component/piano/FullscreenPiano'));

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
            {!clicked ? <WaitScreen setClicked={setClicked}>Click to load Piano</WaitScreen>
                :
                <>
                    <Suspense fallback={'loading'}>
                        <LoadingOverlay visible={loading} transitionDuration={1000} />
                        <FullscreenPiano options={{ low: lowSlider, high: highSlider, showNotenames, showKeybindings, loading }} setLoading={setLoading} />
                        <InputContainer
                            setLowSlider={setLowSlider}
                            setHighSlider={setHighSlider}
                            showNotenames={showNotenames}
                            setShowNotenames={setShowNotenames}
                            showKeybindings={showKeybindings}
                            setShowKeybindings={setShowKeybindings}
                        />
                    </Suspense>
                </>
            }
        </Container>
    )
}

export default MainContainer