import React, { Suspense, useState } from 'react'
import InputContainer from './InputContainer'
import { LoadingOverlay } from '@mantine/core';
import WaitScreen from '../component/WaitScreen/index'
import styled, { keyframes } from "styled-components/macro";
const FullscreenPiano = React.lazy(() => import('../component/piano/FullscreenPiano'));

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin:auto;
  margin-top:10px;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

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
        <Suspense fallback={<Spinner />}>
          <LoadingOverlay visible={loading} transitionDuration={500} />
          <FullscreenPiano options={{ low: lowSlider, high: highSlider, showNotenames, showKeybindings, loading }} setLoading={setLoading} />
        </Suspense>
      }
      <InputContainer
        setLowSlider={setLowSlider}
        setHighSlider={setHighSlider}
        showNotenames={showNotenames}
        setShowNotenames={setShowNotenames}
        showKeybindings={showKeybindings}
        setShowKeybindings={setShowKeybindings}
      />
    </Container>
  )
}

export default MainContainer