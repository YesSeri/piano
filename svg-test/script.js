// const order = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'B3', 'A3', 'G3', 'F3', 'E5', 'F5', 'E3', 'D3', 'C2', 'G5', 'A5','B5','B6']
// This function creates an SVG piano. It will recieve two values, one which is the name of the lowest key, and one that is the highest key. It will then calculate everything needed to create this piano from those two values.

const f = ((low = 'C4', high = 'G4') => {
    const keyOrder = [
        'C',
        'D',
        'E',
        'F',
        'G',
        'A',
        'B',
    ]
    const neighbourInfo = {
        C: { blackRight: true },
        D: { blackRight: true },
        E: { blackRight: false },
        F: { blackRight: true },
        G: { blackRight: true },
        A: { blackRight: true },
        B: { blackRight: false },
    }

    // create the svg element
    const amountWhiteKeys = numberOfWhiteKeys(low, high);
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let currentNoteKeyOrderIndex = keyOrder.indexOf(low.split('')[0])

    // <path stroke='black' stroke-width="0.2" fill='white' d="m 0 0 v 107 a 3 3 0 0 0 3 3 h 27 v -110 z " />
    // set width and height
    svg.setAttribute("viewBox", "-1 -1  340 190");

    // create a circle
    const firstKey = document.createElementNS("http://www.w3.org/2000/svg", "path");
    firstKey.setAttribute("d", "m 0 0 v 107 a 3 3 0 0 0 3 3 h 27 v -110 z");
    firstKey.classList.add('white-key', 'piano-key')
    // cir1.setAttribute("cy", "80");
    // cir1.setAttribute("r", "30");
    // cir1.setAttribute("fill", "red");

    // attach it to the container
    svg.appendChild(firstKey);

    // HERE COMES A FOR LOOP WHERE ALL OTHER KEYS GETS ADDED.
    let i;
    for (i = 1; i < amountWhiteKeys - 1; i++) {
        const whiteKey = createWhiteKey(`m ${i * 30} 0 v 110 h 30 v -110 z`)
        svg.appendChild(whiteKey);
    }

    let z;
    for (z = 1; z < amountWhiteKeys - 1; z++) {
        if (currentNoteKeyOrderIndex > keyOrder.length - 1) {
            currentNoteKeyOrderIndex = 0
        } else {
            currentNoteKeyOrderIndex++;
        }

        if (neighbourInfo[keyOrder[currentNoteKeyOrderIndex]].blackRight === true) {
            console.log(keyOrder[currentNoteKeyOrderIndex], 'has a black right neighbour key');
            const blackKey = createBlackKey(`m ${18} 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z`)
            svg.appendChild(blackKey);
        } else {
            console.log(keyOrder[currentNoteKeyOrderIndex], 'has a NO black right neighbour key');
        }
    }
    // <path stroke='black' stroke-width="0.2" fill='black'
    //     d="m 18 0 v 63 a 2 2 0 0 0 2 2 h 18 a 2 2 0 0 0 2 -2 v -63 z " />
    const lastKey = createWhiteKey(`m ${i * 30} 0 v 110 h 27 a 3 3 0 0 0 3 -3 v -107 z `)
    svg.appendChild(lastKey);
    // attach container to document
    document.getElementById("test-container").appendChild(svg);

    function createWhiteKey(attribute) {
        return createKey(attribute, 'white')
    }
    function createBlackKey(attribute) {
        return createKey(attribute, 'black')
    }
    function createKey(attribute, color) {
        const key = document.createElementNS("http://www.w3.org/2000/svg", "path");
        key.setAttribute("d", attribute);
        key.classList.add(`${color}-key`, 'piano-key')
        return key
    }
    function numberOfWhiteKeys(low, high) {
        let [lowNote, lowNumber] = low.split("")
        const [highNote, highNumber] = high.split("")
        const lowNoteValue = keyOrder.indexOf(lowNote)
        const highNoteValue = keyOrder.indexOf(highNote)
        const noteValue = highNoteValue - lowNoteValue + 1
        const octaveValue = highNumber - lowNumber;
        return octaveValue * 7 + noteValue;

    }
});
f();