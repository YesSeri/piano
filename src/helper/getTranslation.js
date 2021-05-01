class KeyNotePair {
    constructor(keycode, note) {
        this.keycode = keycode;
        this.note = note;
    }
}

// Needs to be in this order to work.
const translation = [
    new KeyNotePair('KeyZ', 'G1'),
    new KeyNotePair('KeyS', 'G#1'),
    new KeyNotePair('KeyX', 'A1'),
    new KeyNotePair('KeyD', 'A#1'),
    new KeyNotePair('KeyC', 'B1'),
    new KeyNotePair('KeyV', 'C2'),
    new KeyNotePair('KeyG', 'C#2'),
    new KeyNotePair('KeyB', 'D2'),
    new KeyNotePair('KeyH', 'D#2'),
    new KeyNotePair('KeyN', 'E2'),
    new KeyNotePair('KeyM', 'F2'),
    new KeyNotePair('KeyK', 'F#2'),
    new KeyNotePair('Comma', 'G2'),
    new KeyNotePair('KeyL', 'G#2'),
    new KeyNotePair('Period', 'A2'),
    new KeyNotePair('Semicolon', 'A#2'),
    new KeyNotePair('Slash', 'B2'),
    new KeyNotePair('KeyQ', 'C3'),
    new KeyNotePair('Digit2', 'C#3'),
    new KeyNotePair('KeyW', 'D3'),
    new KeyNotePair('Digit3', 'D#3'),
    new KeyNotePair('KeyE', 'E3'),
    new KeyNotePair('KeyR', 'F3'),
    new KeyNotePair('Digit5', 'F#3'),
    new KeyNotePair('KeyT', 'G3'),
    new KeyNotePair('Digit6', 'G#3'),
    new KeyNotePair('KeyY', 'A3'),
    new KeyNotePair('Digit7', 'A#3'),
    new KeyNotePair('KeyU', 'B3'),
    new KeyNotePair('KeyI', 'C4'),
    new KeyNotePair('Digit9', 'C#4'),
    new KeyNotePair('KeyO', 'D4'),
    new KeyNotePair('Digit0', 'D#4'),
    new KeyNotePair('KeyP', 'E4'),
    new KeyNotePair('BracketLeft', 'F4'),
    new KeyNotePair('Equal', 'F#4'),
    new KeyNotePair('BracketRight', 'G4'),
]

export default function getTranslation(high, low) {
    let lowIdx;
    for (let i = 0; i < translation.length; i++) {
        if (translation[i].note === low) {
            lowIdx = i
        }
        if (translation[i].note === high) {
            return translation.slice(lowIdx, i + 1)
        }
    }
}