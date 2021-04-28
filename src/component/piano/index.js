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
  const number = numberOfWhiteKeys(low, high)
  console.log({ low, high, number });
  const keys = createKeys(low, number)
  return (
    <div>
      A PIANO
      <svg version="1.1" baseProfile="full" viewBox="-1 -1 132 52" xmlns="http://www.w3.org/2000/svg">
        <path stroke='black' strokeWidth="0.2" fill='white' d="m 60 0 v 110 h 27 a 3 3 0 0 0 3 -3 v -107 z " />
        <path stroke='black' strokeWidth="0.2" fill='black'
          d="m 18 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z " />
      </svg>
    </div>
  )
}

function createKeys(low, number) {
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
  console.log(keys);

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
