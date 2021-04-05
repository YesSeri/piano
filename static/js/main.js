"use strict";
class PianoKey {
    constructor(translation, shortcut, audio, div, sharp) {
        this.translation = translation
        this.audio = audio
        this.div = div
        this.timer = null
        this.shortcut = shortcut
        this.pressed = false
        this.sharp = sharp
    }
    print() {
        console.log({ 'div': this.div.id }, { 'timer': this.timer }, { 'shortcut': this.shortcut }, { 'pressed': this.pressed }, { 'sharp': this.sharp })
    }
    playNote() {
        clearTimeout(this.timer)
        this.div.classList.add('active')
        this.audio.volume = 1
        this.audio.currentTime = 0
        this.audio.play();
    }
    stopNote() {
        this.div.classList.remove('active')
        this.audFade(this.audio)
    }
    audFade(audio) {
        if (audio.volume > 0) {
            const v = audio.volume - 0.05
            const newVol = v >= 0 ? v : 0
            audio.volume = newVol
            this.timer = setTimeout(() => this.audFade(audio), 15)
        }
    }
}

const audios = Array.from(document.getElementsByClassName('key-sound'));
const pianoKeyDivs = Array.from(document.getElementsByClassName('piano-key'));
// This is used to translate between id of key div and audio id
let translations = {};

for (const keyDiv of pianoKeyDivs) {
    const splitter = str => str.split('-').slice(1).join('-')
    const splitKeyId = splitter(keyDiv.id)
    for (const audio of audios) {
        const splitAudioId = splitter(audio.id)
        if (splitAudioId === splitKeyId) {
            translations[keyDiv.id] = audio.id
            break;
        }
    }
}

const pianoKeys = pianoKeyDivs.map(div => {
    const aud = audios.find(el => el.id === translations[div.id])
    const translation = { [div.id]: translations[div.id] }
    console.log(div.dataset.shortcut);
    return new PianoKey(translation, div.dataset.shortcut, aud, div, div.className.includes('sharp'))
    // if (div.id === 'key-c-low') {
    //     return createKey('a')
    // } else if (div.id === 'key-sharp-c') {
    //     return createKey('w')
    // } else if (div.id === 'key-d') {
    //     return createKey('s')
    // } else if (div.id === 'key-sharp-d') {
    //     return createKey('e')
    // } else if (div.id === 'key-e') {
    //     return createKey('d')
    // } else if (div.id === 'key-f') {
    //     return createKey('f')
    // } else if (div.id === 'key-sharp-f') {
    //     return createKey('t')
    // } else if (div.id === 'key-g') {
    //     return createKey('g')
    // } else if (div.id === 'key-sharp-g') {
    //     return createKey('y')
    // } else if (div.id === 'key-a') {
    //     return createKey('h')
    // } else if (div.id === 'key-sharp-a') {
    //     return createKey('u')
    // } else if (div.id === 'key-b') {
    //     return createKey('j')
    // } else if (div.id === 'key-c-high') {
    //     return createKey('k')
    // }
})

let lastClicked;
for (const pianoKey of pianoKeys) {
    const { div, sharp } = pianoKey
    if (!sharp) {
        div.addEventListener("mousedown", (e) => {
            const clickedKey = pianoKeys.find(el => el.div.id === e.target.id)
            clickedKey.playNote()
            console.log('down');
        })
        div.addEventListener("mouseup", (e) => {
            const clickedKey = pianoKeys.find(el => el.div.id === e.target.id)
            clickedKey.stopNote()
            console.log('up');
        })
    }
}

window.addEventListener("keydown", e => {
    // If you press one key, D for example while pressing F, if you release D, then F event will have repeat == false again. That is why we need the k.pressed variable.
    if (e.repeat) return
    // This finds the key pressed and then you can run a function on that key. 
    findCorrectKey(key => {
        if (key.pressed !== true) key.playNote()
        key.pressed = true
    }, e)
})

window.addEventListener("keyup", e => {
    findCorrectKey(key => {
        key.stopNote()
        key.pressed = false
    }, e)
})

// Finds the correct key in the pianoKeys array, and then you can run whatever function on that key.
function findCorrectKey(keyFn, event) {
    for (const key of pianoKeys) {
        if (event.key === key.shortcut) {
            keyFn(key)
        }
    }
}