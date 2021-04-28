import React from 'react'

const InputContainer = ({ setLargePiano, largePiano }) => {
    const handlePianoChange = () => {
        setLargePiano(!largePiano)
    }
    return (
        <div className="input-container">
            <label htmlFor="largePiano">Larger piano</label>
            <input onChange={handlePianoChange} type="checkbox" id="largePiano" checked={largePiano} />
        </div>)
}

export default InputContainer
