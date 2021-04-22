import React, {useState} from 'react'

const bindings = [
    ['c', 'G1'],
    ['v', 'A1'],
    ['b', 'B1'],
    ['q', 'C2'],
    ['w', 'D2'],
    ['e', 'E2'],
    ['r', 'F2'],
    ['t', 'G2'],
    ['y', 'A2'],
    ['u', 'B2'],
    ['i', 'C3'],
    ['o', 'D3'],
    ['f', 'G#1'],
    ['g', 'A#1'],
    ['2', 'C#2'],
    ['3', 'D#2'],
    ['5', 'F#2'],
    ['6', 'G#2'],
    ['7', 'A#2'],
]

const Keybindings = ({ children, ...props }) => {
    return (
        <div className="keybinding" {...props}>
            {children}
        </div>
    )
}

Keybindings.Title = ({ children, ...props }) => (
    <h1 {...props}>{children}</h1>
)
Keybindings.Button = ({ children, state, setState, ...props }) => (
    <button onClick={setState(!state)}></button>
)
Keybindings.Pairs = ({ children, ...props }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {bindings.map(b => (
                <div key={b[0]} className="keybinding__pair">
                    <div className="keybinding__pair__key">
                        {b[0]}
                    </div>
                    <div className="keybinding__pair__note">
                        {b[1]}
                    </div>
                </div>
            ))}
            <Keybindings.Button />
        </>
    )
}

export default Keybindings
