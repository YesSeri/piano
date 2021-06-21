import React, { useEffect, useState } from 'react'
import Inputs from "../component/inputs";
import getTranslation from '../helper/getTranslation'
const translation = getTranslation('G1', 'G4').map(el => el.note).filter(el => !el.includes('#')); // This gets the complete note list of notes ordered by pitch height, which I use for turning a number value into a note.

const InputContainer = ({ setLowSlider, setHighSlider, showNotenames, setShowNotenames, showKeybindings, setShowKeybindings, children, ...restProps }) => {
    const lowStorage = parseInt(localStorage.getItem('lowSlider'))
    const highStorage = parseInt(localStorage.getItem('highSlider'))
    const [lowValue, setLowValue] = useState(lowStorage || 3)
    const [highValue, setHighValue] = useState(highStorage || 10)

    useEffect(() => {
        setValues(setLowSlider, setLowValue, 'lowSlider', lowValue)
        setValues(setHighSlider, setHighValue, 'highSlider', highValue)
    }, [highValue, lowValue, setHighSlider, setLowSlider])
    function setValues(setSlider, setValue, localStorageKey, value) {
        localStorage.setItem(localStorageKey, value)
        setValue(value)
        setSlider(translation[value])
    }
    function handleLowChange(e) {
        const value = parseInt(e.target.value)
        if(value > highValue) return
        setValues(setLowSlider, setLowValue, 'lowSlider', value)
    }
    function handleHighChange(e) {
        const value = parseInt(e.target.value)
        if(value < lowValue) return
        setValues(setHighSlider, setHighValue, 'highSlider', value)
    }

    return (
        <Inputs {...restProps}>
            {children}
            <Inputs.Container>
                <Inputs.Label htmlFor={"low"}>Lowest Note</Inputs.Label>
                <Inputs.Dropdown options={translation} id={'low'} onChange={handleLowChange} value={lowValue} />
            </Inputs.Container>
            <Inputs.Container>
                <Inputs.Label htmlFor={"high"}>Highest Note</Inputs.Label>
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
