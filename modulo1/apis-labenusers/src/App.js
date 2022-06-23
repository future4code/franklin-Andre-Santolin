import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import ListaUsuarios from './components/ListaUsuarios'
import CriarUsuario from './components/CriarUsuario'

const TelaToda = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  padding: 5px;
  width: 350px;
`

class App extends React.Component {
  state = {
    listaUsuarios: false,
    criarUsuario: true,
  }

  onClickUsuarios = () => {
    this.setState({
      listaUsuarios: true,
      criarUsuario: !this.state.criarUsuario
    })
  }
  onClickCriar = () => {
    this.setState({
      listaUsuarios: !true,
      criarUsuario: !this.state.criarUsuario
    })
  }
  

  render(){
    const paginaUsuarios = () => {
      if(this.state.criarUsuario){
        return <CriarUsuario onClickUsuarios={this.onClickUsuarios} />
      }
       if (this.state.listaUsuarios){
        return <ListaUsuarios onClickCriar={this.onClickCriar} />
    }
  }
    return (
      <TelaToda>
      {paginaUsuarios()}
      </TelaToda>
    )
  }
}

export default App;



