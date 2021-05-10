import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullPiano from './FullPiano'
import { createSampler } from '../../helper'

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
          <FullPiano sampler={sampler} options={options}></FullPiano>
        </FullScreen>
      </div>
      <button onClick={handleClick}>
        Enter fullscreen
      </button>
    </>
  )
}

export default FullscreenPiano