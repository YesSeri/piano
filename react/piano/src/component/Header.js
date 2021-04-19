import React from 'react'
import { ReactComponent as GrandPiano } from '../assets/grand-piano.svg'

const Header = () => {
    console.log(GrandPiano);
    return (
        <div className="header__bg">
            <div className="header">
                <div className="header__paneLeft">
                    <h2>Play the piano</h2>
                    <p>Your site for playing piano online.
                    Use the piano with keyboard, touch or mouse.</p>
                </div>
                <div className="header__paneRight">
                    <GrandPiano fill='white'></GrandPiano>
                </div>
            </div>
        </div >
    )
}

export default Header
