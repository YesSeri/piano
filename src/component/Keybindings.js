import React, { useState, useContext } from 'react'

const bindings = [
    ['z', 'G1'],
    ['x', 'A1'],
    ['c', 'B1'],
    ['v', 'C2'],
    ['b', 'D2'],
    ['n', 'E2'],
    ['m', 'F2'],
    [',', 'G2'],
    ['.', 'A2'],
    ['/', 'B2'],
    ['s', 'G#1'],
    ['d', 'A#1'],
    ['g', 'C#2'],
    ['h', 'D#2'],
    ['k', 'F#2'],
    ['l', 'G#2'],
    [';', 'A#2'],
    ['q', 'C3'],
    ['w', 'D3'],
    ['e', 'E3'],
    ['r', 'F3'],
    ['t', 'G3'],
    ['y', 'A3'],
    ['u', 'B3'],
    ['i', 'C4'],
    ['o', 'D4'],
    ['p', 'E4'],
    ['[', 'F4'],
    [']', 'G4'],
    ['2', 'C#3'],
    ['3', 'D#3'],
    ['5', 'F#3'],
    ['6', 'G#3'],
    ['7', 'A#3'],
    ['9', 'C#4'],
    ['0', 'D#4'],
    ['=', 'F#4'],
]
const KeybindContext = React.createContext({ visible: false, setVisible: () => { } })

const Keybindings = ({ children, ...props }) => {
    const [visible, setVisible] = useState(false)
    return (
        <KeybindContext.Provider value={{ visible: visible, setVisible: setVisible }}>
            <div {...props}>
                {children}
            </div>
        </KeybindContext.Provider>
    )
}
Keybindings.Title = function KeybindingsTitle({ children, ...props }) {
    return <h1 {...props}>{children}</h1>
}
Keybindings.Button = function KeybindingsButton({ children, ...props }) {
    const { visible, setVisible } = useContext(KeybindContext)
    const handleClick = () => {
        setVisible(!visible)
    }

    return <button onClick={handleClick}>{children}</button>
}
Keybindings.Pairs = function KeybindingsPair({ children, ...props }) {
    const { visible } = useContext(KeybindContext)
    return (
        <>
            <div className={`keybinding ${visible ? '' : 'hidden'}`} {...props}>
                {bindings.map(b => (
                    <div key={b[0]} className="keybinding__pair">
                        <div className="keybinding__pair__key">
                            {b[0]}
                        </div>
                        <div className="keybinding__pair__note">
                            {b[1]}
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Keybindings
