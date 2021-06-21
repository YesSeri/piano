import React, { useEffect, useState } from 'react'
import Inputs from "../component/inputs";
import getTranslation from '../helper/getTranslation'
const translation = getTranslation('G1', 'G4').map(el => el.note).filter(el => !el.includes('#')); // This gets the complete note list of notes ordered by pitch height, which I use for turning a number value into a note.

const InputContainer = ({ setLowSlider, setHighSlider, showNotenames, setShowNotenames, showKeybindings, setShowKeybindings, children, ...restProps }) => {
    const lowStorage = parseInt(localStorage.getItem('lowSliderValue'))
    const highStorage = parseInt(localStorage.getItem('highSliderValue'))
    const [lowValue, setLowValue] = useState((lowStorage > 0 && lowStorage < translation.length - 1 && lowStorage < highStorage) || !lowStorage ? lowStorage : 3)
    const [highValue, setHighValue] = useState((highStorage > 0 && highStorage < translation.length - 1 && highStorage > lowStorage) || !highStorage ? highStorage : 10)

    useEffect(() => {
        setValues(setLowSlider, setLowValue, 'lowSliderValue', lowValue)
        setValues(setHighSlider, setHighValue, 'highSliderValue', highValue)
    }, [highValue, lowValue, setHighSlider, setLowSlider])
    function setValues(setSlider, setValue, localStorageKey, value) {
        localStorage.setItem(localStorageKey, value)
        setValue(value)
        setSlider(translation[value])
    }
    function handleLowChange(e) {
        const value = parseInt(e.target.value)
        setValues(setLowSlider, setLowValue, 'lowSliderValue', value)
    }
    function handleHighChange(e) {
        const value = parseInt(e.target.value)
        setValues(setHighSlider, setHighValue, 'highSliderValue', value)
    }

    return (
        <Inputs {...restProps}>
            {children}
            <Inputs.Container>
                <Inputs.Label for={"low"}>Lowest Note</Inputs.Label>
                <Inputs.Dropdown options={translation} id={'low'} onChange={handleLowChange} value={lowValue} />
            </Inputs.Container>
            <Inputs.Container>
                <Inputs.Label for={"high"}>Highest Note</Inputs.Label>
                <Inputs.Dropdown options={translation} id={'high'} onChange={handleHighChange} value={highValue} />
            </Inputs.Container>
            <Inputs.Container>
                <Inputs.Checkbox label="Show Keybindings" checked={showKeybindings} onChange={() => setShowKeybindings(!showKeybindings)} />
                <Inputs.Checkbox label="Show Note Names" checked={showNotenames} onChange={() => setShowNotenames(!showNotenames)} />
            </Inputs.Container>
        </Inputs>
    )
}


export default InputContainer
