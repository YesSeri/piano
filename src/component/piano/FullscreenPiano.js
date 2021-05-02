import React, { useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Piano from '.'
import createSampler from '../../helper/createSampler'

const FullscreenPiano = ({ high, low, showKeyNames, children, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const handle = useFullScreenHandle();
  const sampler = createSampler(() => setLoaded(true));

  const handleClick = () => {
    handle.enter()
  }

  return (
    loaded ?
      <>
        {children}
        <div className="piano-container" {...props}>
          <FullScreen handle={handle}>
            <Piano sampler={sampler} low={low} high={high} showKeyNames={showKeyNames} />
          </FullScreen>
        </div>
        <button id="fullscreen-btn" onClick={handleClick}>
          Enter fullscreen
        </button>
      </>
      :
      //CSS styled spinner
      <div className="loader"></div>
  )
}

export default FullscreenPiano