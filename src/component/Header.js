import React from 'react'
import { ReactComponent as GrandPiano } from '../assets/grand-piano.svg'

const Header = () => {
    return (
        <div className="header__bg">
            <div className="header">
                <div className="header__pane">
                    <div className="header__pane__text">
                        <h2>Play the piano</h2>
                        <p>Your site for playing piano online.
                    Use the piano with keyboard, touch or mouse.</p>
                    </div>
                </div>
                <div className="header__pane">
                    <GrandPiano></GrandPiano>
                </div>
            </div>
        </div >
    )
}

export default Header