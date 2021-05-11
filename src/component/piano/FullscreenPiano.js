import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullPiano from './FullPiano'
import { createSampler } from '../../helper'

const FullscreenPiano = ({ options, setLoading, ...restProps }) => {
  const handle = useFullScreenHandle();
  const sampler = createSampler(() => setLoading(false));

  const handleClick = () => {
    handle.enter()
  }

  return (
    <div {...restProps}>
      <FullScreen handle={handle}>
        <FullPiano sampler={sampler} options={{ ...options, isFullscreen: handle.active }} />
      </FullScreen>
      <button onClick={handleClick}>
        Enter fullscreen
      </button>
    </div>
  )
}

export default FullscreenPiano