import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullPiano from './FullPiano'
import createSampler from '../../helper/createSampler'
import { Button } from '../../sharedStyles'

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
      <Button onClick={handleClick}>
        Enter fullscreen
      </Button>
    </div>
  )
}

export default FullscreenPiano