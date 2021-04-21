import React, { useEffect, useState } from 'react'
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

const SmallPiano = ({ sampler }) => {
  const [clicked, setClicked] = useState('')
  const activeKeys = useKeyHandler(sampler)

  const createPath = (id, note, color, d) => {
    return <path id={id} key={id}
      onMouseDown={() => handleMouseDown(note)}
      onContextMenu={(e) => e.preventDefault()}
      onTouchEnd={(e) => handleTouchEnd(note)}
      className={`${color}-key piano-key ${activeKeys.includes(translation[note]) ? 'active' : ''}`} d={d}
    />
  }
  const handleMouseDown = (note) => {
    setClicked(note)
    sampler.triggerAttack(note)
  }
  useEffect(() => {
    const handleMouseUp = () => {
      sampler.triggerRelease(clicked)
    }
    const handleTouchStart = (e) => {
      e.preventDefault()
      const note = e.target.id.replace('s', '#').toUpperCase()
      sampler.triggerAttack(note)
    }
    // Here instead of in path because I mouse sometimes get released not over the clicked note.
    window.addEventListener('mouseup', handleMouseUp);
    // I need to add eventlistener here because I need to set it to passive, so I can prevent default.
    const piano = document.getElementsByClassName('piano-small')[0]
    piano.addEventListener('touchstart', handleTouchStart, { passive: false });
    return () => {
      console.log(document.getElementsByClassName('piano-small')[0])
      window.removeEventListener('mouseup', handleMouseUp);
      piano.removeEventListener('touchstart', handleTouchStart, { passive: false });
    }
  }, [sampler, clicked])

  const handleTouchEnd = (note) => {
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
const useKeyHandler = (sampler) => {
  const [keys, setKeys] = useState(new Set())
  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (keys.has(key)) return
      setKeys(new Set([...keys, key]));
      for (const note in translation) {
        if (translation[note] === key) {
          sampler.triggerAttack(note)
        }
      }
    };
    const handleKeyUp = ({ key }) => {
      setKeys(new Set([...keys].filter(k => k !== key)));
      for (const note in translation) {
        if (translation[note] === key) {
          sampler.triggerRelease(note)
        }
      }
    };

    // In here so I can use dependency array so the closure never is stale.
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [sampler, keys]);
  return [...keys]
}

export default SmallPiano
