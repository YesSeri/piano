const soundDiv = document.querySelector('#sound-div')

let audioC = document.querySelector('#audio-c');
let audioE = document.querySelector('#audio-e');
window.addEventListener("keydown", (e) => {
    if (e.key === 'r') {
        playNote(audioC)
    }
})
window.addEventListener("keyup", (e) => {
    if (e.key === 'r') {
        stopNote(audioC)
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

function stopNote(note) {
    aud_fade(note)
}
function aud_fade(myAudio) {
    console.log(myAudio);
    if (myAudio.volume > 0) {
        myAudio.volume -= .2;
        timer = setTimeout(aud_fade, 200);
    }
}