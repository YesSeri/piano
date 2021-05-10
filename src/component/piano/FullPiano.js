import React, { useEffect } from 'react'
import Piano from './keys'
import { useActiveNoteHandler, useMouseClicker, createKeyInfo, getTranslation } from '../../helper';

const FullPiano = ({ options: { low, high, showKeyNames }, sampler, ...restProps }) => {
  const whiteKeys = createWhiteKeys(low, high);
  const blackKeys = createBlackKeys(whiteKeys, low, high);
  // Gives all touched or keyboard pressed keys.
  const activeKeys = useActiveNoteHandler(sampler, low, high)
  // Name of all mouse clicked notes.
  const [clicked] = useMouseClicker(sampler);
  // This array contains the names of all clicked, touched and keyboard pressed notes.
  const allActive = [clicked, ...activeKeys]

  return (
    <Piano {...restProps}>
      <Piano.Svg width={whiteKeys.length * 30}>
        {whiteKeys.map((key) => (
          <Piano.WhiteKey
            data-note={key.note}
            d={key.d}
            key={key.note}
            className={allActive.includes(key.note) ? 'active' : null}
          />
        ))}
        {blackKeys.map((key) => (
          <Piano.BlackKey
            data-note={key.note}
            d={key.d}
            key={key.note}
            className={allActive.includes(key.note) ? 'active' : null}
          />
        ))}

      </Piano.Svg>
      {showKeyNames && <div>SHOWING TEXT</div>}
    </Piano>
  )
}
function createWhiteKeys(low, high) {
  const whiteKeyInfo = createKeyInfo(low, high)
  return whiteKeyInfo.map((key, i) => {
    // const id = key.note.toLowerCase()
    const x = i * 30
    if (i === 0) {
      return { hasNeighbour: key.hasNeighbour, note: key.note, color: 'white', d: `m 0 0 v 107 a 3 3 0 0 0 3 3 h 27 v -110 z`, x }
      // Last key never has a neighbour.
    } else if (i === whiteKeyInfo.length - 1) {
      return { hasNeighbour: false, note: key.note, color: 'white', d: `m ${x} 0 v 110 h 27 a 3 3 0 0 0 3 -3 v -107 z `, x }
    } else {
      return { hasNeighbour: key.hasNeighbour, note: key.note, color: 'white', d: `m ${x} 0 v 110 h 30 v -110 z`, x }
    }
  })
}
function createBlackKeys(whiteKeys, low, high) {
  return whiteKeys.map((key, i) => {
    // const id = (key.note.substr(0, 1) + 's' + key.note.substr(1)).toLowerCase()
    const note = key.note.substr(0, 1) + '#' + key.note.substr(1)
    const x = 18 + 30 * i
    if (key.hasNeighbour) {
      return { note, color: 'white', d: `m ${x} 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z`, x }
      // return createKeyPath(id, note, 'black', `m ${x} 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z`, x)
    }
    else {
      return null
    }
  }).filter(el => el !== null)
}
export default FullPiano
