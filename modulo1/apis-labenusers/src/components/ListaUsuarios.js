import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class ListaUsuarios extends React.Component {
    state = {
        usuarios: [],
        novosUsuarios: [],
        id: ""
        
    }
    deletarUsuario = (id) => {
        const request = axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "Michelle-Louzada-Jackson"
                }
            }

        );
        request
        .then((resposta) => {
            alert(`Usuario deletado com sucesso!`)
            this.pegarUsuarios()
        })
        .catch((erro) => {
            alert(`Usuario não deletado, ${erro}`)
        })
    }

    pegarUsuarios = () => {
        const request = axios.get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
              headers: {
                  Authorization: "Michelle-Louzada-Jackson"
              }
          }
        );
        request
        .then((resposta) => {
            this.setState({usuarios: resposta.data})
            
        })
        .catch((erro) => {
            console.log(erro)
        })
    };

    componentDidMount() {
        this.pegarUsuarios()
    }
    render(){
        return(
            <div>
                <h1>Usuarios</h1>
                {this.state.usuarios.map((item) => {
                    return (
                    <div>
                        <p key={item.id}>{item.name}</p>
                        <button onClick={() => { if (window.confirm(`Tem certeza de que deseja deletar ${item.name}?`)) this.deletarUsuario(item.id) }}>Deletar</button>
                    </div>
                    ) 
                })}
                <button onClick={this.props.onClickCriar}>Voltar</button>
                
            </div>
        )
    }
}

export default ListaUsuarios;