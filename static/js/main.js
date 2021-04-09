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
class PianoKey {
    static sampler = new Tone.Sampler({
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
    constructor(note, shortcut) {
        this.note = note
        this.shortcut = shortcut
    }
    print() {
        // console.log({ 'timer': this.timer }, { 'shortcut': this.shortcut }, { 'pressed': this.pressed }, { 'sharp': this.sharp })
    }
    // Clears timeout to stop the fading out, and starts the sound from the beginning with max volume.
    playNote() {
        PianoKey.sampler.triggerAttack(this.note)
    }
    stopNote() {
        PianoKey.sampler.triggerRelease(this.note)
    }
}

// Creates two arrays which will be used to create pianoKey objects that we will use in our piano. 

// This is used to translate between id of key div and audio id. 
// This is only used when creating a pianoKey, because both the audio and the corresponding div gets added to the pianoKey object, so it will always be easy to find the corresponding one after that.
const pianoKeys = [
    new PianoKey('C2', "a"),
    new PianoKey("C#2", "w"),
    new PianoKey('D2', "s"),
    new PianoKey("D#2", "e"),
    new PianoKey('E2', "d"),
    new PianoKey('F2', "f"),
    new PianoKey("F#2", "t"),
    new PianoKey('G2', "g"),
    new PianoKey("G#2", "y"),
    new PianoKey('A2', "h"),
    new PianoKey("A#2", "u"),
    new PianoKey('B2', "j"),
    new PianoKey('C3', "k"),
]

document.addEventListener('keydown', (e) => {
    if (e.repeat === true) {
        return
    }
    pianoKeys.forEach(k => {
        if (e.key === k.shortcut) {
            console.log(k);
            k.playNote()
        }
    })

})
document.addEventListener('keyup', (e) => {
    pianoKeys.forEach(k => {
        if (e.key === k.shortcut) {
            k.stopNote()
        }
    })
})


// When releasing mouse button we want to stop the last note played, not the one which the mouse is over when the button released. 
// If you move mouse after pressing key you could release pointer over a new key. It should still be the played key that gets stopped. 


const kbBtn = document.getElementById('keybindings-btn')
const kbDiv = document.getElementById('keybindings-div')
kbBtn.addEventListener('click', () => {
    kbDiv.classList.toggle('hidden')
})