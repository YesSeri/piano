import React, { useState } from 'react'
import Inputs from "../component/inputs";
import getTranslation from '../helper/getTranslation'
import styled from 'styled-components/macro'

const translation = getTranslation('G1', 'G4').map(el => el.note).filter(el => !el.includes('#')); // This gets the complete note list of notes ordered by pitch height, which I use for turning a number value into a note.

const InputContainer = ({ setLowSlider, setHighSlider, showNotenames, setShowNotenames, showKeybindings, setShowKeybindings, children }) => {
    const lowStorage = parseInt(localStorage.getItem('lowSliderValue'))
    const highStorage = parseInt(localStorage.getItem('highSliderValue'))
    const [lowValue, setLowValue] = useState((lowStorage > 0 && lowStorage < translation.length - 1 && lowStorage < highStorage) || !lowStorage ? lowStorage : 3)
    const [highValue, setHighValue] = useState((highStorage > 0 && highStorage < translation.length - 1 && highStorage > lowStorage) || !highStorage ? highStorage : 10)
    const [open, setOpen] = useState(false);
    function setValues(setSlider, setValue, localStorageKey, value) {
        localStorage.setItem(localStorageKey, value)
        if (setValue != null) {
            setValue(parseInt(value))
        }
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
    function handleKeybinding(e) {
        setShowKeybindings(!showKeybindings)
    }
    function handleNotename(e) {
        setShowNotenames(!showNotenames)
    }
    console.log(translation)
    const InputForm = () => (
        <Inputs>
            <Inputs.Container>
                <Inputs.Checkbox label="Show Keybindings" checked={showKeybindings} onChange={handleKeybinding} />
                <Inputs.Checkbox label="Show Note Names" checked={showNotenames} onChange={handleNotename} />
            </Inputs.Container>
            <Inputs.Container>
                <Inputs.Label for={"low"}>Lowest Note</Inputs.Label>
                <Inputs.Dropdown options={translation} id={'low'} onChange={handleLowChange} value={lowValue} />
            </Inputs.Container>
            <Inputs.Container>
                <Inputs.Label for={"high"}>Highest Note</Inputs.Label>
                <Inputs.Dropdown options={translation} id={'high'} onChange={handleHighChange} value={highValue} />
            </Inputs.Container>
        </Inputs>)

    return (
        <div>
            {open ?
                <InputForm />
                :
                null
            }
            {children}
            <Button onClick={() => setOpen(!open)}>Settings</Button>
        </div>)
}

const Button = styled.button`
    margin-top: 5px;
`

export default InputContainer
