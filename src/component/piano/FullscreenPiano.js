import React, { useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Piano from '.'
import createSampler from '../../helper/createSampler'
import { Button } from '@mantine/core';

const FullscreenPiano = ({ options, setLoading, children, ...props }) => {
  const handle = useFullScreenHandle();
  const sampler = createSampler(() => setLoading(false));

  const handleClick = () => {
    handle.enter()
  }

  return (
    <>
      <div className="piano-container" {...props}>
        <FullScreen handle={handle}>
          <Piano sampler={sampler} options={options} />
        </FullScreen>
      </div>
      <Button color='yellow' onClick={handleClick}>
        Enter fullscreen
      </Button>
    </>
  )
}

export default FullscreenPiano