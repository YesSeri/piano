import React, { useState, useContext } from 'react'

const bindings = [
    ['c', 'G'],
    ['f', 'G♯'],
    ['v', 'A'],
    ['g', 'A♯'],
    ['b', 'B'],
    ['q', 'C'],
    ['2', 'C♯'],
    ['w', 'D'],
    ['3', 'D♯'],
    ['e', 'E'],
    ['r', 'F'],
    ['5', 'F♯'],
    ['t', 'G'],
    ['6', 'G♯'],
    ['y', 'A'],
    ['7', 'A♯'],
    ['u', 'B'],
    ['i', 'C'],
    ['o', 'D'],
    ['', ''],
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

    return <button onClick={() => { setVisible(!visible) }}>{children}</button>
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
