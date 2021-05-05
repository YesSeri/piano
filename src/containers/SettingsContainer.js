import React, { useState } from 'react'
import Inputs from "../component/inputs";


const InputContainer = ({ handleHighSliderChange, handleLowSliderChange, sliderToNoteTranslation, lowValue, highValue, checked, setChecked }) => {
    return (
        <div>
            <Inputs>
                <Inputs.Container>
                    <Inputs.Label>Low</Inputs.Label>
                    <Inputs.Slider onChange={handleLowSliderChange} type="range" min="0" max={sliderToNoteTranslation.length - 1} value={lowValue} step="1" />
                </Inputs.Container>
                <Inputs.Container>
                    <Inputs.Label>High</Inputs.Label>
                    <Inputs.Slider onChange={handleHighSliderChange} type="range" min="0" max={sliderToNoteTranslation.length - 1} value={highValue} step="1" />
                </Inputs.Container>
                <Inputs.Divider variant="solid" />
                <Inputs.Checkbox label="Show Keybindings" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            </Inputs>
        </div>)
}

export default InputContainer
