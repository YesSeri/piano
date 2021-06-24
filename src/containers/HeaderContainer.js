import React from 'react'
import Header from '../component/header'
import { ReactComponent as GrandPiano } from '../assets/grand-piano.svg'

const HeaderContainer = () => {
  return (
    <Header.Background>
      <Header>
        <Header.Pane>
          <Header.Text>
            <h2>Play the piano</h2>
            <p>Your site for playing piano online. Use the piano with keyboard, touch or mouse.</p>
          </Header.Text>
        </Header.Pane>
        <Header.Pane>
          <GrandPiano />
        </Header.Pane>
      </Header>
    </Header.Background>
  )
}

export default HeaderContainer
