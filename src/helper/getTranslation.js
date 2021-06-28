class KeyNotePair {
    constructor(keycode, note, key) {
        this.keycode = keycode;
        this.note = note;
        this.key = key;
    }
}

// Needs to be in this order to work.
const translation = [
    new KeyNotePair('KeyZ', 'G1', 'z'),
    new KeyNotePair('KeyS', 'G#1', 's'),
    new KeyNotePair('KeyX', 'A1', 'x'),
    new KeyNotePair('KeyD', 'A#1', 'd'),
    new KeyNotePair('KeyC', 'B1', 'c'),
    new KeyNotePair('KeyV', 'C2', 'v'),
    new KeyNotePair('KeyG', 'C#2', 'g'),
    new KeyNotePair('KeyB', 'D2', 'b'),
    new KeyNotePair('KeyH', 'D#2', 'h'),
    new KeyNotePair('KeyN', 'E2', 'n'),
    new KeyNotePair('KeyM', 'F2', 'm'),
    new KeyNotePair('KeyK', 'F#2', 'k'),
    new KeyNotePair('Comma', 'G2', ','),
    new KeyNotePair('KeyL', 'G#2', 'l'),
    new KeyNotePair('Period', 'A2', '.'),
    new KeyNotePair('Semicolon', 'A#2', ';'),
    new KeyNotePair('Slash', 'B2', '/'),
    new KeyNotePair('KeyQ', 'C3', 'q'),
    new KeyNotePair('Digit2', 'C#3', '2'),
    new KeyNotePair('KeyW', 'D3', 'w'),
    new KeyNotePair('Digit3', 'D#3', '3'),
    new KeyNotePair('KeyE', 'E3', 'e'),
    new KeyNotePair('KeyR', 'F3', 'r'),
    new KeyNotePair('Digit5', 'F#3', '5'),
    new KeyNotePair('KeyT', 'G3', 't'),
    new KeyNotePair('Digit6', 'G#3', '6'),
    new KeyNotePair('KeyY', 'A3', 'y'),
    new KeyNotePair('Digit7', 'A#3', '7'),
    new KeyNotePair('KeyU', 'B3', 'u'),
    new KeyNotePair('KeyI', 'C4', 'i'),
    new KeyNotePair('Digit9', 'C#4', '9'),
    new KeyNotePair('KeyO', 'D4', 'o'),
    new KeyNotePair('Digit0', 'D#4', '0'),
    new KeyNotePair('KeyP', 'E4', 'p'),
    new KeyNotePair('BracketLeft', 'F4', '['),
    new KeyNotePair('Equal', 'F#4', '='),
    new KeyNotePair('BracketRight', 'G4', ']'),
]

export default function getTranslation(low, high) {
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