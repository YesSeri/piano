"use strict";
// The PianoKey class contains every relevant information and thing to create a piano key and play it.

import * as Tone from 'tone'
const testBtn = document.getElementById('test-btn')
const osc = new Tone.Oscillator(440, "sine").toDestination()

testBtn.addEventListener('mousedown', () => {
    sampler.triggerAttack(note)
    console.log('click')
})

testBtn.addEventListener('mouseup', () => {
    console.log('rel')
})
const sampler = new Tone.Sampler({
    urls: {
        C2: "C2.ogg",
        "D#2": "Ds2.ogg",
        "F#2": "Fs2.ogg",
        A2: "A2.ogg",
        C3: "C3.ogg",
    },
    release: 1,
    baseUrl: "http://localhost:3000/audio/"
}).toDestination();
class PianoKey {
    constructor(note, shortcut, polygon=null) {
        this.pressed = false
        this.note = note
        this.shortcut = shortcut
        this.polygon = polygon
    }
    print() {
        // console.log({ 'timer': this.timer }, { 'shortcut': this.shortcut }, { 'pressed': this.pressed }, { 'sharp': this.sharp })
    }
    // Clears timeout to stop the fading out, and starts the sound from the beginning with max volume.
    playNote() {
        console.log(this);
        this.pressed = true;
        this.polygon.classList.add('active')
        sampler.triggerAttack(this.note)
    }
    stopNote() {
        this.pressed = false;
        this.polygon.classList.remove('active')
        sampler.triggerRelease(this.note)
    }
}

// Creates two arrays which will be used to create pianoKey objects that we will use in our piano. 

const pianoKeys = [
    new PianoKey('C2', "a", document.querySelector('.c2')),
    new PianoKey('D2', "s", document.querySelector('.d2')),
    new PianoKey('E2', "d", document.querySelector('.e2')),
    new PianoKey('F2', "f", document.querySelector('.f2')),
    new PianoKey('G2', "g", document.querySelector('.g2')),
    new PianoKey('A2', "h", document.querySelector('.a2')),
    new PianoKey('B2', "j", document.querySelector('.b2')),
    new PianoKey('C3', "k", document.querySelector('.c3')),
    new PianoKey("C#2", "w", document.querySelector('.cs2')),
    new PianoKey("D#2", "e" ,document.querySelector('.ds2')),
    new PianoKey("F#2", "t" ,document.querySelector('.fs2')),
    new PianoKey("G#2", "y" ,document.querySelector('.gs2')),
    new PianoKey("A#2", "u" ,document.querySelector('.as2')),
]
console.log(pianoKeys);

document.addEventListener('keydown', (evt) => {
    if (evt.repeat === true) return
    for (const k of pianoKeys) {
        if (evt.key === k.shortcut) {
            if (k.pressed) return
            k.playNote()
            return
        }
    }
})
document.addEventListener('keyup', (evt) => {
    for (const k of pianoKeys) {
        if (evt.key === k.shortcut) {
            k.stopNote()
            return
        }
    }
})

let lastClicked = null;
const pianoPolygons = document.getElementsByClassName('piano-key')
for (const polygon of pianoPolygons) {
    let matchingKey;
    for (const key of pianoKeys) {
        if (polygon.dataset.note === key.note) {
            matchingKey = key
        }
    }
    polygon.addEventListener('mousedown', () => {
        matchingKey.playNote();
        lastClicked = matchingKey
    })
    polygon.addEventListener('mouseup', () => {
        if (lastClicked !== null) {
            lastClicked.stopNote()
        }
    })
}


const kbBtn = document.getElementById('keybindings-btn')
const kbDiv = document.getElementById('keybindings-div')
kbBtn.addEventListener('click', () => {
    kbDiv.classList.toggle('hidden')
})