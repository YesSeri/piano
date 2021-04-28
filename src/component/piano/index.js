import React from 'react'

const keyOrder = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B',
]

const Piano = ({ low, high }) => {
  const keys = createKeys(low, high)
  const whiteKeys = createWhiteKeys()
  const blackKeys = createBlackKeys()
  console.log(blackKeys);
  function createWhiteKeys() {
    return keys.map((key, i) => {
      if (i === 0) {
        return <path key={key.note} className="white-key piano-key" d={`m 0 0 v 107 a 3 3 0 0 0 3 3 h 27 v -110 z`}></path>
      } else if (i === keys.length - 1) {
        return <path key={key.note} className="white-key piano-key" d={`m ${i * 30} 0 v 110 h 27 a 3 3 0 0 0 3 -3 v -107 z `}></path>
      } else {
        return <path key={key.note} className="white-key piano-key" d={`m ${i * 30} 0 v 110 h 30 v -110 z`}></path>
      }
    })
  }
  function createBlackKeys() {
    return keys.map((key, i) => {
      if (i === keys.length - 1) {
        return null;
      }
      else if (key.hasNeighbour) {
        return <path key={key.note.substr(0, 1) + '#' + key.note.substr(1)} className="black-key piano-key" d={`m ${18 + 30 * i} 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z`}></path>
      }
      else {
        return null
      }
    })
  }
  return (
    <div style={{maxWidth: '500px'}}>
      A PIANO
      <svg version="1.1" baseProfile="full" viewBox={`-1 -1 ${keys.length * 30 + 2} 112`} xmlns="http://www.w3.org/2000/svg">
        {whiteKeys}
        {blackKeys}
      </svg>
    </div>
  )
}

function createKeys(low, high) {
  const number = numberOfWhiteKeys(low, high)
  const blackRightNeighbour = {
    C: true,
    D: true,
    E: false,
    F: true,
    G: true,
    A: true,
    B: false,
  }

  const [lowNote, lowNumber] = low.split("")
  let idx = keyOrder.indexOf(lowNote);
  let keys = []
  for (let i = 0; i < number; i++) {
    const hasNeighbour = blackRightNeighbour[keyOrder[idx]]
    keys.push({ note: (keyOrder[idx] + (parseInt(lowNumber) + parseInt(i / 7))), hasNeighbour })
    idx = idx > 5 ? 0 : idx + 1
  }
  return keys;
}

function numberOfWhiteKeys(low, high) {
  const [lowNote, lowNumber] = low.split("")
  const [highNote, highNumber] = high.split("")
  const lowNoteValue = keyOrder.indexOf(lowNote)
  const highNoteValue = keyOrder.indexOf(highNote)
  const noteValue = highNoteValue - lowNoteValue + 1
  const octaveValue = highNumber - lowNumber;
  return octaveValue * 7 + noteValue;
}
export default Piano
