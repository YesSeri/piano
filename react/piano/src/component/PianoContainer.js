import React, { useState } from 'react'
import { Sampler, Buffer } from 'tone'
import SmallPiano from "./smallPiano/SmallPiano";
import { g3, a3, c4, ds4, fs4, a4, c5, ds5 } from './audio/index'
import LargePiano from './largePiano/LargePiano';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const g3b = new Buffer(g3)
const a3b = new Buffer(a3)
const c4b = new Buffer(c4)
const ds4b = new Buffer(ds4)
const fs4b = new Buffer(fs4)
const a4b = new Buffer(a4)
const c5b = new Buffer(c5)
const ds5b = new Buffer(ds5)
const Container = ({ largePiano, octaveHigher, children, ...props }) => {
  console.log({ octaveHigher });
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
    },
    baseUrl: "../../assets/audio",
    release: 1,
    onload: () => {
      setLoaded(true)
    }
  }).toDestination();

  const Piano = () => (loaded ?
    largePiano ?
      <LargePiano sampler={sampler} />
      :
      <SmallPiano sampler={sampler} />
    : null
  )
  const handleClick = () => {
    handle.enter()
  }

  return (
    <div className="piano-container" {...props}>
      <FullScreen handle={handle}>
        <Piano />
      </FullScreen>
      <button onClick={handleClick}>
        Enter fullscreen
      </button>
    </div>
  )
}

export default Container
