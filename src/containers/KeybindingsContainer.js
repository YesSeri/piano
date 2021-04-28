import React from 'react'
import Keybindings from '../component/Keybindings'

const KeybindingsContainer = () => {
    return (
        <div>
            <Keybindings>
                <Keybindings.Button>Show Keybindings</Keybindings.Button>
                <Keybindings.Pairs />
            </Keybindings>
        </div>
    )
}

export default KeybindingsContainer
