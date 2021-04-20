import React, { useEffect, useState } from 'react'
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
  const [keysPressed, setKeysPressed] = useState(new Set())
  const handleMouseDown = (note) => {
    sampler.triggerAttack(note)
  }
  useEffect(() => {
    document.addEventListener("keydown", (e) => handleKeyDown(e, keysPressed, setKeysPressed));
    document.addEventListener("keyup", (e) => handleKeyUp(e, keysPressed, setKeysPressed));
    return () => {
      document.removeEventListener("keydown", (e) => handleKeyDown(e));
    }
  }, []);


  return (
    <div className='piano-small'>
      <svg id='piano-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.196 32.279" preserveAspectRatio="none">
        <path id='c2' onKeyDown={() => handleKeyDown('C2')} onMouseDown={() => handleMouseDown('C2')} className='white-key piano-key' data-note='C2' d="M10.848.265v31.75H1.323a1.056 1.056 0 01-1.058-1.059V.265h10.583z" />
        <path id='d2' onMouseDown={() => handleMouseDown('D2')} className='white-key piano-key' d="M10.848.265h10.583v31.75H10.848z" />
        <path id='e2' onMouseDown={() => handleMouseDown('E2')} className='white-key piano-key' d="M21.431.265h10.583v31.75H21.431z" />
        <path id='f2' onMouseDown={() => handleMouseDown('F2')} className='white-key piano-key' d="M32.015.265h10.583v31.75H32.015z" />
        <path id='g2' onMouseDown={() => handleMouseDown('G2')} className='white-key piano-key' d="M42.598.265h10.583v31.75H42.598z" />
        <path id='a2' onMouseDown={() => handleMouseDown('A2')} className='white-key piano-key' d="M53.181.265h10.583v31.75H53.181z" />
        <path id='b2' onMouseDown={() => handleMouseDown('B2')} className='white-key piano-key' d="M63.765.265h10.583v31.75H63.765z" />
        <path id='c3' onMouseDown={() => handleMouseDown('C3')} className='white-key piano-key' d="M74.348.265v31.75h9.525c.586 0 1.058-.472 1.058-1.059V.265H74.348z" />
        <path id='cs2' onMouseDown={() => handleMouseDown('C#2')} className='black-key piano-key' data-note='C#2' d="M15.081.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
        <path id='ds2' onMouseDown={() => handleMouseDown('D#2')} className='black-key piano-key' d="M25.665.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
        <path id='fs2' onMouseDown={() => handleMouseDown('F#2')} className='black-key piano-key' d="M46.831.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
        <path id='gs2' onMouseDown={() => handleMouseDown('G#2')} className='black-key piano-key' d="M57.415.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z" />
        <path id='as2' onMouseDown={() => handleMouseDown('A#2')} className='black-key piano-key' d="M67.998.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.587 0-1.059-.44-1.059-.988V.265z" />
      </svg>
    </div>
  )
}

const handleKeyDown = (evt, keysPressed, setKeysPressed) => {
  console.log('down', { keysPressed });
  for (const key in translation) {
    if (translation[key] === evt.key && !keysPressed.has(evt.key)) {
      // sampler.triggerAttack(key)
      const a = new Set([...keysPressed, evt.key])
      console.log({ a });
      setKeysPressed(prev => new Set([...prev, evt.key]))
    }
  }
}

const handleKeyUp = (evt, keysPressed, setKeysPressed) => {
  console.log('up', { keysPressed });
  for (const key in translation) {
    if (translation[key] === evt.key) {
      // sampler.triggerRelease(key)
    }
  }
}
export default Piano
