const keyOrder = [
	'C',
	'D',
	'E',
	'F',
	'G',
	'A',
	'B',
]
// Returns an array of objects with this structure [{ "note": "D2", "hasNeighbour": true } ,{ "note": "E2", "hasNeighbour": false } ]
// E and B never has neighbours. The right most white key never has a neighbour, no matter what note.
// Low and high are key names like this: G2. G is note name, 2 is octave name.

export default function createKeyInfo(low, high) {
	const numberOfWhiteKeys = getNumberOfWhiteKeys(low, high)
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
	// Do once for every white key. Creates an array with the structure described above. 
	for (let i = 0; i < numberOfWhiteKeys; i++) {
		if (idx === 0 && i > 0) {
			lowNumber++
		}
		// The right most key on the visible keyboard never has a black neighbouring key
		const hasNeighbour = i === numberOfWhiteKeys - 1 ? false : blackRightNeighbour[keyOrder[idx]]
		whiteKeyInfo.push({ note: (keyOrder[idx] + lowNumber), hasNeighbour })
		idx = idx > 5 ? 0 : idx + 1
	}
	return whiteKeyInfo;
}

function getNumberOfWhiteKeys(low, high) {
	const [lowNote, lowNumber] = low.split("")
	const [highNote, highNumber] = high.split("")
	const lowNoteValue = keyOrder.indexOf(lowNote)
	const highNoteValue = keyOrder.indexOf(highNote)
	// From C to E lowNoteVal is 0 high is 2. There are however three keys, that is why + 1.
	// From A2 to C3 the lowNoteVal is 5 highNoteVal is 0 => -4. octaveValue is 1.
	// Return value will be octVal * 7 - 4, because seven keys cover the octave => 3
	const noteValue = 1 + highNoteValue - lowNoteValue 
	const octaveValue = highNumber - lowNumber;
	console.log({lowNoteValue, highNoteValue, noteValue, octaveValue})
	return octaveValue * 7 + noteValue;
}