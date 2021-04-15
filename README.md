# Online Piano

This is an online piano. I made it for practice purposes, but I might integrate it later into [operadocs](operadocs.com).

You can see the piano [here](https://online-piano.herokuapp.com/)

## Description

This piano can be played with the keyboard or with the mouse.

<table>
  <tr>
    <th>Note</th> <td>C</td> <td>C#</td> <td>D</td> <td>D#</td> <td>E</td> <td>F</td> 
    <td>F#</td> <td>G</td> <td>G#</td> <td>A</td> <td>A#</td> <td>H</td> <td>C</td>
  </tr>
  <tr>
    <th>Keybinding</th><td>A</td><td>W</td><td>S</td><td>E</td> <td>D</td> <td>F</td> 
    <td>T</td> <td>G</td> <td>Y</td> <td>H</td> <td>U</td> <td>J</td> <td>K</td>
  </tr>
</table>
<br>

## Future plans

- [ ] Make site prettier
- [x] Create touch support
    - [x] Has been improved, but is not perfect yet.
    - [x] Android support
    - [ ] iPhone support
- [x] Make piano size responsive
- [ ] Buy a domain

## Getting Started

Just `git clone https://github.com/YesSeri/piano` and use yarn start to run it. 

Run `parcel index.html` in the static folder, and `yarn start` in the main folder. Now you can go to `localhost:3000` and see live updates.

Install parcel with `npm install -g parcel`.

For production run `parcel build index.html` in the static folder.

## Important remarks

To build for github pages we need to use `parcel build index.html --public-url https://yesseri.github.io/piano/`. If we don't all the css will look at `url/style.css` instead of `url/piano/style.css`. To push only the dist folder to the branch gh-pages use `git subtree push --prefix static/dist/ origin gh-pages`

## Technologies

* [NodeJS](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [ToneJS](https://tonejs.github.io/)
* [Parcel](https://parceljs.org/)
