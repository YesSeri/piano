let audioC = document.querySelector('#audio-c');
let audioE = document.querySelector('#audio-e');
const soundDiv = document.querySelector('#sound-div')
let timers = [];
audioC.loop = true

soundDiv.addEventListener("mousedown", (e) => {
    playNote(audioC)
})
soundDiv.addEventListener("mouseup", (e) => {
    stopNote(audioC)
})

window.addEventListener("keydown", (e) => {
    console.log(e.repeat);
    if (e.key === 't' && !e.repeat) {
        playNote(audioC)
    }
})
window.addEventListener("keyup", (e) => {
    if (e.key === 't') {
        stopNote(audioC)
    }
})
function playNote(note) {
    console.log(timers);
    timers.forEach(timer => {
        clearTimeout(timer)
    })
    note.play();
    note.volume = 1
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
    if (myAudio.volume > 0.3) {
        myAudio.volume -= .2;
        timers.push(setTimeout(() => aud_fade(myAudio), 20));
    } else{
        myAudio.pause()
        myAudio.volume = 1
    }
}