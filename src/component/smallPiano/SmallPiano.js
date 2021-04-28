import React, { useEffect } from 'react';
import { smallKeys, translation } from './data';
import useActiveNoteHandler from '../../helper/useActiveNoteHandler';
import useMouseClicker from '../../helper/useMouseClicker';
const SmallPiano = ({ sampler }) => {
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
  // These two gets highlighted using pseudoclass instead of .active class.
  // Since two keys can't get pressed at the same time with the mouse, the problem I have to solve for keypresses doesn't appear here. 
  useEffect(() => {
    if (clicked == null) return
    sampler.triggerAttack(clicked)
  }, [sampler, clicked])
  useEffect(() => {
    if (released == null) return
    sampler.triggerRelease(released)
  }, [sampler, released])



  return (
    <div className='piano piano-small' >
      <svg id='piano-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.196 32.279" preserveAspectRatio="none">
        {smallKeys.map(({ id, note, color, d }) => createPath(id, note, color, d))}
      </svg>
    </div>
  )
}


export default SmallPiano