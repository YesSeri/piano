# Online Piano

This is an online piano. I made it for practice purposes, but I might integrate it later into [operadocs](operadocs.com).

## Description

This piano can be played with the keyboard. 
| Note | Keybinding |
| ---- | :--------: |
| C    |     A      |
| C#   |     W      |
| D    |     S      |
| D#   |     E      |
| E    |     D      |
| F    |     F      |
| F#   |     T      |
| G    |     G      |
| G#   |     Y      |
| A    |     H      |
| A#   |     U      |
| H    |     J      |
| C    |     K      |


It can also be played by clicking, both on the computer and on a tablet, or phone. 

## Future plans

I want to make the keyboard more responsive. I can do this by drawing it to a canvas instead of using divs. I also need to improve the sounds. I can do that with the toneJS library, so that the sound is syntheziesed live instead of using real audio files. This repo might also help. [Repo](https://github.com/nbrosowsky/tonejs-instruments)

## Getting Started

Just `git clone https://github.com/YesSeri/piano` and use yarn start to run it. You need to have nodemon installed globally. 

### Dependencies

* NodeJS
* Express