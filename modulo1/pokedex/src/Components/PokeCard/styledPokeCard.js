import styled from 'styled-components'

export const DivCard = styled.div `
    display: flex;
    width: 250px;
    height: 300px;
    background-color: #e8f0f4;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    border-radius: 120px;
    :hover{
        border: 10px solid #781f40;
    border-radius: 50%;
    -webkit-filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    -webkit-transform: rotateZ(-120deg) scale(1.5);
    transform: rotateZ(-360deg) scale(1.0);
    transition: all 1s;
    border: 10px solid #eeeeee;
    }; 
`
export const DivButtons = styled.div `
    display: flex;
    justify-content: center;
    
    
`
export const ButtonLeft = styled.button`

    width: 100px;
    height: 50px;
    background-color: white;
    border: none;
    outline: none;
    color: black;
    box-shadow: 1px 1px 2px black;
    border-bottom-left-radius: 200px;
    :hover{
        background-color: red;
        color: white;
    }
    :active{
        box-shadow: none;
    }

`
export const ButtonRight = styled(ButtonLeft)`
    border-bottom-right-radius: 200px;
    border-bottom-left-radius: 0px;
`
export const PokeImage = styled.img `
    margin: auto;
    font-weight: lighter;
    width: 60%;
`
export const ColorDiv = styled.div `
width: 205px;
height: 50px;
background-color: red;
border-top-right-radius: 200px;
border-top-left-radius: 200px;
`
export const PokeName = styled.h1 `
    font-size: 1.2em;
    color: black ;
`