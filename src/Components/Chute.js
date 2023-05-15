import {useState} from 'react';
import styled from "styled-components"

export default function Chute(props){

    return (
        <Container>
            <Chutetext>Já sei a palavra!</Chutetext>
            <ChuteInput data-identifier="type-guess" placeholder="Chute uma palavra" value={props.chute}onChange={(event) => props.writeguess(event.target.value)}></ChuteInput>
            <ChuteButton data-identifier="guess-button" onClick={props.tryanswer}>Chutar</ChuteButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
`
const Chutetext = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin: 0px;
    margin-right: 10px;
`
const ChuteInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    width: 400px;
    height: 30px;
    margin-left: 15px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #39739D;
`
const ChuteButton = styled.button`
    width: 80px;
    height: 35px;
    color: #39739D;
    border-radius: 5px;	
    background-color: #E1ECF4;
    border: 1px solid #39739D;
    margin-left: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 800;
    &:hover {
        background-color: #D0E5F4;
    }
`