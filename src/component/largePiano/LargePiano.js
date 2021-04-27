import React, { useEffect } from 'react'
import { largeKeys, translation } from './data'
import useActiveNoteHandler from '../useActiveNoteHandler';
import useMouseClicker from '../useMouseClicker';


const LargePiano = ({ sampler }) => {
  const [clicked, released] = useMouseClicker();
  const activeKeys = useActiveNoteHandler(sampler, translation)
  const createPath = (id, note, color, d) => {
    return <path
      key={id}
      data-note={note}
      onContextMenu={(e) => e.preventDefault()}
      className={`${color}-key piano-key ${activeKeys.includes(note) || clicked === note ? 'active' : ''}`} d={d}
    />
  }

  useEffect(() => {
    if (clicked == null) return
    sampler.triggerAttack(clicked)
  }, [sampler, clicked])
  useEffect(() => {
    if (released == null) return
    sampler.triggerRelease(released)
  }, [sampler, released])

  return (
    <div className='piano piano-large' >
      <svg id='piano-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.529 32.279" preserveAspectRatio="none">
        {largeKeys.map(({ id, note, color, d }) => createPath(id, note, color, d))}
      </svg>
    </div>
  )
}
// This returns the pressed notes so the class active can get added to pressed keys. It also plays the notes.


export default LargePiano