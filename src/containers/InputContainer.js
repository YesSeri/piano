import React, { useState } from 'react'

const sliderToNoteTranslation = [
    'G1',
    'A1',
    'B1',
    'C2',
    'D2',
    'E2',
    'F2',
    'G2',
    'A2',
    'B2',
    'C3',
    'D3',
    'E3',
    'F3',
    'G3',
    'A3',
    'B3',
    'C4',
    'D4',
    'E4',
    'F4',
    'G4',
]
const InputContainer = ({ setLowSlider, setHighSlider, setShowKeyNames, showKeyNames }) => {
    const [lowValue, setLowValue] = useState(3)
    const [highValue, setHighValue] = useState(10)
    function handleLowSliderChange({ target: { value } }) {
        const diff = highValue - lowValue
        const newDiff = highValue - value
        if (diff <= 4 && newDiff < diff) return
        setLowValue(parseInt(value))
        setLowSlider(sliderToNoteTranslation[value])
    }
    function handleHighSliderChange({ target: { value } }) {
        const diff = highValue - lowValue
        const newDiff = value - lowValue
        if (diff <= 4 && newDiff < diff) return
        setHighValue(parseInt(value))
        setHighSlider(sliderToNoteTranslation[value])
    }
    return (
        <div className="input-container">
            <div>
                <div>
                    <label htmlFor="lowSlider">Low</label>
                    <input onChange={handleLowSliderChange} id="lowSlider" type="range" min="0" max={sliderToNoteTranslation.length - 1} value={lowValue} step="1" />
                </div>
                <div>
                    <label htmlFor="highSlider">High</label>
                    <input onChange={handleHighSliderChange} id="highSlider" type="range" min="0" max={sliderToNoteTranslation.length - 1} value={highValue} step="1" />
                </div>
                <div>
                    <button onClick={() => setShowKeyNames(!showKeyNames)}>Show Info</button>
                </div>
            </div>
        </div>)
}

export default InputContainer
