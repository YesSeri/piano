import React, { useEffect, useState } from 'react';
import getTranslation  from './getTranslation'

// This returns the pressed notes so the class active can get added to pressed keys. It also plays the notes.
const useActiveNoteHandler = (sampler, low, high, loading) => {
  const [, setNotes] = useState([])
  const noteRef = React.useRef([])
  const touchRef = React.useRef([])
  const translation = getTranslation(low, high)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // This is to disable the quickfind on firefox
      if (e.code === 'Slash') {
        e.preventDefault();
      }
      const keyNotePair = translation.find(el => el.keycode === e.code)
      if (keyNotePair === undefined) return
      const note = keyNotePair.note;
      if (!note || e.repeat || noteRef.current.includes(note)) return;
      // I have to do it like this. If I use usestate here instead of ref it will remove and add the eventlisteners every time i click. This means if I release two keys at the same time the eventlistener for one of them might get removed by releasing the other key, and the website wont register the release of the key. I only use setNotes to trigger a rerender, it doesn't actually get used for anything else. 
      noteRef.current = [...noteRef.current, note]
      setNotes(noteRef.current)
      sampler.triggerAttack(note)
    }
    const handleKeyUp = (e) => {
      const keyNotePair = translation.find(el => el.keycode === e.code)
      if (keyNotePair === undefined) return
      const note = keyNotePair.note;
      noteRef.current = noteRef.current.filter(k => k !== note)
      setNotes(noteRef.current)
      sampler.triggerRelease(note)
    }
    if (!loading) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [sampler, translation, loading])
  useEffect(() => {
    function touchNoteInfo({ identifier }, note) {
      return { note, identifier }
    }
    function getPointTouch(changedTouch) {
      const x = changedTouch.clientX
      const y = changedTouch.clientY
      return { x, y }
    }
    const handleTouchStart = (e) => {
      e.preventDefault()
      const { note } = e.target.dataset
      const touchInfo = touchNoteInfo(e.changedTouches[0], note)
      touchRef.current = [...touchRef.current, touchInfo]
      setNotes(touchRef.current);
      if (note == null) return
      sampler.triggerAttack(note)
    }

    const handleTouchEnd = (e) => {
      // Prevent default stops the clicking of buttons, like keybinding and enter fullscreen. If noteRef is larger than 0 I am currently clicking piano buttons, and then I want to stop default.
      if (touchRef.current.length > 0) {
        e.preventDefault()
      }
      for (const changedTouch of e.changedTouches) {
        const dataset = getDataset(changedTouch)
        if (dataset === undefined) return;
        const note = touchNoteInfo(changedTouch, dataset.note)
        touchRef.current = touchRef.current.filter(k => k.note !== note.note)
        setNotes(...touchRef.current)
        sampler.triggerRelease(note.note)

      }
    }
    // Handlemove in a similar vein to this https://developer.mozilla.org/en-US/docs/Web/API/Touch_events under handleMove
    const getDataset = (changedTouch) => {
      const { x, y } = getPointTouch(changedTouch)
      const dataset = document.elementFromPoint(x, y)?.dataset
      return dataset
    }
    const handleTouchMove = (e) => {
      for (const changedTouch of e.changedTouches) {
        const dataset = getDataset(changedTouch)
        if (dataset === undefined) return;
        const note = touchNoteInfo(changedTouch, dataset.note)
        const prevNote = touchRef.current.find(el => el.identifier === note.identifier) || { note: undefined, identifier: note.identifier };
        if (note.note !== prevNote.note) {
          touchRef.current = touchRef.current.filter(k => k.note !== prevNote.note)
          touchRef.current = [...touchRef.current, note]
          if (note.note != null) {
            sampler.triggerAttack(note.note)
          }
          if (prevNote.note != null) {
            sampler.triggerRelease(prevNote.note)
          }
          setNotes(touchRef.current)
        }
      }
    }

    const piano = document.getElementById('pianoSvg');
    // I need to add eventlistener here, instead of inline in element, because I need to set it to passive, so I can prevent default.
    if (!loading) {
      piano.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    return () => {
      piano.removeEventListener('touchstart', handleTouchStart, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove, { passive: false });
    }
  }, [sampler, loading])
  return [...touchRef.current.map(t => t.note), ...noteRef.current]
}
export default useActiveNoteHandler;