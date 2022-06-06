import React from 'react';
import styled from "styled-components"

const MensagemTela = styled.div`
    margin: 10px 4px 10px 4px;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: ${props => {
        if (props.tipo === "eu") {
        return "#DDF7C8"
        } else if (props.tipo === "outro") {
        return "#ffffff"
        }              
    }};
    
    align-self: ${props => {
        if (props.tipo === "eu") {
          return "flex-end"
        } else if (props.tipo === "outro") {
          return "flex-start"
        }               
    }};
`
const ConteudoMensagem = styled.div`
    margin-top: 10px;
`

class Mensagem extends React.Component {
    render() {
        const nome = this.props.valorNomeUsuario

        if (nome === "eu") {
            return (
                <MensagemTela tipo={"eu"}>
                    {this.props.valorMensagem}
                </MensagemTela>
            )
        } else {
            return (
                <MensagemTela tipo={"outro"}>
                    <div><strong>{this.props.valorNomeUsuario}</strong></div> 
                    <ConteudoMensagem>{this.props.valorMensagem}</ConteudoMensagem>
                </MensagemTela>
            )
        }

    }
}

export default Mensagem