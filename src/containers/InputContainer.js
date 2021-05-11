import React, { useState, useEffect } from 'react'
import Inputs from "../component/inputs";
import getTranslation from '../helper/getTranslation'
import { Modal } from '@mantine/core';

const translation = getTranslation('G1', 'G4').map(el => el.note).filter(el => !el.includes('#')); // This gets the complete note list of notes ordered by pitch height, which I use for turning a number value into a note.

const InputContainer = ({ setLowSlider, setHighSlider, showNotenames, setShowNotenames, showKeybindings, setShowKeybindings }) => {
    const [lowValue, setLowValue] = useState(localStorage.getItem('lowSliderValue') || 3)
    const [highValue, setHighValue] = useState(localStorage.getItem('highSliderValue') || 10)
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        setLowSlider(translation[lowValue])
        setHighSlider(translation[highValue])
        return () => {
        }
    }, [highValue, lowValue, setHighSlider, setLowSlider])
    function handleLowSliderChange({ target: { value } }) {
        if (isValidRange(highValue, value)) {
            setValues(setLowSlider, setLowValue, 'lowSliderValue', value)
        }

    }
    function handleHighSliderChange({ target: { value } }) {
        if (isValidRange(value, lowValue)) {
            setValues(setHighSlider, setHighValue, 'highSliderValue', value)
        }
    }
    function setValues(setSlider, setValue, localStorageKey, value) {
        localStorage.setItem(localStorageKey, value)
        setValue(parseInt(value))
        setSlider(translation[value])
    }
    function isValidRange(newHighValue, newLowValue) {
        const diff = highValue - lowValue
        const newDiff = newHighValue - newLowValue
        if (diff <= 4 && newDiff < diff) {
            return false;
        } else {
            return true;
        }
    }
    function handleKeybinding(e) {
        setShowKeybindings(!showKeybindings)
    }
    function handleNotename(e) {
        setShowNotenames(!showNotenames)
    }
    return (
        <div className="inputs">
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Piano Settings"
            >
                <Inputs>
                    <Inputs.Divider />
                    <Inputs.Container>
                        <Inputs.Label>Low</Inputs.Label>
                        <Inputs.Slider onChange={handleLowSliderChange} type="range" min="0" max={translation.length - 1} value={lowValue} step="1" />
                    </Inputs.Container>
                    <Inputs.Container>
                        <Inputs.Label>High</Inputs.Label>
                        <Inputs.Slider onChange={handleHighSliderChange} type="range" min="0" max={translation.length - 1} value={highValue} step="1" />
                    </Inputs.Container>
                    <Inputs.Divider />
                    <Inputs.Container>
                        <Inputs.Checkbox label="Show Keybindings" checked={showKeybindings} onChange={handleKeybinding} />
                        <Inputs.Checkbox label="Show Note Names" checked={showNotenames} onChange={handleNotename} />
                    </Inputs.Container>
                </Inputs>
            </Modal>
            <button onClick={() => setOpened(true)}>Settings</button>
        </div>)
}

export default InputContainer
