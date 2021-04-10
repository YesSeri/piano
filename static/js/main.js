"use strict";
// The PianoKey class contains every relevant information and thing to create a piano key and play it.

import * as Tone from 'tone'
const c2 = require('../audio/C2.ogg');
const ds2 = require('../audio/Ds2.ogg');
const fs2 = require('../audio/Fs2.ogg');
const a2 = require('../audio/A2.ogg');
const c3 = require('../audio/C3.ogg');
const sampler = new Tone.Sampler({
    urls: {
        C2: c2,
        "D#2": ds2,
        "F#2": fs2,
        A2: a2,
        C3: c3,
    },
    release: 1,
    baseUrl: ""
}).toDestination();
class PianoKey {
    constructor(note, shortcut, polygon) {
        this.note = note
        this.shortcut = shortcut
        this.polygon = polygon
        this.pressed = false
    }
    print() {
        console.log({ 'note': this.note }, { 'shortcut': this.shortcut }, { 'polygon': this.polygon }, { 'pressed': this.pressed })
    }
    // Clears timeout to stop the fading out, and starts the sound from the beginning with max volume.
    playNote() {
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
    new PianoKey("D#2", "e", document.querySelector('.ds2')),
    new PianoKey("F#2", "t", document.querySelector('.fs2')),
    new PianoKey("G#2", "y", document.querySelector('.gs2')),
    new PianoKey("A#2", "u", document.querySelector('.as2')),
]

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
    const matchingKey = findMatchingKey(polygon)
    polygon.addEventListener("touchstart", () => {
        matchingKey.playNote();
        lastClicked = matchingKey
    }, false);
    polygon.addEventListener("touchend", () => {
        if (lastClicked !== null) {
            lastClicked.stopNote()
        }
    }, false);
    polygon.addEventListener('mousedown', (evt) => {
        matchingKey.playNote();
        lastClicked = matchingKey
    })
    polygon.addEventListener('mouseup', () => {
        if (lastClicked !== null) {
            lastClicked.stopNote()
        }
    })
}
function findMatchingKey(polygon) {
    for (const key of pianoKeys) {
        if (polygon.dataset.note === key.note) {
            return key
        }
    }
}
// function startup() {
//     const piano = document.getElementById("canvas");
//     el.addEventListener("touchend", handleEnd, false);
//     el.addEventListener("touchcancel", handleCancel, false);
//     el.addEventListener("touchmove", handleMove, false);
// }

// document.addEventListener("DOMContentLoaded", startup);

const kbBtn = document.getElementById('keybindings-btn')
const kbDiv = document.getElementById('keybindings-div')

kbBtn.addEventListener('click', () => {
    kbBtn.classList.toggle('clicked')
    kbDiv.classList.toggle('hidden')
})