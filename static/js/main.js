"use strict";

// The PianoKey class contains every relevant information and thing to create a piano key and play it.
// The awesome library tone.js is imported in index.html script.
const { c4, ds4, fs4, a4, c5 } = require('../assets/audio/');
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
    playNote(sampler) {
        this.pressed = true;
        this.rects.classList.add('active')
        sampler.triggerAttack(this.note)
    }
    stopNote(sampler) {
        this.pressed = false;
        this.rects.classList.remove('active')
        sampler.triggerRelease(this.note)
    }
}

const pianoKeys = [
    new PianoKey('C2', "a", document.getElementById('c2')),
    new PianoKey('D2', "s", document.getElementById('d2')),
    new PianoKey('E2', "d", document.getElementById('e2')),
    new PianoKey('F2', "f", document.getElementById('f2')),
    new PianoKey('G2', "g", document.getElementById('g2')),
    new PianoKey('A2', "h", document.getElementById('a2')),
    new PianoKey('B2', "j", document.getElementById('b2')),
    new PianoKey('C3', "k", document.getElementById('c3')),
    new PianoKey("C#2", "w", document.getElementById('cs2')),
    new PianoKey("D#2", "e", document.getElementById('ds2')),
    new PianoKey("F#2", "t", document.getElementById('fs2')),
    new PianoKey("G#2", "y", document.getElementById('gs2')),
    new PianoKey("A#2", "u", document.getElementById('as2')),
]

const overlay = document.getElementById('activate-piano-overlay')
overlay.addEventListener('click', () => {
    overlay.remove();
    const script = document.createElement('script');
    script.onload = () => {
        const sampler = new Tone.Sampler({
            urls: {
                "C2": c4,
                "D#2": ds4,
                "F#2": fs4,
                "A2": a4,
                "C3": c5,
            },
            release: 1,
            baseUrl: ""
        }).toDestination();

        // I wait with initiating eventlisterners until everything is loaded, including the sound library ToneJS. 
        startEventListeners();
        function startEventListeners() {
            document.addEventListener('keydown', (evt) => {
                if (evt.repeat === true) return
                for (const k of pianoKeys) {
                    if (evt.key === k.shortcut) {
                        if (k.pressed) return
                        k.playNote(sampler)
                        return
                    }
                }
            })
            document.addEventListener('keyup', (evt) => {
                for (const k of pianoKeys) {
                    if (evt.key === k.shortcut) {
                        k.stopNote(sampler)
                        return
                    }
                }
            })

            let lastClicked = null;
            const pianoRects = document.querySelectorAll('#piano-svg > .piano-key')
            for (const rects of pianoRects) {
                const matchingKey = findMatchingKey(rects)
                rects.addEventListener("touchstart", (evt) => {
                    if (evt.cancelable) {
                        evt.preventDefault();
                    }
                    evt.stopPropagation();
                    matchingKey.playNote(sampler);
                });
                // This solution is not perfect. I can't slid my finger along the keyboard to play a lot of notes.
                rects.addEventListener("touchend", (evt) => {
                    if (evt.cancelable) {
                        evt.preventDefault();
                    }
                    evt.stopPropagation();
                    matchingKey.stopNote(sampler);
                });
                rects.addEventListener('mousedown', (evt) => {
                    matchingKey.playNote(sampler);
                    lastClicked = matchingKey
                })
                rects.addEventListener('mouseup', (evt) => {
                    if (lastClicked !== null) {
                        lastClicked.stopNote(sampler)
                    }
                })
            }
            // I only want to show a fullscreen button if the user is using a mobile device. There is no need for it on a computer.
            const fsBtn = document.createElement("BUTTON")
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                const innerContainer = document.getElementById('inner-container')
                fsBtn.innerText = "Fullscreen"
                innerContainer.appendChild(fsBtn)
                console.log("Fullscreen button added, because you are using a mobile device.");
            } else {
                console.log("Fullscreen has not been added, because you are not using a mobile device.");
            }
            // Requests fullscreen when clicked. Several versions for compatibilit reasons. 
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
            // Runs when entering or exiting fullscreen
            document.addEventListener('fullscreenchange', () => {
                const { classList } = document.getElementById('piano-svg')
                classList.contains('fs-screen-piano') ? classList.remove('fs-screen-piano') : classList.add('fs-screen-piano')
            }, false);
        }

        // Helper function used when adding eventlisteners.
        function findMatchingKey(rects) {
            for (const key of pianoKeys) {
                if (rects.dataset.note === key.note) {
                    return key
                }
            }
        }

        const kbBtn = document.getElementById('keybindings-btn')
        const kbDiv = document.getElementById('keybindings-div')

        // This toggles the visibility of the keybindings.
        kbBtn.addEventListener('click', () => {
            kbBtn.classList.toggle('clicked')
            kbDiv.classList.toggle('hidden')
        })

    };
    script.src = "https://unpkg.com/tone@14.7.77/build/Tone.js";
    document.body.appendChild(script);
})