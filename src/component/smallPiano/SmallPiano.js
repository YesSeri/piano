import React, { useEffect, useState } from 'react'
import { smallKeys, translation } from './data'
const SmallPiano = ({ sampler }) => {
  const [clicked, setClicked] = useState('')
  const activeKeys = useActiveNoteHandler(sampler)
  console.log(activeKeys);

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
    <div id='piano-small' >
      <svg id='piano-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.196 32.279" preserveAspectRatio="none">
        {smallKeys.map(({ id, note, color, d }) => createPath(id, note, color, d))}
      </svg>
    </div>
  )
}
// This returns the pressed notes so the class active can get added to pressed keys. It also plays the notes.
const useActiveNoteHandler = (sampler) => {
  const [, setNotes] = useState([])
  const noteRef = React.useRef([])
  useEffect(() => {
    const handleKeyDown = ({ key, repeat }) => {
      const note = translation[key]
      if (!note || repeat || noteRef.current.includes(note)) return;
      // I have to do it like this. If I use usestate here instead of ref it will remove and add the eventlisteners every time i click. This means if I release two keys at the same time the eventlistener for one of them might get removed by releasing the other key, and the website wont register the release of the key. I only use setNotes to trigger a rerender, it doesn't actually get used for anything else. 
      noteRef.current = [...noteRef.current, note]
      setNotes(noteRef.current)
      sampler.triggerAttack(note)
    }
    const handleKeyUp = ({ key }) => {
      const note = translation[key]
      noteRef.current = noteRef.current.filter(k => k !== note)
      setNotes(noteRef.current)
      sampler.triggerRelease(note)
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [sampler])
  useEffect(() => {
    const handleTouchStart = (e) => {
      e.preventDefault()
      const { note } = e.target.dataset
      noteRef.current = [...noteRef.current, note]
      setNotes(noteRef.current);
      sampler.triggerAttack(note)
    }

    const handleTouchEnd = (e) => {
      e.preventDefault()
      const { note } = e.target.dataset
      noteRef.current = noteRef.current.filter(k => k !== note)
      setNotes(noteRef.current)
      sampler.triggerRelease(note)
    }
    const piano = document.getElementById('piano-small')
    // I need to add eventlistener here, instead of inline in element, because I need to set it to passive, so I can prevent default.
    piano.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      piano.removeEventListener('touchstart', handleTouchStart, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd);
    }
  }, [sampler])
  return noteRef.current
}

export default SmallPiano