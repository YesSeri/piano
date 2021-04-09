"use strict";
// The PianoKey class contains every relevant information and thing to create a piano key and play it.

import * as Tone from 'tone'
const testBtn = document.getElementById('test-btn')
const osc = new Tone.Oscillator(440, "sine").toDestination()
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
console.log(sampler);
const note = 'D2'
testBtn.addEventListener('mousedown', () => {
    sampler.triggerAttack(note)
    console.log('click')
})

testBtn.addEventListener('mouseup', () => {
    sampler.triggerRelease(note)
    console.log('rel')
})
class PianoKey {
    constructor(shortcut, audio, sharp) {
        this.audio = audio
        this.timer = null
        this.shortcut = shortcut
        this.pressed = false
        this.sharp = sharp
    }
    print() {
        console.log({ 'timer': this.timer }, { 'shortcut': this.shortcut }, { 'pressed': this.pressed }, { 'sharp': this.sharp })
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

// This is used to translate between id of key div and audio id. 
// This is only used when creating a pianoKey, because both the audio and the corresponding div gets added to the pianoKey object, so it will always be easy to find the corresponding one after that.

const pianoKeys = audios.map(aud => {
    const shortcut = aud.dataset.shortcut
    return new PianoKey(shortcut, aud, aud.className.includes('sharp'))
})

// When releasing mouse button we want to stop the last note played, not the one which the mouse is over when the button released. 
// If you move mouse after pressing key you could release pointer over a new key. It should still be the played key that gets stopped. 


const kbBtn = document.getElementById('keybindings-btn')
const kbDiv = document.getElementById('keybindings-div')
kbBtn.addEventListener('click', () => {
    kbDiv.classList.toggle('hidden')
})