"use strict";

// The PianoKey class contains every relevant information and thing to create a piano key and play it.
class PianoKey {
    constructor(shortcut, audio, div, sharp) {
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
    // Clears timeout to stop the fading out, and starts the sound from the beginning with max volume.
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
    // This function calls itself recursively every 15ms, to fade out the sound, instead of just shutting it off immedieatly. The base case is, volume is 0 or less, and when reached the function returns nothing.
    // It sounds very bad when the sound is not faded out. If the key gets pressed again while the recursive fading is in progress, 
    // the playNote function starts with removing the next recursive call, by clearing the timeout.
    audFade(audio) {
        if (audio.volume > 0) {
            const v = audio.volume - 0.05
            const newVol = v >= 0 ? v : 0
            audio.volume = newVol
            this.timer = setTimeout(() => this.audFade(audio), 15)
        }
    }
}

// Creates two arrays which will be used to create pianoKey objects that we will use in our piano. 
const audios = Array.from(document.getElementsByClassName('key-sound'));
const pianoKeyDivs = Array.from(document.getElementsByClassName('piano-key'));

// This is used to translate between id of key div and audio id. 
// This is only used when creating a pianoKey, because both the audio and the corresponding div gets added to the pianoKey object, so it will always be easy to find the corresponding one after that.

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
    return new PianoKey(div.dataset.shortcut, aud, div, div.className.includes('sharp'))
})

// When releasing mouse button we want to stop the last note played, not the one which the mouse is over when the button released. 
// If you move mouse after pressing key you could release pointer over a new key. It should still be the played key that gets stopped. 
let lastClicked;
for (const pianoKey of pianoKeys) {
    const { div, sharp } = pianoKey
    if (!sharp) {
        div.addEventListener("mousedown", (e) => {
            findKeyById((key) => {
                key.playNote()
                lastClicked = key;
            }, e)
        })

    }
}

window.addEventListener("mouseup", (e) => {
    // lastClicked is undefined, if no piano note has yet been clicked.
    if (!lastClicked) return
    lastClicked.stopNote()
})

window.addEventListener("DOMContentLoaded", e => {
    const pianoDiv = document.getElementById('piano')
    pianoDiv.addEventListener("touchstart", handleTouchStart, false);
    pianoDiv.addEventListener("touchend", handleTouchEnd, false);
    //pianoDiv.addEventListener("touchcancel", handleTouchCancel, false);
    //pianoDiv.addEventListener("touchmove", handleTouchMove, false);
})
function handleTouchStart(e){
    e.preventDefault();
    findKeyById((key) => {
        key.playNote()
    }, e)
}
function handleTouchEnd(e){
    e.preventDefault();
    findKeyById(key => {
        key.stopNote()
    }, e)
}
function handleTouchCancel(e){
}
function handleTouchMove(e){
}

window.addEventListener("keydown", e => {
    // If you press a key while holding down a different one the next event of the key that is hold down will have e.repeat = true. This is why we mus have a key.pressed variable.
    if (e.repeat) return
    // This finds the key pressed and then you can run a function on that key. We also need to send along the event.
    findKeyByShortcut(key => {
        if (key.pressed !== true) key.playNote()
        key.pressed = true
    }, e)
})

window.addEventListener("keyup", e => {
    findKeyByShortcut(key => {
        key.stopNote()
        key.pressed = false
    }, e)
})

// Finds the correct key in the pianoKeys array, and then a function is run on that key.
function findKeyByShortcut(fn, event) {
    for (const key of pianoKeys) {
        findKeyByCond(fn, event.key === key.shortcut, key)
    }
}

function findKeyById(fn, event) {
    for (const key of pianoKeys) {
        findKeyByCond(fn, event.target.id === key.div.id, key)
    }
}

const findKeyByCond = (fn, cond, key) => {
    if (cond) fn(key)
}
