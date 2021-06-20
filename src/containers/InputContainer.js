import React, { useState, useEffect } from 'react'
import Inputs from "../component/inputs";
import getTranslation from '../helper/getTranslation'
import styled from 'styled-components/macro'

const translation = getTranslation('G1', 'G4').map(el => el.note).filter(el => !el.includes('#')); // This gets the complete note list of notes ordered by pitch height, which I use for turning a number value into a note.

const InputContainer = ({ setLowSlider, setHighSlider, showNotenames, setShowNotenames, showKeybindings, setShowKeybindings }) => {
    const lowStorage = parseInt(localStorage.getItem('lowSliderValue'))
    const highStorage = parseInt(localStorage.getItem('highSliderValue'))
    const [lowValue, setLowValue] = useState(lowStorage > 0 && lowStorage < translation.length - 1 && lowStorage < highStorage ? lowStorage : 3)
    const [highValue, setHighValue] = useState(highStorage > 0 && highStorage < translation.length - 1 && highStorage > lowStorage ? highStorage : 10)
    const [open, setOpen] = useState(false);
    function setValues(setSlider, setValue, localStorageKey, value) {
        localStorage.setItem(localStorageKey, value)
        if (setValue != null) {
            setValue(parseInt(value))
        }
        setSlider(translation[value])
    }
    function handleLowSliderMouseUp(e) {
        const value = parseInt(e.target.value)
        setValues(setLowSlider, setLowValue, 'lowSliderValue', value)
    }
    function handleHighSliderMouseUp(e) {
        const value = parseInt(e.target.value)
        setValues(setHighSlider, setHighValue, 'highSliderValue', value)
    }
    function handleKeybinding(e) {
        setShowKeybindings(!showKeybindings)
    }
    function handleNotename(e) {
        setShowNotenames(!showNotenames)
    }
    const InputForm = () => (<Inputs>
        <Inputs.SliderContainer>
            <Inputs.Label>Low</Inputs.Label>
            {/* <Inputs.Slider onChange={handleLowSliderChange} type="range" min="0" max={translation.length - 1} value={lowValue} step="1" /> */}
            <Inputs.Slider
                onMouseUp={handleLowSliderMouseUp}
                type="range" min="0" max={highValue - 5} defaultValue={lowValue} step="1" />
        </Inputs.SliderContainer>
        <Inputs.SliderContainer>
            <Inputs.Label>High</Inputs.Label>
            {/* <Inputs.Slider onChange={handleHighSliderChange} type="range" min="0" max={translation.length - 1} value={highValue} step="1" /> */}
            <Inputs.Slider
                onMouseUp={handleHighSliderMouseUp}
                type="range" min={lowValue + 5} max={translation.length - 1} defaultValue={highValue} step="1" />
        </Inputs.SliderContainer>
        <Inputs.Container>
            <Inputs.Checkbox label="Show Keybindings" checked={showKeybindings} onChange={handleKeybinding} />
            <Inputs.Checkbox label="Show Note Names" checked={showNotenames} onChange={handleNotename} />
        </Inputs.Container>
    </Inputs>)

    return (
        <div>
            <Button onClick={() => setOpen(!open)}>Settings</Button>
            {open ?
                <InputForm />
                :
                null
            }
        </div>)
}

const Button = styled.button`
    margin-top: 5px;
`

export default InputContainer
