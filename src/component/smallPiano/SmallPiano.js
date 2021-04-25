import React, { useEffect, useState } from 'react';
import { smallKeys, translation } from './data';
import useActiveNoteHandler from '../useActiveNoteHandler';
const SmallPiano = ({ sampler }) => {
  const [clicked, setClicked] = useState('')
  const activeKeys = useActiveNoteHandler(sampler, translation)
  const createPath = (id, note, color, d) => {
    return <path
      key={id}
      data-note={note}
      onContextMenu={(e) => e.preventDefault()}
      className={`${color}-key piano-key ${activeKeys.includes(note) ? 'active' : ''}`} d={d}
    />
  }
  // These two gets highlighted using pseudoclass instead of .active class.
  // Since two keys can't get pressed at the same time with the mouse, the problem I have to solve for keypresses doesn't appear here. 
  useEffect(() => {
    const handleMouseUp = () => {
      sampler.triggerRelease(clicked)
    }
    const handleMouseDown = (e) => {
      const { note } = e.target.dataset
      if (!note) return
      setClicked(note)
      sampler.triggerAttack(note)
    }

    // Here instead of in path because I mouse sometimes get released not over the clicked note.
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [sampler, clicked])



  return (
    <div className='piano piano-small' >
      <svg id='piano-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.196 32.279" preserveAspectRatio="none">
        {smallKeys.map(({ id, note, color, d }) => createPath(id, note, color, d))}
      </svg>
    </div>
  )
}


export default SmallPiano