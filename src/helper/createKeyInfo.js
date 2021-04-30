const keyOrder = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B',
]
export default function createKeyInfo(low, high) {
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

  let [lowNote, lowNumber] = low.split("")
  let idx = keyOrder.indexOf(lowNote);
  let whiteKeyInfo = []
  for (let i = 0; i < number; i++) {
    if (idx === 0 && i > 0) {
      lowNumber++
    }
    const hasNeighbour = blackRightNeighbour[keyOrder[idx]]
    whiteKeyInfo.push({ note: (keyOrder[idx] + lowNumber), hasNeighbour })
    idx = idx > 5 ? 0 : idx + 1
  }
  return whiteKeyInfo;
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