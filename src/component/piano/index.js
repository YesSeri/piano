import React, { useEffect } from 'react'
import { useActiveNoteHandler, useMouseClicker, createKeyInfo, getTranslation } from '../../helper';

const Piano = ({ sampler, options: { low, high, showKeyNames } }) => {
  const [clicked, released] = useMouseClicker();
  const activeKeys = useActiveNoteHandler(sampler, low, high)
  const whiteKeyInfo = createKeyInfo(low, high)
  const translation = getTranslation(low, high);
  // The path is created here, if it is the first or last white key the left respectively the right corner should be rounded.

  useEffect(() => {
    if (clicked == null) return
    sampler.triggerAttack(clicked)
  }, [sampler, clicked])
  useEffect(() => {
    if (released == null) return
    sampler.triggerRelease(released)
  }, [sampler, released])


  function createWhiteKeys() {
    return whiteKeyInfo.map((key, i) => {
      const id = key.note.toLowerCase()
      const x = i * 30
      if (i === 0) {
        return createKeyPath(id, key.note, 'white', `m ${x} 0 v 107 a 3 3 0 0 0 3 3 h 27 v -110 z`, x)
      } else if (i === whiteKeyInfo.length - 1) {
        return createKeyPath(id, key.note, 'white', `m ${x} 0 v 110 h 27 a 3 3 0 0 0 3 -3 v -107 z `, x)
      } else {
        return createKeyPath(id, key.note, 'white', `m ${x} 0 v 110 h 30 v -110 z`, x)
      }
    })
  }
  function createKeyPath(id, note, color, d, x) {
    const noteTranslation = translation.find(el => el.note === note)
    return <g key={id}>
      <path
        id={id}
        data-note={note}
        className={`${color}-key piano-key ${activeKeys.includes(note) || clicked === note ? 'active' : ''}`}
        d={d}
        onContextMenu={(e) => e.preventDefault()}
      />
      {
        showKeyNames ?
          createText(noteTranslation, x, color)
          :
          null
      }
    </g>
  }
  function createText(noteTranslation, x, color) {
    return (
      color === 'white' ?
        <>
          <text x={x + 13} y='90' className="svg-white-note-text">{noteTranslation.note.slice(0, 1)}</text>
          <text x={x + 13} y='100' className="svg-white-translation-text">{noteTranslation.key}</text>
        </>
        :
        <>
          <text x={x + 7} y='50' className='svg-black-note-text'>{noteTranslation.note.slice(0, 2)}</text>
          <text x={x + 9} y='60' className='svg-black-translation-text'>{noteTranslation.key}</text>
        </>
    )

  }
  // Maps through all the white keys. If the white key should have a neighbour it creates a black key, unless it is the last white key. If it shouldnt have a neighbour it returns null.
  function createBlackKeys() {
    return whiteKeyInfo.map((key, i) => {
      const id = (key.note.substr(0, 1) + 's' + key.note.substr(1)).toLowerCase()
      const note = key.note.substr(0, 1) + '#' + key.note.substr(1)
      const x = 18 + 30 * i
      if (i === whiteKeyInfo.length - 1) {
        return null;
      }
      else if (key.hasNeighbour) {
        return createKeyPath(id, note, 'black', `m ${x} 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z`, x)
      }
      else {
        return null
      }
    })
  }
  return (
    <svg version="1.1" baseProfile="full" className="piano" viewBox={`-1 -1 ${whiteKeyInfo.length * 30 + 2} 112`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {createWhiteKeys()}
      {createBlackKeys()}
    </svg>
  )
}

// This creates an array with all white keys, also containing info if the key has a black key next to it.

export default Piano
