import React from 'react';
import "./CardPequeno.css" 


function CardPequeno(props) {
    return(
        <div className="card-pequeno">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.titulo }</h4>
                <p>{ props.conteudo }</p>
            </div>
        </div>
    )
}

export default CardPequeno; 
