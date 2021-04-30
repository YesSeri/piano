import React, { useState } from 'react'
import { Sampler, Buffer } from 'tone'
import { g3, a3, c4, ds4, fs4, a4, c5, ds5, fs5, a5, c6, ds6, fs6 } from '../assets/audio'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Piano from '../component/piano'
const g3b = new Buffer(g3)
const a3b = new Buffer(a3)
const c4b = new Buffer(c4)
const ds4b = new Buffer(ds4)
const fs4b = new Buffer(fs4)
const a4b = new Buffer(a4)
const c5b = new Buffer(c5)
const ds5b = new Buffer(ds5)
const fs5b = new Buffer(fs5)
const a5b = new Buffer(a5)
const c6b = new Buffer(c6)
const ds6b = new Buffer(ds6)
const fs6b = new Buffer(fs6)

const Container = ({ high, low, children, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const handle = useFullScreenHandle();
  const sampler = new Sampler({
    urls: {
      "G1": g3b,
      "A1": a3b,
      "C2": c4b,
      "D#2": ds4b,
      "F#2": fs4b,
      "A2": a4b,
      "C3": c5b,
      "D#3": ds5b,
      "F#3": fs5b,
      "A3": a5b,
      "C4": c6b,
      "D#4": ds6b,
      "F#4": fs6b,
    },
    baseUrl: "../../assets/audio",
    release: 1,
    onload: () => {
      setLoaded(true)
    }
  }).toDestination();

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
