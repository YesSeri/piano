import React from 'react'
import svg from '../assets/painted-piano.svg'

const Header = () => {
    return (
        <div className="header__bg">
        <div className="header">
            <div className="header__pane">
                Your site for playing piano online.
                Use the piano with keyboard, touch or mouse.
            </div>
            <div className="header__pane">
                <img src={svg}></img>
            </div>
        </div>
        </div >
    )
}

export default Header
