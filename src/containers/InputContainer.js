import React from 'react'

const InputContainer = ({ setLow, setHigh }) => {
    const handleLowChange = (e) => {
        console.log(e.target.value);
        setLow(e.target.value)
    }
    const handleHighChange = (e) => {
        console.log(e.target.value);
        setHigh(e.target.value)
    }
    return (
        <div className="input-container">
            <div>
                <label htmlFor="low">Lowest Note</label>
                <select onChange={handleLowChange} id="low" name="low">
                    <option value="C2">C2</option>
                    <option value="D2">D2</option>
                    <option value="E2">E2</option>
                    <option value="F2">F2</option>
                    <option value="G2">G2</option>
                    <option value="A2">A2</option>
                    <option value="B2">B2</option>
                    <option value="C3">C3</option>
                </select>
            </div>
            <div>
                <label htmlFor="high">Highest Note</label>
                <select onChange={handleHighChange} id="high" name="high">
                    <option value="C3">C3</option>
                    <option value="D3">D3</option>
                    <option value="E3">E3</option>
                    <option value="F3">F3</option>
                    <option value="G3">G3</option>
                    <option value="A3">A3</option>
                    <option value="B3">B3</option>
                    <option value="C4">C4</option>
                </select>
            </div>
        </div>)
}

export default InputContainer
