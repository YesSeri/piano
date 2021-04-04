let audioC = document.querySelector('#audio-c');
let audioSharpD = document.querySelector('#audio-sharp-d');
let audioD = document.querySelector('#audio-d');
let audioE = document.querySelector('#audio-e');
const divC = document.querySelector('#c-div')
const divD = document.querySelector('#d-div')
const divSharpD = document.querySelector('#d-sharp-div')
const divE = document.querySelector('#e-div')

class PianoKey {
    constructor(div, audio, shortcut) {
        this.div = div
        this.audio = audio
        this.timer = null
        this.shortcut = shortcut
        this.pressed = false
        this.initEventListeners()
    }
    print() {
        console.log(this.div, this.audio, this.timer)
    }
    initEventListeners() {
        this.div.addEventListener("mousedown", (e) => {
            console.log(this.div.innerHTML);
            this.playNote()
        })
        this.div.addEventListener("mouseup", (e) => {
            this.stopNote()
        })

    }
    playNote() {
        clearTimeout(this.timer)
        this.audio.volume = 1
        this.audio.currentTime = 0
        // this.audio.play();
    }
    stopNote() {
        this.audFade(this.audio)
    }
    audFade(audio) {
        if (audio.volume > 0) {
            const v = audio.volume - 0.05
            const newVol = v >= 0 ? v : 0
            audio.volume = newVol
            this.timer = setTimeout(() => this.audFade(audio), 10)
        }
    }
}
const keyC = new PianoKey(divC, audioC, 's')
const keyD = new PianoKey(divD, audioD, 'd')
const keySharpD = new PianoKey(divSharpD, audioSharpD, 'e')
const keyE = new PianoKey(divE, audioE, 'f')
const pianoKeys = [keyC, keyD, keySharpD, keyE]

window.addEventListener("keydown", (e) => {
    // If you press one key, D for example while pressing F, if you release D, then F event will have repeat == false again. That is why we need the k.pressed variable.
    if (e.repeat) {
        return
    }
    for (k of pianoKeys) {
        if (e.key === k.shortcut) {
            if (k.pressed !== true) {
                k.playNote()
            }
            k.pressed = true
        }
    }
})
window.addEventListener("keyup", (e) => {
    for (k of pianoKeys) {
        if (e.key === k.shortcut) {
            k.pressed = false
            k.stopNote()
        }
    }
})