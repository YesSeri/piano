
let audioC = document.querySelector('#audio-c');
let audioSharpC = document.querySelector('#audio-sharp-d');
let audioD = document.querySelector('#audio-d');
let audioSharpD = document.querySelector('#audio-sharp-d');
let audioE = document.querySelector('#audio-e');
const divC = document.getElementById('keyC')
const divSharpC = document.getElementById('keySharpC')
const divD = document.getElementById('keyD')
const divSharpD = document.getElementById('keySharpD')
const divE = document.getElementById('keyE')
class WhitePianoKey {
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
            const id = e.target.id
            const note = translation[id]
            console.log(note);

            // playNote(note)
        })
        this.div.addEventListener("mouseup", (e) => {
            // this.stopNote()
        })

    }

}
const keyC = new WhitePianoKey(divC, audioC, 's')
const keyD = new WhitePianoKey(divD, audioD, 'd')
// const keySharpD = new BlackPianoKey(divSharpD, audioSharpD, 'r')
const keyE = new WhitePianoKey(divE, audioE, 'f')
const translation = {
    c: { audio: audioC, key: keyC },
    d: { audio: audioD, key: keyD },
    e: { audio: audioE, key: keyE },
}


function playNote() {
    clearTimeout(timer)
    audio.volume = 1
    audio.currentTime = 0
    this.audio.play();
}
function stopNote() {
    audFade(audio)
}
function audFade(audio, note) {
    if (audio.volume > 0) {
        const v = audio.volume - 0.05
        const newVol = v >= 0 ? v : 0
        audio.volume = newVol
        timer = setTimeout(() => this.audFade(audio), 10)
    }
}

// window.addEventListener("keydown", (e) => {
    // If you press one key, D for example while pressing F, if you release D, then F event will have repeat == false again. That is why we need the k.pressed variable.
    // if (e.repeat) {
    //     return
    // }
    // for (key in pianoKeys) {
    //     const k = pianoKeys[key]
    //     if (e.key === k.shortcut) {
    //         if (k.pressed !== true) {
    //             console.log(k);
    //             k.playNote()
    //         }
    //         k.pressed = true
    //     }
    // }
// })
// window.addEventListener("keyup", (e) => {
    // for (k in pianoKeys) {
    //     const k = pianoKeys[key]
    //     if (e.key === k.shortcut) {
    //         k.pressed = false
    //         k.stopNote()
    //     }
    // }
// })