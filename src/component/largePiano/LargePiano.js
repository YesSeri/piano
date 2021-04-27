import React, { useEffect, useState } from 'react'
import { largeKeys, translation } from './data'
import useActiveNoteHandler from '../useActiveNoteHandler';


const LargePiano = ({ sampler }) => {
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
  useEffect(() => {
    const handleMouseUp = (e) => {
      console.log(e);
      sampler.triggerRelease(clicked)
    }

    const handleMouseMove = (e) => {
      console.log(e);
    }
    const handleMouseDown = (e) => {
      console.log(e);
      const { note } = e.target.dataset
      if (!note) return
      setClicked(note)
      sampler.triggerAttack(note)
    }

    // Here instead of in path because I mouse sometimes get released not over the clicked note.
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [sampler, clicked])



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