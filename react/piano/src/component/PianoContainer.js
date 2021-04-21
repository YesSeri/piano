import React, { useState } from 'react'
import { Sampler, Buffer } from 'tone'
import SmallPiano from "./smallPiano/SmallPiano";
import { c4, ds4, fs4, a4, c5 } from './audio/index'
const c4b = new Buffer(c4)
const ds4b = new Buffer(ds4)
const fs4b = new Buffer(fs4)
const a4b = new Buffer(a4)
const c5b = new Buffer(c5)
const Container = ({ largePiano, children, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const sampler = new Sampler({
    urls: {
      "C2": c4b,
      "D#2": ds4b,
      "F#2": fs4b,
      "A2": a4b,
      "C3": c5b,

    },
    baseUrl: "../../assets/audio",
    release: 1,
    onload: () => {
      setLoaded(true)
    }
  }).toDestination();


  return (
    <div className="piano-container" {...props}>
      {loaded ? <SmallPiano sampler={sampler} /> : null}
    </div>
  )
}

export default Container
