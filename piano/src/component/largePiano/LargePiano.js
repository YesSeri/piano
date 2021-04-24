import React, { useEffect, useState } from 'react'
import { largeKeys } from './data'
const translation = {
  'c': 'G1',
  'v': 'A1',
  'b': 'B1',
  'q': 'C2',
  'w': 'D2',
  'e': 'E2',
  'r': 'F2',
  't': 'G2',
  'y': 'A2',
  'u': 'B2',
  'i': 'C3',
  'o': 'D3',
  'f': 'G#1',
  'g': 'A#1',
  '2': 'C#2',
  '3': 'D#2',
  '5': 'F#2',
  '6': 'G#2',
  '7': 'A#2',
}

const LargePiano = ({ sampler }) => {
  const [clicked, setClicked] = useState('')
  const activeKeys = useActiveNoteHandler(sampler)

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
    const handleMouseUp = () => {
      sampler.triggerRelease(clicked)

    }
    const handleMouseDown = (e) => {
      const { note } = e.target.dataset
      if(!note) return
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
    <div id='piano-large' >
      <svg id='piano-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.529 32.279" preserveAspectRatio="none">
        {largeKeys.map(({ id, note, color, d }) => createPath(id, note, color, d))}
      </svg>
    </div>
  )
}
// This returns the pressed notes so the class active can get added to pressed keys. It also plays the notes.
const useActiveNoteHandler = (sampler) => {
  const [notes, setNotes] = useState(new Set())
  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      const note = translation[key]
      if (notes.has(note) || !note) return
      setNotes(new Set([...notes, note]));
      sampler.triggerAttack(note)
    };
    const handleKeyUp = ({ key }) => {
      const note = translation[key]
      setNotes(new Set([...notes].filter(k => k !== note)));
      sampler.triggerRelease(note)
    };

    // In here so I can use dependency array so the closure never is stale.
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [sampler, notes]);
  useEffect(() => {
    const handleTouchStart = (e) => {
      e.preventDefault()
      const { note } = e.target.dataset
      setNotes(new Set([...notes, note]));
      sampler.triggerAttack(note)
    }

    const handleTouchEnd = (e) => {
      const { note } = e.target.dataset
      setNotes(new Set([...notes].filter(k => k !== note)));
      sampler.triggerRelease(note)
    }
    const piano = document.getElementById('piano-large')
    // I need to add eventlistener here because I need to set it to passive, so I can prevent default.
    piano.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      piano.removeEventListener('touchstart', handleTouchStart, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd);
    }
  }, [sampler, notes])
  return [...notes]
}

export default LargePiano