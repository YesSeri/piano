import React, { useState, useEffect } from 'react'
import Inputs from "../component/inputs";
import getTranslation from '../helper/getTranslation'
import styled from 'styled-components/macro'

const translation = getTranslation('G1', 'G4').map(el => el.note).filter(el => !el.includes('#')); // This gets the complete note list of notes ordered by pitch height, which I use for turning a number value into a note.

const InputContainer = ({ setLowSlider, setHighSlider, showNotenames, setShowNotenames, showKeybindings, setShowKeybindings }) => {
    // const [lowValue, setLowValue] = useState(localStorage.getItem('lowSliderValue') || 3)
    // const [highValue, setHighValue] = useState(localStorage.getItem('highSliderValue') || 10)
    const [lowValue, setLowValue] = useState(3)
    const [highValue, setHighValue] = useState(10)
    const [opened, setOpened] = useState(true);
    // useEffect(() => {
    //     setLowSlider(translation[lowValue])
    //     setHighSlider(translation[highValue])
    //     return () => {
    //     }
    // }, [highValue, lowValue, setHighSlider, setLowSlider])
    // function handleLowSliderChange({ target: { value } }) {
    //     if (isValidRange(highValue, value)) {
    //         setValues(setLowSlider, setLowValue, 'lowSliderValue', value)
    //     }
    // }
    // function handleHighSliderChange({ target: { value } }) {
    //     if (isValidRange(value, lowValue)) {
    //         setValues(setHighSlider, setHighValue, 'highSliderValue', value)
    //     }
    // }
    function setValues(setSlider, setValue, localStorageKey, value) {
        localStorage.setItem(localStorageKey, value)
        if(setValue != null){
            setValue(parseInt(value))
        }
        console.log({value}, translation[value])
        setSlider(translation[value])
    }
    // function isValidRange(newHighValue, newLowValue) {
    //     const diff = highValue - lowValue
    //     const newDiff = newHighValue - newLowValue
    //     if (diff <= 4 && newDiff < diff) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    function handleLowSliderMouseUp(e) {
        setLowValue(e.target.value)
    }
    function handleHighSliderMouseUp(e) {
        setHighValue(e.target.value)
    }
    function handleLowSliderChange(e) {
        const { value } = e.target;
        console.log(value)
        // if(value >= highValue - 3){
            // setLowValue(highValue - 4);
        // }
        setValues(setLowSlider, null, 'lowSliderValue', value)
    }
    function handleHighSliderChange(e) {
        console.log(e.target.value)
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
                onChange={handleLowSliderChange}
                type="range" min="0" max={translation.length - 1} defaultValue={lowValue} step="1" />
        </Inputs.SliderContainer>
        <Inputs.SliderContainer>
            <Inputs.Label>High</Inputs.Label>
            {/* <Inputs.Slider onChange={handleHighSliderChange} type="range" min="0" max={translation.length - 1} value={highValue} step="1" /> */}
            <Inputs.Slider
                onMouseUp={handleHighSliderMouseUp}
                onChange={handleHighSliderChange}
                type="range" min="0" max={translation.length - 1} defaultValue={highValue} step="1" />
        </Inputs.SliderContainer>
        <Inputs.Container>
            <Inputs.Checkbox label="Show Keybindings" checked={showKeybindings} onChange={handleKeybinding} />
            <Inputs.Checkbox label="Show Note Names" checked={showNotenames} onChange={handleNotename} />
        </Inputs.Container>
    </Inputs>)

    return (
        <div>
            <Button onClick={() => setOpened(!opened)}>Settings</Button>
            {opened ?
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
