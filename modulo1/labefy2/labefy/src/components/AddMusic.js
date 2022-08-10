import React from 'react';
import axios from 'axios'
import { axiosConfig } from "../constants/axiosConstants";
import styled from 'styled-components'

const InputPersonalizade = styled.input`
    background-color: #F1F1F3;
  border: none;
  width: ${props => props.width};
  height: 40px;
  outline: none;
  margin: 10px 2px 10px 3px;
  border-radius: 5px;
  width: 220px;
  align-self: center;
  @media(max-width: 380px){
       width: 100px;
    }
    
`
const ButtonPersonalizade = styled.button`
    background-color: #696969;
    margin: 20px 4px 10px 3px;
    text-decoration: none;    
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    width: 100px;
    outline: none;
    align-self: center;
    flex-direction: row;
    &:hover {
        background-color: #9C9C9C;
    }

`

export default class AddMusic extends React.Component {
    state = {
        nameMusic: "",
        nameArtist: "",
        url: "",
    }
    createMusic = (id) => {
        const body = {
            name: this.state.nameMusic,
            artist: this.state.nameArtist,
            url: this.state.url
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        body, axiosConfig )
        .then((response) =>{
            alert(`Música adicionada com sucesso!`)
            
        })
        .catch((error) => {
            alert(`Ocorreu um erro. Por favor verifique se preencheu todos os dados para criação da música!`)
        })
    }
    onChangeNameArtist = (event) =>{
        this.setState({
            nameArtist: event.target.value
        })
    }
    onChangeNameMusic = (event) =>{
        this.setState({
            nameMusic: event.target.value
        })
    }
    onChangeUrl = (event) =>{
        this.setState({
            url: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <InputPersonalizade onChange={this.onChangeNameArtist} placeholder="Nome do Artista"/>
                <InputPersonalizade onChange={this.onChangeNameMusic} placeholder="Nome da Música"/>
                <InputPersonalizade onChange={this.onChangeUrl} placeholder="URL da Música"/>
                <ButtonPersonalizade onClick={() => this.createMusic(this.props.idPlaylist)}>Adicionar</ButtonPersonalizade>
            </div>
        )
    }
}