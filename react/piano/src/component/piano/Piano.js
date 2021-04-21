import React, { useEffect, useState, useRef } from 'react'
import pianoData from './data'
const translation = {
  'C2': 'a',
  'D2': 's',
  'E2': 'd',
  'F2': 'f',
  'G2': 'g',
  'A2': 'h',
  'B2': 'j',
  'C3': 'k',
  'C#2': 'w',
  'D#2': 'e',
  'F#2': 't',
  'G#2': 'y',
  'A#2': 'u',
}

const Piano = ({ sampler }) => {
  const [keys, setKeys] = useState(new Set())
  const refKeys = useRef(keys);
  const refClicked = useRef('');

  const createPath = (id, note, color, d) => {
    return <path id={id} key={id}
      onMouseDown={() => handleMouseDown(note)}
      onContextMenu={(e) => e.preventDefault()}
      // onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      className={`${color}-key piano-key ${keys.has(translation[note]) ? 'active' : ''}`} d={d} />
  }

  useEffect(() => {
    // I need to use a ref, because the keys in the keyhandlers is closured over and always refers to the initial value of keys. The prevKeys however always refer to the previous value.
    const handleKeyDown = (e) => {
      if (refKeys.current.has(e.key)) return
      const currentKeys = new Set([...refKeys.current, e.key])
      refKeys.current = currentKeys
      setKeys(currentKeys)
      for (const key in translation) {
        if (translation[key] === e.key) {
          sampler.triggerAttack(key)
        }
      }
    }
    const handleKeyUp = (e) => {
      const currentKeys = new Set([...refKeys.current].filter(k => k !== e.key))
      refKeys.current = currentKeys;
      setKeys(currentKeys)
      for (const key in translation) {
        if (translation[key] === e.key) {
          sampler.triggerRelease(key)
        }
      }
    }
    const handleTouchStart = (e) => {
      e.preventDefault()
      const note = e.target.id.replace('s', '#').toUpperCase()
      console.log(note);
      sampler.triggerAttack(note)
    }

    const handleMouseUp = () => {
      sampler.triggerRelease(refClicked.current)
    }

    const piano = document.querySelector('#piano-svg')
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    piano.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('mouseup', handleMouseUp)
  }, [sampler])
  const handleMouseDown = (note) => {
    refClicked.current = note
    sampler.triggerAttack(note)
  }
  const handleTouchEnd = (e) => {
    const note = e.target.id.replace('s', '#').toUpperCase()
    sampler.triggerRelease(note)
  }
  return (
    <div className='piano-small' >
      <svg id='piano-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.196 32.279" preserveAspectRatio="none">
        {pianoData.map(el => createPath(el[0], el[1], el[2], el[3]))}
      </svg>
    </div>
  )
}


export default Piano
