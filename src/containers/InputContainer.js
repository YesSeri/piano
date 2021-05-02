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
    const [lowValue, setLowValue] = useState(localStorage.getItem('lowSliderValue') || 3)
    const [highValue, setHighValue] = useState(localStorage.getItem('highSliderValue') || 10)
    React.useEffect(() => {
        console.log('useeffect');
        setLowSlider(sliderToNoteTranslation[lowValue])
        setHighSlider(sliderToNoteTranslation[highValue])
        return () => {
        }
    }, [highValue, lowValue, setHighSlider, setLowSlider])
    function handleLowSliderChange({ target: { value } }) {
        if (isValid(highValue, value)) {
            localStorage.setItem('lowSliderValue', value)
            setLowValue(parseInt(value))
            setLowSlider(sliderToNoteTranslation[value])
        }

    }
    function handleHighSliderChange({ target: { value } }) {
        if (isValid(value, lowValue)) {
            localStorage.setItem('highSliderValue', value)
            setHighValue(parseInt(value))
            setHighSlider(sliderToNoteTranslation[value])
        }
    }
    function isValid(newHighValue, newLowValue) {
        const diff = highValue - lowValue
        const newDiff = newHighValue - newLowValue
        if (diff <= 4 && newDiff < diff) {
            return false;
        } else {
            return true;
        }
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
