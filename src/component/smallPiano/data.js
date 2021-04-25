class KeyInfo {
    constructor(id, note, color, d) {
        this.id = id;
        this.note = note;
        this.color = color;
        this.d = d;
    }
}

export const smallKeys = [
    new KeyInfo('c2-small', 'C2', 'white', "M10.848.265v31.75H1.323a1.056 1.056 0 01-1.058-1.059V.265h10.583z"),
    new KeyInfo('d2-small', 'D2', 'white', "M10.848.265h10.583v31.75H10.848z"),
    new KeyInfo('e2-small', 'E2', 'white', "M21.431.265h10.583v31.75H21.431z"),
    new KeyInfo('f2-small', 'F2', 'white', "M32.015.265h10.583v31.75H32.015z"),
    new KeyInfo('g2-small', 'G2', 'white', "M42.598.265h10.583v31.75H42.598z"),
    new KeyInfo('a2-small', 'A2', 'white', "M53.181.265h10.583v31.75H53.181z"),
    new KeyInfo('b2-small', 'B2', 'white', "M63.765.265h10.583v31.75H63.765z"),
    new KeyInfo('c3-small', 'C3', 'white', "M74.348.265v31.75h9.525c.586 0 1.058-.472 1.058-1.059V.265H74.348z"),
    new KeyInfo('cs2-small', 'C#2', 'black', "M15.081.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),
    new KeyInfo('ds2-small', 'D#2', 'black', "M25.665.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),
    new KeyInfo('fs2-small', 'F#2', 'black', "M46.831.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),
    new KeyInfo('gs2-small', 'G#2', 'black', "M57.415.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),
    new KeyInfo('as2-small', 'A#2', 'black', "M67.998.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.587 0-1.059-.44-1.059-.988V.265z"),
]

export const translation = {
    'q': 'C2',
    'w': 'D2',
    'e': 'E2',
    'r': 'F2',
    't': 'G2',
    'y': 'A2',
    'u': 'B2',
    'i': 'C3',
    '2': 'C#2',
    '3': 'D#2',
    '5': 'F#2',
    '6': 'G#2',
    '7': 'A#2',
}