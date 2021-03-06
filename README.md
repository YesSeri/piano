# Pianisto

This is an online piano for playing piano in the browser. 
Works with touch, mouse or keyboard.
[Page](https://yesseri.github.io/piano)

## Deployment

To deploy this project run

I use gh-pages to use this in production for now. A dev dependency called `gh-pages` helps me deploy

```bash
  npm run deploy
```
  
## Roadmap

- [ ] Test for safari browser support
  - ToneJS library doesn't seem to support safari. Create an issue.

- [ ] Make an about page

- [x] Improve css for keybindings table
  - Probably better to remove keybindings table and just added a button that displays keybinding and note on the piano keys.

- [ ] Write unit tests

## Tech Stack

**Client:** React, [Styled Components](https://styled-components.com/), [Tone.js](https://tonejs.github.io/)

  
## Contributing

Contributions are always welcome!
  
## Authors

- [@yesseri](https://www.github.com/yesseri)
