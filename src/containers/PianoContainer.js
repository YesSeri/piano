import React, { useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Piano from '../component/piano'
import createSampler from '../helper/createSampler'

const Container = ({ high, low, children, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const handle = useFullScreenHandle();
  console.log('fn run')
  const sampler = createSampler(() => setLoaded(true)); 
  const handleClick = () => {
    handle.enter()
  }

  return (
    <div className="piano-container" {...props}>
      <FullScreen handle={handle}>
        {loaded ?
          <Piano sampler={sampler} low={low} high={high} />
          : null}
      </FullScreen>
      <button id="fullscreen-btn" onClick={handleClick}>
        Enter fullscreen
      </button>
    </div>
  )
}

export default Container
