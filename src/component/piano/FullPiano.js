import React from 'react'
import Piano from './keys'
import { useActiveNoteHandler, useMouseClicker, createKeyInfo, getTranslation } from '../../helper';

const FullPiano = ({ options: { high, low }, ...restProps }) => {
  const whiteKeys = createWhiteKeys();
  const blackKeys = createBlackKeys();
  console.log({ whiteKeys, blackKeys });
  function createWhiteKeys() {
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
  function createBlackKeys() {
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
  function handleClick(e){
    e.target.classList.add('active')
  }
  return (
    <Piano {...restProps}>
      <Piano.Svg width={whiteKeys.length * 30}>
        {whiteKeys.map((key) => (
          <Piano.WhiteKey 
            d={key.d}
            key={key.note}
          />
        ))}
        {blackKeys.map((key) => (
          <Piano.BlackKey 
            d={key.d}
            key={key.note}
            onClick={handleClick}
          />
        ))}

      </Piano.Svg>
    </Piano>
  )
}

export default FullPiano
