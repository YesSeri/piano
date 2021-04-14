"use strict";
// The PianoKey class contains every relevant information and thing to create a piano key and play it.
// The awesome library tone.js is imported in index.html script.
const c2 = require('../assets/audio/C2.ogg');
const ds2 = require('../assets/audio/Ds2.ogg');
const fs2 = require('../assets/audio/Fs2.ogg');
const a2 = require('../assets/audio/A2.ogg');
const c3 = require('../assets/audio/C3.ogg');
const sampler = new Tone.Sampler({
    urls: {
        "C2": c2,
        "D#2": ds2,
        "F#2": fs2,
        "A2": a2,
        "C3": c3,
    },
    release: 1,
    baseUrl: ""
}).toDestination();
class PianoKey {
    constructor(note, shortcut, rects) {
        this.note = note
        this.shortcut = shortcut
        this.rects = rects
        this.pressed = false
    }
    print() {
        console.log({ 'note': this.note }, { 'shortcut': this.shortcut }, { 'rects': this.rects }, { 'pressed': this.pressed })
    }
    // Clears timeout to stop the fading out, and starts the sound from the beginning with max volume.
    playNote() {
        this.pressed = true;
        this.rects.classList.add('active')
        sampler.triggerAttack(this.note)
    }
    stopNote() {
        this.pressed = false;
        this.rects.classList.remove('active')
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
window.addEventListener("load", startEventListeners);
function startEventListeners() {
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
    const pianoRects = document.getElementsByClassName('piano-key')
    for (const rects of pianoRects) {
        const matchingKey = findMatchingKey(rects)
        rects.addEventListener("touchstart", (evt) => {
            if (evt.cancelable) {
                evt.preventDefault();
            }
            evt.stopPropagation();
            matchingKey.playNote();
        });
        // This solution is not perfect. If I slide my finger outside the piano container the sound will stop but the 
        rects.addEventListener("touchend", (evt) => {
            if (evt.cancelable) {
                evt.preventDefault();
            }
            evt.stopPropagation();
            matchingKey.stopNote();
        });
        rects.addEventListener('mousedown', (evt) => {
            matchingKey.playNote();
            lastClicked = matchingKey
        })
        rects.addEventListener('mouseup', (evt) => {
            if (lastClicked !== null) {
                lastClicked.stopNote()
            }
        })
    }
    const fsBtn = document.createElement("BUTTON")
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const innerContainer = document.getElementById('inner-container')
        fsBtn.innerText = "Fullscreen"
        innerContainer.appendChild(fsBtn)
        console.log("Fullscreen button added, because you are using a mobile device.");
    } else {
        console.log("Fullscreen has not been added, because you are not using a mobile device.");
    }
    fsBtn.addEventListener('click', () => {
        const pianoContainer = document.getElementById('piano-container')
        if (pianoContainer.requestFullscreen) {
            pianoContainer.requestFullscreen();
        } else if (pianoContainer.webkitRequestFullscreen) { /* Safari */
            pianoContainer.webkitRequestFullscreen();
        } else if (pianoContainer.msRequestFullscreen) { /* IE11 */
            pianoContainer.msRequestFullscreen();
        }
    })
    document.addEventListener('fullscreenchange', () => {
        const { classList } = document.getElementById('piano-svg')
        if (classList.contains('fullscreen-svg')) {
            classList.remove('fullscreen-svg')
        } else {
            classList.add('fullscreen-svg')
        }
    }, false);
    setTimeout(() => {
        const pianoContainer = document.getElementById('piano-container')
        const loadingDiv = document.getElementById('loading-div')
        loadingDiv.classList.add('hidden')
        pianoContainer.classList.remove('piano-hidden')
    }, 300)

}




function findMatchingKey(rects) {
    for (const key of pianoKeys) {
        if (rects.dataset.note === key.note) {
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