import React from 'react'
import styled from 'styled-components/macro'
import FullPiano from '../piano/FullPiano'
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    height: 90vh;
    max-height:300px;
    width:80%; 
    background-color: #111;
    border-radius: 0 0 10px 10px;
    margin:auto;
    @media screen and (max-width: 1200px) {
        width: 100%;
        border-radius: 10px 10px 10px 10px;
    }
    @media screen and (max-width: 600px) {
        border: solid 1px white;
        max-height:100px;
    }
`
const Text = styled.span`
    background: black;
    color:white;
`
const WaitScreen = ({ setClicked, children, ...restProps }) => {
    const handleClick = () => {
        setClicked(true)
    }
    return <FullPiano></FullPiano>
}

export default WaitScreen