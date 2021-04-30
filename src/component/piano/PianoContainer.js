import React, { useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Piano from '.'
import createSampler from '../../helper/createSampler'

const Container = ({ high, low, children, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const handle = useFullScreenHandle();
  const sampler = createSampler(() => setLoaded(true));

  const handleClick = () => {
    handle.enter()
  }

  return (
    <>
      <div className="piano-container" {...props}>
        {loaded ?
          <>
            <FullScreen handle={handle}>
              <Piano sampler={sampler} low={low} high={high} />
            </FullScreen>
          </>
          : null}
      </div>
      {loaded ?
        <button id="fullscreen-btn" onClick={handleClick}>
          Enter fullscreen
      </button>
        :
        null
      }
    </>
  )
}

export default Container
