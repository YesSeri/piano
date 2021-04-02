const soundDiv = document.querySelector('#sound-div')
console.log(soundDiv)

let audioC = document.querySelector('#audio-c');
let audioE = document.querySelector('#audio-e');
window.addEventListener("keydown", (e) => {
    console.log(e)
    if (e.key === 'r') {
        playNote(audioC)
    }
    if (e.key === 'p') {
        playNote(audioE)
    }
})
function playNote(note) {
    note.play();
    if (note.paused) {
        note.play();
    } else {
        note.currentTime = 0
        note.play();
    }
}
