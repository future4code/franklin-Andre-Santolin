import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const Bigcard=styled.div`
 
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

    
`

const Bigcardimg=styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Bigcardh4=styled.h4`
    margin-bottom: 15px;
`

const Bigcardbody=styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `


function CardGrande(props) {
    return (
        <Bigcard>
            <Bigcardimg src={ props.imagem } />
            <Bigcardbody>
                <Bigcardh4>{ props.nome }</Bigcardh4>
                <p>{ props.descricao }</p>
            </Bigcardbody>
        </Bigcard>
    )
}

export default CardGrande;